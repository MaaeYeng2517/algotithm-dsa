# บทที่ 3 การเรียกซ้ำและอัลกอริทึมการค้นหา

## Recursion and Searching Algorithms

---

## 3.1 วัตถุประสงค์การเรียนรู้

เมื่อศึกษาบทนี้แล้ว นักศึกษาสามารถ:

1. อธิบายแนวคิดและหลักการทำงานของ **Recursion** ได้
2. อธิบายความแตกต่างระหว่าง **Recursion และ Iteration** ได้
3. ระบุและออกแบบ **Base Case** และ **Recursive Case** ได้อย่างถูกต้อง
4. วิเคราะห์การทำงานของ Recursive Algorithm ด้วย **Recursion Tree** ได้
5. วิเคราะห์ Time Complexity และ Space Complexity ของ Recursive Algorithm ได้
6. อธิบายหลักการของ **Searching Algorithms** ได้
7. พัฒนา **Linear Search** และ **Binary Search** ได้
8. เปรียบเทียบประสิทธิภาพของ Linear Search และ Binary Search ได้
9. เลือก Searching Algorithm ให้เหมาะสมกับลักษณะของข้อมูลได้
10. ประยุกต์ใช้ Recursion และ Searching Algorithms กับปัญหาทางคอมพิวเตอร์ได้

---

# 3.2 ผลลัพธ์การเรียนรู้

เมื่อสิ้นสุดบทเรียน นักศึกษาสามารถแสดงความสามารถได้ดังนี้

| Learning Outcome | ผลลัพธ์การเรียนรู้                                                |
| ---------------- | ----------------------------------------------------------------- |
| **LO1**          | อธิบายแนวคิดของ Recursion และ Searching Algorithms ได้            |
| **LO2**          | ออกแบบ Recursive Algorithm ที่มี Base Case และ Recursive Case ได้ |
| **LO3**          | วิเคราะห์ Time และ Space Complexity ของ Algorithm ได้             |
| **LO4**          | เขียนโปรแกรม Linear Search และ Binary Search ได้                  |
| **LO5**          | เปรียบเทียบประสิทธิภาพของ Searching Algorithms ได้                |
| **LO6**          | เลือก Algorithm ที่เหมาะสมกับปัญหาและข้อมูลได้                    |
| **LO7**          | ประยุกต์ใช้ Algorithm เพื่อแก้ปัญหาจริงได้                        |

---

# 3.3 บทนำ

**Recursion** และ **Searching** เป็นแนวคิดพื้นฐานที่สำคัญในการศึกษา Algorithm

Recursion ช่วยให้สามารถแก้ปัญหาที่มีโครงสร้างซ้ำกันได้ โดย Algorithm สามารถเรียกตัวเองเพื่อแก้ปัญหาย่อย

ส่วน Searching Algorithm ใช้สำหรับค้นหาข้อมูลจากชุดข้อมูล ซึ่งเป็นงานพื้นฐานที่พบในระบบคอมพิวเตอร์แทบทุกประเภท

ตัวอย่างเช่น

```text
Database
Search Engine
File System
E-Commerce
Recommendation System
AI
RAG
Knowledge Graph
```

สามารถมองภาพรวมได้ดังนี้

```text
Problem
   ↓
Algorithm
   ↓
Recursion / Searching
   ↓
Implementation
   ↓
Analysis
   ↓
Optimization
```

---

# 3.4 Recursion คืออะไร?

**Recursion** คือเทคนิคการออกแบบ Algorithm ที่ฟังก์ชันสามารถเรียกตัวเองเพื่อแก้ปัญหาย่อยของปัญหาเดิม

แนวคิดพื้นฐาน

```text
Problem
   ↓
Smaller Problem
   ↓
Smaller Problem
   ↓
Base Case
   ↓
Return
```

ตัวอย่างง่ายที่สุดคือ Factorial

```text
5! = 5 × 4 × 3 × 2 × 1
```

สามารถเขียนในรูปแบบ Recursive ได้ว่า

```text
n! = n × (n-1)!
```

โดยมี

```text
0! = 1
```

เป็น Base Case

---

# 3.5 องค์ประกอบของ Recursion

Recursive Algorithm ที่ถูกต้องควรมีองค์ประกอบสำคัญ 2 ส่วน

## 3.5.1 Base Case

คือเงื่อนไขที่ทำให้ Recursion หยุด

ตัวอย่าง

```python
if n == 0:
    return 1
```

