# บทที่ 4 การเรียงลำดับข้อมูลและอัลกอริทึมการเรียงลำดับ

> **Sorting Algorithms**

---

## 4.1 วัตถุประสงค์การเรียนรู้

เมื่อศึกษาบทนี้แล้ว นักศึกษาสามารถ:

1. อธิบายความหมายและความสำคัญของการเรียงลำดับข้อมูลได้
2. อธิบายแนวคิดพื้นฐานของ Sorting Algorithm ได้
3. อธิบายหลักการทำงานของ Bubble Sort ได้
4. อธิบายหลักการทำงานของ Selection Sort ได้
5. อธิบายหลักการทำงานของ Insertion Sort ได้
6. อธิบายหลักการทำงานของ Merge Sort ได้
7. อธิบายหลักการทำงานของ Quick Sort ได้
8. วิเคราะห์ Time Complexity และ Space Complexity ของ Sorting Algorithm ได้
9. เปรียบเทียบประสิทธิภาพของ Sorting Algorithms แต่ละประเภทได้
10. เลือก Sorting Algorithm ให้เหมาะสมกับลักษณะของข้อมูลได้
11. เขียนโปรแกรม Sorting Algorithm และทดสอบผลลัพธ์ได้
12. วิเคราะห์ Performance ของ Sorting Algorithm จากข้อมูลจริงได้
13. ประยุกต์ใช้ Sorting Algorithm กับปัญหาด้าน Database, Data Science และ AI ได้

---

# 4.2 ผลลัพธ์การเรียนรู้

เมื่อสิ้นสุดบทนี้ นักศึกษาสามารถ:

| LO      | ผลลัพธ์การเรียนรู้                                                |
| ------- | ----------------------------------------------------------------- |
| **LO1** | อธิบายแนวคิดและความสำคัญของ Sorting Algorithm ได้                 |
| **LO2** | อธิบายขั้นตอนการทำงานของ Sorting Algorithm แต่ละประเภทได้         |
| **LO3** | เขียนโปรแกรม Bubble, Selection และ Insertion Sort ได้             |
| **LO4** | อธิบายแนวคิด Divide and Conquer ของ Merge Sort และ Quick Sort ได้ |
| **LO5** | วิเคราะห์ Time Complexity และ Space Complexity ได้                |
| **LO6** | เปรียบเทียบ Sorting Algorithms จากประสิทธิภาพได้                  |
| **LO7** | ทดลองวัด Performance ของ Algorithm กับข้อมูลขนาดต่าง ๆ ได้        |
| **LO8** | เลือก Algorithm ให้เหมาะกับลักษณะของปัญหาได้                      |
| **LO9** | ประยุกต์ใช้ Sorting Algorithm กับระบบสารสนเทศและ AI ได้           |

---

# 4.3 บทนำ

การเรียงลำดับข้อมูล หรือ **Sorting** เป็นหนึ่งในกระบวนการพื้นฐานที่สำคัญที่สุดของ Computer Science และ Algorithm

ตัวอย่างข้อมูลที่ยังไม่ได้เรียงลำดับ:

```text
45, 12, 89, 34, 7, 56, 23
```

หากต้องการเรียงจากน้อยไปมาก:

```text
7, 12, 23, 34, 45, 56, 89
```

หรือเรียงจากมากไปน้อย:

```text
89, 56, 45, 34, 23, 12, 7
```

การเรียงลำดับอาจดูเหมือนเป็นงานง่าย แต่เมื่อข้อมูลมีขนาดใหญ่มาก การเลือก Algorithm ที่เหมาะสมจะส่งผลโดยตรงต่อประสิทธิภาพของระบบ
```text
ตัวอย่างระบบที่ใช้ Sorting ได้แก่

* Database
* Search Engine
* E-Commerce
* Data Analytics
* Data Science
* Machine Learning
* Recommendation System
* Information Retrieval
* RAG
* GraphRAG
```
สามารถมองภาพรวมได้ดังนี้

```text
Raw Data
   ↓
Sorting
   ↓
Organized Data
   ↓
Searching
   ↓
Analysis
   ↓
Decision
```

---

# 4.4 ความหมายของ Sorting

**Sorting** คือกระบวนการจัดเรียงข้อมูลตามลำดับที่กำหนด

โดยทั่วไปมี 2 รูปแบบหลัก

### Ascending Order

เรียงจากน้อยไปมาก

```text
1, 2, 3, 4, 5
```

### Descending Order

เรียงจากมากไปน้อย

```text
5, 4, 3, 2, 1
```

นอกจากนี้ยังสามารถเรียงข้อมูลตามเงื่อนไขอื่นได้ เช่น

```text
คะแนนจากมากไปน้อย
ราคา จากน้อยไปมาก
ชื่อ A → Z
วันที่ใหม่ → เก่า
Rating สูง → ต่ำ
```

---

# 4.5 ทำไมต้อง Sorting?

