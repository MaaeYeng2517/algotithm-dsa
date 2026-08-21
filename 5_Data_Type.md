# บทที่ 5: Array, Linked List และ Abstract Data Type (ADT)

> **Linear Data Structures — Array, Linked List และ ADT**
> ตัวอย่างการเขียนโปรแกรมด้วย **C, C++ และ Java**

---

## 5.1 บทนำ

ในบทที่ผ่านมา นักศึกษาได้เรียนรู้เกี่ยวกับ **Algorithm, Searching, Sorting และ Complexity** ซึ่งเป็นพื้นฐานสำคัญของการแก้ปัญหาทางคอมพิวเตอร์

อย่างไรก็ตาม Algorithm จำเป็นต้องทำงานร่วมกับข้อมูล ดังนั้นจึงต้องมีวิธีการจัดเก็บและจัดการข้อมูลอย่างเหมาะสม

แนวคิดสำคัญคือ

```text
Problem
   ↓
Data
   ↓
Data Structure
   ↓
Algorithm
   ↓
Program
   ↓
Result
```

**Data Structure** หรือ **โครงสร้างข้อมูล** คือวิธีการจัดเก็บและจัดระเบียบข้อมูลในหน่วยความจำ เพื่อให้สามารถ

* เข้าถึงข้อมูล
* ค้นหาข้อมูล
* เพิ่มข้อมูล
* ลบข้อมูล
* แก้ไขข้อมูล
* เรียงข้อมูล
* ประมวลผลข้อมูล

ได้อย่างมีประสิทธิภาพ

ในบทนี้จะเน้นโครงสร้างข้อมูลพื้นฐาน ได้แก่

```text
Data Structure
│
├── Array
│
├── Linked List
│
└── Abstract Data Type (ADT)
```

---

# 5.2 วัตถุประสงค์การเรียนรู้

เมื่อศึกษาบทนี้แล้ว นักศึกษาสามารถ:

1. อธิบายความหมายของ Data Structure ได้
2. อธิบายความแตกต่างระหว่าง Linear และ Non-linear Data Structure ได้
3. อธิบายแนวคิด Abstract Data Type (ADT) ได้
4. อธิบายโครงสร้างของ Array ได้
5. อธิบาย Static Array และ Dynamic Array ได้
6. Implement Array ด้วยภาษา C, C++ และ Java ได้
7. อธิบายแนวคิด Linked List ได้
8. Implement Singly Linked List ด้วยภาษา C, C++ และ Java ได้
9. อธิบาย Doubly Linked List ได้
10. วิเคราะห์ Time Complexity ของ Array และ Linked List ได้
11. เปรียบเทียบ Array กับ Linked List ได้
12. เลือก Data Structure ให้เหมาะสมกับปัญหาได้
13. ประยุกต์ใช้ Data Structure ในการพัฒนาโปรแกรมจริงได้

---

# 5.3 ผลลัพธ์การเรียนรู้

เมื่อสิ้นสุดบทนี้ นักศึกษาสามารถ:

| LO  | ผลลัพธ์การเรียนรู้                                |
| --- | ------------------------------------------------- |
| LO1 | อธิบายแนวคิดพื้นฐานของ Data Structure             |
| LO2 | จำแนก Linear และ Non-linear Data Structure        |
| LO3 | อธิบายแนวคิด Abstract Data Type                   |
| LO4 | Implement Array ได้                               |
| LO5 | Implement Linked List ได้                         |
| LO6 | วิเคราะห์ Time และ Space Complexity               |
| LO7 | เปรียบเทียบ Array และ Linked List                 |
| LO8 | เลือก Data Structure ให้เหมาะกับปัญหา             |
| LO9 | ประยุกต์ใช้ Data Structure ในภาษา C, C++ และ Java |

---

# 5.4 Data Structure คืออะไร?

Data Structure คือวิธีการจัดเก็บและจัดระเบียบข้อมูล เพื่อให้สามารถประมวลผลข้อมูลได้อย่างมีประสิทธิภาพ

ตัวอย่าง

```text
Data Structures
│
├── Linear
│   ├── Array
│   ├── Linked List
│   ├── Stack
│   └── Queue
│
└── Non-Linear
    ├── Tree
    ├── Heap
    └── Graph
```

ตัวอย่างข้อมูลนักศึกษา

```text
Student
│
├── ID
├── Name
├── Major
└── GPA
```

สามารถจัดเก็บด้วย

```text
Array
Linked List
Hash Table
Tree
Database
```

