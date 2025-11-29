/**
 * Technical Diagram Components
 * Author: Shashank Daksh
 * Email: shak_corp@zohomail.in
 * GitHub: https://github.com/shashankdakshiitb
 */

import { cn } from "@/lib/utils";

interface DiagramProps {
  type: string;
  caption: string;
  className?: string;
}

// CPU Block Diagram - Shows main components of a CPU
function CPUBlockDiagram() {
  return (
    <svg viewBox="0 0 800 500" className="w-full h-auto">
      <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="7"
          refX="9"
          refY="3.5"
          orient="auto"
        >
          <polygon
            points="0 0, 10 3.5, 0 7"
            fill="currentColor"
            className="text-muted-foreground"
          />
        </marker>
      </defs>

      {/* Background */}
      <rect
        x="50"
        y="30"
        width="700"
        height="440"
        rx="8"
        className="fill-card stroke-border"
        strokeWidth="2"
      />

      {/* Title */}
      <text
        x="400"
        y="60"
        textAnchor="middle"
        className="fill-foreground text-lg font-bold"
      >
        CPU Architecture - By Shashank Daksh
      </text>

      {/* Control Unit */}
      <rect
        x="100"
        y="100"
        width="200"
        height="150"
        rx="4"
        className="fill-chart-1/10 stroke-chart-1"
        strokeWidth="2"
      />
      <text
        x="200"
        y="130"
        textAnchor="middle"
        className="fill-chart-1 text-sm font-semibold"
      >
        Control Unit
      </text>
      <text
        x="200"
        y="155"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Instruction Decoder
      </text>
      <text
        x="200"
        y="175"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Timing & Control
      </text>
      <text
        x="200"
        y="195"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Microprogramming
      </text>
      <text
        x="200"
        y="215"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Control Signals
      </text>

      {/* ALU */}
      <rect
        x="100"
        y="280"
        width="200"
        height="150"
        rx="4"
        className="fill-chart-2/10 stroke-chart-2"
        strokeWidth="2"
      />
      <text
        x="200"
        y="310"
        textAnchor="middle"
        className="fill-chart-2 text-sm font-semibold"
      >
        Arithmetic Logic Unit
      </text>
      <text
        x="200"
        y="340"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Arithmetic Operations
      </text>
      <text
        x="200"
        y="360"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Logical Operations
      </text>
      <text
        x="200"
        y="380"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Shift Operations
      </text>
      <text
        x="200"
        y="400"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Status Flags
      </text>

      {/* Registers */}
      <rect
        x="350"
        y="100"
        width="200"
        height="330"
        rx="4"
        className="fill-chart-3/10 stroke-chart-3"
        strokeWidth="2"
      />
      <text
        x="450"
        y="130"
        textAnchor="middle"
        className="fill-chart-3 text-sm font-semibold"
      >
        Register File
      </text>

      {/* Individual registers */}
      {["PC", "IR", "MAR", "MDR", "ACC", "R0-R15"].map((reg, i) => (
        <g key={reg}>
          <rect
            x="370"
            y={155 + i * 42}
            width="160"
            height="32"
            rx="2"
            className="fill-background stroke-chart-3/50"
            strokeWidth="1"
          />
          <text
            x="450"
            y={176 + i * 42}
            textAnchor="middle"
            className="fill-foreground text-xs font-mono"
          >
            {reg}
          </text>
        </g>
      ))}

      {/* Memory */}
      <rect
        x="600"
        y="100"
        width="120"
        height="330"
        rx="4"
        className="fill-chart-4/10 stroke-chart-4"
        strokeWidth="2"
      />
      <text
        x="660"
        y="130"
        textAnchor="middle"
        className="fill-chart-4 text-sm font-semibold"
      >
        Memory
      </text>
      <text
        x="660"
        y="160"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Instructions
      </text>
      <text
        x="660"
        y="250"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Data
      </text>
      <text
        x="660"
        y="340"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Stack
      </text>

      {/* Arrows - Control to ALU */}
      <line
        x1="200"
        y1="250"
        x2="200"
        y2="275"
        className="stroke-muted-foreground"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      {/* Arrows - Registers to Memory */}
      <line
        x1="550"
        y1="265"
        x2="595"
        y2="265"
        className="stroke-muted-foreground"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      {/* Arrows - ALU to Registers */}
      <line
        x1="300"
        y1="355"
        x2="345"
        y2="355"
        className="stroke-muted-foreground"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      {/* Arrows - Control to Registers */}
      <line
        x1="300"
        y1="175"
        x2="345"
        y2="175"
        className="stroke-muted-foreground"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      {/* Watermark */}
      <text
        x="400"
        y="485"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Created by Shashank Daksh | github.com/shashankdakshiitb
      </text>
    </svg>
  );
}

