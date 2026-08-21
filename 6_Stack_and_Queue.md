# บทที่ 6: แสตกและคิว Stack และ Queue
## โครงสร้างข้อมูลแบบกองซ้อน และคิว
> **Stack & Queue — โครงสร้างข้อมูลแบบ Linear Data Structure**
> ตัวอย่างการเขียนโปรแกรมด้วย **C, C++ และ Java**

---
# 6.1 วัตถุประสงค์การเรียนรู้

เมื่อศึกษาบทนี้แล้ว นักศึกษาสามารถ:

1. อธิบายความหมายของ Stack ได้
2. อธิบายหลักการ LIFO ได้
3. อธิบาย Operation ของ Stack ได้
4. Implement Stack ด้วย Array ได้
5. Implement Stack ด้วย Linked List ได้
6. อธิบายความหมายของ Queue ได้
7. อธิบายหลักการ FIFO ได้
8. อธิบาย Operation ของ Queue ได้
9. Implement Queue ด้วย Array ได้
10. Implement Queue ด้วย Linked List ได้
11. อธิบาย Circular Queue ได้
12. เปรียบเทียบ Stack และ Queue ได้
13. วิเคราะห์ Time Complexity ของ Stack และ Queue ได้
14. ประยุกต์ใช้ Stack และ Queue ในการแก้ปัญหาได้
15. Implement Stack และ Queue ด้วย C, C++ และ Java ได้

---

# 6.2 ผลลัพธ์การเรียนรู้

เมื่อสิ้นสุดบทนี้ นักศึกษาสามารถ:

| LO  | ผลลัพธ์การเรียนรู้                         |
| --- | ------------------------------------------ |
| LO1 | อธิบายแนวคิด Stack และ Queue               |
| LO2 | อธิบาย LIFO และ FIFO                       |
| LO3 | Implement Stack ด้วย Array และ Linked List |
| LO4 | Implement Queue ด้วย Array และ Linked List |
| LO5 | อธิบาย Circular Queue                      |
| LO6 | วิเคราะห์ Time และ Space Complexity        |
| LO7 | เลือกใช้ Stack หรือ Queue ได้เหมาะสม       |
| LO8 | Implement ด้วย C, C++ และ Java             |
| LO9 | ประยุกต์ใช้ Stack และ Queue กับปัญหาจริง   |

---

# 6.3 บทนำ

จากบทที่ 5 นักศึกษาได้เรียนรู้เกี่ยวกับ **Array, Linked List และ Abstract Data Type (ADT)** ซึ่งเป็นพื้นฐานสำคัญของโครงสร้างข้อมูล

ในบทนี้จะนำแนวคิดดังกล่าวมาต่อยอดเป็นโครงสร้างข้อมูลที่มีรูปแบบการเข้าถึงข้อมูลเฉพาะ ได้แก่

```text
Linear Data Structure
│
├── Stack
│
└── Queue
```

Stack และ Queue พบได้ในระบบคอมพิวเตอร์และซอฟต์แวร์จำนวนมาก เช่น
```text
* Undo / Redo
* Function Call
* Browser History
* Expression Evaluation
* Printer Queue
* CPU Scheduling
* Network Buffer
* Task Scheduling
* BFS
* DFS
* Operating System
* Web Application
* AI Agent Workflow
```
แนวคิดหลักของบทนี้คือ

```text
Stack
→ LIFO
→ Last In, First Out

Queue
→ FIFO
→ First In, First Out
```

---



# 6.4 แบบทดสอบก่อนเรียน (Pre-Test)

> **คำแนะนำ:** เลือกคำตอบที่ถูกต้องที่สุด จำนวน 10 ข้อ

### ข้อ 1

Stack มีหลักการทำงานแบบใด?

A. FIFO
B. LIFO
C. Random Access
D. Priority

---

### ข้อ 2

Queue มีหลักการทำงานแบบใด?

A. LIFO
B. FILO
C. FIFO
D. Random Access

---

### ข้อ 3

Operation ใดใช้เพิ่มข้อมูลเข้าสู่ Stack?

A. enqueue
B. dequeue
C. push
D. pop

---

