/**
 * Complete Course Data - Computer Science Mastery Course
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 * 
 * This comprehensive curriculum is based on:
 * - MIT 6.004 Computation Structures
 * - IIT NPTEL Programming in C++ by Prof. Partha Pratim Das
 * - Oxford University Computer Science Foundations
 */

import type { Module, Lesson, CodeExample, Exercise } from "@shared/schema";

// Complete list of 12 modules
export const modules: Module[] = [
  {
    id: "mod-1",
    title: "Binary & Digital Logic",
    slug: "binary-digital-logic",
    description: "Master the foundation of all computing: binary number systems, boolean algebra, and digital logic fundamentals. Learn how computers represent and manipulate information at the lowest level.",
    order: 1,
    icon: "Binary",
    category: "fundamentals",
    difficulty: "beginner",
    estimatedHours: 8,
    prerequisites: [],
    learningOutcomes: [
      "Convert between binary, decimal, hexadecimal, and octal number systems",
      "Perform binary arithmetic operations including addition, subtraction, and multiplication",
      "Understand signed number representations: sign-magnitude, ones' complement, two's complement",
      "Apply boolean algebra laws and simplify logical expressions",
      "Design truth tables for complex logical functions"
    ],
    lessonCount: 8,
  },
  {
    id: "mod-2",
    title: "Transistors & CMOS Technology",
    slug: "transistors-cmos",
    description: "Understand the physical building blocks of digital systems. Explore MOS transistors, CMOS logic families, and how electronic switches form the basis of all digital circuits.",
    order: 2,
    icon: "Cpu",
    category: "fundamentals",
    difficulty: "beginner",
    estimatedHours: 10,
    prerequisites: ["mod-1"],
    learningOutcomes: [
      "Explain the operation of NMOS and PMOS transistors",
      "Design CMOS logic gates from transistor-level schematics",
      "Analyze power consumption and switching characteristics",
      "Understand voltage transfer characteristics and noise margins",
      "Calculate propagation delays in CMOS circuits"
    ],
    lessonCount: 10,
  },
  {
    id: "mod-3",
    title: "Logic Gates & Boolean Algebra",
    slug: "logic-gates-boolean",
    description: "Deep dive into the fundamental logic gates (AND, OR, NOT, NAND, NOR, XOR) and master Boolean algebra for circuit design and optimization.",
    order: 3,
    icon: "GitBranch",
    category: "fundamentals",
    difficulty: "beginner",
    estimatedHours: 12,
    prerequisites: ["mod-1", "mod-2"],
    learningOutcomes: [
      "Implement all basic logic gates and understand their truth tables",
      "Apply De Morgan's theorems and Boolean algebra laws",
      "Simplify Boolean expressions using Karnaugh maps",
      "Design universal gate implementations (NAND-only, NOR-only)",
      "Analyze gate-level timing diagrams"
    ],
    lessonCount: 12,
  },
  {
    id: "mod-4",
    title: "Combinational Circuits",
    slug: "combinational-circuits",
    description: "Build complex digital systems using combinational logic. Design multiplexers, decoders, encoders, adders, and arithmetic logic units (ALUs).",
    order: 4,
    icon: "Network",
    category: "architecture",
    difficulty: "intermediate",
    estimatedHours: 14,
    prerequisites: ["mod-3"],
    learningOutcomes: [
      "Design and implement multiplexers and demultiplexers",
      "Build encoders, decoders, and priority encoders",
      "Create half adders, full adders, and ripple-carry adders",
      "Design a complete Arithmetic Logic Unit (ALU)",
      "Implement comparators and parity generators"
    ],
    lessonCount: 14,
  },
  {
    id: "mod-5",
    title: "Sequential Circuits & FSM",
    slug: "sequential-circuits-fsm",
    description: "Master circuits with memory: latches, flip-flops, registers, and counters. Design finite state machines for complex control systems.",
    order: 5,
    icon: "RotateCw",
    category: "architecture",
    difficulty: "intermediate",
    estimatedHours: 12,
    prerequisites: ["mod-4"],
    learningOutcomes: [
      "Understand the difference between latches and flip-flops",
      "Design SR, JK, D, and T flip-flops",
      "Build registers, shift registers, and counters",
      "Create Moore and Mealy finite state machines",
      "Implement state minimization techniques"
    ],
    lessonCount: 12,
  },
  {
    id: "mod-6",
    title: "CPU Architecture & Datapath",
    slug: "cpu-architecture-datapath",
    description: "Explore the heart of computing: CPU architecture. Learn instruction set design, datapath organization, control units, pipelining, and the fetch-decode-execute cycle.",
    order: 6,
    icon: "Server",
    category: "architecture",
    difficulty: "advanced",
    estimatedHours: 16,
    prerequisites: ["mod-5"],
    learningOutcomes: [
      "Understand Von Neumann and Harvard architectures",
      "Design instruction sets (RISC vs CISC principles)",
      "Build a complete single-cycle CPU datapath",
      "Implement control units using microprogramming",
      "Analyze pipelining and handle hazards (data, control, structural)"
    ],
    lessonCount: 16,
  },
  {
    id: "mod-7",
    title: "Memory Hierarchy & Cache",
    slug: "memory-hierarchy-cache",
    description: "Understand how modern computers achieve fast memory access through hierarchical organization. Master cache design, virtual memory, and memory management.",
    order: 7,
    icon: "Database",
    category: "architecture",
    difficulty: "advanced",
    estimatedHours: 10,
    prerequisites: ["mod-6"],
    learningOutcomes: [
      "Explain the memory hierarchy pyramid and locality principles",
      "Design direct-mapped, set-associative, and fully-associative caches",
      "Implement cache replacement policies (LRU, FIFO, Random)",
      "Understand virtual memory and page table organization",
      "Analyze cache performance using hit rates and miss penalties"
    ],
    lessonCount: 10,
  },
  {
    id: "mod-8",
    title: "C Programming Fundamentals",
    slug: "c-programming-fundamentals",
    description: "Begin your journey into systems programming with C. Master variables, data types, operators, control flow, functions, and the fundamentals of procedural programming.",
    order: 8,
    icon: "Code",
    category: "c-programming",
    difficulty: "beginner",
    estimatedHours: 12,
    prerequisites: [],
    learningOutcomes: [
      "Write, compile, and debug C programs",
      "Use all C data types and operators effectively",
      "Implement control structures: if-else, switch, loops",
      "Create and use functions with proper parameter passing",
      "Understand scope, lifetime, and storage classes"
    ],
    lessonCount: 12,
  },
  {
    id: "mod-9",
    title: "Advanced C Programming",
    slug: "advanced-c-programming",
    description: "Master pointers, dynamic memory, structures, file I/O, and preprocessor directives. Build complex data structures and understand memory management.",
    order: 9,
    icon: "Pointer",
    category: "c-programming",
    difficulty: "intermediate",
    estimatedHours: 16,
    prerequisites: ["mod-8"],
    learningOutcomes: [
      "Master pointer arithmetic and pointer-to-pointer concepts",
      "Implement dynamic memory allocation with malloc, calloc, realloc, free",
      "Design structures, unions, and bit fields",
      "Perform file I/O operations (text and binary)",
      "Create linked lists, stacks, queues, and binary trees in C"
    ],
    lessonCount: 16,
  },
  {
    id: "mod-10",
    title: "C++ Object-Oriented Programming",
    slug: "cpp-oop",
    description: "Transition to C++ and master object-oriented programming. Learn classes, objects, inheritance, polymorphism, encapsulation, and operator overloading.",
    order: 10,
    icon: "Box",
    category: "cpp-programming",
    difficulty: "intermediate",
    estimatedHours: 14,
    prerequisites: ["mod-9"],
    learningOutcomes: [
      "Understand the evolution from C to C++",
      "Design classes with proper encapsulation",
      "Implement all types of inheritance and access specifiers",
      "Master polymorphism: function overloading, operator overloading, virtual functions",
      "Apply constructor/destructor best practices"
    ],
    lessonCount: 14,
  },
  {
    id: "mod-11",
    title: "Modern C++ (C++11/14/17/20)",
    slug: "modern-cpp",
    description: "Embrace modern C++ features: auto, lambda expressions, smart pointers, move semantics, range-based loops, and the Standard Template Library (STL).",
    order: 11,
    icon: "Sparkles",
    category: "cpp-programming",
    difficulty: "advanced",
    estimatedHours: 18,
    prerequisites: ["mod-10"],
    learningOutcomes: [
      "Use auto, decltype, and type inference effectively",
      "Write lambda expressions and understand closures",
      "Implement move semantics and rvalue references",
      "Master smart pointers: unique_ptr, shared_ptr, weak_ptr",
      "Apply STL containers, iterators, and algorithms"
    ],
    lessonCount: 18,
  },
  {
    id: "mod-12",
    title: "Advanced Systems Programming",
    slug: "advanced-systems-programming",
    description: "Master templates, metaprogramming, concurrency, and performance optimization. Build production-quality systems with RAII, exception handling, and modern design patterns.",
    order: 12,
    icon: "Layers",
    category: "cpp-programming",
    difficulty: "advanced",
    estimatedHours: 20,
    prerequisites: ["mod-11"],
    learningOutcomes: [
      "Design and implement class and function templates",
      "Apply template metaprogramming techniques",
      "Write concurrent programs with std::thread, mutex, and condition variables",
      "Implement RAII and exception-safe code",
      "Optimize for performance using profiling and benchmarking"
    ],
    lessonCount: 20,
  },
];

