'use client';

import React, { useEffect, useState } from 'react';

interface Challenge {
  slug: string;
  title: string;
}

interface Props {
  challenges: Challenge[];
}

export function chooseChallenge(
  challenges: Challenge[],
  rng: () => number = Math.random,
) {
  const index = Math.floor(rng() * challenges.length);
  return challenges[index];
}

const ChallengeSpinner: React.FC<Props> = ({ challenges }) => {
  const [selected, setSelected] = useState<Challenge | null>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const slug = params.get('challenge');
    if (slug) {
      const existing = challenges.find((c) => c.slug === slug);
      if (existing) {
        setSelected(existing);
      }
    }
  }, [challenges]);

  const spin = () => {
    const challenge = chooseChallenge(challenges);
    setSelected(challenge);
    const params = new URLSearchParams(window.location.search);
    params.set('challenge', challenge.slug);
    window.history.replaceState(null, '', `${window.location.pathname}?${params}`);
  };

  const share = async () => {
    if (!selected) return;
    const url = `${window.location.origin}${window.location.pathname}?challenge=${selected.slug}`;
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // ignore clipboard errors
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          type="button"
          className="rounded border px-4 py-2"
          onClick={spin}
        >
          Spin
        </button>
        <button
          type="button"
          className="rounded border px-4 py-2"
          onClick={share}
          disabled={!selected}
        >
          Share
        </button>
      </div>
      <div aria-live="polite">{selected ? selected.title : 'No challenge yet'}</div>
    </div>
  );
};

export default ChallengeSpinner;
