# React Simple Calculator (Next.js Edition)

A modern, responsive calculator app built with Next.js, TypeScript, and Tailwind CSS. This project is a complete rewrite of a classic React calculator, now featuring a live operation display, calculation history, and a beautiful, dark-themed UI.

## Features

- **Live Operation Display:** See the full operation you are typing (e.g., `266 + 9`) above the result.
- **Calculation History:** All previous operations and results are shown in a sidebar.
- **Clickable History:** Click any previous result to reuse it instantly in a new calculation.
- **Robust Arithmetic:** Handles edge cases, negative numbers, and floating-point precision using `big.js`.
- **Responsive & Accessible:** Works great on desktop and mobile, with accessible color contrast and keyboard navigation.

## Getting Started

### Prerequisites
- [pnpm](https://pnpm.io/) (recommended)
- Node.js 18+

### Installation

```bash
pnpm install
```

### Running the Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to use the calculator.

## Tech Stack
- [Next.js](https://nextjs.org/) (App Router, Turbopack)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [big.js](https://github.com/MikeMcl/big.js/) (for precise arithmetic)

## Project Structure
- `src/app/page.tsx` — Main calculator page
- `src/components/calculator/` — Calculator UI components
- `src/lib/logic.ts` — Calculator logic and state management

## Customization
Feel free to fork or clone this project and adapt the UI, logic, or features to your needs!

## License
MIT
