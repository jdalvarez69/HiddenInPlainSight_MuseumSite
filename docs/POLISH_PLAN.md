# POLISH_PLAN.md
## Hidden in Plain Sight — Site Polish Plan

---

## 1. Current Assessment

### What is working

The concept is sound and distinctive. A guided five-room exhibit structure with a continuous thesis is the correct approach for this subject, and the implementation follows through on that structure with discipline. Every route exists and links to the next. The data layer is comprehensive, typed, and source-attributed. The dark archival palette — warm parchment on near-black with amber accents — is appropriate for the design direction and does not drift into hacker aesthetic. The typography hierarchy is consistent and readable. The component system is reusable and well-separated.

### What is not working

**The site is too text-heavy.** Pages present information as dense prose blocks without visual interruption. A visitor who lands on an exhibit page sees a long cascade of key points, sources, and section labels before they encounter anything that relieves the density. This contradicts the design goal of a museum reading room and creates the impression of a report, not an exhibit.

**There are no exhibit visuals.** Every `ArtifactPanel` displays a `visualHint` text string — a note describing a diagram that should exist — instead of an actual image or diagram. That production note is visible to the public. The Scytale, the Caesar cipher wheel, the Enigma rotor, the TLS handshake, and the other key visual artifacts have no rendered representation. This is the single largest gap between the current state and the project goal.

**"Needs verification" badges appear throughout the public site.** `StatusBadge` components render on every unverified `KeyPoint`, `Artifact`, `Figure`, and `TimelineEvent` visible to visitors. On pages like `/figures` and `/artifacts`, several items in a row carry these labels, and the curator note on `/figures` even acknowledges them directly. This signals an unfinished production state rather than honest scholarship.

**The homepage does not draw you in.** The hero immediately shows the full thesis statement — a long, dense sentence — followed by a curator note, then all five exhibit cards each rendering their full intro paragraph with `line-clamp-3`. The page is informative but not intriguing. The Curiosity Gap principle is stated in the project brief but not yet executed on the homepage.

**ExhibitCard renders full intro text.** The intro paragraphs in `museum-data.ts` are full exhibit introductions averaging 70–90 words. Showing them in preview cards — even clipped — fills the grid with text that belongs inside the exhibit rooms. Cards should tease, not summarize.

**Companion pages feel like reference dumps.** `/artifacts`, `/concepts`, `/figures`, and `/timeline` all follow the same pattern: hero section, curator note, then a long scrolling list grouped by room. This is navigable but not museum-like. Grouping and visual rhythm need to improve.

**Visual hints are exposed internal notes.** The `ArtifactPanel` component renders `Visual: {visualHint}` as visible italic text. This is a production placeholder that should never be visible in a finished site.

---

## 2. Polish Goals

1. Make the site feel like a curated digital exhibit — not a document or report — within five seconds of arriving.
2. Add custom SVG or CSS-based exhibit visuals for all ten major cryptographic artifacts/diagrams. Replace every `visualHint` placeholder with an actual rendered visual.
3. Reduce visible text on every major page by approximately 35–50%. Move long explanatory prose from cards and companion pages into the exhibit rooms where it belongs.
4. Improve page rhythm on every route with visual breaks, section punctuation, and hierarchy that the eye can scan before it reads.
5. Make the homepage intriguing rather than informative. Front-load mystery, not explanation.
6. Make individual exhibit pages feel like self-contained rooms, not long scrolling documents.
7. Make companion pages useful as reference without overwhelming a visitor who is using them to navigate.
8. Preserve research honesty — source attribution and pending-verification awareness — without making the public site look unfinished. Move verification status to docs and the Process page.
9. Lint, build, and deployment must continue to pass after every change.

---

## 3. Visual System Upgrade

### Principle

Every visual should serve the visitor's understanding of the cryptographic concept being exhibited. No decorative visuals. No stock imagery. No visual that could be replaced by a sentence.

### Visual format decision

Use inline SVG components or CSS-constructed diagrams rendered as React server components. This approach:
- avoids image hosting and copyright issues
- keeps assets inside the component tree
- allows captions and alt text as first-class children
- can be built without installing any additional packages

### Planned visuals — one per major artifact or concept

