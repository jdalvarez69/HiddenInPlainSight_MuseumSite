# DESIGN_SYSTEM.md
## Hidden in Plain Sight — Visual and Editorial Design Direction

---

### Design Style
**Editorial archival modernism.**

The visual language of this site draws from three reference points:
- The clean, typographically driven layouts of high-quality print publications (think longform journalism, museum catalogs, academic editions)
- The restrained aesthetic of serious institutional museums — quiet, authoritative, not decorative
- Modern web design principles: readable at scale, responsive, fast, and accessible

The design earns its seriousness through structure and restraint, not decoration.

---

### Visual Mood
- Quiet authority
- Historical depth without nostalgia
- Intellectual curiosity without academic stuffiness
- The feeling of handling something important

The site should feel like a well-lit reading room in a museum, not a pop-science explainer or a school slideshow.

---

### Typography Direction
Typography is the primary visual tool on this site. Layout decisions should serve the text.

- **Primary typeface:** A serif with historical credibility and strong readability at body size. Candidates: a humanist serif (e.g., Georgia as a system fallback, or a Google Fonts option like Lora, Playfair Display, or EB Garamond).
- **Secondary / UI typeface:** A clean sans-serif for navigation, labels, captions, and UI elements. Should be neutral and functional. Candidates: Inter, DM Sans, or similar.
- **Hierarchy:** Large, confident headings. Generous line height in body text. Clear visual separation between heading levels.
- **Measure:** Body text line length should stay between 60–75 characters for readability.
- **No decorative fonts.** Nothing that looks like a poster or a brand logo.

---

### Color Direction
The palette should feel archival, restrained, and deliberately chosen. It should not try to look "techy" or "crypto-branded."

- **Base:** Near-white or warm off-white background. Not pure `#ffffff` — something with a slight warmth or cool neutrality.
- **Text:** Near-black. High contrast. Legible.
- **Accent:** One controlled accent color used sparingly — possibly a deep ink blue, a muted ochre, or a dark burgundy. Used for links, highlights, and labels. Not for decoration.
- **Avoid:** Neon, gradients, heavy dark mode contrasts as the primary palette, and anything that reads as "cyberpunk" or "hacker aesthetic."

The visual direction is a museum, not a terminal.

---

### Layout Rules
- **Generous whitespace.** Margins and padding should be wider than they feel necessary. Breathing room signals confidence.
- **Consistent grid.** All pages use a shared column grid. Content does not overflow its containers.
- **Section-based.** Each page is divided into clearly separated sections with consistent vertical rhythm.
- **Mobile-first.** All layouts are designed to work at small viewport sizes first, then expanded for larger screens.
- **No horizontal scroll.** Ever.

---

### Imagery Rules
- **Quality over quantity.** One strong image is better than five mediocre ones.
- **Historical imagery should look archival.** Black-and-white photographs, scans of documents, and diagrams should be presented cleanly, not filtered.
- **No stock photos of people staring at laptops.** No generic "hacking" imagery (green matrix rain, etc.).
- **Illustrations or diagrams are acceptable** if they are clean and purposeful (e.g., a diagram of the Caesar cipher shift, a schematic of an Enigma rotor).
- **All images should have meaningful alt text.** This is both an accessibility requirement and a content requirement.
- **Images should serve the narrative.** If an image does not add to the visitor's understanding, it does not appear.

---

### Component Style Rules
- **Exhibit cards** should be clean, text-forward, and show the exhibit number and title clearly. No heavy shadows or gradients.
- **Figure and artifact cards** should look like museum label cards — a name, a period, a short description. Simple and dignified.
- **Navigation elements** should be understated. The content is the focus, not the chrome.
- **Concept blocks** should be clearly distinguished from body text — a left border, a subtle background tint, or similar — but not styled like "callout boxes" from a textbook.
- **No rounded corners everywhere.** Use corner radius intentionally. Hard corners or very slight rounding reads as more serious than pill-shaped buttons.
- **Consistent spacing tokens.** Use a defined spacing scale (e.g., 4px base unit) throughout. Do not use arbitrary margins.

---

### Tone and Writing Rules
- **Write to the visitor, not at them.** Second person ("you") is acceptable in framing statements. Do not lecture.
- **Be precise.** Vague statements undermine credibility. If something is uncertain, say so.
- **Use the Curiosity Gap.** Open exhibits and sections with a tension or question. Do not open with a definition.
- **Vary sentence length.** Long sentences for context and complexity. Short sentences for emphasis.
- **No bullet-point history.** The narrative sections are prose, not lists of facts.
- **Headings should carry meaning.** Not "Overview." Something like "When Writing Could Get You Killed."
- **Avoid jargon without explanation.** Cryptographic terms should always be defined the first time they appear.

---

### What to Avoid Visually
- Dark/neon "hacker" aesthetic
- Heavy use of green on black
- Matrix-style visual references
- Decorative cipher or code overlays as background patterns
- Oversized hero images that push content below the fold
- Animated text that draws attention away from reading
- Overly complex navigation menus
- Inconsistent spacing that makes the layout feel accidental

---

### How the Sage + Explorer Archetype Affects the Site

**The Sage** shapes:
- The credibility of the typography and color palette
- The tone of the writing (authoritative, not condescending)
- The museum structure (guided, organized, curated)
- The use of historical imagery and primary sources

**The Explorer** shapes:
- The forward motion of the guided route
- The framing of exhibit openings as questions or tensions
- The "what's around the next corner" feeling between exhibits
- The companion pages as optional depth for visitors who want more

Together, these archetypes mean the site never becomes a dry reference and never becomes a sensational listicle. It teaches, and it invites.

---

### How the Curiosity Gap Principle Affects the Site

The Curiosity Gap (Cialdini) works by creating a gap between what the visitor knows and what they want to know. This site uses it in the following ways:

- **Exhibit titles are not descriptions — they are framings.** "The Birth of Secret Writing" raises a question: what came before? What counts as secret writing?
- **Opening frames do not answer the question immediately.** They name the tension and invite the visitor in.
- **Closing ideas hint forward.** Each exhibit ends by gesturing toward what the next era will change or challenge.
- **The timeline and artifacts pages offer partial reveals** — you see there is more, and the exhibit route is how you get it.

The Curiosity Gap is not clickbait. It is the honest acknowledgment that the most interesting thing about cryptography is always just one step further into the story.
