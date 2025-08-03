'use client';

import React, { useState, useCallback } from 'react';
import JSZip from 'jszip';
import { calcSlices, SplitType } from './slices';

const MAX_SIZE = 10 * 1024 * 1024;

const GridSplitter: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [type, setType] = useState<SplitType>('3x1');
  const [tiles, setTiles] = useState<string[]>([]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!/image\/(png|jpeg)/.test(f.type) || f.size > MAX_SIZE) {
      alert('Please upload a JPG or PNG under 10 MB.');
      return;
    }
    setFile(f);
  };

  const handleSplit = useCallback(async () => {
    if (!file) return;
    const img = new Image();
    img.src = URL.createObjectURL(file);
    await new Promise((res) => {
      img.onload = () => res(null);
      img.onerror = () => res(null);
    });
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const slices = calcSlices(type, img.width, img.height);
    const dataUrls: string[] = [];
    const zip = new JSZip();
    for (let i = 0; i < slices.length; i++) {
      const { sx, sy, sw, sh } = slices[i];
      canvas.width = sw;
      canvas.height = sh;
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, sw, sh);
      const blob = await new Promise<Blob>((resolve) =>
        canvas.toBlob((b) => resolve(b as Blob), 'image/jpeg')
      );
      dataUrls.push(canvas.toDataURL('image/jpeg'));
      zip.file(`tile-${i + 1}.jpg`, blob);
    }
    setTiles(dataUrls);
    const content = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(content);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'grid.zip';
    a.click();
    URL.revokeObjectURL(url);
  }, [file, type]);

  return (
    <div>
      <ul className="mb-4 list-disc pl-5 text-sm">
        <li>Upload a JPG or PNG image under 10&nbsp;MB.</li>
        <li>Select how to split the image.</li>
        <li>Download a ZIP of the tiles.</li>
      </ul>
      <div className="flex gap-2">
        <input
          aria-label="Upload image"
          type="file"
          accept="image/png,image/jpeg"
          onChange={handleFile}
          className="flex-1 rounded border p-2"
        />
        <select
          aria-label="Split type"
          value={type}
          onChange={(e) => setType(e.target.value as SplitType)}
          className="rounded border p-2"
        >
          <option value="3x1">3 × 1</option>
          <option value="3x2">3 × 2</option>
          <option value="3x3">3 × 3</option>
          <option value="panorama">Panorama</option>
        </select>
        <button
          type="button"
          className="rounded border bg-gray-100 px-4 py-2"
          onClick={handleSplit}
          disabled={!file}
        >
          Split
        </button>
      </div>
      {tiles.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-2">
          {tiles.map((src, i) => (
            <img key={i} src={src} alt={`Tile ${i + 1}`} />
          ))}
        </div>
      )}
    </div>
  );
};

export default GridSplitter;