การเลือกโครงสร้างข้อมูลส่งผลต่อประสิทธิภาพของโปรแกรมโดยตรง

---

# 5.5 Data Structure และ Algorithm

Data Structure และ Algorithm ทำงานร่วมกัน

```text
Data Structure
       +
Algorithm
       ↓
Efficient Solution
```

ตัวอย่าง

```text
Array
  +
Binary Search
  ↓
O(log n)
```

หรือ

```text
Hash Table
    +
Search
    ↓
Average O(1)
```

หรือ

```text
Graph
  +
BFS / DFS
  ↓
Graph Traversal
```

ดังนั้นในการออกแบบโปรแกรมควรถามทั้งสองคำถาม

> **จะใช้ Algorithm อะไร?**

และ

> **จะใช้ Data Structure อะไร?**

---

# 5.6 ประเภทของ Data Structure

แบ่งได้เป็น 2 กลุ่มใหญ่

```text
Data Structure
│
├── Linear
│
└── Non-Linear
```

## Linear Data Structure

ข้อมูลเรียงต่อกันเป็นลำดับ

```text
A → B → C → D
```

ตัวอย่าง

* Array
* Linked List
* Stack
* Queue

## Non-Linear Data Structure

ข้อมูลมีโครงสร้างเป็นลำดับชั้นหรือเครือข่าย

```text
       A
      / \
     B   C
    / \
   D   E
```

ตัวอย่าง

* Tree
* Heap
* Graph

---

# 5.7 Abstract Data Type (ADT)

**Abstract Data Type หรือ ADT** คือการกำหนดพฤติกรรมและ Operation ของโครงสร้างข้อมูล โดยไม่ระบุรายละเอียดของ Implementation

กล่าวง่าย ๆ

> **ADT บอกว่า "ทำอะไรได้" ส่วน Data Structure บอกว่า "ทำอย่างไร"**

ตัวอย่าง Stack ADT

```text
Stack
│
├── push()
├── pop()
├── peek()
└── isEmpty()
```

Stack สามารถ Implement ด้วย

```text
Array
```

หรือ

```text
Linked List
```

ได้

แนวคิดคือ

```text
ADT
 ↓
Specification
 ↓
Implementation
```

---

# 5.8 Array

**Array** เป็นโครงสร้างข้อมูลที่ใช้เก็บข้อมูลหลายรายการที่มีชนิดข้อมูลเดียวกัน โดยแต่ละสมาชิกสามารถเข้าถึงผ่าน Index

ตัวอย่าง

```text
Index
  0    1    2    3    4
  ↓    ↓    ↓    ↓    ↓
[10] [20] [30] [40] [50]
```

ดังนั้น

```text
A[0] = 10
A[1] = 20
A[2] = 30
A[3] = 40
A[4] = 50
```

---

# 5.9 Array ในภาษา C

การประกาศ Array

```c
#include <stdio.h>

int main() {

    int numbers[5] = {10, 20, 30, 40, 50};

    printf("%d\n", numbers[0]);
    printf("%d\n", numbers[2]);

    return 0;
}
```

ผลลัพธ์

```text
10
30
```

---

# 5.10 Array ในภาษา C++

```cpp
#include <iostream>
using namespace std;

int main() {

    int numbers[5] = {10, 20, 30, 40, 50};

    cout << numbers[0] << endl;
    cout << numbers[2] << endl;

    return 0;
}
```

ผลลัพธ์

```text
10
30
```

---

# 5.11 Array ในภาษา Java

```java
public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        System.out.println(numbers[0]);
        System.out.println(numbers[2]);
    }
}
```

ผลลัพธ์

```text
10
30
```

---

# 5.12 Random Access

จุดเด่นของ Array คือสามารถเข้าถึงข้อมูลด้วย Index ได้โดยตรง

ตัวอย่าง

```text
numbers[500000]
```

ไม่จำเป็นต้องอ่านตั้งแต่สมาชิกตัวแรก

ดังนั้น

```text
Array Access = O(1)
```

นี่เป็นหนึ่งในข้อได้เปรียบสำคัญของ Array

---

# 5.13 การ Traversal Array

## C

```c
#include <stdio.h>

int main() {

    int numbers[] = {10, 20, 30, 40, 50};
    int size = 5;

    for (int i = 0; i < size; i++) {
        printf("%d ", numbers[i]);
    }

    return 0;
}
```

---

## C++

