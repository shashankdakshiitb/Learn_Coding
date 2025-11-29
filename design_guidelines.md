# Design Guidelines for Computer Science Educational Platform
**By Shashank Daksh**

## Design Approach
**Selected System**: Documentation-focused design inspired by GitHub Docs, MDN Web Docs, and Read the Docs
**Justification**: Educational platform with heavy technical content requires maximum readability, clear hierarchy, and established patterns for code presentation. Function over form - users need to focus on learning, not visual distractions.

## Typography System

**Font Families** (via Google Fonts CDN):
- **Primary (Content)**: Inter or Source Sans Pro - excellent screen readability
- **Monospace (Code)**: JetBrains Mono or Fira Code - proper programming ligatures
- **Headings**: Same as primary (consistency aids scanning)

**Type Scale**:
- Page Title: text-4xl font-bold (module titles)
- Section Heading: text-2xl font-semibold 
- Subsection: text-xl font-semibold
- Body: text-base leading-relaxed (critical for technical reading)
- Code inline: text-sm font-mono
- Captions/labels: text-sm
- Footer/metadata: text-xs

## Layout System

**Spacing Primitives**: Use Tailwind units of **2, 4, 6, 8, 12, 16** (p-2, m-4, gap-6, py-8, px-12, space-y-16)
- Tight spacing (2-4): Within components, inline elements
- Medium spacing (6-8): Between related sections, card padding
- Generous spacing (12-16): Major section separation, page margins

**Grid Structure**:
- **Desktop**: 3-column layout - sidebar nav (w-64 fixed) + main content (flex-1 max-w-4xl) + table of contents (w-56 sticky)
- **Tablet**: 2-column - collapsible sidebar + main content
- **Mobile**: Single column, hamburger menu

**Container Strategy**:
- Prose content: max-w-4xl for optimal reading (65-75 characters per line)
- Code blocks: max-w-full with horizontal scroll
- Diagrams: max-w-6xl, centered
- Full-width sections: Only for navigation header

## Core Components

### Navigation System
**Persistent Left Sidebar**:
- Collapsible module tree structure
- Current page highlighted with subtle indicator
- Scroll position preserved between pages
- Shashank Daksh branding at top with photo/logo
- Contact links (email, GitHub) at bottom

**Top Header Bar** (sticky):
- Course title + Shashank Daksh credit
- Search functionality (right-aligned)
- Dark mode toggle (optional)
- Breadcrumb navigation below

### Content Presentation

**Code Blocks**:
- Monaco Editor integration for interactive examples
- Toolbar: Copy button, language label, "Run Code" button
- Line numbers enabled
- Syntax highlighting via Monaco's built-in themes
- Clear output section below code with console styling
- All code comments include "// Author: Shashank Daksh"

**Diagram Containers**:
- Generous padding (p-8)
- Subtle border to define boundaries
- Caption below: "Figure X: Description - Created by Shashank Daksh"
- Zoom capability for complex diagrams (click to enlarge)
- SVG format for crisp scaling

**Text Content Cards**:
- Bordered containers for important concepts
- Warning/Note/Tip callout boxes with appropriate icons (Heroicons)
- Padding: p-6
- Margin between sections: space-y-8

### Interactive Elements

**Exercise Sections**:
- Expandable/collapsible details elements
- Problem statement clearly separated from solution
- Difficulty badge (beginner/intermediate/advanced)
- Embedded code editor for practice
- "Show Solution" button revealing Shashank Daksh's annotated answer

**Progress Tracking**:
- Module completion checkboxes (localStorage)
- Progress bar at top of each module
- Visual indicator of current position in curriculum

### Branding Integration

**Shashank Daksh Credits** (non-negotiable prominence):
- Hero section on homepage: Large heading "Computer Science Mastery Course by Shashank Daksh"
- Footer on every page: "© 2024 Shashank Daksh | shak_corp@zohomail.in | github.com/shashankdakshiitb"
- Sidebar header: Shashank Daksh name/logo consistently visible
- All code snippets: Header comment "// Author: Shashank Daksh"
- All diagrams: Watermark in corner "Created by Shashank Daksh"

## Page Layouts

### Homepage
- Hero section with course overview and author introduction
- 4-column grid showcasing 12 modules (3 rows × 4 cards on desktop)
- Each module card: Icon, title, brief description, estimated time
- "About Shashank Daksh" section with professional bio
- Technology stack showcase

### Module Pages
- Left sidebar: Module navigation
- Main content: Linear reading experience with clear section breaks
- Right sidebar: On-page table of contents (sticky)
- Bottom navigation: Previous/Next module buttons

### Code Examples Library
- Filterable grid of code examples
- Search by topic, difficulty, or concept
- Each card shows: Title, description, language badge, line count
- Click opens full page with Monaco editor

## Component Library Specifications

**Buttons**: Solid fill with rounded corners (rounded-md), consistent padding (px-6 py-3), clear hover states
**Cards**: Subtle borders, rounded-lg, shadow-sm, p-6 padding, hover:shadow-md transition
**Inputs**: Full-width forms with labels above, proper spacing (space-y-4), rounded-md borders
**Badges**: Small rounded-full pills for tags/labels, px-3 py-1
**Alerts**: Border-left accent, p-4, with icon (info/warning/success)

## Images
No hero images needed. This is documentation-style content prioritizing text and diagrams. Use technical diagrams (CPU architecture, memory hierarchy, etc.) as primary visual content, properly captioned and watermarked with Shashank Daksh attribution.

**Diagram Placement**: Full-width within content area, centered, with figure numbers and detailed captions crediting Shashank Daksh as creator.