#!/usr/bin/env python3
"""Convert DSA course Markdown files to HTML website pages."""

import os
import re
import html as html_lib
from pathlib import Path

ROOT = Path(__file__).resolve().parent
CONTENT_DIR = ROOT / "content"
ASSETS_CSS = "style.css"

CHAPTERS = [
    ("chapter-01", "บทที่ 1 บทนำการออกแบบและวิเคราะห์อัลกอริทึม", "Introduction to Algorithm Design and Analysis"),
    ("chapter-02", "บทที่ 2 การวิเคราะห์ความซับซ้อนและสัญลักษณ์บิ๊กโอ (Big O)", "Complexity Analysis and Big O Notation"),
    ("chapter-03", "บทที่ 3 อาเรย์และลิสต์เชิงเส้น (Array and Linear List)", "Array and Linear List"),
    ("chapter-04", "บทที่ 4 สแตกและคิว (Stack and Queue)", "Stack and Queue"),
    ("chapter-05", "บทที่ 5 ลิงก์ลิสต์ (Linked List)", "Linked List"),
    ("chapter-06", "บทที่ 6 ต้นไม้และไบนารีเซิร์ชทรี (Tree and Binary Search Tree)", "Tree and Binary Search Tree"),
    ("chapter-07", "บทที่ 7 ตารางแฮช (Hash Table)", "Hash Table"),
    ("chapter-08", "บทที่ 8 กราฟ (Graph)", "Graph"),
    ("chapter-09", "บทที่ 9 การเรียงลำดับ (Sorting)", "Sorting Algorithms"),
    ("chapter-10", "บทที่ 10 การค้นหา (Searching)", "Searching Algorithms"),
    ("chapter-11", "บทที่ 11 อัลกอริทึมเชิงละม่วน (Greedy Algorithm)", "Greedy Algorithm"),
    ("chapter-12", "บทที่ 12 ไดนามิกโปรแกรมมิง (Dynamic Programming)", "Dynamic Programming"),
    ("chapter-13", "บทที่ 13 การแบ่งและพิชิต (Divide and Conquer)", "Divide and Conquer"),
    ("chapter-14", "บทที่ 14 อัลกอริทึมสตริง (String Algorithm)", "String Algorithms"),
    ("chapter-15", "บทที่ 15 อัลกอริทึมขั้นสูงและหัวข้อพิเศษ", "Advanced Algorithms and Special Topics"),
]

SITE_NAME = "DSA Course - โครงสร้างข้อมูลและอัลกอริทึม"
SITE_DESC = "ตำบลเรียนโครงสร้างข้อมูลและอัลกอริทึม ครบถ้วน 15 บท พร้อมโค้ด C/C++ และ Python แบบฝึกหัด ข้อสอบ และภาคผนก"