```cpp
#include <iostream>
using namespace std;

int main() {

    int numbers[] = {10, 20, 30, 40, 50};
    int size = 5;

    for (int i = 0; i < size; i++) {
        cout << numbers[i] << " ";
    }

    return 0;
}
```

---

## Java

```java
public class Main {

    public static void main(String[] args) {

        int[] numbers = {10, 20, 30, 40, 50};

        for (int i = 0; i < numbers.length; i++) {
            System.out.print(numbers[i] + " ");
        }
    }
}
```

ผลลัพธ์

```text
10 20 30 40 50
```

Complexity

```text
O(n)
```

---

# 5.14 การค้นหาใน Array

ถ้า Array ไม่เรียงลำดับ สามารถใช้ Linear Search

```text
[30, 10, 50, 20, 40]

ค้นหา 20

30 → 10 → 50 → 20
```

Complexity

```text
O(n)
```

---

## Linear Search ด้วย C

```c
#include <stdio.h>

int main() {

    int numbers[] = {30, 10, 50, 20, 40};
    int size = 5;
    int target = 20;

    for (int i = 0; i < size; i++) {

        if (numbers[i] == target) {
            printf("Found at index %d\n", i);
            return 0;
        }
    }

    printf("Not found\n");

    return 0;
}
```

---

## Linear Search ด้วย C++

```cpp
#include <iostream>
using namespace std;

int main() {

    int numbers[] = {30, 10, 50, 20, 40};
    int size = 5;
    int target = 20;

    for (int i = 0; i < size; i++) {

        if (numbers[i] == target) {
            cout << "Found at index "
                 << i << endl;
            return 0;
        }
    }

    cout << "Not found" << endl;

    return 0;
}
```

---

## Linear Search ด้วย Java

```java
public class Main {

    public static void main(String[] args) {

        int[] numbers = {30, 10, 50, 20, 40};
        int target = 20;

        for (int i = 0; i < numbers.length; i++) {

            if (numbers[i] == target) {
                System.out.println(
                    "Found at index " + i
                );
                return;
            }
        }

        System.out.println("Not found");
    }
}
```

---

# 5.15 Insert ใน Array

สมมติ

```text
[10, 20, 40, 50]
```

ต้องการเพิ่ม `30`

ต้องเลื่อนข้อมูล

```text
40 → 50
50 → 60
```

แล้วใส่

```text
[10, 20, 30, 40, 50]
```

ดังนั้นการ Insert ตรงกลางมี Complexity

```text
O(n)
```

---

# 5.16 Delete ใน Array

ตัวอย่าง

```text
[10, 20, 30, 40, 50]
```

ลบ `30`

ต้องเลื่อน

```text
40 → ตำแหน่งของ 30
50 → ตำแหน่งของ 40
```

ผลลัพธ์

```text
[10, 20, 40, 50]
```

Complexity

```text
O(n)
```

---

# 5.17 Array Complexity

| Operation     | Complexity |
| ------------- | ---------: |
| Access        |       O(1) |
| Update        |       O(1) |
| Search        |       O(n) |
| Insert Front  |       O(n) |
| Insert Middle |       O(n) |
| Insert End    |      O(1)* |
| Delete Front  |       O(n) |
| Delete Middle |       O(n) |
| Delete End    |      O(1)* |
| Traverse      |       O(n) |

> `*` ขึ้นอยู่กับชนิดและ Implementation ของ Array

---

# 5.18 Linked List

Linked List ประกอบด้วย Node หลายตัว

แต่ละ Node ประกอบด้วย

```text
Data
+
Next
```

ตัวอย่าง

```text
[10 | •] → [20 | •] → [30 | •] → NULL
```

---

# 5.19 Node ในภาษา C

ในภาษา C สามารถสร้าง Node ด้วย `struct`

```c
struct Node {

    int data;

    struct Node *next;
};
```

โครงสร้าง

```text
Node
┌─────────────┐
│ data        │
│ next ───────┼──→ Node
└─────────────┘
```

---

# 5.20 Node ในภาษา C++

C++ สามารถใช้ `struct` หรือ `class`

```cpp
struct Node {

    int data;

    Node* next;
};
```

หรือ

```cpp
class Node {

public:

    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};
```

---

# 5.21 Node ในภาษา Java

Java ไม่มี Pointer แบบ C/C++ แต่ใช้ Reference

```java
class Node {

    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
```

โครงสร้าง

```text
Node
┌─────────────┐
│ data        │
│ next ───────┼──→ Node
└─────────────┘
```

---

# 5.22 สร้าง Singly Linked List ด้วย C

