'use client';

import { useState, useRef, useCallback } from 'react';
import ChatHeader from './ChatHeader';
import MessageList from './MessageList';
import ChatInput from './ChatInput';
import WelcomeScreen from './WelcomeScreen';
import BeaconRequestForm from './BeaconRequestForm';
import type { Source } from '@/types/chat';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  isEscalated?: boolean;
  sources?: Source[];
  beaconInfo?: { studentName: string; studentPhone: string };
}

type ActiveView = 'chat' | 'beacon-form';

export default function ChatContainer() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [activeView, setActiveView] = useState<ActiveView>('chat');
  const messagesRef = useRef<ChatMessage[]>([]);
  const loadingRef = useRef(false);

  // Keep refs in sync with state
  messagesRef.current = messages;
  loadingRef.current = isLoading;

  const sendMessage = useCallback(async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || loadingRef.current) return;

    const now = Date.now();
    const userMsg: ChatMessage = {
      id: `user-${now}`,
      role: 'user',
      content: trimmed,
    };

    const assistantId = `assistant-${now + 1}`;
    const assistantMsg: ChatMessage = {
      id: assistantId,
      role: 'assistant',
      content: '',
    };

    // Build API messages from current ref (avoids stale closure)
    const apiMessages = [
      ...messagesRef.current
        .filter((m) => m.content) // skip empty messages
        .map((m) => ({ role: m.role, content: m.content })),
      { role: 'user', content: trimmed },
    ];

    setMessages((prev) => [...prev, userMsg, assistantMsg]);
    setIsLoading(true);

    try {
      // Debug: message count only (no sensitive data)
      if (process.env.NODE_ENV === 'development') {
        console.log('[MIHY] Sending to /api/chat:', apiMessages.length, 'messages');
      }

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (process.env.NODE_ENV === 'development') {
        console.log('[MIHY] Response status:', res.status);
      }

      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error || `서버 오류 (${res.status})`);
      }

      // Check escalation header
      const isEscalated = res.headers.get('X-Escalated') === 'true';

      // Parse sources header
      let sources: Source[] = [];
      const sourcesHeader = res.headers.get('X-Sources');
      if (sourcesHeader) {
        try {
          sources = JSON.parse(decodeURIComponent(sourcesHeader));
        } catch {
          sources = [];
        }
      }

      const reader = res.body?.getReader();
      if (!reader) throw new Error('스트림을 읽을 수 없습니다.');

      const decoder = new TextDecoder();
      let fullText = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        fullText += decoder.decode(value, { stream: true });

        setMessages((prev) =>
          prev.map((m) =>
            m.id === assistantId ? { ...m, content: fullText } : m
          )
        );
      }

      // Flush remaining bytes
      const remaining = decoder.decode();
      if (remaining) {
        fullText += remaining;
      }

      // Final update with escalation flag and sources
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId
            ? { ...m, content: fullText, isEscalated, sources }
            : m
        )
      );

      if (process.env.NODE_ENV === 'development') {
        console.log('[MIHY] Stream complete, length:', fullText.length);
      }
    } catch (error) {
      console.error('[MIHY] Chat error occurred');
      const errText =
        error instanceof Error
          ? error.message
          : '오류가 발생했습니다. 다시 시도해주세요.';

      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantId ? { ...m, content: `⚠ ${errText}` } : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || loadingRef.current) return;
    setInput('');
    sendMessage(trimmed);
  };

  const handleSelectQuestion = (question: string) => {
    sendMessage(question);
  };

  const handleAction = useCallback((action: string) => {
    if (action === 'beacon-request') {
      setActiveView('beacon-form');
    }
  }, []);

  const handleBeaconComplete = useCallback((message: string, studentName: string, studentPhone: string) => {
    const now = Date.now();
    const assistantMsg: ChatMessage = {
      id: `assistant-beacon-${now}`,
      role: 'assistant',
      content: message,
      beaconInfo: { studentName, studentPhone },
    };
    setMessages((prev) => [...prev, assistantMsg]);
    setActiveView('chat');
  }, []);

  const handleBeaconCancel = useCallback(() => {
    setActiveView('chat');
  }, []);

  const handleNewChat = () => {
    setMessages([]);
    setActiveView('chat');
  };

  const status = isLoading ? 'streaming' : 'ready';
  const hasMessages = messages.length > 0;

  const uiMessages = messages.map((m) => ({
    id: m.id,
    role: m.role,
    parts: [{ type: 'text' as const, text: m.content }],
    isEscalated: m.isEscalated,
    sources: m.sources,
    beaconInfo: m.beaconInfo,
  }));

  return (
    <div className="flex h-full flex-col">
      <ChatHeader onNewChat={handleNewChat} status={status} />

      {activeView === 'beacon-form' ? (
        <div className="flex flex-1 flex-col justify-center">
          <BeaconRequestForm onComplete={handleBeaconComplete} onCancel={handleBeaconCancel} />
        </div>
      ) : hasMessages ? (
        <MessageList messages={uiMessages} isLoading={isLoading} />
      ) : (
        <WelcomeScreen onSelectQuestion={handleSelectQuestion} onAction={handleAction} />
      )}

      <ChatInput
        value={input}
        onChange={setInput}
        onSubmit={handleSend}
        isLoading={isLoading}
      />
    </div>
  );
}