def md_to_html(text: str) -> str:
    """Convert Markdown text to HTML body content."""
    lines = text.split("\n")
    out = []
    i = 0
    n = len(lines)

    in_code = False
    code_lang = ""
    code_buf = []
    in_table = False
    table_rows = []
    in_ul = False
    in_ol = False
    in_toc = False

    def flush_code():
        nonlocal in_code, code_lang, code_buf
        if code_buf:
            lang_class = f' language-{code_lang}' if code_lang else ""
            escaped = "\n".join(html_lib.escape(l) for l in code_buf)
            out.append(f'<pre><code class="{lang_class}">{escaped}</code></pre>')
        code_buf = []
        in_code = False
        code_lang = ""

    def flush_table():
        nonlocal in_table, table_rows
        if table_rows:
            out.append('<table>')
            for idx, row in enumerate(table_rows):
                tag = "th" if idx == 0 else "td"
                cells = "".join(f"<{tag}>{c}</{tag}>" for c in row)
                out.append(f"<tr>{cells}</tr>")
            out.append("</table>")
        table_rows = []
        in_table = False

    def flush_list():
        nonlocal in_ul, in_ol
        if in_ul:
            out.append("</ul>")
            in_ul = False
        if in_ol:
            out.append("</ol>")
            in_ol = False

    while i < n:
        raw = lines[i]
        line = raw.rstrip("\n")

        # Skip the first H1 heading (template adds it)
        if line.startswith("# ") and not any(out):
            i += 1
            continue

        # Fenced code block
        if line.startswith("```"):
            if in_code:
                flush_code()
            else:
                flush_list()
                flush_table()
                in_code = True
                code_lang = line[3:].strip()
                code_buf = []
            i += 1
            continue

        if in_code:
            code_buf.append(line)
            i += 1
            continue

        # Horizontal rule
        if re.match(r"^---+$", line.strip()):
            flush_list()
            flush_table()
            out.append("<hr>")
            i += 1
            continue

        # Table row
        if "|" in line and not line.strip().startswith("#"):
            cells = [c.strip() for c in line.split("|")]
            cells = [c for c in cells if c != ""]
            if cells:
                # Skip separator rows (only :, -, spaces)
                if all(re.match(r"^:?-+:?$", c) for c in cells):
                    i += 1
                    continue
                flush_list()
                if not in_table:
                    in_table = True
                    table_rows = []
                table_rows.append([inline(c) for c in cells])
                i += 1
                continue
            else:
                flush_table()
        else:
            flush_table()

        # Blank line
        if line.strip() == "":
            flush_list()
            out.append("")
            i += 1
            continue

        # Headings
        m = re.match(r"^(#{1,6})\s+(.+)$", line)
        if m:
            flush_list()
            flush_table()
            level = len(m.group(1))
            content = inline(m.group(2).strip())
            anchor = re.sub(r"[^\w\s-]", "", content).strip().lower().replace(" ", "-")
            out.append(f'<h{level} id="{anchor}">{content}</h{level}>')
            i += 1
            continue

        # Ordered list
        m = re.match(r"^(\d+)\.\s+(.+)$", line)
        if m:
            if not in_ol:
                if in_ul:
                    out.append("</ul>")
                    in_ul = False
                out.append("<ol>")
                in_ol = True
            out.append(f"<li>{inline(m.group(2))}</li>")
            i += 1
            continue
        else:
            if in_ol:
                out.append("</ol>")
                in_ol = False

        # Unordered list
        m = re.match(r"^[-*]\s+(.+)$", line)
        if m:
            if not in_ul:
                if in_ol:
                    out.append("</ol>")
                    in_ol = False
                out.append("<ul>")
                in_ul = True
            out.append(f"<li>{inline(m.group(1))}</li>")
            i += 1
            continue
        else:
            if in_ul:
                out.append("</ul>")
                in_ul = False

        # Mermaid block start
        m = re.match(r"^```mermaid\s*$", line)
        if m:
            flush_list()
            flush_table()
            buf = []
            i += 1
            while i < n and not lines[i].strip().startswith("```"):
                buf.append(lines[i])
                i += 1
            i += 1  # skip closing ```
            escaped_mermaid = "\n".join(html_lib.escape(l) for l in buf)
            out.append(f'<div class="mermaid">{escaped_mermaid}</div>')
            continue

        # Paragraph
        out.append(f"<p>{inline(line)}</p>")
        i += 1

    flush_code()
    flush_table()
    flush_list()
    return "\n".join(out)


def inline(text: str) -> str:
    """Convert inline Markdown to HTML."""
    # Code spans first
    text = re.sub(r"`([^`]+)`", r'<code>\1</code>', text)
    # Bold
    text = re.sub(r"\*\*(.+?)\*\*", r"<strong>\1</strong>", text)
    # Italic
    text = re.sub(r"\*(.+?)\*", r"<em>\1</em>", text)
    # Links
    text = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", r'<a href="\2">\1</a>', text)
    # Escape HTML but preserve tags we just added
    return text


def build_nav(current_id=None):
    items = []
    for cid, title_th, title_en in CHAPTERS:
        active = ' class="active"' if cid == current_id else ""
        # Extract short title (remove Thai chapter prefix)
        short = title_th.split(" ", 1)[1] if " " in title_th else title_th
        items.append(f'    <li><a href="{cid}.html"{active}><span class="chapter-number">{cid.split("-")[1]}</span>{short}</a></li>')
    return "\n".join(items)