## 3.5.2 Recursive Case

คือส่วนที่ฟังก์ชันเรียกตัวเอง

```python
return n * factorial(n - 1)
```

โครงสร้างทั่วไป

```text
Recursive Function
       ↓
   Base Case?
    /      \
  Yes       No
   ↓         ↓
 Return   Recursive Call
              ↓
          Smaller Input
```

---

# 3.6 ตัวอย่าง Factorial

```python
def factorial(n):
    if n == 0:
        return 1

    return n * factorial(n - 1)
```

เรียก

```python
factorial(5)
```

การทำงาน

```text
factorial(5)
    ↓
5 × factorial(4)
    ↓
5 × 4 × factorial(3)
    ↓
5 × 4 × 3 × factorial(2)
    ↓
5 × 4 × 3 × 2 × factorial(1)
    ↓
5 × 4 × 3 × 2 × 1 × factorial(0)
    ↓
5 × 4 × 3 × 2 × 1 × 1
    ↓
120
```

---

# 3.7 Recursion Stack

ทุกครั้งที่ฟังก์ชันเรียกตัวเอง ระบบจะเก็บข้อมูลของฟังก์ชันไว้ใน **Call Stack**

ตัวอย่าง

```text
factorial(5)
     ↓
factorial(4)
     ↓
factorial(3)
     ↓
factorial(2)
     ↓
factorial(1)
     ↓
factorial(0)
```

เมื่อถึง Base Case ระบบจะเริ่มคืนค่ากลับ

```text
factorial(0) → 1
factorial(1) → 1
factorial(2) → 2
factorial(3) → 6
factorial(4) → 24
factorial(5) → 120
```

---

# 3.8 Recursion vs Iteration

การแก้ปัญหาแบบ Recursion สามารถเปรียบเทียบกับ Iteration ได้

| คุณลักษณะ          | Recursion              | Iteration                             |
| ------------------ | ---------------------- | ------------------------------------- |
| วิธีทำงาน          | เรียกตัวเอง            | Loop                                  |
| โครงสร้าง          | Recursive Function     | for / while                           |
| Memory             | ใช้ Call Stack         | โดยทั่วไปใช้น้อยกว่า                  |
| ความซับซ้อนของโค้ด | บางปัญหาเขียนง่าย      | บางปัญหาเขียนง่ายกว่า                 |
| ความเสี่ยง         | Stack Overflow         | โดยทั่วไปไม่มีปัญหา Stack จากการวนซ้ำ |
| เหมาะกับ           | Tree, Divide & Conquer | การทำงานซ้ำทั่วไป                     |

---

# 3.9 Fibonacci

ลำดับ Fibonacci

```text
0, 1, 1, 2, 3, 5, 8, 13, 21, ...
```

ความสัมพันธ์

```text
F(n) = F(n-1) + F(n-2)
```

Recursive Implementation

```python
def fibonacci(n):
    if n <= 1:
        return n

    return fibonacci(n - 1) + fibonacci(n - 2)
```

Recursive Fibonacci แบบพื้นฐานมีการคำนวณซ้ำจำนวนมาก

จึงมี Time Complexity โดยประมาณ

```text
O(2^n)
```

ซึ่งไม่มีประสิทธิภาพเมื่อ `n` มีขนาดใหญ่

นี่เป็นตัวอย่างสำคัญที่แสดงว่า

> **การใช้ Recursion ไม่ได้หมายความว่า Algorithm จะมีประสิทธิภาพเสมอไป**

---

# 3.10 Memoization

สามารถปรับปรุง Recursive Fibonacci ด้วย **Memoization**

แนวคิดคือเก็บผลลัพธ์ที่เคยคำนวณแล้วไว้

```text
Fibonacci
    ↓
Calculate
    ↓
Store Result
    ↓
Reuse Result
```

ตัวอย่าง

```python
def fibonacci(n, memo={}):
    if n <= 1:
        return n

    if n in memo:
        return memo[n]

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo)

    return memo[n]
```

ทำให้ Complexity ลดลงจากประมาณ

```text
O(2^n)
```

เป็น

```text
O(n)
```

แนวคิดนี้เป็นพื้นฐานสำคัญของ **Dynamic Programming**

---

# 3.11 Searching Algorithm

**Searching Algorithm** คือ Algorithm สำหรับค้นหาข้อมูลที่ต้องการจากชุดข้อมูล

ตัวอย่าง

