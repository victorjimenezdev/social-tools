'use client';

import React, { useState } from 'react';

export function generateSuggestions(username: string): string[] {
  const suggestions: string[] = [];
  const prefixes = ['the', 'my'];
  const suffixes = ['123', '_', 'tv'];
  prefixes.forEach((p) => suggestions.push(p + username));
  suffixes.forEach((s) => suggestions.push(username + s));
  const leetMap: Record<string, string> = {
    a: '4',
    e: '3',
    i: '1',
    o: '0',
    s: '5',
    t: '7',
  };
  const leet = username.replace(/[aeiost]/gi, (c) => leetMap[c.toLowerCase()] || c);
  if (leet !== username) suggestions.push(leet);
  return suggestions;
}

const UsernameChecker: React.FC = () => {
  const [username, setUsername] = useState('');
  const [available, setAvailable] = useState<boolean | null>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch('/api/tiktok-lookup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    const data = await res.json();
    setAvailable(data.available);
    setSuggestions(generateSuggestions(username));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="form" className="flex gap-2">
        <input
          aria-label="Username"
          className="flex-1 rounded border p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="rounded border px-2 py-1">
          Check
        </button>
      </form>
      {available !== null && (
        <p aria-live="polite" className="mt-2">
          {available ? 'Username available' : 'Username taken'}
        </p>
      )}
      {suggestions.length > 0 && (
        <ul className="mt-2 list-disc pl-4">
          {suggestions.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UsernameChecker;

