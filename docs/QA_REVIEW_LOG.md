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

**Status:** In progress

**Checklist:**
- [ ] Thesis is clear and defensible
- [ ] Exhibit route covers the intended arc (ancient → modern)
- [ ] Each exhibit has a distinct focus and does not overlap significantly with others
- [ ] The site map is complete and not over-scoped
- [ ] The design style and archetype are well-defined
- [ ] The Cialdini principle is applied intentionally, not just named
- [ ] PROJECT_BRIEF.md is complete
- [ ] CONTENT_MODEL.md is complete
- [ ] DESIGN_SYSTEM.md is complete

**Notes:**
_(To be filled in after review)_

---

### Stage 2 — Design Review

**Purpose:** Confirm the visual design direction before writing production components.

**Status:** Not started

**Checklist:**
- [ ] Typography choices are appropriate for the editorial archival modernism direction
- [ ] Color palette is defined and does not use "hacker aesthetic" references
- [ ] Spacing and layout rules are established
- [ ] Component style rules are defined for all main content types
- [ ] The Sage + Explorer archetype is reflected in the visual direction
- [ ] The design avoids the items listed in the "What to Avoid" section

**Notes:**
_(To be filled in after review)_

---

### Stage 3 — Content Review

**Purpose:** Confirm all historical content is accurate, attributed, and appropriately scoped.

**Status:** Not started

**Checklist:**
- [ ] All historical claims are verifiable through credible sources
- [ ] No content has been invented or fabricated
- [ ] Sources are identified (even informally) for key claims
- [ ] Exhibit content follows the defined template structure
- [ ] Writing tone is consistent with the Sage archetype (authoritative but not condescending)
- [ ] The Curiosity Gap is used intentionally in exhibit openings and closings
- [ ] No exhibit is significantly over or under length compared to the others

**Notes:**
_(To be filled in after review)_

---

### Stage 4 — Technical Review

**Purpose:** Confirm the codebase is correct, maintainable, and meets the technical requirements.

**Status:** Not started

**Checklist:**
- [ ] TypeScript is used correctly — no `any` types without justification
- [ ] Components follow a consistent file and naming structure
- [ ] `src/app` is used correctly with the App Router
- [ ] Dynamic routes are set up correctly for exhibit and companion pages
- [ ] Tailwind classes are consistent with the design system tokens
- [ ] ESLint passes with zero errors
- [ ] The site is responsive at 375px (mobile), 768px (tablet), and 1280px (desktop)
- [ ] All images have alt text
- [ ] No broken links
- [ ] No console errors in the browser

**Notes:**
_(To be filled in after review)_

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