def prev_next(current_id):
    idx = next((i for i, (cid, _, _) in enumerate(CHAPTERS) if cid == current_id), None)
    if idx is None:
        return "", ""
    prev_html = ""
    next_html = ""
    if idx > 0:
        pcid, ptitle, _ = CHAPTERS[idx - 1]
        short = ptitle.split(" ", 1)[1] if " " in ptitle else ptitle
        prev_html = f'<a href="{pcid}.html" class="nav-btn"><span class="sr-only">ย้อนกลับ</span>← บทก่อนหน้า: {short}</a>'
    if idx < len(CHAPTERS) - 1:
        ncid, ntitle, _ = CHAPTERS[idx + 1]
        short = ntitle.split(" ", 1)[1] if " " in ntitle else ntitle
        next_html = f'<a href="{ncid}.html" class="nav-btn">บทถัดไป: {short} <span class="sr-only">ถัดไป</span>→</a>'
    return prev_html, next_html


def page_template(title, body, current_id=None, og_image=None, og_type="website", canonical_path="/"):
    og_url = f"https://maaeyeng2517.github.io/algotithm-dsa{canonical_path}"
    og_title = f"{title} | {SITE_NAME}"
    og_desc = SITE_DESC
    nav_items = ""
    for cidx, ctitle_th, _ in CHAPTERS:
        active = ' class="active"' if cidx == current_id else ""
        short = ctitle_th.split(" ", 1)[1] if " " in ctitle_th else ctitle_th
        nav_items += f'<li><a href="{cidx}.html"{active}>{short}</a></li>\n        '
    appendices_active = ' class="active"' if current_id == "appendices" else ""
    return f"""<!DOCTYPE html>
<html lang="th">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>{html_lib.escape(og_title)}</title>
  <meta name="description" content="{html_lib.escape(og_desc)}">
  <meta name="author" content="MaeeYeng">
  <meta name="keywords" content="โครงสร้างข้อมูล, อัลกอริทึม, DSA, Data Structures, Algorithms, Big O, Sorting, Searching, Graph, Tree, Hash Table, Dynamic Programming, Greedy, Divide and Conquer, C, Python, Java">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="{html_lib.escape(og_url)}">
  <link rel="stylesheet" href="{ASSETS_CSS}">
  <!-- Open Graph -->
  <meta property="og:title" content="{html_lib.escape(og_title)}">
  <meta property="og:description" content="{html_lib.escape(og_desc)}">
  <meta property="og:type" content="{og_type}">
  <meta property="og:url" content="{html_lib.escape(og_url)}">
  {'<meta property="og:image" content="' + html_lib.escape(og_image) + '">' if og_image else ''}
  <meta property="og:site_name" content="{html_lib.escape(SITE_NAME)}">
  <meta property="og:locale" content="th_TH">
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="{html_lib.escape(og_title)}">
  <meta name="twitter:description" content="{html_lib.escape(og_desc)}">
  {'<meta name="twitter:image" content="' + html_lib.escape(og_image) + '">' if og_image else ''}
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script>mermaid.initialize({{ startOnLoad: true, theme: 'base', securityLevel: 'loose' }});</script>
</head>
<body>
  <a href="#main-content" class="skip-link">ข้ามไปยังเนื้อหาหลัก</a>
  <header>
    <div class="container header-inner">
      <a href="index.html" class="logo">
        <div class="logo-icon">DSA</div>
        <span>{SITE_NAME}</span>
      </a>
      <button class="mobile-menu-btn" aria-label="เปิดเมนูนำทาง" aria-expanded="false" onclick="toggleMenu()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 12h16M4 18h16"></path></svg>
      </button>
      <ul class="nav-menu" id="nav-menu">
        <li><a href="index.html"{" class=\"active\"" if current_id is None else ""}>หน้าแรก</a></li>
        {nav_items}
        <li><a href="appendices.html"{appendices_active}>ภาคผนก</a></li>
      </ul>
    </div>
  </header>

  <div class="main">
    <div class="container">
{body}
    </div>
  </div>

  <footer>
    <div class="container footer-inner">
      <p class="footer-text">&copy; 2026 MaeeYeng — โครงสร้างข้อมูลและอัลกอริทึม. สงวนลิขสิทธิ์ทุกประการ.</p>
      <ul class="footer-links">
        <li><a href="index.html">หน้าแรก</a></li>
        <li><a href="appendices.html">ภาคผนก</a></li>
      </ul>
    </div>
  </footer>

  <script>
    function toggleMenu() {{
      const menu = document.getElementById('nav-menu');
      const btn = document.querySelector('.mobile-menu-btn');
      const open = menu.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
    }}
    // Close menu when clicking a link
    document.querySelectorAll('.nav-menu a').forEach(a => {{
      a.addEventListener('click', () => {{
        document.getElementById('nav-menu').classList.remove('open');
        document.querySelector('.mobile-menu-btn').setAttribute('aria-expanded', 'false');
      }});
    }});
  </script>
</body>
</html>"""


