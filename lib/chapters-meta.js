export const CHAPTERS = [
  { id: 'chapter-01', title: 'บทที่ 1 บทนำการออกแบบและวิเคราะห์อัลกอริทึม', order: 1 },
  { id: 'chapter-02', title: 'บทที่ 2 การวิเคราะห์ความซับซ้อนและสัญลักษณ์บิ๊กโอ (Big O)', order: 2 },
  { id: 'chapter-03', title: 'บทที่ 3 อาเรย์และลิสต์เชิงเส้น (Array and Linear List)', order: 3 },
  { id: 'chapter-04', title: 'บทที่ 4 สแตกและคิว (Stack and Queue)', order: 4 },
  { id: 'chapter-05', title: 'บทที่ 5 ลิงก์ลิสต์ (Linked List)', order: 5 },
  { id: 'chapter-06', title: 'บทที่ 6 ต้นไม้และไบนารีเซิร์ชทรี (Tree and Binary Search Tree)', order: 6 },
  { id: 'chapter-07', title: 'บทที่ 7 ตารางแฮช (Hash Table)', order: 7 },
  { id: 'chapter-08', title: 'บทที่ 8 กราฟ (Graph)', order: 8 },
  { id: 'chapter-09', title: 'บทที่ 9 การเรียงลำดับ (Sorting)', order: 9 },
  { id: 'chapter-10', title: 'บทที่ 10 การค้นหา (Searching)', order: 10 },
  { id: 'chapter-11', title: 'บทที่ 11 อัลกอริทึมเชิงละม่วน (Greedy Algorithm)', order: 11 },
  { id: 'chapter-12', title: 'บทที่ 12 ไดนามิกโปรแกรมมิง (Dynamic Programming)', order: 12 },
  { id: 'chapter-13', title: 'บทที่ 13 การแบ่งและพิชิต (Divide and Conquer)', order: 13 },
  { id: 'chapter-14', title: 'บทที่ 14 อัลกอริทึมสตริง (String Algorithm)', order: 14 },
  { id: 'chapter-15', title: 'บทที่ 15 อัลกอริทึมขั้นสูงและหัวข้อพิเศษ', order: 15 },
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
