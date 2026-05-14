# Copilot Instructions
## Hidden in Plain Sight: A Museum of Cryptography

---

### Project Identity

This is a museum-style informational website about the history and evolution of cryptography. It is not a blog, portfolio, landing page, generic school project, or random collection of pages. Every decision — structural, visual, and editorial — serves the museum concept.

**Museum title:** Hidden in Plain Sight
**Subtitle:** A Museum of Cryptography
**Main thesis:** Cryptography began as the art of hiding messages, but became the science of protecting trust.

---

### Read the Project Documents First

Before making any major structural, design, or content change, read the relevant documents in `/docs/`:

- `PROJECT_BRIEF.md` — Project direction, thesis, audience, design style, archetype, Cialdini principle
- `CONTENT_MODEL.md` — Site map, exhibit route, page templates, content types, navigation logic
- `DESIGN_SYSTEM.md` — Visual direction, typography, color, layout, imagery, writing tone, what to avoid
- `AI_ORCHESTRATION_LOG.md` — Record of all significant AI contributions and human decisions
- `QA_REVIEW_LOG.md` — Acceptance criteria and staged review checklists
- `PRESENTATION_NOTES.md` — Presentation outline and talking points

If something you are about to do conflicts with these documents, say so before proceeding.

---

### The Guided Exhibit Route

The main visitor experience is a linear guided route through five exhibits. Preserve this structure in all navigation, routing, and layout decisions:

1. The Birth of Secret Writing
2. Ciphers, States, and Power
3. Machines of Secrecy
4. The Mathematical Turn
5. The Invisible Shield of Modern Life

The visitor always knows where they are and where they are going. Do not break the forward momentum of the route.

---

### Design Direction

**Style:** Editorial archival modernism
**Archetype:** The Sage + The Explorer
**Cialdini principle:** Curiosity Gap

The site should feel like a well-curated museum catalog crossed with serious editorial journalism. It earns its authority through structure, restraint, and typographic clarity.

**Do not make this look like:**
- A hacker site
- A Matrix-themed or neon cyberpunk experience
- A tech startup landing page
- A generic school project generated from one prompt
- Anything with green-on-black, animated code rain, or decorative cipher overlays as backgrounds

**Do make it feel like:**
- A quiet, well-lit museum reading room
- Something written by someone who genuinely knows the subject
- A place where a curious person would spend real time

---

### Permanent Rules

1. **I am the curator and final decision-maker.** Propose, explain, implement — but the direction is mine.

2. **Preserve the museum concept.** The guided route, design style, archetype, and Cialdini principle are fixed project pillars. Do not drift from them.

3. **Do not invent historical content.** Do not fabricate dates, events, people, sources, citations, or claims. If content needs source verification, mark it clearly with a `[VERIFY]` tag.

4. **Do not add AI filler.** No generic "Welcome to our museum" copy, no placeholder lorem ipsum left in production code, no vague text that sounds like it was written to fill space.

5. **Keep changes bounded.** Only implement what was requested. Do not refactor adjacent code, add unrequested features, or improve things outside the scope of the task.

6. **Use reusable components.** Recurring content types (ExhibitCard, FigureCard, ArtifactCard, ConceptBlock, TimelineEntry, NavigationBar) should be built as shared components, not duplicated inline.

7. **Every component has a curatorial purpose.** If a component does not serve the visitor's understanding or navigation, it should not exist.

8. **Keep the visitor on the guided route.** Navigation, layout, and calls-to-action should consistently point toward the next exhibit. Companion pages (Timeline, Artifacts, Concepts, Figures, Process) support the main route — they do not compete with it.

9. **After each implementation task, report:**
   - Which files were changed or created
   - What changed in each file
   - How the change supports the project brief

10. **If something conflicts with the docs, flag it.** Do not silently change direction. Explain the conflict and ask before proceeding.

---

### Quality Standard

The final site should feel like a real curated digital exhibit about cryptography — not a class website generated from one prompt. A curious person with no prior knowledge of cryptography should be able to walk through the exhibit route and come away with a genuine understanding of how secrecy shaped history. The site should be something worth showing.
