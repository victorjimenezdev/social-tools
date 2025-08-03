'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import html2canvas from 'html2canvas';

const StoryTemplates: React.FC = () => {
  const [size, setSize] = useState(5);
  const [title, setTitle] = useState('Bingo');
  const cardRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const renderPreview = useCallback(async () => {
    if (!cardRef.current || !previewRef.current) return;
    const canvas = await html2canvas(cardRef.current);
    previewRef.current.innerHTML = '';
    previewRef.current.appendChild(canvas);
  }, []);

  useEffect(() => {
    renderPreview();
  }, [size, title, renderPreview]);

  const download = async () => {
    if (!cardRef.current) return;
    const canvas = await html2canvas(cardRef.current);
    const link = document.createElement('a');
    link.download = 'bingo.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  useEffect(() => {
    try {
      // @ts-ignore
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // ignore
    }
  }, []);

  const cells = Array.from({ length: size * size });

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2">
          <label htmlFor="grid-size">Grid size</label>
          <input
            id="grid-size"
            type="range"
            min="3"
            max="7"
            value={size}
            onChange={(e) => setSize(parseInt(e.target.value))}
          />
        </div>
        <div className="flex items-center gap-2">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="rounded border p-1"
          />
        </div>
        <button
          type="button"
          className="ml-auto rounded border px-4 py-2"
          onClick={download}
        >
          Download PNG
        </button>
      </div>
      <div ref={previewRef} aria-label="Canvas preview" />
      <div
        ref={cardRef}
        className="absolute -left-[9999px] -top-[9999px]"
        aria-hidden
      >
        <div
          className="flex flex-col items-center justify-center"
          style={{ width: 500, padding: 16, background: '#fff' }}
        >
          <h2 className="mb-4 text-center text-xl font-bold">{title}</h2>
          <div
            className="grid w-full border"
            style={{ gridTemplateColumns: `repeat(${size}, 1fr)` }}
          >
            {cells.map((_, i) => (
              <div key={i} className="aspect-square border" />
            ))}
          </div>
        </div>
      </div>
      <div className="my-4 flex justify-center">
        <ins
          className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
          data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_SLOT}
          data-ad-format="auto"
          data-full-width-responsive="true"
          data-testid="ad-slot"
        />
      </div>
    </div>
  );
};

export default StoryTemplates;
