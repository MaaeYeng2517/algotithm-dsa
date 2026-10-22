import { getChapterById, getPrevNext } from '../../../lib/chapters-meta';
import { readChapterMarkdown } from '../../../lib/chapters-server';
import { ChapterLayout } from '../../../components/Layout';

export async function generateStaticParams() {
  const ids = [
    'chapter-01','chapter-02','chapter-03','chapter-04','chapter-05',
    'chapter-06','chapter-07','chapter-08','chapter-09','chapter-10',
    'chapter-11','chapter-12','chapter-13','chapter-14','chapter-15',
  ];
  return ids.map((id) => ({ id }));
}

export async function generateMetadata({ params }) {
  const chapter = getChapterById(params.id);
  return {
    title: chapter ? chapter.title : 'บทเรียน',
    description: 'เนื้อหาบทเรียนโครงสร้างข้อมูลและอัลกอริทึม',
  };
}

export default async function ChapterPage({ params }) {
  const chapter = getChapterById(params.id);
  const { prev, next } = getPrevNext(params.id);
  const data = await readChapterMarkdown(params.id);

  if (!data) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>ไม่พบบทเรียนที่ต้องการ</h1>
        <a href="/" style={{ color: 'var(--primary)' }}>กลับไปหน้าแรก</a>
      </div>
    );
  }

  return (
    <ChapterLayout chapterId={params.id} content={data.content} readmeUrl={`https://github.com/MaaeYeng2517/algotithm-dsa/blob/main/content/${params.id}.md`}>
      {null}
    </ChapterLayout>
  );
}
