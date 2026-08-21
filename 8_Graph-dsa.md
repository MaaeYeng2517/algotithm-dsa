# บทที่ 7 โครงสร้างข้อมูลแบบกราฟ (Graph)

กราฟ หรือ **Graph** เป็นโครงสร้างข้อมูลแบบไม่เชิงเส้นที่ใช้แทนความสัมพันธ์ระหว่างข้อมูล โดยประกอบด้วย **จุดยอด (Vertex หรือ Node)** และ **เส้นเชื่อม (Edge)** กราฟสามารถใช้แทนเครือข่ายถนน เครือข่ายสังคม ระบบขนส่ง ความสัมพันธ์ระหว่างหน้าเว็บ และการเชื่อมต่อของอุปกรณ์ในเครือข่ายคอมพิวเตอร์

## ภาพประกอบภายนอก

![ตัวอย่าง Graph Theory](https://commons.wikimedia.org/wiki/Special:FilePath/Graph_example_%28Graph_theory%29.png)

แหล่งที่มา: [Graph example (Graph theory)](https://commons.wikimedia.org/wiki/File:Graph_example_%28Graph_theory%29.png)

![ตัวอย่าง Undirected Graph](https://commons.wikimedia.org/wiki/Special:FilePath/Example_of_simple_undirected_graph_1.svg)

แหล่งที่มา: [Example of simple undirected graph 1](https://commons.wikimedia.org/wiki/File:Example_of_simple_undirected_graph_1.svg)

![ตัวอย่าง Adjacency Matrix](https://commons.wikimedia.org/wiki/Special:FilePath/Adjacency_matrix_for_graph.png)

แหล่งที่มา: [Adjacency matrix for graph](https://commons.wikimedia.org/wiki/File:Adjacency_matrix_for_graph.png)

![การทำงานของ BFS](https://commons.wikimedia.org/wiki/Special:FilePath/Breadth-first-tree.svg)

แหล่งที่มา: [Breadth-first-tree](https://commons.wikimedia.org/wiki/File:Breadth-first-tree.svg)

![การทำงานของ DFS](https://commons.wikimedia.org/wiki/Special:FilePath/Depth-first-tree.svg)

แหล่งที่มา: [Depth-first-tree](https://commons.wikimedia.org/wiki/File:Depth-first-tree.svg)

![ตัวอย่างเส้นทางสั้นที่สุดของ Dijkstra](https://commons.wikimedia.org/wiki/Special:FilePath/Shortest_path_example_graph.png)

แหล่งที่มา: [Shortest path example graph](https://commons.wikimedia.org/wiki/File:Shortest_path_example_graph.png)

ลิงก์ทั้งหมดเป็นภาพจาก Wikimedia Commons ซึ่งสามารถใช้ดูภาพประกอบเพิ่มเติมและตรวจสอบใบอนุญาตของแต่ละภาพก่อนนำไปใช้งานได้

## วัตถุประสงค์การเรียนรู้

เมื่อศึกษาเนื้อหานี้แล้ว ผู้เรียนควรสามารถ

1. อธิบายความหมายและองค์ประกอบของโครงสร้างข้อมูลแบบ Graph ได้
2. จำแนกกราฟแบบมีทิศทาง ไม่มีทิศทาง มีน้ำหนัก และไม่มีน้ำหนักได้
3. เลือกวิธีแทนกราฟด้วย Adjacency Matrix หรือ Adjacency List ได้เหมาะสม
4. วิเคราะห์และเขียนลำดับการท่องกราฟแบบ BFS และ DFS ได้
5. อธิบายแนวคิดของการหาเส้นทางสั้นที่สุดและการประยุกต์ใช้กราฟได้
6. สร้างและใช้งาน Graph เบื้องต้นด้วยภาษา C, C++, Java หรือ Python ได้

## ผลลัพธ์การเรียนรู้

หลังจบบทเรียน ผู้เรียนสามารถ

- ระบุ Vertex, Edge, Degree, Path และ Cycle จากกราฟได้
- แยกความแตกต่างระหว่าง Directed Graph และ Undirected Graph ได้
- สร้างกราฟด้วย Adjacency Matrix และ Adjacency List ได้
- ใช้ BFS และ DFS เพื่อเยี่ยมชม Vertex ในกราฟได้
- อธิบายข้อแตกต่างด้านเวลาและพื้นที่ของวิธีแทนกราฟแต่ละแบบได้
- เลือกอัลกอริทึมกราฟให้เหมาะกับปัญหา เช่น การหาเส้นทางสั้นที่สุด

## แบบทดสอบก่อนเรียน

ลองตอบคำถามต่อไปนี้ก่อนอ่านเนื้อหา โดยยังไม่ต้องดูเฉลย

1. องค์ประกอบหลักสองอย่างของ Graph คืออะไร
2. กราฟที่เส้นเชื่อมมีทิศทางจากจุดหนึ่งไปอีกจุดหนึ่งเรียกว่าอะไร
3. ถ้า Vertex `A` เชื่อมกับ `B` ใน Undirected Graph จะสามารถเดินทางจาก `B` ไป `A` ได้หรือไม่
4. BFS ใช้โครงสร้างข้อมูลใดช่วยจัดลำดับการทำงาน
5. DFS มักใช้โครงสร้างข้อมูลใดในการทำงานแบบไม่ใช้การเรียกตัวเอง

### เฉลยแบบทดสอบก่อนเรียน

1. Vertex และ Edge
2. Directed Graph
3. ได้ เพราะเส้นเชื่อมไม่มีทิศทาง
4. Queue
5. Stack

## องค์ประกอบสำคัญของ Graph

- **Vertex (จุดยอด)** คือจุดหรือข้อมูลแต่ละรายการในกราฟ
- **Edge (เส้นเชื่อม)** คือความสัมพันธ์ระหว่าง Vertex สองจุด
- **Adjacent Vertex** คือ Vertex ที่มี Edge เชื่อมต่อกันโดยตรง
- **Degree** คือจำนวน Edge ที่เชื่อมต่อกับ Vertex หนึ่งจุด
- **In-degree** คือจำนวน Edge ที่มีทิศทางเข้าสู่ Vertex
- **Out-degree** คือจำนวน Edge ที่มีทิศทางออกจาก Vertex
- **Path (เส้นทาง)** คือลำดับของ Vertex ที่เชื่อมต่อกัน
- **Cycle (วงจร)** คือ Path ที่เดินทางกลับมายัง Vertex เริ่มต้นได้
- **Connected Graph** คือกราฟที่สามารถเดินทางระหว่าง Vertex ทุกคู่ได้ในกรณีที่ไม่พิจารณาทิศทาง
- **Weight (น้ำหนัก)** คือค่าที่กำหนดให้กับ Edge เช่น ระยะทาง เวลา หรือค่าใช้จ่าย

## ประเภทของ Graph

### Undirected Graph

เป็นกราฟที่ Edge ไม่มีทิศทาง การเชื่อมระหว่าง `A` และ `B` สามารถเดินทางได้ทั้งจาก `A` ไป `B` และจาก `B` ไป `A`

```text
A -------- B
 \        /
  \      /
    C
```

### Directed Graph

เป็นกราฟที่ Edge มีทิศทาง การเชื่อมจาก `A` ไป `B` ไม่ได้หมายความว่าจะเดินทางจาก `B` ไป `A` ได้

```text
A -----> B -----> C
^                |
|________________|
```

### Weighted Graph

เป็นกราฟที่ Edge แต่ละเส้นมีน้ำหนักกำกับ เช่น ระยะทางระหว่างเมือง หรือค่าใช้จ่ายในการเดินทาง

```text
A -- 5 --> B -- 3 --> C
```

### Unweighted Graph

เป็นกราฟที่ Edge ไม่มีน้ำหนัก หรือถือว่า Edge ทุกเส้นมีค่าเท่ากัน เหมาะกับปัญหาที่สนใจเพียงว่ามีการเชื่อมต่อหรือไม่

### Complete Graph

เป็นกราฟที่ Vertex ทุกคู่มี Edge เชื่อมถึงกันโดยตรง

### Tree

Tree เป็นกราฟชนิดหนึ่งที่เชื่อมต่อกัน ไม่มี Cycle และมี Edge จำนวน `n - 1` เส้นเมื่อมี Vertex `n` จุด

## การแทน Graph

### Adjacency Matrix

Adjacency Matrix ใช้ตารางสองมิติขนาด `n x n` โดยแถวและคอลัมน์แทน Vertex หากมี Edge เชื่อมระหว่าง Vertex จะเก็บค่า `1` หรือ Weight และถ้าไม่มีการเชื่อมต่อจะเก็บค่า `0` หรือค่าที่กำหนดแทนอนันต์

ดูภาพประกอบเพิ่มเติมได้จาก [ภาพ Adjacency Matrix](https://commons.wikimedia.org/wiki/Special:FilePath/Adjacency_matrix_for_graph.png)

กราฟตัวอย่าง:

```text
A -------- B
 \        /
  \      /
    C
```

Adjacency Matrix ของกราฟไม่มีทิศทาง:

|   | A | B | C |
|---|---:|---:|---:|
| A | 0 | 1 | 1 |
| B | 1 | 0 | 1 |
| C | 1 | 1 | 0 |

ข้อดีคือการตรวจสอบว่ามี Edge ระหว่างสอง Vertex หรือไม่ทำได้ในเวลา `O(1)` ข้อจำกัดคือใช้พื้นที่ `O(V^2)` แม้กราฟจะมี Edge น้อย

### Adjacency List

Adjacency List เก็บรายการ Vertex ที่เชื่อมต่อกับแต่ละ Vertex เหมาะกับกราฟที่มี Edge ไม่มากเมื่อเทียบกับจำนวน Vertex

```text
A: B, C
B: A, C
C: A, B
```

ใช้พื้นที่ `O(V + E)` และเหมาะกับการวนดูเพื่อนบ้านของ Vertex แต่การตรวจสอบ Edge อาจใช้เวลา `O(V)` ในกรณีทั่วไป หรือเร็วขึ้นหากใช้โครงสร้างข้อมูลช่วยค้นหา

### เปรียบเทียบวิธีแทน Graph

| คุณสมบัติ | Adjacency Matrix | Adjacency List |
|---|---:|---:|
| พื้นที่จัดเก็บ | `O(V^2)` | `O(V + E)` |
| ตรวจสอบ Edge | `O(1)` | `O(V)` โดยทั่วไป |
| วนดูเพื่อนบ้าน | `O(V)` | `O(degree)` |
| เหมาะกับ | กราฟหนาแน่น | กราฟเบาบาง |

## การท่อง Graph

การท่อง Graph คือการเยี่ยมชม Vertex ต่าง ๆ โดยไม่เยี่ยมชม Vertex เดิมซ้ำโดยไม่จำเป็น เนื่องจาก Graph อาจมี Cycle จึงควรใช้ชุดข้อมูล `visited` บันทึก Vertex ที่เยี่ยมชมแล้ว

### Breadth-First Search (BFS)

BFS สำรวจกราฟทีละระดับ เริ่มจาก Vertex ตั้งต้น แล้วเยี่ยมชมเพื่อนบ้านทั้งหมดก่อนจึงไปยังระดับถัดไป โดยใช้ Queue

ดูภาพการทำงานเพิ่มเติมได้จาก [ภาพ Breadth-First Search](https://commons.wikimedia.org/wiki/Special:FilePath/Breadth-first-tree.svg)

ขั้นตอนทั่วไป:

1. เพิ่ม Vertex เริ่มต้นลงใน Queue และทำเครื่องหมายว่าเยี่ยมชมแล้ว
2. นำ Vertex จากด้านหน้าของ Queue ออกมา
3. เพิ่มเพื่อนบ้านที่ยังไม่เคยเยี่ยมชมลงใน Queue
4. ทำซ้ำจนกว่า Queue จะว่าง

BFS เหมาะกับการหาเส้นทางที่มีจำนวน Edge น้อยที่สุดใน Unweighted Graph และมีความซับซ้อนเป็น `O(V + E)`

### Depth-First Search (DFS)

DFS เดินทางไปตามเส้นทางหนึ่งให้ลึกที่สุดก่อน แล้วจึงย้อนกลับมาเลือกเส้นทางอื่น สามารถเขียนด้วย Recursive หรือใช้ Stack

ดูภาพการทำงานเพิ่มเติมได้จาก [ภาพ Depth-First Search](https://commons.wikimedia.org/wiki/Special:FilePath/Depth-first-tree.svg)

ขั้นตอนทั่วไป:

1. เยี่ยมชม Vertex ปัจจุบันและทำเครื่องหมายว่าเยี่ยมชมแล้ว
2. เลือกเพื่อนบ้านที่ยังไม่เคยเยี่ยมชม
3. เรียก DFS กับเพื่อนบ้านนั้น
4. ย้อนกลับเมื่อไม่มีเพื่อนบ้านที่ยังไม่เยี่ยมชม

DFS เหมาะกับการตรวจหา Cycle การตรวจสอบการเชื่อมต่อ และการค้นหาเส้นทาง โดยมีความซับซ้อนเป็น `O(V + E)`

## ตัวอย่างการสร้าง Graph ด้วยภาษา Python

```python
from collections import deque


graph = {
    "A": ["B", "C"],
    "B": ["A", "D"],
    "C": ["A", "E"],
    "D": ["B"],
    "E": ["C"],
}


def bfs(start):
    visited = {start}
    queue = deque([start])
    order = []

    while queue:
        vertex = queue.popleft()
        order.append(vertex)
        for neighbor in graph[vertex]:
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
    return order


def dfs(vertex, visited=None, order=None):
    if visited is None:
        visited = set()
    if order is None:
        order = []

    visited.add(vertex)
    order.append(vertex)
    for neighbor in graph[vertex]:
        if neighbor not in visited:
            dfs(neighbor, visited, order)
    return order


print(bfs("A"))
print(dfs("A"))
```

## ตัวอย่างการสร้าง Graph ด้วยภาษา C

```c
#include <stdio.h>

#define VERTICES 5

void add_edge(int graph[VERTICES][VERTICES], int from, int to) {
    graph[from][to] = 1;
    graph[to][from] = 1;
}

int main(void) {
    int graph[VERTICES][VERTICES] = {0};

    add_edge(graph, 0, 1);
    add_edge(graph, 0, 2);
    add_edge(graph, 1, 3);
    add_edge(graph, 2, 4);

    for (int row = 0; row < VERTICES; row++) {
        for (int column = 0; column < VERTICES; column++) {
            printf("%d ", graph[row][column]);
        }
        printf("\n");
    }

    return 0;
}
```

## ตัวอย่างการสร้าง Graph ด้วยภาษา C++

```cpp
#include <iostream>
#include <vector>

int main() {
    const int vertices = 5;
    std::vector<std::vector<int>> graph(vertices);

    graph[0].push_back(1);
    graph[0].push_back(2);
    graph[1].push_back(0);
    graph[1].push_back(3);
    graph[2].push_back(0);
    graph[2].push_back(4);
    graph[3].push_back(1);
    graph[4].push_back(2);

    for (int vertex = 0; vertex < vertices; vertex++) {
        std::cout << vertex << ": ";
        for (int neighbor : graph[vertex]) {
            std::cout << neighbor << " ";
        }
        std::cout << "\n";
    }

    return 0;
}
```

## ตัวอย่างการสร้าง Graph ด้วยภาษา Java

```java
import java.util.ArrayList;
import java.util.List;

public class GraphExample {
    public static void main(String[] args) {
        int vertices = 5;
        List<List<Integer>> graph = new ArrayList<>();

        for (int vertex = 0; vertex < vertices; vertex++) {
            graph.add(new ArrayList<>());
        }

        addEdge(graph, 0, 1);
        addEdge(graph, 0, 2);
        addEdge(graph, 1, 3);
        addEdge(graph, 2, 4);

        for (int vertex = 0; vertex < vertices; vertex++) {
            System.out.println(vertex + ": " + graph.get(vertex));
        }
    }

    private static void addEdge(List<List<Integer>> graph, int from, int to) {
        graph.get(from).add(to);
        graph.get(to).add(from);
    }
}
```

## อัลกอริทึมบน Graph ที่ควรรู้จัก

### การหาเส้นทางสั้นที่สุด

- **BFS** ใช้หาเส้นทางที่มีจำนวน Edge น้อยที่สุดใน Unweighted Graph
- **Dijkstra** ใช้หาเส้นทางสั้นที่สุดจากจุดเริ่มต้นไปยังจุดอื่นใน Weighted Graph ที่มีน้ำหนักไม่ติดลบ
- **Bellman-Ford** รองรับ Edge ที่มีน้ำหนักติดลบ และตรวจสอบ Negative Cycle ได้
- **Floyd-Warshall** ใช้หาเส้นทางสั้นที่สุดระหว่าง Vertex ทุกคู่ โดยใช้แนวคิด Dynamic Programming

### Minimum Spanning Tree (MST)

Minimum Spanning Tree คือกลุ่ม Edge ที่เชื่อม Vertex ทั้งหมดเข้าด้วยกันโดยไม่มี Cycle และมีผลรวมน้ำหนักน้อยที่สุด อัลกอริทึมที่ใช้บ่อยคือ **Kruskal** และ **Prim**

## ข้อดีและข้อจำกัด

### ข้อดี

- แทนความสัมพันธ์ที่ซับซ้อนระหว่างข้อมูลได้ดี
- ใช้แก้ปัญหาเครือข่าย เส้นทาง และการเชื่อมต่อได้หลากหลาย
- มีอัลกอริทึมหลายแบบให้เลือกตามลักษณะของปัญหา
- รองรับทั้งข้อมูลแบบมีทิศทาง ไม่มีทิศทาง มีน้ำหนัก และไม่มีน้ำหนัก

### ข้อจำกัด

- การจัดการ Graph ที่มี Cycle ต้องป้องกันการเยี่ยมชมซ้ำ
- กราฟขนาดใหญ่อาจใช้หน่วยความจำมาก โดยเฉพาะเมื่อใช้ Adjacency Matrix
- การเลือกอัลกอริทึมผิดประเภทอาจทำให้ได้ผลลัพธ์ไม่ถูกต้องหรือทำงานช้า
- Graph ไม่ได้มีลำดับชั้นชัดเจนเหมือน Tree จึงต้องกำหนดจุดเริ่มต้นและเงื่อนไขการค้นหา

## ตัวอย่างการประยุกต์ใช้

- **แผนที่และระบบนำทาง**: Vertex แทนสถานที่ และ Edge แทนถนน
- **เครือข่ายสังคม**: Vertex แทนผู้ใช้ และ Edge แทนความสัมพันธ์
- **เครือข่ายคอมพิวเตอร์**: Vertex แทนอุปกรณ์ และ Edge แทนการเชื่อมต่อ
- **ระบบแนะนำสินค้า**: Vertex แทนสินค้า และ Edge แทนความคล้ายคลึงหรือการซื้อร่วมกัน
- **การจัดตารางงาน**: Vertex แทนงาน และ Edge แทนข้อจำกัดก่อน-หลัง

## แบบฝึกหัด

กำหนด Undirected Graph ต่อไปนี้

```text
A ----- B ----- D
|       |
|       |
C ----- E
```

และมี Edge ดังนี้

```text
(A, B), (A, C), (B, D), (B, E), (C, E)
```

จงทำแบบฝึกหัดต่อไปนี้

1. ระบุ Degree ของ Vertex ทุกจุด
2. เขียน Adjacency List ของกราฟนี้
3. เขียนลำดับ BFS เมื่อเริ่มจาก `A` โดยเลือกเพื่อนบ้านตามลำดับตัวอักษร
4. เขียนลำดับ DFS เมื่อเริ่มจาก `A` โดยเลือกเพื่อนบ้านตามลำดับตัวอักษร
5. กราฟนี้เป็น Connected Graph หรือไม่ เพราะเหตุใด
6. หากต้องการเก็บกราฟนี้ ควรใช้ Adjacency Matrix หรือ Adjacency List จึงจะประหยัดพื้นที่กว่า

### แนวคำตอบแบบฝึกหัด

1. Degree: `A = 2`, `B = 3`, `C = 2`, `D = 1`, `E = 2`
2. `A: B, C`; `B: A, D, E`; `C: A, E`; `D: B`; `E: B, C`
3. BFS: `A, B, C, D, E`
4. DFS: `A, B, D, E, C`
5. เป็น Connected Graph เพราะสามารถเดินทางจาก Vertex ใด ๆ ไปยัง Vertex อื่นได้
6. Adjacency List เพราะกราฟมี Edge น้อยกว่าจำนวนคู่ Vertex ที่เป็นไปได้

## แบบฝึกปฏิบัติการ

### กิจกรรม: สร้าง Graph และค้นหาเส้นทาง

ให้ผู้เรียนเขียนโปรแกรมด้วยภาษาใดภาษาหนึ่งจาก C, C++, Java หรือ Python โดยมีความสามารถดังนี้

1. สร้าง Graph แบบไม่มีทิศทางด้วย Adjacency List
2. เพิ่ม Vertex และ Edge จากข้อมูลที่ผู้ใช้ป้อน
3. แสดงเพื่อนบ้านของ Vertex ที่กำหนด
4. เขียน BFS และ DFS โดยรับ Vertex เริ่มต้นจากผู้ใช้
5. ตรวจสอบว่า Vertex เป้าหมายสามารถเข้าถึงจาก Vertex เริ่มต้นได้หรือไม่
6. แสดงจำนวน Vertex ที่ถูกเยี่ยมชมและลำดับการเยี่ยมชม

ข้อมูลทดสอบแนะนำ:

```text
A B
A C
B D
B E
C E
```

ให้ทดลองค้นหาจาก `A` ไปยัง `E` และจาก `D` ไปยัง `C` พร้อมบันทึกผล BFS และ DFS

### เกณฑ์ประเมินการปฏิบัติการ

| รายการ | คะแนน |
|---|---:|
| สร้าง Graph และเพิ่ม Edge ได้ถูกต้อง | 2 |
| แสดง Adjacency List ได้ถูกต้อง | 2 |
| ทำงานแบบ BFS ได้ถูกต้อง | 2 |
| ทำงานแบบ DFS ได้ถูกต้อง | 2 |
| ทดสอบและอธิบายผลลัพธ์ได้ | 2 |
| **รวม** | **10** |

## แบบทดสอบหลังเรียน

1. อธิบายความแตกต่างระหว่าง Directed Graph และ Undirected Graph
2. Adjacency Matrix เหมาะกับกราฟลักษณะใด
3. เพราะเหตุใด BFS จึงเหมาะกับการหาเส้นทางสั้นที่สุดใน Unweighted Graph
4. DFS ต้องใช้ชุดข้อมูลใดเพื่อป้องกันการเยี่ยมชม Vertex ซ้ำ
5. Dijkstra มีข้อจำกัดเกี่ยวกับน้ำหนักของ Edge อย่างไร
6. อธิบายความหมายของ Minimum Spanning Tree

### เฉลยแบบทดสอบหลังเรียน

1. Directed Graph มีทิศทางบน Edge ส่วน Undirected Graph เดินทางได้ทั้งสองทิศทาง
2. กราฟหนาแน่นที่มี Edge จำนวนมากเมื่อเทียบกับจำนวน Vertex
3. เพราะ BFS สำรวจทีละระดับ ทำให้เส้นทางแรกที่พบมีจำนวน Edge น้อยที่สุด
4. ใช้ `visited` ร่วมกับ Queue ใน BFS หรือ Stack/การเรียกตัวเองใน DFS
5. น้ำหนักของ Edge ต้องไม่ติดลบ
6. กลุ่ม Edge ที่เชื่อม Vertex ทุกจุดโดยไม่มี Cycle และมีผลรวมน้ำหนักน้อยที่สุด

## สรุปท้ายบท

Graph เป็นโครงสร้างข้อมูลที่ใช้แทนความสัมพันธ์ระหว่าง Vertex และ Edge สามารถแบ่งเป็น Directed, Undirected, Weighted และ Unweighted Graph ได้ การแทนกราฟด้วย Adjacency Matrix เหมาะกับกราฟหนาแน่นและตรวจสอบ Edge ได้เร็ว ส่วน Adjacency List เหมาะกับกราฟเบาบางและประหยัดพื้นที่

BFS ใช้ Queue และเหมาะกับการค้นหาแบบทีละระดับหรือหาเส้นทางสั้นที่สุดใน Unweighted Graph ส่วน DFS ใช้ Stack หรือการเรียกตัวเองและเหมาะกับการค้นหาเชิงลึก การเลือกใช้วิธีแทน Graph และอัลกอริทึมควรพิจารณาจากจำนวน Vertex, จำนวน Edge, น้ำหนัก และทิศทางของกราฟ