```c
#include <stdio.h>
#include <stdlib.h>

struct Node {

    int data;
    struct Node *next;
};

int main() {

    struct Node *head = NULL;

    struct Node *node1 =
        malloc(sizeof(struct Node));

    struct Node *node2 =
        malloc(sizeof(struct Node));

    node1->data = 10;
    node1->next = node2;

    node2->data = 20;
    node2->next = NULL;

    head = node1;

    printf("%d\n", head->data);
    printf("%d\n", head->next->data);

    free(node1);
    free(node2);

    return 0;
}
```

โครงสร้าง

```text
Head
 ↓
[10] → [20] → NULL
```

---

# 5.23 สร้าง Singly Linked List ด้วย C++

```cpp
#include <iostream>
using namespace std;

struct Node {

    int data;
    Node* next;

    Node(int value) {
        data = value;
        next = nullptr;
    }
};

int main() {

    Node* head = new Node(10);

    head->next = new Node(20);

    cout << head->data << endl;
    cout << head->next->data << endl;

    delete head->next;
    delete head;

    return 0;
}
```

---

# 5.24 สร้าง Singly Linked List ด้วย Java

```java
class Node {

    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

public class Main {

    public static void main(String[] args) {

        Node head = new Node(10);

        head.next = new Node(20);

        System.out.println(head.data);
        System.out.println(head.next.data);
    }
}
```

Java มี Garbage Collector จึงไม่ต้องเรียก `delete` ด้วยตนเองเหมือน C++

---

# 5.25 การ Traversal Linked List

โครงสร้าง

```text
Head
 ↓
10 → 20 → 30 → 40 → NULL
```

หลักการ

```text
current = head

while current != NULL

    process current.data

    current = current.next
```

---

## C

```c
struct Node *current = head;

while (current != NULL) {

    printf("%d ", current->data);

    current = current->next;
}
```

---

## C++

```cpp
Node* current = head;

while (current != nullptr) {

    cout << current->data << " ";

    current = current->next;
}
```

---

## Java

```java
Node current = head;

while (current != null) {

    System.out.print(current.data + " ");

    current = current.next;
}
```

ผลลัพธ์

```text
10 20 30 40
```

Complexity

```text
O(n)
```

---

# 5.26 Insert Front

ก่อนเพิ่ม

```text
Head
 ↓
20 → 30 → 40 → NULL
```

ต้องการเพิ่ม `10`

ขั้นตอน

```text
newNode.next = head
head = newNode
```

ผลลัพธ์

```text
Head
 ↓
10 → 20 → 30 → 40 → NULL
```

Complexity

```text
O(1)
```

---

# 5.27 Insert Front ด้วย C

```c
void insertFront(struct Node **head, int value) {

    struct Node *newNode =
        malloc(sizeof(struct Node));

    newNode->data = value;

    newNode->next = *head;

    *head = newNode;
}
```

เรียกใช้

```c
insertFront(&head, 10);
```

---

# 5.28 Insert Front ด้วย C++

```cpp
void insertFront(Node*& head, int value) {

    Node* newNode = new Node(value);

    newNode->next = head;

    head = newNode;
}
```

เรียกใช้

```cpp
insertFront(head, 10);
```

---

# 5.29 Insert Front ด้วย Java

```java
static Node insertFront(Node head, int value) {

    Node newNode = new Node(value);

    newNode.next = head;

    return newNode;
}
```

เรียกใช้

```java
head = insertFront(head, 10);
```

---

# 5.30 Insert End

ก่อนเพิ่ม

```text
10 → 20 → 30 → NULL
```

เพิ่ม `40`

```text
10 → 20 → 30 → 40 → NULL
```

หากไม่มี Tail Pointer ต้องเดินไปยัง Node สุดท้าย

```text
10 → 20 → 30
          ↑
         Tail
```

Complexity

```text
O(n)
```

ถ้ามี Tail Pointer

```text
Head              Tail
 ↓                  ↓
10 → 20 → 30 → NULL
```

สามารถเพิ่มท้ายได้

```text
O(1)
```

---

# 5.31 Search Linked List

ตัวอย่าง

```text
10 → 20 → 30 → 40 → NULL
```

ค้นหา `30`

```text
10 → 20 → 30
          ↑
        Found
```

ต้องเดินทีละ Node

```text
O(n)
```

---

## C

```c
int search(struct Node *head, int target) {

    struct Node *current = head;

    while (current != NULL) {

        if (current->data == target)
            return 1;

        current = current->next;
    }

    return 0;
}
```