// ALU Architecture Diagram
function ALUArchitectureDiagram() {
  return (
    <svg viewBox="0 0 700 450" className="w-full h-auto">
      {/* Background */}
      <rect
        x="20"
        y="20"
        width="660"
        height="410"
        rx="8"
        className="fill-card stroke-border"
        strokeWidth="2"
      />

      {/* Title */}
      <text
        x="350"
        y="50"
        textAnchor="middle"
        className="fill-foreground text-lg font-bold"
      >
        32-bit ALU Architecture - By Shashank Daksh
      </text>

      {/* Input A */}
      <rect
        x="50"
        y="100"
        width="100"
        height="60"
        rx="4"
        className="fill-chart-1/10 stroke-chart-1"
        strokeWidth="2"
      />
      <text
        x="100"
        y="135"
        textAnchor="middle"
        className="fill-chart-1 text-sm font-semibold"
      >
        Input A
      </text>
      <text
        x="100"
        y="150"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        32 bits
      </text>

      {/* Input B */}
      <rect
        x="50"
        y="200"
        width="100"
        height="60"
        rx="4"
        className="fill-chart-2/10 stroke-chart-2"
        strokeWidth="2"
      />
      <text
        x="100"
        y="235"
        textAnchor="middle"
        className="fill-chart-2 text-sm font-semibold"
      >
        Input B
      </text>
      <text
        x="100"
        y="250"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        32 bits
      </text>

      {/* ALU Core */}
      <polygon
        points="250,80 450,80 500,200 450,320 250,320 200,200"
        className="fill-chart-3/10 stroke-chart-3"
        strokeWidth="2"
      />
      <text
        x="350"
        y="170"
        textAnchor="middle"
        className="fill-chart-3 text-lg font-bold"
      >
        ALU
      </text>
      <text
        x="350"
        y="195"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        AND | OR | ADD | SUB
      </text>
      <text
        x="350"
        y="215"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        SLT | NOR | XOR
      </text>
      <text
        x="350"
        y="235"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Shift Operations
      </text>

      {/* Control Input */}
      <rect
        x="300"
        y="340"
        width="100"
        height="50"
        rx="4"
        className="fill-chart-4/10 stroke-chart-4"
        strokeWidth="2"
      />
      <text
        x="350"
        y="365"
        textAnchor="middle"
        className="fill-chart-4 text-sm font-semibold"
      >
        ALUOp
      </text>
      <text
        x="350"
        y="380"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        3 bits
      </text>

      {/* Output */}
      <rect
        x="550"
        y="170"
        width="100"
        height="60"
        rx="4"
        className="fill-chart-5/10 stroke-chart-5"
        strokeWidth="2"
      />
      <text
        x="600"
        y="205"
        textAnchor="middle"
        className="fill-chart-5 text-sm font-semibold"
      >
        Result
      </text>
      <text
        x="600"
        y="220"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        32 bits
      </text>

      {/* Status Flags */}
      <rect
        x="550"
        y="260"
        width="100"
        height="80"
        rx="4"
        className="fill-muted/30 stroke-border"
        strokeWidth="2"
      />
      <text
        x="600"
        y="285"
        textAnchor="middle"
        className="fill-foreground text-sm font-semibold"
      >
        Flags
      </text>
      <text
        x="600"
        y="305"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Z N C V
      </text>
      <text
        x="600"
        y="325"
        textAnchor="middle"
        className="fill-muted-foreground text-[10px]"
      >
        Zero Neg Carry Ovf
      </text>

      {/* Arrows */}
      <line
        x1="150"
        y1="130"
        x2="200"
        y2="170"
        className="stroke-muted-foreground"
        strokeWidth="2"
      />
      <line
        x1="150"
        y1="230"
        x2="200"
        y2="200"
        className="stroke-muted-foreground"
        strokeWidth="2"
      />
      <line
        x1="500"
        y1="200"
        x2="545"
        y2="200"
        className="stroke-muted-foreground"
        strokeWidth="2"
      />
      <line
        x1="350"
        y1="320"
        x2="350"
        y2="335"
        className="stroke-muted-foreground"
        strokeWidth="2"
      />

      {/* Watermark */}
      <text
        x="350"
        y="420"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Created by Shashank Daksh | github.com/shashankdakshiitb
      </text>
    </svg>
  );
}