การเรียงข้อมูลช่วยให้การประมวลผลในขั้นตอนอื่นมีประสิทธิภาพมากขึ้น

ตัวอย่างเช่น

```text
Unsorted Data
      ↓
    Sorting
      ↓
Sorted Data
      ↓
Binary Search
```

ถ้าข้อมูลถูกเรียงลำดับแล้ว สามารถใช้ Binary Search ซึ่งมี Complexity เป็น

```text
O(log n)
```

แทน Linear Search

```text
O(n)
```

ดังนั้น Sorting จึงมักเป็นขั้นตอนสำคัญก่อนการค้นหาและการวิเคราะห์ข้อมูล

---

# 4.6 ตัวอย่างสถานการณ์

สมมติระบบมีข้อมูลคะแนนนักศึกษา

```text
78, 45, 92, 66, 81, 55
```

ต้องการแสดงนักศึกษาที่มีคะแนนสูงสุดไปต่ำสุด

```text
92
81
78
66
55
45
```

หรือระบบ E-Commerce ต้องการเรียงสินค้า

```text
Price: Low → High

199
299
499
799
1,299
```

ดังนั้น Sorting เป็นพื้นฐานของระบบที่ต้องจัดการข้อมูลจำนวนมาก

---

# 4.7 คุณสมบัติของ Sorting Algorithm

Sorting Algorithm สามารถพิจารณาได้จากหลายคุณสมบัติ

### 1. Time Complexity

ใช้เวลามากน้อยเพียงใด

### 2. Space Complexity

ใช้หน่วยความจำเท่าใด

### 3. Stability

ข้อมูลที่มีค่าเท่ากันรักษาลำดับเดิมหรือไม่

### 4. In-place

สามารถเรียงข้อมูลภายในโครงสร้างเดิมโดยใช้ Memory เพิ่มเพียงเล็กน้อยหรือไม่

### 5. Adaptive

ประสิทธิภาพดีขึ้นหรือไม่เมื่อข้อมูลเดิมมีการเรียงลำดับบางส่วนแล้ว

---

# 4.8 Stable Sorting

**Stable Sort** หมายถึง Sorting Algorithm ที่รักษาลำดับเดิมของข้อมูลที่มี Key เท่ากัน

ตัวอย่าง

```text
ก่อน Sort

A: Student = Somchai, Score = 80
B: Student = Somsak,  Score = 80
C: Student = Somporn, Score = 90
```

เรียงตาม Score

```text
C: Somporn, Score = 90
A: Somchai, Score = 80
B: Somsak,  Score = 80
```

A และ B มี Score เท่ากัน และยังคงลำดับเดิม

ดังนั้น Stable Sort มีความสำคัญกับการเรียงข้อมูลแบบหลายเงื่อนไข

---

# 4.9 In-place Sorting

**In-place Sorting** คือ Algorithm ที่สามารถเรียงข้อมูลโดยใช้พื้นที่เพิ่มเติมเพียงเล็กน้อย

ตัวอย่างเช่น

```text
Array เดิม
     ↓
Sorting
     ↓
Array เดิมถูกจัดเรียง
```

Algorithm ที่มักจัดอยู่ในกลุ่ม In-place ได้แก่

* Bubble Sort
* Selection Sort
* Insertion Sort
* Quick Sort

ส่วน Merge Sort โดยทั่วไปต้องใช้พื้นที่เพิ่มเติมสำหรับการ Merge

---

# 4.10 ประเภทของ Sorting Algorithm

Sorting Algorithm ที่ควรศึกษาในระดับพื้นฐานถึงระดับกลาง ได้แก่

```text
Sorting Algorithms
       │
       ├── Simple Sorting
       │      ├── Bubble Sort
       │      ├── Selection Sort
       │      └── Insertion Sort
       │
       ├── Divide and Conquer
       │      ├── Merge Sort
       │      └── Quick Sort
       │
       └── Non-comparison Sorting
              ├── Counting Sort
              ├── Radix Sort
              └── Bucket Sort
```

ในบทนี้จะเน้น 5 Algorithm หลัก

1. Bubble Sort
2. Selection Sort
3. Insertion Sort
4. Merge Sort
5. Quick Sort

---

# 4.11 Bubble Sort

## 4.11.1 แนวคิด

**Bubble Sort** เป็น Sorting Algorithm ที่เปรียบเทียบข้อมูลที่อยู่ติดกัน แล้วสลับตำแหน่งหากอยู่ผิดลำดับ

ตัวอย่าง

```text
[5, 3, 8, 4]
```

เปรียบเทียบ

```text
5 > 3
```

จึงสลับ

```text
[3, 5, 8, 4]
```

จากนั้น

```text
5 < 8
```

ไม่ต้องสลับ

```text
[3, 5, 8, 4]
```

จากนั้น

```text
8 > 4
```

สลับ

```text
[3, 5, 4, 8]
```

