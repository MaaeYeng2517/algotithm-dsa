# บทที่ 2 การวิเคราะห์และประสิทธิภาพของอัลกอริทึม

## 2.1 บทนำ

หลังจากศึกษาแนวคิดพื้นฐานของ **อัลกอริทึม (Algorithm)** และ **โครงสร้างข้อมูล (Data Structure)** แล้ว ขั้นตอนสำคัญต่อมาคือการวิเคราะห์ว่าอัลกอริทึมที่ออกแบบขึ้นมามีประสิทธิภาพมากน้อยเพียงใด

ในการแก้ปัญหาหนึ่งปัญหา อาจมีอัลกอริทึมหลายวิธีที่ให้ผลลัพธ์ถูกต้องเหมือนกัน แต่ใช้เวลาและหน่วยความจำแตกต่างกัน

ดังนั้น การศึกษาอัลกอริทึมจึงไม่ได้พิจารณาเพียงว่า

> **"Algorithm ทำงานถูกต้องหรือไม่?"**

แต่ยังต้องพิจารณาว่า

> **"Algorithm ทำงานเร็วเพียงใด ใช้หน่วยความจำเท่าใด และรองรับข้อมูลขนาดใหญ่ได้หรือไม่?"**

แนวคิดพื้นฐานสามารถสรุปได้ดังนี้

```text
Data Structure
      +
Algorithm
      ↓
Efficient Problem Solving
```

---

## 2.2 Algorithm Analysis

**Algorithm Analysis** คือกระบวนการวิเคราะห์และประเมินประสิทธิภาพของอัลกอริทึม โดยพิจารณาทรัพยากรที่ใช้ในการประมวลผล

ทรัพยากรหลักประกอบด้วย

1. **Time Complexity** — ความซับซ้อนด้านเวลา
2. **Space Complexity** — ความซับซ้อนด้านพื้นที่หรือหน่วยความจำ

```text
                    Algorithm
                        │
              ┌─────────┴─────────┐
              ↓                   ↓
      Time Complexity      Space Complexity
              │                   │
              ↓                   ↓
       Execution Time       Memory Usage
```

---

## 2.3 เหตุผลที่ต้องวิเคราะห์อัลกอริทึม

สมมติว่ามีอัลกอริทึมสองแบบที่สามารถแก้ปัญหาเดียวกันได้

```text
Algorithm A → 10 seconds
Algorithm B → 0.1 seconds
```

เมื่อข้อมูลมีขนาดเล็ก ความแตกต่างอาจไม่มาก แต่เมื่อข้อมูลเพิ่มขึ้น ความแตกต่างจะมีผลอย่างมากต่อประสิทธิภาพของระบบ

ตัวอย่าง

```text
100 records
      ↓
1,000 records
      ↓
1,000,000 records
      ↓
1,000,000,000 records
```

ดังนั้น Algorithm Analysis จึงมีความสำคัญต่อระบบ เช่น

* Database System
* Search Engine
* Big Data
* Cloud Computing
* Machine Learning
* Artificial Intelligence
* RAG
* GraphRAG

---

## 2.4 Algorithm Correctness

ก่อนวิเคราะห์ว่า Algorithm เร็วหรือช้า สิ่งแรกที่ต้องตรวจสอบคือ **ความถูกต้อง (Correctness)**

> Algorithm ที่มีประสิทธิภาพสูงแต่ให้ผลลัพธ์ผิด ย่อมไม่มีประโยชน์

ตัวอย่าง

```text
Input:
10, 25, 15

Expected Output:
25
```

Algorithm ต้องสามารถให้ผลลัพธ์ที่ถูกต้องในกรณีต่าง ๆ เช่น

* ข้อมูลมีเพียง 1 ค่า
* ข้อมูลเป็นค่าติดลบ
* มีค่าซ้ำกัน
* ข้อมูลเรียงลำดับแล้ว
* ข้อมูลเรียงย้อนกลับ
* ข้อมูลมีขนาดใหญ่

ดังนั้น Algorithm ที่ดีควรมีคุณสมบัติ

```text
Correct
   +
Efficient
   ↓
Good Algorithm
```

---

## 2.5 Input Size

ในการวิเคราะห์ Algorithm มักใช้ตัวแปร `n` แทนขนาดของข้อมูลนำเข้า

ตัวอย่าง

```text
Array = [10, 20, 30, 40, 50]

n = 5
```

ถ้ามีข้อมูล 1,000 รายการ

```text
n = 1,000
```

ถ้ามีข้อมูล 1,000,000 รายการ

```text
n = 1,000,000
```