---

## C++

```cpp
bool search(Node* head, int target) {

    Node* current = head;

    while (current != nullptr) {

        if (current->data == target)
            return true;

        current = current->next;
    }

    return false;
}
```

---

## Java

```java
static boolean search(Node head, int target) {

    Node current = head;

    while (current != null) {

        if (current.data == target)
            return true;

        current = current.next;
    }

    return false;
}
```

---

# 5.32 Delete Node

ตัวอย่าง

```text
10 → 20 → 30 → 40
```

ลบ `30`

เปลี่ยน Pointer

```text
20.next = 40
```

ผลลัพธ์

```text
10 → 20 → 40
```

หากรู้ Node ก่อนหน้าแล้ว Operation สามารถทำได้ใน

```text
O(1)
```

แต่การค้นหา Node ก่อนหน้าอาจต้องใช้

```text
O(n)
```

---

# 5.33 Doubly Linked List

Doubly Linked List มี Pointer 2 ตัว

```text
Previous
Data
Next
```

โครงสร้าง

```text
NULL ← [10] ⇄ [20] ⇄ [30] ⇄ [40] → NULL
```

ข้อดี

```text
Forward Traversal
Backward Traversal
```

ข้อเสีย

```text
ใช้ Memory มากกว่า
Implementation ซับซ้อนกว่า
```

---

# 5.34 Doubly Linked List ใน C++

ตัวอย่าง Node

```cpp
struct Node {

    int data;

    Node* prev;
    Node* next;

    Node(int value) {

        data = value;
        prev = nullptr;
        next = nullptr;
    }
};
```

การเชื่อม Node

```cpp
Node* first = new Node(10);
Node* second = new Node(20);

first->next = second;
second->prev = first;
```

โครงสร้าง

```text
NULL ← 10 ⇄ 20 → NULL
```

---

# 5.35 Doubly Linked List ใน Java

```java
class Node {

    int data;

    Node prev;
    Node next;

    Node(int data) {

        this.data = data;
        this.prev = null;
        this.next = null;
    }
}
```

เชื่อม Node

```java
Node first = new Node(10);
Node second = new Node(20);

first.next = second;
second.prev = first;
```

---

# 5.36 เปรียบเทียบ Array และ Linked List

| คุณสมบัติ       | Array     | Linked List            |
| --------------- | --------- | ---------------------- |
| Memory          | ต่อเนื่อง | ไม่จำเป็นต้องต่อเนื่อง |
| Random Access   | O(1)      | O(n)                   |
| Search          | O(n)      | O(n)                   |
| Insert Front    | O(n)      | O(1)                   |
| Delete Front    | O(n)      | O(1)                   |
| Insert Middle   | O(n)      | O(1)*                  |
| Delete Middle   | O(n)      | O(1)*                  |
| Cache Locality  | ดี        | โดยทั่วไปด้อยกว่า      |
| Memory Overhead | ต่ำ       | สูงกว่า                |
| Implementation  | ง่าย      | ซับซ้อนกว่า            |

`*` เมื่อมี Reference ไปยังตำแหน่งที่เกี่ยวข้องอยู่แล้ว

---

# 5.37 Array vs Linked List: ตัวอย่างสถานการณ์

## สถานการณ์ที่ 1: Student Scores

```text
Student 1
Student 2
Student 3
...
Student 10000
```

ถ้าต้องการ

```text
scores[5000]
```

Array เหมาะสมกว่า เพราะ

```text
Access = O(1)
```

---

## สถานการณ์ที่ 2: Playlist

```text
Song A → Song B → Song C → Song D
```

ถ้ามีการเพิ่มและลบรายการบ่อย Linked List อาจเหมาะสมกว่า

---

# 5.38 Array, Linked List และ ADT

สามารถมองความสัมพันธ์ได้ดังนี้

```text
                 List ADT
                    │
          ┌─────────┴─────────┐
          ↓                   ↓
       Array            Linked List
          │                   │
          ├── add()           ├── add()
          ├── remove()        ├── remove()
          ├── search()        ├── search()
          └── get()           └── get()
```

Interface เหมือนกันได้ แต่ Implementation แตกต่างกัน

---

# 5.39 ตัวอย่าง List ADT ใน Java

Java สามารถกำหนด Interface ได้

```java
interface ListADT {

    void add(int value);

    void remove(int value);

    boolean search(int value);

    int size();
}
```

จากนั้นสามารถสร้าง Implementation