| Visual | Room | What it shows |
|---|---|---|
| **Scytale diagram** | Room 01 | A strip wound around a rod; letters visible across the wrap; strip unwound showing scrambled sequence |
| **Caesar cipher wheel** | Room 01 | Two concentric alphabet rings offset by three positions; A→D, B→E etc. clearly labeled |
| **Frequency analysis chart** | Room 02 | A bar chart of letter frequency in English (E, T, A, O highest) vs. a shifted cipher text showing the same relative pattern |
| **Vigenère grid** | Room 02 | A partial tabula recta — the 26×26 matrix showing how keyword letters select different shift rows |
| **Enigma rotor diagram** | Room 03 | An abstracted cross-section of a single Enigma rotor showing the internal wiring permutation |
| **Bombe abstraction** | Room 03 | A simplified diagram showing how the Bombe tested multiple rotor configurations simultaneously |
| **Public/private key diagram** | Room 04 | A message encrypted with a public key, showing only the private key holder can decrypt |
| **Diffie-Hellman exchange diagram** | Room 04 | The paint-mixing analogy: public/private colors combined to produce a shared secret neither party transmitted |
| **TLS handshake sequence** | Room 05 | A numbered sequence diagram: ClientHello → ServerHello → Certificate → Key Exchange → Finished |
| **End-to-end encryption path** | Room 05 | A message locked at sender, transmitted locked, unlocked only at recipient — showing no intermediate can read it |

### Additional structural visuals

- **Room number markers:** Large display numerals (01–05) used as visual anchors at the top of each exhibit room, styled as museum gallery labels
- **Exhibit transition panels:** A full-width ruled section at the end of each exhibit room that cites the unresolved problem and points to the next room — visually distinct from body content
- **Visual rhythm blocks:** Alternating content-left / content-right layout for key point sections, breaking up the current single-column cascade

---

## 4. Image and Asset Strategy

- All visual assets will be custom SVG components or CSS constructions. No external image URLs.
- SVG components will live in `src/components/visuals/` — one file per diagram.
- Each visual component accepts `caption` and `aria-label` props as required.
- `public/images/` or `public/visuals/` may be used for any raster assets added later, but no raster images are planned at this stage.
- No hotlinking. No random stock photography. No decorative imagery.
- Every visual must have a meaningful `alt` attribute or an adjacent visible caption.
- Visual components will be named descriptively: `ScytaleDiagram`, `CaesarWheel`, `FrequencyChart`, etc.
- The `visualHint` text string in each `ArtifactPanel` and `Exhibit` data entry describes exactly what the SVG component should depict. These will be used as the design brief for each visual.

---

## 5. Content Reduction Strategy

### Rules

1. **Homepage exhibit cards:** Remove the `intro` prop from `ExhibitCard` on the homepage. Show room number, title, subtitle, and an "Enter Room →" affordance only. The intro text belongs inside the exhibit room, not on a preview card.
2. **Exhibit page key points:** Shorten each `keyPoints[].text` entry to one or two sentences. The full explanation belongs in the exhibit narrative, not in a list item. Target: under 40 words per key point.
3. **Companion page heroes:** Reduce hero body text from 3–4 sentences to 1–2. The companion pages are reference pages, not introductory essays.
4. **Curator notes:** Keep curator notes short — two to three sentences maximum. They are asides, not second introductions.
5. **Companion page group headers:** Replace long group intro text with the exhibit title, room number, and a single-line room description. Let the cards speak.
6. **KeyPoint source lists:** Inline source citations in key points are visible to visitors but add visual noise. Move them to a collapsible `SourceDrawer` component or to the end-of-exhibit sources section only.
7. **Keep curatorial depth in docs:** Long explanations, source commentary, and historiographical context belong in `docs/RESEARCH_NOTES.md` and `docs/SITE_COPY.md` — not on every public-facing card.

### Outcome target

Each exhibit page should be scannable in under 60 seconds before a visitor decides to read in depth. Each companion page should allow a visitor to find what they are looking for within two scrolls.

---

## 6. Verification Label Strategy

### The problem

`StatusBadge` renders the string "Needs verification" as a visible label in public-facing components. On `/figures`, several consecutive cards carry this badge. On exhibit pages, some key points include it. On `/artifacts`, several items display it. The cumulative effect is a page that signals to visitors that the site is not finished.

### The proposed resolution

