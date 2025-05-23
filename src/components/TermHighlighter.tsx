'use client';
import { useTheme } from '@/hooks/useTheme';
import { HIGHLIGHT_TERMS } from '@/lib/highlightTerms';
import React, { ReactNode } from 'react';

type TermHighlighterProps = {
  children: ReactNode;
  className?: string;
};

export default function TermHighlighter({
  children,
  className = '',
}: TermHighlighterProps) {
  const { currentTheme } = useTheme();

  const processContent = (content: ReactNode): ReactNode => {
    if (typeof content !== 'string') {
      return content;
    }

    const text = content;

    // Escape special regex characters and sort by length (longest first)
    const escapedTerms = HIGHLIGHT_TERMS.map((term) =>
      term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
    ).sort((a, b) => b.length - a.length);

    if (escapedTerms.length === 0) {
      return text;
    }

    const pattern = new RegExp(`(${escapedTerms.join('|')})`, 'g');
    const parts = text.split(pattern);

    if (parts.length <= 1) {
      return text; // No matches found
    }

    return parts.map((part, index) => {
      // If this part matches a tech term, highlight it
      if (HIGHLIGHT_TERMS.includes(part)) {
        return (
          <span
            key={index}
            style={{
              backgroundColor: currentTheme.secondaryColor,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {part}
          </span>
        );
      }
      // Otherwise return as regular text
      return part;
    });
  };

  if (typeof children === 'string') {
    return <span className={className}>{processContent(children)}</span>;
  }

  return (
    <span className={className}>
      {React.Children.map(children, (child) => {
        if (typeof child === 'string') {
          return processContent(child);
        }
        return child;
      })}
    </span>
  );
}
