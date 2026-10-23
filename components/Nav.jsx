'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CHAPTERS } from '../lib/chapters-meta';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [chaptersOpen, setChaptersOpen] = useState(false);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-brand">
          <span className="brand-icon">DSA</span>
          <span className="brand-name">บทเรียนสำเร็จรูป</span>
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
          <Link
            href="/"
            className={`nav-link ${currentPath === '/' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            หน้าแรก
          </Link>

          <div
            className="nav-dropdown"
            onMouseEnter={() => setChaptersOpen(true)}
            onMouseLeave={() => setChaptersOpen(false)}
          >
            <button
              className={`nav-link nav-dropdown-toggle ${currentPath.startsWith('/chapter') ? 'active' : ''}`}
              onClick={() => setChaptersOpen(!chaptersOpen)}
            >
              บทเรียน ▾
            </button>
            {chaptersOpen && (
              <div className="nav-dropdown-menu">
                {CHAPTERS.map((ch) => (
                  <Link
                    key={ch.id}
                    href={`/chapter/${ch.id}`}
                    className={`nav-dropdown-item ${currentPath === `/chapter/${ch.id}` ? 'active' : ''}`}
                    onClick={() => { setIsOpen(false); setChaptersOpen(false); }}
                  >
                    {ch.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/appendices"
            className={`nav-link ${currentPath === '/appendices' ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            ภาคผนวก
          </Link>

          <Link
            href="/presentation"
            className={`nav-link ${currentPath.startsWith('/presentation') ? 'active' : ''}`}
            onClick={() => setIsOpen(false)}
          >
            นำเสนอ
          </Link>
        </div>
      </div>
    </nav>
  );
}
