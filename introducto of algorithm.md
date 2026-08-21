# พื้นฐานของอัลกอริทึม และ โครงสร้างข้อมูล (introducto of algorithm)


## 1. บทนำ

**อัลกอริทึม (Algorithm)** และ **โครงสร้างข้อมูล (Data Structure)** เป็นพื้นฐานสำคัญของวิทยาการคอมพิวเตอร์ การเขียนโปรแกรม วิทยาการข้อมูล ปัญญาประดิษฐ์ และการพัฒนาซอฟต์แวร์

การเขียนโปรแกรมที่ดีไม่ได้ขึ้นอยู่กับการเลือกภาษาโปรแกรมเพียงอย่างเดียว แต่ต้องสามารถตอบคำถามสำคัญได้ว่า

> **“เราจะจัดเก็บข้อมูลอย่างไร และจะประมวลผลข้อมูลอย่างไรให้ถูกต้องและมีประสิทธิภาพ?”**

คำตอบประกอบด้วย 2 ส่วนสำคัญ

```text
Data Structure + Algorithm = Efficient Problem Solving
```

**Data Structure** ทำหน้าที่จัดเก็บและจัดระเบียบข้อมูล ส่วน **Algorithm** ทำหน้าที่กำหนดขั้นตอนในการประมวลผลข้อมูลเพื่อให้ได้ผลลัพธ์ที่ต้องการ

---

# 2. อัลกอริทึมคืออะไร?

**อัลกอริทึม (Algorithm)** คือ ลำดับขั้นตอนที่ชัดเจนและเป็นระบบสำหรับแก้ปัญหาหรือทำงานบางอย่างให้ได้ผลลัพธ์ที่ต้องการ

ตัวอย่างง่าย ๆ เช่น การหาค่าสูงสุดของตัวเลข 3 จำนวน

```text
Input: 10, 25, 15

Step 1: กำหนด 10 เป็นค่ามากที่สุด
Step 2: เปรียบเทียบ 25 กับค่ามากที่สุด
Step 3: 25 มากกว่า 10 จึงเปลี่ยนค่ามากที่สุดเป็น 25
Step 4: เปรียบเทียบ 15 กับ 25
Step 5: 15 ไม่มากกว่า 25
Output: 25
```

จะเห็นว่า Algorithm ไม่จำเป็นต้องเป็นโปรแกรม แต่เป็น **แนวคิดและขั้นตอนการแก้ปัญหา** ที่สามารถนำไปเขียนเป็นโปรแกรมได้

---

# 3. คุณสมบัติของอัลกอริทึม

อัลกอริทึมที่ดีควรมีคุณสมบัติสำคัญ ได้แก่

### 3.1 Input

ต้องระบุข้อมูลนำเข้าอย่างชัดเจน

```text
Input → จำนวนเต็ม n จำนวน
```

### 3.2 Output

ต้องระบุผลลัพธ์ที่ต้องการอย่างชัดเจน

```text
Output → ค่าที่มากที่สุด
```

### 3.3 Definiteness

แต่ละขั้นตอนต้องมีความชัดเจน ไม่กำกวม

### 3.4 Finiteness

ต้องสามารถสิ้นสุดการทำงานได้ภายในจำนวนขั้นตอนที่จำกัด

### 3.5 Effectiveness

แต่ละขั้นตอนต้องสามารถดำเนินการได้จริง

---

# 4. Algorithm กับ Program แตกต่างกันอย่างไร?

| Algorithm                         | Program                               |
| --------------------------------- | ------------------------------------- |
| แนวคิดในการแก้ปัญหา               | การนำ Algorithm มาเขียนเป็นโค้ด       |
| ไม่จำเป็นต้องใช้ภาษาโปรแกรม       | ต้องใช้ภาษาโปรแกรม                    |
| เน้นขั้นตอนและตรรกะ               | เน้นการทำงานของคอมพิวเตอร์            |
| ใช้ Pseudocode หรือ Flowchart ได้ | ใช้ Python, Java, C++, JavaScript ฯลฯ |

ตัวอย่าง

```text
Algorithm
    ↓
Pseudocode
    ↓
Programming Language
    ↓
Program
    ↓
Execution
```

---

# 5. Pseudocode

**Pseudocode** คือ การเขียนขั้นตอนของ Algorithm ในรูปแบบที่อ่านง่ายและใกล้เคียงภาษามนุษย์หรือภาษาโปรแกรม

ตัวอย่างการหาค่ามากที่สุด

```text
Algorithm FindMax(A)

max ← A[0]

FOR each x in A
    IF x > max THEN
        max ← x
    END IF
END FOR

RETURN max
```

ข้อดีของ Pseudocode คือช่วยให้นักศึกษาสามารถออกแบบ Algorithm ก่อนเริ่มเขียนโปรแกรมจริง

---

# 6. Flowchart

**Flowchart** คือ แผนภาพที่ใช้แสดงลำดับขั้นตอนการทำงานของ Algorithm

โครงสร้างพื้นฐาน

