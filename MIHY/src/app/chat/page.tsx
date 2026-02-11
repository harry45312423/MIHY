import ChatContainer from '@/components/chat/ChatContainer';

export const metadata = {
  title: '상담하기 | 대학일자리센터 AI 상담',
  description:
    '근로장학금, 출근/비콘, 급여, 서류 등 일자리센터 관련 궁금한 점을 AI 상담사에게 물어보세요.',
};

export default function ChatPage() {
  return (
    <div className="h-dvh">
      <ChatContainer />
    </div>
  );
}