// Sample lessons for Module 1: Binary & Digital Logic
export const binaryLogicLessons: Lesson[] = [
  {
    id: "les-1-1",
    moduleId: "mod-1",
    title: "Introduction to Number Systems",
    slug: "intro-number-systems",
    description: "Understanding different number systems and their importance in computing.",
    order: 1,
    estimatedMinutes: 45,
    content: [
      {
        id: "cb-1",
        type: "text",
        content: `# Introduction to Number Systems

## Created by Shashank Daksh

Computers process information using binary digits (bits). To understand how computers work at their core, we must first master different number systems.

### Why Different Number Systems?

In everyday life, we use the **decimal system** (base-10) because we have 10 fingers. However, computers use the **binary system** (base-2) because electronic circuits have two stable states: ON (1) and OFF (0).

### The Four Number Systems in Computing

| System | Base | Digits Used | Example |
|--------|------|-------------|---------|
| Binary | 2 | 0, 1 | 1010₂ |
| Octal | 8 | 0-7 | 12₈ |
| Decimal | 10 | 0-9 | 10₁₀ |
| Hexadecimal | 16 | 0-9, A-F | A₁₆ |

### Place Value System

Every number system follows the place value principle. For a number in base-b:

\`\`\`
Value = dₙ × bⁿ + dₙ₋₁ × bⁿ⁻¹ + ... + d₁ × b¹ + d₀ × b⁰
\`\`\`

**Example: 1010₂ in binary**
- 1 × 2³ + 0 × 2² + 1 × 2¹ + 0 × 2⁰
- = 8 + 0 + 2 + 0
- = 10₁₀ (decimal)`
      },
      {
        id: "cb-2",
        type: "diagram",
        content: "number-systems-overview",
        diagramType: "flowchart",
        caption: "Figure 1.1: Number Systems Overview - Created by Shashank Daksh"
      },
      {
        id: "cb-3",
        type: "note",
        content: "**Key Insight by Shashank Daksh:** Hexadecimal is popular in computing because each hex digit represents exactly 4 binary bits, making it a compact way to represent binary data."
      },
      {
        id: "cb-4",
        type: "code",
        content: `/**
 * Binary to Decimal Conversion
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

#include <stdio.h>
#include <math.h>

// Function to convert binary to decimal
// Author: Shashank Daksh
int binaryToDecimal(long long binary) {
    int decimal = 0, position = 0;
    
    while (binary != 0) {
        int digit = binary % 10;
        decimal += digit * pow(2, position);
        binary /= 10;
        position++;
    }
    
    return decimal;
}

int main() {
    // Shashank Daksh - Computer Science Mastery Course
    long long binary;
    
    printf("Enter a binary number: ");
    scanf("%lld", &binary);
    
    printf("Decimal equivalent: %d\\n", binaryToDecimal(binary));
    
    return 0;
}`,
        language: "c",
        output: `Enter a binary number: 1010
Decimal equivalent: 10`
      }
    ],
    keyTakeaways: [
      "Computers use binary because electronic circuits have two stable states",
      "Different number systems (binary, octal, decimal, hex) serve different purposes",
      "The place value system is the foundation for all number conversions",
      "Hexadecimal provides a compact representation of binary data"
    ],
    references: [
      "MIT 6.004 Computation Structures - Lecture 1",
      "Digital Design by Morris Mano, Chapter 1"
    ]
  },
  {
    id: "les-1-2",
    moduleId: "mod-1",
    title: "Binary Number Representation",
    slug: "binary-representation",
    description: "Deep dive into how binary numbers represent data in computers.",
    order: 2,
    estimatedMinutes: 60,
    content: [
      {
        id: "cb-5",
        type: "text",
        content: `# Binary Number Representation

## Created by Shashank Daksh

### Understanding Bits and Bytes

The smallest unit of data in a computer is a **bit** (binary digit). Common groupings include:

- **1 bit**: Single binary digit (0 or 1)
- **4 bits** = 1 nibble: Can represent 0-15 (one hex digit)
- **8 bits** = 1 byte: Can represent 0-255
- **16 bits** = 1 word (in some architectures)
- **32 bits** = 1 double word
- **64 bits** = 1 quad word

### Powers of 2

Every programmer should memorize these:

| Power | Value | Common Name |
|-------|-------|-------------|
| 2⁰ | 1 | - |
| 2¹ | 2 | - |
| 2² | 4 | - |
| 2³ | 8 | - |
| 2⁴ | 16 | - |
| 2⁷ | 128 | - |
| 2⁸ | 256 | - |
| 2¹⁰ | 1,024 | 1 KB |
| 2²⁰ | 1,048,576 | 1 MB |
| 2³⁰ | ~1 billion | 1 GB |`
      },
      {
        id: "cb-6",
        type: "diagram",
        content: "bits-bytes-visualization",
        diagramType: "data-structure",
        caption: "Figure 1.2: Bits and Bytes Visualization - Created by Shashank Daksh"
      },
      {
        id: "cb-7",
        type: "code",
        content: `/**
 * Displaying Binary Representation of Numbers
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

#include <stdio.h>

// Print binary representation of an integer
// Author: Shashank Daksh
void printBinary(int num, int bits) {
    printf("Binary representation of %d (in %d bits): ", num, bits);
    
    for (int i = bits - 1; i >= 0; i--) {
        int bit = (num >> i) & 1;
        printf("%d", bit);
        
        // Add space every 4 bits for readability
        // Shashank Daksh - Making code readable
        if (i % 4 == 0 && i != 0) {
            printf(" ");
        }
    }
    printf("\\n");
}

int main() {
    // Shashank Daksh - Computer Science Mastery Course
    printf("=== Binary Representation Demo ===\\n");
    printf("Author: Shashank Daksh\\n\\n");
    
    printBinary(0, 8);
    printBinary(1, 8);
    printBinary(10, 8);
    printBinary(255, 8);
    printBinary(256, 16);
    
    return 0;
}`,
        language: "c",
        output: `=== Binary Representation Demo ===
Author: Shashank Daksh

Binary representation of 0 (in 8 bits): 0000 0000
Binary representation of 1 (in 8 bits): 0000 0001
Binary representation of 10 (in 8 bits): 0000 1010
Binary representation of 255 (in 8 bits): 1111 1111
Binary representation of 256 (in 16 bits): 0000 0001 0000 0000`
      }
    ],
    keyTakeaways: [
      "A bit is the smallest unit of data (0 or 1)",
      "8 bits make a byte, which can represent 256 different values",
      "Powers of 2 are fundamental to understanding data sizes",
      "Binary representation directly maps to hardware states"
    ],
    references: [
      "MIT 6.004 Computation Structures - Digital Abstraction",
      "Computer Organization and Design - Patterson & Hennessy"
    ]
  },
  {
    id: "les-1-3",
    moduleId: "mod-1",
    title: "Binary Arithmetic",
    slug: "binary-arithmetic",
    description: "Master binary addition, subtraction, and multiplication operations.",
    order: 3,
    estimatedMinutes: 75,
    content: [
      {
        id: "cb-8",
        type: "text",
        content: `# Binary Arithmetic

## Created by Shashank Daksh

### Binary Addition Rules

Binary addition follows simple rules:

| A | B | Sum | Carry |
|---|---|-----|-------|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

**Example: 1011 + 1101**

\`\`\`
  Carry:  1 1 1 0
          1 0 1 1  (11 in decimal)
        + 1 1 0 1  (13 in decimal)
        ---------
        1 1 0 0 0  (24 in decimal)
\`\`\`

### Binary Subtraction

Using the borrow method or two's complement:

**Example: 1101 - 1011**

\`\`\`
          1 1 0 1  (13 in decimal)
        - 1 0 1 1  (11 in decimal)
        ---------
          0 0 1 0  (2 in decimal)
\`\`\``
      },
      {
        id: "cb-9",
        type: "diagram",
        content: "binary-addition",
        diagramType: "flowchart",
        caption: "Figure 1.3: Binary Addition Process - Created by Shashank Daksh"
      },
      {
        id: "cb-10",
        type: "code",
        content: `/**
 * Binary Arithmetic Operations
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

#include <stdio.h>
#include <string.h>

// Binary addition of two 8-bit numbers
// Author: Shashank Daksh
void binaryAdd(int a[], int b[], int result[], int size) {
    int carry = 0;
    
    for (int i = size - 1; i >= 0; i--) {
        int sum = a[i] + b[i] + carry;
        result[i] = sum % 2;
        carry = sum / 2;
    }
    
    printf("Carry out: %d\\n", carry);
}

// Print binary array
// Shashank Daksh - Helper function
void printBinaryArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d", arr[i]);
        if ((size - i - 1) % 4 == 0 && i != size - 1) {
            printf(" ");
        }
    }
    printf("\\n");
}

int main() {
    // Shashank Daksh - Computer Science Mastery Course
    printf("=== Binary Arithmetic Demo ===\\n");
    printf("Author: Shashank Daksh\\n\\n");
    
    int a[8] = {0, 0, 0, 0, 1, 0, 1, 1};  // 11 in decimal
    int b[8] = {0, 0, 0, 0, 1, 1, 0, 1};  // 13 in decimal
    int result[8] = {0};
    
    printf("  A = ");
    printBinaryArray(a, 8);
    
    printf("  B = ");
    printBinaryArray(b, 8);
    
    binaryAdd(a, b, result, 8);
    
    printf("A+B = ");
    printBinaryArray(result, 8);
    
    return 0;
}`,
        language: "c",
        output: `=== Binary Arithmetic Demo ===
Author: Shashank Daksh

  A = 0000 1011
  B = 0000 1101
Carry out: 0
A+B = 0001 1000`
      },
      {
        id: "cb-11",
        type: "tip",
        content: "**Pro Tip by Shashank Daksh:** When debugging binary arithmetic in hardware, always check for overflow conditions. An 8-bit addition can produce a 9-bit result!"
      }
    ],
    keyTakeaways: [
      "Binary addition produces a sum and carry for each bit position",
      "Overflow occurs when the result exceeds the available bits",
      "Binary subtraction can be performed using two's complement addition",
      "Understanding binary arithmetic is crucial for ALU design"
    ],
    references: [
      "MIT 6.004 - Arithmetic Circuits",
      "Digital Logic Design - Morris Mano"
    ]
  }
];

