import '../styles/globals.css';
import Layout from '../components/Layout';

export const metadata = {
  title: 'DSA Course - โครงสร้างข้อมูลและอัลกอริทึม',
  description: 'ตำบลเรียนโครงสร้างข้อมูลและอัลกอริทึม ครบถ้วน 15 บท พร้อมโค้ด C/C++ และ Python แบบฝึกหัด ข้อสอบ และภาคผนก',
  keywords: ['โครงสร้างข้อมูล', 'อัลกอริทึม', 'DSA', 'Data Structures', 'Algorithms', 'Big O', 'Sorting', 'Searching'],
  openGraph: {
    title: 'DSA Course - โครงสร้างข้อมูลและอัลกอริทึม',
    description: 'ตำบลเรียนโครงสร้างข้อมูลและอัลกอริทึม ครบถ้วน 15 บท พร้อมโค้ด C/C++ และ Python แบบฝึกหัด ข้อสอบ และภาคผนก',
    type: 'website',
    locale: 'th_TH',
    siteName: 'DSA Course',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSA Course - โครงสร้างข้อมูลและอัลกอริทึม',
    description: 'ตำบลเรียนโครงสร้างข้อมูลและอัลกอริทึม ครบถ้วน 15 บท พร้อมโค้ด C/C++ และ Python แบบฝึกหัด ข้อสอบ และภาคผนก',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
