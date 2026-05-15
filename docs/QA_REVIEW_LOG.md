# QA_REVIEW_LOG.md
## Hidden in Plain Sight — Quality Review Log

---

### Review Approach

This project is reviewed in stages rather than all at once at the end. Each stage has its own checklist and sign-off. The goal is to catch problems early — in concept, structure, design, content, and technical execution — before they compound.

Reviews are conducted by me (the student), and in some cases with a second reader or peer. AI assistance may be used to flag issues, but final judgment on whether something is acceptable is mine.

---

### Acceptance Criteria (Assignment-Based)

The following criteria are derived from the project assignment requirements:

- [ ] The site has a clear, defensible thesis
- [ ] The museum structure is coherent and navigable
- [ ] Content is historically grounded and does not contain unsupported claims
- [ ] The design is intentional and consistent
- [ ] The site uses a component-based React/Next.js architecture
- [ ] TypeScript is used correctly throughout
- [ ] Tailwind CSS is used for styling
- [ ] The site is responsive at mobile and desktop sizes
- [ ] ESLint passes with no errors
- [ ] The Process page documents the project accurately
- [ ] AI use is honestly logged in the AI Orchestration Log
- [ ] The site deploys and loads correctly

---

### Stage 1 — Concept Review

**Purpose:** Confirm the project direction, thesis, and exhibit structure are sound before building anything.

**Status:** Complete

**Checklist:**
- [x] Thesis is clear and defensible
- [x] Exhibit route covers the intended arc (ancient → modern)
- [x] Each exhibit has a distinct focus and does not overlap significantly with others
- [x] The site map is complete and not over-scoped
- [x] The design style and archetype are well-defined
- [x] The Cialdini principle is applied intentionally, not just named
- [x] PROJECT_BRIEF.md is complete
- [x] CONTENT_MODEL.md is complete
- [x] DESIGN_SYSTEM.md is complete

**Notes:**
All planning documents were completed and reviewed before implementation began. The exhibit route was condensed from six rooms to five during this stage. The thesis — "Cryptography began as the art of hiding messages, but became the science of protecting trust" — was accepted as written and has remained unchanged throughout the project.

---

### Stage 2 — Design Review

**Purpose:** Confirm the visual design direction before writing production components.

**Status:** Complete

**Checklist:**
- [x] Typography choices are appropriate for the editorial archival modernism direction
- [x] Color palette is defined and does not use "hacker aesthetic" references
- [x] Spacing and layout rules are established
- [x] Component style rules are defined for all main content types
- [x] The Sage + Explorer archetype is reflected in the visual direction
- [x] The design avoids the items listed in the "What to Avoid" section

**Notes:**
The design system was implemented as CSS custom properties in `globals.css`. Lora (serif) is used for museum headings and exhibit titles; Geist Sans for UI. Color palette centers on warm parchment (`#f0ead8`) and dark background (`#1a1714`) with amber accent (`#c4973a`). The archival dot-grid texture is CSS-only and intentionally subtle. No neon, no decorative cipher overlays, no hacker aesthetic.

---

### Stage 3 — Content Review

**Purpose:** Confirm all historical content is accurate, attributed, and appropriately scoped.

**Status:** In progress — structural review complete; final source verification pending

**Checklist:**
- [x] All historical claims are traceable to a source in RESEARCH_NOTES.md
- [x] No content has been invented or fabricated
- [x] Sources are identified for all key claims
- [x] Exhibit content follows the defined template structure
- [x] Writing tone is consistent with the Sage archetype
- [x] The Curiosity Gap is used intentionally in exhibit openings and closings
- [ ] All "Needs verification" items have been independently confirmed before final submission

**Notes:**
Seven key points and one artifact (`Vigenère Square`) carry `status: "Needs verification"` and are displayed honestly with that label — they are not hidden or removed. These items will be reviewed before final submission. No claim was included without at least a named source. The `[VERIFY]` convention prevented content from being fabricated during AI-assisted copy generation.

---

### Stage 4 — Technical Review

**Purpose:** Confirm the codebase is correct, maintainable, and meets the technical requirements.

**Status:** In progress — build and routing verified; responsive and browser review pending

**Checklist:**
- [x] TypeScript is used correctly — no `any` types
- [x] Components follow a consistent file and naming structure
- [x] `src/app` is used correctly with the App Router
- [x] Dynamic routes are set up correctly (`/exhibits/[slug]` with `generateStaticParams`)
- [x] Tailwind classes are consistent with the design system tokens
- [x] ESLint passes with zero errors
- [x] All planned routes exist and build successfully (15 static pages)
- [x] No unbuilt navigation links remain
- [ ] Responsive layout verified at 375px, 768px, 1280px
- [ ] No console errors in the browser
- [ ] Deployment confirmed

**Build log (most recent):**
```
✓ Compiled successfully
✓ Finished TypeScript
✓ Generating static pages (15/15)
Routes: / | /exhibits | /exhibits/[slug] (×5) | /timeline | /artifacts | /concepts | /figures | /process
```

**Remaining concerns:**
- Visual polish review at actual viewport sizes (not yet done)
- Deployment to Vercel or similar has not been confirmed
- README has not been written
- Presentation notes have not been finalized

---

### Stage 5 — Final Assignment Review

**Purpose:** Confirm the project meets all assignment requirements before submission.

**Status:** Not started

**Checklist:**
- [ ] All required pages are complete
- [ ] The Process page accurately reflects the project history
- [ ] The AI Orchestration Log is complete and honest
- [ ] The site deploys without errors
- [ ] The presentation is prepared
- [ ] All acceptance criteria from the top of this document are met

**Final Notes:**
_(To be filled in before submission)_