```text
Array

[10, 20, 30, 40, 50]

ค้นหา 30
```

ผลลัพธ์

```text
Found at index 2
```

Searching Algorithm ที่สำคัญในบทนี้ ได้แก่

1. Linear Search
2. Binary Search

---

# 3.12 Linear Search

**Linear Search** หรือ Sequential Search คือการค้นหาข้อมูลโดยตรวจสอบข้อมูลทีละรายการตั้งแต่ต้นจนพบข้อมูลที่ต้องการ

ตัวอย่าง

```text
[10, 20, 30, 40, 50]

Search = 40

10 → 20 → 30 → 40
               ↑
             Found
```

---

# 3.13 Algorithm ของ Linear Search

```text
Algorithm LinearSearch(A, target)

FOR i = 0 TO length(A)-1

    IF A[i] == target THEN
        RETURN i

RETURN -1
```

---

# 3.14 Linear Search ด้วย Python

```python
def linear_search(arr, target):

    for i in range(len(arr)):

        if arr[i] == target:
            return i

    return -1
```

ตัวอย่าง

```python
numbers = [10, 20, 30, 40, 50]

result = linear_search(numbers, 40)

print(result)
```

ผลลัพธ์

```text
3
```

---

# 3.15 Complexity ของ Linear Search

| Case         | Complexity |
| ------------ | ---------: |
| Best Case    |       O(1) |
| Average Case |       O(n) |
| Worst Case   |       O(n) |
| Space        |       O(1) |

Best Case เกิดขึ้นเมื่อข้อมูลอยู่ตำแหน่งแรก

Worst Case เกิดขึ้นเมื่อข้อมูลอยู่ตำแหน่งสุดท้ายหรือไม่มีข้อมูลนั้นอยู่ในชุดข้อมูล

---

# 3.16 Binary Search

**Binary Search** เป็น Algorithm สำหรับค้นหาข้อมูลโดยแบ่งช่วงข้อมูลออกเป็นสองส่วนในแต่ละรอบ

เงื่อนไขสำคัญคือ

> **ข้อมูลต้องเรียงลำดับก่อน**

ตัวอย่าง

```text
[10, 20, 30, 40, 50, 60, 70, 80]

ค้นหา 70
```

เริ่มจากค่ากลาง

```text
             40
           /    \
          <      >
                 ↓
                60
                  \
                   70
```

พบข้อมูลที่ต้องการ

---

# 3.17 ขั้นตอน Binary Search

```text
1. กำหนดตำแหน่ง Left
2. กำหนดตำแหน่ง Right
3. หาตำแหน่ง Middle
4. เปรียบเทียบ A[Middle] กับ Target
5. ถ้าเท่ากัน → พบข้อมูล
6. ถ้า Target น้อยกว่า → ค้นหาครึ่งซ้าย
7. ถ้า Target มากกว่า → ค้นหาครึ่งขวา
8. ทำซ้ำจนพบข้อมูลหรือช่วงค้นหาว่าง
```

---

# 3.18 Binary Search แบบ Iterative

```python
def binary_search(arr, target):

    left = 0
    right = len(arr) - 1

    while left <= right:

        mid = (left + right) // 2

        if arr[mid] == target:
            return mid

        elif arr[mid] < target:
            left = mid + 1

        else:
            right = mid - 1

    return -1
```

---

# 3.19 Binary Search แบบ Recursive

```python
def binary_search(arr, target, left, right):

    if left > right:
        return -1

    mid = (left + right) // 2

    if arr[mid] == target:
        return mid

    if target < arr[mid]:
        return binary_search(arr, target, left, mid - 1)

    return binary_search(arr, target, mid + 1, right)
```

ตัวอย่างการเรียก

```python
numbers = [10, 20, 30, 40, 50, 60, 70]

result = binary_search(
    numbers,
    60,
    0,
    len(numbers) - 1
)

print(result)
```

---

# 3.20 Complexity ของ Binary Search

| Case            | Complexity |
| --------------- | ---------: |
| Best Case       |       O(1) |
| Average Case    |   O(log n) |
| Worst Case      |   O(log n) |
| Iterative Space |       O(1) |
| Recursive Space |   O(log n) |

Recursive Version ใช้ Call Stack จึงใช้พื้นที่เพิ่มตามจำนวนระดับของ Recursion

---

# 3.21 Linear Search vs Binary Search