### ข้อ 4

Operation ใดใช้ลบข้อมูลออกจาก Stack?

A. push
B. pop
C. enqueue
D. insert

---

### ข้อ 5

Operation ใดใช้เพิ่มข้อมูลเข้าสู่ Queue?

A. push
B. pop
C. enqueue
D. dequeue

---

### ข้อ 6

Operation ใดใช้ลบข้อมูลออกจาก Queue?

A. push
B. pop
C. enqueue
D. dequeue

---

### ข้อ 7

ถ้า Stack มีข้อมูล

```text
10
20
30
```

โดย `30` อยู่ด้านบนสุด หากทำ `pop()` จะได้ค่าใด?

A. 10
B. 20
C. 30
D. ไม่มีข้อมูล

---

### ข้อ 8

ถ้า Queue มีข้อมูล

```text
10 → 20 → 30
```

โดย `10` อยู่ด้านหน้า หากทำ `dequeue()` จะได้ค่าใด?

A. 10
B. 20
C. 30
D. ไม่มีข้อมูล

---

### ข้อ 9

Stack สามารถประยุกต์ใช้กับเรื่องใด?

A. Undo
B. Printer Queue
C. CPU Queue
D. Network FIFO Buffer

---

### ข้อ 10

Queue เหมาะกับสถานการณ์ใด?

A. Undo
B. Function Call
C. Printer Queue
D. Expression Parentheses

---

## เฉลยแบบทดสอบก่อนเรียน

```text
1. B
2. C
3. C
4. B
5. C
6. D
7. C
8. A
9. A
10. C
```

> แบบทดสอบก่อนเรียนใช้สำหรับประเมินความรู้เดิม ไม่ควรเน้นคะแนน แต่ใช้เพื่อเปรียบเทียบกับผลการเรียนรู้หลังจบบท

---

# 6.5 Stack คืออะไร?

**Stack** คือโครงสร้างข้อมูลแบบ Linear Data Structure ที่ใช้หลักการ

> **LIFO — Last In, First Out**

หมายถึง

> **เข้าทีหลัง ออกก่อน**

ตัวอย่างง่าย ๆ คือกองจาน

```text
       ┌───────┐
       │  30   │ ← Top
       ├───────┤
       │  20   │
       ├───────┤
       │  10   │
       └───────┘
```

ถ้านำจาน `40` มาวาง

```text
       ┌───────┐
       │  40   │ ← Top
       ├───────┤
       │  30   │
       ├───────┤
       │  20   │
       ├───────┤
       │  10   │
       └───────┘
```

ถ้าหยิบออก จะหยิบ `40` ก่อน

```text
40 → 30 → 20 → 10
```

---

# 6.6 Stack ADT

Stack สามารถกำหนดเป็น ADT ได้ดังนี้

```text
Stack
│
├── push()
├── pop()
├── peek()
├── isEmpty()
└── size()
```

### push()

เพิ่มข้อมูลเข้าสู่ Stack

```text
Stack
 ↓

push(10)

 ↓

[10]
```

---

### pop()

นำข้อมูลด้านบนออก

```text
[30]
[20]
[10]
 ↑
pop()

ผลลัพธ์ = 30
```

---

### peek()

ดูข้อมูลด้านบนโดยไม่ลบ

```text
[30] ← peek()
[20]
[10]
```

ผลลัพธ์

```text
30
```

---

### isEmpty()

ตรวจสอบว่า Stack ว่างหรือไม่

```text
Stack = []

isEmpty()
→ true
```

---

# 6.7 Stack ด้วย Array

สามารถใช้ Array เป็นพื้นฐานของ Stack ได้

```text
Index
 0    1    2    3    4
 ↓    ↓    ↓    ↓    ↓
[10] [20] [30] [ ]  [ ]
            ↑
           Top
```

ตัวแปรสำคัญคือ

```text
top
```

โดยเริ่มต้น

```text
top = -1
```

เมื่อ Push

```text
top++
array[top] = value
```

เมื่อ Pop

```text
value = array[top]
top--
```

---

# 6.8 Stack ด้วย C

