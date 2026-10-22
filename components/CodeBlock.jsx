'use client';

import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import prismV4 from 'react-syntax-highlighter/dist/esm/styles/prism/a11y-dark';
import React from 'react';

const LANGUAGE_MAP = {
  js: 'javascript',
  ts: 'typescript',
  tsx: 'typescript',
  py: 'python',
  python: 'python',
  c: 'c',
  cpp: 'cpp',
  'c++': 'cpp',
  java: 'java',
  html: 'html',
  css: 'css',
  json: 'json',
  bash: 'bash',
  sh: 'bash',
  sql: 'sql',
  txt: 'text',
  plain: 'text',
  mermaid: 'mermaid',
  pseudocode: 'text',
};

export default function CodeBlock({ className, children }) {
  const classNameStr = className || '';
  const langMatch = classNameStr.match(/language-(\w+)/);
  const rawLang = langMatch ? langMatch[1] : 'text';
  const language = LANGUAGE_MAP[rawLang.toLowerCase()] || 'text';

  // Skip mermaid blocks here (handled separately)
  if (language === 'mermaid') {
    return null;
  }

  const code = String(children).replace(/\n$/, '');

  return (
    <div className="code-block">
      <SyntaxHighlighter
        language={language}
        style={prismV4}
        showLineNumbers={false}
        customStyle={{
          margin: 0,
          padding: '1rem',
          borderRadius: '6px',
          fontSize: '0.875rem',
          lineHeight: '1.5',
        }}
        codeTagProps={{ className: 'language-' + language }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
