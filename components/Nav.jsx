'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CHAPTERS } from '../lib/chapters-meta';

const NAV_ITEMS = [
  { href: '/', label: 'หน้าแรก' },
  ...CHAPTERS.map(ch => ({ href: `/chapter/${ch.id}`, label: ch.title.split(' ').slice(1).join(' ') })),
  { href: '/appendices', label: 'ภาคผนก' },
  { href: '/presentation', label: 'นำเสนอ' },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <span className="brand-icon">DSA</span>
          <span className="brand-name">DSA Course</span>
        </Link>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="เปิดเมนูนำทาง"
          aria-expanded={isOpen}
        >
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
          <span className="menu-bar"></span>
        </button>

        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          {NAV_ITEMS.map((item, index) => {
            const isActive = currentPath === item.href;
            return (
              <Link
                key={index}
                href={item.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
