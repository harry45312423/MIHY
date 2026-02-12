'use client';

import { useState } from 'react';
import { Paperclip, ChevronDown } from 'lucide-react';
import type { Source } from '@/types/chat';
import { cn } from '@/lib/utils';

interface SourceCitationProps {
  sources: Source[];
}

export default function SourceCitation({ sources }: SourceCitationProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Deduplicate by pageTitle + headingContext
  const unique = sources.filter(
    (s, i, arr) =>
      arr.findIndex(
        (t) => t.pageTitle === s.pageTitle && t.headingContext === s.headingContext
      ) === i
  );

  if (unique.length === 0) return null;

  return (
    <div className="mt-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
        aria-expanded={isOpen}
      >
        <Paperclip className="h-3 w-3" />
        <span>참고 자료 ({unique.length})</span>
        <ChevronDown
          className={cn(
            'h-3 w-3 transition-transform',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen && (
        <ul className="mt-1.5 space-y-1 pl-2">
          {unique.map((source, i) => (
            <li
              key={`${source.pageTitle}-${source.headingContext}-${i}`}
              className="flex items-start gap-1.5 text-xs text-muted-foreground"
            >
              <span className="mt-0.5 shrink-0 text-muted-foreground/40">
                &middot;
              </span>
              <span>
                {source.pageTitle}
                {source.headingContext && (
                  <span className="text-muted-foreground/60">
                    {' '}
                    &gt; {source.headingContext}
                  </span>
                )}
                {source.category && (
                  <span className="ml-1.5 rounded bg-muted px-1.5 py-0.5 text-[10px]">
                    {source.category}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
