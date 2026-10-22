export const CHAPTERS = [
  { id: 'chapter-01', title: 'บทที่ 1 บทนำการออกแบบและวิเคราะห์อัลกอริทึม', order: 1, related: ['chapter-02', 'chapter-03'] },
  { id: 'chapter-02', title: 'บทที่ 2 การวิเคราะห์ความซับซ้อนและสัญลักษณ์บิ๊กโอ (Big O)', order: 2, related: ['chapter-09', 'chapter-10', 'chapter-13'] },
  { id: 'chapter-03', title: 'บทที่ 3 อาเรย์และลิสต์เชิงเส้น (Array and Linear List)', order: 3, related: ['chapter-04', 'chapter-05'] },
  { id: 'chapter-04', title: 'บทที่ 4 สแตกและคิว (Stack and Queue)', order: 4, related: ['chapter-05', 'chapter-08'] },
  { id: 'chapter-05', title: 'บทที่ 5 ลิงก์ลิสต์ (Linked List)', order: 5, related: ['chapter-04', 'chapter-06'] },
  { id: 'chapter-06', title: 'บทที่ 6 ต้นไม้และไบนารีเซิร์ชทรี (Tree and Binary Search Tree)', order: 6, related: ['chapter-07', 'chapter-08', 'chapter-09'] },
  { id: 'chapter-07', title: 'บทที่ 7 ตารางแฮช (Hash Table)', order: 7, related: ['chapter-08', 'chapter-10', 'chapter-14'] },
  { id: 'chapter-08', title: 'บทที่ 8 กราฟ (Graph)', order: 8, related: ['chapter-11', 'chapter-15', 'chapter-06'] },
  { id: 'chapter-09', title: 'บทที่ 9 การเรียงลำดับ (Sorting)', order: 9, related: ['chapter-02', 'chapter-13'] },
  { id: 'chapter-10', title: 'บทที่ 10 การค้นหา (Searching)', order: 10, related: ['chapter-02', 'chapter-07', 'chapter-14'] },
  { id: 'chapter-11', title: 'บทที่ 11 อัลกอริทึมเชิงละม่วน (Greedy Algorithm)', order: 11, related: ['chapter-08', 'chapter-12', 'chapter-15'] },
  { id: 'chapter-12', title: 'บทที่ 12 ไดนามิกโปรแกรมมิง (Dynamic Programming)', order: 12, related: ['chapter-11', 'chapter-13', 'chapter-15'] },
  { id: 'chapter-13', title: 'บทที่ 13 การแบ่งและพิชิต (Divide and Conquer)', order: 13, related: ['chapter-09', 'chapter-12'] },
  { id: 'chapter-14', title: 'บทที่ 14 อัลกอริทึมสตริง (String Algorithm)', order: 14, related: ['chapter-10', 'chapter-07'] },
  { id: 'chapter-15', title: 'บทที่ 15 อัลกอริทึมขั้นสูงและหัวข้อพิเศษ', order: 15, related: ['chapter-08', 'chapter-11', 'chapter-12'] },
];

export function getChapterById(id) {
  return CHAPTERS.find(ch => ch.id === id) || null;
}

export function getPrevNext(id) {
  const index = CHAPTERS.findIndex(ch => ch.id === id);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? CHAPTERS[index - 1] : null,
    next: index < CHAPTERS.length - 1 ? CHAPTERS[index + 1] : null,
  };
}
