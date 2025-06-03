'use client';
import { useTheme } from '@/hooks/useTheme';
import { HIGHLIGHT_TERMS } from '@/lib/highlightTerms';
import React, { ReactNode, useMemo } from 'react';

type TermHighlighterProps = {
  children: ReactNode;
  className?: string;
};

// Pre-compute everything at module level - NEVER recalculate
const ESCAPED_TERMS = HIGHLIGHT_TERMS.map((term) =>
  term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
).sort((a, b) => b.length - a.length);

const PATTERN =
  ESCAPED_TERMS.length > 0
    ? new RegExp(`(${ESCAPED_TERMS.join('|')})`, 'g')
    : null;

const useProcessCache = () => {
  const cacheRef = React.useRef(new Map<string, ReactNode>());
  return cacheRef.current;
};

export default function TermHighlighter({
  children,
  className = '',
}: TermHighlighterProps) {
  const { currentTheme } = useTheme();
  const processCache = useProcessCache();

  const processedContent = useMemo(() => {
    if (typeof children !== 'string' || !PATTERN) {
      return children;
    }
    // Use cache to avoid re-processing
    const cacheKey = `${children}:${currentTheme.secondaryColor}`;

    if (processCache.has(cacheKey)) {
      return processCache.get(cacheKey);
    }

    const parts = children.split(PATTERN);
    if (parts.length <= 1) {
      processCache.set(cacheKey, children);
      return children;
    }

    const result = parts.map((part, index) => {
      if (HIGHLIGHT_TERMS.includes(part)) {
        return (
          <span
            key={index}
            style={{
              backgroundColor: currentTheme.secondaryColor,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {part}
          </span>
        );
      }
      return part;
    });

    // Cache the result but limit cache size
    if (processCache.size > 100) {
      processCache.clear();
    }
    processCache.set(cacheKey, result);

    return result;
  }, [children, currentTheme.secondaryColor, processCache]);

  return <span className={className}>{processedContent}</span>;
}
