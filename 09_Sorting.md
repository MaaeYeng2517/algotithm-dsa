# การเรียงข้อมูล (Sorting)

การเรียงข้อมูล หรือ **Sorting** คือกระบวนการจัดลำดับข้อมูลตามเงื่อนไขที่กำหนด เช่น จากน้อยไปมาก จากมากไปน้อย หรือตามลำดับตัวอักษร การเรียงข้อมูลช่วยให้ค้นหา เปรียบเทียบ และวิเคราะห์ข้อมูลได้สะดวกและมีประสิทธิภาพมากขึ้น

ตัวอย่างการใช้งาน Sorting ได้แก่ การเรียงคะแนนนักเรียน การเรียงราคาสินค้า การจัดอันดับผลการแข่งขัน และการเตรียมข้อมูลสำหรับ Binary Search

## ภาพประกอบภายนอก

![ภาพรวม Sorting Algorithms](https://commons.wikimedia.org/wiki/Special:FilePath/Sorting_algorithm_animation.gif)

แหล่งที่มา: [Sorting algorithm animation](https://commons.wikimedia.org/wiki/File:Sorting_algorithm_animation.gif)

![ภาพการทำงานของ Quicksort](https://commons.wikimedia.org/wiki/Special:FilePath/Quicksort-example.gif)

แหล่งที่มา: [Quicksort example](https://commons.wikimedia.org/wiki/File:Quicksort-example.gif)

ลิงก์ภาพมาจาก Wikimedia Commons ควรตรวจสอบใบอนุญาตของภาพก่อนนำไปใช้งานในเอกสารหรือสื่อเผยแพร่

## วัตถุประสงค์การเรียนรู้

เมื่อศึกษาเนื้อหานี้แล้ว ผู้เรียนควรสามารถ

1. อธิบายความหมายและประโยชน์ของการเรียงข้อมูลได้
2. อธิบายหลักการทำงานของ Bubble Sort, Selection Sort, Insertion Sort, Merge Sort และ Quick Sort ได้
3. วิเคราะห์เวลาและพื้นที่ที่ใช้งานของอัลกอริทึมการเรียงข้อมูลแต่ละแบบได้
4. เลือกอัลกอริทึม Sorting ให้เหมาะกับลักษณะของข้อมูลได้
5. เขียนโปรแกรมเรียงข้อมูลด้วยภาษา C, C++, Java หรือ Python ได้

## ผลลัพธ์การเรียนรู้

หลังจบบทเรียน ผู้เรียนสามารถ

- ระบุผลลัพธ์ของการเรียงข้อมูลแบบ Ascending และ Descending ได้
- อธิบายความแตกต่างระหว่าง Stable Sort และ Unstable Sort ได้
- ติดตามการเปลี่ยนแปลงของข้อมูลในแต่ละรอบการทำงานได้
- เปรียบเทียบประสิทธิภาพของอัลกอริทึม Sorting ได้
- ประยุกต์ใช้ Sorting ร่วมกับการค้นหาและการแก้ปัญหาได้

## แบบทดสอบก่อนเรียน

ลองตอบคำถามต่อไปนี้ก่อนอ่านเนื้อหา โดยยังไม่ต้องดูเฉลย

1. Sorting คืออะไร
2. การเรียงข้อมูลจากน้อยไปมากเรียกว่าอะไร
3. อัลกอริทึมใดเปรียบเทียบข้อมูลที่อยู่ติดกัน
4. Binary Search ต้องการข้อมูลที่มีคุณสมบัติอย่างไรก่อนค้นหา
5. ถ้าข้อมูลมี `n` รายการ การวนดูข้อมูลทุกตัวอย่างน้อยหนึ่งครั้งมีความซับซ้อนเท่าใด

### เฉลยแบบทดสอบก่อนเรียน

1. กระบวนการจัดข้อมูลให้เรียงตามเงื่อนไขที่กำหนด
2. Ascending Order
3. Bubble Sort
4. ข้อมูลต้องเรียงลำดับแล้ว
5. `O(n)`

## แนวคิดพื้นฐานของการเรียงข้อมูล

### Ascending และ Descending

- **Ascending Order** คือการเรียงจากน้อยไปมาก เช่น `1, 3, 5, 8`
- **Descending Order** คือการเรียงจากมากไปน้อย เช่น `8, 5, 3, 1`

### In-place Sort

เป็นการเรียงข้อมูลโดยใช้พื้นที่เพิ่มเติมน้อยมาก และแก้ไขข้อมูลในโครงสร้างเดิม เช่น Selection Sort และ Insertion Sort

### Stable Sort

เป็นการเรียงที่รักษาลำดับเดิมของข้อมูลที่มีค่าคีย์เท่ากัน ตัวอย่างเช่น หากนักเรียนสองคนมีคะแนนเท่ากัน ลำดับเดิมของนักเรียนทั้งสองจะยังคงอยู่

### Adaptive Sort

เป็นอัลกอริทึมที่ทำงานได้เร็วขึ้นเมื่อข้อมูลเดิมเกือบเรียงลำดับแล้ว เช่น Insertion Sort

## Bubble Sort

Bubble Sort เปรียบเทียบข้อมูลที่อยู่ติดกัน หากอยู่ผิดลำดับจะสลับตำแหน่งกัน ทำซ้ำหลายรอบจนข้อมูลเรียงลำดับ โดยค่าที่มากกว่าจะค่อย ๆ เคลื่อนไปทางท้ายอาร์เรย์เหมือนฟองอากาศลอยขึ้น

ตัวอย่างข้อมูล:

```text
[5, 1, 4, 2]
```

การทำงานโดยสรุป:

```text
รอบที่ 1: [1, 4, 2, 5]
รอบที่ 2: [1, 2, 4, 5]
```

ความซับซ้อน:

- Best Case: `O(n)` เมื่อใช้ตัวแปรตรวจสอบว่ามีการสลับหรือไม่
- Average Case: `O(n^2)`
- Worst Case: `O(n^2)`
- Space: `O(1)`

Bubble Sort เข้าใจง่ายและเป็น Stable Sort แต่ไม่เหมาะกับข้อมูลจำนวนมาก

## Selection Sort

Selection Sort แบ่งข้อมูลเป็นส่วนที่เรียงแล้วและยังไม่เรียง ในแต่ละรอบจะค้นหาค่าน้อยที่สุดจากส่วนที่ยังไม่เรียง แล้วนำมาสลับไว้ตำแหน่งถัดไป

ตัวอย่าง:

```text
[5, 1, 4, 2]
เลือก 1: [1, 5, 4, 2]
เลือก 2: [1, 2, 4, 5]
```

ความซับซ้อน:

- Best Case: `O(n^2)`
- Average Case: `O(n^2)`
- Worst Case: `O(n^2)`
- Space: `O(1)`

Selection Sort ใช้การสลับข้อมูลน้อย แต่โดยทั่วไปไม่ใช่ Stable Sort

## Insertion Sort

Insertion Sort สร้างส่วนข้อมูลที่เรียงแล้วทีละรายการ โดยนำข้อมูลใหม่ไปแทรกในตำแหน่งที่ถูกต้อง เหมือนการจัดเรียงไพ่ในมือ

ตัวอย่าง:

```text
ข้อมูลเดิม: [5, 1, 4, 2]
แทรก 1:    [1, 5, 4, 2]
แทรก 4:    [1, 4, 5, 2]
แทรก 2:    [1, 2, 4, 5]
```

ความซับซ้อน:

- Best Case: `O(n)` เมื่อข้อมูลเกือบเรียงแล้ว
- Average Case: `O(n^2)`
- Worst Case: `O(n^2)`
- Space: `O(1)`

Insertion Sort เหมาะกับข้อมูลจำนวนน้อยหรือข้อมูลที่เกือบเรียงแล้ว และเป็น Stable Sort

## Merge Sort

Merge Sort แบ่งข้อมูลออกเป็นส่วนย่อยจนเหลือรายการเดี่ยว จากนั้นเรียงและรวมส่วนย่อยกลับเข้าด้วยกันตามลำดับ วิธีนี้ใช้แนวคิด Divide and Conquer

ขั้นตอนหลัก:

1. แบ่งอาร์เรย์ออกเป็นสองส่วน
2. เรียงแต่ละส่วนด้วย Merge Sort
3. รวมสองส่วนที่เรียงแล้วให้เป็นส่วนเดียว

ความซับซ้อน:

- Best Case: `O(n log n)`
- Average Case: `O(n log n)`
- Worst Case: `O(n log n)`
- Space: `O(n)`

Merge Sort มีประสิทธิภาพสม่ำเสมอและเป็น Stable Sort แต่ใช้พื้นที่เพิ่มเติมในการรวมข้อมูล

## Quick Sort

Quick Sort เลือกข้อมูลหนึ่งรายการเป็น **Pivot** แล้วแบ่งข้อมูลเป็นสองกลุ่ม คือค่าที่น้อยกว่า Pivot และค่าที่มากกว่า Pivot จากนั้นเรียกใช้ Quick Sort กับแต่ละกลุ่ม

ขั้นตอนหลัก:

1. เลือก Pivot
2. แบ่งข้อมูลรอบ Pivot (Partition)
3. เรียงส่วนซ้ายและส่วนขวาแบบ Recursive
4. รวมผลลัพธ์จากการแบ่งส่วน

ความซับซ้อน:

- Best Case: `O(n log n)`
- Average Case: `O(n log n)`
- Worst Case: `O(n^2)` เมื่อเลือก Pivot ได้ไม่ดี
- Space: โดยเฉลี่ย `O(log n)` สำหรับ Stack

Quick Sort มักทำงานได้เร็วในทางปฏิบัติและใช้พื้นที่ไม่มาก แต่โดยทั่วไปไม่ใช่ Stable Sort

## Heap Sort

Heap Sort สร้างข้อมูลเป็นโครงสร้าง Heap แล้วนำค่าสูงสุดหรือค่าต่ำสุดออกมาเรียงทีละรายการ โดยใช้คุณสมบัติของ Binary Heap

ความซับซ้อน:

- Best Case: `O(n log n)`
- Average Case: `O(n log n)`
- Worst Case: `O(n log n)`
- Space: `O(1)`

Heap Sort มีประสิทธิภาพในกรณีแย่ที่สุดที่แน่นอนและใช้พื้นที่น้อย แต่ไม่ใช่ Stable Sort

## ตารางเปรียบเทียบอัลกอริทึม

| อัลกอริทึม | Best Case | Average Case | Worst Case | Space | Stable |
|---|---:|---:|---:|---:|:---:|
| Bubble Sort | `O(n)` | `O(n^2)` | `O(n^2)` | `O(1)` | ใช่ |
| Selection Sort | `O(n^2)` | `O(n^2)` | `O(n^2)` | `O(1)` | ไม่เสมอไป |
| Insertion Sort | `O(n)` | `O(n^2)` | `O(n^2)` | `O(1)` | ใช่ |
| Merge Sort | `O(n log n)` | `O(n log n)` | `O(n log n)` | `O(n)` | ใช่ |
| Quick Sort | `O(n log n)` | `O(n log n)` | `O(n^2)` | `O(log n)` โดยเฉลี่ย | ไม่ |
| Heap Sort | `O(n log n)` | `O(n log n)` | `O(n log n)` | `O(1)` | ไม่ |

## ตัวอย่างการเรียงข้อมูลด้วยภาษา Python

```python
def insertion_sort(values):
    for index in range(1, len(values)):
        current = values[index]
        position = index - 1

        while position >= 0 and values[position] > current:
            values[position + 1] = values[position]
            position -= 1

        values[position + 1] = current
    return values


numbers = [5, 1, 4, 2, 8]
print(insertion_sort(numbers))
```

## ตัวอย่างการเรียงข้อมูลด้วยภาษา C

```c
#include <stdio.h>

void insertion_sort(int values[], int length) {
    for (int index = 1; index < length; index++) {
        int current = values[index];
        int position = index - 1;

        while (position >= 0 && values[position] > current) {
            values[position + 1] = values[position];
            position--;
        }
        values[position + 1] = current;
    }
}

int main(void) {
    int values[] = {5, 1, 4, 2, 8};
    int length = sizeof(values) / sizeof(values[0]);

    insertion_sort(values, length);
    for (int index = 0; index < length; index++) {
        printf("%d ", values[index]);
    }
    printf("\n");
    return 0;
}
```

## ตัวอย่างการเรียงข้อมูลด้วยภาษา C++

```cpp
#include <iostream>
#include <vector>

void insertion_sort(std::vector<int>& values) {
    for (int index = 1; index < values.size(); index++) {
        int current = values[index];
        int position = index - 1;

        while (position >= 0 && values[position] > current) {
            values[position + 1] = values[position];
            position--;
        }
        values[position + 1] = current;
    }
}

int main() {
    std::vector<int> values = {5, 1, 4, 2, 8};
    insertion_sort(values);

    for (int value : values) {
        std::cout << value << " ";
    }
    std::cout << "\n";
    return 0;
}
```

## ตัวอย่างการเรียงข้อมูลด้วยภาษา Java

```java
import java.util.Arrays;

public class SortingExample {
    public static void insertionSort(int[] values) {
        for (int index = 1; index < values.length; index++) {
            int current = values[index];
            int position = index - 1;

            while (position >= 0 && values[position] > current) {
                values[position + 1] = values[position];
                position--;
            }
            values[position + 1] = current;
        }
    }

    public static void main(String[] args) {
        int[] values = {5, 1, 4, 2, 8};
        insertionSort(values);
        System.out.println(Arrays.toString(values));
    }
}
```

## การเลือกใช้ Sorting ให้เหมาะสม

- ใช้ **Insertion Sort** เมื่อข้อมูลมีจำนวนน้อยหรือเกือบเรียงอยู่แล้ว
- ใช้ **Merge Sort** เมื่อต้องการเวลา `O(n log n)` ที่สม่ำเสมอและรักษาความเสถียร
- ใช้ **Quick Sort** เมื่อประสิทธิภาพโดยเฉลี่ยสำคัญและเลือก Pivot ได้เหมาะสม
- ใช้ **Heap Sort** เมื่อต้องการรับประกัน Worst Case `O(n log n)` และใช้พื้นที่เพิ่มเติมน้อย
- ใช้ฟังก์ชัน Sorting ของภาษาหรือไลบรารีมาตรฐานในงานจริง หากไม่จำเป็นต้องเขียนอัลกอริทึมเอง

## การประยุกต์ใช้

- เรียงคะแนนเพื่อจัดอันดับนักเรียน
- เรียงสินค้าโดยราคา ชื่อ หรือความนิยม
- เตรียมข้อมูลก่อนใช้ Binary Search
- เรียงเหตุการณ์ตามวันและเวลา
- จัดลำดับงานตามความสำคัญหรือกำหนดส่ง

## แบบฝึกหัด

กำหนดข้อมูลต่อไปนี้:

```text
[7, 3, 9, 1, 5]
```

จงทำแบบฝึกหัดต่อไปนี้

1. เขียนผลลัพธ์หลังจบแต่ละรอบของ Bubble Sort แบบเรียงจากน้อยไปมาก
2. เขียนผลลัพธ์หลังการแทรกแต่ละค่าของ Insertion Sort
3. เรียงข้อมูลชุดนี้จากมากไปน้อยด้วย Selection Sort
4. อธิบายว่า Merge Sort ใช้แนวคิด Divide and Conquer อย่างไร
5. หากข้อมูลเกือบเรียงลำดับแล้ว ควรเลือกอัลกอริทึมใด เพราะเหตุใด

### แนวคำตอบแบบฝึกหัด

1. หลังแต่ละรอบอาจได้ `[3, 7, 1, 5, 9]`, `[3, 1, 5, 7, 9]`, `[1, 3, 5, 7, 9]` และ `[1, 3, 5, 7, 9]`
2. `[3, 7, 9, 1, 5]`, `[3, 7, 9, 1, 5]`, `[1, 3, 7, 9, 5]`, `[1, 3, 5, 7, 9]`
3. `[9, 7, 5, 3, 1]`
4. แบ่งข้อมูลเป็นส่วนย่อย เรียงแต่ละส่วน แล้วรวมส่วนที่เรียงแล้วกลับเป็นชุดเดียว
5. Insertion Sort เพราะมี Best Case เป็น `O(n)` และปรับตัวได้ดีกับข้อมูลที่เกือบเรียงแล้ว

## แบบฝึกปฏิบัติการ

### กิจกรรม: เปรียบเทียบอัลกอริทึม Sorting

ให้ผู้เรียนเขียนโปรแกรมด้วยภาษาใดภาษาหนึ่งจาก C, C++, Java หรือ Python โดยมีความสามารถดังนี้

1. สร้างอาร์เรย์ข้อมูลจำนวนอย่างน้อย 10 รายการ
2. เขียน Bubble Sort และ Insertion Sort ด้วยตนเอง
3. เรียงข้อมูลจากน้อยไปมากและตรวจสอบผลลัพธ์
4. นับจำนวนครั้งของการเปรียบเทียบและการสลับหรือการเลื่อนข้อมูล
5. ทดลองกับข้อมูลแบบสุ่ม ข้อมูลที่เรียงแล้ว และข้อมูลเรียงย้อนกลับ
6. สรุปว่าอัลกอริทึมใดเหมาะกับข้อมูลแต่ละแบบ

ข้อมูลทดสอบแนะนำ:

```text
ข้อมูลสุ่ม:       [9, 2, 7, 4, 1, 8, 3, 6, 5, 0]
ข้อมูลเรียงแล้ว:  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
ข้อมูลย้อนกลับ:   [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
```

### เกณฑ์ประเมินการปฏิบัติการ

| รายการ | คะแนน |
|---|---:|
| เขียนอัลกอริทึม Sorting ได้ถูกต้อง | 3 |
| แสดงผลการเรียงข้อมูลถูกต้อง | 2 |
| นับการเปรียบเทียบและการสลับหรือเลื่อนได้ | 2 |
| ทดลองข้อมูลครบทั้งสามรูปแบบ | 2 |
| อธิบายผลการทดลองได้ | 1 |
| **รวม** | **10** |

## แบบทดสอบหลังเรียน

1. อธิบายความแตกต่างระหว่าง Ascending และ Descending Order
2. อัลกอริทึมใดเหมาะกับข้อมูลที่เกือบเรียงลำดับแล้ว
3. Merge Sort มี Worst Case Time Complexity เท่าใด
4. เพราะเหตุใด Quick Sort จึงมี Worst Case เป็น `O(n^2)` ได้
5. Stable Sort มีความหมายว่าอย่างไร
6. หากต้องการใช้พื้นที่เพิ่มเติมน้อยและรับประกันเวลา `O(n log n)` ในกรณีแย่ที่สุด ควรพิจารณาอัลกอริทึมใด

### เฉลยแบบทดสอบหลังเรียน

1. Ascending เรียงจากน้อยไปมาก ส่วน Descending เรียงจากมากไปน้อย
2. Insertion Sort
3. `O(n log n)`
4. เมื่อเลือก Pivot ไม่ดี ทำให้การแบ่งข้อมูลไม่สมดุลในทุกครั้ง
5. การเรียงที่รักษาลำดับเดิมของข้อมูลที่มีคีย์เท่ากัน
6. Heap Sort

## สรุปท้ายบท

Sorting คือการจัดข้อมูลให้เรียงตามเงื่อนไขที่กำหนด Bubble Sort, Selection Sort และ Insertion Sort เข้าใจง่ายและใช้พื้นที่น้อย แต่มีเวลาเฉลี่ยเป็น `O(n^2)` ส่วน Merge Sort, Quick Sort และ Heap Sort เหมาะกับข้อมูลขนาดใหญ่กว่า โดยทั่วไปมีประสิทธิภาพประมาณ `O(n log n)`

การเลือกอัลกอริทึมควรพิจารณาจำนวนข้อมูล สภาพข้อมูลเดิม ความต้องการเรื่องความเสถียร พื้นที่หน่วยความจำ และการรับประกันประสิทธิภาพในกรณีแย่ที่สุด การเข้าใจ Sorting ยังเป็นพื้นฐานสำคัญสำหรับการค้นหา การจัดอันดับ และอัลกอริทึมอื่น ๆ