เมื่อจบรอบ ค่าที่มากที่สุดจะถูกผลักไปทางขวา

จึงเป็นที่มาของชื่อ **Bubble Sort**

---

# 4.12 ขั้นตอน Bubble Sort

```text
Start
  ↓
Compare adjacent elements
  ↓
Is left > right?
  ↓
Yes → Swap
  ↓
Move to next pair
  ↓
End of pass?
  ↓
Repeat
  ↓
Sorted
```

---

# 4.13 Bubble Sort Pseudocode

```text
BubbleSort(A)

for i = 0 to n-1

    for j = 0 to n-i-2

        if A[j] > A[j+1]

            swap A[j] and A[j+1]
```

---

# 4.14 Bubble Sort ด้วย Python

```python
def bubble_sort(arr):
    n = len(arr)

    for i in range(n):

        for j in range(0, n - i - 1):

            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr
```

ตัวอย่าง

```python
numbers = [5, 3, 8, 4, 2]

print(bubble_sort(numbers))
```

ผลลัพธ์

```text
[2, 3, 4, 5, 8]
```

---

# 4.15 Complexity ของ Bubble Sort

| Case         | Complexity |
| ------------ | ---------: |
| Best Case    |      O(n)* |
| Average Case |      O(n²) |
| Worst Case   |      O(n²) |
| Space        |       O(1) |

> `*` Best Case เป็น `O(n)` เมื่อใช้การตรวจสอบว่าในรอบนั้นไม่มีการ Swap

Bubble Sort มีข้อดีคือเข้าใจง่าย แต่ไม่เหมาะกับข้อมูลขนาดใหญ่

---

# 4.16 Selection Sort

## 4.16.1 แนวคิด

Selection Sort ทำงานโดย

1. ค้นหาค่าที่น้อยที่สุด
2. นำมาไว้ตำแหน่งแรก
3. ค้นหาค่าที่น้อยที่สุดจากข้อมูลส่วนที่เหลือ
4. ทำซ้ำ

ตัวอย่าง

```text
[64, 25, 12, 22, 11]
```

หาค่าต่ำสุด

```text
11
```

สลับกับตัวแรก

```text
[11, 25, 12, 22, 64]
```

หาค่าต่ำสุดจากส่วนที่เหลือ

```text
12
```

ได้

```text
[11, 12, 25, 22, 64]
```

ทำต่อจนเรียงครบ

```text
[11, 12, 22, 25, 64]
```

---

# 4.17 Selection Sort Pseudocode

```text
SelectionSort(A)

for i = 0 to n-1

    minIndex = i

    for j = i+1 to n-1

        if A[j] < A[minIndex]

            minIndex = j

    swap A[i] and A[minIndex]
```

---

# 4.18 Selection Sort ด้วย Python

```python
def selection_sort(arr):

    n = len(arr)

    for i in range(n):

        min_index = i

        for j in range(i + 1, n):

            if arr[j] < arr[min_index]:
                min_index = j

        arr[i], arr[min_index] = \
            arr[min_index], arr[i]

    return arr
```

---

# 4.19 Complexity ของ Selection Sort

| Case         | Complexity |
| ------------ | ---------: |
| Best Case    |      O(n²) |
| Average Case |      O(n²) |
| Worst Case   |      O(n²) |
| Space        |       O(1) |

ข้อดีคือใช้ Memory เพิ่มน้อย แต่ไม่เหมาะกับข้อมูลขนาดใหญ่

---

# 4.20 Insertion Sort

## 4.20.1 แนวคิด

Insertion Sort ทำงานคล้ายกับวิธีที่มนุษย์จัดเรียงไพ่ในมือ

ตัวอย่าง

```text
[5, 2, 4, 6, 1, 3]
```

เริ่มจาก

```text
[5]
```

นำ `2` มาแทรก

```text
[2, 5]
```

นำ `4` มาแทรก

```text
[2, 4, 5]
```

นำ `6` มาแทรก

```text
[2, 4, 5, 6]
```

ทำต่อจนได้

```text
[1, 2, 3, 4, 5, 6]
```

---

# 4.21 Insertion Sort Pseudocode

```text
InsertionSort(A)

for i = 1 to n-1

    key = A[i]
    j = i - 1

    while j >= 0 AND A[j] > key

        A[j+1] = A[j]
        j = j - 1

    A[j+1] = key
```

---

# 4.22 Insertion Sort ด้วย Python

```python
def insertion_sort(arr):

    for i in range(1, len(arr)):

        key = arr[i]
        j = i - 1

        while j >= 0 and arr[j] > key:

            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key

    return arr
```

---

# 4.23 Complexity ของ Insertion Sort

| Case         | Complexity |
| ------------ | ---------: |
| Best Case    |       O(n) |
| Average Case |      O(n²) |
| Worst Case   |      O(n²) |
| Space        |       O(1) |

