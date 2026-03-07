'use client';

import { suggestedQuestions } from '@/data/suggestedQuestions';
import {
  GraduationCap,
  Smartphone,
  Wallet,
  FileText,
  AlertCircle,
  Radio,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  GraduationCap,
  Smartphone,
  Wallet,
  FileText,
  AlertCircle,
  Radio,
};

const colorMap: Record<string, string> = {
  GraduationCap: 'text-blue-600 bg-blue-50 dark:bg-blue-950/30',
  Smartphone: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30',
  Wallet: 'text-amber-600 bg-amber-50 dark:bg-amber-950/30',
  FileText: 'text-violet-600 bg-violet-50 dark:bg-violet-950/30',
  AlertCircle: 'text-red-600 bg-red-50 dark:bg-red-950/30',
  Radio: 'text-orange-600 bg-orange-50 dark:bg-orange-950/30',
};

interface SuggestedQuestionsProps {
  onSelect: (question: string) => void;
  onAction?: (action: string) => void;
}

export default function SuggestedQuestions({
  onSelect,
  onAction,
}: SuggestedQuestionsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {suggestedQuestions.map((q) => {
        const Icon = iconMap[q.icon] ?? FileText;
        const color = colorMap[q.icon] ?? 'text-muted-foreground bg-muted';
        return (
          <button
            key={q.label}
            onClick={() => q.action && onAction ? onAction(q.action) : onSelect(q.label)}
            className="flex items-center gap-3 rounded-xl border border-border/60 bg-card px-5 py-4 text-left text-base transition-all hover:border-primary/30 hover:bg-accent hover:shadow-sm hover:-translate-y-0.5 active:scale-[0.97] active:translate-y-0"
          >
            <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-[15px] font-medium text-foreground/80">{q.label}</span>
          </button>
        );
      })}
    </div>
  );
}
