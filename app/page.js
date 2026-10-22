import Link from 'next/link';
import { CHAPTERS } from '../lib/chapters-meta';

export const metadata = {
  title: 'หน้าแรก - DSA Course',
  description: 'ตำบลเรียนโครงสร้างข้อมูลและอัลกอริทึม ครบถ้วน 15 บท',
};

export default function HomePage() {
  return (
    <div className="home-container">
      <h1 className="home-title">DSA Course</h1>
      <p className="home-subtitle">
        โครงสร้างข้อมูลและอัลกอริทึม ตำบลเรียนครบถ้วน 15 บท พร้อมคำอธิบายเป็นภาษาไทย ตัวอย่างโค้ดภาษา C/C++ และ Python แบบฝึกหัด ข้อสอบ และภาคผนก
      </p>

      <a
        href="https://github.com/MaaeYeng2517/algotithm-dsa/blob/main/README.md"
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--primary)', fontSize: '0.9rem', textDecoration: 'underline' }}
      >
        📄 ดูเอกสารโครงการบน GitHub (README.md)
      </a>

      <div className="home-features">
        <div className="feature-card">
          <h3>15 บทเรียนครบถ้วน</h3>
          <p>ตั้งแต่บทนำอัลกอริทึม การวิเคราะห์ความซับซ้อน ไปจนถึงอัลกอริทึมขั้นสูงและหัวข้อพิเศษ</p>
        </div>
        <div className="feature-card">
          <h3>โค้ด C/C++ และ Python</h3>
          <p>ตัวอย่างโค้ดที่สามารถรันได้จริง พร้อมคำอธิบายทุกขั้นตอน</p>
        </div>
        <div className="feature-card">
          <h3>แบบฝึกหัดและข้อสอบ</h3>
          <p>แบบทดสอบเลือกตอบและอัตนัยท้ายทุกบท พร้อมแนวทางคำตอบ</p>
        </div>
        <div className="feature-card">
          <h3>รองรับมือถือ</h3>
          <p>ออกแบบให้ใช้งานได้สะดวกทั้งบนคอมพิวเตอร์และมือถือ</p>
        </div>
      </div>

      <h2 style={{ textAlign: 'left', marginBottom: '1rem', color: 'var(--text)' }}>สารบัญบทเรียน</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {CHAPTERS.map((ch) => {
          const short = ch.title.split(' ').slice(1).join(' ');
          return (
            <Link
              key={ch.id}
              href={`/chapter/${ch.id}`}
              className="feature-card"
              style={{ textAlign: 'left', display: 'block', textDecoration: 'none', color: 'inherit' }}
            >
              <h3 style={{ color: 'var(--primary)', marginBottom: '0.25rem' }}>บทที่ {ch.order}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text)', margin: 0 }}>{short}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