Insertion Sort มีข้อดีอย่างหนึ่งคือเหมาะกับข้อมูลที่ **เกือบเรียงลำดับอยู่แล้ว**

---

# 4.24 เปรียบเทียบ Simple Sorting

| Algorithm      |  Best | Average | Worst | Space | Stable       |
| -------------- | ----: | ------: | ----: | ----: | ------------ |
| Bubble Sort    |  O(n) |   O(n²) | O(n²) |  O(1) | Yes          |
| Selection Sort | O(n²) |   O(n²) | O(n²) |  O(1) | โดยทั่วไป No |
| Insertion Sort |  O(n) |   O(n²) | O(n²) |  O(1) | Yes          |

---

# 4.25 Divide and Conquer

Merge Sort และ Quick Sort ใช้แนวคิดสำคัญที่เรียกว่า

> **Divide and Conquer**

ประกอบด้วย 3 ขั้นตอน

```text
Divide
   ↓
Conquer
   ↓
Combine
```

หรือ

```text
Problem
   ↓
Divide
   ↓
Subproblems
   ↓
Solve
   ↓
Combine
   ↓
Solution
```

แนวคิดนี้มีบทบาทสำคัญใน Algorithm ขั้นสูง

---

# 4.26 Merge Sort

## 4.26.1 แนวคิด

Merge Sort แบ่งข้อมูลออกเป็นส่วนเล็ก ๆ แล้วเรียงแต่ละส่วน จากนั้นนำกลับมารวมกัน

ตัวอย่าง

```text
[8, 3, 5, 4, 7, 6, 1, 2]
```

แบ่ง

```text
[8, 3, 5, 4]    [7, 6, 1, 2]
```

แบ่งต่อ

```text
[8, 3] [5, 4]    [7, 6] [1, 2]
```

จนเหลือ

```text
[8] [3] [5] [4] [7] [6] [1] [2]
```

จากนั้น Merge กลับ

```text
[3, 8]
[4, 5]
[6, 7]
[1, 2]
```

แล้วรวม

```text
[3, 4, 5, 8]
[1, 2, 6, 7]
```

สุดท้าย

```text
[1, 2, 3, 4, 5, 6, 7, 8]
```

---

# 4.27 Merge Sort Pseudocode

```text
MergeSort(A)

if length(A) <= 1
    return A

middle = length(A) / 2

left = MergeSort(left half)
right = MergeSort(right half)

return Merge(left, right)
```

---

# 4.28 Merge Sort ด้วย Python

```python
def merge_sort(arr):

    if len(arr) <= 1:
        return arr

    mid = len(arr) // 2

    left = merge_sort(arr[:mid])
    right = merge_sort(arr[mid:])

    return merge(left, right)


def merge(left, right):

    result = []

    i = 0
    j = 0

    while i < len(left) and j < len(right):

        if left[i] <= right[j]:
            result.append(left[i])
            i += 1

        else:
            result.append(right[j])
            j += 1

    result.extend(left[i:])
    result.extend(right[j:])

    return result
```

---

# 4.29 Complexity ของ Merge Sort

| Case         | Complexity |
| ------------ | ---------: |
| Best Case    | O(n log n) |
| Average Case | O(n log n) |
| Worst Case   | O(n log n) |
| Space        |       O(n) |
| Stable       |        Yes |

ข้อดีคือมี Performance ที่ค่อนข้างสม่ำเสมอ แม้ข้อมูลจะอยู่ในรูปแบบใดก็ตาม

ข้อจำกัดคือใช้ Memory เพิ่มสำหรับกระบวนการ Merge

---

# 4.30 Quick Sort

## 4.30.1 แนวคิด

Quick Sort ใช้แนวคิด **Divide and Conquer** เช่นเดียวกับ Merge Sort

แต่ใช้แนวคิดสำคัญคือ

> **Pivot**

เลือกข้อมูลหนึ่งตัวเป็น Pivot แล้วแบ่งข้อมูลออกเป็น

```text
Less than Pivot
Pivot
Greater than Pivot
```

ตัวอย่าง

```text
[8, 3, 7, 4, 9, 2, 6]
```

เลือก

```text
Pivot = 6
```

แบ่ง

```text
[3, 4, 2] [6] [8, 7, 9]
```

จากนั้นทำ Quick Sort กับแต่ละส่วน

```text
[2, 3, 4] [6] [7, 8, 9]
```

ผลลัพธ์

```text
[2, 3, 4, 6, 7, 8, 9]
```

---

# 4.31 Quick Sort Pseudocode

```text
QuickSort(A, low, high)

if low < high

    pivotIndex = Partition(A, low, high)

    QuickSort(A, low, pivotIndex - 1)

    QuickSort(A, pivotIndex + 1, high)
```

---

# 4.32 Quick Sort ด้วย Python

