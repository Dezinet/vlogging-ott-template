# 🤝 Contributing to DezinetVerse

Thank you for considering contributing to the **DezinetVerse** vlogging template! We aim for a high-quality, premium visual experience and performance.

## 🚀 Getting Started

1.  **Clone the Repo:** `git clone https://github.com/dezinet/vlogging_template.git`
2.  **Install Dependencies:** `npm install`
3.  **Run Dev Server:** `npm run dev`
4.  **Visit:** `http://localhost:3000`

## 🎨 Code Style & Design Rules

To maintain the **Premium Aesthetic**, please follow these rules:

-   **Glassmorphism:** Use the `.glass` utility for cards and overlays. Avoid solid backgrounds for UI elements unless necessary.
-   **Typography:** Use `Outfit` for headings and `Plus Jakarta Sans` for body text.
-   **CSS Variables:** Always use variables from `globals.css` (e.g., `var(--accent-primary)`) instead of hardcoded hex values.
-   **Responsive First:** Ensure all components are tested on both mobile (360px+) and wide desktop screens.

## 🛠 Branching & Pull Requests

1.  **Create a Branch:** `feat/feature-name` or `fix/bug-name`.
2.  **Atomic Commits:** Keep commits focused on a single change.
3.  **Verify:** Ensure no console errors or hydration warnings.
4.  **Submit PR:** Link the relevant issue and provide screenshots for UI changes.

## 🧪 Testing Considerations

-   **Hydration:** Since we use `suppressHydrationWarning` on some components, verify that dynamic values don't cause layout flicker.
-   **Performance:** Check Lighthouse scores for image-heavy pages. Use `next/image` where possible.
