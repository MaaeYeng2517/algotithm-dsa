'use client';

import Link from 'next/link';
import Nav from './Nav';
import { CHAPTERS } from '../lib/chapters-meta';
import MarkdownContent from './MarkdownContent';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Nav />
      <main className="main-content">{children}</main>
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-text">&copy; 2026 MaeeYeng — โครงสร้างข้อมูลและอัลกอริทึม. สงวนลิขสิทธิ์ทุกประการ.</p>
          <div className="footer-links">
            <Link href="/">หน้าแรก</Link>
            <span>|</span>
            <Link href="/appendices">ภาคผนก</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export function ChapterLayout({ children, chapterId, content, readmeUrl }) {
  const chapter = CHAPTERS.find(ch => ch.id === chapterId);
  const index = CHAPTERS.findIndex(ch => ch.id === chapterId);
  const prev = index > 0 ? CHAPTERS[index - 1] : null;
  const next = index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : null;

  const shortTitle = chapter?.title.split(' ').slice(1).join(' ') || chapterId;

  return (
    <div className="chapter-layout">
      <Nav />
      <div className="chapter-container">
        <aside className="chapter-sidebar">
          <h3 className="sidebar-title">สารบัญบทเรียน</h3>
          <ul className="chapter-list">
            {CHAPTERS.map((ch, i) => {
              const isActive = ch.id === chapterId;
              const short = ch.title.split(' ').slice(1).join(' ');
              return (
                <li key={ch.id}>
                  <Link
                    href={`/chapter/${ch.id}`}
                    className={`chapter-link ${isActive ? 'active' : ''}`}
                    onClick={() => {}}
                  >
                    <span className="chapter-number">{ch.order}</span>
                    {short}
                  </Link>
                </li>
              );
            })}
          </ul>
        </aside>

        <article className="chapter-article">
          <header className="article-header">
            <nav className="breadcrumb">
              <Link href="/">หน้าแรก</Link>
              <span className="breadcrumb-separator">›</span>
              <span className="breadcrumb-current">{chapter?.title}</span>
            </nav>
            {readmeUrl && (
              <a
                href={readmeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="readme-link"
                style={{ display: 'inline-block', marginTop: '0.5rem', color: 'var(--primary)', fontSize: '0.85rem', textDecoration: 'underline' }}
              >
                📄 ดูไฟล์ต้นฉบับบน GitHub
              </a>
            )}
            <h1 className="article-title">{chapter?.title}</h1>
          </header>

          <MarkdownContent content={content} />

          <nav className="chapter-nav">
            {prev && (
              <Link href={`/chapter/${prev.id}`} className="nav-btn nav-btn-prev">
                ← บทก่อนหน้า: {prev.title.split(' ').slice(1).join(' ')}
              </Link>
            )}
            {next && (
              <Link href={`/chapter/${next.id}`} className="nav-btn nav-btn-next">
                บทถัดไป: {next.title.split(' ').slice(1).join(' ')} →
              </Link>
            )}
          </nav>
        </article>
      </div>
    </div>
  );
}
