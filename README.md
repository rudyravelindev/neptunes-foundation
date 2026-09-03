# 🎨 Global Design System: Haiti Non-Profit Website

This document defines the foundational styles, design tokens, and components for our platform. Adhering to this system ensures cultural resonance, modern web standards, and strict adherence to international accessibility guidelines (WCAG AA).

---

## 1. Color Palette (Heritage & Dignity System)

We use specific hex configurations to mirror traditional imagery while projecting institutional trust to international donors.

| Color | Role | Hex Code | Applied System Property | Intent & Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Primary Blue** | Core Brand | `#0B5C8A` | `--color-primary` | Navigation headers, main banners, trust statements |
| **Accent Gold** | High Action | `#F4B400` | `--color-accent` | Reserved strictly for the primary **"Donate"** button |
| **Dark Charcoal** | Typography | `#1F2937` | `--color-text-main` | Primary body reading text, interface structures |
| **Light Slate** | Canvas | `#F8FAFC` | `--color-bg-main` | Full website body background layout layer |

---

## 2. Typography Hierarchy (Inter & Roboto Font Pairing)

We use **The Modern & Trustworthy Choice** typography pairing. It is a clean, modern combination used by many global humanitarian organizations to establish authority and clear communication.

*   **Headings Typeface:** `Inter` (Bold or Semi-Bold)
    *   *Why it works:* High legibility for short, impactful text like titles.
*   **Body & Paragraph Text Typeface:** `Roboto` (Regular)
    *   *Why it works:* Feels familiar, open, and effortless to read in long-form paragraphs.

### 📐 Scaling Guidelines
*   **Heading 1 (Hero Elements):** `32px` | Bold (700) | Line-height: `1.2` | Font: `Inter` | Color: `#0B5C8A`
*   **Heading 2 (Section Anchors):** `24px` | Semi-Bold (600) | Line-height: `1.3` | Font: `Inter` | Color: `#0B5C8A`
*   **Heading 3 (Card Titles):** `20px` | Semi-Bold (600) | Line-height: `1.4` | Font: `Inter` | Color: `#1F2937`
*   **Body Text (Core Paragraphs):** `16px` | Regular (400) | Line-height: `1.6` | Font: `Roboto` | Color: `#1F2937`
*   **Small/Muted Labels:** `14px` | Regular (400) | Line-height: `1.5` | Font: `Roboto` | Color: `#4B5563`

---

## 3. Spacing Grid (8px Token Scale)

To avoid misaligned margins and erratic padding, maintain layout increments cleanly on our 8px mathematical rhythm:

*   `--space-xs`: **8px** (Icon spacing, inner badge padding)
*   `--space-s`: **16px** (Component paragraph gap, mobile list spacing)
*   `--space-m`: **24px** (Desktop grid layouts, internal container boundaries)
*   `--space-l`: **48px** (Section transitions, global block-to-block margins)
*   `--space-xl`: **64px** (Hero header block boundaries)

---

## 4. Component Rules

### Button Styles
Buttons must adhere strictly to safe contrast rules. **Do not use white text over the Accent Gold background.**

1.  **Primary Action Button (`.btn-primary`):** Background `#F4B400` | Text `#1F2937` (Charcoal). Used exclusively for critical mission goals (e.g., "Donate Now").
2.  **Secondary Action Button (`.btn-secondary`):** Background `#0B5C8A` | Text `#FFFFFF` (White). Used for exploration steps (e.g., "Our Projects").
3.  **Outline Interface Button (`.btn-outline`):** Background `transparent` | Border/Text `#0B5C8A`. Used for tertiary actions.

### Reusable Content Cards
Cards container modules sit beautifully against our global Light Slate layout canvas:

*   **Background Material:** Pure White (`#FFFFFF`)
*   **Border Specification:** `1px solid #E2E8F0`
*   **Corner Radius:** `12px` (Smooth, modern curves)
*   **Internal Padding:** Var `--space-m` (24px padding all around)
*   **Elevation Drop Shadow:** `0 4px 6px -1px rgba(0, 0, 0, 0.05)` (Subtle separation)

---

## 5. CSS Core Variables Implementation

Developers should map these foundational design variables straight into the main design stylesheet file:

```css
/* Google Fonts Import */
@import url('https://googleapis.com');

:root {
  /* Font Family Definitions */
  --font-headings: 'Inter', system-ui, sans-serif;
  --font-body: 'Roboto', system-ui, sans-serif;

  /* Colors */
  --color-primary: #0B5C8A;
  --color-accent: #F4B400;
  --color-text-main: #1F2937;
  --color-text-muted: #4B5563;
  --color-bg-main: #F8FAFC;
  --color-bg-card: #FFFFFF;
  --color-border: #E2E8F0;

  /* Spacing Definitions */
  --space-xs: 8px;
  --space-s: 16px;
  --space-m: 24px;
  --space-l: 48px;
  --space-xl: 64px;
}
```