| คุณลักษณะ       | Linear Search | Binary Search    |
| --------------- | ------------- | ---------------- |
| วิธีค้นหา       | ทีละรายการ    | แบ่งครึ่ง        |
| ต้องเรียงข้อมูล | ไม่จำเป็น     | จำเป็น           |
| Best Case       | O(1)          | O(1)             |
| Average Case    | O(n)          | O(log n)         |
| Worst Case      | O(n)          | O(log n)         |
| ความเหมาะสม     | ข้อมูลทั่วไป  | ข้อมูลเรียงลำดับ |
| Implementation  | ง่าย          | ซับซ้อนกว่า      |

---

# 3.22 ตัวอย่างการเปรียบเทียบ

สมมติว่ามีข้อมูล 1,000,000 รายการ

### Linear Search

Worst Case

```text
ประมาณ 1,000,000 comparisons
```

### Binary Search

```text
log₂(1,000,000)
≈ 20 comparisons
```

จึงเห็นได้อย่างชัดเจนว่า Complexity มีผลต่อประสิทธิภาพของ Algorithm อย่างมาก

---

# 3.23 Recursion Tree

Recursion Tree ใช้แสดงการแตกตัวของ Recursive Algorithm

ตัวอย่าง Fibonacci

```text
                 F(5)
               /      \
            F(4)      F(3)
           /   \      /   \
        F(3)  F(2)  F(2)  F(1)
        /  \
      F(2) F(1)
```

จะเห็นว่าบาง Subproblem ถูกคำนวณซ้ำหลายครั้ง

นี่เป็นสาเหตุที่ Naive Recursive Fibonacci มีประสิทธิภาพต่ำ

---

# 3.24 Applications

Recursion และ Searching ถูกนำไปใช้ในระบบจริงจำนวนมาก

### Recursion

* Tree Traversal
* Graph Algorithms
* Divide and Conquer
* File System
* Compiler
* Expression Parsing

### Searching

* Database
* Search Engine
* File Search
* E-Commerce
* Recommendation System
* Information Retrieval
* RAG

---

# 3.25 Searching ในระบบ RAG

ในระบบ RAG กระบวนการค้นคืนข้อมูลเป็นหัวใจสำคัญ

```text
Documents
    ↓
Chunking
    ↓
Embedding
    ↓
Index
    ↓
Search
    ↓
Top-K
    ↓
Reranking
    ↓
Context
    ↓
LLM
```

Searching Algorithms ที่เกี่ยวข้อง ได้แก่

* Keyword Search
* Boolean Search
* BM25
* Vector Search
* KNN
* Approximate Nearest Neighbor
* Hybrid Search

ดังนั้นความรู้จากบทนี้สามารถต่อยอดไปสู่ระบบ RAG ได้โดยตรง

---

# 3.26 Searching ใน GraphRAG

GraphRAG ใช้ Graph เป็นโครงสร้างสำหรับเชื่อมโยงความรู้

```text
Knowledge Graph
       ↓
Graph Search
       ↓
BFS / DFS
       ↓
Subgraph
       ↓
Relevant Context
       ↓
LLM
```

ตัวอย่างการประยุกต์ใช้

* Knowledge Graph
* Semantic Search
* Entity Retrieval
* Relationship Search
* Community Detection
* Multi-hop Retrieval

---

# 3.27 สรุปบทที่ 3

บทนี้ศึกษา 2 แนวคิดหลัก ได้แก่

**Recursion** และ **Searching Algorithms**

Recursion เป็นเทคนิคที่ให้ Algorithm เรียกตัวเองเพื่อแก้ปัญหาย่อย โดยต้องมี **Base Case** เพื่อหยุดการทำงาน และ **Recursive Case** เพื่อสร้างปัญหาย่อย

Searching Algorithm เป็นกระบวนการค้นหาข้อมูล โดย Algorithm สำคัญที่ศึกษา ได้แก่

* Linear Search
* Binary Search

แนวคิดสำคัญคือ

```text
Recursion
    ↓
Base Case
    +
Recursive Case
    ↓
Recursive Algorithm
```

และ

```text
Searching
    ↓
Linear Search → O(n)
    ↓
Binary Search → O(log n)
```

การเลือก Algorithm ต้องพิจารณาร่วมกับลักษณะของข้อมูล

```text
Problem
   ↓
Data
   ↓
Data Structure
   ↓
Algorithm
   ↓
Complexity
   ↓
Performance
```

---

# 3.28 แบบฝึกหัดท้ายบท

