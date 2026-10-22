import Layout from '../../components/Layout';
import MarkdownContent from '../../components/MarkdownContent';
import { readAppendicesMarkdown } from '../../lib/chapters-server';

export async function generateMetadata() {
  return {
    title: 'ภาคผนกท้ายเล่ม - DSA Course',
    description: 'คำศัพท์ คำแนะนำ แบบฝึกหัดรวม แหล่งเรียนรู้',
  };
}

export default async function AppendicesPage() {
  const data = await readAppendicesMarkdown();

  if (!data) {
    return (
      <Layout>
        <div style={{ padding: '2rem', textAlign: 'center' }}>
          <h1>ไม่พบภาคผนก</h1>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 1.5rem' }}>
        <nav style={{ marginBottom: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <a href="/" style={{ color: 'var(--primary)', textDecoration: 'none' }}>หน้าแรก</a>
          <span>›</span>
          <span>ภาคผนกท้ายเล่ม</span>
        </nav>
        <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '1rem' }}>ภาคผนกท้ายเล่ม</h1>
        <a
          href="https://github.com/MaaeYeng2517/algotithm-dsa/blob/main/content/appendices.md"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', marginBottom: '1.5rem', color: 'var(--primary)', fontSize: '0.9rem', textDecoration: 'underline' }}
        >
          📄 ดูไฟล์ต้นฉบับบน GitHub (appendices.md)
        </a>
        <MarkdownContent content={data.content} />
      </div>
    </Layout>
  );
}
