import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ProfilePicViewer from './profile-pic-viewer';

describe('ProfilePicViewer', () => {
  it('shows profile pic and download link', async () => {
    vi.spyOn(global, 'fetch').mockResolvedValueOnce(
      new Response(
        JSON.stringify({ profile_pic_url_hd: 'https://example.com/pic.jpg' }),
        { status: 200 },
      ) as any,
    );

    render(<ProfilePicViewer />);
    fireEvent.change(screen.getByLabelText(/instagram username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.submit(screen.getByTestId('form'));

    await waitFor(() => {
      const img = screen.getByRole('img') as HTMLImageElement;
      expect(img.getAttribute('src')).toBe('https://example.com/pic.jpg');
      const link = screen.getByRole('link', { name: /download/i });
      expect(link.getAttribute('href')).toBe('https://example.com/pic.jpg');
    });
  });
});