```text
Start
  ↓
Input
  ↓
Process
  ↓
Decision
  ↓
Output
  ↓
End
```

ตัวอย่าง

```text
        Start
          ↓
       Input n
          ↓
      n > 0 ?
       ↙     ↘
     Yes      No
      ↓        ↓
 Positive    Negative
      ↘        ↙
        Output
           ↓
          End
```

---

# 7. โครงสร้างข้อมูลคืออะไร?

**โครงสร้างข้อมูล (Data Structure)** คือ วิธีการจัดเก็บและจัดระเบียบข้อมูลในหน่วยความจำ เพื่อให้สามารถเข้าถึง เพิ่ม ลบ ค้นหา และประมวลผลข้อมูลได้อย่างมีประสิทธิภาพ

ตัวอย่างโครงสร้างข้อมูล

* Array
* Linked List
* Stack
* Queue
* Hash Table
* Tree
* Graph
* Heap

---

# 8. ประเภทของโครงสร้างข้อมูล

สามารถแบ่งออกเป็น 2 กลุ่มใหญ่

## 8.1 Linear Data Structure

ข้อมูลมีลำดับต่อเนื่อง

```text
Array
Linked List
Stack
Queue
```

ตัวอย่าง

```text
[10] → [20] → [30] → [40]
```

---

## 8.2 Non-Linear Data Structure

ข้อมูลไม่ได้จัดเรียงเป็นลำดับเส้นตรง

```text
Tree
Graph
Heap
```

ตัวอย่าง Tree

```text
        A
       / \
      B   C
     / \
    D   E
```

---

# 9. Array

**Array** เป็นโครงสร้างข้อมูลที่เก็บข้อมูลประเภทเดียวกันในตำแหน่งที่สามารถเข้าถึงด้วย Index

```text
Index:  0    1    2    3
        ↓    ↓    ↓    ↓
Array: [10] [20] [30] [40]
```

ตัวอย่าง

```python
numbers = [10, 20, 30, 40]

print(numbers[2])
```

ผลลัพธ์

```text
30
```

จุดเด่นคือการเข้าถึงข้อมูลด้วย Index สามารถทำได้อย่างรวดเร็ว

---

# 10. Linked List

Linked List ประกอบด้วย Node หลายตัว โดยแต่ละ Node เชื่อมโยงไปยัง Node ถัดไป

```text
[10 | next] → [20 | next] → [30 | next] → NULL
```

เหมาะกับสถานการณ์ที่ต้องเพิ่มหรือลบข้อมูลจากโครงสร้างบ่อย ๆ

---

# 11. Stack

**Stack** ทำงานตามหลัก

> **LIFO — Last In, First Out**

ข้อมูลที่เข้าไปล่าสุดจะถูกนำออกก่อน

```text
       ┌─────┐
       │ 30  │ ← POP
       ├─────┤
       │ 20  │
       ├─────┤
       │ 10  │
       └─────┘
          ↑
         PUSH
```

ตัวอย่างการใช้งาน

* Undo / Redo
* Function Call
* Browser History
* Expression Evaluation

---

# 12. Queue

**Queue** ทำงานตามหลัก

> **FIFO — First In, First Out**

ข้อมูลที่เข้าก่อนจะถูกนำออกก่อน

```text
Front                         Rear
  ↓                            ↓
[10] → [20] → [30] → [40]
  ↑
 Dequeue                   Enqueue
```

ตัวอย่างการใช้งาน

* Printer Queue
* CPU Scheduling
* Network Queue
* Task Processing

---

# 13. Tree

**Tree** เป็นโครงสร้างข้อมูลแบบลำดับชั้น

```text
             Root
              A
            /   \
           B     C
         /  \     \
        D    E     F
```

คำศัพท์สำคัญ

* Root
* Node
* Edge
* Parent
* Child
* Leaf
* Depth
* Height
* Subtree

ตัวอย่าง Tree ที่สำคัญ

* Binary Tree
* Binary Search Tree
* AVL Tree
* Heap
* B-Tree

---

# 14. Graph

**Graph** ประกอบด้วย Vertex และ Edge ซึ่งใช้แทนความสัมพันธ์ระหว่างข้อมูล

```text
      A
     / \
    B---C
     \ /
      D
```

Graph สามารถใช้แทน

* Social Network
* Road Network
* Computer Network
* Knowledge Graph
* Recommendation System
* Transportation Network

อัลกอริทึมสำคัญ ได้แก่

* BFS
* DFS
* Dijkstra
* Bellman-Ford
* Floyd-Warshall
* Prim
* Kruskal

---

# 15. ความสัมพันธ์ระหว่าง Data Structure และ Algorithm

Data Structure และ Algorithm ทำงานร่วมกัน

```text
              Problem
                 ↓
        ┌─────────────────┐
        │   Data Structure │
        └─────────────────┘
                 +
        ┌─────────────────┐
        │    Algorithm    │
        └─────────────────┘
                 ↓
          Solution
                 ↓
          Performance
```

ตัวอย่าง

**ปัญหา:** ค้นหาข้อมูลจำนวนมาก