```c
#include <stdio.h>

#define MAX 5

int stack[MAX];
int top = -1;

void push(int value) {

    if (top == MAX - 1) {
        printf("Stack Overflow\n");
        return;
    }

    stack[++top] = value;
}

int pop() {

    if (top == -1) {
        printf("Stack Underflow\n");
        return -1;
    }

    return stack[top--];
}

int peek() {

    if (top == -1) {
        return -1;
    }

    return stack[top];
}

int main() {

    push(10);
    push(20);
    push(30);

    printf("Top = %d\n", peek());

    printf("Pop = %d\n", pop());
    printf("Pop = %d\n", pop());

    return 0;
}
```

ผลลัพธ์

```text
Top = 30
Pop = 30
Pop = 20
```

---

# 6.9 Stack ด้วย C++

```cpp
#include <iostream>
using namespace std;

#define MAX 5

class Stack {

private:

    int data[MAX];
    int top;

public:

    Stack() {
        top = -1;
    }

    void push(int value) {

        if (top == MAX - 1) {
            cout << "Stack Overflow\n";
            return;
        }

        data[++top] = value;
    }

    int pop() {

        if (top == -1) {
            cout << "Stack Underflow\n";
            return -1;
        }

        return data[top--];
    }

    int peek() {

        if (top == -1)
            return -1;

        return data[top];
    }
};

int main() {

    Stack stack;

    stack.push(10);
    stack.push(20);
    stack.push(30);

    cout << "Top = "
         << stack.peek()
         << endl;

    cout << "Pop = "
         << stack.pop()
         << endl;

    return 0;
}
```

---

# 6.10 Stack ด้วย Java

```java
class Stack {

    private int[] data;
    private int top;

    Stack(int size) {

        data = new int[size];
        top = -1;
    }

    void push(int value) {

        if (top == data.length - 1) {
            System.out.println("Stack Overflow");
            return;
        }

        data[++top] = value;
    }

    int pop() {

        if (top == -1) {
            System.out.println("Stack Underflow");
            return -1;
        }

        return data[top--];
    }

    int peek() {

        if (top == -1)
            return -1;

        return data[top];
    }
}
```

การใช้งาน

```java
public class Main {

    public static void main(String[] args) {

        Stack stack = new Stack(5);

        stack.push(10);
        stack.push(20);
        stack.push(30);

        System.out.println(
            "Top = " + stack.peek()
        );

        System.out.println(
            "Pop = " + stack.pop()
        );
    }
}
```

---

# 6.11 Stack Overflow

ถ้า Stack เต็มแล้วพยายาม Push ข้อมูลเพิ่ม จะเกิด

```text
Stack Overflow
```

ตัวอย่าง

```text
MAX = 3

[30]
[20]
[10]

push(40)
```

ไม่สามารถเพิ่มได้

```text
Stack Overflow
```

---

# 6.12 Stack Underflow

ถ้า Stack ว่างแล้วพยายาม Pop จะเกิด

```text
Stack Underflow
```

ตัวอย่าง

```text
Stack = []

pop()
```

ผลลัพธ์

```text
Stack Underflow
```

---

# 6.13 Stack Complexity

| Operation | Complexity |
| --------- | ---------: |
| Push      |       O(1) |
| Pop       |       O(1) |
| Peek      |       O(1) |
| isEmpty   |       O(1) |
| Search    |       O(n) |

---

# 6.14 Stack ด้วย Linked List

Stack สามารถ Implement ด้วย Linked List ได้

```text
Top
 ↓
[30] → [20] → [10] → NULL
```

Push

```text
40
 ↓

Top
 ↓
[40] → [30] → [20] → [10] → NULL
```

Pop

```text
Top
 ↓
[30] → [20] → [10] → NULL
```

---

# 6.15 Queue คืออะไร?

**Queue** คือโครงสร้างข้อมูลที่ทำงานแบบ

> **FIFO — First In, First Out**

หมายถึง

> **เข้าก่อน ออกก่อน**

ตัวอย่างง่าย ๆ คือคิวซื้ออาหาร

```text
Front
  ↓
[10] [20] [30] [40]
                    ↑
                   Rear
```

เมื่อเพิ่ม `50`

