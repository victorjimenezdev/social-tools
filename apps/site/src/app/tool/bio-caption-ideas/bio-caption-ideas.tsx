'use client';

import React, { useState, useMemo, useEffect } from 'react';
import type { BioIdeaCategory } from '@lib/mdx';
import { AdSlot } from '@ads/index';

interface Props {
  categories: BioIdeaCategory[];
}

const BioCaptionIdeas: React.FC<Props> = ({ categories }) => {
  const [filter, setFilter] = useState<string>('all');
  const [ideas, setIdeas] = useState<string[]>([]);

  const pool = useMemo(() => {
    if (filter === 'all') {
      return categories.flatMap((c) => c.ideas);
    }
    return categories.find((c) => c.category === filter)?.ideas ?? [];
  }, [categories, filter]);

  const addIdea = () => {
    if (pool.length === 0) return;
    const idea = pool[Math.floor(Math.random() * pool.length)];
    setIdeas((prev) => [...prev, idea]);
  };

  useEffect(() => {
    if (ideas.length >= 5) {
      try {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch {
        // ignore
      }
    }
  }, [ideas.length]);

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <select
          aria-label="Filter by category"
          className="rounded border p-2"
          value={filter}
          onChange={(e) => {
            setFilter(e.target.value);
            setIdeas([]);
          }}
        >
          <option value="all">All</option>
          {categories.map((c) => (
            <option key={c.category} value={c.category}>
              {c.category}
            </option>
          ))}
        </select>
        <button
          type="button"
          className="ml-auto rounded border px-2 py-1"
          onClick={addIdea}
        >
          Random Idea
        </button>
      </div>
      <ul>
        {ideas.map((idea, idx) => (
          <React.Fragment key={idx}>
            <li className="mb-2">{idea}</li>
            {idx === 4 && (
              <li className="my-4 flex justify-center">
                <AdSlot data-testid="ad-slot" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default BioCaptionIdeas;
