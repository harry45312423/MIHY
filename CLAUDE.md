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

