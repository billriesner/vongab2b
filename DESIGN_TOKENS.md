# Design Token System

## Overview
This project uses a comprehensive design token system built on CSS variables and Tailwind CSS for consistent styling across all components.

## Token Categories

### Colors
- **Brand Colors**
  - `--color-accent`: #33BECC (Primary brand color)
  - `--color-navy`: #303E55 (Secondary brand color)
  - `--color-text`: #0A0A0A (Primary text color)
  - `--color-bg`: #FFFFFF (Background color)
  - `--color-muted`: #F7F7F7 (Muted backgrounds)

- **Status Colors**
  - `--color-success`: #10B981
  - `--color-warning`: #F59E0B
  - `--color-error`: #EF4444

### Spacing (8px Grid System)
- `--spacing-xs`: 8px
- `--spacing-sm`: 16px
- `--spacing-md`: 24px
- `--spacing-lg`: 32px
- `--spacing-xl`: 40px
- `--spacing-2xl`: 48px
- `--spacing-3xl`: 64px
- `--spacing-4xl`: 80px
- `--spacing-5xl`: 96px

### Radius
- `--radius`: 16px (Default border radius)
- `--radius-lg`: 20px (Large border radius)

### Shadow
- `--shadow-soft`: 0 4px 12px rgba(0, 0, 0, 0.08) (Soft elevation shadow)

## Component System

### Button
- **Variants**: primary, secondary, ghost, outline
- **Sizes**: default, sm, lg, icon
- Uses design tokens for colors, spacing, and radius

### Card
- Consistent border radius and shadow
- Uses design tokens for background and border colors

### Badge
- **Variants**: default, secondary, outline, success, warning, error
- Uses design tokens for colors and radius

### Section
- **Props**: eyebrow, title, description, children
- Built-in responsive typography using design tokens
- Consistent spacing using the 8px grid system

### CTAGroup
- **Props**: primary, secondary (with label, href, dataEvent)
- **Orientation**: horizontal, vertical
- Uses Button component with design tokens

## Usage Guidelines

1. **Never use inline hex codes** - Always use design tokens
2. **Use semantic color names** - `text-navy` instead of `text-[#303E55]`
3. **Follow the 8px grid** - Use spacing tokens for consistent layout
4. **Use component variants** - Prefer `variant="primary"` over custom classes

## Tailwind Integration

All tokens are mapped to Tailwind classes:
- `bg-accent` → `background-color: var(--color-accent)`
- `text-navy` → `color: var(--color-navy)`
- `rounded-md` → `border-radius: var(--radius)`
- `shadow-sm` → `box-shadow: var(--shadow-soft)`

This ensures consistency across the entire design system while maintaining the flexibility of Tailwind CSS.