// Sample lessons for Module 6: CPU Architecture
export const cpuArchitectureLessons: Lesson[] = [
  {
    id: "les-6-1",
    moduleId: "mod-6",
    title: "Introduction to CPU Architecture",
    slug: "intro-cpu-architecture",
    description: "Understanding the fundamental components and operation of a Central Processing Unit.",
    order: 1,
    estimatedMinutes: 60,
    content: [
      {
        id: "cb-cpu-1",
        type: "text",
        content: `# Introduction to CPU Architecture

## Created by Shashank Daksh

The Central Processing Unit (CPU) is the brain of every computer. Understanding CPU architecture is fundamental to becoming a proficient programmer and computer scientist.

### The Three Main Components

1. **Control Unit (CU)**: Directs all processor operations
2. **Arithmetic Logic Unit (ALU)**: Performs mathematical and logical operations
3. **Registers**: High-speed storage for immediate data access

### The Fetch-Decode-Execute Cycle

Every instruction goes through this fundamental cycle:

1. **Fetch**: Retrieve the next instruction from memory
2. **Decode**: Interpret what the instruction means
3. **Execute**: Perform the operation
4. **Writeback**: Store results if necessary

### Von Neumann vs Harvard Architecture

| Feature | Von Neumann | Harvard |
|---------|-------------|---------|
| Memory | Unified (code + data) | Separate (code and data) |
| Bus | Single | Dual |
| Speed | Sequential | Parallel fetch possible |
| Used in | General computers | DSPs, microcontrollers |`
      },
      {
        id: "cb-cpu-2",
        type: "diagram",
        content: "cpu-block-diagram",
        diagramType: "cpu-block",
        caption: "Figure 6.1: CPU Block Diagram showing Control Unit, ALU, and Registers - Created by Shashank Daksh"
      },
      {
        id: "cb-cpu-3",
        type: "diagram",
        content: "fetch-decode-execute",
        diagramType: "flowchart",
        caption: "Figure 6.2: The Fetch-Decode-Execute Cycle - Created by Shashank Daksh"
      },
      {
        id: "cb-cpu-4",
        type: "note",
        content: "**Historical Note by Shashank Daksh:** The Von Neumann architecture was proposed in 1945 and remains the foundation of most general-purpose computers today. The concept of storing programs in the same memory as data was revolutionary."
      }
    ],
    keyTakeaways: [
      "The CPU consists of the Control Unit, ALU, and Registers",
      "Every instruction follows the Fetch-Decode-Execute cycle",
      "Von Neumann architecture uses shared memory for code and data",
      "Modern CPUs add pipelining and caching for performance"
    ],
    references: [
      "MIT 6.004 Computation Structures - Beta ISA",
      "Computer Organization by Patterson & Hennessy"
    ]
  },
  {
    id: "les-6-2",
    moduleId: "mod-6",
    title: "The Arithmetic Logic Unit (ALU)",
    slug: "arithmetic-logic-unit",
    description: "Deep dive into ALU design, operations, and implementation at the gate level.",
    order: 2,
    estimatedMinutes: 90,
    content: [
      {
        id: "cb-alu-1",
        type: "text",
        content: `# The Arithmetic Logic Unit (ALU)

## Created by Shashank Daksh

The ALU is the computational workhorse of the CPU. It performs all arithmetic and logical operations.

### ALU Operations

**Arithmetic Operations:**
- Addition (A + B)
- Subtraction (A - B)
- Increment (A + 1)
- Decrement (A - 1)
- Multiplication (in some ALUs)

**Logical Operations:**
- AND (A & B)
- OR (A | B)
- NOT (~A)
- XOR (A ^ B)
- NAND, NOR

**Shift Operations:**
- Logical Shift Left/Right
- Arithmetic Shift Right
- Rotate Left/Right

### ALU Control Signals

The ALU operation is selected by control signals (ALUOp):

| ALUOp | Operation |
|-------|-----------|
| 000 | AND |
| 001 | OR |
| 010 | ADD |
| 110 | SUB |
| 111 | SLT (Set Less Than) |`
      },
      {
        id: "cb-alu-2",
        type: "diagram",
        content: "alu-architecture",
        diagramType: "alu-architecture",
        caption: "Figure 6.3: 32-bit ALU Architecture with Control Signals - Created by Shashank Daksh"
      },
      {
        id: "cb-alu-3",
        type: "diagram",
        content: "1-bit-alu-slice",
        diagramType: "circuit",
        caption: "Figure 6.4: 1-bit ALU Slice Design - Created by Shashank Daksh"
      },
      {
        id: "cb-alu-4",
        type: "code",
        content: `/**
 * Simple ALU Simulator
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 * 
 * This simulates basic ALU operations
 */

#include <stdio.h>
#include <stdint.h>

// ALU Operation Codes
// Author: Shashank Daksh
typedef enum {
    ALU_AND = 0b000,
    ALU_OR  = 0b001,
    ALU_ADD = 0b010,
    ALU_SUB = 0b110,
    ALU_SLT = 0b111,
    ALU_NOR = 0b100,
    ALU_XOR = 0b101
} ALUOp;

// ALU Status Flags
// Shashank Daksh - Status Register
typedef struct {
    int zero;      // Result is zero
    int negative;  // Result is negative
    int carry;     // Carry out
    int overflow;  // Overflow occurred
} ALUFlags;

// Perform ALU Operation
// Author: Shashank Daksh
int32_t alu_execute(int32_t a, int32_t b, ALUOp op, ALUFlags *flags) {
    int32_t result = 0;
    int64_t temp;  // For overflow detection
    
    switch (op) {
        case ALU_AND:
            result = a & b;
            break;
        case ALU_OR:
            result = a | b;
            break;
        case ALU_ADD:
            temp = (int64_t)a + (int64_t)b;
            result = (int32_t)temp;
            flags->carry = (temp > INT32_MAX || temp < INT32_MIN);
            break;
        case ALU_SUB:
            temp = (int64_t)a - (int64_t)b;
            result = (int32_t)temp;
            break;
        case ALU_SLT:
            result = (a < b) ? 1 : 0;
            break;
        case ALU_NOR:
            result = ~(a | b);
            break;
        case ALU_XOR:
            result = a ^ b;
            break;
    }
    
    // Set status flags - Shashank Daksh
    flags->zero = (result == 0);
    flags->negative = (result < 0);
    
    return result;
}

// Print ALU operation and result
// Shashank Daksh - Display function
void print_alu_result(const char *op_name, int32_t a, int32_t b, 
                      int32_t result, ALUFlags flags) {
    printf("Operation: %s\\n", op_name);
    printf("  A = %d (0x%08X)\\n", a, a);
    printf("  B = %d (0x%08X)\\n", b, b);
    printf("  Result = %d (0x%08X)\\n", result, result);
    printf("  Flags: Z=%d N=%d C=%d V=%d\\n\\n", 
           flags.zero, flags.negative, flags.carry, flags.overflow);
}

int main() {
    // Shashank Daksh - Computer Science Mastery Course
    printf("========================================\\n");
    printf("   ALU Simulator by Shashank Daksh\\n");
    printf("========================================\\n\\n");
    
    ALUFlags flags = {0, 0, 0, 0};
    int32_t a = 15, b = 10;
    int32_t result;
    
    // Test ADD
    result = alu_execute(a, b, ALU_ADD, &flags);
    print_alu_result("ADD", a, b, result, flags);
    
    // Test SUB
    result = alu_execute(a, b, ALU_SUB, &flags);
    print_alu_result("SUB", a, b, result, flags);
    
    // Test AND
    result = alu_execute(a, b, ALU_AND, &flags);
    print_alu_result("AND", a, b, result, flags);
    
    // Test SLT
    result = alu_execute(5, 10, ALU_SLT, &flags);
    print_alu_result("SLT (5 < 10?)", 5, 10, result, flags);
    
    return 0;
}`,
        language: "c",
        output: `========================================
   ALU Simulator by Shashank Daksh
========================================

Operation: ADD
  A = 15 (0x0000000F)
  B = 10 (0x0000000A)
  Result = 25 (0x00000019)
  Flags: Z=0 N=0 C=0 V=0

Operation: SUB
  A = 15 (0x0000000F)
  B = 10 (0x0000000A)
  Result = 5 (0x00000005)
  Flags: Z=0 N=0 C=0 V=0

Operation: AND
  A = 15 (0x0000000F)
  B = 10 (0x0000000A)
  Result = 10 (0x0000000A)
  Flags: Z=0 N=0 C=0 V=0

Operation: SLT (5 < 10?)
  A = 5 (0x00000005)
  B = 10 (0x0000000A)
  Result = 1 (0x00000001)
  Flags: Z=0 N=0 C=0 V=0`
      }
    ],
    keyTakeaways: [
      "The ALU performs all arithmetic and logical operations",
      "ALU operations are selected via control signals (ALUOp)",
      "Status flags (Zero, Negative, Carry, Overflow) indicate result properties",
      "A 32-bit ALU is constructed from 32 cascaded 1-bit ALU slices"
    ],
    references: [
      "MIT 6.004 - ALU Design",
      "Oxford Robotics - Control Unit and ALU Lecture Notes"
    ]
  }
];

// Sample C Programming Lessons (Module 8)
export const cProgrammingLessons: Lesson[] = [
  {
    id: "les-8-1",
    moduleId: "mod-8",
    title: "Introduction to C Programming",
    slug: "intro-c-programming",
    description: "Your first steps into the world of C programming - history, setup, and your first program.",
    order: 1,
    estimatedMinutes: 45,
    content: [
      {
        id: "cb-c-1",
        type: "text",
        content: `# Introduction to C Programming

## Created by Shashank Daksh

### The Legacy of C

C was developed by Dennis Ritchie at Bell Labs in 1972. It remains one of the most influential and widely-used programming languages, forming the foundation for:

- Operating Systems (Linux, Windows, macOS)
- Embedded Systems
- Compilers and Interpreters
- High-Performance Applications
- System Software

### Why Learn C?

1. **Foundation**: Understanding C gives you insight into how computers actually work
2. **Performance**: C provides near-hardware-level performance
3. **Portability**: C code can run on virtually any platform
4. **Influence**: C influenced C++, Java, C#, and many other languages

### Your First C Program

The classic "Hello, World!" program demonstrates the basic structure of C:`
      },
      {
        id: "cb-c-2",
        type: "code",
        content: `/**
 * Hello World - Your First C Program
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 * 
 * This is the traditional first program that
 * every programmer writes when learning a new language.
 */

#include <stdio.h>  // Standard Input/Output header

// Main function - program execution starts here
// Author: Shashank Daksh
int main() {
    // Print greeting to the console
    // Shashank Daksh - Computer Science Mastery Course
    printf("Hello, World!\\n");
    printf("Welcome to C Programming!\\n");
    printf("Course by Shashank Daksh\\n");
    
    return 0;  // Return 0 to indicate successful execution
}`,
        language: "c",
        output: `Hello, World!
Welcome to C Programming!
Course by Shashank Daksh`
      },
      {
        id: "cb-c-3",
        type: "text",
        content: `### Breaking Down the Program

**\`#include <stdio.h>\`**
- Preprocessor directive
- Includes the Standard I/O library
- Provides functions like \`printf()\` and \`scanf()\`

**\`int main()\`**
- Entry point of every C program
- Returns an integer (0 = success, non-zero = error)

**\`printf()\`**
- Prints formatted output to console
- \`\\n\` creates a new line

**\`return 0;\`**
- Indicates successful program completion`
      },
      {
        id: "cb-c-4",
        type: "tip",
        content: "**Pro Tip by Shashank Daksh:** Always compile with warnings enabled (`gcc -Wall -Wextra`) to catch potential issues early. Treat warnings as errors during development!"
      }
    ],
    keyTakeaways: [
      "C was created in 1972 and remains foundational to modern computing",
      "Every C program starts execution from the main() function",
      "printf() is used for console output",
      "Return value 0 indicates successful program completion"
    ],
    references: [
      "The C Programming Language by Kernighan & Ritchie",
      "IIT NPTEL - Programming in C"
    ]
  }
];

