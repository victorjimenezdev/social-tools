import * as React from 'react';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto flex flex-col items-center gap-2 p-4 text-sm sm:flex-row sm:justify-between">
        <span>© {year} Social Tools Hub.</span>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
