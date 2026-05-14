# AI_ORCHESTRATION_LOG.md
## Hidden in Plain Sight — AI Use Log

---

### How I Am Using AI on This Project

This project uses AI assistance as a structured, intentional tool — not as a one-prompt generator. I am not asking an AI to write my project for me. I am using AI to help me plan more clearly, scaffold technical setup, check my reasoning, and move through the project in an organized way.

Every significant AI interaction is logged here so that I can demonstrate my process, reflect on what I changed or rejected, and give an honest account of how AI contributed to the work.

The human decisions — what to keep, what to revise, what direction to take — are mine. The AI is a capable assistant. The thinking behind the project is not.

---

### Log Format

Each log entry includes:
- **Stage** — What phase of the project this belongs to
- **Tool Used** — Which AI tool or model was used
- **Goal** — What I was trying to accomplish
- **Output** — What the AI produced
- **Human Decision** — What I chose to do with it
- **Revision / Improvement** — What I changed or what did not work

---

### Log Entries

---

#### Entry 001 — Topic Selection and Conceptual Planning

| Field | Notes |
|---|---|
| **Stage** | Planning |
| **Tool Used** | GitHub Copilot (Claude Sonnet) |
| **Goal** | Define the project topic, thesis, brand direction, design style, and exhibit structure |
| **Output** | A set of planning documents: PROJECT_BRIEF.md, CONTENT_MODEL.md, DESIGN_SYSTEM.md, AI_ORCHESTRATION_LOG.md, QA_REVIEW_LOG.md, PRESENTATION_NOTES.md |
| **Human Decision** | I reviewed each document and accepted the structure. The thesis statement — "Cryptography began as the art of hiding messages, but became the science of protecting trust" — was kept as written because it accurately captures the arc I wanted. |
| **Revision / Improvement** | The exhibit route was refined during planning. An earlier version had six exhibits; I condensed it to five to keep the scope manageable for a single-semester project. |

---

#### Entry 002 — Project Foundation Setup

| Field | Notes |
|---|---|
| **Stage** | Technical Setup |
| **Tool Used** | GitHub Copilot (Claude Sonnet) |
| **Goal** | Initialize a Next.js project with TypeScript, Tailwind CSS, ESLint, App Router, and src directory |
| **Output** | A working Next.js 16.2.6 project initialized via `create-next-app`, with all specified configuration. Dev server confirmed running at localhost:3000. |
| **Human Decision** | Accepted the setup as generated. The package name was changed from the folder name to a valid lowercase npm name (`final-museum-project-alvarez`). A Turbopack root config was added to silence a workspace warning. |
| **Revision / Improvement** | The initial `create-next-app` command failed because the folder name `FinalMuseumProject_Alvarez` contains capital letters, which npm does not allow as a package name. The workaround was to generate the project in a temp directory and copy it into the target folder. |

---

### Future Log Entries (To Be Filled In)

---

#### Entry 003 — Site Copy Planning

| Field | Notes |
|---|---|
| **Stage** | Content planning |
| **Tool Used** | GitHub Copilot (Claude Sonnet) under student direction |
| **Goal** | Convert verified source-backed research into controlled museum copy — exhibit text, companion page outlines, microcopy, and writing rules — without fabricating any historical content |
| **Output** | `docs/SITE_COPY.md`: a source-of-truth writing document containing homepage copy, draft copy for all five exhibits, companion page outlines (Timeline, Artifacts, Concepts, Figures, Process), reusable microcopy, writing rules, and a source-to-page map |
| **Human Decision** | The writing will be reviewed before any copy is moved into a web page. Claims that still lack a verified source remain marked `[VERIFY]` and will not be published until confirmed. The thesis paragraph, exhibit transitions, and visitor takeaways were accepted as written with minor review pending. |
| **Revision / Improvement** | This step prevents Copilot from inventing content while building pages — the site copy document acts as a controlled boundary: nothing goes into the code that is not already in this document and traced to a source. |

---

#### Entry 004 — Design System Implementation

| Field | Notes |
|---|---|
| **Stage** | Design |
| **Tool Used** | |
| **Goal** | |
| **Output** | |
| **Human Decision** | |
| **Revision / Improvement** | |

---

#### Entry 004 — Homepage and Entrance Page

| Field | Notes |
|---|---|
| **Stage** | Development |
| **Tool Used** | |
| **Goal** | |
| **Output** | |
| **Human Decision** | |
| **Revision / Improvement** | |

---

#### Entry 005 — Exhibit Pages (Route Build)

| Field | Notes |
|---|---|
| **Stage** | Development |
| **Tool Used** | |
| **Goal** | |
| **Output** | |
| **Human Decision** | |
| **Revision / Improvement** | |

---

#### Entry 006 — Companion Pages

| Field | Notes |
|---|---|
| **Stage** | Development |
| **Tool Used** | |
| **Goal** | |
| **Output** | |
| **Human Decision** | |
| **Revision / Improvement** | |

---

#### Entry 007 — Content Review and Accuracy Check

| Field | Notes |
|---|---|
| **Stage** | QA / Review |
| **Tool Used** | |
| **Goal** | |
| **Output** | |
| **Human Decision** | |
| **Revision / Improvement** | |

---

#### Entry 008 — Final Polish and Presentation Prep

| Field | Notes |
|---|---|
| **Stage** | Finalization |
| **Tool Used** | |
| **Goal** | |
| **Output** | |
| **Human Decision** | |
| **Revision / Improvement** | |
