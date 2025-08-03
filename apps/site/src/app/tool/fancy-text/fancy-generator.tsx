'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { AdSlot } from '@ads/index';
import { transform, type TransformOptions, type UnicodeStyle } from './transforms';

const defaultOptions: TransformOptions = {
  unicodeStyle: 'bold',
  underline: false,
  strikethrough: false,
  superscript: false,
  subscript: false,
  case: 'none',
  emojify: false,
  reverse: false,
  zalgo: false,
  markdown: false,
};

const FancyGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [opts, setOpts] = useState<TransformOptions>(defaultOptions);
  const [letterSpacing, setLetterSpacing] = useState(0);
  const [lineHeight, setLineHeight] = useState(1.5);
  const [copied, setCopied] = useState(false);

  const output = transform(text, opts);

  const toggle = useCallback(
    (key: keyof TransformOptions, value?: boolean) => {
      setOpts((o) => ({ ...o, [key]: value ?? !o[key] }));
    },
    [],
  );

  const setStyle = (style: UnicodeStyle) => setOpts((o) => ({ ...o, unicodeStyle: style }));

  const handleCopy = useCallback(async () => {
    if (!output) return;
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
    <div className="ftg">
      <textarea
        aria-label="Input text"
        placeholder="Type or paste text here"
        className="ftg__input w-full rounded-lg border p-3 shadow-sm focus:outline-none focus:ring"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="ftg__controls mt-4 flex flex-wrap items-center gap-2">
        <button
          type="button"
          className={`ftg__btn rounded-md px-3 py-2 text-sm font-medium text-white ${
            opts.unicodeStyle === 'bold' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          } focus:outline-none focus:ring`}
          onClick={() => setStyle('bold')}
          aria-pressed={opts.unicodeStyle === 'bold'}
        >
          Bold
        </button>
        <button
          type="button"
          className={`ftg__btn rounded-md px-3 py-2 text-sm font-medium text-white ${
            opts.unicodeStyle === 'italic' ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          } focus:outline-none focus:ring`}
          onClick={() => setStyle('italic')}
          aria-pressed={opts.unicodeStyle === 'italic'}
        >
          Italic
        </button>
        <select
          aria-label="More styles"
          value={opts.unicodeStyle}
          onChange={(e) => setStyle(e.target.value as UnicodeStyle)}
          className="ftg__select rounded-md border px-2 py-2 text-sm focus:outline-none focus:ring"
        >
          <option value="normal">Normal</option>
          <option value="bold">Bold</option>
          <option value="italic">Italic</option>
          <option value="cursive">Cursive</option>
          <option value="gothic">Gothic</option>
          <option value="bubble">Bubble</option>
          <option value="smallcaps">Small Caps</option>
          <option value="monospace">Monospace</option>
        </select>
        <button
          type="button"
          className={`ftg__btn rounded-md px-3 py-2 text-sm text-white ${
            opts.underline ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          } focus:outline-none focus:ring`}
          onClick={() => toggle('underline')}
          aria-pressed={opts.underline}
        >
          Underline
        </button>
        <button
          type="button"
          className={`ftg__btn rounded-md px-3 py-2 text-sm text-white ${
            opts.strikethrough ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          } focus:outline-none focus:ring`}
          onClick={() => toggle('strikethrough')}
          aria-pressed={opts.strikethrough}
        >
          Strikethrough
        </button>
        <button
          type="button"
          className={`ftg__btn rounded-md px-3 py-2 text-sm text-white ${
            opts.superscript ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          } focus:outline-none focus:ring`}
          onClick={() => toggle('superscript')}
          aria-pressed={opts.superscript}
        >
          Superscript
        </button>
        <button
          type="button"
          className={`ftg__btn rounded-md px-3 py-2 text-sm text-white ${
            opts.subscript ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          } focus:outline-none focus:ring`}
          onClick={() => toggle('subscript')}
          aria-pressed={opts.subscript}
        >
          Subscript
        </button>
        <button
          type="button"
          className={`ftg__btn rounded-md px-3 py-2 text-sm text-white ${
            opts.emojify ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          } focus:outline-none focus:ring`}
          onClick={() => toggle('emojify')}
          aria-pressed={opts.emojify}
        >
          Emojify
        </button>
        <button
          type="button"
          className={`ftg__btn rounded-md px-3 py-2 text-sm text-white ${
            opts.reverse ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          } focus:outline-none focus:ring`}
          onClick={() => toggle('reverse')}
          aria-pressed={opts.reverse}
        >
          Reverse
        </button>
        <button
          type="button"
          className={`ftg__btn rounded-md px-3 py-2 text-sm text-white ${
            opts.zalgo ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          } focus:outline-none focus:ring`}
          onClick={() => toggle('zalgo')}
          aria-pressed={opts.zalgo}
        >
          Zalgo
        </button>
        <button
          type="button"
          className={`ftg__btn rounded-md px-3 py-2 text-sm text-white ${
            opts.markdown ? 'bg-blue-600' : 'bg-gray-600 hover:bg-gray-700'
          } focus:outline-none focus:ring`}
          onClick={() => toggle('markdown')}
          aria-pressed={opts.markdown}
        >
          Markdown
        </button>
        <select
          aria-label="Text case"
          value={opts.case}
          onChange={(e) => setOpts({ ...opts, case: e.target.value as TransformOptions['case'] })}
          className="ftg__select rounded-md border px-2 py-2 text-sm focus:outline-none focus:ring"
        >
          <option value="none">Normal</option>
          <option value="upper">UPPERCASE</option>
          <option value="lower">lowercase</option>
          <option value="capitalize">Capitalize</option>
        </select>
        <label className="ftg__label ml-auto flex items-center gap-2 text-sm">
          <span>Letter spacing</span>
          <input
            type="range"
            min="0"
            max="10"
            value={letterSpacing}
            onChange={(e) => setLetterSpacing(Number(e.target.value))}
          />
        </label>
        <label className="ftg__label flex items-center gap-2 text-sm">
          <span>Line height</span>
          <input
            type="range"
            min="1"
            max="3"
            step="0.1"
            value={lineHeight}
            onChange={(e) => setLineHeight(Number(e.target.value))}
          />
        </label>
        <button
          type="button"
          className="ftg__btn ml-auto rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white hover:bg-green-700 focus:outline-none focus:ring"
          onClick={handleCopy}
        >
          Copy
        </button>
        {copied && (
          <span role="tooltip" className="ftg__tooltip ml-2 text-sm" aria-live="polite">
            Copied!
          </span>
        )}
      </div>
      <div
        aria-live="polite"
        className="ftg__output mt-4 min-h-[4rem] rounded-lg border p-3 shadow-sm"
        style={{
          letterSpacing: `${letterSpacing}px`,
          lineHeight: lineHeight, // stylelint-disable-line value-keyword-case
        }}
      >
        {output}
      </div>
      <div className="ftg__ad my-4 flex justify-center">
        <AdSlot />
      </div>
    </div>
  );
};

export default FancyGenerator;