// C++ OOP Lessons (Module 10)
export const cppOopLessons: Lesson[] = [
  {
    id: "les-10-1",
    moduleId: "mod-10",
    title: "Introduction to Classes and Objects",
    slug: "classes-objects-intro",
    description: "Understanding the fundamental building blocks of Object-Oriented Programming in C++.",
    order: 1,
    estimatedMinutes: 60,
    content: [
      {
        id: "cb-cpp-1",
        type: "text",
        content: `# Introduction to Classes and Objects

## Created by Shashank Daksh

### Object-Oriented Programming Paradigm

Object-Oriented Programming (OOP) organizes software design around data (objects) rather than functions and logic. The four pillars of OOP are:

1. **Encapsulation**: Bundling data and methods that operate on that data
2. **Abstraction**: Hiding complex implementation details
3. **Inheritance**: Creating new classes based on existing classes
4. **Polymorphism**: Objects behaving differently based on their type

### Classes: The Blueprint

A **class** is a user-defined data type that serves as a blueprint for creating objects. It contains:

- **Data members** (attributes/properties)
- **Member functions** (methods/behaviors)
- **Access specifiers** (public, private, protected)`
      },
      {
        id: "cb-cpp-2",
        type: "code",
        content: `/**
 * Introduction to Classes and Objects in C++
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 * 
 * Based on IIT NPTEL Programming in C++ curriculum
 */

#include <iostream>
#include <string>
using namespace std;

// Class definition - Blueprint for a Student
// Author: Shashank Daksh
class Student {
private:
    // Private data members (encapsulation)
    // Shashank Daksh - Data hiding
    string name;
    int rollNumber;
    double gpa;
    
public:
    // Constructor - initializes object
    // Author: Shashank Daksh
    Student(string n, int roll, double g) {
        name = n;
        rollNumber = roll;
        gpa = g;
    }
    
    // Getter methods (accessors)
    // Shashank Daksh - Controlled access
    string getName() const {
        return name;
    }
    
    int getRollNumber() const {
        return rollNumber;
    }
    
    double getGPA() const {
        return gpa;
    }
    
    // Setter method with validation
    // Author: Shashank Daksh
    void setGPA(double g) {
        if (g >= 0.0 && g <= 4.0) {
            gpa = g;
        } else {
            cout << "Invalid GPA. Must be between 0.0 and 4.0" << endl;
        }
    }
    
    // Display student information
    // Shashank Daksh - Member function
    void display() const {
        cout << "================================" << endl;
        cout << "Student Information" << endl;
        cout << "================================" << endl;
        cout << "Name: " << name << endl;
        cout << "Roll Number: " << rollNumber << endl;
        cout << "GPA: " << gpa << endl;
    }
    
    // Check if student is on honor roll
    // Author: Shashank Daksh
    bool isOnHonorRoll() const {
        return gpa >= 3.5;
    }
};

int main() {
    // Shashank Daksh - Computer Science Mastery Course
    cout << "========================================" << endl;
    cout << "  Classes and Objects Demo" << endl;
    cout << "  By Shashank Daksh" << endl;
    cout << "========================================" << endl << endl;
    
    // Creating objects (instances of the class)
    // Author: Shashank Daksh
    Student student1("Alice Johnson", 101, 3.8);
    Student student2("Bob Smith", 102, 3.2);
    
    // Using member functions
    student1.display();
    cout << endl;
    
    student2.display();
    cout << endl;
    
    // Checking honor roll status
    // Shashank Daksh - Using boolean method
    cout << student1.getName() << " is on honor roll: " 
         << (student1.isOnHonorRoll() ? "Yes" : "No") << endl;
    cout << student2.getName() << " is on honor roll: " 
         << (student2.isOnHonorRoll() ? "Yes" : "No") << endl;
    
    // Attempting to set invalid GPA
    cout << "\\nAttempting to set invalid GPA..." << endl;
    student1.setGPA(5.0);  // Will show error message
    
    return 0;
}`,
        language: "cpp",
        output: `========================================
  Classes and Objects Demo
  By Shashank Daksh
========================================

================================
Student Information
================================
Name: Alice Johnson
Roll Number: 101
GPA: 3.8

================================
Student Information
================================
Name: Bob Smith
Roll Number: 102
GPA: 3.2

Alice Johnson is on honor roll: Yes
Bob Smith is on honor roll: No

Attempting to set invalid GPA...
Invalid GPA. Must be between 0.0 and 4.0`
      },
      {
        id: "cb-cpp-3",
        type: "diagram",
        content: "class-uml-diagram",
        diagramType: "data-structure",
        caption: "Figure 10.1: UML Class Diagram for Student Class - Created by Shashank Daksh"
      },
      {
        id: "cb-cpp-4",
        type: "note",
        content: "**Key Concept by Shashank Daksh:** Encapsulation protects data integrity. By making data members private and providing public getter/setter methods, we control how data is accessed and modified, enabling validation and maintaining invariants."
      }
    ],
    keyTakeaways: [
      "A class is a blueprint that defines attributes and behaviors",
      "Objects are instances of classes created at runtime",
      "Encapsulation bundles data with methods that operate on it",
      "Access specifiers (public/private/protected) control visibility"
    ],
    references: [
      "IIT NPTEL - Programming in C++ by Prof. Partha Pratim Das",
      "The C++ Programming Language by Bjarne Stroustrup"
    ]
  }
];

// Modern C++ Lessons (Module 11)
export const modernCppLessons: Lesson[] = [
  {
    id: "les-11-1",
    moduleId: "mod-11",
    title: "Smart Pointers and Memory Management",
    slug: "smart-pointers",
    description: "Modern C++ approach to memory management with unique_ptr, shared_ptr, and weak_ptr.",
    order: 1,
    estimatedMinutes: 90,
    content: [
      {
        id: "cb-modern-1",
        type: "text",
        content: `# Smart Pointers and Memory Management

## Created by Shashank Daksh

### The Problem with Raw Pointers

Raw pointers in C++ can lead to:
- Memory leaks (forgetting to delete)
- Dangling pointers (using after delete)
- Double deletion (deleting twice)
- Exception safety issues

### Smart Pointers to the Rescue

C++11 introduced smart pointers that automatically manage memory:

| Smart Pointer | Ownership | Use Case |
|--------------|-----------|----------|
| \`unique_ptr\` | Exclusive | Single owner, no sharing |
| \`shared_ptr\` | Shared | Multiple owners needed |
| \`weak_ptr\` | Non-owning | Breaking circular references |`
      },
      {
        id: "cb-modern-2",
        type: "code",
        content: `/**
 * Smart Pointers in Modern C++
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 * 
 * Demonstrating unique_ptr, shared_ptr, and weak_ptr
 * Based on C++11/14/17 standards
 */

#include <iostream>
#include <memory>
#include <string>
using namespace std;

// Resource class for demonstration
// Author: Shashank Daksh
class Resource {
private:
    string name;
    
public:
    // Constructor - Shashank Daksh
    Resource(const string& n) : name(n) {
        cout << "Resource '" << name << "' created" << endl;
    }
    
    // Destructor - automatically called when smart pointer releases
    // Author: Shashank Daksh
    ~Resource() {
        cout << "Resource '" << name << "' destroyed" << endl;
    }
    
    void use() const {
        cout << "Using resource: " << name << endl;
    }
    
    string getName() const { return name; }
};

// Function demonstrating unique_ptr
// Shashank Daksh - Exclusive ownership
void demonstrateUniquePtr() {
    cout << "\\n=== unique_ptr Demo (Shashank Daksh) ===" << endl;
    
    // Creating unique_ptr using make_unique (C++14)
    // Author: Shashank Daksh
    auto ptr1 = make_unique<Resource>("UniqueResource");
    ptr1->use();
    
    // Transfer ownership with move
    // Shashank Daksh - Move semantics
    unique_ptr<Resource> ptr2 = move(ptr1);
    
    if (!ptr1) {
        cout << "ptr1 is now null after move" << endl;
    }
    
    ptr2->use();
    
    // No need to delete - automatic cleanup
    cout << "Exiting function - automatic cleanup:" << endl;
}

// Function demonstrating shared_ptr
// Author: Shashank Daksh - Shared ownership
void demonstrateSharedPtr() {
    cout << "\\n=== shared_ptr Demo (Shashank Daksh) ===" << endl;
    
    // Create shared_ptr
    auto ptr1 = make_shared<Resource>("SharedResource");
    cout << "Reference count after ptr1: " << ptr1.use_count() << endl;
    
    {
        // Create another shared_ptr pointing to same resource
        // Shashank Daksh - Reference counting
        shared_ptr<Resource> ptr2 = ptr1;
        cout << "Reference count after ptr2: " << ptr1.use_count() << endl;
        
        ptr2->use();
        // ptr2 goes out of scope here
    }
    
    cout << "Reference count after ptr2 destroyed: " << ptr1.use_count() << endl;
    
    // Resource will be destroyed when ptr1 goes out of scope
}

// Class to demonstrate weak_ptr for breaking cycles
// Author: Shashank Daksh
class Node {
public:
    string name;
    shared_ptr<Node> next;
    weak_ptr<Node> prev;  // Use weak_ptr to break cycle
    
    Node(const string& n) : name(n) {
        cout << "Node '" << name << "' created" << endl;
    }
    
    ~Node() {
        cout << "Node '" << name << "' destroyed" << endl;
    }
};

// Demonstrate weak_ptr preventing memory leak
// Shashank Daksh - Breaking circular references
void demonstrateWeakPtr() {
    cout << "\\n=== weak_ptr Demo (Shashank Daksh) ===" << endl;
    
    auto node1 = make_shared<Node>("Node1");
    auto node2 = make_shared<Node>("Node2");
    
    // Create bidirectional link
    // Author: Shashank Daksh
    node1->next = node2;
    node2->prev = node1;  // weak_ptr doesn't increase ref count
    
    cout << "node1 ref count: " << node1.use_count() << endl;
    cout << "node2 ref count: " << node2.use_count() << endl;
    
    // Access through weak_ptr
    // Shashank Daksh - Safe access pattern
    if (auto locked = node2->prev.lock()) {
        cout << "Accessed previous node: " << locked->name << endl;
    }
    
    cout << "Exiting - nodes will be properly destroyed:" << endl;
}

int main() {
    // Shashank Daksh - Computer Science Mastery Course
    cout << "========================================" << endl;
    cout << "  Smart Pointers in Modern C++" << endl;
    cout << "  By Shashank Daksh" << endl;
    cout << "========================================" << endl;
    
    demonstrateUniquePtr();
    demonstrateSharedPtr();
    demonstrateWeakPtr();
    
    cout << "\\n=== Program Complete ===" << endl;
    cout << "By Shashank Daksh - shak_corp@zohomail.in" << endl;
    
    return 0;
}`,
        language: "cpp",
        output: `========================================
  Smart Pointers in Modern C++
  By Shashank Daksh
========================================

=== unique_ptr Demo (Shashank Daksh) ===
Resource 'UniqueResource' created
Using resource: UniqueResource
ptr1 is now null after move
Using resource: UniqueResource
Exiting function - automatic cleanup:
Resource 'UniqueResource' destroyed

=== shared_ptr Demo (Shashank Daksh) ===
Resource 'SharedResource' created
Reference count after ptr1: 1
Reference count after ptr2: 2
Using resource: SharedResource
Reference count after ptr2 destroyed: 1
Resource 'SharedResource' destroyed

=== weak_ptr Demo (Shashank Daksh) ===
Node 'Node1' created
Node 'Node2' created
node1 ref count: 1
node2 ref count: 2
Accessed previous node: Node1
Exiting - nodes will be properly destroyed:
Node 'Node2' destroyed
Node 'Node1' destroyed

=== Program Complete ===
By Shashank Daksh - shak_corp@zohomail.in`
      },
      {
        id: "cb-modern-3",
        type: "warning",
        content: "**Warning by Shashank Daksh:** Never use `new` and `delete` directly in modern C++. Always prefer `make_unique` and `make_shared` for exception safety and better performance."
      }
    ],
    keyTakeaways: [
      "unique_ptr provides exclusive ownership - only one owner allowed",
      "shared_ptr enables shared ownership with reference counting",
      "weak_ptr breaks circular references without increasing reference count",
      "Always prefer make_unique/make_shared over raw new"
    ],
    references: [
      "IIT NPTEL - Programming in Modern C++",
      "Effective Modern C++ by Scott Meyers"
    ]
  }
];

