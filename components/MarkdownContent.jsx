'use client';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import CodeBlock from './CodeBlock';
import Mermaid from './Mermaid';

function isMermaidNode(node) {
  return (
    node.type === 'code' &&
    node.lang &&
    node.lang.trim().toLowerCase() === 'mermaid'
  );
}

export default function MarkdownContent({ content }) {
  const components = {
    code({ node, inline, className, children, ...props }) {
      if (inline) {
        return <code className="inline-code">{children}</code>;
      }

      const lang = (node.lang || 'text').toLowerCase();

      if (lang === 'mermaid') {
        return <Mermaid diagram={String(children).replace(/\n$/, '')} />;
      }

      return (
        <CodeBlock className={`language-${node.lang}`} {...props}>
          {children}
        </CodeBlock>
      );
    },
    h1({ children, ...props }) {
      return <h1 {...props} className="heading-1">{children}</h1>;
    },
    h2({ children, ...props }) {
      return <h2 {...props} className="heading-2">{children}</h2>;
    },
    h3({ children, ...props }) {
      return <h3 {...props} className="heading-3">{children}</h3>;
    },
    h4({ children, ...props }) {
      return <h4 {...props} className="heading-4">{children}</h4>;
    },
    table() {
      return <div className="table-wrapper"><table>{/* children handled by react-markdown */}</table></div>;
    },
    thead({ children }) {
      return <thead>{children}</thead>;
    },
    tbody({ children }) {
      return <tbody>{children}</tbody>;
    },
    tr({ children }) {
      return <tr>{children}</tr>;
    },
    th({ children }) {
      return <th>{children}</th>;
    },
    td({ children }) {
      return <td>{children}</td>;
    },
  };

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={components}
      className="prose-content"
    >
      {content}
    </ReactMarkdown>
  );
}