```java
class ArrayListADT implements ListADT {
    // Array implementation
}
```

หรือ

```java
class LinkedListADT implements ListADT {
    // Linked List implementation
}
```

แนวคิดนี้แสดงให้เห็นความสัมพันธ์ระหว่าง

```text
Interface
+
Implementation
```

---

# 5.40 ตัวอย่าง ADT ใน C++

C++ สามารถใช้ Abstract Class

```cpp
class ListADT {

public:

    virtual void add(int value) = 0;

    virtual void remove(int value) = 0;

    virtual bool search(int value) = 0;

    virtual ~ListADT() {}
};
```

จากนั้นสร้าง Implementation

```cpp
class LinkedList : public ListADT {

    // implementation
};
```

---

# 5.41 ตัวอย่าง ADT ใน C

ภาษา C ไม่มี `class` และ `interface` แบบ Java/C++ แต่สามารถออกแบบ ADT ด้วย

* `struct`
* Function
* Header File
* Encapsulation

ตัวอย่าง Header

```c
typedef struct List List;

List* createList();

void add(List* list, int value);

void remove(List* list, int value);

int search(List* list, int value);

void destroyList(List* list);
```

รายละเอียดภายใน `struct List` สามารถซ่อนไว้ใน `.c` file

```text
list.h
   ↓
Public Interface
   ↓
list.c
   ↓
Implementation
```

นี่เป็นแนวคิดของ ADT ในภาษา C

---

# 5.42 การวิเคราะห์ Complexity

การวิเคราะห์ Data Structure ต้องพิจารณา

```text
Access
Search
Insert
Delete
Update
Memory
```

ตัวอย่าง Array

```text
Access  → O(1)
Search  → O(n)
Insert  → O(n)
Delete  → O(n)
```

Linked List

```text
Access  → O(n)
Search  → O(n)
Insert  → O(1)*
Delete  → O(1)*
```

---

# 5.43 Big-O ไม่ใช่ทุกอย่าง

สมมติว่า Algorithm สองแบบมี Complexity เท่ากัน

```text
Algorithm A → O(n)
Algorithm B → O(n)
```

ไม่ได้หมายความว่าจะใช้เวลาจริงเท่ากัน

ยังต้องพิจารณา

```text
CPU Cache
Memory Access
Pointer Chasing
Allocation
Data Layout
Compiler Optimization
```

ดังนั้นการออกแบบระบบจริงต้องพิจารณาทั้ง

```text
Theoretical Complexity
+
Practical Performance
```

---

# 5.44 ตัวอย่างโปรแกรม: Student Array

## C

```c
#include <stdio.h>

struct Student {

    int id;
    char name[50];
    float gpa;
};

int main() {

    struct Student students[3] = {

        {101, "Somchai", 3.20},
        {102, "Somsak", 3.50},
        {103, "Suda", 3.80}
    };

    for (int i = 0; i < 3; i++) {

        printf(
            "%d %s %.2f\n",
            students[i].id,
            students[i].name,
            students[i].gpa
        );
    }

    return 0;
}
```

---

# 5.45 Student Array ด้วย C++

```cpp
#include <iostream>
#include <string>
using namespace std;

struct Student {

    int id;
    string name;
    double gpa;
};

int main() {

    Student students[] = {

        {101, "Somchai", 3.20},
        {102, "Somsak", 3.50},
        {103, "Suda", 3.80}
    };

    for (const auto& student : students) {

        cout << student.id << " "
             << student.name << " "
             << student.gpa << endl;
    }

    return 0;
}
```

---

# 5.46 Student Array ด้วย Java

```java
class Student {

    int id;
    String name;
    double gpa;

    Student(int id, String name, double gpa) {

        this.id = id;
        this.name = name;
        this.gpa = gpa;
    }
}

public class Main {

    public static void main(String[] args) {

        Student[] students = {

            new Student(101, "Somchai", 3.20),
            new Student(102, "Somsak", 3.50),
            new Student(103, "Suda", 3.80)
        };

        for (Student student : students) {

            System.out.println(
                student.id + " " +
                student.name + " " +
                student.gpa
            );
        }
    }
}
```

---

# 5.47 ปฏิบัติการที่ 5.1: Array Operations

ให้นักศึกษาสร้างโปรแกรม Array Management System

```text
===== ARRAY MENU =====

1. Add
2. Insert
3. Delete
4. Search
5. Update
6. Display
0. Exit
```

### ภาษา C

ให้นักศึกษาใช้

```c
int numbers[100];
```

และเขียน Function

