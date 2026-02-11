'use client';

import Logo from '@/components/shared/Logo';
import SuggestedQuestions from './SuggestedQuestions';

interface WelcomeScreenProps {
  onSelectQuestion: (question: string) => void;
}

function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return '좋은 아침이에요!';
  if (hour < 18) return '안녕하세요!';
  return '늦은 시간에도 찾아주셨네요!';
}

export default function WelcomeScreen({
  onSelectQuestion,
}: WelcomeScreenProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-5 py-8 sm:py-12 animate-fade-in-up">
      <Logo size="lg" className="mb-6" />

      <h1 className="mb-3 text-3xl font-bold">
        {getGreeting()}
      </h1>
      <p className="mb-10 text-center text-lg leading-relaxed text-muted-foreground">
        근로장학금, 비콘 출결, 급여 등
        <br />
        일자리센터에 관한 모든 질문에 답해드려요.
      </p>

      <div className="w-full max-w-2xl">
        <p className="mb-3 text-sm font-semibold text-muted-foreground">
          자주 묻는 질문
        </p>
        <SuggestedQuestions onSelect={onSelectQuestion} />
      </div>
    </div>
  );
}
