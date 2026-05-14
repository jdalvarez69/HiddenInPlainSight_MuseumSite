# SITE_COPY.md
## Hidden in Plain Sight — Source-of-Truth Writing Document

---

### How to Use This Document

This is the source-of-truth for all copy that appears on the museum website. Nothing in this document may be transferred to a web page if it is marked `[VERIFY]`. All copy is drawn from verified sources documented in `RESEARCH_NOTES.md`. Interpretation is noted as such and kept separate from verified fact.

---

## 1. Homepage Copy

---

### Museum Title
Hidden in Plain Sight

### Subtitle
A Museum of Cryptography

---

### Thesis Paragraph

For most of human history, a secret was something you physically hid — a message buried in wax, a strip of cloth that made no sense unless you already knew the shape of the rod it was wrapped around. Over time, the methods became more sophisticated. The ciphers more complex. The machines faster. The mathematics more abstract. But the problem at the center of it all never changed: how do you communicate something that only one other person should be able to read?

This museum follows that question from antiquity to the present. What began as the art of concealment became the science of trust — and the story of how that happened runs through war, espionage, diplomacy, mathematics, and every website you have ever opened.

---

### Visitor Invitation

The museum is organized as a guided route through five exhibits, each covering a distinct era in cryptographic history. You can follow the route from beginning to end, or explore by topic. Either way, the same story is waiting.

---

### "Begin the Tour" CTA Text
Enter the Museum

*Alternative:* Begin the Exhibit Route

---

### Curator Note

This museum was built as a college final project. The history presented here is drawn from verified sources, and anything that still needs confirmation is marked clearly. No content has been invented. The goal was to build something worth reading — not just something that looked finished.

---

## 2. Exhibit Route Copy

---

### Exhibit 1: The Birth of Secret Writing

**Subtitle:** When Hiding a Message Was Enough

---

**Room Introduction**

The need to keep a message secret is older than most of the writing systems we use today. Long before formal cryptography existed — before ciphers and keys and algorithms — people were looking for ways to make sure the wrong eyes never read the right words.

Some early methods hid the message itself: concealed in wax, carried in a way that disguised its existence entirely. Others rearranged or substituted the letters so the meaning was lost without a key. Both approaches were clever. Neither was, in the end, secure.

This room covers the first phase — a long period during which secrecy was a matter of physical ingenuity, before it became a matter of mathematics.

---

**Key Points**

1. Cryptology has roots in antiquity. According to Britannica, the manual cryptography era — in which ciphers were created and broken by hand — stretched from ancient times through World War I. The tools changed over centuries; the underlying struggle between maker and breaker did not. *(Source: Britannica — History of Cryptology)*

2. One of the earliest recorded cipher devices was the scytale, used in ancient Greece. A strip of material was wrapped around a rod of a specific diameter, the message was written across the wrapped surface, and then the strip was unwound and sent. Without a matching rod, the message appeared as a random sequence of letters. *(Source: NSA — Fun Facts about Cryptology)*

3. The Caesar cipher — associated with Julius Caesar — works by shifting each letter in the alphabet by a fixed number of positions. It is a substitution cipher in its simplest form: every instance of one letter becomes another. *(Source: Britannica — Caesar Cipher)*

4. Simple substitution and transposition both have a fundamental weakness. The structure of a language — which letters appear most often, which combinations are common — survives the transformation. A message that has been shifted or rearranged still carries the fingerprints of the original language.

5. The appeal of these methods was not security in the modern sense. It was that the intended recipient had the key, and the adversary likely did not. Secrecy depended on the key remaining secret, not on the cipher being unbreakable.

---

**Featured Artifact Idea**

A cipher wheel showing the Caesar shift — two concentric rings of the alphabet, offset by a fixed number of positions. A visitor can rotate the outer ring to encode or decode a message by hand.

*Artifact copy:* "The Caesar cipher does not obscure the structure of a message. It only displaces it. Every letter has been moved the same distance. If you know the distance — or you are patient enough to try all twenty-five — the message returns."

---

**Concept Explanation**

**Substitution cipher:** A substitution cipher replaces each letter in the original message with a different letter according to a fixed rule. In the Caesar cipher, that rule is a uniform shift: A becomes D, B becomes E, and so on. The cipher does not change the frequency of letters — it only changes which letter stands in for which. That predictability is exactly what makes it breakable.