```c
void add();
void insert();
void delete();
void search();
void update();
void display();
```

---

### ภาษา C++

ใช้

```cpp
int numbers[100];
```

หรือ

```cpp
vector<int>
```

และสร้าง Function

```cpp
void add();
void insert();
void remove();
void search();
void update();
void display();
```

---

### ภาษา Java

ใช้

```java
int[] numbers = new int[100];
```

หรือ

```java
ArrayList<Integer>
```

และสร้าง Method

```java
add()
insert()
remove()
search()
update()
display()
```

---

# 5.48 ปฏิบัติการที่ 5.2: Singly Linked List

สร้างโปรแกรม Linked List ที่รองรับ

```text
insertFront()
insertEnd()
delete()
search()
display()
```

ตัวอย่าง

```text
Head
 ↓
10 → 20 → 30 → 40 → NULL
```

---

# 5.49 ปฏิบัติการที่ 5.3: Doubly Linked List

สร้าง

```text
NULL ← 10 ⇄ 20 ⇄ 30 ⇄ 40 → NULL
```

และรองรับ

```text
insertFront()
insertEnd()
delete()
search()
traverseForward()
traverseBackward()
```

ให้ Implement อย่างน้อย 2 ภาษา

```text
C++
Java
```

---

# 5.50 ปฏิบัติการที่ 5.4: เปรียบเทียบ C, C++ และ Java

ให้นักศึกษาสร้าง Linked List ที่มี Function เทียบเท่ากันทั้ง 3 ภาษา

| Operation     | C             | C++             | Java              |
| ------------- | ------------- | --------------- | ----------------- |
| Create Node   | `struct`      | `struct/class`  | `class`           |
| Memory        | `malloc/free` | `new/delete`    | Garbage Collector |
| Reference     | Pointer       | Pointer         | Reference         |
| Method        | Function      | Member Function | Method            |
| Encapsulation | Manual        | Class           | Class             |

---

# 5.51 ปฏิบัติการที่ 5.5: Student Management System

สร้างระบบจัดการนักศึกษา

ข้อมูล

```text
Student ID
Name
Major
GPA
```

ระบบต้องรองรับ

```text
1. Add Student
2. Delete Student
3. Search Student
4. Update Student
5. Display Students
6. Sort Students
7. Exit
```

Implement ด้วย

```text
Version 1 → C + Array

Version 2 → C++ + Linked List

Version 3 → Java + ArrayList / LinkedList
```

จากนั้นเปรียบเทียบประสิทธิภาพและความซับซ้อนของแต่ละ Implementation

---

# 5.52 Mini Project: Contact Management System

สร้างระบบจัดการ Contact

```text
ID
Name
Phone
Email
```

ความสามารถ

```text
Add
Delete
Update
Search
Display
Sort
Count
```

ให้นักศึกษาเลือก Data Structure

```text
Array
```

หรือ

```text
Linked List
```

พร้อมเขียนเหตุผลประกอบ

---

# 5.53 แบบฝึกหัดท้ายบท

### ข้อ 1

Data Structure คืออะไร?

### ข้อ 2

จงอธิบาย Linear Data Structure และ Non-linear Data Structure

### ข้อ 3

ADT คืออะไร?

### ข้อ 4

จงอธิบายความแตกต่างระหว่าง ADT และ Data Structure

### ข้อ 5

Array มีข้อดีและข้อจำกัดอะไร?

### ข้อ 6

Linked List คืออะไร?

### ข้อ 7

Node ประกอบด้วยอะไร?

### ข้อ 8

Singly Linked List และ Doubly Linked List แตกต่างกันอย่างไร?

### ข้อ 9

เพราะเหตุใด Array Access จึงเป็น `O(1)`?

### ข้อ 10

เพราะเหตุใด Linked List Access จึงเป็น `O(n)`?

### ข้อ 11

กรณีใดควรเลือก Array?

### ข้อ 12

กรณีใดควรเลือก Linked List?

### ข้อ 13

จงอธิบาย Cache Locality

### ข้อ 14

จงเขียน Singly Linked List ด้วย C

### ข้อ 15

จงเขียน Singly Linked List ด้วย C++

### ข้อ 16

จงเขียน Singly Linked List ด้วย Java

### ข้อ 17

จงเปรียบเทียบ Memory Management ของ C, C++ และ Java

### ข้อ 18

จงวิเคราะห์ Complexity ของ Array และ Linked List

---

# 5.54 คำถามวิเคราะห์ระดับสูง