```text
[10] [20] [30] [40] [50]
 ↑                       ↑
Front                   Rear
```

เมื่อ Dequeue

```text
10 ออกก่อน
```

เหลือ

```text
[20] [30] [40] [50]
 ↑                 ↑
Front             Rear
```

---

# 6.16 Queue ADT

Queue ประกอบด้วย Operation หลัก

```text
Queue
│
├── enqueue()
├── dequeue()
├── front()
├── rear()
├── isEmpty()
└── size()
```

### enqueue()

เพิ่มข้อมูลด้านท้าย

```text
10 → 20 → 30

enqueue(40)

10 → 20 → 30 → 40
```

### dequeue()

นำข้อมูลด้านหน้าออก

```text
10 → 20 → 30 → 40

dequeue()

20 → 30 → 40
```

### front()

ดูข้อมูลด้านหน้า

```text
10 → 20 → 30

front()
→ 10
```

---

# 6.17 Queue ด้วย Array

แนวคิดพื้นฐาน

```text
Front
 ↓
[10] [20] [30] [40]
                    ↑
                   Rear
```

ตัวแปร

```text
front
rear
```

---

# 6.18 Queue ด้วย C

```c
#include <stdio.h>

#define MAX 5

int queue[MAX];
int front = 0;
int rear = -1;

void enqueue(int value) {

    if (rear == MAX - 1) {
        printf("Queue Overflow\n");
        return;
    }

    queue[++rear] = value;
}

int dequeue() {

    if (front > rear) {
        printf("Queue Underflow\n");
        return -1;
    }

    return queue[front++];
}

int main() {

    enqueue(10);
    enqueue(20);
    enqueue(30);

    printf("Dequeue = %d\n", dequeue());
    printf("Dequeue = %d\n", dequeue());

    return 0;
}
```

ผลลัพธ์

```text
Dequeue = 10
Dequeue = 20
```

---

# 6.19 Queue ด้วย C++

```cpp
#include <iostream>
using namespace std;

#define MAX 5

class Queue {

private:

    int data[MAX];
    int front;
    int rear;

public:

    Queue() {

        front = 0;
        rear = -1;
    }

    void enqueue(int value) {

        if (rear == MAX - 1) {
            cout << "Queue Overflow\n";
            return;
        }

        data[++rear] = value;
    }

    int dequeue() {

        if (front > rear) {
            cout << "Queue Underflow\n";
            return -1;
        }

        return data[front++];
    }
};

int main() {

    Queue queue;

    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);

    cout << queue.dequeue() << endl;
    cout << queue.dequeue() << endl;

    return 0;
}
```

---

# 6.20 Queue ด้วย Java

```java
class Queue {

    private int[] data;
    private int front;
    private int rear;

    Queue(int size) {

        data = new int[size];
        front = 0;
        rear = -1;
    }

    void enqueue(int value) {

        if (rear == data.length - 1) {

            System.out.println(
                "Queue Overflow"
            );

            return;
        }

        data[++rear] = value;
    }

    int dequeue() {

        if (front > rear) {

            System.out.println(
                "Queue Underflow"
            );

            return -1;
        }

        return data[front++];
    }
}
```

การใช้งาน

```java
public class Main {

    public static void main(String[] args) {

        Queue queue = new Queue(5);

        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        System.out.println(queue.dequeue());
        System.out.println(queue.dequeue());
    }
}
```

---

# 6.21 ปัญหาของ Queue แบบ Array

สมมติ Queue มีขนาด 5

```text
[10] [20] [30] [40] [50]
 ↑
Front
```

Dequeue 3 ครั้ง

```text
[ ] [ ] [ ] [40] [50]
             ↑
            Rear
```

แม้ด้านหน้าจะมีพื้นที่ว่าง แต่ `rear` อยู่ท้าย Array แล้ว

หากใช้ Queue แบบธรรมดาอาจไม่สามารถเพิ่มข้อมูลได้

จึงเกิดแนวคิด

> **Circular Queue**

---

# 6.22 Circular Queue

Circular Queue มอง Array เป็นวงกลม

```text
       [0]
    ↙       ↘
 [4]         [1]
    ↖       ↗
       [2]
        |
       [3]
```

