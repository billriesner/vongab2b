# VONGA — Web Style Guide

## Philosophy
Design for belonging, not conversion.  
Every page should invite a conversation and make tech disappear behind emotion.

---

## Core Structure
Each layout must reflect the three brand pillars:

1. **Human Connection** → warmth and authenticity in imagery.  
2. **Effortless Technology** → simplicity, clarity, ease of navigation.  
3. **Lasting Belonging** → continuity, storytelling, subtle motion that feels alive.

---

## Color, Type, Motion
- All colors, spacing, radii, shadows, and z-index are defined in `/styles/tokens.json`.  
- Typography: Inter / Helvetica Now.  
- Motion: `cubic-bezier(0.25,0.1,0.25,1.0)` with durations 150–600 ms.  
- Section reveals fade and rise subtly — never aggressive.

---

## Layout
- 12-column grid, 80 px gutters, max width 1280 px.  
- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128 px.  
- Maintain open whitespace to convey calm confidence.

---

## Components (visual intent)
- **Hero:** Full-bleed video, headline, subhead, CTAs ("Let's Talk", "See How It Works").  
- **SplitSection:** Text+image with alternating layout.  
- **CardGrid:** Three cards (Teams & Leagues, Universities, Communities) → map to Human Connection.  
- **Pillars:** Three horizontal cards → Human Connection / Effortless Technology / Lasting Belonging.  
- **CTASection:** Gradient (aqua → coral) banner with single CTA "Let's Talk."

---

## Imagery
- Authentic, candid, emotionally expressive.  
- Hero loop ≤ 8 s, dark navy overlay 0.6 opacity.  
- No staged studio shots; always imply context (crowd, campus, community).  
- Use movement and faces to communicate *belonging*.

---

## Accessibility
- Minimum contrast 4.5:1 for body, 3:1 for large text.  
- All CTAs keyboard-focusable.  
- Alt text emphasizes *emotion* over description ("fans celebrating together," not "group of people").

---

## Page-Level Architecture
| Section | Emotional Role | Dominant Pillar |
|----------|----------------|-----------------|
| Hero | Spark curiosity and warmth | Human Connection |
| Problem SplitSection | Establish tension and empathy | Human Connection |
| Solutions Grid | Demonstrate clarity and ease | Effortless Technology |
| Pillars Section | Reinforce brand philosophy | All three |
| Story SplitSection | Build legacy and memory | Lasting Belonging |
| CTA Banner | Prompt next conversation | Lasting Belonging |

---

## Do / Don't
✅ Do:
- Lead with people and stories.  
- Keep CTAs human ("Let's Talk").  
- Let visuals breathe.

🚫 Don't:
- Introduce new CTA language.  
- Overuse animation or gradients.  
- Add "sustainability" or "eco" messaging — it's not a core pillar.
- Use em dashes (—) — use periods or commas instead.

---

## Page-Level CTAs
- Sticky top-right **"Let's Talk"** button.  
- Every page ends with CTA banner using aqua → coral gradient.

---

## Core Brand Loop
**Feel → Experience → Remember**  
All design choices should reinforce this emotional progression.