ถ้าใช้ Array ที่ไม่ได้เรียงลำดับ:

```text
Linear Search → O(n)
```

ถ้าข้อมูลเรียงลำดับ:

```text
Binary Search → O(log n)
```

ดังนั้น การเลือก **Data Structure + Algorithm** มีผลโดยตรงต่อประสิทธิภาพของระบบ

---

# 16. Algorithm Complexity

การวิเคราะห์ Algorithm มีเป้าหมายเพื่อประเมินทรัพยากรที่ต้องใช้

## Time Complexity

วัดเวลาหรือจำนวนขั้นตอนโดยประมาณ

## Space Complexity

วัดพื้นที่หน่วยความจำที่ Algorithm ต้องใช้

ตัวอย่างลำดับความซับซ้อน

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

โดยทั่วไป เมื่อข้อมูลมีขนาดใหญ่ Algorithm ที่มี Complexity ต่ำกว่าจะมีแนวโน้มทำงานได้มีประสิทธิภาพกว่า

---

# 17. เทคนิคการออกแบบ Algorithm

เทคนิคสำคัญที่ควรศึกษา ได้แก่

### Divide and Conquer

```text
Divide
   ↓
Solve
   ↓
Combine
```

ตัวอย่าง:

* Merge Sort
* Quick Sort
* Binary Search

### Greedy

เลือกทางเลือกที่ดีที่สุดในแต่ละขั้นตอน

ตัวอย่าง:

* Dijkstra
* Prim
* Kruskal
* Huffman Coding

### Dynamic Programming

แก้ Subproblem และเก็บผลลัพธ์เพื่อนำกลับมาใช้

ตัวอย่าง:

* Knapsack
* LCS
* Coin Change

### Backtracking

ทดลองเลือกทางเลือกและย้อนกลับเมื่อไม่สามารถดำเนินการต่อได้

ตัวอย่าง:

* N-Queens
* Sudoku

---

# 18. Algorithm และ AI

พื้นฐาน Algorithm เป็นรากฐานสำคัญของ AI

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

ตัวอย่าง Algorithm ใน AI

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

# 19. Algorithm กับ RAG และ GraphRAG

Algorithm ยังมีบทบาทสำคัญในระบบ AI สมัยใหม่

### RAG

```text
Documents
    ↓
Chunking
    ↓
Embedding
    ↓
Indexing
    ↓
Retrieval
    ↓
Top-K
    ↓
Reranking
    ↓
LLM
```

ตัวอย่าง Algorithm ที่เกี่ยวข้อง

* KNN
* Approximate Nearest Neighbor
* HNSW
* BM25
* Reranking

### GraphRAG

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

จึงสามารถเชื่อมโยงองค์ความรู้ได้เป็น

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

# 20. สรุปแนวคิดสำคัญ

| แนวคิด             | หน้าที่                           |
| ------------------ | --------------------------------- |
| **Algorithm**      | ขั้นตอนการแก้ปัญหา                |
| **Data Structure** | วิธีจัดเก็บและจัดระเบียบข้อมูล    |
| **Pseudocode**     | อธิบาย Algorithm ก่อนเขียนโปรแกรม |
| **Flowchart**      | แสดง Algorithm ด้วยแผนภาพ         |
| **Complexity**     | วัดประสิทธิภาพ                    |
| **Searching**      | ค้นหาข้อมูล                       |
| **Sorting**        | เรียงลำดับข้อมูล                  |
| **Recursion**      | แก้ปัญหาด้วยการเรียกตัวเอง        |
| **Graph**          | แทนความสัมพันธ์ของข้อมูล          |
| **Optimization**   | ค้นหาคำตอบที่เหมาะสมที่สุด        |
| **AI Algorithms**  | ประยุกต์ Algorithm กับ AI         |
| **RAG/GraphRAG**   | ประยุกต์ Search และ Graph กับ LLM |

---

# 21. แนวคิดสำคัญที่สุด

หัวใจของวิชา **Algorithm and Data Structures** สามารถสรุปได้ว่า

```text
                 PROBLEM
                    ↓
             Problem Analysis
                    ↓
             Data Structure
                    ↓
               Algorithm
                    ↓
             Implementation
                    ↓
                Testing
                    ↓
             Complexity
                    ↓
              Optimization
                    ↓
                SOLUTION
```

ดังนั้น นักศึกษาควรเรียนรู้ไม่ใช่เพียงว่า **“Algorithm ทำงานอย่างไร”** แต่ต้องสามารถตอบได้ว่า

> **ปัญหาคืออะไร → ควรใช้ Data Structure ใด → ควรใช้ Algorithm ใด → มี Complexity เท่าไร → และสามารถปรับปรุงให้มีประสิทธิภาพขึ้นได้อย่างไร**

นี่คือพื้นฐานสำคัญที่จะต่อยอดไปสู่ **Software Engineering, Data Science, Artificial Intelligence, Machine Learning, RAG, GraphRAG และ AI Agent** ได้อย่างเป็นระบบ