เมื่อ `rear` ถึงตำแหน่งสุดท้าย จะวนกลับไปตำแหน่งแรก

```text
rear = (rear + 1) % MAX
```

นี่เป็นแนวคิดสำคัญของ Circular Queue

---

# 6.23 Circular Queue ด้วย C

```c
#include <stdio.h>

#define MAX 5

int queue[MAX];

int front = -1;
int rear = -1;

void enqueue(int value) {

    if ((rear + 1) % MAX == front) {

        printf("Queue Full\n");
        return;
    }

    if (front == -1)
        front = 0;

    rear = (rear + 1) % MAX;

    queue[rear] = value;
}

int dequeue() {

    if (front == -1) {

        printf("Queue Empty\n");
        return -1;
    }

    int value = queue[front];

    if (front == rear) {

        front = -1;
        rear = -1;

    } else {

        front = (front + 1) % MAX;
    }

    return value;
}
```

---

# 6.24 Circular Queue ด้วย C++

```cpp
class CircularQueue {

private:

    int data[5];

    int front = -1;
    int rear = -1;

public:

    void enqueue(int value) {

        if ((rear + 1) % 5 == front)
            return;

        if (front == -1)
            front = 0;

        rear = (rear + 1) % 5;

        data[rear] = value;
    }

    int dequeue() {

        if (front == -1)
            return -1;

        int value = data[front];

        if (front == rear) {

            front = -1;
            rear = -1;

        } else {

            front = (front + 1) % 5;
        }

        return value;
    }
};
```

---

# 6.25 Circular Queue ด้วย Java

```java
class CircularQueue {

    private int[] data;

    private int front = -1;
    private int rear = -1;

    CircularQueue(int size) {

        data = new int[size];
    }

    void enqueue(int value) {

        if ((rear + 1) % data.length == front)
            return;

        if (front == -1)
            front = 0;

        rear = (rear + 1) % data.length;

        data[rear] = value;
    }

    int dequeue() {

        if (front == -1)
            return -1;

        int value = data[front];

        if (front == rear) {

            front = -1;
            rear = -1;

        } else {

            front =
                (front + 1) % data.length;
        }

        return value;
    }
}
```

---

# 6.26 Stack vs Queue

| คุณสมบัติ   | Stack        | Queue         |
| ----------- | ------------ | ------------- |
| หลักการ     | LIFO         | FIFO          |
| เพิ่มข้อมูล | Push         | Enqueue       |
| ลบข้อมูล    | Pop          | Dequeue       |
| ดูข้อมูล    | Peek         | Front         |
| ด้านเพิ่ม   | Top          | Rear          |
| ด้านลบ      | Top          | Front         |
| ตัวอย่าง    | Undo         | Printer Queue |
| Traversal   | Top → Bottom | Front → Rear  |

---

# 6.27 Stack และ Queue ในชีวิตจริง

## Stack

ตัวอย่าง

```text
Undo
Browser Back
Function Call
Expression Evaluation
DFS
Backtracking
```

## Queue

ตัวอย่าง

```text
Printer
Customer Service
CPU Scheduling
Network Packet
Task Queue
BFS
Message Queue
```

---

# 6.28 Stack กับ Function Call

เมื่อโปรแกรมเรียก Function

```text
main()
 ↓
functionA()
 ↓
functionB()
 ↓
functionC()
```

ระบบจะใช้ **Call Stack**

```text
┌──────────────┐
│ functionC()  │ ← Top
├──────────────┤
│ functionB()  │
├──────────────┤
│ functionA()  │
├──────────────┤
│ main()       │
└──────────────┘
```

เมื่อ `functionC()` ทำงานเสร็จ

```text
functionC()
```

จะถูกนำออกก่อน

นี่คือ LIFO

---

# 6.29 Stack กับ Undo

ตัวอย่าง Text Editor

```text
พิมพ์ A
 ↓
พิมพ์ B
 ↓
พิมพ์ C
```

Stack

```text
[C]
[B]
[A]
```

กด Undo

```text
C ← ออกก่อน
```

กด Undo อีกครั้ง