// Memory Hierarchy Diagram
function MemoryHierarchyDiagram() {
  return (
    <svg viewBox="0 0 600 450" className="w-full h-auto">
      {/* Background */}
      <rect
        x="20"
        y="20"
        width="560"
        height="410"
        rx="8"
        className="fill-card stroke-border"
        strokeWidth="2"
      />

      {/* Title */}
      <text
        x="300"
        y="50"
        textAnchor="middle"
        className="fill-foreground text-lg font-bold"
      >
        Memory Hierarchy - By Shashank Daksh
      </text>

      {/* Registers (Top) */}
      <polygon
        points="300,80 370,130 230,130"
        className="fill-chart-1/20 stroke-chart-1"
        strokeWidth="2"
      />
      <text
        x="300"
        y="115"
        textAnchor="middle"
        className="fill-chart-1 text-xs font-semibold"
      >
        Registers
      </text>

      {/* L1 Cache */}
      <polygon
        points="300,130 400,180 200,180"
        className="fill-chart-2/20 stroke-chart-2"
        strokeWidth="2"
      />
      <text
        x="300"
        y="165"
        textAnchor="middle"
        className="fill-chart-2 text-xs font-semibold"
      >
        L1 Cache (32KB)
      </text>

      {/* L2 Cache */}
      <polygon
        points="300,180 430,230 170,230"
        className="fill-chart-3/20 stroke-chart-3"
        strokeWidth="2"
      />
      <text
        x="300"
        y="215"
        textAnchor="middle"
        className="fill-chart-3 text-xs font-semibold"
      >
        L2 Cache (256KB)
      </text>

      {/* L3 Cache */}
      <polygon
        points="300,230 460,280 140,280"
        className="fill-chart-4/20 stroke-chart-4"
        strokeWidth="2"
      />
      <text
        x="300"
        y="265"
        textAnchor="middle"
        className="fill-chart-4 text-xs font-semibold"
      >
        L3 Cache (8MB)
      </text>

      {/* Main Memory */}
      <polygon
        points="300,280 490,330 110,330"
        className="fill-chart-5/20 stroke-chart-5"
        strokeWidth="2"
      />
      <text
        x="300"
        y="315"
        textAnchor="middle"
        className="fill-chart-5 text-xs font-semibold"
      >
        Main Memory / RAM (16GB)
      </text>

      {/* Secondary Storage */}
      <polygon
        points="300,330 520,380 80,380"
        className="fill-muted/30 stroke-border"
        strokeWidth="2"
      />
      <text
        x="300"
        y="365"
        textAnchor="middle"
        className="fill-foreground text-xs font-semibold"
      >
        Secondary Storage / SSD (1TB)
      </text>

      {/* Labels on right */}
      <text
        x="480"
        y="115"
        className="fill-muted-foreground text-[10px]"
      >
        Fastest
      </text>
      <text
        x="480"
        y="135"
        className="fill-muted-foreground text-[10px]"
      >
        Smallest
      </text>
      <text
        x="480"
        y="155"
        className="fill-muted-foreground text-[10px]"
      >
        Most Expensive
      </text>

      <text
        x="480"
        y="345"
        className="fill-muted-foreground text-[10px]"
      >
        Slowest
      </text>
      <text
        x="480"
        y="365"
        className="fill-muted-foreground text-[10px]"
      >
        Largest
      </text>
      <text
        x="480"
        y="385"
        className="fill-muted-foreground text-[10px]"
      >
        Cheapest
      </text>

      {/* Arrow indicating speed/size tradeoff */}
      <line
        x1="540"
        y1="100"
        x2="540"
        y2="390"
        className="stroke-muted-foreground"
        strokeWidth="1"
        strokeDasharray="4"
      />
      <polygon
        points="540,100 535,115 545,115"
        className="fill-muted-foreground"
      />
      <polygon
        points="540,390 535,375 545,375"
        className="fill-muted-foreground"
      />

      {/* Watermark */}
      <text
        x="300"
        y="420"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Created by Shashank Daksh | github.com/shashankdakshiitb
      </text>
    </svg>
  );
}

