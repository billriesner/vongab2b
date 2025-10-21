# VONGA — UI Contract (Components & Props)
> Any change to props or variants requires updating this file first.

---

## Button
**Props**
- `variant`: `"primary" | "secondary"` (default `"primary"`)
- `href?`: string
- `onClick?`: () => void
- `children?`: ReactNode (default = theme.ctaLabel)

**Rules**
- Primary label = **"Let's Talk."**
- Primary = coral bg, white text, glow hover (coral glow)
- Secondary = transparent, aqua border, aqua hover fill (10%)
- No other variants allowed.
- CTA analytics event: `cta_primary_click`.

---

## Hero
**Purpose:** Full-bleed intro section. Sets emotional tone.

**Props**
- `headline`: string  
- `subhead`: string  
- `videoSrc`: string  
- `primaryHref`: string (default `/contact`)  
- `secondaryHref?`: string (optional anchor link)

**Rules**
- Must include two buttons: "Let's Talk" (primary) + "See How It Works" (secondary).
- Overlay color: brand.navy @ 0.6 opacity.
- Minimum hero height: 80vh (responsive).

**Emotion:** *Human Connection* — this is where warmth, story, and inclusion live.

---

## SplitSection
**Purpose:** Communicate tension and empathy visually.

**Props**
- `title`: string  
- `body`: string  
- `image`: string  
- `reverse?`: boolean  
- `ctaHref?`: string  
- `ctaText?`: string (default "See How It Works")

**Rules**
- Alternating layout (image/text per section).
- Default bg: brand.navy (dark mode) or gray100 (light mode).
- Image overlay: subtle aqua gradient (20%).

**Emotion:** *Human Connection → Effortless Technology transition.*

---

## CardGrid
**Purpose:** Represent Vonga's customer verticals.

**Props**
- `items`: `{ icon: ReactNode; title: string; text: string; href: string; }[]`  
  (Always 3: Teams & Leagues, Universities, Communities)

**Rules**
- Card bg: white/5 → hover white/10.  
- Title font: semibold.  
- Action: text link "Learn more →" in brand.aqua.  
- Equal height cards.

**Emotion:** *Effortless Technology* — simple, clear, structured layout.

---

## Pillars
**Purpose:** Visually reinforce the three brand pillars.

**Props**
- none (fixed content from docs/brand-system.md)

**Rules**
- Always render these in order:  
  1. **Human Connection**  
  2. **Effortless Technology**  
  3. **Lasting Belonging**
- Use 3 uniform cards with equal height.
- Background: navy or white/5 depending on section context.
- Subtle fade-in animation per card.

**Content**
| Pillar | Description | Visual Cue |
|---------|--------------|-------------|
| Human Connection | People before product | Faces, motion, interaction |
| Effortless Technology | Tech that disappears | Clean layout, no visible "tech" elements |
| Lasting Belonging | Enduring emotional tie | Subtle glow / movement implying continuity |

**Emotion:** Reinforces brand system's "Feel → Experience → Remember."

---

## CTASection
**Purpose:** Close every page with a high-emotion invitation.

**Props**
- `title?`: string (default: "Let's make belonging tangible.")  
- `subtitle?`: string  
- `href?`: string (default: `/contact`)

**Rules**
- Gradient background: aqua → coral (45°).  
- Center-aligned text, bold typography.  
- Single primary CTA = "Let's Talk." (coral bg, white text)
- Use coral glow hover state.

**Emotion:** *Lasting Belonging* — continuity and forward motion.

---

## NavBar
**Props:** none  
**Rules**
- Fixed top, navy background (70% opacity) with blur.  
- Links: Enterprise / Technology / About / Contact.  
- Right-aligned primary CTA "Let's Talk." (coral background)
- Collapse into mobile dropdown under 768px.

---

## Footer
**Props:** none  
**Rules**
- Background: brand.navy.  
- 4 columns: Logo / Solutions / Company / Support / Legal.  
- Solutions: Enterprise, Technology.  
- Company: About, Contact.  
- Support: FAQ, Returns.  
- Legal: Terms, Privacy.  
- Link hover = aqua underline slide.

---

## Motion & Interaction Standards
- All animations use `cubic-bezier(0.25,0.1,0.25,1.0)`.  
- Fade-ups: 150–300ms.  
- Section transitions: 600ms.  
- Hover scale: 1.02 max.  
- No parallax or complex scroll reveals unless minimal.

---

## Accessibility
- Minimum contrast: 4.5:1 (body), 3:1 (heading).  
- Focus ring: 2px solid brand.aqua.  
- All CTA buttons labeled `aria-label="Let's Talk"` where appropriate.

---

## Forbidden
- New CTA text variants ("Book a Demo," "Get Started," etc.)  
- New color hex codes outside `/styles/tokens.json`.  
- Custom motion curves.  
- "Sustainability" or "eco" references (not a pillar).  
- New UI components without contract update.
- **Em dashes (—)** in any copy — use periods or commas instead.

---