```text
B ← ออก
```

ดังนั้น Stack เหมาะกับ Undo System

---

# 6.30 Queue กับ Printer

สมมติมีงานพิมพ์

```text
Document A
Document B
Document C
```

Queue

```text
Front
 ↓
[A] [B] [C]
          ↑
         Rear
```

เครื่องพิมพ์ทำ

```text
A
↓
B
↓
C
```

ตรงกับ FIFO

---

# 6.31 Stack กับ DFS

Depth-First Search หรือ DFS สามารถใช้ Stack ได้

```text
Graph
  ↓
DFS
  ↓
Stack
```

ตัวอย่าง

```text
A
├── B
│   ├── D
│   └── E
└── C
```

Traversal อาจเป็น

```text
A → B → D → E → C
```

Stack ช่วยควบคุมลำดับการสำรวจ

---

# 6.32 Queue กับ BFS

Breadth-First Search หรือ BFS ใช้ Queue

```text
Graph
  ↓
BFS
  ↓
Queue
```

ตัวอย่าง

```text
       A
      / \
     B   C
    / \
   D   E
```

BFS

```text
A → B → C → D → E
```

Queue ช่วยให้ Node ที่เข้ามาก่อนถูกประมวลผลก่อน

---

# 6.33 Stack และ Expression

Stack สามารถใช้ประมวลผล Expression เช่น

```text
( A + B ) * C
```

รวมถึง

```text
Infix
Prefix
Postfix
```

ตัวอย่าง Postfix

```text
A B + C *
```

Stack สามารถใช้ประเมิน Expression ได้

---

# 6.34 ตัวอย่าง Postfix Evaluation

Expression

```text
2 3 + 4 *
```

ขั้นตอน

```text
อ่าน 2
Stack = [2]

อ่าน 3
Stack = [2, 3]

อ่าน +
2 + 3 = 5

Stack = [5]

อ่าน 4
Stack = [5, 4]

อ่าน *
5 × 4 = 20
```

ผลลัพธ์

```text
20
```

---

# 6.35 Complexity ของ Stack และ Queue

| Operation  | Stack | Queue |
| ---------- | ----: | ----: |
| Insert     |  O(1) |  O(1) |
| Delete     |  O(1) |  O(1) |
| Peek/Front |  O(1) |  O(1) |
| Search     |  O(n) |  O(n) |
| Access     |  O(n) |  O(n) |

> เมื่อออกแบบ Implementation อย่างเหมาะสม

---

# 6.36 การเลือกใช้ Stack หรือ Queue

ใช้ **Stack** เมื่อปัญหาต้องการ

```text
ล่าสุดก่อน
Last In → First Out
```

เช่น

```text
Undo
Backtracking
DFS
Function Call
```

ใช้ **Queue** เมื่อปัญหาต้องการ

```text
มาก่อนก่อน
First In → First Out
```

เช่น

```text
Printer
Task Queue
BFS
Scheduling
Message Processing
```

---

# 6.37 แบบฝึกหัดท้ายบท

## ตอนที่ 1: ความเข้าใจ

1. Stack คืออะไร?
2. Queue คืออะไร?
3. LIFO หมายถึงอะไร?
4. FIFO หมายถึงอะไร?
5. Push คืออะไร?
6. Pop คืออะไร?
7. Enqueue คืออะไร?
8. Dequeue คืออะไร?
9. Stack Overflow คืออะไร?
10. Stack Underflow คืออะไร?

---

## ตอนที่ 2: วิเคราะห์การทำงาน

กำหนด Stack

```text
Stack = []
```

ให้ดำเนินการ

```text
push(10)
push(20)
push(30)
pop()
push(40)
pop()
```

จงหาค่าที่ถูกนำออกจาก Stack ตามลำดับ

---

กำหนด Queue

```text
Queue = []
```

ดำเนินการ

```text
enqueue(10)
enqueue(20)
enqueue(30)
dequeue()
enqueue(40)
dequeue()
```

จงหาค่าที่ถูกนำออกตามลำดับ

---

# 6.38 แบบฝึกหัดการเขียนโปรแกรม

### แบบฝึกหัดที่ 1

