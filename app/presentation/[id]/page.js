import Presentation from '../../../components/Presentation';
import { CHAPTERS } from '../../../lib/chapters-meta';

export async function generateStaticParams() {
  return CHAPTERS.map((ch) => ({ id: ch.id }));
}

export default async function ChapterPresentationPage({ params }) {
  const resolvedParams = await params;
  return <Presentation chapterId={resolvedParams.id} />;
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const chapter = CHAPTERS.find((ch) => ch.id === resolvedParams.id);
  return {
    title: `นำเสนอ ${chapter?.title || resolvedParams.id} - DSA Course`,
    description: `นำเสนอเนื้อหา ${chapter?.title || resolvedParams.id} ในรูปแบบสไลด์ 16:9 แนวนอน`,
  };
}