## แบบฝึกหัดที่ 1: Recursion

จงอธิบายความหมายของ Recursion และระบุองค์ประกอบสำคัญของ Recursive Algorithm

---

## แบบฝึกหัดที่ 2: Factorial

จงเขียน Recursive Algorithm สำหรับคำนวณ

```text
5!
```

และแสดงลำดับการเรียก Function

---

## แบบฝึกหัดที่ 3: Fibonacci

จงเขียน Recursive Algorithm สำหรับ Fibonacci และวิเคราะห์ Time Complexity

---

## แบบฝึกหัดที่ 4: Linear Search

กำหนดข้อมูล

```text
[15, 20, 8, 40, 12, 30]
```

จงแสดงขั้นตอนการค้นหา `40` ด้วย Linear Search

พร้อมระบุจำนวนครั้งที่เปรียบเทียบ

---

## แบบฝึกหัดที่ 5: Binary Search

กำหนดข้อมูล

```text
[10, 20, 30, 40, 50, 60, 70, 80, 90]
```

จงแสดงขั้นตอนการค้นหา `70` ด้วย Binary Search

---

## แบบฝึกหัดที่ 6: เปรียบเทียบ Algorithm

จงเปรียบเทียบ Linear Search และ Binary Search ในด้าน

* หลักการทำงาน
* Best Case
* Average Case
* Worst Case
* Space Complexity
* เงื่อนไขการใช้งาน

---

## แบบฝึกหัดที่ 7: วิเคราะห์ Complexity

จงวิเคราะห์ Time Complexity ของ

```python
for i in range(n):
    print(i)
```

และ

```python
for i in range(n):
    for j in range(n):
        print(i, j)
```

---

## แบบฝึกหัดที่ 8: ประยุกต์ใช้

ระบบหนึ่งมีข้อมูลเรียงลำดับจำนวน 10 ล้านรายการ

จงอธิบายว่าควรเลือก Linear Search หรือ Binary Search และอธิบายเหตุผลโดยใช้แนวคิด Big-O

---

# 3.29 ปฏิบัติการ (Laboratory)

## Lab 3.1: Recursive Factorial

### วัตถุประสงค์

ฝึกเขียน Recursive Function และเข้าใจ Base Case และ Recursive Case

### โจทย์

เขียนโปรแกรมคำนวณ Factorial ด้วย Recursion

### Input

```text
n = 5
```

### Expected Output

```text
Factorial = 120
```

### สิ่งที่ต้องส่ง

* Source Code
* Flowchart หรือ Pseudocode
* ผลลัพธ์การทำงาน
* วิเคราะห์ Time Complexity
* วิเคราะห์ Space Complexity

---

# 3.30 Lab 3.2: Fibonacci

### วัตถุประสงค์

ศึกษาการทำงานของ Recursive Algorithm และปัญหาการคำนวณซ้ำ

### โจทย์

เขียนโปรแกรม Fibonacci แบบ Recursive

```text
Input: 10
Output: 55
```

จากนั้นวิเคราะห์จำนวนครั้งที่ Function ถูกเรียก

### งานเพิ่มเติม

ปรับปรุง Algorithm ด้วย Memoization และเปรียบเทียบ Performance

```text
Naive Recursion
       ↓
Performance Test
       ↓
Memoization
       ↓
Performance Test
       ↓
Compare
```

---

# 3.31 Lab 3.3: Linear Search

### วัตถุประสงค์

ฝึกพัฒนาและวิเคราะห์ Linear Search

### โจทย์

สร้าง Array จำนวน 100, 1,000 และ 10,000 รายการ แล้วค้นหาข้อมูลด้วย Linear Search

บันทึก

* จำนวนข้อมูล
* Search Target
* จำนวน Comparisons
* Execution Time

### ตารางผลการทดลอง

| Input Size | Target | Comparisons | Execution Time |
| ---------: | -----: | ----------: | -------------: |
|        100 |      - |           - |              - |
|      1,000 |      - |           - |              - |
|     10,000 |      - |           - |              - |

---

# 3.32 Lab 3.4: Binary Search

### วัตถุประสงค์

ฝึกพัฒนา Binary Search และวิเคราะห์ประสิทธิภาพ

### โจทย์

สร้างข้อมูลที่เรียงลำดับจำนวน

```text
100
1,000
10,000
100,000
1,000,000
```

แล้วทดลองค้นหาด้วย Binary Search

บันทึก