สิ่งที่ต้องพิจารณาคือ เมื่อ `n` เพิ่มขึ้น จำนวนขั้นตอนของ Algorithm เพิ่มขึ้นอย่างไร

---

# 2.6 Time Complexity

**Time Complexity** คือการวิเคราะห์จำนวนขั้นตอนหรือการดำเนินการที่ Algorithm ต้องใช้เมื่อขนาดข้อมูลเพิ่มขึ้น

Time Complexity ไม่ได้หมายถึงเวลาจริงในหน่วยวินาทีโดยตรง เนื่องจากเวลาจริงขึ้นอยู่กับ

* CPU
* RAM
* Programming Language
* Compiler
* Operating System
* Hardware

จึงเน้นศึกษาการเติบโตของจำนวนการดำเนินการเมื่อ `n` เพิ่มขึ้น

ตัวอย่าง

```python
for i in range(n):
    print(i)
```

Loop ทำงาน `n` ครั้ง

ดังนั้น

```text
Time Complexity = O(n)
```

---

# 2.7 Space Complexity

**Space Complexity** คือการวิเคราะห์ปริมาณหน่วยความจำที่ Algorithm ต้องใช้

ตัวอย่าง

```python
numbers = [0] * n
```

ต้องสร้าง Array ที่มีขนาด `n`

ดังนั้น

```text
Space Complexity = O(n)
```

ในทางกลับกัน

```python
x = 10
y = 20
z = x + y
```

ใช้หน่วยความจำคงที่

ดังนั้น

```text
Space Complexity = O(1)
```

---

# 2.8 Best Case, Average Case และ Worst Case

Algorithm เดียวกันอาจใช้จำนวนขั้นตอนไม่เท่ากันในแต่ละสถานการณ์

จึงสามารถวิเคราะห์ได้ 3 กรณี

### Best Case

กรณีที่ Algorithm ทำงานน้อยที่สุด

### Average Case

กรณีที่ Algorithm ทำงานโดยเฉลี่ย

### Worst Case

กรณีที่ Algorithm ต้องทำงานมากที่สุด

### ตัวอย่าง Linear Search

```text
Array = [10, 20, 30, 40, 50]
```

ค้นหา `10`

```text
พบตำแหน่งแรก
→ Best Case
→ O(1)
```

ค้นหา `30`

```text
ตรวจสอบ 3 ตำแหน่ง
```

ค้นหา `50`

```text
ตรวจสอบทุกตำแหน่ง
→ Worst Case
→ O(n)
```

---

# 2.9 Asymptotic Analysis

**Asymptotic Analysis** เป็นวิธีวิเคราะห์พฤติกรรมของ Algorithm เมื่อขนาดข้อมูล `n` มีขนาดใหญ่มาก

ตัวอย่าง

```text
2n + 10
3n + 100
10n + 500
```

ทั้งหมดมีอัตราการเติบโตเป็นเชิงเส้น

ดังนั้นสามารถเขียนเป็น

```text
O(n)
```

เช่นเดียวกัน

```text
n² + n + 10
```

เมื่อ `n` มีขนาดใหญ่ พจน์ `n²` จะมีอิทธิพลหลัก

ดังนั้น

```text
O(n²)
```

---

# 2.10 Big-O Notation

**Big-O Notation** ใช้แสดงอัตราการเติบโตของ Algorithm และนิยมใช้ในการอธิบาย Worst-case Complexity

Complexity ที่สำคัญ ได้แก่

```text
O(1)
O(log n)
O(n)
O(n log n)
O(n²)
O(2ⁿ)
O(n!)
```

สามารถเรียงจากการเติบโตช้าไปเร็วได้ดังนี้

```text
O(1)
   ↓
O(log n)
   ↓
O(n)
   ↓
O(n log n)
   ↓
O(n²)
   ↓
O(2ⁿ)
   ↓
O(n!)
```

---

# 2.11 O(1) — Constant Time

Algorithm ที่ใช้จำนวนขั้นตอนคงที่ ไม่ขึ้นอยู่กับจำนวนข้อมูล

ตัวอย่าง

```python
def get_first(arr):
    return arr[0]
```

ไม่ว่า Array จะมี

```text
10 elements
1,000 elements
1,000,000 elements
```

ก็สามารถเข้าถึงสมาชิกตัวแรกได้โดยตรง

ดังนั้น

```text
Time Complexity = O(1)
```

---

# 2.12 O(log n) — Logarithmic Time

จำนวนขั้นตอนเพิ่มขึ้นอย่างช้า ๆ เมื่อข้อมูลเพิ่มขึ้น

ตัวอย่างสำคัญคือ **Binary Search**