def chapter_page(cid, title_th, title_en):
    md_path = CONTENT_DIR / f"{cid}.md"
    if not md_path.exists():
        print(f"WARNING: {md_path} not found, skipping")
        return
    md_text = md_path.read_text(encoding="utf-8")
    body_html = md_to_html(md_text)
    prev_btn, next_btn = prev_next(cid)

    # Extract first H1 as title
    h1_match = re.search(r"^#\s+(.+)$", md_text, re.MULTILINE)
    display_title = h1_match.group(1).strip() if h1_match else title_th

    body = f"""
  <nav class="breadcrumb">
    <a href="index.html">หน้าแรก</a>
    <span>›</span>
    <span>{display_title}</span>
  </nav>

  <div class="content-grid">
    <aside class="sidebar">
      <div class="sidebar-card">
        <h3>สารบัญบทเรียน<span class="badge">15 บท</span></h3>
        <ul class="chapter-list">
{build_nav(cid)}
        </ul>
      </div>
    </aside>

    <main class="content-area" id="main-content">
      <article>
        <div class="article-meta">
          <span class="meta-item"><strong>บทเรียน:</strong> {display_title}</span>
          <span class="meta-item"><strong>หมวด:</strong> โครงสร้างข้อมูลและอัลกอริทึม</span>
          <span class="meta-item"><strong>ภาษา:</strong> ไทย / English</span>
        </div>
        <h1>{html_lib.escape(display_title)}</h1>
        {body_html}
        <div class="chapter-nav">
          {prev_btn}
          {next_btn}
        </div>
      </article>
    </main>
  </div>
"""
    html = page_template(display_title, body, current_id=cid, canonical_path=f"/{cid}.html")
    out_path = ROOT / f"{cid}.html"
    out_path.write_text(html, encoding="utf-8")
    print(f"Generated {out_path.name}")