**Step 1 — Resolve easy verifications first.**
Several items marked `status: "Needs verification"` describe widely accepted historical facts that are verifiable with a single source. For example:
- "Simple substitution ciphers retain the frequency fingerprint of the source language" — verifiable from any cryptography textbook or Al-Kindi's treatise description.
- "The appeal of early ciphers was not security but reliance on key secrecy" — directly supported by the same sources already cited.

For each `Needs verification` item, check whether the claim can be sourced from the verified references already in `docs/RESEARCH_NOTES.md`. If yes, update the status to `Verified` and add the source. Log changes.

**Step 2 — Remove weak unverified items from public data.**
If an item is not verifiable from existing sources and is not essential to the exhibit narrative, remove it from the data array entirely. Move it to a note in `docs/RESEARCH_NOTES.md` for future reference.

**Step 3 — Make `StatusBadge` invisible by default on public pages.**
Any remaining `Needs verification` items that are kept because they are important but not yet sourced should:
- Not render `StatusBadge` on public exhibit and companion pages.
- Remain documented in `museum-data.ts` via the `status` field (for internal tracking).
- Be acknowledged honestly in aggregate on the Process page: "X items in the dataset are pending source confirmation."

**Step 4 — Preserve the Process page's honesty.**
The `/process` page is specifically about how the project was built. It is appropriate to disclose the verification status there. Do not remove it from that page.

**Rule:** Do not fake verification. Do not change a status from `Needs verification` to `Verified` unless a real source is confirmed. Only suppress the public badge — the data field stays honest.

---

## 7. Component Upgrade Plan

### New components to create

| Component | Purpose |
|---|---|
| `src/components/visuals/ScytaleDiagram.tsx` | SVG diagram of the scytale rod-and-strip mechanism |
| `src/components/visuals/CaesarWheel.tsx` | SVG of two concentric alphabet rings with offset |
| `src/components/visuals/FrequencyChart.tsx` | CSS/SVG bar chart of English letter frequency vs cipher text |
| `src/components/visuals/VigenereGrid.tsx` | Partial tabula recta SVG grid |
| `src/components/visuals/EnigmaRotorDiagram.tsx` | Abstracted rotor cross-section SVG |
| `src/components/visuals/BombeAbstraction.tsx` | Simplified Bombe testing diagram SVG |
| `src/components/visuals/PublicKeyDiagram.tsx` | Public/private key encryption flow SVG |
| `src/components/visuals/DiffieHellmanDiagram.tsx` | Paint-mixing analogy diagram SVG |
| `src/components/visuals/TLSHandshake.tsx` | Numbered sequence diagram SVG |
| `src/components/visuals/E2EDiagram.tsx` | End-to-end encryption message path SVG |
| `src/components/RoomHero.tsx` | Full-width exhibit room header with room number, title, subtitle, and visual slot |
| `src/components/SectionHeader.tsx` | Reusable section label + heading component replacing the repeated inline `<header>` pattern |
| `src/components/VisualFrame.tsx` | Container for a diagram/SVG with caption, alt text slot, and optional exhibit label |
| `src/components/SourceDrawer.tsx` | Collapsible source list — hides source citations behind a toggle to reduce visual noise |

### Existing components to modify

| Component | Change |
|---|---|
| `ExhibitCard` | Add optional `showIntro` boolean prop (default `false`); hide intro text on homepage, show on exhibits index |
| `ArtifactPanel` | Remove the visible `Visual: {visualHint}` production note; accept an optional `visual` slot prop for rendering an actual `VisualFrame` |
| `StatusBadge` | Add optional `publicVisible` prop (default `false`); only render the badge when explicitly shown on the Process page or in admin views |
| `CuratorNote` | No structural change; enforce two-sentence maximum in all copy |
| `NextRoomCTA` | No structural change |
| `TimelineRail` | Add visual era markers or section dividers between chronological groups |

---

## 8. Page-by-Page Upgrade Plan

### Homepage (`/`)

**Current state:** Dense hero with full thesis text → curator note → all five exhibit cards with intro paragraphs.

**Changes:**
- Shorten hero: replace full thesis paragraph with a one-sentence hook that creates a curiosity gap. Move the full thesis to inside the first exhibit room where it earns its weight.
- Make hero CTA more prominent.
- Exhibit cards: show room number, title, and subtitle only. No intro paragraphs. Add a visual indicator (accent rule, room number in large display type) to make the cards feel like a map, not a list.
- Remove or shorten the curator note. The homepage is an entry point, not a framing essay.
- Add a visual rhythm break between the hero and the card grid — a thin exhibit-number strip or a visual accent.