หลักการคือแบ่งข้อมูลออกเป็นครึ่งหนึ่งในแต่ละรอบ

```text
1,000,000
    ↓
500,000
    ↓
250,000
    ↓
125,000
    ↓
...
```

ดังนั้น

```text
Binary Search = O(log n)
```

Binary Search มีประสิทธิภาพสูง แต่มีเงื่อนไขสำคัญคือข้อมูลต้องอยู่ในรูปแบบที่สามารถแบ่งช่วงค้นหาได้ เช่น ข้อมูลที่เรียงลำดับแล้ว

---

# 2.13 O(n) — Linear Time

จำนวนขั้นตอนเพิ่มขึ้นตามจำนวนข้อมูล

ตัวอย่าง

```python
for x in arr:
    print(x)
```

ถ้ามีข้อมูล `n` รายการ Loop จะทำงานประมาณ `n` ครั้ง

ดังนั้น

```text
Time Complexity = O(n)
```

ตัวอย่าง Algorithm

* Linear Search
* Array Traversal
* Finding Maximum

---

# 2.14 O(n log n) — Linearithmic Time

เป็น Complexity ที่พบใน Sorting Algorithms ที่มีประสิทธิภาพสูง

ตัวอย่าง

* Merge Sort
* Heap Sort
* Average-case Quick Sort

โดยทั่วไป

```text
O(n log n)
```

มีประสิทธิภาพดีกว่า

```text
O(n²)
```

เมื่อข้อมูลมีขนาดใหญ่

---

# 2.15 O(n²) — Quadratic Time

มักเกิดจากการใช้ Loop ซ้อนกัน

ตัวอย่าง

```python
for i in range(n):
    for j in range(n):
        print(i, j)
```

Loop ชั้นนอกทำงาน `n` ครั้ง

Loop ชั้นในทำงาน `n` ครั้ง

ดังนั้น

```text
n × n = n²

Time Complexity = O(n²)
```

ตัวอย่าง Algorithm

* Bubble Sort
* Selection Sort
* Insertion Sort ใน Worst Case

---

# 2.16 O(2ⁿ) — Exponential Time

จำนวนขั้นตอนเพิ่มขึ้นอย่างรวดเร็วเมื่อ `n` เพิ่มขึ้น

ตัวอย่าง

* Naive Recursive Fibonacci
* Subset Generation
* Backtracking บางรูปแบบ

ตัวอย่าง

```text
n = 10
→ 2¹⁰ = 1,024

n = 30
→ 2³⁰ ≈ 1,073,741,824
```

จึงไม่เหมาะกับข้อมูลขนาดใหญ่

---

# 2.17 O(n!) — Factorial Time

เป็น Complexity ที่เติบโตเร็วมาก

ตัวอย่าง

```text
n = 5
→ 5! = 120

n = 10
→ 10! = 3,628,800
```

พบในปัญหาบางประเภท เช่น การสร้าง Permutation และ Brute Force ของ Traveling Salesman Problem

---

# 2.18 ตารางเปรียบเทียบ Complexity

| Complexity   | ชื่อ         | ตัวอย่าง        |
| ------------ | ------------ | --------------- |
| `O(1)`       | Constant     | Array Access    |
| `O(log n)`   | Logarithmic  | Binary Search   |
| `O(n)`       | Linear       | Linear Search   |
| `O(n log n)` | Linearithmic | Merge Sort      |
| `O(n²)`      | Quadratic    | Bubble Sort     |
| `O(2ⁿ)`      | Exponential  | Naive Fibonacci |
| `O(n!)`      | Factorial    | Brute Force TSP |

---

# 2.19 การวิเคราะห์ Algorithm ตัวอย่าง

พิจารณา Algorithm สำหรับหาค่าสูงสุด

```python
def find_max(arr):
    max_value = arr[0]

    for i in range(1, len(arr)):
        if arr[i] > max_value:
            max_value = arr[i]

    return max_value
```

กำหนด

```text
n = จำนวนสมาชิกใน Array
```

Loop ทำงานประมาณ `n - 1` ครั้ง

ดังนั้น

```text
T(n) = n - 1
```

เมื่อตัดค่าคงที่ออก

```text
T(n) = O(n)
```

ดังนั้น

```text
Time Complexity = O(n)
Space Complexity = O(1)
```

---

# 2.20 กฎพื้นฐานของ Big-O

## กฎที่ 1: ตัดค่าคงที่

```text
O(2n) → O(n)

O(5n) → O(n)
```

## กฎที่ 2: เลือกพจน์ที่เติบโตเร็วที่สุด

```text
O(n² + n + 10)
→ O(n²)
```