// Logic Gates Diagram
function LogicGatesDiagram() {
  return (
    <svg viewBox="0 0 700 400" className="w-full h-auto">
      {/* Background */}
      <rect
        x="20"
        y="20"
        width="660"
        height="360"
        rx="8"
        className="fill-card stroke-border"
        strokeWidth="2"
      />

      {/* Title */}
      <text
        x="350"
        y="50"
        textAnchor="middle"
        className="fill-foreground text-lg font-bold"
      >
        Basic Logic Gates - By Shashank Daksh
      </text>

      {/* AND Gate */}
      <g transform="translate(60, 80)">
        <path
          d="M0,0 L40,0 Q80,0 80,30 Q80,60 40,60 L0,60 Z"
          className="fill-chart-1/10 stroke-chart-1"
          strokeWidth="2"
        />
        <text
          x="40"
          y="35"
          textAnchor="middle"
          className="fill-chart-1 text-xs font-semibold"
        >
          AND
        </text>
        <text
          x="40"
          y="85"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          Y = A · B
        </text>
      </g>

      {/* OR Gate */}
      <g transform="translate(180, 80)">
        <path
          d="M0,0 Q20,30 0,60 Q40,60 80,30 Q40,0 0,0"
          className="fill-chart-2/10 stroke-chart-2"
          strokeWidth="2"
        />
        <text
          x="35"
          y="35"
          textAnchor="middle"
          className="fill-chart-2 text-xs font-semibold"
        >
          OR
        </text>
        <text
          x="40"
          y="85"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          Y = A + B
        </text>
      </g>

      {/* NOT Gate */}
      <g transform="translate(300, 80)">
        <polygon
          points="0,0 60,30 0,60"
          className="fill-chart-3/10 stroke-chart-3"
          strokeWidth="2"
        />
        <circle
          cx="68"
          cy="30"
          r="8"
          className="fill-card stroke-chart-3"
          strokeWidth="2"
        />
        <text
          x="25"
          y="35"
          textAnchor="middle"
          className="fill-chart-3 text-xs font-semibold"
        >
          NOT
        </text>
        <text
          x="35"
          y="85"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          Y = A'
        </text>
      </g>

      {/* NAND Gate */}
      <g transform="translate(420, 80)">
        <path
          d="M0,0 L40,0 Q80,0 80,30 Q80,60 40,60 L0,60 Z"
          className="fill-chart-4/10 stroke-chart-4"
          strokeWidth="2"
        />
        <circle
          cx="88"
          cy="30"
          r="8"
          className="fill-card stroke-chart-4"
          strokeWidth="2"
        />
        <text
          x="40"
          y="35"
          textAnchor="middle"
          className="fill-chart-4 text-xs font-semibold"
        >
          NAND
        </text>
        <text
          x="45"
          y="85"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          Y = (A·B)'
        </text>
      </g>

      {/* NOR Gate */}
      <g transform="translate(550, 80)">
        <path
          d="M0,0 Q20,30 0,60 Q40,60 80,30 Q40,0 0,0"
          className="fill-chart-5/10 stroke-chart-5"
          strokeWidth="2"
        />
        <circle
          cx="88"
          cy="30"
          r="8"
          className="fill-card stroke-chart-5"
          strokeWidth="2"
        />
        <text
          x="35"
          y="35"
          textAnchor="middle"
          className="fill-chart-5 text-xs font-semibold"
        >
          NOR
        </text>
        <text
          x="45"
          y="85"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          Y = (A+B)'
        </text>
      </g>

      {/* XOR Gate */}
      <g transform="translate(180, 220)">
        <path
          d="M10,0 Q30,30 10,60"
          className="fill-none stroke-chart-1"
          strokeWidth="2"
        />
        <path
          d="M0,0 Q20,30 0,60 Q40,60 80,30 Q40,0 0,0"
          className="fill-chart-1/10 stroke-chart-1"
          strokeWidth="2"
        />
        <text
          x="40"
          y="35"
          textAnchor="middle"
          className="fill-chart-1 text-xs font-semibold"
        >
          XOR
        </text>
        <text
          x="45"
          y="85"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          Y = A ⊕ B
        </text>
      </g>

      {/* XNOR Gate */}
      <g transform="translate(420, 220)">
        <path
          d="M10,0 Q30,30 10,60"
          className="fill-none stroke-chart-2"
          strokeWidth="2"
        />
        <path
          d="M0,0 Q20,30 0,60 Q40,60 80,30 Q40,0 0,0"
          className="fill-chart-2/10 stroke-chart-2"
          strokeWidth="2"
        />
        <circle
          cx="88"
          cy="30"
          r="8"
          className="fill-card stroke-chart-2"
          strokeWidth="2"
        />
        <text
          x="40"
          y="35"
          textAnchor="middle"
          className="fill-chart-2 text-xs font-semibold"
        >
          XNOR
        </text>
        <text
          x="45"
          y="85"
          textAnchor="middle"
          className="fill-muted-foreground text-[10px]"
        >
          Y = (A⊕B)'
        </text>
      </g>

      {/* Watermark */}
      <text
        x="350"
        y="365"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Created by Shashank Daksh | github.com/shashankdakshiitb
      </text>
    </svg>
  );
}