```python
def quick_sort(arr):

    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]

    left = [
        x for x in arr
        if x < pivot
    ]

    middle = [
        x for x in arr
        if x == pivot
    ]

    right = [
        x for x in arr
        if x > pivot
    ]

    return (
        quick_sort(left)
        + middle
        + quick_sort(right)
    )
```

---

# 4.33 Complexity ของ Quick Sort

| Case         |         Complexity |
| ------------ | -----------------: |
| Best Case    |         O(n log n) |
| Average Case |         O(n log n) |
| Worst Case   |              O(n²) |
| Space        | O(log n) โดยเฉลี่ย |
| Stable       |       โดยทั่วไป No |

Worst Case อาจเกิดเมื่อเลือก Pivot ไม่เหมาะสม เช่น ข้อมูลเรียงลำดับอยู่แล้วและเลือกสมาชิกตัวแรกหรือตัวสุดท้ายเป็น Pivot ในบางวิธีการ Implement

---

# 4.34 Merge Sort vs Quick Sort

| คุณสมบัติ | Merge Sort          | Quick Sort          |
| --------- | ------------------- | ------------------- |
| Best      | O(n log n)          | O(n log n)          |
| Average   | O(n log n)          | O(n log n)          |
| Worst     | O(n log n)          | O(n²)               |
| Memory    | O(n)                | โดยทั่วไป O(log n)  |
| Stable    | Yes                 | โดยทั่วไป No        |
| หลักการ   | Divide & Merge      | Divide & Partition  |
| จุดเด่น   | Worst Case สม่ำเสมอ | มักเร็วในทางปฏิบัติ |

---

# 4.35 เปรียบเทียบ Sorting Algorithms ทั้งหมด

| Algorithm |       Best |    Average |      Worst |     Space | Stable |
| --------- | ---------: | ---------: | ---------: | --------: | ------ |
| Bubble    |       O(n) |      O(n²) |      O(n²) |      O(1) | Yes    |
| Selection |      O(n²) |      O(n²) |      O(n²) |      O(1) | No*    |
| Insertion |       O(n) |      O(n²) |      O(n²) |      O(1) | Yes    |
| Merge     | O(n log n) | O(n log n) | O(n log n) |      O(n) | Yes    |
| Quick     | O(n log n) | O(n log n) |      O(n²) | O(log n)* | No*    |

> `*` ขึ้นอยู่กับวิธีการ Implement

---

# 4.36 การเลือก Sorting Algorithm

การเลือก Algorithm ไม่ควรดูเฉพาะ Big-O เท่านั้น

ควรพิจารณา

```text
Data Size
   ↓
Data Distribution
   ↓
Already Sorted?
   ↓
Memory Constraint
   ↓
Stability Requirement
   ↓
Performance Requirement
   ↓
Choose Algorithm
```

ตัวอย่าง

### ข้อมูลขนาดเล็ก

อาจใช้

```text
Insertion Sort
```

เพราะ Implementation ง่ายและทำงานดีเมื่อข้อมูลเกือบเรียงลำดับแล้ว

### ข้อมูลขนาดใหญ่

อาจพิจารณา

```text
Merge Sort
Quick Sort
Heap Sort
```

### ต้องการ Stable Sort

อาจเลือก

```text
Merge Sort
```

---

# 4.37 Sorting กับ Searching

Sorting และ Searching มีความสัมพันธ์กันอย่างใกล้ชิด

```text
Unsorted Data
      ↓
    Sort
      ↓
Sorted Data
      ↓
Binary Search
      ↓
O(log n)
```

ตัวอย่าง

```text
[50, 20, 80, 10, 30]
```

Sort

```text
[10, 20, 30, 50, 80]
```

จากนั้นสามารถใช้ Binary Search ได้

---

# 4.38 Sorting กับ Database

Database ใช้ Sorting ในหลายสถานการณ์ เช่น

```sql
SELECT *
FROM students
ORDER BY score DESC;
```

คำสั่ง `ORDER BY` ใช้สำหรับเรียงข้อมูลตามเงื่อนไข

ตัวอย่าง

```sql
SELECT *
FROM products
ORDER BY price ASC;
```

ผลลัพธ์คือสินค้าเรียงจากราคาต่ำไปสูง

ดังนั้น Sorting Algorithm จึงเป็นพื้นฐานสำคัญของ Database Query Processing

---

# 4.39 Sorting กับ Data Science

ใน Data Science มักต้องจัดเรียงข้อมูลเพื่อ

* Ranking
* Statistical Analysis
* Top-K
* Data Cleaning
* Visualization
* Outlier Analysis
* Feature Processing

ตัวอย่าง

```text
คะแนน
↓
Sort
↓
Top 10
↓
Analysis
```

---

# 4.40 Sorting กับ AI

ระบบ AI และ Machine Learning ใช้การเรียงลำดับในหลายกระบวนการ

ตัวอย่าง Recommendation System

```text
Candidate Items
       ↓
Calculate Score
       ↓
Sort by Score
       ↓
Top-K
       ↓
Recommendation
```