## กฎที่ 3: Loop ต่อกัน

```python
for i in range(n):
    ...

for j in range(n):
    ...
```

ดังนั้น

```text
O(n) + O(n)
= O(2n)
= O(n)
```

## กฎที่ 4: Loop ซ้อนกัน

```python
for i in range(n):
    for j in range(n):
        ...
```

ดังนั้น

```text
O(n × n)
= O(n²)
```

---

# 2.21 Data Structure กับ Complexity

การเลือก Data Structure มีผลโดยตรงต่อประสิทธิภาพของ Algorithm

| Operation | Array | Linked List | Hash Table |
| --------- | ----: | ----------: | ---------: |
| Access    |  O(1) |        O(n) |          - |
| Search    |  O(n) |        O(n) |      O(1)* |
| Insert    |  O(n) |       O(1)* |      O(1)* |
| Delete    |  O(n) |       O(1)* |      O(1)* |

> `*` เป็นค่าโดยเฉลี่ยหรือขึ้นอยู่กับเงื่อนไขและรูปแบบการใช้งาน

ดังนั้นการออกแบบระบบต้องพิจารณาร่วมกัน

```text
Problem
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

# 2.22 Linear Search vs Binary Search

สมมติข้อมูล

```text
[10, 20, 30, 40, 50, 60, 70, 80]
```

## Linear Search

ตรวจสอบข้อมูลทีละรายการ

```text
10 → 20 → 30 → 40 → ...
```

Complexity

```text
O(n)
```

## Binary Search

แบ่งข้อมูลออกเป็นครึ่งหนึ่งในแต่ละรอบ

```text
             40
           /    \
         20      60
        /  \    /  \
      10   30  50   70
```

Complexity

```text
O(log n)
```

ดังนั้นเมื่อข้อมูลมีขนาดใหญ่ Binary Search มีประสิทธิภาพสูงกว่า Linear Search อย่างมาก แต่ต้องอาศัยข้อมูลที่สามารถแบ่งช่วงค้นหาได้ เช่น ข้อมูลที่เรียงลำดับแล้ว

---

# 2.23 Scalability

**Scalability** คือความสามารถของ Algorithm หรือระบบในการรองรับข้อมูลที่เพิ่มขึ้น โดยยังคงมีประสิทธิภาพที่ยอมรับได้

ตัวอย่าง

```text
100 records
      ↓
1,000 records
      ↓
1,000,000 records
      ↓
1,000,000,000 records
```

Algorithm ที่ทำงานได้ดีเมื่อข้อมูลมีขนาดเล็ก อาจไม่เหมาะสมเมื่อข้อมูลมีขนาดใหญ่

ดังนั้นการออกแบบ Algorithm ต้องพิจารณา **Scalability** ตั้งแต่ต้น

---

# 2.24 Algorithm กับ AI

Algorithm เป็นพื้นฐานสำคัญของระบบ AI

```text
Algorithm
    ↓
Search
    ↓
Optimization
    ↓
Machine Learning
    ↓
Artificial Intelligence
```

ตัวอย่าง Algorithm ที่เกี่ยวข้องกับ AI

* BFS
* DFS
* A*
* Greedy Search
* Beam Search
* Genetic Algorithm
* Gradient Descent
* K-Means
* PageRank

---

# 2.25 Algorithm กับ RAG

ในระบบ **Retrieval-Augmented Generation (RAG)** Algorithm มีบทบาทสำคัญในกระบวนการค้นคืนข้อมูล

```text
Documents
    ↓
Chunking
    ↓
Embedding
    ↓
Vector Index
    ↓
Retrieval
    ↓
Top-K
    ↓
Reranking
    ↓
LLM
```

Algorithm ที่เกี่ยวข้อง เช่น

* KNN
* Approximate Nearest Neighbor (ANN)
* HNSW
* IVF
* BM25
* Reranking Algorithms

การเลือก Algorithm ส่งผลต่อ

* Retrieval Speed
* Latency
* Recall
* Precision
* Memory Usage
* Scalability

---

# 2.26 Algorithm กับ GraphRAG

GraphRAG เพิ่มโครงสร้าง Graph เข้ามาช่วยในการค้นคืนและเชื่อมโยงความรู้

```text
Documents
    ↓
Entity Extraction
    ↓
Knowledge Graph
    ↓
Graph Traversal
    ↓
Subgraph Retrieval
    ↓
Context
    ↓
LLM
```

Algorithm ที่เกี่ยวข้อง เช่น

* BFS
* DFS
* Shortest Path
* PageRank
* Community Detection
* Graph Search
* Graph Traversal

จึงสามารถเชื่อมโยงองค์ความรู้ได้ดังนี้

```text
Data Structure
      ↓
