'use client';

import { useEffect, useRef, useState } from 'react';

export default function Mermaid({ diagram }) {
  const ref = useRef(null);
  const [rendered, setRendered] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!ref.current) return;

    const importMermaid = async () => {
      const mermaid = await import('mermaid');
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        securityLevel: 'loose',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      });
      ref.current.innerHTML = `<div class="mermaid">${diagram}</div>`;
      try {
        await mermaid.init(undefined, ref.current);
      } catch (e) {
        console.warn('Mermaid init error:', e);
      }
      setRendered(true);
    };

    importMermaid();
  }, [diagram]);

  return (
    <div
      ref={ref}
      className="mermaid-wrapper"
      style={{ textAlign: 'center', margin: '1.5rem 0', padding: '1rem', background: '#fafafa', border: '1px solid #e2e8f0', borderRadius: '8px' }}
    >
      {!rendered && <div className="mermaid-loading">กำลังแสดงผังงาน...</div>}
    </div>
  );
}
