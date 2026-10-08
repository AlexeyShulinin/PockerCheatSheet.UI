# Reusable React Project Guidelines

Use this file as implementation requirements for future projects. Replace the product brief with the next project's goals while keeping the applicable architecture, styling, and code-quality standards.

## Product brief

Build a polished, responsive application that helps users learn and practice the product's core concepts. For a poker-learning app, teach standard five-card poker hand rankings through interactive practice and clear examples.

## Stack and architecture

- Use React and TypeScript with strict, type-safe patterns.
- Use Fluent UI React components for interactive controls and React Router for navigation with meaningful, directly accessible URLs and a fallback route.
- Keep `src/App.tsx` at the source root. It owns app-level providers and route declarations; do not move it into `src/components/`.
- Give every other `.tsx` component its own folder and `index.ts` barrel that exports it. Put reusable UI components in `src/components/` and routed page components in `src/views/`.
- Keep each component's state and behavior in focused custom hooks under `src/hooks/` when that logic is reusable or substantial.
- Keep domain types, product data, and pure logic in appropriately named `src/types/`, `src/data/`, and `src/utils/` modules.
- Avoid duplicating domain logic or UI copy. Preserve relevant state across routes where practical.

## Styling and responsive design

- Give every component and page a colocated CSS file and import it from its `.tsx` file. Keep `App.css` beside `App.tsx` for app-root styles only.
- Keep design tokens, resets, and genuinely global styles in `src/index.css`. Do not use a shared stylesheet for component or page selectors.
- Use a clean, polished visual design and an Apple-like system font stack, including `-apple-system`, `BlinkMacSystemFont`, and `system-ui`; do not require downloading Apple fonts.
- Design for mobile screens intentionally: support narrow viewports, touch targets, safe-area insets, and layouts without horizontal overflow.
- Keep key visual examples, such as cards and diagrams, large and legible. Apply project styles consistently to Fluent UI controls.
- Include accessible labels, semantic HTML, visible keyboard focus, and reduced-motion support when using animation.

## Constants and copy

- Put user-facing copy, accessibility labels, navigation labels, route paths, and UI symbols in constants rather than embedding them in JSX.
- Split constants by concern into separate files under `src/constants/`. Name constant files, exported constant objects, and their members in PascalCase; for example, `HandNames.RoyalFlush` in `HandNames.ts`.
- Do not use `as const`; define explicit types when inference is insufficient.
- Keep product-specific structured data, such as hand descriptions and example cards, in data modules rather than component markup.

## Code style and ESLint

- Use double quotes for JavaScript, TypeScript, and JSX strings.
- Indent with four spaces and do not use trailing commas.
- Do not use `any` or `as const`.
- Omit `.ts`, `.tsx`, `.js`, and `.jsx` extensions from relative source imports. CSS imports may include the `.css` extension.
- End every source file with a newline.
- Configure ESLint to enforce these conventions, including extensionless relative source imports, final newlines, and rejecting explicit `any` and const assertions.
- Follow the existing formatter and lint configuration; avoid adding tools unless the project requires them.

Example ESLint rules:

```js
rules: {
    indent: ["error", 4],
    "comma-dangle": ["error", "never"],
    quotes: ["error", "double"],
    "jsx-quotes": ["error", "prefer-double"]
}
```

## Implementation and delivery

- Inspect the repository and follow its existing conventions before making changes.
- Implement complete user flows, including loading, empty, selected, success, and error states where applicable.
- Keep TypeScript types explicit at component and domain boundaries; avoid unnecessary type assertions.
- Update documentation when it directly supports the change.
- Validate changes using the repository's existing lint, build, and targeted test commands.
- Keep changes focused and preserve unrelated user work.

## Example poker-learning feature set

For a poker-combinations learning app, include:

- A practice route that deals five distinct cards, asks the user to identify the hand, explains the answer, and tracks accuracy and streaks.
- A hand-ranking guide with all ten standard poker hands, descriptions, example cards, and five-card odds.
- An “All hands” route with every ranking and example in a compact, minimal view.
- Correct five-card hand classification, including ace-high and ace-low straights and royal flushes.