Algorithm
      ↓
Graph
      ↓
Search
      ↓
Information Retrieval
      ↓
RAG
      ↓
GraphRAG
      ↓
AI Agent
```

---

# 2.27 สรุปบทที่ 2

การวิเคราะห์ Algorithm เป็นกระบวนการสำคัญในการประเมินว่า Algorithm สามารถแก้ปัญหาได้ **ถูกต้อง มีประสิทธิภาพ และรองรับข้อมูลขนาดใหญ่ได้หรือไม่**

แนวคิดสำคัญประกอบด้วย

1. **Correctness** — ความถูกต้องของ Algorithm
2. **Time Complexity** — ความซับซ้อนด้านเวลา
3. **Space Complexity** — ความซับซ้อนด้านหน่วยความจำ
4. **Best Case** — กรณีดีที่สุด
5. **Average Case** — กรณีโดยเฉลี่ย
6. **Worst Case** — กรณีแย่ที่สุด
7. **Asymptotic Analysis** — การวิเคราะห์อัตราการเติบโต
8. **Big-O Notation** — การอธิบายความซับซ้อน
9. **Scalability** — ความสามารถในการรองรับข้อมูลขนาดใหญ่
10. **Data Structure + Algorithm** — การเลือกโครงสร้างข้อมูลและ Algorithm ให้เหมาะสม

แนวคิดสำคัญที่สุดของบทนี้คือ

```text
                 PROBLEM
                    ↓
          Choose Data Structure
                    ↓
            Design Algorithm
                    ↓
          Analyze Complexity
                    ↓
             Implement
                    ↓
           Test & Evaluate
                    ↓
              Optimize
                    ↓
                SOLUTION
```

> **Algorithm ที่ดีไม่ใช่เพียง Algorithm ที่ให้คำตอบถูกต้อง แต่ต้องสามารถแก้ปัญหาได้อย่างมีประสิทธิภาพ และสามารถรองรับขนาดข้อมูลที่เพิ่มขึ้นได้**

---

## 2.28 แบบฝึกหัดท้ายบท

### แบบฝึกหัดที่ 1: วิเคราะห์ Big-O

จงวิเคราะห์ Time Complexity ของ Algorithm ต่อไปนี้

```python
for i in range(n):
    print(i)
```

---

### แบบฝึกหัดที่ 2: Nested Loop

จงวิเคราะห์ Complexity

```python
for i in range(n):
    for j in range(n):
        print(i, j)
```

---

### แบบฝึกหัดที่ 3: เปรียบเทียบ Search

จงเปรียบเทียบ

* Linear Search
* Binary Search

ในด้าน

* หลักการทำงาน
* Time Complexity
* ข้อจำกัด
* กรณีการใช้งาน

---

### แบบฝึกหัดที่ 4: วิเคราะห์ Algorithm

จงวิเคราะห์ Time Complexity และ Space Complexity ของ

```python
def sum_array(arr):
    total = 0

    for x in arr:
        total += x

    return total
```

---

### แบบฝึกหัดที่ 5: วิเคราะห์สถานการณ์

สมมติว่าระบบต้องค้นหาข้อมูลจำนวน **10 ล้านรายการ**

จงอธิบายว่าเหตุใดการเลือก Algorithm จึงมีความสำคัญ และควรพิจารณาอะไรบ้างก่อนเลือกใช้ Linear Search หรือ Binary Search

---

## 2.29 คำถามทบทวน

1. Algorithm Analysis คืออะไร?
2. Time Complexity แตกต่างจาก Space Complexity อย่างไร?
3. Big-O มีความหมายอย่างไร?
4. `O(1)` หมายถึงอะไร?
5. `O(log n)` แตกต่างจาก `O(n)` อย่างไร?
6. เหตุใด Nested Loop จึงมักมี Complexity เป็น `O(n²)`?
7. Best Case และ Worst Case แตกต่างกันอย่างไร?
8. เหตุใด Data Structure จึงมีผลต่อประสิทธิภาพของ Algorithm?
9. Scalability มีความสำคัญต่อระบบ Big Data และ AI อย่างไร?
10. Algorithm มีบทบาทอย่างไรใน RAG และ GraphRAG?

---

## 2.30 คำสำคัญประจำบท

`Algorithm Analysis` · `Time Complexity` · `Space Complexity` · `Big-O` · `Big-Ω` · `Big-Θ` · `Best Case` · `Average Case` · `Worst Case` · `Asymptotic Analysis` · `Scalability` · `Performance` · `Searching` · `Data Structure` · `Optimization`