* Input Size
* Number of Comparisons
* Execution Time

---

# 3.33 Lab 3.5: Linear Search vs Binary Search

### วัตถุประสงค์

เปรียบเทียบประสิทธิภาพของ Searching Algorithms

### ขั้นตอน

```text
Generate Dataset
       ↓
Linear Search
       ↓
Measure Performance
       ↓
Binary Search
       ↓
Measure Performance
       ↓
Compare Results
       ↓
Conclusion
```

### ตารางการทดลอง

| Data Size | Linear Search | Binary Search |
| --------: | ------------: | ------------: |
|       100 |             - |             - |
|     1,000 |             - |             - |
|    10,000 |             - |             - |
|   100,000 |             - |             - |
| 1,000,000 |             - |             - |

---

# 3.34 Lab 3.6: Mini Project — Search System

ให้นักศึกษาพัฒนาระบบค้นหาข้อมูลขนาดเล็ก เช่น

* ระบบค้นหานักศึกษา
* ระบบค้นหาสินค้า
* ระบบค้นหาหนังสือ
* ระบบค้นหารายวิชา

ระบบต้องสามารถ

1. เพิ่มข้อมูล
2. แสดงข้อมูล
3. ค้นหาข้อมูล
4. เปรียบเทียบ Linear Search และ Binary Search
5. วัด Performance
6. วิเคราะห์ Complexity

### Architecture

```text
              Search System
                    ↓
              Data Structure
                    ↓
          ┌─────────┴─────────┐
          ↓                   ↓
    Linear Search       Binary Search
          ↓                   ↓
       O(n)                O(log n)
          └─────────┬─────────┘
                    ↓
             Performance
                 Test
                    ↓
               Evaluation
```

---

# 3.35 เกณฑ์ประเมินปฏิบัติการ

| รายการ                |    คะแนน |
| --------------------- | -------: |
| Algorithm Design      |      20% |
| Source Code           |      25% |
| Correctness           |      20% |
| Complexity Analysis   |      15% |
| Performance Testing   |      10% |
| Report & Presentation |      10% |
| **รวม**               | **100%** |

---

# 3.36 คำถามอภิปราย

1. Recursion เหมาะกับปัญหาประเภทใด?
2. ทำไม Recursive Algorithm ต้องมี Base Case?
3. Recursion มีข้อเสียด้าน Memory อย่างไร?
4. Linear Search กับ Binary Search แตกต่างกันอย่างไร?
5. เหตุใด Binary Search จึงมี Complexity เป็น `O(log n)`?
6. ทำไม Binary Search จึงต้องอาศัยข้อมูลที่สามารถจัดลำดับได้?
7. Memoization ช่วยแก้ปัญหาอะไร?
8. Searching Algorithm มีบทบาทอย่างไรใน RAG?
9. Graph Search สามารถนำไปใช้กับ GraphRAG ได้อย่างไร?
10. ถ้าข้อมูลมีขนาด 1 พันล้านรายการ ควรพิจารณาอะไรในการเลือก Search Algorithm?

---

# 3.37 คำสำคัญประจำบท

`Recursion` · `Base Case` · `Recursive Case` · `Call Stack` · `Iteration` · `Memoization` · `Fibonacci` · `Factorial` · `Searching Algorithm` · `Linear Search` · `Binary Search` · `Complexity` · `Time Complexity` · `Space Complexity` · `Performance` · `RAG` · `Graph Search`

---

## สรุปแนวคิดของบทที่ 3

```text
                 RECURSION
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
     Base Case            Recursive Case
          │                     │
          └──────────┬──────────┘
                     ↓
              Recursive Algorithm
                     │
                     ↓
              Searching Algorithm
                     │
          ┌──────────┴──────────┐
          ↓                     ↓
    Linear Search        Binary Search
          │                     │
        O(n)                  O(log n)
          └──────────┬──────────┘
                     ↓
              Efficient Search
                     ↓
          Information Retrieval
                     ↓
                 RAG / AI
```

**สาระสำคัญของบทนี้:** นักศึกษาต้องสามารถ **เข้าใจ Recursion → วิเคราะห์ Complexity → สร้าง Searching Algorithm → ทดลองจริง → วัด Performance → เลือก Algorithm ที่เหมาะสม** ซึ่งเป็นพื้นฐานสำคัญสำหรับบทต่อไปเรื่อง **Sorting Algorithms** และการออกแบบ Algorithm ขั้นสูง