---

**Visitor Takeaway**

The earliest methods of hiding messages worked because the people receiving them already shared a secret with the sender — the shape of the rod, the size of the shift. Secrecy was relational, not mathematical. The moment someone with no prior knowledge could still break the message, the method was already obsolete.

---

**Curiosity-Gap Transition to Exhibit 2**

Substitution ciphers were broken almost as soon as people started using them seriously. But there was a period — roughly a thousand years — when one particular technique was nearly unbeatable, and the people in power knew it. The next room is about what happened when cryptography stopped being personal and started being political.

---

**Sources Used:** Britannica — History of Cryptology; Britannica — Caesar Cipher; NSA — Fun Facts about Cryptology

---

### Exhibit 2: Ciphers, States, and Power

**Subtitle:** When Secrecy Became a Tool of the State

---

**Room Introduction**

At some point, cryptography stopped being a personal matter and became an instrument of power. Diplomats encoded their dispatches. Governments built cipher bureaus. The ability to send a message that only your intended recipient could read — and to read messages that were not meant for you — became a strategic advantage.

But power creates its own vulnerabilities. The same period that produced more sophisticated ciphers also produced the first serious science of breaking them.

---

**Key Points**

1. Around 850 CE, a scholar in Baghdad named Al-Kindi wrote what is described as one of the earliest recorded explanations of cryptanalysis — the science of breaking codes. His treatise described how to identify patterns in cipher text by analyzing which letters appeared most frequently. *(Source: History of Information — Al-Kindi)*

2. Al-Kindi's insight, now called frequency analysis, turns the structure of language against the cipher. If the letter E appears most often in English, then the most frequent symbol in a cipher text is probably a stand-in for E. A substitution cipher may change the letters, but it cannot change how often they appear.

3. The Vigenère cipher — which uses a repeating keyword to shift different letters by different amounts — resisted frequency analysis for a long time. It was considered extremely difficult to break. `[VERIFY — date of Vigenère cipher, attribution]`

