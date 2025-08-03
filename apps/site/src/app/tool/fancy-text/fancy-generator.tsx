'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { AdSlot } from '@ads/index';

export type Style = 'bold' | 'italic';

export function transform(text: string, style: Style): string {
  const offsetUpper = style === 'bold' ? 0x1d400 - 0x41 : 0x1d434 - 0x41;
  const offsetLower = style === 'bold' ? 0x1d41a - 0x61 : 0x1d44e - 0x61;
  const offsetDigit = 0x1d7ce - 0x30;

  return Array.from(text)
    .map((char) => {
      const code = char.codePointAt(0);
      if (!code) return char;
      if (code >= 0x41 && code <= 0x5a) {
        return String.fromCodePoint(code + offsetUpper);
      }
      if (code >= 0x61 && code <= 0x7a) {
        return String.fromCodePoint(code + offsetLower);
      }
      if (style === 'bold' && code >= 0x30 && code <= 0x39) {
        return String.fromCodePoint(code + offsetDigit);
      }
      return char;
    })
    .join('');
}

const FancyGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [style, setStyle] = useState<Style>('bold');

  const output = transform(text, style);

  const handleCopy = useCallback(async () => {
    if (!output) return;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(output);
      } else {
        throw new Error('Clipboard not supported');
      }
    } catch {
      alert(output);
    }
  }, [output]);

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ignore
    }
  }, []);

  return (
    <div>
      <textarea
        aria-label="Input text"
        className="w-full rounded border p-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="mt-2 flex gap-2">
        <button
          type="button"
          className={`rounded border px-2 py-1 ${style === 'bold' ? 'bg-gray-200' : ''}`}
          onClick={() => setStyle('bold')}
          aria-pressed={style === 'bold'}
        >
          Bold
        </button>
        <button
          type="button"
          className={`rounded border px-2 py-1 ${style === 'italic' ? 'bg-gray-200' : ''}`}
          onClick={() => setStyle('italic')}
          aria-pressed={style === 'italic'}
        >
          Italic
        </button>
        <button
          type="button"
          className="ml-auto rounded border px-2 py-1"
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
      <div aria-live="polite" className="mt-4 min-h-[4rem] rounded border p-2">
        {output}
      </div>
      <div className="my-4 flex justify-center">
        <AdSlot />
      </div>
    </div>
  );
};

export default FancyGenerator;