## คำถามที่ 1

ระบบมีข้อมูล 10 ล้านรายการและต้องเข้าถึงข้อมูลด้วย Index บ่อยมาก ควรเลือก Array หรือ Linked List เพราะเหตุใด?

---

## คำถามที่ 2

ระบบมี Insert และ Delete ที่ต้น List จำนวนมาก ควรเลือก Data Structure ใด?

---

## คำถามที่ 3

เหตุใด Array และ Linked List ที่มี Big-O เท่ากันบาง Operation จึงมี Performance จริงแตกต่างกัน?

---

## คำถามที่ 4

ถ้าสร้าง Playlist ที่มีการเพิ่มและลบเพลงบ่อย ควรเลือก Data Structure ใด?

---

## คำถามที่ 5

ถ้าต้องสร้างระบบ

```text
StudentID → Student
```

ควรพิจารณา Data Structure ใดเพิ่มเติมจาก Array และ Linked List?

---

# 5.55 สรุป Array, Linked List และ ADT

```text
                 Data Structure
                       │
          ┌────────────┴────────────┐
          ↓                         ↓
        Array                 Linked List
          │                         │
     Random Access             Node + Pointer
          │                         │
        O(1)                     O(n)
```

### Array

เหมาะสำหรับ

```text
Fast Access
Index-based Access
Sequential Data
Cache-friendly Processing
```

จุดเด่น

```text
Access = O(1)
```

---

### Linked List

เหมาะสำหรับ

```text
Frequent Insert
Frequent Delete
Dynamic Structure
```

จุดเด่น

```text
Insert/Delete = O(1)*
```

เมื่อมี Reference ไปยังตำแหน่งที่ต้องการอยู่แล้ว

---

### ADT

เป็นแนวคิดที่แยก

```text
WHAT
```

ออกจาก

```text
HOW
```

หรือ

```text
ADT
 ↓
What operations are available?
```

กับ

```text
Implementation
 ↓
How are operations implemented?
```

---

# 5.56 ภาพรวมการเชื่อมโยงกับภาษาโปรแกรม

```text
                    DATA STRUCTURE
                          │
          ┌───────────────┴───────────────┐
          ↓                               ↓
        Array                         Linked List
          │                               │
     ┌────┼────┐                     ┌────┼────┐
     ↓    ↓    ↓                     ↓    ↓    ↓
     C   C++  Java                   C   C++  Java
     │    │    │                     │    │    │
     └────┴────┘                     └────┴────┘
          │                               │
          └──────────────┬────────────────┘
                         ↓
                       ADT
                         ↓
                    Algorithm
                         ↓
                    Complexity
                         ↓
                    Performance
```

---

# 5.57 เส้นทางการเรียนรู้

```text
Algorithm
    ↓
Big-O
    ↓
Array
    ↓
Linked List
    ↓
Stack
    ↓
Queue
    ↓
Tree
    ↓
Heap
    ↓
Hash Table
    ↓
Graph
    ↓
Advanced Algorithms
```

และสามารถนำไปต่อยอดกับ

```text
Database
Software Engineering
AI
Machine Learning
RAG
GraphRAG
AI Agent
Search Engine
Distributed Systems
```

---

# 5.58 คำศัพท์สำคัญประจำบท

```text
Data Structure
Linear Data Structure
Non-linear Data Structure
Abstract Data Type
ADT
Array
Static Array
Dynamic Array
Index
Random Access
Memory
Pointer
Reference
Node
Head
Tail
Linked List
Singly Linked List
Doubly Linked List
Traversal
Insert
Delete
Search
Update
Cache Locality
Time Complexity
Space Complexity
```

---

# 5.59 สรุปแนวคิดสำคัญ

> **Data Structure คือพื้นฐานสำคัญของ Algorithm และ Programming**

การออกแบบโปรแกรมที่ดีต้องพิจารณาร่วมกันระหว่าง

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
Implementation
   ↓
Performance
```

ดังนั้นนักพัฒนาที่เข้าใจ Data Structure จะไม่ได้คิดเพียงว่า

> "เขียนโค้ดอย่างไรให้ทำงานได้"

แต่จะคิดต่อว่า

> **"จะจัดเก็บข้อมูลอย่างไร และเลือก Algorithm อย่างไร เพื่อให้โปรแกรมทำงานได้เร็ว ใช้ Memory เหมาะสม และสามารถขยายระบบได้ในอนาคต"**

นี่คือหัวใจสำคัญของวิชา **Algorithm and Data Structure**.