---

### Exhibits Index (`/exhibits`)

**Current state:** Hero → curator note → five exhibit cards with intros → NextRoomCTA.

**Changes:**
- This page can show more detail than the homepage cards, since a visitor here is specifically deciding which room to enter. Keep card intros here but trim them to two sentences each.
- Add room number as a large display accent on each card.
- Consider a `RoomHero` component for the page header.

---

### Individual Exhibit Pages (`/exhibits/[slug]`)

**Current state:** Room label → title → subtitle → intro paragraph → key points list → featured artifact (text only) → concept → takeaway → sources → transition → NextRoomCTA.

**Changes:**
- After the title and intro, insert the exhibit's primary visual (`VisualFrame` + appropriate diagram) before the key points list. This is the single highest-impact change: it breaks the text wall with a purposeful visual before the visitor even starts reading.
- Key points: shorten each to one or two punchy sentences. Move source citations to a `SourceDrawer` toggle.
- Featured artifact: replace the `ArtifactPanel` text-only view with an `ArtifactPanel` that accepts a `VisualFrame` child — showing the actual diagram.
- Remove visible `StatusBadge` from key points (keep the data field; hide the public badge).
- Concept block: keep as-is — it is well-sized and well-placed.
- Transition section: make it visually distinct — a full-width ruled panel with the transition text and a "Next Room" arrow. This should feel like a deliberate exhibit exit.

---

### Timeline (`/timeline`)

**Current state:** Hero → curator note → full `TimelineRail` list of 16 events → exhibit connection list → NextRoomCTA.

**Changes:**
- Add era grouping labels as visual section breaks in the `TimelineRail` (Antiquity / Medieval / Renaissance / Industrial / Digital). These already exist as `era` fields on `TimelineEvent` — they just need to be rendered as visual dividers.
- Remove inline `StatusBadge` from timeline events on the public page. Acknowledge pending items in aggregate at the bottom.
- Trim hero body text to one sentence.

---

### Artifacts (`/artifacts`)

**Current state:** Hero → curator note → groups of `ArtifactPanel` cards by room.

**Changes:**
- Replace the `ArtifactPanel` `Visual: {visualHint}` production note with the actual visual component in each card where a diagram exists.
- For artifacts that do not yet have a dedicated visual, remove the `visualHint` text from the public render rather than showing the note.
- Add the room's exhibit visual (small, decorative) as an accent in the group header — creates visual rhythm and reminds the visitor which exhibit each group belongs to.
- Remove `StatusBadge` from artifact cards on this public page.

---

### Concepts (`/concepts`)

**Current state:** Hero → curator note → groups of `ConceptCard` by room.

**Changes:**
- This page is among the least cluttered. Main changes: trim hero text, remove `StatusBadge` from concept cards.
- Consider a two-column layout on desktop for the concept cards — they are shorter than artifact panels and look better in a grid.
- Ensure the `plainLanguageExplanation` text stays (it is the most useful thing on this page).

---

### Figures (`/figures`)

**Current state:** Hero → curator note (which mentions verification labels) → groups of `FigureCard` by room.

**Changes:**
- Remove `StatusBadge` from figure cards on this page.
- Rewrite the curator note: remove the sentence that acknowledges verification labels directly (that sentence signals that something is wrong).
- Trim hero body text to one or two sentences.
- Add a portrait placeholder or monogram-based avatar element to `FigureCard` — the cards are currently pure text, making the page feel like a database export.

---

### Process (`/process`)

**Current state:** Header → workflow stages → workflow steps → assignment connection cards → NextRoomCTA.

**Changes:**
- This page is for graders and curious visitors — it should be honest and clear, not visually polished to museum standards.
- Keep `StatusBadge` visible here. This is the appropriate place for verification transparency.
- Trim the intro text slightly.
- Ensure the AI orchestration table is accurate and up to date after all polish changes are made.

---

## 9. Implementation Order

Work in this sequence. Do not skip stages. Lint and build must pass after each stage.