// Fetch-Decode-Execute Cycle Diagram
function FetchDecodeExecuteDiagram() {
  return (
    <svg viewBox="0 0 600 350" className="w-full h-auto">
      {/* Background */}
      <rect
        x="20"
        y="20"
        width="560"
        height="310"
        rx="8"
        className="fill-card stroke-border"
        strokeWidth="2"
      />

      {/* Title */}
      <text
        x="300"
        y="50"
        textAnchor="middle"
        className="fill-foreground text-lg font-bold"
      >
        Fetch-Decode-Execute Cycle - By Shashank Daksh
      </text>

      {/* Fetch */}
      <circle
        cx="150"
        cy="150"
        r="60"
        className="fill-chart-1/10 stroke-chart-1"
        strokeWidth="2"
      />
      <text
        x="150"
        y="145"
        textAnchor="middle"
        className="fill-chart-1 text-sm font-bold"
      >
        FETCH
      </text>
      <text
        x="150"
        y="165"
        textAnchor="middle"
        className="fill-muted-foreground text-[10px]"
      >
        Get instruction
      </text>
      <text
        x="150"
        y="178"
        textAnchor="middle"
        className="fill-muted-foreground text-[10px]"
      >
        from memory
      </text>

      {/* Decode */}
      <circle
        cx="300"
        cy="150"
        r="60"
        className="fill-chart-2/10 stroke-chart-2"
        strokeWidth="2"
      />
      <text
        x="300"
        y="145"
        textAnchor="middle"
        className="fill-chart-2 text-sm font-bold"
      >
        DECODE
      </text>
      <text
        x="300"
        y="165"
        textAnchor="middle"
        className="fill-muted-foreground text-[10px]"
      >
        Interpret the
      </text>
      <text
        x="300"
        y="178"
        textAnchor="middle"
        className="fill-muted-foreground text-[10px]"
      >
        instruction
      </text>

      {/* Execute */}
      <circle
        cx="450"
        cy="150"
        r="60"
        className="fill-chart-3/10 stroke-chart-3"
        strokeWidth="2"
      />
      <text
        x="450"
        y="145"
        textAnchor="middle"
        className="fill-chart-3 text-sm font-bold"
      >
        EXECUTE
      </text>
      <text
        x="450"
        y="165"
        textAnchor="middle"
        className="fill-muted-foreground text-[10px]"
      >
        Perform the
      </text>
      <text
        x="450"
        y="178"
        textAnchor="middle"
        className="fill-muted-foreground text-[10px]"
      >
        operation
      </text>

      {/* Arrows */}
      <path
        d="M210,150 L240,150"
        className="stroke-muted-foreground"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />
      <path
        d="M360,150 L390,150"
        className="stroke-muted-foreground"
        strokeWidth="2"
        markerEnd="url(#arrowhead)"
      />

      {/* Return arrow */}
      <path
        d="M450,210 C450,280 150,280 150,210"
        className="fill-none stroke-muted-foreground"
        strokeWidth="2"
        strokeDasharray="4"
        markerEnd="url(#arrowhead)"
      />
      <text
        x="300"
        y="270"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Repeat
      </text>

      {/* Watermark */}
      <text
        x="300"
        y="315"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Created by Shashank Daksh | github.com/shashankdakshiitb
      </text>
    </svg>
  );
}