เช่น

```text
Item A → 0.95
Item B → 0.87
Item C → 0.72
Item D → 0.61
```

Sort จากคะแนนสูงสุด

```text
A → B → C → D
```

---

# 4.41 Sorting กับ RAG

ใน RAG หลังจาก Retrieval แล้ว มักมีข้อมูลจำนวนหนึ่งที่ถูกค้นพบ

```text
Query
  ↓
Retriever
  ↓
100 Documents
  ↓
Similarity Score
  ↓
Ranking
  ↓
Top-K
  ↓
LLM
```

ขั้นตอน Ranking มีแนวคิดเกี่ยวข้องกับการจัดลำดับ

ตัวอย่าง

```text
Document A → 0.91
Document B → 0.82
Document C → 0.95
Document D → 0.73
```

จัดเรียง

```text
C → A → B → D
```

จากนั้นเลือก Top-K

```text
C
A
B
```

จึงเห็นได้ว่า Sorting และ Ranking เป็นส่วนสำคัญของ Information Retrieval และ RAG

---

# 4.42 Sorting กับ GraphRAG

ใน GraphRAG อาจมีหลาย Node หรือหลาย Subgraph ที่เกี่ยวข้องกับ Query

สามารถคำนวณ Score แล้วจัดอันดับ

```text
Query
  ↓
Graph Retrieval
  ↓
Candidate Nodes
  ↓
Relevance Score
  ↓
Ranking
  ↓
Top-K Nodes
  ↓
Context
  ↓
LLM
```

ดังนั้น Sorting/Ranking เป็นส่วนสำคัญในการเลือก Context ที่มีความเกี่ยวข้องมากที่สุด

---

# 4.43 การวิเคราะห์ Performance

การวิเคราะห์ Algorithm ในเชิงทฤษฎีใช้ Big-O แต่ในระบบจริงควรทดสอบ Performance ด้วย

ตัวแปรสำคัญ ได้แก่

* Input Size
* Execution Time
* Memory Usage
* Number of Comparisons
* Number of Swaps

ตัวอย่าง

```text
Input Size
     ↓
Run Algorithm
     ↓
Measure Time
     ↓
Measure Memory
     ↓
Record Result
     ↓
Compare
```

---

# 4.44 ตัวอย่าง Performance Experiment

สมมติทดลอง Sorting Algorithms

```text
Input Size

100
1,000
10,000
100,000
1,000,000
```

เก็บผลลัพธ์

|     Input | Bubble | Selection | Insertion | Merge | Quick |
| --------: | -----: | --------: | --------: | ----: | ----: |
|       100 |      - |         - |         - |     - |     - |
|     1,000 |      - |         - |         - |     - |     - |
|    10,000 |      - |         - |         - |     - |     - |
|   100,000 |      - |         - |         - |     - |     - |
| 1,000,000 |      - |         - |         - |     - |     - |

จากนั้นนำผลการทดลองมาวิเคราะห์ว่า Algorithm ใดเหมาะสมกับข้อมูลขนาดต่าง ๆ

---

# 4.45 แนวคิดสำคัญ: Theory vs Practice

สิ่งสำคัญในการศึกษา Algorithm คือการแยก

**Theoretical Analysis**

ออกจาก

**Empirical Performance**

ตัวอย่าง

```text
Theory
Quick Sort
Average = O(n log n)

        +

Experiment
Quick Sort
Runtime = 0.35 sec
```

Big-O ช่วยอธิบายพฤติกรรมเมื่อ `n` เพิ่มขึ้น แต่ Runtime จริงขึ้นอยู่กับ Implementation, Hardware, Memory และลักษณะข้อมูลด้วย

ดังนั้นการศึกษา Algorithm ที่ดีควรใช้ทั้ง

```text
Mathematical Analysis
        +
Experimental Evaluation
```

---

# 4.46 ปฏิบัติการที่ 4.1: Bubble Sort

## วัตถุประสงค์

ให้นักศึกษาสามารถ

* เขียน Bubble Sort
* อธิบายขั้นตอนการทำงาน
* วิเคราะห์ Complexity
* ทดลองกับข้อมูลหลายขนาด

## โจทย์

สร้างโปรแกรม Bubble Sort สำหรับข้อมูล

```text
[64, 34, 25, 12, 22, 11, 90]
```

ผลลัพธ์ที่ต้องการ

```text
[11, 12, 22, 25, 34, 64, 90]
```

## งานที่ต้องส่ง

1. Source Code
2. Pseudocode
3. Flowchart
4. ผลลัพธ์
5. Time Complexity
6. Space Complexity

---

# 4.47 ปฏิบัติการที่ 4.2: Selection Sort

สร้างโปรแกรม Selection Sort และแสดงข้อมูลหลังจากจบแต่ละ Pass

ตัวอย่าง