// =====================================================
// MODULE 2: TRANSISTORS & CMOS TECHNOLOGY LESSONS
// Author: Shashank Daksh
// =====================================================
const transistorsCmosLessons: Lesson[] = [
  {
    id: "lesson-2-1",
    moduleId: "mod-2",
    title: "Introduction to MOS Transistors",
    slug: "intro-mos-transistors",
    order: 1,
    estimatedMinutes: 45,
    content: [
      {
        id: "cb-mos-1",
        type: "text",
        content: `# Introduction to MOS Transistors

**By Shashank Daksh** | shak_corp@zohomail.in

Metal-Oxide-Semiconductor (MOS) transistors are the fundamental building blocks of all modern digital circuits. This lesson introduces the physics and operation of MOS transistors based on MIT 6.004 curriculum.

## What is a MOS Transistor?

A MOS transistor is a three-terminal device that acts as a voltage-controlled switch:
- **Gate (G)**: Controls whether the switch is ON or OFF
- **Source (S)**: Where carriers (electrons or holes) originate
- **Drain (D)**: Where carriers flow to

## Types of MOS Transistors

### NMOS (N-channel MOS)
- Conducts when gate voltage is HIGH
- Uses electrons as charge carriers
- Symbol: Arrow pointing inward

### PMOS (P-channel MOS)
- Conducts when gate voltage is LOW
- Uses holes as charge carriers
- Symbol: Arrow pointing outward with bubble on gate`
      },
      {
        id: "cb-mos-2",
        type: "diagram",
        diagramType: "transistor-cross-section",
        content: "MOS Transistor Cross-Section - Created by Shashank Daksh"
      },
      {
        id: "cb-mos-3",
        type: "info",
        content: "**Shashank Daksh Note:** The key insight is that MOS transistors are voltage-controlled devices, not current-controlled like BJTs. This makes them ideal for digital logic where we switch between HIGH and LOW voltage levels."
      }
    ],
    keyTakeaways: [
      "MOS transistors are voltage-controlled switches",
      "NMOS conducts on HIGH gate, PMOS conducts on LOW gate",
      "Three terminals: Gate, Source, Drain"
    ],
    references: [
      "MIT 6.004 - CMOS Technology",
      "Sedra/Smith - Microelectronic Circuits"
    ]
  },
  {
    id: "lesson-2-2",
    moduleId: "mod-2",
    title: "CMOS Logic Design",
    slug: "cmos-logic-design",
    order: 2,
    estimatedMinutes: 60,
    content: [
      {
        id: "cb-cmos-1",
        type: "text",
        content: `# CMOS Logic Design

**By Shashank Daksh** | shak_corp@zohomail.in

Complementary MOS (CMOS) combines NMOS and PMOS transistors to create logic gates with excellent power efficiency.

## CMOS Inverter (NOT Gate)

The CMOS inverter is the fundamental gate:
- **PMOS pull-up network**: Connected to VDD (power)
- **NMOS pull-down network**: Connected to GND (ground)

When Input = HIGH:
- NMOS ON, PMOS OFF → Output = LOW

When Input = LOW:
- PMOS ON, NMOS OFF → Output = HIGH

## Key CMOS Properties

1. **Static Power**: Nearly zero (no direct path between VDD and GND)
2. **Full Voltage Swing**: Output reaches full VDD or full GND
3. **High Noise Margin**: Robust against noise
4. **Complementary Structure**: PMOS and NMOS networks are duals`
      },
      {
        id: "cb-cmos-2",
        type: "diagram",
        diagramType: "cmos-inverter",
        content: "CMOS Inverter Circuit - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "CMOS uses complementary NMOS and PMOS networks",
      "Static power consumption is nearly zero",
      "Full rail-to-rail voltage swing"
    ],
    references: [
      "MIT 6.004 - CMOS Technology",
      "Rabaey - Digital Integrated Circuits"
    ]
  }
];

// =====================================================
// MODULE 3: LOGIC GATES & BOOLEAN ALGEBRA LESSONS
// Author: Shashank Daksh
// =====================================================
const logicGatesLessons: Lesson[] = [
  {
    id: "lesson-3-1",
    moduleId: "mod-3",
    title: "Basic Logic Gates",
    slug: "basic-logic-gates",
    order: 1,
    estimatedMinutes: 45,
    content: [
      {
        id: "cb-gates-1",
        type: "text",
        content: `# Basic Logic Gates

**By Shashank Daksh** | shak_corp@zohomail.in

Logic gates are the fundamental building blocks of digital circuits. This lesson covers all basic gates and their truth tables.

## AND Gate
- Output is HIGH only when ALL inputs are HIGH
- Boolean expression: Y = A · B

## OR Gate
- Output is HIGH when ANY input is HIGH
- Boolean expression: Y = A + B

## NOT Gate (Inverter)
- Output is the complement of input
- Boolean expression: Y = Ā

## NAND Gate (Universal Gate)
- AND followed by NOT
- Can implement ANY logic function
- Boolean expression: Y = (A · B)̄

## NOR Gate (Universal Gate)
- OR followed by NOT
- Can implement ANY logic function
- Boolean expression: Y = (A + B)̄

## XOR Gate (Exclusive OR)
- Output is HIGH when inputs are DIFFERENT
- Boolean expression: Y = A ⊕ B`
      },
      {
        id: "cb-gates-2",
        type: "diagram",
        diagramType: "logic-gates",
        content: "Logic Gate Symbols and Truth Tables - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "AND, OR, NOT are basic gates",
      "NAND and NOR are universal gates",
      "XOR outputs HIGH for different inputs"
    ],
    references: [
      "MIT 6.004 - Combinational Logic",
      "Morris Mano - Digital Design"
    ]
  },
  {
    id: "lesson-3-2",
    moduleId: "mod-3",
    title: "Boolean Algebra Laws",
    slug: "boolean-algebra-laws",
    order: 2,
    estimatedMinutes: 50,
    content: [
      {
        id: "cb-bool-1",
        type: "text",
        content: `# Boolean Algebra Laws

**By Shashank Daksh** | shak_corp@zohomail.in

Boolean algebra provides the mathematical framework for digital logic design and optimization.

## Fundamental Laws

### Identity Laws
- A + 0 = A
- A · 1 = A

### Null Laws
- A + 1 = 1
- A · 0 = 0

### Idempotent Laws
- A + A = A
- A · A = A

### Complement Laws
- A + Ā = 1
- A · Ā = 0

### De Morgan's Theorems
- (A + B)̄ = Ā · B̄
- (A · B)̄ = Ā + B̄

De Morgan's theorems are essential for converting between AND-OR and NAND-NOR implementations.`
      },
      {
        id: "cb-bool-2",
        type: "info",
        content: "**Shashank Daksh Tip:** De Morgan's theorems are the most important laws for gate optimization. They allow converting any gate type to NAND-only or NOR-only implementations."
      }
    ],
    keyTakeaways: [
      "Boolean algebra has systematic laws for simplification",
      "De Morgan's theorems enable gate conversions",
      "Complement laws help eliminate redundant terms"
    ],
    references: [
      "MIT 6.004 - Boolean Algebra",
      "IIT NPTEL - Digital Circuits"
    ]
  },
  {
    id: "lesson-3-3",
    moduleId: "mod-3",
    title: "Karnaugh Maps (K-Maps)",
    slug: "karnaugh-maps",
    order: 3,
    estimatedMinutes: 60,
    content: [
      {
        id: "cb-kmap-1",
        type: "text",
        content: `# Karnaugh Maps (K-Maps)

**By Shashank Daksh** | shak_corp@zohomail.in

Karnaugh maps provide a visual method for minimizing Boolean expressions, especially useful for functions with 2-6 variables.

## K-Map Structure
- 2-variable: 2x2 grid (4 cells)
- 3-variable: 2x4 grid (8 cells)
- 4-variable: 4x4 grid (16 cells)

## Minimization Rules

1. **Group adjacent 1s** in powers of 2 (1, 2, 4, 8, ...)
2. **Groups can wrap around** edges
3. **Larger groups** = simpler expressions
4. Each group of 2^n cells eliminates n variables

## Example: 3-Variable K-Map

For F(A,B,C) = Σm(1,3,5,7):
- Grouping reveals F = C (all 1s occur when C=1)`
      },
      {
        id: "cb-kmap-2",
        type: "diagram",
        diagramType: "karnaugh-map",
        content: "4-Variable Karnaugh Map - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "K-maps visualize Boolean function minimization",
      "Groups must be powers of 2",
      "Larger groups yield simpler expressions"
    ],
    references: [
      "MIT 6.004 - Logic Synthesis",
      "Morris Mano - Digital Design"
    ]
  }
];

// =====================================================
// MODULE 4: COMBINATIONAL CIRCUITS LESSONS
// Author: Shashank Daksh
// =====================================================
const combinationalCircuitsLessons: Lesson[] = [
  {
    id: "lesson-4-1",
    moduleId: "mod-4",
    title: "Multiplexers and Decoders",
    slug: "mux-decoders",
    order: 1,
    estimatedMinutes: 50,
    content: [
      {
        id: "cb-mux-1",
        type: "text",
        content: `# Multiplexers and Decoders

**By Shashank Daksh** | shak_corp@zohomail.in

Multiplexers and decoders are essential combinational building blocks used throughout digital systems.

## Multiplexer (MUX)
A multiplexer selects one of many inputs based on select lines:
- **2:1 MUX**: 2 data inputs, 1 select line
- **4:1 MUX**: 4 data inputs, 2 select lines
- **8:1 MUX**: 8 data inputs, 3 select lines

Boolean expression for 2:1 MUX:
**Y = S̄·I₀ + S·I₁**

## Decoder
A decoder activates one output based on input code:
- **2-to-4 Decoder**: 2 inputs, 4 outputs
- **3-to-8 Decoder**: 3 inputs, 8 outputs

Applications:
- Memory address decoding
- Instruction decoding in CPUs
- Seven-segment display drivers`
      },
      {
        id: "cb-mux-2",
        type: "diagram",
        diagramType: "multiplexer",
        content: "4:1 Multiplexer Circuit - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "MUX selects one input from many",
      "Decoder activates one output from many",
      "Both are fundamental CPU components"
    ],
    references: [
      "MIT 6.004 - Building Blocks",
      "Patterson & Hennessy - Computer Organization"
    ]
  },
  {
    id: "lesson-4-2",
    moduleId: "mod-4",
    title: "Binary Adders",
    slug: "binary-adders",
    order: 2,
    estimatedMinutes: 55,
    content: [
      {
        id: "cb-adder-1",
        type: "text",
        content: `# Binary Adders

**By Shashank Daksh** | shak_corp@zohomail.in

Binary adders are the core of all arithmetic operations in computers.

## Half Adder
Adds two 1-bit numbers:
- **Sum = A ⊕ B** (XOR)
- **Carry = A · B** (AND)

## Full Adder
Adds two bits plus carry-in:
- **Sum = A ⊕ B ⊕ Cᵢₙ**
- **Cₒᵤₜ = A·B + Cᵢₙ·(A ⊕ B)**

## Ripple Carry Adder
Chain of full adders for n-bit addition:
- Simple but slow (O(n) delay)
- Carry must ripple through all stages

## Carry Lookahead Adder (CLA)
Faster addition using generate/propagate:
- **G = A · B** (generate)
- **P = A ⊕ B** (propagate)
- O(log n) delay complexity`
      },
      {
        id: "cb-adder-2",
        type: "diagram",
        diagramType: "full-adder",
        content: "Full Adder Circuit - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "Half adder: 2 inputs (no carry-in)",
      "Full adder: 3 inputs (with carry-in)",
      "CLA provides faster addition than ripple carry"
    ],
    references: [
      "MIT 6.004 - Arithmetic Circuits",
      "IIT NPTEL - Digital Circuits"
    ]
  },
  {
    id: "lesson-4-3",
    moduleId: "mod-4",
    title: "Arithmetic Logic Unit (ALU)",
    slug: "alu-design",
    order: 3,
    estimatedMinutes: 70,
    content: [
      {
        id: "cb-alu-1",
        type: "text",
        content: `# Arithmetic Logic Unit (ALU)

**By Shashank Daksh** | shak_corp@zohomail.in

The ALU is the computational heart of every CPU, performing both arithmetic and logical operations.

## ALU Components

1. **Arithmetic Unit**: Addition, subtraction, increment, decrement
2. **Logic Unit**: AND, OR, XOR, NOT
3. **Shifter**: Left shift, right shift, rotate
4. **Comparator**: Equal, less than, greater than

## ALU Control Signals

A typical 4-bit ALU uses control bits:
| Op[1:0] | Operation |
|---------|-----------|
| 00      | AND       |
| 01      | OR        |
| 10      | ADD       |
| 11      | SUB       |

## Status Flags

- **Zero (Z)**: Result is zero
- **Negative (N)**: Result is negative
- **Carry (C)**: Arithmetic carry/borrow
- **Overflow (V)**: Signed overflow occurred`
      },
      {
        id: "cb-alu-2",
        type: "diagram",
        diagramType: "alu-block",
        content: "4-bit ALU Block Diagram - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "ALU performs arithmetic and logical operations",
      "Control signals select the operation",
      "Status flags indicate result properties"
    ],
    references: [
      "MIT 6.004 - Building a Beta",
      "Patterson & Hennessy - Computer Organization"
    ]
  }
];

// =====================================================
// MODULE 5: SEQUENTIAL CIRCUITS & FSM LESSONS
// Author: Shashank Daksh
// =====================================================
const sequentialCircuitsLessons: Lesson[] = [
  {
    id: "lesson-5-1",
    moduleId: "mod-5",
    title: "Flip-Flops and Latches",
    slug: "flip-flops-latches",
    order: 1,
    estimatedMinutes: 55,
    content: [
      {
        id: "cb-ff-1",
        type: "text",
        content: `# Flip-Flops and Latches

**By Shashank Daksh** | shak_corp@zohomail.in

Sequential circuits use memory elements to store state. Latches and flip-flops are the fundamental storage elements.

## SR Latch
Basic memory element with Set and Reset inputs:
- S=1, R=0: Output Q=1 (Set)
- S=0, R=1: Output Q=0 (Reset)
- S=0, R=0: Hold previous state
- S=1, R=1: Invalid state (forbidden)

## D Latch
Data latch with enable:
- When Enable=1: Q follows D
- When Enable=0: Q holds previous value

## D Flip-Flop
Edge-triggered storage:
- Captures D on rising (or falling) edge of clock
- Eliminates transparency issues of latches
- Most common storage element in synchronous designs

## JK Flip-Flop
- J=K=1: Toggle output
- Eliminates invalid state of SR latch`
      },
      {
        id: "cb-ff-2",
        type: "diagram",
        diagramType: "d-flip-flop",
        content: "D Flip-Flop with Timing Diagram - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "Latches are level-sensitive, flip-flops are edge-triggered",
      "D flip-flop is the most common storage element",
      "Flip-flops enable synchronous sequential design"
    ],
    references: [
      "MIT 6.004 - Sequential Logic",
      "IIT NPTEL - Digital Circuits"
    ]
  },
  {
    id: "lesson-5-2",
    moduleId: "mod-5",
    title: "Registers and Counters",
    slug: "registers-counters",
    order: 2,
    estimatedMinutes: 50,
    content: [
      {
        id: "cb-reg-1",
        type: "text",
        content: `# Registers and Counters

**By Shashank Daksh** | shak_corp@zohomail.in

Registers and counters are multi-bit sequential circuits built from flip-flops.

## Parallel Register
- n flip-flops sharing a common clock
- All bits loaded simultaneously
- Used for temporary storage

## Shift Register
- Bits shift left or right on each clock
- Serial-to-parallel conversion
- Types: SISO, SIPO, PISO, PIPO

## Binary Counter
Counts in binary sequence:
- **Up Counter**: 0→1→2→3→...
- **Down Counter**: 3→2→1→0→...
- **Up/Down Counter**: Bidirectional

## Ring Counter
Circular shift register:
- Only one bit is HIGH at a time
- N states for N flip-flops
- Used for state machine implementation`
      },
      {
        id: "cb-reg-2",
        type: "diagram",
        diagramType: "shift-register",
        content: "4-bit Shift Register - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "Registers store multiple bits",
      "Shift registers move data serially",
      "Counters sequence through states"
    ],
    references: [
      "MIT 6.004 - Sequential Building Blocks",
      "Morris Mano - Digital Design"
    ]
  },
  {
    id: "lesson-5-3",
    moduleId: "mod-5",
    title: "Finite State Machines (FSM)",
    slug: "finite-state-machines",
    order: 3,
    estimatedMinutes: 65,
    content: [
      {
        id: "cb-fsm-1",
        type: "text",
        content: `# Finite State Machines (FSM)

**By Shashank Daksh** | shak_corp@zohomail.in

Finite State Machines are the foundation of all sequential control systems, from simple vending machines to complex CPUs.

## FSM Components

1. **States**: Distinct conditions of the system
2. **Inputs**: External signals affecting transitions
3. **Outputs**: Signals produced by the FSM
4. **Transitions**: Rules for moving between states

## FSM Types

### Moore Machine
- Outputs depend ONLY on current state
- More stable outputs
- May require more states

### Mealy Machine
- Outputs depend on state AND inputs
- Faster response to inputs
- Fewer states needed

## FSM Design Process

1. Define states and draw state diagram
2. Create state transition table
3. Assign binary codes to states
4. Derive next-state logic
5. Derive output logic
6. Implement with flip-flops and gates`
      },
      {
        id: "cb-fsm-2",
        type: "diagram",
        diagramType: "state-machine",
        content: "FSM State Diagram Example - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "Moore: outputs depend on state only",
      "Mealy: outputs depend on state and inputs",
      "FSMs model all sequential control logic"
    ],
    references: [
      "MIT 6.004 - FSM Design",
      "Vahid - Digital Design"
    ]
  }
];

// =====================================================
// MODULE 7: MEMORY HIERARCHY & CACHE LESSONS
// Author: Shashank Daksh
// =====================================================
const memoryHierarchyLessons: Lesson[] = [
  {
    id: "lesson-7-1",
    moduleId: "mod-7",
    title: "Memory Hierarchy Principles",
    slug: "memory-hierarchy-principles",
    order: 1,
    estimatedMinutes: 50,
    content: [
      {
        id: "cb-mem-1",
        type: "text",
        content: `# Memory Hierarchy Principles

**By Shashank Daksh** | shak_corp@zohomail.in

The memory hierarchy balances speed, capacity, and cost to create the illusion of large, fast memory.

## Memory Pyramid

From fastest/smallest to slowest/largest:
1. **Registers**: ~1 cycle, bytes
2. **L1 Cache**: ~4 cycles, 32-64 KB
3. **L2 Cache**: ~10 cycles, 256 KB - 1 MB
4. **L3 Cache**: ~40 cycles, 8-64 MB
5. **Main Memory (DRAM)**: ~100+ cycles, GB
6. **SSD/Disk**: ~10,000+ cycles, TB

## Locality Principles

### Temporal Locality
Recently accessed data is likely to be accessed again soon.

### Spatial Locality
Data near recently accessed data is likely to be accessed soon.

## Memory Technologies

- **SRAM**: Fast, expensive, used for caches
- **DRAM**: Slower, cheaper, used for main memory
- **Flash**: Non-volatile, used for storage`
      },
      {
        id: "cb-mem-2",
        type: "diagram",
        diagramType: "memory-hierarchy",
        content: "Memory Hierarchy Pyramid - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "Memory hierarchy trades off speed, size, and cost",
      "Temporal and spatial locality enable caching",
      "SRAM for caches, DRAM for main memory"
    ],
    references: [
      "MIT 6.004 - Memory Systems",
      "Patterson & Hennessy - Computer Organization"
    ]
  },
  {
    id: "lesson-7-2",
    moduleId: "mod-7",
    title: "Cache Design and Organization",
    slug: "cache-design",
    order: 2,
    estimatedMinutes: 65,
    content: [
      {
        id: "cb-cache-1",
        type: "text",
        content: `# Cache Design and Organization

**By Shashank Daksh** | shak_corp@zohomail.in

Cache design involves critical decisions about mapping, replacement, and write policies.

## Cache Mapping Strategies

### Direct-Mapped
- Each memory block maps to exactly one cache line
- Simple but high conflict miss rate
- Index = (Block Address) mod (Number of Lines)

### Fully Associative
- Block can go in ANY cache line
- Best hit rate but expensive
- Requires searching all tags

### Set-Associative (N-way)
- Compromise: N blocks per set
- 2-way, 4-way, 8-way common
- Index selects set, any line in set valid

## Replacement Policies
- **LRU (Least Recently Used)**: Best but complex
- **FIFO**: Simple queue
- **Random**: Surprisingly effective

## Write Policies
- **Write-Through**: Always update memory
- **Write-Back**: Update memory on eviction`
      },
      {
        id: "cb-cache-2",
        type: "diagram",
        diagramType: "cache-organization",
        content: "Set-Associative Cache Structure - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "Direct-mapped: simple but conflict-prone",
      "Set-associative: best trade-off",
      "Write-back improves performance"
    ],
    references: [
      "MIT 6.004 - Cache Design",
      "Hennessy & Patterson - Computer Architecture"
    ]
  },
  {
    id: "lesson-7-3",
    moduleId: "mod-7",
    title: "Virtual Memory",
    slug: "virtual-memory",
    order: 3,
    estimatedMinutes: 60,
    content: [
      {
        id: "cb-vm-1",
        type: "text",
        content: `# Virtual Memory

**By Shashank Daksh** | shak_corp@zohomail.in

Virtual memory provides isolation, protection, and the illusion of infinite memory.

## Virtual Memory Concepts

- **Virtual Address**: Address used by program
- **Physical Address**: Actual memory location
- **Page**: Fixed-size block (typically 4 KB)
- **Page Table**: Maps virtual to physical pages

## Address Translation

Virtual Address = VPN (Virtual Page Number) + Offset
Physical Address = PPN (Physical Page Number) + Offset

## Translation Lookaside Buffer (TLB)
- Cache for page table entries
- Critical for performance
- TLB miss triggers page table walk

## Page Faults
When page is not in memory:
1. Trap to OS
2. Find page on disk
3. Load into memory
4. Update page table
5. Resume program`
      },
      {
        id: "cb-vm-2",
        type: "diagram",
        diagramType: "virtual-memory",
        content: "Virtual Memory Address Translation - Created by Shashank Daksh"
      }
    ],
    keyTakeaways: [
      "Virtual memory provides protection and isolation",
      "TLB caches page table entries",
      "Page faults handled by operating system"
    ],
    references: [
      "MIT 6.004 - Virtual Memory",
      "Patterson & Hennessy - Computer Organization"
    ]
  }
];

// =====================================================
// MODULE 9: ADVANCED C PROGRAMMING LESSONS
// Author: Shashank Daksh
// =====================================================
const advancedCLessons: Lesson[] = [
  {
    id: "lesson-9-1",
    moduleId: "mod-9",
    title: "Pointers and Memory Management",
    slug: "pointers-memory",
    order: 1,
    estimatedMinutes: 70,
    content: [
      {
        id: "cb-ptr-1",
        type: "text",
        content: `# Pointers and Memory Management

**By Shashank Daksh** | shak_corp@zohomail.in

Pointers are the most powerful and dangerous feature of C. Mastering them is essential for systems programming.

## Pointer Fundamentals

- **Address-of operator (&)**: Gets memory address
- **Dereference operator (*)**: Accesses value at address
- **Pointer arithmetic**: Adds/subtracts based on type size`
      },
      {
        id: "cb-ptr-2",
        type: "code",
        title: "Pointer Operations Demo",
        code: `/**
 * Pointer Operations in C
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

#include <stdio.h>
#include <stdlib.h>

// Author: Shashank Daksh
void pointerBasics() {
    int x = 42;
    int *ptr = &x;  // ptr holds address of x
    
    // Shashank Daksh - Pointer demonstration
    printf("Value of x: %d\\n", x);
    printf("Address of x: %p\\n", (void*)&x);
    printf("Value of ptr: %p\\n", (void*)ptr);
    printf("Value at *ptr: %d\\n", *ptr);
    
    // Modify through pointer
    // Author: Shashank Daksh
    *ptr = 100;
    printf("x after *ptr = 100: %d\\n", x);
}

// Shashank Daksh - Pointer arithmetic
void pointerArithmetic() {
    int arr[] = {10, 20, 30, 40, 50};
    int *ptr = arr;  // Points to first element
    
    printf("\\n=== Pointer Arithmetic (Shashank Daksh) ===\\n");
    for (int i = 0; i < 5; i++) {
        printf("arr[%d] = %d, *(ptr+%d) = %d\\n", 
               i, arr[i], i, *(ptr + i));
    }
}

// Author: Shashank Daksh - Dynamic memory
void dynamicMemory() {
    printf("\\n=== Dynamic Memory (Shashank Daksh) ===\\n");
    
    // Allocate array of 5 integers
    // Shashank Daksh - Always check malloc return
    int *arr = (int*)malloc(5 * sizeof(int));
    if (arr == NULL) {
        printf("Memory allocation failed!\\n");
        return;
    }
    
    // Initialize
    for (int i = 0; i < 5; i++) {
        arr[i] = (i + 1) * 10;
    }
    
    // Print
    printf("Dynamic array: ");
    for (int i = 0; i < 5; i++) {
        printf("%d ", arr[i]);
    }
    printf("\\n");
    
    // Free memory - Shashank Daksh
    free(arr);
    arr = NULL;  // Avoid dangling pointer
}

int main() {
    // Shashank Daksh - Computer Science Mastery Course
    printf("========================================\\n");
    printf("  Pointers in C by Shashank Daksh\\n");
    printf("========================================\\n\\n");
    
    pointerBasics();
    pointerArithmetic();
    dynamicMemory();
    
    printf("\\n=== Complete ===\\n");
    printf("By Shashank Daksh - shak_corp@zohomail.in\\n");
    
    return 0;
}`,
        language: "c",
        output: `========================================
  Pointers in C by Shashank Daksh
========================================

Value of x: 42
Address of x: 0x7ffd5c8e9abc
Value of ptr: 0x7ffd5c8e9abc
Value at *ptr: 42
x after *ptr = 100: 100

=== Pointer Arithmetic (Shashank Daksh) ===
arr[0] = 10, *(ptr+0) = 10
arr[1] = 20, *(ptr+1) = 20
arr[2] = 30, *(ptr+2) = 30
arr[3] = 40, *(ptr+3) = 40
arr[4] = 50, *(ptr+4) = 50

=== Dynamic Memory (Shashank Daksh) ===
Dynamic array: 10 20 30 40 50

=== Complete ===
By Shashank Daksh - shak_corp@zohomail.in`
      }
    ],
    keyTakeaways: [
      "& gets address, * dereferences",
      "Pointer arithmetic is type-aware",
      "Always check malloc return and free memory"
    ],
    references: [
      "IIT NPTEL - Programming in C",
      "K&R - The C Programming Language"
    ]
  },
  {
    id: "lesson-9-2",
    moduleId: "mod-9",
    title: "Structures and Data Organization",
    slug: "structures-data",
    order: 2,
    estimatedMinutes: 55,
    content: [
      {
        id: "cb-struct-1",
        type: "text",
        content: `# Structures and Data Organization

**By Shashank Daksh** | shak_corp@zohomail.in

Structures allow grouping related data into custom types, essential for representing complex data.`
      },
      {
        id: "cb-struct-2",
        type: "code",
        title: "Structures in C",
        code: `/**
 * Structures in C
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

#include <stdio.h>
#include <string.h>

// Author: Shashank Daksh - Student structure
struct Student {
    int id;
    char name[50];
    float gpa;
};

// Shashank Daksh - typedef for cleaner syntax
typedef struct {
    int x;
    int y;
} Point;

// Author: Shashank Daksh - Function with struct pointer
void printStudent(const struct Student *s) {
    printf("ID: %d, Name: %s, GPA: %.2f\\n",
           s->id, s->name, s->gpa);
}

// Shashank Daksh - Calculate distance
float distance(Point *p1, Point *p2) {
    int dx = p2->x - p1->x;
    int dy = p2->y - p1->y;
    return (float)(dx*dx + dy*dy);
}

int main() {
    // Shashank Daksh - Course Demo
    printf("========================================\\n");
    printf("  Structures by Shashank Daksh\\n");
    printf("========================================\\n\\n");
    
    // Initialize struct - Shashank Daksh
    struct Student s1 = {101, "Alice", 3.85};
    printStudent(&s1);
    
    // Modify through pointer
    // Author: Shashank Daksh
    struct Student *ptr = &s1;
    ptr->gpa = 3.95;
    printf("After update: ");
    printStudent(&s1);
    
    // Point example - Shashank Daksh
    Point p1 = {0, 0};
    Point p2 = {3, 4};
    printf("\\nDistance squared: %.0f\\n", distance(&p1, &p2));
    
    printf("\\nBy Shashank Daksh - shak_corp@zohomail.in\\n");
    return 0;
}`,
        language: "c",
        output: `========================================
  Structures by Shashank Daksh
========================================

ID: 101, Name: Alice, GPA: 3.85
After update: ID: 101, Name: Alice, GPA: 3.95

Distance squared: 25

By Shashank Daksh - shak_corp@zohomail.in`
      }
    ],
    keyTakeaways: [
      "Structures group related data",
      "Arrow operator (->) for pointer access",
      "typedef creates cleaner type names"
    ],
    references: [
      "IIT NPTEL - Programming in C",
      "K&R - The C Programming Language"
    ]
  },
  {
    id: "lesson-9-3",
    moduleId: "mod-9",
    title: "File I/O Operations",
    slug: "file-io",
    order: 3,
    estimatedMinutes: 50,
    content: [
      {
        id: "cb-file-1",
        type: "text",
        content: `# File I/O Operations

**By Shashank Daksh** | shak_corp@zohomail.in

File I/O in C uses file pointers and stream functions for reading and writing data.`
      },
      {
        id: "cb-file-2",
        type: "code",
        title: "File Operations in C",
        code: `/**
 * File I/O in C
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

#include <stdio.h>
#include <stdlib.h>

int main() {
    // Shashank Daksh - File I/O Demo
    printf("========================================\\n");
    printf("  File I/O by Shashank Daksh\\n");
    printf("========================================\\n\\n");
    
    FILE *fp;
    
    // Write to file - Shashank Daksh
    fp = fopen("demo.txt", "w");
    if (fp == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    // Author: Shashank Daksh
    fprintf(fp, "Line 1: Hello from Shashank Daksh\\n");
    fprintf(fp, "Line 2: Learning C File I/O\\n");
    fprintf(fp, "Line 3: shak_corp@zohomail.in\\n");
    fclose(fp);
    printf("File written successfully!\\n\\n");
    
    // Read from file - Shashank Daksh
    fp = fopen("demo.txt", "r");
    if (fp == NULL) {
        printf("Error opening file!\\n");
        return 1;
    }
    
    // Author: Shashank Daksh
    printf("File contents:\\n");
    char buffer[100];
    while (fgets(buffer, 100, fp) != NULL) {
        printf("  %s", buffer);
    }
    fclose(fp);
    
    printf("\\n=== Complete ===\\n");
    printf("By Shashank Daksh - shak_corp@zohomail.in\\n");
    
    return 0;
}`,
        language: "c",
        output: `========================================
  File I/O by Shashank Daksh
========================================

File written successfully!

File contents:
  Line 1: Hello from Shashank Daksh
  Line 2: Learning C File I/O
  Line 3: shak_corp@zohomail.in

=== Complete ===
By Shashank Daksh - shak_corp@zohomail.in`
      }
    ],
    keyTakeaways: [
      "Always check if file opened successfully",
      "Use appropriate mode (r, w, a, rb, wb)",
      "Always close files when done"
    ],
    references: [
      "IIT NPTEL - Programming in C",
      "K&R - The C Programming Language"
    ]
  }
];

// =====================================================
// MODULE 12: ADVANCED SYSTEMS PROGRAMMING LESSONS
// Author: Shashank Daksh
// =====================================================
const advancedSystemsLessons: Lesson[] = [
  {
    id: "lesson-12-1",
    moduleId: "mod-12",
    title: "Template Metaprogramming",
    slug: "template-metaprogramming",
    order: 1,
    estimatedMinutes: 75,
    content: [
      {
        id: "cb-tmp-1",
        type: "text",
        content: `# Template Metaprogramming

**By Shashank Daksh** | shak_corp@zohomail.in

Template metaprogramming enables compile-time computation and type manipulation, creating highly optimized and type-safe code.`
      },
      {
        id: "cb-tmp-2",
        type: "code",
        title: "Template Metaprogramming Examples",
        code: `/**
 * Template Metaprogramming in C++
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

#include <iostream>
#include <type_traits>
using namespace std;

// =============================================
// Author: Shashank Daksh
// Compile-time Factorial
// =============================================
template<int N>
struct Factorial {
    // Shashank Daksh - Recursive template
    static constexpr int value = N * Factorial<N-1>::value;
};

template<>
struct Factorial<0> {
    // Author: Shashank Daksh - Base case
    static constexpr int value = 1;
};

// =============================================
// Shashank Daksh - SFINAE Example
// =============================================
template<typename T>
typename enable_if<is_integral<T>::value, T>::type
doubleValue(T x) {
    // Author: Shashank Daksh - Integer version
    cout << "[Integer] ";
    return x * 2;
}

template<typename T>
typename enable_if<is_floating_point<T>::value, T>::type
doubleValue(T x) {
    // Shashank Daksh - Float version
    cout << "[Float] ";
    return x * 2.0;
}

// =============================================
// Author: Shashank Daksh - Variadic Templates
// =============================================
void print() {
    // Shashank Daksh - Base case
    cout << endl;
}

template<typename T, typename... Args>
void print(T first, Args... args) {
    // Author: Shashank Daksh - Recursive unpack
    cout << first << " ";
    print(args...);
}

int main() {
    // Shashank Daksh - Computer Science Mastery
    cout << "========================================" << endl;
    cout << "  Template Metaprogramming" << endl;
    cout << "  By Shashank Daksh" << endl;
    cout << "========================================" << endl << endl;
    
    // Compile-time factorial
    // Author: Shashank Daksh
    cout << "Factorial<5> = " << Factorial<5>::value << endl;
    cout << "Factorial<10> = " << Factorial<10>::value << endl;
    
    // SFINAE overloading - Shashank Daksh
    cout << "\\ndoubleValue(5): " << doubleValue(5) << endl;
    cout << "doubleValue(3.14): " << doubleValue(3.14) << endl;
    
    // Variadic templates - Author: Shashank Daksh
    cout << "\\nVariadic print: ";
    print(1, "hello", 3.14, "world");
    
    cout << "\\nBy Shashank Daksh - shak_corp@zohomail.in" << endl;
    return 0;
}`,
        language: "cpp",
        output: `========================================
  Template Metaprogramming
  By Shashank Daksh
========================================

Factorial<5> = 120
Factorial<10> = 3628800

doubleValue(5): [Integer] 10
doubleValue(3.14): [Float] 6.28

Variadic print: 1 hello 3.14 world

By Shashank Daksh - shak_corp@zohomail.in`
      }
    ],
    keyTakeaways: [
      "Templates enable compile-time computation",
      "SFINAE allows function overloading based on types",
      "Variadic templates handle variable arguments"
    ],
    references: [
      "IIT NPTEL - Programming in Modern C++",
      "C++ Templates: The Complete Guide"
    ]
  },
  {
    id: "lesson-12-2",
    moduleId: "mod-12",
    title: "Concurrency and Multithreading",
    slug: "concurrency-multithreading",
    order: 2,
    estimatedMinutes: 80,
    content: [
      {
        id: "cb-conc-1",
        type: "text",
        content: `# Concurrency and Multithreading

**By Shashank Daksh** | shak_corp@zohomail.in

Modern C++ provides powerful concurrency primitives for writing thread-safe, parallel code.`
      },
      {
        id: "cb-conc-2",
        type: "code",
        title: "C++ Concurrency Examples",
        code: `/**
 * Concurrency in Modern C++
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

#include <iostream>
#include <thread>
#include <mutex>
#include <atomic>
#include <future>
using namespace std;

// =============================================
// Author: Shashank Daksh
// Thread-safe counter with mutex
// =============================================
class Counter {
    int value = 0;
    mutex mtx;
    
public:
    // Shashank Daksh - Thread-safe increment
    void increment() {
        lock_guard<mutex> lock(mtx);
        ++value;
    }
    
    int get() const { return value; }
};

// =============================================
// Shashank Daksh - Atomic counter
// =============================================
atomic<int> atomicCounter(0);

void incrementAtomic(int times) {
    // Author: Shashank Daksh
    for (int i = 0; i < times; ++i) {
        atomicCounter.fetch_add(1);
    }
}

// =============================================
// Author: Shashank Daksh - Async computation
// =============================================
int computeSum(int n) {
    // Shashank Daksh - Heavy computation
    int sum = 0;
    for (int i = 1; i <= n; ++i) {
        sum += i;
    }
    return sum;
}

int main() {
    // Shashank Daksh - Computer Science Mastery
    cout << "========================================" << endl;
    cout << "  C++ Concurrency" << endl;
    cout << "  By Shashank Daksh" << endl;
    cout << "========================================" << endl << endl;
    
    // Mutex example - Author: Shashank Daksh
    Counter counter;
    thread t1([&]() {
        for (int i = 0; i < 1000; ++i) counter.increment();
    });
    thread t2([&]() {
        for (int i = 0; i < 1000; ++i) counter.increment();
    });
    t1.join();
    t2.join();
    cout << "Mutex counter: " << counter.get() << endl;
    
    // Atomic example - Shashank Daksh
    thread t3(incrementAtomic, 1000);
    thread t4(incrementAtomic, 1000);
    t3.join();
    t4.join();
    cout << "Atomic counter: " << atomicCounter << endl;
    
    // Async example - Author: Shashank Daksh
    auto future1 = async(launch::async, computeSum, 100);
    auto future2 = async(launch::async, computeSum, 200);
    cout << "Sum 1-100: " << future1.get() << endl;
    cout << "Sum 1-200: " << future2.get() << endl;
    
    cout << "\\nBy Shashank Daksh - shak_corp@zohomail.in" << endl;
    return 0;
}`,
        language: "cpp",
        output: `========================================
  C++ Concurrency
  By Shashank Daksh
========================================

Mutex counter: 2000
Atomic counter: 2000
Sum 1-100: 5050
Sum 1-200: 20100

By Shashank Daksh - shak_corp@zohomail.in`
      }
    ],
    keyTakeaways: [
      "mutex protects shared data from races",
      "atomic provides lock-free synchronization",
      "async enables parallel computation"
    ],
    references: [
      "IIT NPTEL - Programming in Modern C++",
      "C++ Concurrency in Action"
    ]
  },
  {
    id: "lesson-12-3",
    moduleId: "mod-12",
    title: "RAII and Resource Management",
    slug: "raii-resource-management",
    order: 3,
    estimatedMinutes: 55,
    content: [
      {
        id: "cb-raii-1",
        type: "text",
        content: `# RAII and Resource Management

**By Shashank Daksh** | shak_corp@zohomail.in

RAII (Resource Acquisition Is Initialization) is the core C++ idiom for safe resource management.`
      },
      {
        id: "cb-raii-2",
        type: "code",
        title: "RAII Examples",
        code: `/**
 * RAII in C++
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

#include <iostream>
#include <fstream>
#include <mutex>
using namespace std;

// =============================================
// Author: Shashank Daksh
// Custom RAII File Wrapper
// =============================================
class FileHandle {
    FILE* file;
    
public:
    // Shashank Daksh - Acquire resource in constructor
    explicit FileHandle(const char* name, const char* mode) 
        : file(fopen(name, mode)) {
        if (!file) throw runtime_error("Failed to open file");
        cout << "File opened" << endl;
    }
    
    // Author: Shashank Daksh - Release in destructor
    ~FileHandle() {
        if (file) {
            fclose(file);
            cout << "File closed" << endl;
        }
    }
    
    // Shashank Daksh - No copying
    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;
    
    FILE* get() { return file; }
};

// =============================================
// Shashank Daksh - Scoped lock example
// =============================================
mutex globalMutex;

void safePrint(const string& msg) {
    // Author: Shashank Daksh - RAII lock
    lock_guard<mutex> lock(globalMutex);
    cout << "Message: " << msg << endl;
}

int main() {
    // Shashank Daksh - Computer Science Mastery
    cout << "========================================" << endl;
    cout << "  RAII by Shashank Daksh" << endl;
    cout << "========================================" << endl << endl;
    
    try {
        // File handle demo - Author: Shashank Daksh
        FileHandle fh("test.txt", "w");
        fprintf(fh.get(), "Written by Shashank Daksh\\n");
        // File automatically closed when fh goes out of scope
    } catch (const exception& e) {
        cout << "Error: " << e.what() << endl;
    }
    
    // Lock demo - Shashank Daksh
    safePrint("Hello from RAII");
    safePrint("Lock released automatically");
    
    cout << "\\nBy Shashank Daksh - shak_corp@zohomail.in" << endl;
    return 0;
}`,
        language: "cpp",
        output: `========================================
  RAII by Shashank Daksh
========================================

File opened
File closed
Message: Hello from RAII
Message: Lock released automatically

By Shashank Daksh - shak_corp@zohomail.in`
      }
    ],
    keyTakeaways: [
      "RAII ties resource lifetime to object lifetime",
      "Destructor automatically releases resources",
      "Prevents leaks even with exceptions"
    ],
    references: [
      "IIT NPTEL - Programming in Modern C++",
      "Effective Modern C++ by Scott Meyers"
    ]
  }
];

// Combine all lessons
export const allLessons: Lesson[] = [
  ...binaryLogicLessons,
  ...transistorsCmosLessons,
  ...logicGatesLessons,
  ...combinationalCircuitsLessons,
  ...sequentialCircuitsLessons,
  ...cpuArchitectureLessons,
  ...memoryHierarchyLessons,
  ...cProgrammingLessons,
  ...advancedCLessons,
  ...cppOopLessons,
  ...modernCppLessons,
  ...advancedSystemsLessons,
];

// Get lessons for a specific module
export function getLessonsByModule(moduleId: string): Lesson[] {
  return allLessons.filter(lesson => lesson.moduleId === moduleId);
}

// Get a specific lesson by ID
export function getLessonById(lessonId: string): Lesson | undefined {
  return allLessons.find(lesson => lesson.id === lessonId);
}

// Get module by ID
export function getModuleById(moduleId: string): Module | undefined {
  return modules.find(module => module.id === moduleId);
}

// Get module by slug
export function getModuleBySlug(slug: string): Module | undefined {
  return modules.find(module => module.slug === slug);
}

// Export author information
export { authorInfo, courseMetadata } from "@shared/schema";