// Pipeline Stages Diagram
function PipelineDiagram() {
  return (
    <svg viewBox="0 0 700 300" className="w-full h-auto">
      {/* Background */}
      <rect
        x="20"
        y="20"
        width="660"
        height="260"
        rx="8"
        className="fill-card stroke-border"
        strokeWidth="2"
      />

      {/* Title */}
      <text
        x="350"
        y="50"
        textAnchor="middle"
        className="fill-foreground text-lg font-bold"
      >
        5-Stage Pipeline - By Shashank Daksh
      </text>

      {/* Stages */}
      {[
        { name: "IF", desc: "Instruction Fetch", color: "chart-1" },
        { name: "ID", desc: "Instruction Decode", color: "chart-2" },
        { name: "EX", desc: "Execute", color: "chart-3" },
        { name: "MEM", desc: "Memory Access", color: "chart-4" },
        { name: "WB", desc: "Write Back", color: "chart-5" },
      ].map((stage, i) => (
        <g key={stage.name} transform={`translate(${60 + i * 120}, 80)`}>
          <rect
            width="100"
            height="120"
            rx="4"
            className={`fill-${stage.color}/10 stroke-${stage.color}`}
            strokeWidth="2"
            style={{
              fill: `hsl(var(--${stage.color}) / 0.1)`,
              stroke: `hsl(var(--${stage.color}))`,
            }}
          />
          <text
            x="50"
            y="40"
            textAnchor="middle"
            className={`fill-foreground text-lg font-bold`}
          >
            {stage.name}
          </text>
          <text
            x="50"
            y="70"
            textAnchor="middle"
            className="fill-muted-foreground text-[10px]"
          >
            {stage.desc.split(" ")[0]}
          </text>
          <text
            x="50"
            y="85"
            textAnchor="middle"
            className="fill-muted-foreground text-[10px]"
          >
            {stage.desc.split(" ")[1]}
          </text>
          {i < 4 && (
            <line
              x1="100"
              y1="60"
              x2="120"
              y2="60"
              className="stroke-muted-foreground"
              strokeWidth="2"
            />
          )}
        </g>
      ))}

      {/* Clock cycles label */}
      <text
        x="350"
        y="230"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Each stage takes 1 clock cycle | Instructions overlap in pipeline
      </text>

      {/* Watermark */}
      <text
        x="350"
        y="265"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Created by Shashank Daksh | github.com/shashankdakshiitb
      </text>
    </svg>
  );
}

