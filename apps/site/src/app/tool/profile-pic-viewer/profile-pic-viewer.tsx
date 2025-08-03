'use client';

import React, { useState } from 'react';

const ProfilePicViewer: React.FC = () => {
  const [username, setUsername] = useState('');
  const [url, setUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setUrl(null);
    const res = await fetch('/api/ig-profile-pic', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    });
    if (!res.ok) {
      setError(await res.text());
      return;
    }
    const data = await res.json();
    setUrl(data.profile_pic_url_hd);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="form" className="flex gap-2">
        <input
          aria-label="Instagram username"
          className="flex-1 rounded border p-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit" className="rounded border px-2 py-1">
          View
        </button>
      </form>
      {error && (
        <p aria-live="polite" className="mt-2 text-red-600">
          {error}
        </p>
      )}
      {url && (
        <div className="mt-4 flex flex-col items-start gap-2">
          <img
            src={url}
            alt={`Profile picture of ${username}`}
            className="max-w-xs rounded border"
          />
          <a href={url} download className="rounded border px-2 py-1">
            Download
          </a>
        </div>
      )}
    </div>
  );
};

export default ProfilePicViewer;