4. Charles Babbage developed a method for breaking the Vigenère cipher around 1846 but did not publish it. Friedrich Kasiski published the first recorded account of the method in 1863. The technique works by finding repeated sequences in the cipher text and using the distances between them to determine the length of the keyword — which then allows each letter group to be attacked separately. *(Source: Michigan Tech — Kasiski's Method)*

5. The breaking of increasingly complex ciphers followed a recurring pattern: a new method appeared, was believed unbreakable, and eventually yielded to someone who looked carefully enough at the structure it relied on.

---

**Featured Artifact Idea**

A frequency analysis chart showing the relative frequency of each letter in the English language, alongside an example cipher text. A visitor can see which symbols appear most often in the cipher and begin to map them to likely letters.

*Artifact copy:* "Al-Kindi recognized something that every cipher maker has had to reckon with since: the message does not travel alone. The shape of the language travels with it."

---

**Concept Explanation**

**Frequency analysis:** Every language has patterns. In English, certain letters — E, T, A, O — appear far more often than others. In a simple substitution cipher, the most frequent symbol in the cipher text will typically correspond to the most frequent letter in the underlying language. Frequency analysis uses this property to reverse-engineer a cipher without possessing the key.

---

**Visitor Takeaway**

Every cipher that relies on a fixed, repeating pattern carries the seeds of its own defeat. Al-Kindi understood this a thousand years before mechanical cryptography was invented. The arms race between cipher and analysis was not a product of the modern era — it was already well underway.

---

**Curiosity-Gap Transition to Exhibit 3**

By the twentieth century, hand-crafted ciphers were no longer sufficient for the scale of modern communication. States were sending thousands of messages a day. The solution was to build machines — devices that could encode and decode at speed and at scale. The next room covers what those machines could do, and what they could not hide.

---

**Sources Used:** History of Information — Al-Kindi; Michigan Tech — Kasiski's Method

---

### Exhibit 3: Machines of Secrecy

**Subtitle:** When Complexity Became the Key

---

**Room Introduction**

The twentieth century industrialized almost everything, including secrecy. The cipher machines developed in the years around World War I and II were extraordinary pieces of engineering — capable of producing ciphers of staggering complexity. The Germans believed the Enigma machine produced messages that were effectively unbreakable.

They were wrong. But breaking it required building machines in return.

---

**Key Points**

1. The Enigma machine was invented by German engineer Arthur Scherbius shortly after World War I. It used a series of rotating electrical components — rotors — to scramble letters through a different substitution with every keypress, producing cipher text that changed configuration continuously. *(Source: Bletchley Park — Enigma)*

2. The Bombe, developed by Alan Turing, was built to work out Naval Enigma settings that could not be solved by hand. Its task was to determine the Enigma daily key: specifically, the wheel order, the wheel settings, and the plugboard configuration that would allow thousands of intercepted messages to be deciphered. *(Source: Bletchley Park — Bombe; National Museum of Computing — The Turing-Welchman Bombe)*

3. The British codebreaking operation at Bletchley Park did not begin the work on Enigma. Three Polish mathematicians — Marian Rejewski, Henryk Zygalski, and Jerzy Różycki — had already worked on Enigma before the war. The work done at Bletchley Park was built on the foundation they established in the 1930s. *(Source: JSTOR Daily — The Polish Connection; ScienceDirect — Rejewski & Enigma)*

4. What Turing and his colleagues faced was not just a cryptanalysis problem but a mechanical one: the Enigma's rotor settings changed daily, which meant the deciphering process had to be repeated for each new day's key. The Bombe systematically tested possible configurations at a speed no team of analysts could match by hand.

5. The lesson of Enigma is not simply that codes can be broken. It is that the same properties that make a system mechanically complex — many moving parts, many settings — also make it systematically analyzable. Complexity is not a substitute for mathematical security.

---

**Featured Artifact Idea**

A labeled diagram of the Enigma machine's rotor system, showing how the electrical pathway through the rotors changes position with each keystroke — producing a different substitution for each letter pressed.

*Artifact copy:* "Every time a key was pressed on the Enigma machine, the rotors stepped forward, changing the electrical pathway entirely. The same letter pressed twice would produce two different cipher letters. This was considered its great strength. It was also the source of its vulnerability."

---

**Concept Explanation**

**Enigma daily key:** The Enigma machine's operators changed their settings every day according to a codebook. The daily key included the order of the rotors, their starting positions, and the configuration of the plugboard. Breaking any given day's Enigma messages required first determining that day's key — which is exactly what the Bombe was built to do.

---

**Visitor Takeaway**

The Enigma story is sometimes told as a story about Turing. The fuller version begins with three Polish mathematicians whose work was interrupted by invasion, continued in secret, and eventually reached the people who had the resources to finish it. Codebreaking in the twentieth century was not the work of lone geniuses. It was collaborative, institutional, and built on what came before.

---

**Curiosity-Gap Transition to Exhibit 4**

After World War II, something shifted. The question stopped being "how do we build a better machine?" and started being "what is secrecy, mathematically speaking?" The next room covers the moment cryptography stopped being an engineering problem and became a branch of mathematics — and why that distinction changed everything.

---

**Sources Used:** Bletchley Park — Enigma; Bletchley Park — Bombe; National Museum of Computing — The Turing-Welchman Bombe; JSTOR Daily — The Polish Connection; ScienceDirect — Rejewski & Enigma

---

### Exhibit 4: The Mathematical Turn

**Subtitle:** When Secrecy Became a Proof

---

**Room Introduction**

At some point in the mid-twentieth century, cryptography became mathematics. This was not just a change in tools — it was a change in what the question even was. Instead of asking "how do we make this harder to break?" researchers began asking "what does it mean for a cipher to be provably secure?"

The answers to that question made the modern internet possible.

---

**Key Points**

1. Claude Shannon's paper on the mathematical theory of secrecy — published around 1949 — reframed cryptography entirely. Shannon defined secrecy systems formally, analyzed their structure, and established the terms under which a cipher could be considered secure. Cryptography was no longer an art of ingenious design. It was a formal discipline with proofs. *(Source: Shannon — Communication Theory of Secrecy Systems)*

2. One of the central problems cryptography had never fully solved was the key distribution problem: before two parties can communicate securely, they need to share a secret key. For most of history, that meant meeting in person, or trusting a courier. For modern communication at scale, neither was viable.

3. Diffie and Hellman proposed a solution: a cryptosystem in which the enciphering key and the deciphering key are distinct, and the public enciphering key can be shared openly without compromising the private deciphering key. You could publish your public key to the world. Only you could decrypt messages encoded with it. *(Source: Diffie & Hellman — New Directions in Cryptography)*

4. Rivest, Shamir, and Adleman built on Diffie and Hellman's framework to produce RSA — a practical method for implementing public-key cryptosystems and digital signatures. The security of RSA rests on a mathematical property: it is easy to multiply two large prime numbers together, but computationally hard to factor the result. *(Source: RSA Paper — Rivest, Shamir, Adleman)*

5. The concept these systems rely on is called a trapdoor function — a mathematical operation that is easy to perform in one direction and very difficult to reverse without specific knowledge. This asymmetry is the foundation of almost all modern encryption.

---

**Featured Artifact Idea**

A conceptual public/private key diagram: two labeled keys, an open padlock, a message. The diagram shows that anyone can lock (encrypt with the public key), but only the holder of the private key can unlock (decrypt).

*Artifact copy:* "Before public-key cryptography, two parties who wanted to communicate securely had to share a secret in advance. Diffie and Hellman's insight was that you could eliminate that requirement entirely — that the mathematics itself could substitute for the prior meeting."

---

**Concept Explanation**

**Public-key cryptography:** In a public-key system, every participant has two keys: a public key that can be shared freely, and a private key that is never shared. A message encrypted with someone's public key can only be decrypted with their private key. This makes it possible for two people who have never communicated before to establish a secure channel — without exchanging a secret in advance.

---

**Visitor Takeaway**

Shannon, Diffie, Hellman, Rivest, Shamir, and Adleman did not just improve cryptography. They solved a problem that had existed for as long as the field had: how do you share a secret with someone you have never met? The mathematical tools they developed in a span of about thirty years became the infrastructure underlying every secure transaction on the internet.

---

**Curiosity-Gap Transition to Exhibit 5**

Most people have never heard of public-key cryptography. Most people use it dozens of times a day. The final room is about where all of this mathematics lives in the world right now — invisible, automatic, and everywhere.

---

**Sources Used:** Shannon — Communication Theory of Secrecy Systems; Diffie & Hellman — New Directions in Cryptography; RSA Paper — Rivest, Shamir, Adleman

---

### Exhibit 5: The Invisible Shield of Modern Life

**Subtitle:** The Cryptography You Use Without Knowing It

---

**Room Introduction**

You probably have not thought much about cryptography today. You have almost certainly used it.

Every time a browser connects to a secure website, every encrypted message you send, every online transaction — these are all running on systems that trace their intellectual lineage directly back through the four rooms you have just walked through. The difference is that today, none of it requires you to understand it. It simply works.

This room is about what "simply works" actually means.

---

**Key Points**

1. When your browser connects to a secure website, it performs a TLS handshake: the browser and server open a secure connection, exchange public-key information, and generate session keys that encrypt the communication going forward. This happens in milliseconds. *(Source: Cloudflare — How SSL/TLS Works)*

2. End-to-end encryption takes this further: data is encrypted before it leaves the sender's device, remains encrypted throughout transit, and is only decrypted on the recipient's device. No server in the middle — not even the service provider — holds the key. *(Source: IBM — What is End-to-End Encryption?)*

3. Signal is one example of a service that uses end-to-end encryption: conversations are encrypted so that only the intended recipients can read or hear them. *(Source: Signal — Is it private? Can I trust it?)*

4. In 1991, Phil Zimmermann released Pretty Good Privacy (PGP), a tool that made public-key encryption available to individuals — not just governments and corporations. The response from the U.S. government was a criminal investigation: PGP had spread internationally as freeware, which at the time violated U.S. export control laws. The investigation was eventually dropped, but it demonstrated that the politics of cryptography were not resolved by its mathematics. *(Source: OpenPGP — History of OpenPGP)*

5. In August 2024, NIST published the first three finalized post-quantum cryptography standards — new encryption methods designed to remain secure against the computational capabilities of future quantum computers. Organizations are advised to begin migrating their systems to quantum-resistant cryptography. The story of cryptography is not over. *(Source: NIST — Post-Quantum Cryptography; NIST — Post-Quantum Cryptography Project)*

---

**Featured Artifact Idea**

A TLS handshake diagram — a simplified sequence showing the exchange of messages between a browser and a server: the "hello," the certificate, the key exchange, and the first encrypted message. Each step labeled and briefly explained.

*Artifact copy:* "The TLS handshake completes in a fraction of a second. In that interval, two computers that have never communicated before establish a shared secret, verify each other's identities, and agree on the terms of an encrypted channel. The browser lock icon is the only thing a user ever sees."

---

**Concept Explanation**

**End-to-end encryption:** In end-to-end encryption, only the sender and the intended recipient hold the keys to decrypt the conversation. The service carrying the message — the app, the platform, the server — cannot read it. This is distinct from server-side encryption, where the service encrypts data in storage but holds the keys itself.

---

**Visitor Takeaway**

The lock icon in a browser address bar is the most visible piece of a system that descends directly from centuries of cryptographic development. The mathematics in use today would be unrecognizable to Julius Caesar or even Alan Turing. But the problem it solves — how do you communicate privately with someone, across a distance, without trusting the channel? — is exactly the same one they were working on.

---

**Curiosity-Gap Transition (End of Route)**

This is the last room in the museum. But the technology described here is still being built. Post-quantum cryptography standards were just finalized in 2024. The field that began with a strip of cloth wrapped around a stick is now preparing for computers that do not yet exist. The story continues.

---

**Sources Used:** Cloudflare — How SSL/TLS Works; IBM — What is End-to-End Encryption?; Signal — Is it private? Can I trust it?; OpenPGP — History of OpenPGP; NIST — Post-Quantum Cryptography; NIST — Post-Quantum Cryptography Project

---

## 3. Companion Page Copy

---

### Timeline Page

**Page Purpose**
To give visitors a chronological skeleton of the entire history covered in the museum. Best used after the exhibit route as a reference, or by visitors who want to orient themselves before entering the exhibits.

**Opening Copy**
The history of cryptography does not move in a straight line — but it does move forward. Each era's methods were eventually broken by the next era's tools. This timeline traces the sequence: from ancient concealment, through mechanical complexity, through mathematical abstraction, to the digital infrastructure of the present.

Items marked `[VERIFY]` are included as research candidates; specific dates will be confirmed from primary sources before this page is finalized.

**Suggested Content Sections**
- Ancient era: scytale and early cipher use
- ~850 CE: Al-Kindi's treatise on frequency analysis
- ~16th century: Vigenère cipher `[VERIFY — date, attribution]`
- ~1846 / 1863: Babbage's unpublished method / Kasiski's published work on breaking the Vigenère cipher
- Shortly after WWI: Enigma invented by Arthur Scherbius
- 1930s: Polish mathematicians (Rejewski, Zygalski, Różycki) work on Enigma
- WWII: Bletchley Park, Bombe machine, Turing
- ~1949: Shannon's mathematical theory of secrecy `[VERIFY — exact year from paper]`
- ~1976: Diffie-Hellman key exchange `[VERIFY — year from paper]`
- ~1977: RSA `[VERIFY — year from paper]`
- 1991: PGP released by Phil Zimmermann
- 1990s–present: TLS / HTTPS `[VERIFY — specific version history]`
- August 2024: NIST finalizes first three post-quantum encryption standards

**Source Notes**
All timeline entries should link to the source that supports them. Sources are documented in RESEARCH_NOTES.md.

---

### Artifacts Page

**Page Purpose**
A catalog of key objects, ciphers, and documents that appear across the exhibits. Each artifact entry has a name, period, brief description, and connection to a specific exhibit. This page should feel like a museum case catalog — simple, labeled, and precise.

**Opening Copy**
These are the objects at the center of the story. Some are physical devices. Some are mathematical structures. Some are diagrams of processes that happen invisibly. Each one marks a specific moment in the history of how people protected — or broke — a secret.

**Suggested Artifact Entries**
- **Scytale** — Ancient Greece. A transposition device using a rod and a strip of material. *(Exhibit 1)*
- **Caesar cipher wheel** — Antiquity. A visual representation of the letter-shift substitution. *(Exhibit 1)*
- **Frequency analysis chart** — ~850 CE. Al-Kindi's method visualized: letter distributions that survive substitution. *(Exhibit 2)*
- **Vigenère square (tabula recta)** — ~16th century. The grid used to encode and decode polyalphabetic messages. *(Exhibit 2)* `[VERIFY — date]`
- **Kasiski examination diagram** — 1863. A visual of repeated cipher sequences and spacing measurements. *(Exhibit 2)*
- **Enigma rotor diagram** — Post-WWI. Cross-section showing how the electrical pathway shifts with each keypress. *(Exhibit 3)*
- **Bombe machine diagram** — WWII. The electromechanical device that tested Enigma key configurations. *(Exhibit 3)*
- **Public/private key diagram** — ~1976–1977. A conceptual illustration of asymmetric encryption. *(Exhibit 4)*
- **TLS handshake sequence** — Present. A simplified diagram of the browser-server key exchange. *(Exhibit 5)*
- **End-to-end encryption diagram** — Present. Comparing server-side vs. end-to-end encryption. *(Exhibit 5)*
- **Browser lock icon** — Present. What the padlock certifies and what it does not. *(Exhibit 5)*

**Source Notes**
Artifact descriptions should draw directly from the exhibit copy sources. See RESEARCH_NOTES.md Source Catalog for source-to-artifact mapping.

---

### Concepts Page

**Page Purpose**
Plain-language explanations of the cryptographic terms visitors encounter in the exhibits. This is not a glossary — it is a curated set of the specific ideas a visitor needs to follow the museum's narrative.

**Opening Copy**
Cryptography has its own vocabulary. These entries explain the terms that appear in the museum — not as a reference for specialists, but as a guide for anyone who wants to understand what they are looking at.

**Suggested Concept Entries**

- **Substitution cipher** — A cipher that replaces each letter with a different letter according to a fixed rule. The Caesar cipher is the clearest example. *(Exhibit 1)*
- **Transposition cipher** — A cipher that rearranges the letters of a message without changing them. The scytale is an early example. *(Exhibit 1)*
- **Frequency analysis** — The technique of analyzing which symbols appear most often in cipher text to identify their plaintext equivalents. Described by Al-Kindi around 850 CE. *(Exhibit 2)*
- **Polyalphabetic cipher** — A cipher that uses multiple substitution alphabets, typically selected by a repeating keyword. The Vigenère cipher is the most well-known example. *(Exhibit 2)* `[VERIFY — definition against primary source]`
- **Kasiski examination** — A method for determining the keyword length in a polyalphabetic cipher by analyzing repeated cipher sequences. Published by Friedrich Kasiski in 1863. *(Exhibit 2)*
- **Enigma daily key** — The daily configuration of an Enigma machine: rotor order, rotor settings, and plugboard configuration. Discovering the daily key was the Bombe's primary task. *(Exhibit 3)*
- **Public-key cryptography** — A cryptosystem in which enciphering and deciphering use distinct keys. The public key can be shared freely; only the holder of the private key can decrypt. *(Exhibit 4)*
- **Trapdoor function** — A mathematical operation that is easy to perform in one direction but computationally hard to reverse without specific knowledge. The foundation of RSA and many modern ciphers. *(Exhibit 4)*
- **TLS / HTTPS** — The protocol that secures communication between a browser and a server. Begins with a handshake in which public-key information is exchanged and session keys are generated. *(Exhibit 5)*
- **End-to-end encryption** — Encryption in which data is encrypted before leaving the sender's device and only decrypted on the recipient's device. The service provider does not hold the keys. *(Exhibit 5)*
- **Post-quantum cryptography** — Encryption methods designed to remain secure against future quantum computers. NIST published the first three finalized standards in August 2024. *(Exhibit 5)*

**Source Notes**
All concept definitions should be checked against the sources documented in RESEARCH_NOTES.md before being published.

---

### Figures Page

**Page Purpose**
Brief profiles of the people whose work shaped cryptographic history. Each profile connects the person to a specific exhibit and idea. These are not full biographies — they are contextual introductions.

**Opening Copy**
Cryptography was not invented by any one person. It was built, broken, rebuilt, and formalized by many people across many centuries and many countries. These are some of them.

**Suggested Figure Entries**

- **Julius Caesar** — Associated with the Caesar cipher, a simple letter-shift substitution. `[VERIFY — historical basis for attribution]` *(Exhibit 1)*
- **Al-Kindi** — Ninth-century scholar in Baghdad. Wrote what is described as an early recorded explanation of cryptanalysis and frequency analysis, around 850 CE. *(Exhibit 2; Source: History of Information)*
- **Friedrich Kasiski** — Published the first account of breaking the Vigenère cipher in 1863. *(Exhibit 2; Source: Michigan Tech)*
- **Charles Babbage** — Applied the same Kasiski-like technique around 1846 but did not publish it. *(Exhibit 2; Source: Michigan Tech)*
- **Arthur Scherbius** — German engineer who invented the Enigma machine shortly after World War I. `[VERIFY — biographical details]` *(Exhibit 3; Source: Bletchley Park)*
- **Marian Rejewski** — Polish mathematician who worked on Enigma cryptanalysis in the 1930s. Alan Turing and Bletchley Park built on his foundation. *(Exhibit 3; Source: JSTOR Daily / ScienceDirect)*
- **Henryk Zygalski** — One of three Polish mathematicians who worked on Enigma before Bletchley Park. *(Exhibit 3; Source: JSTOR Daily)*
- **Jerzy Różycki** — One of three Polish mathematicians who worked on Enigma before Bletchley Park. *(Exhibit 3; Source: JSTOR Daily)*
- **Alan Turing** — Developed the Bombe to determine Naval Enigma settings. Central figure in the Bletchley Park operation. `[VERIFY — full scope of contributions beyond Bombe]` *(Exhibit 3; Source: Bletchley Park)*
- **Claude Shannon** — Formulated the mathematical foundations of cryptography, including a formal theory of secrecy systems. `[VERIFY — biographical details, Bell Labs context]` *(Exhibit 4; Source: Shannon paper)*
- **Whitfield Diffie and Martin Hellman** — Proposed the public-key cryptosystem concept, with distinct enciphering and deciphering keys. `[VERIFY — year, institutional context]` *(Exhibit 4; Source: Diffie & Hellman paper)*
- **Ron Rivest, Adi Shamir, and Leonard Adleman** — Developed RSA, the first practical implementation of public-key cryptosystems and digital signatures. `[VERIFY — institutional context, year]` *(Exhibit 4; Source: RSA paper)*
- **Phil Zimmermann** — Developed PGP in 1991, making public-key encryption available to individuals. Was the subject of a criminal investigation under U.S. export control law when PGP spread internationally as freeware. *(Exhibit 5; Source: OpenPGP)*

**Source Notes**
All figure profiles marked `[VERIFY]` require dedicated biographical sources before being published. Known-verified information (dates, contributions) is drawn from the sources in RESEARCH_NOTES.md.

---

### Process Page

**Page Purpose**
Documents how this project was built. Required for the assignment. Should be honest and specific, not a polished sales pitch.

**Opening Copy**
This page documents the making of the museum — the decisions that were made, the tools that were used, and the places where the plan changed. It is not a celebration of the result. It is an account of the process.

**Suggested Content Sections**
- How the project was planned (brief summary of the planning phase)
- How AI was used — and how it was not (summary of the AI Orchestration Log)
- How research was gathered and verified (reference to RESEARCH_NOTES.md approach)
- Design decisions and what drove them
- What was left out and why
- What I would do differently

**Source Notes**
The Process page content comes from `AI_ORCHESTRATION_LOG.md`, `QA_REVIEW_LOG.md`, and personal reflection. No external sources needed for this page.

---

## 4. Reusable Microcopy

---

### Navigation Labels
- Home
- Exhibits
- Timeline
- Artifacts
- Concepts
- Figures
- Process

### CTA Labels
- Enter the Museum
- Begin the Exhibit Route
- Continue to [Next Exhibit Title]
- Return to [Previous Exhibit Title]
- View on Timeline
- See the Artifact
- Read the Concept
- View All Exhibits
- Explore the Timeline
- Back to Exhibit Route

### Exhibit Transition Labels
- Next: [Exhibit Title] →
- ← Previous: [Exhibit Title]
- You are in Exhibit [N] of 5

### Artifact Card Labels
- Artifact
- Period:
- Exhibit connection:
- Description:

### Source / Evidence Panel Labels
- Source
- Sources used in this exhibit:
- Verified via:
- Note: Items marked [VERIFY] are research candidates pending source confirmation.

---

## 5. Writing Rules

These rules apply to all copy that moves from this document into the website.

1. **No invented facts.** Every historical claim must have a source noted in RESEARCH_NOTES.md. If it does not, it stays out or gets a `[VERIFY]` tag.

2. **No generic AI filler.** Phrases like "Throughout history, cryptography has played a vital role..." or "Welcome to our museum of..." do not belong here. If a sentence does not say something specific, cut it.

3. **Write like a curator, not a textbook.** The tone is authoritative but not dry. The visitor is intelligent. Do not over-explain, but do not assume prior knowledge.

4. **Keep paragraphs short.** Two to four sentences. Museum visitors scan first, then read. Make it easy to enter the text at any line.

5. **Explain technical concepts clearly.** Every cryptographic term that appears in exhibit copy should either be briefly defined inline or linked to the Concepts page. Do not leave jargon unexplained.

6. **Preserve the discovery tone.** The Curiosity Gap principle means every section should make the visitor want to know what comes next. Do not resolve every tension in the opening paragraph.

7. **Guide the visitor.** Every exhibit page should tell the visitor what they are seeing, why it matters, and where they are going next. The guided route should feel natural, not like navigation instructions.

8. **Separate interpretation from fact.** If a sentence draws a conclusion or makes an argument, it should be clearly framed as interpretation, not as documented fact.

---

## 6. Source Use Notes

This map shows which sources from RESEARCH_NOTES.md support each section of the site.

| Source | Home | Ex. 1 | Ex. 2 | Ex. 3 | Ex. 4 | Ex. 5 | Timeline | Artifacts | Concepts | Figures |
|---|---|---|---|---|---|---|---|---|---|---|
| Britannica — History of Cryptology | ✓ | ✓ | ✓ | | | | ✓ | | | |
| Britannica — Caesar Cipher | | ✓ | | | | | | ✓ | ✓ | ✓ |
| NSA — Fun Facts about Cryptology | | ✓ | | | | | ✓ | ✓ | ✓ | |
| History of Information — Al-Kindi | | | ✓ | | | | ✓ | ✓ | ✓ | ✓ |
| Michigan Tech — Kasiski's Method | | | ✓ | | | | ✓ | ✓ | ✓ | ✓ |
| Bletchley Park — Enigma | | | | ✓ | | | ✓ | ✓ | | ✓ |
| Bletchley Park — Bombe | | | | ✓ | | | ✓ | ✓ | ✓ | ✓ |
| National Museum of Computing — Bombe | | | | ✓ | | | ✓ | ✓ | ✓ | |
| JSTOR Daily — Polish Connection | | | | ✓ | | | ✓ | | | ✓ |
| ScienceDirect — Rejewski | | | | ✓ | | | ✓ | | | ✓ |
| Shannon — Secrecy Systems | | | | | ✓ | | ✓ | | ✓ | ✓ |
| Diffie & Hellman — New Directions | | | | | ✓ | | ✓ | ✓ | ✓ | ✓ |
| RSA Paper | | | | | ✓ | | ✓ | ✓ | ✓ | ✓ |
| Cloudflare — SSL/TLS | | | | | | ✓ | ✓ | ✓ | ✓ | |
| OpenPGP — History of OpenPGP | | | | | | ✓ | ✓ | | ✓ | ✓ |
| IBM — End-to-End Encryption | | | | | | ✓ | | | ✓ | |
| Signal — Is it private? | | | | | | ✓ | | | ✓ | |
| NIST — Post-Quantum Standards | | | | | | ✓ | ✓ | | ✓ | |
| NIST — Post-Quantum Cryptography Project | | | | | | ✓ | ✓ | | ✓ | |
| NIST — PQC Overview | | | | | | ✓ | ✓ | | ✓ | |