เขียน Stack ด้วย Array ในภาษา C โดยรองรับ

```text
push()
pop()
peek()
isEmpty()
display()
```

### แบบฝึกหัดที่ 2

เขียน Stack ด้วย Linked List ในภาษา C++

### แบบฝึกหัดที่ 3

เขียน Stack ด้วย Java

### แบบฝึกหัดที่ 4

เขียน Queue ด้วย Array ในภาษา C

### แบบฝึกหัดที่ 5

เขียน Circular Queue ด้วย C++

### แบบฝึกหัดที่ 6

เขียน Queue ด้วย Java

---

# 6.39 ปฏิบัติการที่ 6.1: Stack Management System

สร้างโปรแกรม

```text
===== STACK MENU =====

1. Push
2. Pop
3. Peek
4. Is Empty
5. Display
0. Exit
```

ให้ Implement ด้วย

```text
C
C++
Java
```

---

# 6.40 ปฏิบัติการที่ 6.2: Queue Management System

สร้างโปรแกรม

```text
===== QUEUE MENU =====

1. Enqueue
2. Dequeue
3. Front
4. Rear
5. Is Empty
6. Display
0. Exit
```

ให้ Implement ด้วย Array

---

# 6.41 ปฏิบัติการที่ 6.3: Circular Queue

สร้าง Circular Queue ที่สามารถ

```text
enqueue()
dequeue()
front()
rear()
isEmpty()
isFull()
display()
```

จากนั้นทดสอบกรณี

```text
Queue Full
Queue Empty
Wrap Around
```

---

# 6.42 ปฏิบัติการที่ 6.4: Undo System

สร้างโปรแกรมจำลอง Undo

ตัวอย่าง

```text
Action 1: Type A
Action 2: Type B
Action 3: Type C
```

Stack

```text
[Type C]
[Type B]
[Type A]
```

เมื่อกด Undo

```text
Undo → Type C
Undo → Type B
```

---

# 6.43 ปฏิบัติการที่ 6.5: Printer Queue

สร้างระบบ Printer Queue

```text
===== PRINT QUEUE =====

1. Add Print Job
2. Print Next
3. View Queue
4. Queue Size
0. Exit
```

ข้อมูลแต่ละ Job

```text
Job ID
Document Name
Number of Pages
```

ใช้ Queue เป็นโครงสร้างข้อมูลหลัก

---

# 6.44 Mini Project

## Task Management System

สร้างระบบจัดการงาน

```text
Task ID
Task Name
Priority
Status
```

ระบบต้องรองรับ

```text
Add Task
Process Task
View Tasks
Cancel Task
Count Tasks
```

ให้นักศึกษาออกแบบว่า

```text
Queue
```

หรือ

```text
Stack
```

เหมาะกับแต่ละ Operation อย่างไร

---

# 6.45 แบบทดสอบหลังเรียน (Post-Test)

### ข้อ 1

Stack ใช้หลักการใด?

A. FIFO
B. LIFO
C. Priority
D. Random

---

### ข้อ 2

Queue ใช้หลักการใด?

A. LIFO
B. FIFO
C. FILO
D. Random

---

### ข้อ 3

คำสั่งใดเพิ่มข้อมูลใน Stack?

A. enqueue
B. dequeue
C. push
D. pop

---

### ข้อ 4

คำสั่งใดนำข้อมูลออกจาก Queue?

A. push
B. pop
C. enqueue
D. dequeue

---

### ข้อ 5

Stack

```text
[10]
[20]
[30]
```

ถ้า `pop()` จะได้ค่าใด?

A. 10
B. 20
C. 30
D. Error

---

### ข้อ 6

Queue

```text
10 → 20 → 30
```

ถ้า `dequeue()` จะได้ค่าใด?

A. 10
B. 20
C. 30
D. Error

---

### ข้อ 7

Operation `push()` มี Complexity โดยทั่วไปเท่าใด?

A. O(1)
B. O(log n)
C. O(n)
D. O(n²)

---

### ข้อ 8

Operation `enqueue()` ใน Queue ที่ออกแบบเหมาะสมมี Complexity เท่าใด?