// Data Structure diagram for UML
function DataStructureDiagram() {
  return (
    <svg viewBox="0 0 600 350" className="w-full h-auto">
      {/* Background */}
      <rect
        x="20"
        y="20"
        width="560"
        height="310"
        rx="8"
        className="fill-card stroke-border"
        strokeWidth="2"
      />

      {/* Title */}
      <text
        x="300"
        y="50"
        textAnchor="middle"
        className="fill-foreground text-lg font-bold"
      >
        Class Diagram (OOP) - By Shashank Daksh
      </text>

      {/* Base Class */}
      <g transform="translate(200, 80)">
        <rect
          width="200"
          height="100"
          rx="4"
          className="fill-chart-1/10 stroke-chart-1"
          strokeWidth="2"
        />
        <rect
          width="200"
          height="25"
          rx="4"
          className="fill-chart-1/20 stroke-chart-1"
          strokeWidth="2"
        />
        <text
          x="100"
          y="18"
          textAnchor="middle"
          className="fill-chart-1 text-xs font-bold"
        >
          Student
        </text>
        <text
          x="10"
          y="45"
          className="fill-muted-foreground text-[10px] font-mono"
        >
          - name: string
        </text>
        <text
          x="10"
          y="58"
          className="fill-muted-foreground text-[10px] font-mono"
        >
          - rollNumber: int
        </text>
        <text
          x="10"
          y="75"
          className="fill-muted-foreground text-[10px] font-mono"
        >
          + getName(): string
        </text>
        <text
          x="10"
          y="88"
          className="fill-muted-foreground text-[10px] font-mono"
        >
          + display(): void
        </text>
      </g>

      {/* Derived Class 1 */}
      <g transform="translate(80, 220)">
        <rect
          width="160"
          height="80"
          rx="4"
          className="fill-chart-2/10 stroke-chart-2"
          strokeWidth="2"
        />
        <rect
          width="160"
          height="25"
          rx="4"
          className="fill-chart-2/20 stroke-chart-2"
          strokeWidth="2"
        />
        <text
          x="80"
          y="18"
          textAnchor="middle"
          className="fill-chart-2 text-xs font-bold"
        >
          Graduate
        </text>
        <text
          x="10"
          y="45"
          className="fill-muted-foreground text-[10px] font-mono"
        >
          - thesis: string
        </text>
        <text
          x="10"
          y="65"
          className="fill-muted-foreground text-[10px] font-mono"
        >
          + getThesis(): string
        </text>
      </g>

      {/* Derived Class 2 */}
      <g transform="translate(360, 220)">
        <rect
          width="160"
          height="80"
          rx="4"
          className="fill-chart-3/10 stroke-chart-3"
          strokeWidth="2"
        />
        <rect
          width="160"
          height="25"
          rx="4"
          className="fill-chart-3/20 stroke-chart-3"
          strokeWidth="2"
        />
        <text
          x="80"
          y="18"
          textAnchor="middle"
          className="fill-chart-3 text-xs font-bold"
        >
          Undergraduate
        </text>
        <text
          x="10"
          y="45"
          className="fill-muted-foreground text-[10px] font-mono"
        >
          - major: string
        </text>
        <text
          x="10"
          y="65"
          className="fill-muted-foreground text-[10px] font-mono"
        >
          + getMajor(): string
        </text>
      </g>

      {/* Inheritance arrows */}
      <line
        x1="160"
        y1="220"
        x2="250"
        y2="180"
        className="stroke-muted-foreground"
        strokeWidth="2"
      />
      <line
        x1="440"
        y1="220"
        x2="350"
        y2="180"
        className="stroke-muted-foreground"
        strokeWidth="2"
      />

      {/* Triangle arrows for inheritance */}
      <polygon
        points="250,180 240,195 260,195"
        className="fill-card stroke-muted-foreground"
        strokeWidth="2"
      />
      <polygon
        points="350,180 340,195 360,195"
        className="fill-card stroke-muted-foreground"
        strokeWidth="2"
      />

      {/* Watermark */}
      <text
        x="300"
        y="315"
        textAnchor="middle"
        className="fill-muted-foreground text-xs"
      >
        Created by Shashank Daksh | github.com/shashankdakshiitb
      </text>
    </svg>
  );
}

const diagramComponents: Record<string, () => JSX.Element> = {
  "cpu-block-diagram": CPUBlockDiagram,
  "cpu-block": CPUBlockDiagram,
  "alu-architecture": ALUArchitectureDiagram,
  "1-bit-alu-slice": ALUArchitectureDiagram,
  "memory-hierarchy": MemoryHierarchyDiagram,
  "logic-gate": LogicGatesDiagram,
  "number-systems-overview": LogicGatesDiagram,
  "bits-bytes-visualization": MemoryHierarchyDiagram,
  "binary-addition": ALUArchitectureDiagram,
  "fetch-decode-execute": FetchDecodeExecuteDiagram,
  flowchart: FetchDecodeExecuteDiagram,
  pipeline: PipelineDiagram,
  "data-structure": DataStructureDiagram,
  "class-uml-diagram": DataStructureDiagram,
  circuit: ALUArchitectureDiagram,
  datapath: CPUBlockDiagram,
};

export function Diagram({ type, caption, className }: DiagramProps) {
  const DiagramComponent = diagramComponents[type] || CPUBlockDiagram;

  return (
    <figure className={cn("my-8", className)}>
      <div className="rounded-lg border bg-card p-4 overflow-hidden">
        <DiagramComponent />
      </div>
      <figcaption className="mt-3 text-center text-sm text-muted-foreground">
        {caption}
      </figcaption>
    </figure>
  );
}