```text
Initial:
[64, 25, 12, 22, 11]

Pass 1:
[11, 25, 12, 22, 64]

Pass 2:
[11, 12, 25, 22, 64]

Pass 3:
[11, 12, 22, 25, 64]
```

ให้อธิบายว่าในแต่ละ Pass มีการเลือกค่าใด

---

# 4.48 ปฏิบัติการที่ 4.3: Insertion Sort

สร้างโปรแกรม Insertion Sort สำหรับข้อมูล

```text
[12, 11, 13, 5, 6]
```

แสดงสถานะของ Array หลังจาก Insert แต่ละครั้ง

จากนั้นทดลองกับข้อมูล

```text
Sorted Data
Reverse Data
Random Data
Nearly Sorted Data
```

เปรียบเทียบผลลัพธ์

---

# 4.49 ปฏิบัติการที่ 4.4: Merge Sort

สร้าง Merge Sort สำหรับข้อมูล

```text
[38, 27, 43, 3, 9, 82, 10]
```

แสดง

1. ขั้นตอนการ Divide
2. ขั้นตอนการ Sort
3. ขั้นตอนการ Merge
4. ผลลัพธ์สุดท้าย

โครงสร้าง

```text
              [38 27 43 3 9 82 10]
                       ↓
             ┌─────────┴─────────┐
             ↓                   ↓
       [38 27 43]             [3 9 82 10]
             ↓                   ↓
           Divide              Divide
             ↓                   ↓
          Conquer             Conquer
             ↓                   ↓
             └─────────┬─────────┘
                       ↓
                     Merge
                       ↓
                  Sorted Array
```

---

# 4.50 ปฏิบัติการที่ 4.5: Quick Sort

สร้าง Quick Sort และทดลองเลือก Pivot อย่างน้อย 3 วิธี

1. First Element
2. Last Element
3. Middle Element

ทดลองกับ

```text
Random Data
Sorted Data
Reverse Sorted Data
```

เปรียบเทียบผลกระทบของ Pivot ต่อ Performance

---

# 4.51 ปฏิบัติการที่ 4.6: Sorting Performance Benchmark

สร้างโปรแกรม Benchmark เพื่อเปรียบเทียบ

```text
Bubble Sort
Selection Sort
Insertion Sort
Merge Sort
Quick Sort
```

กับข้อมูล

```text
n = 100
n = 1,000
n = 10,000
n = 100,000
```

เก็บข้อมูล

```text
Algorithm
Input Size
Execution Time
Number of Comparisons
Number of Swaps
Memory Usage
```

---

# 4.52 ตัวอย่างโครงสร้าง Benchmark

```text
Generate Data
      ↓
Copy Dataset
      ↓
Run Bubble Sort
      ↓
Measure Time
      ↓
Run Selection Sort
      ↓
Measure Time
      ↓
Run Insertion Sort
      ↓
Measure Time
      ↓
Run Merge Sort
      ↓
Measure Time
      ↓
Run Quick Sort
      ↓
Measure Time
      ↓
Compare Results
```

---

# 4.53 Mini Project: Student Ranking System

ให้นักศึกษาพัฒนาระบบจัดอันดับนักศึกษา

ข้อมูลตัวอย่าง

```text
ID       Name       Score
001      Somchai    85
002      Somsak     92
003      Somporn    76
004      Suda       95
005      Anan       88
```

ระบบต้องสามารถ

1. เพิ่มข้อมูลนักศึกษา
2. แสดงข้อมูล
3. เรียงคะแนนจากมากไปน้อย
4. เรียงคะแนนจากน้อยไปมาก
5. แสดง Top 3
6. ค้นหานักศึกษา
7. เปรียบเทียบ Sorting Algorithm
8. วิเคราะห์ Complexity

Architecture

```text
Student Data
     ↓
Data Structure
     ↓
Sorting
     ↓
Ranking
     ↓
Searching
     ↓
Result
```

---

# 4.54 แบบฝึกหัดท้ายบท

## ข้อ 1

จงอธิบายความหมายของ Sorting Algorithm

---

## ข้อ 2

จงอธิบายความแตกต่างระหว่าง

* Ascending
* Descending

---

## ข้อ 3

จงอธิบายหลักการทำงานของ Bubble Sort

---

## ข้อ 4

จงอธิบายหลักการทำงานของ Selection Sort

---

## ข้อ 5

จงอธิบายหลักการทำงานของ Insertion Sort

---

## ข้อ 6

จงอธิบายแนวคิด Divide and Conquer

---

## ข้อ 7

จงอธิบายหลักการทำงานของ Merge Sort

---

## ข้อ 8

จงอธิบายหลักการทำงานของ Quick Sort

---

## ข้อ 9

เปรียบเทียบ

```text
Bubble Sort
Selection Sort
Insertion Sort
Merge Sort
Quick Sort
```

ในด้าน Time Complexity และ Space Complexity

---

## ข้อ 10

