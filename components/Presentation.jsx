'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { CHAPTERS } from '../lib/chapters-meta';

const SLIDE_RATIO = 16 / 9;

export default function Presentation({ chapterId }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [pausedTime, setPausedTime] = useState(0);

  const slides = chapterId ? CHAPTERS.filter(ch => ch.id === chapterId) : CHAPTERS;
  const totalSlides = slides.length;

  // Timer logic
  useEffect(() => {
    let interval;
    if (isPlaying && startTime) {
      interval = setInterval(() => {
        setTimer(Date.now() - startTime.getTime() + pausedTime);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, startTime, pausedTime]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const m = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    const s = (totalSeconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const togglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
      setPausedTime((prev) => prev + (Date.now() - startTime.getTime()));
      setStartTime(null);
    } else {
      setIsPlaying(true);
      setStartTime(new Date());
    }
  };

  const resetTimer = () => {
    setIsPlaying(false);
    setTimer(0);
    setPausedTime(0);
    setStartTime(null);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = useCallback(() => {
    if (currentSlide < totalSlides - 1) setCurrentSlide(currentSlide + 1);
  }, [currentSlide, totalSlides]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  }, [currentSlide]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'r' || e.key === 'R') {
        resetTimer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, togglePlay, resetTimer]);

  const chapter = slides[currentSlide];
  const shortTitle = chapter.title.split(' ').slice(1).join(' ');
  const progress = ((currentSlide + 1) / totalSlides) * 100;

  return (
    <div className="presentation-app">
      {/* Presentation container - 16:9 horizontal landscape */}
      <div className="presentation-stage">
        <div className="slide" style={{ aspectRatio: SLIDE_RATIO }}>
          {/* Slide content */}
          <div className="slide-header">
            <div className="slide-brand">DSA Course</div>
            <div className="slide-counter">
              {currentSlide + 1} / {totalSlides}
            </div>
          </div>

          <div className="slide-body">
            <h1 className="slide-title">บทที่ {chapter.order}</h1>
            <h2 className="slide-subtitle">{shortTitle}</h2>

            <div className="slide-meta">
              <span className="meta-item">
                <span className="meta-label">บทเรียน:</span>
                {chapter.title}
              </span>
            </div>

            <div className="slide-description">
              {chapter.title.includes('บทนำ')
                ? 'พื้นฐานความรู้เรื่องอัลกอริทึมและโครงสร้างข้อมูล คุณสมบัติของอัลกอริทึมที่ดี ภาษาเทียม และผังงาน'
                : chapter.title.includes('ความซับซ้อน')
                ? 'การวิเคราะห์เวลาและพื้นที่ สัญลักษณ์ Big O, Ω, Θ การนับขั้นตอน และทฤษฎีบทมาสเตอร์'
                : chapter.title.includes('อาเรย์')
                ? 'อาเรย์หนึ่งมิติและสองมิติ การจัดเก็บในหน่วยความจำ การดำเนินการ และลิสต์เชิงเส้น'
                : chapter.title.includes('สแตก')
                ? 'หลักการ LIFO และ FIFO การดำเนินการ push, pop, enqueue, dequeue คิวแบบวงกลม และเด็กซ์'
                : chapter.title.includes('ลิงก์ลิสต์')
                ? 'โหนดและตัวชี้ ลิงก์ลิสต์เชิงเดียว เชิงสอง และแบบวงกลม การแทรก ลบ ค้นหา ทบทวน'
                : chapter.title.includes('ต้นไม้')
                ? 'คำศัพท์ต้นไม้ ไบนารีทรี และไบนารีเซิร์ชทรี การค้นหา แทรก ลบ และการทบทวนทุกแบบ'
                : chapter.title.includes('แฮช')
                ? 'ตารางแฮช ฟังก์ชันแฮช การชนกันและวิธีแก้ไข ปัจจัยโหลด และ rehashing'
                : chapter.title.includes('กราฟ')
                ? 'คำศัพท์กราฟ การแทนกราฟ BFS และ DFS การประยุกต์ใช้กราฟในสถานการณ์จริง'
                : chapter.title.includes('เรียงลำดับ')
                ? 'บับเบิล ซิล렉ชัน อินเซิร์ชชัน เมอร์จ์ ควิก ฮีปซอร์ต การเปรียบเทียบและเสถียรภาพ'
                : chapter.title.includes('ค้นหา')
                ? 'ค้นหาเชิงเส้น ค้นหาแบบไบนารี และค้นหาแบบฟีโบนักชี เปรียบเทียบประสิทธิภาพ'
                : chapter.title.includes('ละม่วน')
                ? 'อัลกอริทึมเชิงละม่วน ฮัฟฟ์แมน โครสคัล ปริมส์ และข้อจำกัดของเชิงละม่วน'
                : chapter.title.includes('ไดนามิก')
                ? 'ไดนามิกโปรแกรมมิง ฟีโบนักชี กระเป๋าเดินทาง 0/1 และ LCS บนลงล่างและล่างขึ้นบน'
                : chapter.title.includes('แบ่งและพิชิต')
                ? 'กลยุทธ์แบ่งและพิชิต เมอร์จ์ซอร์ต ควิกซอร์ต สตรัสเซน และทฤษฎีบทมาสเตอร์'
                : chapter.title.includes('สตริง')
                ? 'ค้นหาข้อความ Brute Force KMP Boyer-Moore Rabin-Karp และทรีอา'
                : 'อัลกอริทึมขั้นสูง ไดจ์สตรา ฟลอยด์-วอแชลล์ P/NP-complete และอัลกอริทึมประมาณผล'
              }
            </div>

            <div className="slide-footer-actions">
              <Link
                href={`/chapter/${chapter.id}`}
                className="slide-btn slide-btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                อ่านบทเรียนเต็ม →
              </Link>
              <a
                href={`https://github.com/MaaeYeng2517/algotithm-dsa/blob/main/content/${chapter.id}.md`}
                className="slide-btn slide-btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                📄 ดู Markdown
              </a>
            </div>
          </div>

          <div className="slide-footer">
            <div className="slide-footer-left">
              <span className="slide-topic">โครงสร้างข้อมูลและอัลกอริทึม</span>
            </div>
            <div className="slide-footer-right">
              <span className="slide-page">{currentSlide + 1} / {totalSlides}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Controls overlay */}
      <div className="presentation-controls">
        <div className="controls-container">
          {/* Timer */}
          <div className="timer-display">
            <span className="timer-label">เวลา</span>
            <span className="timer-value">{formatTime(timer)}</span>
          </div>

          {/* Navigation */}
          <div className="nav-controls">
            <button
              className="nav-btn nav-btn-prev"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              ← ก่อนหน้า
            </button>
            <button
              className="nav-btn nav-btn-play"
              onClick={togglePlay}
            >
              {isPlaying ? '⏸ หยุดชั่วคราว' : '▶ เริ่มจับเวลา'}
            </button>
            <button
              className="nav-btn nav-btn-reset"
              onClick={resetTimer}
            >
              ↺ รีเซ็ตเวลา
            </button>
            <button
              className="nav-btn nav-btn-next"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
            >
              ถัดไป →
            </button>
          </div>

          {/* Progress */}
          <div className="progress-container">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="progress-text">
              {currentSlide + 1} จาก {totalSlides} บท
            </div>
          </div>

          {/* Jump to slide */}
          <div className="jump-control">
            <span className="jump-label">ไปยังสไลด์:</span>
            <select
              value={currentSlide + 1}
              onChange={(e) => goToSlide(parseInt(e.target.value) - 1)}
            >
              {slides.map((ch, i) => (
                <option key={ch.id} value={i + 1}>
                  {i + 1}. {ch.title.split(' ').slice(1).join(' ')}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Keyboard hint */}
      <div className="keyboard-hint">
        ← → เลื่อนสไลด์ | Space 播放/หยุด | R รีเซ็ตเวลา
      </div>
    </div>
  );
}
