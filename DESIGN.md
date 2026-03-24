# Design System Specification: The Botanical Editorial

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Greenhouse"**

This design system rejects the sterile, boxy nature of traditional apps in favor of a lush, editorial experience. We are not building a utility tool; we are cultivating a digital garden. The goal is to move beyond the "template" look by utilizing **intentional asymmetry**, **layered tonal depth**, and **high-contrast typography scales**. 

The interface should feel like a premium botanical journal—authoritative yet organic. We achieve this by breaking the rigid grid: images should overlap container edges, and typography should breathe with generous whitespace, creating a sense of growth and natural movement.

---

## 2. Color & Atmospheric Surface
The palette is rooted in the earth, using deep forest greens for authority and terracotta for warmth.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
Boundaries must be defined solely through:
- **Background Color Shifts:** Use `surface-container-low` sections sitting on a `surface` background.
- **Tonal Transitions:** Use soft gradients or subtle shifts in container tiers to denote change.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, recycled paper. 
- **Base Layer:** `surface` (#fcf9f4)
- **Secondary Sections:** `surface-container-low` (#f6f3ee)
- **Interactive Cards:** `surface-container-lowest` (#ffffff) for maximum "pop" or `surface-container` (#f0ede9) for integration.

### The "Glass & Gradient" Rule
To elevate the "out-of-the-box" feel, use **Glassmorphism** for floating elements (e.g., bottom navigation or sticky headers). Apply `surface` at 80% opacity with a `24px` backdrop blur. 
**Signature Textures:** For primary CTAs and Hero sections, use a subtle linear gradient from `primary` (#173809) to `primary_container` (#2d4f1e) at a 135-degree angle to provide "visual soul."

---

### 3. Typography: Editorial Authority
The type system pairs the intellectual weight of a serif with the modern clarity of a geometric sans-serif.

| Level | Token | Font Family | Size | Intent |
| :--- | :--- | :--- | :--- | :--- |
| **Display** | `display-lg` | Noto Serif | 3.5rem | Large-scale inspiration/Hero |
| **Headline** | `headline-md` | Noto Serif | 1.75rem | Section headers/Storytelling |
| **Title** | `title-lg` | Plus Jakarta Sans | 1.375rem | Component headers/Navigation |
| **Body** | `body-lg` | Plus Jakarta Sans | 1rem | Long-form reading/Descriptions |
| **Label** | `label-md` | Plus Jakarta Sans | 0.75rem | Metadata/Captions |

**Usage Note:** Use `display` styles with tighter tracking (-2%) and `headline` styles with generous leading (1.4) to mimic high-end print magazines.

---

## 4. Elevation & Depth: Tonal Layering
Traditional drop shadows are often too "digital." We use **Tonal Layering** to create a soft, natural lift.

- **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. The contrast in lightness creates depth without structural lines.
- **Ambient Shadows:** For floating modals, use an extra-diffused shadow: `0 20px 40px rgba(28, 28, 25, 0.06)`. The shadow is tinted with the `on-surface` color to mimic natural light.
- **The "Ghost Border" Fallback:** If a border is required for accessibility, use `outline-variant` (#c3c8bb) at **15% opacity**. Never use 100% opaque borders.

---

## 5. Components: Organic Primitives

### Buttons & Interaction
- **Primary:** Gradient fill (`primary` to `primary_container`), `full` (9999px) roundedness. 
- **Secondary:** `secondary` (#94492d) text on `secondary_fixed` (#ffdbcf) background. 
- **Tertiary:** No background, `primary` text with a `label-md` style.
- **Rounding:** All interactive components (cards, inputs) must use `lg` (1rem) or `xl` (1.5rem) corner radii to maintain the "welcoming" feel.

### Cards & Content Lists
- **Rule:** Forbid the use of divider lines. 
- **Implementation:** Separate list items using `spacing-4` (1.4rem) of vertical whitespace. Group related content using `surface-container` backgrounds with `md` (0.75rem) rounded corners.

### Custom "Community" Components
- **The Seed Card:** A specialized card for plant sharing. Uses a `surface-container-high` background with an offset image that breaks the top-left corner.
- **Growth Timeline:** A vertical stepper using `tertiary` (#293417) for completed states and `outline-variant` for upcoming, connected by a soft `3.5rem` spacing gap rather than a solid line.

---

## 6. Do's and Don'ts

### Do:
- **Use Intentional Asymmetry:** Align text to the left but allow images to float or overlap containers.
- **Respect the Breath:** Use the `spacing-10` (3.5rem) or `spacing-12` (4rem) tokens for section margins to avoid a "cluttered" feeling.
- **Layer with Tones:** Always check if a background color shift can replace a border.

### Don't:
- **Don't use pure black:** Use `on-background` (#1c1c19) for text to keep the "earthy" feel.
- **Don't use hard corners:** Avoid the `none` or `sm` roundedness tokens unless for technical data grids.
- **Don't use standard dividers:** If you feel the need for a line, try a `spacing-px` gap with a background color change instead.

### Accessibility Note:
While we use soft tones, ensure all `on-primary` and `on-secondary` text meets WCAG AA contrast ratios against their respective containers. Use `on-surface-variant` (#43493e) sparingly for non-critical metadata.