| Stage | Scope | Files likely affected |
|---|---|---|
| **1. Verification cleanup** | Resolve easy verifications, remove unfixable public badges | `src/lib/museum-data.ts`, `src/components/StatusBadge.tsx`, exhibit pages |
| **2. Remove visible production notes** | Strip `Visual: {visualHint}` from `ArtifactPanel` public render | `src/components/ArtifactPanel.tsx` |
| **3. Build SVG visual components** | Create all 10 diagram components in `src/components/visuals/` | New files only |
| **4. `VisualFrame` component** | Create container component for visuals with caption and alt text | `src/components/VisualFrame.tsx` |
| **5. `SourceDrawer` component** | Create collapsible source list | `src/components/SourceDrawer.tsx` |
| **6. `SectionHeader` component** | Reusable section label replacement | `src/components/SectionHeader.tsx` |
| **7. `RoomHero` component** | Exhibit room header with visual slot | `src/components/RoomHero.tsx` |
| **8. Exhibit page polish** | Insert visuals, tighten key points, hide badges, improve transitions | `src/app/exhibits/[slug]/page.tsx` |
| **9. Homepage rewrite** | Shorter hero, visual card grid, curiosity gap | `src/app/page.tsx` |
| **10. Exhibits index polish** | Trim card intros, room number display | `src/app/exhibits/page.tsx` |
| **11. Companion pages polish** | Trim text, hide badges, improve rhythm | `/artifacts`, `/concepts`, `/figures`, `/timeline` |
| **12. FigureCard portrait element** | Add monogram or placeholder avatar | `src/components/FigureCard.tsx` |
| **13. README + Process update** | Update status table, document polish changes | `README.md`, `src/app/process/page.tsx` |
| **14. AI_ORCHESTRATION_LOG update** | Add Entry 011 for polish phase | `docs/AI_ORCHESTRATION_LOG.md` |
| **15. Final QA + deployment push** | Full lint, build, GITHUB_PAGES build, git push | All |

---

## 10. Quality Bar — Definition of Finished

The site is finished when all of the following are true:

1. **First 5 seconds:** A visitor who has never heard of the project understands within five seconds that this is a museum about cryptography, that there are five rooms, and where to start. The visual identity — dark, archival, serious — is immediately apparent without reading a single word.

2. **No document feel:** No page should read like a printed report, a Wikipedia article, or a class assignment. Every page should feel navigated, not read.

3. **Forward motion is obvious:** On every page, what to do next is clear without hunting. The guided route feels like an actual path.

4. **Visual relief on every major page:** No page should present more than two consecutive text-only sections without a visual break — a diagram, a ruled panel, a large room number, or a structural divider.

5. **Museum identity is unambiguous:** A visitor who is familiar with serious museum websites (MoMA, the British Museum, the Smithsonian online presence) should immediately recognize the register this site is operating in.

6. **No unfinished production signals:** No `Visual: {visualHint}` text. No orphaned `Needs verification` badges on public exhibit and companion pages. No placeholder copy.

7. **Technical standard:** `npm run lint` passes. `npm run build` passes. `GITHUB_PAGES=true npm run build` passes. The deployed site at `https://jdalvarez69.github.io/HiddenInPlainSight_MuseumSite/` loads correctly on mobile and desktop.

8. **Content is honest:** Source attribution is preserved in `museum-data.ts`. The Process page accurately documents what was done. Nothing has been fabricated.

---

## 11. Execution Status Update (May 2026)

### Completed in the polish sprint

- [x] Public verification badge output suppressed by default on visitor-facing pages while internal status tracking remains in data/docs
- [x] Public `Visual: {visualHint}` production-note text removed from artifact card rendering
- [x] Custom local SVG visual component system created in `src/components/visuals/`
- [x] Visuals integrated across homepage, exhibit rooms, and companion routes
- [x] Public-facing copy tightened to reduce visible density and improve scanability
- [x] Card density reduced for cleaner route browsing
- [x] Lint/build validation maintained during polish changes
- [x] GitHub Pages deployment configured and live

### Remaining before final submission

- [ ] Final live QA pass (responsive checks and browser console checks at the deployed URL)
- [ ] Final presentation preparation and timed rehearsal

---

*This plan governs the polish phase. No changes should be made to website pages outside the scopes defined in Sections 8 and 9. Implementation requires approval of each stage before the next begins.*
