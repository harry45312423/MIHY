# CLAUDE.md

## Project: MIHY (May I Help You)

명지대학 공동훈련센터 대학일자리센터 AI 상담 챗봇

## Commands

npm run dev      # Start development server
npm run build    # Production build
npm run start    # Run production server
npm run lint     # ESLint check
npx tsx src/scripts/seed-knowledge.ts  # Seed knowledge base from Notion
npx tsx src/scripts/sync-notion.ts     # Manual Notion sync

## Architecture

This is a **Next.js 16 App Router** RAG chatbot for a university job center (대학일자리센터).

**Tech Stack:** Next.js 16, React 19, TypeScript strict, Tailwind CSS v4,
Vercel AI SDK v6, OpenAI GPT-4o-mini, Supabase pgvector, Notion API

### Directory Structure
- `src/app/` - Next.js routes and API endpoints
- `src/app/api/chat/` - Main chat endpoint with streaming
- `src/app/api/knowledge/` - Knowledge sync and search
- `src/app/chat/` - Chat interface pages
- `src/app/admin/` - Admin dashboard pages (담당자용)
- `src/components/chat/` - Chat UI components
- `src/components/landing/` - Landing page components (Hero, Features, CTA)
- `src/components/shared/` - Shared components (Logo)
- `src/components/admin/` - Admin UI components
- `src/components/ui/` - shadcn/ui components
- `src/lib/` - Core libraries (RAG pipeline, auth, etc.)
- `src/stores/` - Zustand state stores
- `src/types/` - TypeScript type definitions
- `src/data/` - Static data and prompts
- `src/scripts/` - CLI utilities

### Key Patterns
- **RAG Pipeline:** Notion → Parse → Chunk → Embed → Supabase pgvector → Search → GPT
- **Streaming:** Vercel AI SDK v6 streamText() + TextStreamChatTransport + useChat() hook
- **sendMessage:** AI SDK v6에서는 `{ text: string }` 형식 사용 (role/content 아님)
- **UIMessage:** v6에서 `content` 대신 `parts` 배열 사용 → `getMessageText()` 유틸로 추출
- **Auth:** Jose JWT for admin routes (cookie: mihy-admin-token)
- **Colors:** Primary Navy oklch(0.32 0.06 255), warm gray backgrounds
- **Font:** Pretendard (한국어 최적화) via next/font/local
- **Language:** Korean primary (html lang="ko")
- **Path alias:** @/* → ./src/*
- **Lazy init:** openai, notion, supabase 클라이언트는 모두 lazy 초기화 (빌드 시 env 없어도 통과)

### Domain
- 근로장학금/프로그램, 출근/비콘/근태, 급여/수당/세금, 신청/서류

### Environment Variables
See .env.example for required variables.
OPENAI_API_KEY, NOTION_API_KEY, SUPABASE_* are required.

---

## Work Log

### 2026-02-11 — 프로젝트 초기 구축 + P0 UI 리파인먼트

**Phase 1 MVP 전체 구현 완료:**

1. **프로젝트 초기화**
   - Next.js 16 + React 19 + TypeScript + Tailwind CSS v4 + shadcn/ui 설정
   - 전체 디렉토리 구조 생성

2. **타입 정의 및 데이터**
   - `src/types/` — chat, knowledge, api 타입 정의
   - `src/data/systemPrompt.ts` — 대학일자리센터 시스템 프롬프트
   - `src/data/suggestedQuestions.ts` — 추천 질문 6개

3. **핵심 RAG 라이브러리**
   - `notion.ts` — Notion API (rate limiting, lazy init)
   - `notionParser.ts` — 블록 → 텍스트 파서
   - `chunker.ts` — 800토큰/200오버랩 청킹
   - `embeddings.ts` — text-embedding-3-small
   - `vectorStore.ts` — pgvector 검색 + 리랭킹
   - `promptBuilder.ts` — 프롬프트 조립
   - `sanitizer.ts` — 입력 검증 + 인젝션 방어
   - `rateLimiter.ts` — 요청 제한

4. **API 라우트**
   - `/api/chat` — 스트리밍 GPT-4o-mini (toTextStreamResponse)
   - `/api/admin/auth` — JWT 로그인/로그아웃
   - `/api/knowledge/sync` — Notion → 벡터DB 동기화
   - `/api/feedback` — 피드백 수집

5. **Chat UI (전체)**
   - ChatContainer, MessageList, MessageBubble, ChatInput
   - WelcomeScreen, SuggestedQuestions, TypingIndicator, ChatHeader

6. **Landing Page**
   - HeroSection, FeaturesSection, CTASection

7. **AI SDK v6 호환 작업** (주요 이슈 해결)
   - `useChat()` → useState + sendMessage({ text }) 패턴으로 변경
   - `TextStreamChatTransport` 도입
   - `UIMessage.parts` → `getMessageText()` 유틸 생성
   - `toDataStreamResponse` → `toTextStreamResponse`
   - `maxTokens` → `maxOutputTokens`

8. **빌드 안정화**
   - Notion client v5 → v2.2.15 다운그레이드 (databases.query 호환)
   - openai, notion, supabase 클라이언트 lazy 초기화
   - `npm run build` + `npm run lint` 모두 통과

9. **P0 UI 리파인먼트 (AI 템플릿 탈피)**
   - Primary color: 무채색 → 네이비(oklch 0.32 0.06 255)
   - Font: Geist → Pretendard (한국어 최적화)
   - Bot 아이콘 4회 → "MIHY" 커스텀 로고 컴포넌트로 전환
   - Hero: "AI 기반 24시간" Sparkles 뱃지 제거 → "명지대학 공동훈련센터"
   - Hero 하단: tag pills → 신뢰 수치 (24시간, 3초, 100+ FAQ)
   - CTA: 연한 카드 → 네이비 풀배경 + "처음이라도 괜찮아요"
   - 전송 버튼: ArrowUp 사각 → Send 원형
   - Feature 아이콘: 단색 → 카테고리별 고유 색상
   - Typing indicator: "AI" 3dot → 로고 + "답변을 준비하고 있어요"
   - ChatHeader: back 버튼 + green dot 상태 표시 + 동적 텍스트
   - Welcome: 시간대별 인사 (아침/오후/저녁)
   - 모바일: safe-area-inset-bottom, viewport-fit:cover, aria-label

10. **프로젝트명 변경:** MIH → MIHY (May I Help You)

**다음 작업 (TODO):**
- OpenAI API Key 설정 → 채팅 실 응답 테스트
- Supabase 프로젝트 생성 + pgvector 스키마
- Notion 지식 베이스 구축 + 시딩
- P1/P2 UI 개선 (말풍선 방향성, timestamp, 다크모드 등)
- 오리엔테이션 PDF 내용 → 추천 질문 및 지식 베이스에 반영
