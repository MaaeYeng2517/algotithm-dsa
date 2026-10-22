import Presentation from '../../../components/Presentation';
import { CHAPTERS } from '../../../lib/chapters-meta';

export async function generateStaticParams() {
  return CHAPTERS.map((ch) => ({ id: ch.id }));
}

export default function ChapterPresentationPage({ params }) {
  const chapter = CHAPTERS.find((ch) => ch.id === params.id);
  return <Presentation chapterId={params.id} />;
}

export async function generateMetadata({ params }) {
  const chapter = CHAPTERS.find((ch) => ch.id === params.id);
  return {
    title: `นำเสนอ ${chapter?.title || params.id} - DSA Course`,
    description: `นำเสนอเนื้อหา ${chapter?.title || params.id} ในรูปแบบสไลด์ 16:9 แนวนอน`,
  };
}
