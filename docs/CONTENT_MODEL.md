# CONTENT_MODEL.md
## Hidden in Plain Sight — Site Architecture and Content Structure

---

### Overview
This document defines how content is organized across the site. The goal is to keep the visitor experience curated and guided rather than open-ended. Every page has a defined purpose. No page exists just to add bulk.

---

### Site Map

```
/                         → Museum entrance / landing page
/exhibits/                → Exhibit index (the main route overview)
  /exhibits/1-birth       → Exhibit 1: The Birth of Secret Writing
  /exhibits/2-ciphers     → Exhibit 2: Ciphers, States, and Power
  /exhibits/3-machines    → Exhibit 3: Machines of Secrecy
  /exhibits/4-mathematics → Exhibit 4: The Mathematical Turn
  /exhibits/5-modern      → Exhibit 5: The Invisible Shield of Modern Life
/timeline                 → Chronological overview of major events
/artifacts                → Key objects, documents, and devices
/concepts                 → Glossary of cryptographic terms and ideas
/figures                  → Notable people in cryptographic history
/process                  → Project process documentation (for the assignment)
```

---

### Main Exhibit Route
The five exhibit pages are the backbone of the site. They are designed to be visited in order. Each one:

- Picks up where the previous exhibit left off
- Has a clear time period and historical context
- Introduces one or two key concepts
- References at least one notable figure or artifact
- Ends with a transition that sets up the next exhibit

The visitor is never left without a clear next step.

---

### Exhibit Page Template
Each `/exhibits/` page follows this consistent structure:

| Section | Content |
|---|---|
| **Exhibit Header** | Exhibit number, title, time period label |
| **Opening Frame** | 1–2 sentences that state the central question or tension of this era |
| **Narrative Body** | The main historical content (2–4 sections with subheadings) |
| **Key Figure(s)** | Brief profile of 1–2 relevant historical figures (links to /figures) |
| **Artifact Spotlight** | A featured cipher, device, or document (links to /artifacts) |
| **Core Concept** | A short explanation of the main cryptographic idea introduced in this era (links to /concepts) |
| **Closing Idea** | A sentence that reframes what the visitor just learned and hints at what comes next |
| **Navigation** | Previous exhibit / Next exhibit |

---

### Companion Page Purposes

**Timeline (`/timeline`)**
A chronological view of the entire history covered in the museum. Gives visitors the skeleton that the exhibit route puts flesh on. Useful as a reference after the tour.

**Artifacts (`/artifacts`)**
A collection of key objects, ciphers, and documents. Each artifact entry has: name, period, description, and connection to a specific exhibit. This page should feel like a museum case catalog.

**Concepts (`/concepts`)**
Plain-language explanations of cryptographic terms that appear across the exhibits. Not a dictionary — a curated set of ideas the visitor actually needs in order to follow the narrative.

**Figures (`/figures`)**
Brief profiles of the people whose work shaped cryptographic history. Each profile connects the person to a specific exhibit and idea. Kept short — this is not a biography site.

**Process (`/process`)**
Documents how this project was made. Covers planning, AI usage, design decisions, and revisions. Required for the assignment. Should be honest and reflective, not a sales pitch.

---

### Reusable Content Types
These content types appear across multiple pages and should be built as consistent components:

- **ExhibitCard** — A linked card showing exhibit number, title, and time period
- **FigureCard** — A profile card for a historical person
- **ArtifactCard** — A featured object with name, period, and description
- **ConceptBlock** — A short definition block with a term and plain-language explanation
- **TimelineEntry** — A dated event with a brief description and optional exhibit link
- **NavigationBar** — Previous / Next links for moving through the exhibit route

---

### Navigation Logic
The site has two navigation modes:

1. **Guided Route** — The exhibit-to-exhibit path, driven by Previous/Next navigation on exhibit pages. This is the primary intended experience.
2. **Free Exploration** — The main nav and companion pages allow visitors to jump directly to any section. This is secondary.

The homepage and exhibit index both present the guided route prominently. Companion pages are accessible but not pushed on the visitor during the main tour.

---

### How the Site Stays Curated
The site avoids becoming a pile of pages by following these rules:

1. **Every page has one purpose.** No page tries to do two things at once.
2. **Companion pages support the exhibits.** They do not duplicate exhibit content; they extend it.
3. **The route is linear by design.** The visitor is always given a clear next step.
4. **No content exists just to fill space.** If something does not serve the visitor's understanding, it does not get a page.
5. **Concepts and figures are referenced from exhibits, not standalone.** The visitor discovers them through the narrative, not through a list they have to browse cold.