def index_page():
    rows = []
    for cid, title_th, title_en in CHAPTERS:
        short = title_th.split(" ", 1)[1] if " " in title_th else title_th
        rows.append(f"""
          <tr>
            <td><strong>{cid.split('-')[1]}</strong></td>
            <td>{html_lib.escape(title_th)}</td>
            <td>{html_lib.escape(title_en)}</td>
            <td><a href="{cid}.html" class="btn btn-outline" style="padding:0.4rem 0.8rem;font-size:0.85rem;">อ่านบทเรียน</a></td>
          </tr>
""")

    body = f"""
  <nav class="breadcrumb">
    <span>หน้าแรก</span>
  </nav>

  <div class="content-grid">
    <aside class="sidebar">
      <div class="sidebar-card">
        <h3>สารบัญบทเรียน<span class="badge">15 บท</span></h3>
        <ul class="chapter-list">
{build_nav()}
        </ul>
      </div>
    </aside>

    <main class="content-area" id="main-content">
      <article>
        <h1>{html_lib.escape(SITE_NAME)}</h1>
        <p class="lead" style="font-size:1.1rem;color:var(--text-muted);margin-bottom:1.5rem;">
          {html_lib.escape(SITE_DESC)} เหมาะสำหรับนักศึกษาและผู้สนใจเรียนโครงสร้างข้อมูลและอัลกอริทึม ตั้งแต่ระดับเริ่มต้นจนถึงขั้นสูง
        </p>

        <div class="callout callout-info">
          <strong>เกี่ยวกับเว็บไซต์นี้</strong>
          เว็บไซต์นี้รวบรวมเนื้อหาโครงสร้างข้อมูลและอัลกอริทึมครบถ้วน 15 บท พร้อมคำอธิบายเป็นภาษาไทย ตัวอย่างโค้ดภาษา C/C++ และ Python แบบฝึกหัด ข้อสอบ และภาคผนก สามารถอ่านได้ทั้งบนคอมพิวเตอร์และมือถือ
        </div>

        <h2>สารบัญบทเรียนทั้งหมด</h2>
        <table>
          <thead>
            <tr><th>บท</th><th>หัวข้อ (ภาษาไทย)</th><th>หัวข้อ (ภาษาอังกฤษ)</th><th>เข้าถึง</th></tr>
          </thead>
          <tbody>
            {"".join(rows)}
          </tbody>
        </table>

        <h2>สิ่งที่คุณจะได้เรียนรู้</h2>
        <ul>
          <li>พื้นฐานอัลกอริทึมและการวิเคราะห์ความซับซ้อน (Big O, Ω, Θ)</li>
          <li>โครงสร้างข้อมูลเชิงเส้น: อาเรย์ ลิสต์ สแตก คิว ลิงก์ลิสต์</li>
          <li>โครงสร้างข้อมูลไม่เชิงเส้น: ต้นไม้ ไบนารีเซิร์ชทรี ตารางแฮช กราฟ</li>
          <li>อัลกอริทึมสำคัญ: เรียงลำดับ ค้นหา เชิงละม่วน ไดนามิกโปรแกรมมิง แบ่งและพิชิต</li>
          <li>อัลกอริทึมขั้นสูง: เส้นทางสั้นที่สุด ค้นหาข้อความ ความซับซ้อนเชิงคำนวการ P/NP</li>
          <li>ฝึกเขียนโค้ดภาษา C/C++ และ Python ประกอบทุกบท</li>
        </ul>

        <div class="chapter-nav">
          <a href="chapter-01.html" class="nav-btn btn-primary">เริ่มอ่านบทที่ 1 →</a>
        </div>
      </article>
    </main>
  </div>
"""
    html = page_template(SITE_NAME, body, current_id=None, canonical_path="/")
    out_path = ROOT / "index.html"
    out_path.write_text(html, encoding="utf-8")
    print(f"Generated {out_path.name}")


def appendices_page():
    md_path = CONTENT_DIR / "appendices.md"
    md_text = md_path.read_text(encoding="utf-8")
    body_html = md_to_html(md_text)
    h1_match = re.search(r"^#\s+(.+)$", md_text, re.MULTILINE)
    display_title = h1_match.group(1).strip() if h1_match else "ภาคผนกท้ายเล่ม"

    body = f"""
  <nav class="breadcrumb">
    <a href="index.html">หน้าแรก</a>
    <span>›</span>
    <span>{display_title}</span>
  </nav>

  <div class="content-grid">
    <aside class="sidebar">
      <div class="sidebar-card">
        <h3>สารบัญบทเรียน<span class="badge">15 บท</span></h3>
        <ul class="chapter-list">
{build_nav()}
        </ul>
      </div>
    </aside>

    <main class="content-area" id="main-content">
      <article>
        <div class="article-meta">
          <span class="meta-item"><strong>หมวด:</strong> ภาคผนกท้ายเล่ม</span>
          <span class="meta-item"><strong>เนื้อหา:</strong> คำศัพท์ คำแนะนำ แบบฝึกหัดรวม แหล่งเรียนรู้</span>
        </div>
        <h1>{html_lib.escape(display_title)}</h1>
        {body_html}
      </article>
    </main>
  </div>
"""
    html = page_template(display_title, body, current_id="appendices", canonical_path="/appendices.html")
    out_path = ROOT / "appendices.html"
    out_path.write_text(html, encoding="utf-8")
    print(f"Generated {out_path.name}")


def main():
    index_page()
    appendices_page()
    for cid, title_th, title_en in CHAPTERS:
        chapter_page(cid, title_th, title_en)
    print("\nAll HTML files generated successfully.")


if __name__ == "__main__":
    main()