เพราะเหตุใด Insertion Sort จึงเหมาะกับข้อมูลที่เกือบเรียงลำดับอยู่แล้ว?

---

## ข้อ 11

เพราะเหตุใด Quick Sort จึงมี Worst Case เป็น `O(n²)`?

---

## ข้อ 12

เพราะเหตุใด Merge Sort จึงมี Worst Case เป็น `O(n log n)`?

---

## ข้อ 13

Stable Sorting มีความหมายอย่างไร?

---

## ข้อ 14

In-place Sorting คืออะไร?

---

## ข้อ 15

ถ้าต้องเรียงข้อมูลจำนวน 10 ล้านรายการ นักศึกษาจะเลือก Algorithm ใด เพราะเหตุใด?

---

# 4.55 คำถามวิเคราะห์ระดับสูง

### คำถามที่ 1

สมมติว่าข้อมูลมีลักษณะ

```text
90% Sorted
10% Random
```

Algorithm ใดน่าจะเหมาะสม และเพราะเหตุใด?

---

### คำถามที่ 2

ถ้าระบบมี Memory จำกัดมาก ควรพิจารณา Algorithm ใด?

---

### คำถามที่ 3

หากต้องการรักษาลำดับของข้อมูลที่มี Key เท่ากัน ควรพิจารณาคุณสมบัติใด?

---

### คำถามที่ 4

ทำไม Big-O เพียงอย่างเดียวจึงไม่สามารถบอก Performance จริงของ Algorithm ได้ทั้งหมด?

---

### คำถามที่ 5

ในระบบ RAG หลังจาก Retrieval ได้เอกสาร 1,000 รายการ นักศึกษาจะออกแบบขั้นตอน Ranking และเลือก Top-K อย่างไร?

---

# 4.56 เกณฑ์การประเมินปฏิบัติการ

| รายการ                |    คะแนน |
| --------------------- | -------: |
| Algorithm Design      |      15% |
| Source Code           |      20% |
| Correctness           |      20% |
| Complexity Analysis   |      15% |
| Performance Benchmark |      15% |
| Report                |      10% |
| Presentation          |       5% |
| **รวม**               | **100%** |

---

# 4.57 สรุปบทที่ 4

Sorting เป็นพื้นฐานสำคัญของ Algorithm และระบบประมวลผลข้อมูล

Algorithm สำคัญที่ควรรู้ ได้แก่

```text
Simple Sorting
│
├── Bubble Sort
├── Selection Sort
└── Insertion Sort

Divide and Conquer
│
├── Merge Sort
└── Quick Sort
```

เปรียบเทียบภาพรวม

```text
             Sorting Algorithms
                     │
       ┌─────────────┴─────────────┐
       ↓                           ↓
 Simple Sorting              Advanced Sorting
       │                           │
       ↓                           ↓
 O(n²)                     O(n log n) โดยทั่วไป
       │                           │
       └─────────────┬─────────────┘
                     ↓
               Performance
                     ↓
             Searching / Ranking
                     ↓
          Database / Data Science
                     ↓
                AI / RAG
```

แนวคิดสำคัญของบทนี้คือ

> **การเลือก Sorting Algorithm ต้องพิจารณาทั้งขนาดข้อมูล ลักษณะข้อมูล ความต้องการด้าน Memory ความต้องการด้าน Stability และ Performance ไม่ควรเลือก Algorithm จากชื่อหรือ Big-O เพียงอย่างเดียว**

---

# 4.58 คำสำคัญประจำบท

```text
Sorting
Sorting Algorithm
Ascending Order
Descending Order
Bubble Sort
Selection Sort
Insertion Sort
Merge Sort
Quick Sort
Divide and Conquer
Pivot
Partition
Merge
Stable Sort
In-place Sort
Adaptive Sort
Time Complexity
Space Complexity
Performance
Benchmark
Ranking
Top-K
```

---

# 4.59 เชื่อมโยงไปยังบทที่ 5

หลังจากศึกษา

```text
บทที่ 1
พื้นฐาน Algorithm และ Data Structure
        ↓
บทที่ 2
Algorithm Analysis และ Big-O
        ↓
บทที่ 3
Recursion และ Searching
        ↓
บทที่ 4
Sorting Algorithms
```

ขั้นตอนต่อไปคือการศึกษาโครงสร้างข้อมูลที่มีความสำคัญต่อการออกแบบ Algorithm ได้แก่

```text
บทที่ 5
Array, Linked List และ Abstract Data Type
```

โดยจะเริ่มเข้าสู่การออกแบบ **Linear Data Structures** และศึกษาความสัมพันธ์ระหว่าง

```text
Data Structure
       +
Algorithm
       ↓
Efficient Program
```

ซึ่งเป็นพื้นฐานสำคัญก่อนเข้าสู่ **Stack, Queue, Tree, Heap, Hash Table และ Graph Algorithms** ในบทถัดไป.
