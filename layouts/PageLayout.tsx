import type { ReactNode } from 'react';

export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="...">
      {children}
    </div>
  );
}