A. O(1)
B. O(log n)
C. O(n)
D. O(n²)

---

### ข้อ 9

ระบบ Undo เหมาะกับ Data Structure ใด?

A. Queue
B. Stack
C. Tree
D. Graph

---

### ข้อ 10

ระบบ Printer Queue เหมาะกับ Data Structure ใด?

A. Stack
B. Queue
C. Tree
D. Heap

---

## เฉลยแบบทดสอบหลังเรียน

```text
1. B
2. B
3. C
4. D
5. C
6. A
7. A
8. A
9. B
10. B
```

---

# 6.46 การประเมินผลการเรียนรู้

สามารถเปรียบเทียบคะแนนก่อนและหลังเรียนได้

```text
Pre-Test
   ↓
เรียนเนื้อหา
   ↓
ฝึกปฏิบัติ
   ↓
ทำแบบฝึกหัด
   ↓
Post-Test
```

ตัวอย่าง

| การประเมิน   | คะแนน |
| ------------ | ----: |
| Pre-Test     |    10 |
| แบบฝึกหัด    |    10 |
| ปฏิบัติการ   |    20 |
| Mini Project |    20 |
| Post-Test    |    10 |
| รวม          |    70 |

---

# 6.47 การวัด Learning Gain

สามารถคำนวณการพัฒนาผลการเรียนรู้เบื้องต้นได้จาก

```text
Learning Gain = Post-Test Score - Pre-Test Score
```

ตัวอย่าง

```text
Pre-Test  = 5/10
Post-Test = 9/10

Learning Gain
= 9 - 5
= 4 คะแนน
```

หรือคิดเป็นเปอร์เซ็นต์การเพิ่มขึ้น

```text
Gain = ((Post - Pre) / Pre) × 100
```

ตัวอย่าง

```text
((9 - 5) / 5) × 100
= 80%
```

---

# 6.48 คำศัพท์สำคัญประจำบท

```text
Stack
Queue
LIFO
FIFO
Push
Pop
Peek
Enqueue
Dequeue
Front
Rear
Top
Overflow
Underflow
Circular Queue
Call Stack
Backtracking
DFS
BFS
Expression Evaluation
Task Queue
Printer Queue
```

---

# 6.49 สรุปบทที่ 6

หัวใจสำคัญของบทนี้คือ

```text
                 Linear Data Structure
                         │
              ┌──────────┴──────────┐
              ↓                     ↓
            Stack                 Queue
              │                     │
             LIFO                  FIFO
              │                     │
         Last In First Out     First In First Out
              │                     │
        ┌─────┼─────┐         ┌─────┼─────┐
        ↓     ↓     ↓         ↓     ↓     ↓
      Push   Pop   Peek    Enqueue Dequeue Front
```

### Stack

```text
LIFO
Push
Pop
Peek
```

เหมาะกับ

```text
Undo
Function Call
Backtracking
DFS
Expression Evaluation
```

### Queue

```text
FIFO
Enqueue
Dequeue
Front
Rear
```

เหมาะกับ

```text
Printer Queue
Task Scheduling
BFS
Message Queue
Network Buffer
```

---

# 6.50 เชื่อมโยงไปบทถัดไป

เส้นทางการเรียนรู้หลังจาก Stack และ Queue สามารถต่อยอดได้ดังนี้

```text
บทที่ 5
Array + Linked List
       ↓
บทที่ 6
Stack + Queue
       ↓
บทที่ 7
Tree
       ↓
บทที่ 8
Binary Search Tree
       ↓
บทที่ 9
Heap + Priority Queue
       ↓
บทที่ 10
Hash Table
       ↓
บทที่ 11
Graph
       ↓
บทที่ 12
Graph Algorithms
       ↓
บทที่ 13
Advanced Algorithms
```

> **แนวคิดสำคัญ:** Stack และ Queue ไม่ได้เป็นเพียงโครงสร้างข้อมูลพื้นฐาน แต่เป็น Building Block ของ Algorithm และระบบจริงจำนวนมาก ตั้งแต่ **Operating System, Compiler, Network, Web Application ไปจนถึง Graph Algorithm และ AI Agent Workflow**.
