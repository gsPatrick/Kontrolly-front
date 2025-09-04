import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <main className="flex items-center justify-center min-h-screen bg-muted/40">
      {children}
    </main>
  );
}