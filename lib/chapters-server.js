import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content');

export async function readChapterMarkdown(id) {
  const filePath = path.join(CONTENT_DIR, `${id}.md`);
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return { frontmatter: data, content };
  } catch (error) {
    return null;
  }
}

export async function readAppendicesMarkdown() {
  const filePath = path.join(CONTENT_DIR, 'appendices.md');
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return { frontmatter: data, content };
  } catch (error) {
    return null;
  }
}
