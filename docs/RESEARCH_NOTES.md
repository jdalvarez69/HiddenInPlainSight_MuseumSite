# RESEARCH_NOTES.md
## Hidden in Plain Sight — Research Direction and Planning

---

### Research Purpose

This document organizes the research needed to support the museum's guided visitor experience. The goal is not to produce an encyclopedia of cryptography. The goal is to find enough verified, well-understood history to tell a coherent story — one that takes a visitor from the earliest human instinct toward secrecy all the way to the encryption that runs silently behind every website they open.

Research should serve the narrative. Every fact, figure, and artifact included in the exhibits should earn its place by advancing the museum's main thesis: that cryptography began as the art of hiding messages and became the science of protecting trust.

Nothing in this document should be treated as verified until sources have been checked and noted. Items requiring verification are marked `[VERIFY]`.

---

## Verified Research Pack — Initial Source Review

This section organizes source-backed research from an initial review of ten sources. Each source has been reviewed and notes have been extracted. Verified facts are labeled **[VERIFIED]**. Claims that still need additional support remain labeled `[VERIFY]`. Interpretation is kept separate from verified fact throughout.

---

### 1. Source Catalog

| # | Source | URL | Museum Use | Page(s) |
|---|---|---|---|---|
| 1 | Britannica — History of Cryptology | https://www.britannica.com/topic/cryptology/History-of-cryptology | Broad history, antiquity through WWI | Exhibits 1–2, Timeline |
| 2 | Britannica — Caesar Cipher | https://www.britannica.com/topic/cryptology/Cryptography | Substitution ciphers, Caesar cipher | Exhibit 1, Concepts, Artifacts |
| 3 | History of Information — Al-Kindi | https://historyofinformation.com/detail.php?id=3162 | Al-Kindi, frequency analysis, early cryptanalysis | Exhibit 2, Figures, Concepts, Timeline |
| 4 | Bletchley Park — Enigma | https://www.bletchleypark.org.uk/our-story/enigma/ | Enigma machine, WWII mechanical cryptography | Exhibit 3, Artifacts, Timeline |
| 5 | Bletchley Park — Bombe | https://www.bletchleypark.org.uk/our-story/6-facts-about-the-bombe/ | Bombe machine, Alan Turing, codebreaking | Exhibit 3, Figures, Artifacts, Timeline |
| 6 | Shannon — Secrecy Systems | https://pages.cs.wisc.edu/~rist/642-spring-2014/shannon-secrecy.pdf | Mathematical theory of secrecy | Exhibit 4, Concepts, Timeline |
| 7 | Diffie & Hellman — New Directions | https://ee.stanford.edu/~hellman/publications/24.pdf | Public-key cryptography, key exchange | Exhibit 4, Concepts, Timeline |
| 8 | RSA Paper — Rivest, Shamir, Adleman | https://people.csail.mit.edu/rivest/Rsapaper.pdf | RSA, digital signatures | Exhibit 4, Figures, Concepts, Timeline |
| 9 | Cloudflare — How SSL/TLS Works | https://www.cloudflare.com/learning/ssl/how-does-ssl-work/ | TLS handshake, HTTPS, session keys | Exhibit 5, Concepts, Timeline |
| 10 | NIST — Post-Quantum Standards | https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards | Post-quantum encryption standards | Exhibit 5, Concepts, Timeline |

---

### 2. Verified Notes by Exhibit

---

#### Exhibit 1: The Birth of Secret Writing

**Verified facts:**
- Britannica describes early cryptology as beginning in antiquity, with a long manual cryptography period that continued through World War I. **[VERIFIED — Britannica, Source 1]**
- Britannica describes the Caesar cipher as a simple cyclical shift substitution cipher associated with Julius Caesar, where letters are shifted by a fixed amount. **[VERIFIED — Britannica, Source 2]**

**Possible museum interpretation:**
The Caesar cipher is a useful entry point for the exhibit because it is simple enough for any visitor to understand in minutes, yet illustrates the core logic of all substitution ciphers. It can carry the exhibit's opening argument: that early cryptography was clever, but vulnerable by design.

**Possible artifact use:**
- A cipher wheel showing the letter shift — directly supported by the substitution cipher description
- An example encoded and decoded message using the Caesar shift

**Remaining verification needs:**
- Specific examples of ancient steganography (e.g., tattooed scalp, wax tablets) `[VERIFY]`
- Date range and context for the earliest documented cipher uses beyond Caesar `[VERIFY]`
- The scytale's historical basis and whether it is truly a cipher or an authentication device `[VERIFY]`

---

#### Exhibit 2: Ciphers, States, and Power

**Verified facts:**
- Al-Kindi wrote a treatise on deciphering cryptographic messages in Baghdad around 850 CE. This is described as an early recorded explanation of cryptanalysis and frequency analysis. **[VERIFIED — History of Information, Source 3]**

**Possible museum interpretation:**
Al-Kindi's work represents a turning point: the moment where understanding how ciphers fail became as important as creating them. The exhibit can use this to argue that the arms race between maker and breaker is not a modern phenomenon — it is as old as the ciphers themselves.

**Possible artifact use:**
- A frequency analysis chart showing letter distributions in English, with a note on how Al-Kindi identified this principle centuries before modern statistics

**Remaining verification needs:**
- The full title and broader context of Al-Kindi's treatise `[VERIFY]`
- The Vigenère cipher: actual date of publication, attribution to Vigenère vs. earlier sources `[VERIFY]`
- Renaissance diplomatic cipher use: specific documented examples `[VERIFY]`
- Kasiski and Babbage's breaking of the Vigenère cipher: dates and method `[VERIFY]`

---

#### Exhibit 3: Machines of Secrecy

**Verified facts:**
- The Enigma machine was invented by German engineer Arthur Scherbius shortly after World War I. **[VERIFIED — Bletchley Park, Source 4]**
- Alan Turing originally developed the Bombe to help work out Naval Enigma settings that were not breakable by by-hand methods. **[VERIFIED — Bletchley Park, Source 5]**

**Possible museum interpretation:**
The Enigma machine represents the industrialization of secrecy — mechanical complexity as a substitute for mathematical security. Turing's Bombe demonstrates that mechanical systems can be attacked mechanically, and that systematic vulnerability was built into the design from the start.

**Possible artifact use:**
- Enigma rotor diagram — supported by Bletchley Park source
- Bombe machine diagram — supported by Bletchley Park source

**Remaining verification needs:**
- The role of Polish mathematicians (Marian Rejewski, Biuro Szyfrów) before British involvement `[VERIFY]`
- The documented impact of Enigma codebreaking on the war's outcome — what is established vs. contested `[VERIFY]`
- Other WWII cipher machines (Lorenz, SIGABA) `[VERIFY]`

---

#### Exhibit 4: The Mathematical Turn

**Verified facts:**
- Shannon's 1949 paper frames cryptography mathematically by defining secrecy systems and analyzing their structure. **[VERIFIED — Shannon, Source 6]**
- Diffie and Hellman describe a public-key cryptosystem where enciphering and deciphering use distinct keys, and the public enciphering key can be disclosed without compromising the private deciphering key. **[VERIFIED — Diffie & Hellman, Source 7]**
- The RSA paper presents a method for public-key cryptosystems and digital signatures, building directly on the public-key concept introduced by Diffie and Hellman. **[VERIFIED — RSA Paper, Source 8]**

**Possible museum interpretation:**
This exhibit carries the heaviest conceptual weight of the route. The key narrative thread is that Shannon gave cryptography a mathematical foundation, Diffie and Hellman solved the key distribution problem in theory, and RSA showed it could be done in practice. Together, these three breakthroughs made modern secure communication possible.

**Possible artifact use:**
- A conceptual public/private key diagram — supported by Diffie-Hellman and RSA sources
- A simplified explanation of the trapdoor function concept — supported by both papers

**Remaining verification needs:**
- Shannon's specific claim about perfect secrecy and the one-time pad in this paper `[VERIFY]`
- The year Diffie-Hellman was published — commonly cited as 1976 `[VERIFY — confirm from paper itself]`
- The year RSA was published — commonly cited as 1977 `[VERIFY — confirm from paper itself]`
- GCHQ's classified independent discovery of public-key cryptography (Ellis, Cocks, Williamson) `[VERIFY]`

---

#### Exhibit 5: The Invisible Shield of Modern Life

**Verified facts:**
- TLS starts with a handshake where communicating parties open a secure connection, exchange public-key information, and generate session keys for encrypted communication. **[VERIFIED — Cloudflare, Source 9]**
- NIST announced the first three finalized post-quantum encryption standards in August 2024, framing them as a response to future quantum-computing threats to current cryptographic methods. **[VERIFIED — NIST, Source 10]**

**Possible museum interpretation:**
The TLS handshake is the everyday descendant of everything in the four preceding exhibits — an invisible sequence that borrows from asymmetric key exchange, symmetric session keys, and mathematical one-way functions, all executed in milliseconds. The NIST post-quantum announcement gives the exhibit a closing hook: the story is not over.

**Possible artifact use:**
- A TLS handshake sequence diagram — directly supported by Cloudflare source
- A browser lock icon with explanation of what it certifies — supported by Cloudflare source
- NIST post-quantum standards announcement as a timeline endpoint

**Remaining verification needs:**
- Phil Zimmermann and PGP: year released, legal history, significance `[VERIFY]`
- End-to-end encryption: how it differs technically from TLS, current use cases `[VERIFY]`
- Certificate authorities and chain of trust vulnerabilities `[VERIFY]`
- How specific quantum algorithms threaten current RSA and elliptic curve cryptography `[VERIFY]`

---

### 3. Timeline Candidates With Source Support

| Event / Topic | Approximate Date | Source Support | Exhibit Connection | Status |
|---|---|---|---|---|
| Early cryptology begins (antiquity) | Ancient era | Britannica (Source 1) | Exhibit 1 | **[VERIFIED — broad claim]** |
| Caesar cipher | ~100 BCE | Britannica (Source 2) | Exhibit 1 | **[VERIFIED — description]**; specific dates `[VERIFY]` |
| Al-Kindi's treatise on frequency analysis | ~850 CE | History of Information (Source 3) | Exhibit 2 | **[VERIFIED]** |
| Manual cryptography era continues | Antiquity through WWI | Britannica (Source 1) | Exhibits 1–3 | **[VERIFIED — broad claim]** |
| Vigenère cipher | ~16th century | — | Exhibit 2 | `[VERIFY — date, attribution]` |
| Enigma machine invented | Shortly after WWI | Bletchley Park (Source 4) | Exhibit 3 | **[VERIFIED — inventor and period]**; exact year `[VERIFY]` |
| Shannon's secrecy paper | 1949 | Shannon (Source 6) | Exhibit 4 | **[VERIFIED — paper exists and content confirmed]**; exact date `[VERIFY from paper]` |
| Diffie-Hellman paper | 1976 (commonly cited) | Diffie & Hellman (Source 7) | Exhibit 4 | **[VERIFIED — paper exists and content confirmed]**; year `[VERIFY from paper]` |
| RSA paper | 1977 (commonly cited) | RSA Paper (Source 8) | Exhibit 4 | **[VERIFIED — paper exists and content confirmed]**; year `[VERIFY from paper]` |
| TLS / HTTPS handshake mechanism | 1990s–present | Cloudflare (Source 9) | Exhibit 5 | **[VERIFIED — mechanism]**; specific version history `[VERIFY]` |
| NIST post-quantum standards finalized | August 2024 | NIST (Source 10) | Exhibit 5 | **[VERIFIED]** |

---

### 4. Source-to-Page Map

| Source | Home Page | Exhibit 1 | Exhibit 2 | Exhibit 3 | Exhibit 4 | Exhibit 5 | Timeline | Figures | Artifacts | Concepts |
|---|---|---|---|---|---|---|---|---|---|---|
| Britannica — History of Cryptology | | ✓ | ✓ | | | | ✓ | | | |
| Britannica — Caesar Cipher | | ✓ | | | | | | | ✓ | ✓ |
| History of Information — Al-Kindi | | | ✓ | | | | ✓ | ✓ | | ✓ |
| Bletchley Park — Enigma | | | | ✓ | | | ✓ | | ✓ | |
| Bletchley Park — Bombe | | | | ✓ | | | ✓ | ✓ | ✓ | |
| Shannon — Secrecy Systems | | | | | ✓ | | ✓ | | | ✓ |
| Diffie & Hellman — New Directions | | | | | ✓ | | ✓ | | | ✓ |
| RSA Paper | | | | | ✓ | | ✓ | ✓ | | ✓ |
| Cloudflare — SSL/TLS | | | | | | ✓ | ✓ | | ✓ | ✓ |
| NIST — Post-Quantum Standards | | | | | | ✓ | ✓ | | | ✓ |

---

### 5. Remaining Research Gaps

The following areas need additional sources before exhibit copy can be written:

**Exhibit 1**
- Ancient steganography examples (specific documented cases)
- The scytale: historical basis, dating, function
- The distinction between steganography and cryptography — needs a citable source

**Exhibit 2**
- Full title and scholarly context of Al-Kindi's treatise
- Vigenère cipher: correct attribution (the polyalphabetic cipher is often misattributed) and publication date
- Renaissance diplomatic cipher use: at least one documented historical example
- Kasiski and Babbage: dates and method of breaking the Vigenère cipher

**Exhibit 3**
- Polish cryptanalysis (Rejewski et al.) before Bletchley Park — needs a dedicated source
- The documented operational impact of Enigma codebreaking on WWII outcomes
- Other cipher machines of the era

**Exhibit 4**
- The one-time pad and perfect secrecy: citable source
- Exact publication dates for Diffie-Hellman and RSA papers (to be confirmed from the papers themselves)
- GCHQ's independent development of public-key cryptography: documented source

**Exhibit 5**
- Phil Zimmermann and PGP: year, context, legal history
- End-to-end encryption: technical definition and current deployment
- Certificate authority trust model and known failures
- Quantum threat to RSA and elliptic curve — accessible but credible technical source

**Figures page**
- Dedicated biographical sources for: Al-Kindi, Marian Rejewski, Whitfield Diffie, Martin Hellman, Ron Rivest, Adi Shamir, Leonard Adleman, Phil Zimmermann
- All figure profiles remain `[VERIFY]` until dedicated sources are reviewed

**Timeline**
- Specific dates for: Enigma invention, Shannon's paper, Diffie-Hellman paper, RSA paper, PGP release, TLS introduction
- These dates appear in common reference but need to be confirmed from the primary sources already on file or from additional sources

---

## Verified Research Pack 2 — Research Gap Support

This section adds source-backed research to address specific gaps identified in the Initial Source Review. Verified facts are labeled **[VERIFIED]**. Remaining gaps are labeled `[VERIFY]`. Interpretation is kept separate from verified fact.

---

### 1. Source Catalog — Pack 2

| # | Source | URL | Museum Use | Page(s) |
|---|---|---|---|---|
| 11 | NSA — Fun Facts about Cryptology | https://media.defense.gov/2021/Jul/13/2002761880/-1/-1/0/FUN-FACTS-SHEET.PDF | Scytale, ancient cryptology, transposition ciphers | Exhibit 1, Timeline, Artifacts, Concepts |
| 12 | Michigan Tech — Kasiski's Method | https://pages.mtu.edu/~shene/NSF-4/Tutorial/VIG/Vig-Kasiski.html | Kasiski examination, Vigenère cryptanalysis, Babbage | Exhibit 2, Concepts, Figures, Timeline |
| 13 | JSTOR Daily — The Polish Connection | https://daily.jstor.org/polish-codebreakers/ | Polish codebreakers, Rejewski, Zygalski, Różycki | Exhibit 3, Figures, Timeline |
| 14 | ScienceDirect — Rejewski & Enigma | https://www.sciencedirect.com/science/article/pii/S2666389920300118 | Rejewski, Polish foundation for Bletchley Park | Exhibit 3, Figures, Timeline |
| 15 | National Museum of Computing — Bombe | https://www.tnmoc.org/bombe | Bombe machine, Enigma daily keys, codebreaking | Exhibit 3, Artifacts, Concepts, Timeline |
| 16 | OpenPGP — History of OpenPGP | https://www.openpgp.org/about/history/ | PGP, Phil Zimmermann, encryption debates | Exhibit 5, Figures, Timeline, Concepts |
| 17 | IBM — What is End-to-End Encryption? | https://www.ibm.com/think/topics/end-to-end-encryption | End-to-end encryption definition | Exhibit 5, Concepts |
| 18 | Signal — Is it private? Can I trust it? | https://support.signal.org/hc/en-us/articles/360007320391-Is-it-private-Can-I-trust-it | Modern E2E encrypted messaging | Exhibit 5, Concepts |
| 19 | NIST — Post-Quantum Cryptography Project | https://csrc.nist.gov/projects/post-quantum-cryptography | Post-quantum migration guidance | Exhibit 5, Timeline, Concepts |
| 20 | NIST — PQC Overview | https://www.nist.gov/pqc | Post-quantum standards, modern encryption | Exhibit 5, Timeline, Concepts |

---

### 2. Research Gap Updates by Exhibit

---

#### Exhibit 1: The Birth of Secret Writing — Gap Addressed

**Gap addressed:** The scytale: historical basis, dating, and function.

**Verified fact:**
The NSA source explains that ancient Greeks used a scytale by wrapping a strip of cloth around a stick, writing the message vertically, filling in random letters, unwrapping it, and sending the strip — so the message looked random until wrapped around a matching stick of the same diameter. **[VERIFIED — NSA, Source 11]**

**Possible museum interpretation:**
The scytale is an effective early artifact for the exhibit because it makes the mechanism of transposition tangible for a general visitor. The important point is what it reveals about the underlying logic of all transposition ciphers: the same letters, rearranged in a way only the intended recipient can reverse.

**Possible artifact or visual use:**
- A diagram or illustration of a scytale with the cloth strip partially unwound — directly supported by the NSA description

**Remaining verification needs:**
- Specific documented date range for scytale use by Spartan military `[VERIFY]`
- Whether the scytale was used for authentication as well as concealment `[VERIFY]`

---

#### Exhibit 2: Ciphers, States, and Power — Gap Addressed

**Gap addressed:** The breaking of the Vigenère cipher — Kasiski and Babbage dates and method.

**Verified facts:**
- Friedrich Kasiski published *Die Geheimschriften und die Dechiffrirkunst* in 1863. This is described as the first published work on breaking the Vigenère cipher. **[VERIFIED — Michigan Tech, Source 12]**
- Charles Babbage used the same technique earlier, around 1846, but did not publish it. **[VERIFIED — Michigan Tech, Source 12]**

**Possible museum interpretation:**
The Kasiski examination closes the loop on the Vigenère cipher story: it was once called unbreakable, but the very structure that made it stronger than simple substitution — repeated use of a keyword — is also what made it vulnerable. The exhibit can use this as a recurring theme: every pattern in a cipher is a potential weakness.

**Possible artifact or visual use:**
- A visual showing repeated ciphertext segments with distance measurements — the core of the Kasiski method
- Note on Babbage: a possible sidebar on the gap between discovery and publication as a pattern in cryptographic history

**Remaining verification needs:**
- Full title and publication context of Kasiski's 1863 work confirmed — **[VERIFIED]**, but detailed content of the method `[VERIFY from primary or scholarly source]`
- Babbage's 1846 date: described as approximate in the source `[VERIFY]`
- Vigenère attribution and original publication date still `[VERIFY]`

---

#### Exhibit 3: Machines of Secrecy — Gaps Addressed

**Gap addressed:** Polish cryptanalysis before Bletchley Park; the Bombe's specific function.

**Verified facts:**
- Bletchley Park's codebreakers had significant help from three Polish mathematicians — Marian Rejewski, Henryk Zygalski, and Jerzy Różycki — who had worked on Enigma before the British wartime effort. **[VERIFIED — JSTOR Daily, Source 13]**
- Alan Turing and Bletchley Park's work breaking Enigma was built on the 1930s foundation laid by Polish cryptographer Marian Rejewski. **[VERIFIED — ScienceDirect, Source 14]**
- The Bombe's task was to discover the Enigma daily key — including wheel order, wheel settings, and plugboard configuration — so that the thousands of intercepted Enigma messages could be deciphered. **[VERIFIED — National Museum of Computing, Source 15]**

**Possible museum interpretation:**
The Polish contribution is a meaningful narrative correction for this exhibit. The common telling begins with Bletchley Park; the fuller account begins in Warsaw. The exhibit can frame this as a demonstration that wartime cryptanalysis was a collaborative, multinational effort built on work that preceded the war itself.

The Bombe's function gives visitors a specific, concrete description of what mechanical codebreaking actually did — it did not "break" Enigma once, it discovered the daily key for ongoing decryption.

**Possible artifact or visual use:**
- Bombe diagram showing wheel order, settings, and plugboard as variables being tested — directly supported by the National Museum of Computing source
- A brief profile callout for Rejewski, Zygalski, and Różycki alongside Turing

**Remaining verification needs:**
- Specific dates for Polish cryptanalytic work in the 1930s `[VERIFY]`
- The documented transfer of Polish findings to Bletchley Park `[VERIFY]`
- Operational impact of Enigma codebreaking on WWII outcomes — what is documented vs. contested `[VERIFY]`

---

#### Exhibit 5: The Invisible Shield of Modern Life — Gaps Addressed

**Gap addressed:** Phil Zimmermann and PGP; end-to-end encryption definition; post-quantum migration.

**Verified facts:**
- OpenPGP is based on Pretty Good Privacy, originally developed in 1991 by Phil Zimmermann. Zimmermann became the target of a criminal investigation because of U.S. export restrictions when PGP spread internationally as freeware. **[VERIFIED — OpenPGP, Source 16]**
- IBM defines end-to-end encryption as a secure communication process that encrypts data before transfer and keeps it encrypted in transit until it is decrypted on the recipient's device. **[VERIFIED — IBM, Source 17]**
- Signal states that Signal conversations are always end-to-end encrypted, meaning only the intended recipients can read or hear them. **[VERIFIED — Signal, Source 18]**
- NIST states that with the release of the first three final post-quantum cryptography standards, organizations should begin migrating systems to quantum-resistant cryptography. **[VERIFIED — NIST, Source 19]**
- NIST states that it has released three post-quantum cryptography standards that can be implemented to secure electronic information, including confidential email and e-commerce transactions. **[VERIFIED — NIST, Source 20]**

**Possible museum interpretation:**
Phil Zimmermann's story introduces a dimension of this exhibit that goes beyond technical mechanism: encryption as a political act. The criminal investigation over PGP export is a useful illustration that the tools of cryptography carry legal and social weight, not just mathematical weight. This fits the museum's framing that every new method of secrecy changed the balance of power.

The IBM and Signal sources together give the exhibit a clean, citable definition of end-to-end encryption and a real-world example of it in use.

The pair of NIST sources frames the exhibit's closing moment: the story of cryptography is not finished, and the current infrastructure is under active development.

**Possible artifact or visual use:**
- A diagram comparing server-side encryption vs. end-to-end encryption — supported by IBM definition
- A note on PGP and the Zimmermann case as a sidebar or callout — gives the exhibit a human and political dimension

**Remaining verification needs:**
- Outcome of the Zimmermann criminal investigation `[VERIFY]`
- Certificate authority trust model and documented failures `[VERIFY]`
- Quantum computing threat to RSA and elliptic curve cryptography — specific technical mechanism `[VERIFY]`
- TLS version history (SSL 1.0 through current TLS 1.3) `[VERIFY]`

---

### 3. Companion Page Updates

---

#### Timeline

New entries now supported by Pack 2 sources:

| Event / Topic | Approximate Date | Source Support | Exhibit Connection |
|---|---|---|---|
| Scytale used in ancient Greece | Ancient (specific date unconfirmed) | NSA (Source 11) | Exhibit 1 |
| Babbage applies Kasiski-like method (unpublished) | ~1846 | Michigan Tech (Source 12) | Exhibit 2 |
| Kasiski publishes method for breaking Vigenère | 1863 | Michigan Tech (Source 12) | Exhibit 2 |
| Polish mathematicians work on Enigma (1930s) | 1930s | JSTOR Daily / ScienceDirect (Sources 13–14) | Exhibit 3 |
| PGP developed by Phil Zimmermann | 1991 | OpenPGP (Source 16) | Exhibit 5 |
| NIST post-quantum standards: migration recommended | 2024 | NIST (Sources 19–20) | Exhibit 5 |

---

#### Artifacts

New or strengthened artifact candidates from Pack 2:

- **Scytale illustration** — The NSA description of the mechanism is specific enough to support a labeled diagram showing the cloth strip wrapped and unwrapped.
- **Kasiski examination visual** — A diagram of repeated ciphertext segments with spacing measurements, illustrating how keyword length is inferred.
- **Bombe wheel settings diagram** — The National Museum of Computing description of wheel order, settings, and plugboard configuration supports a labeled explainer graphic.
- **End-to-end encryption diagram** — The IBM definition supports a before/after comparison of server-side vs. end-to-end encryption.

---

#### Concepts

New or strengthened concept entries from Pack 2:

- **Transposition cipher** — The NSA scytale description gives a concrete, citable example for the concepts page entry.
- **Kasiski examination** — Michigan Tech source supports a plain-language explanation of the method.
- **End-to-end encryption** — IBM definition is concise and usable directly as a starting point for the concepts page entry.
- **Post-quantum cryptography** — Both NIST sources support a definition and current-status entry.

---

#### Figures

New figure information confirmed from Pack 2:

| Figure | New Verified Information | Source |
|---|---|---|
| Marian Rejewski | Contributed to Enigma cryptanalysis in the 1930s; Bletchley Park built on his foundation | JSTOR Daily / ScienceDirect (Sources 13–14) |
| Henryk Zygalski | One of three Polish mathematicians who worked on Enigma before Bletchley Park | JSTOR Daily (Source 13) |
| Jerzy Różycki | One of three Polish mathematicians who worked on Enigma before Bletchley Park | JSTOR Daily (Source 13) |
| Phil Zimmermann | Developed PGP in 1991; subject of criminal investigation over U.S. export restrictions | OpenPGP (Source 16) |

All other figures remain `[VERIFY]` pending dedicated biographical sources.

---

### 4. Updated Timeline Candidates — Pack 2 Additions

The following entries are new or improved since Pack 1, with source support from Pack 2:

| Event / Topic | Approximate Date | Source Support | Status |
|---|---|---|---|
| Scytale used in ancient Greece | Ancient (date unconfirmed) | NSA (Source 11) | **[VERIFIED — mechanism]**; date `[VERIFY]` |
| Babbage applies Kasiski method (unpublished) | ~1846 | Michigan Tech (Source 12) | **[VERIFIED]**; exact year `[VERIFY]` |
| Kasiski publishes Vigenère breaking method | 1863 | Michigan Tech (Source 12) | **[VERIFIED]** |
| Polish cryptanalysts work on Enigma | 1930s | JSTOR Daily / ScienceDirect (Sources 13–14) | **[VERIFIED — decade]**; specific years `[VERIFY]` |
| PGP released by Phil Zimmermann | 1991 | OpenPGP (Source 16) | **[VERIFIED]** |
| NIST post-quantum standards: organizations advised to migrate | 2024 | NIST (Sources 19–20) | **[VERIFIED]** |

---

### 5. Remaining Research Gaps After Pack 2

The following gaps remain after both source packs:

**Exhibit 1**
- Ancient steganography examples beyond the scytale (specific documented cases) `[VERIFY]`
- Scytale: specific date range for Spartan military use `[VERIFY]`
- Distinction between steganography and cryptography: citable institutional source `[VERIFY]`

**Exhibit 2**
- Full scholarly context and title of Al-Kindi's treatise `[VERIFY]`
- Vigenère cipher: correct attribution (often misattributed) and original publication date `[VERIFY]`
- Renaissance diplomatic cipher use: at least one specific documented historical example `[VERIFY]`
- Babbage's ~1846 date: described as approximate in the Michigan Tech source `[VERIFY]`

**Exhibit 3**
- Specific years for Polish cryptanalytic work in the 1930s `[VERIFY]`
- Documented transfer of Polish findings to Bletchley Park `[VERIFY]`
- Operational impact of Enigma codebreaking on WWII outcomes — what is established vs. contested `[VERIFY]`
- Other cipher machines of the era (Lorenz, SIGABA) `[VERIFY]`

**Exhibit 4**
- The one-time pad and perfect secrecy: citable institutional source `[VERIFY]`
- Exact publication years for Diffie-Hellman (1976) and RSA (1977) — to confirm from the papers themselves `[VERIFY]`
- GCHQ's independent development of public-key cryptography (Ellis, Cocks, Williamson) `[VERIFY]`

**Exhibit 5**
- Outcome of the Zimmermann criminal investigation `[VERIFY]`
- Certificate authority trust model and documented failure cases `[VERIFY]`
- Quantum computing threat to RSA and elliptic curve: accessible but technical source `[VERIFY]`
- TLS version history `[VERIFY]`

**Figures page**
- Dedicated biographical sources for: Al-Kindi, Whitfield Diffie, Martin Hellman, Ron Rivest, Adi Shamir, Leonard Adleman
- Specific years and institutional context for Rejewski, Zygalski, Różycki `[VERIFY]`

**Timeline**
- Exact date for Enigma invention (year after WWI) `[VERIFY]`
- Shannon's paper: confirm 1949 from the paper itself `[VERIFY]`

---

### Core Research Questions

These questions frame what the museum is trying to answer. They are not chapter headings — they are the underlying tensions that the exhibit route resolves, one room at a time.

1. Why did humans need to hide messages in the first place? What conditions create the demand for secrecy?
2. How did the earliest ciphers actually work, and how easy were they to break?
3. How did cryptography become a tool of state power — in diplomacy, in war, in intelligence?
4. What changed when mechanical machines entered the picture? What new problems did they solve, and what new vulnerabilities did they create?
5. How did codebreaking change the course of history? What does it mean that secrecy can be broken?
6. How did cryptography move from physical devices to pure mathematics? What made that shift possible?
7. What is public-key cryptography, and why did it change the nature of trust — not just secrecy?
8. How does the cryptography in use today connect to all of the above? Is it more secure, or just harder to break?

---

### Main Exhibit Research Map

---

#### Exhibit 1: The Birth of Secret Writing

**Purpose of the exhibit:**
To show that the human need for secrecy is ancient, and that early methods of hiding messages were creative, context-dependent, and often surprisingly vulnerable. This exhibit establishes the starting point of the story.

**Key ideas to research:**
- The difference between steganography (hiding that a message exists) and cryptography (hiding what it says) `[VERIFY]`
- Early examples of hidden writing in ancient Egypt, Greece, and Rome `[VERIFY]`
- The scytale: how it worked and whether it was truly a cipher or a tool for authentication `[VERIFY]`
- The Caesar cipher: how the shift cipher works, its simplicity, and its actual historical use `[VERIFY]`
- How substitution ciphers were eventually broken — and what that reveals about the limits of simple secrecy

**Possible artifacts:**
- A cipher wheel diagram (visual representation of a shift cipher)
- A scytale illustration or reproduction description
- An example of a Caesar-enciphered message with decode

**Possible figures:**
- Julius Caesar — use of the cipher bearing his name `[VERIFY — confirm historical basis for Caesar cipher attribution]`
- Any documented ancient figure known for steganographic practice `[VERIFY]`

**Possible visitor takeaway:**
Secret writing is as old as writing itself. Every time humans found a way to communicate, someone needed a way to communicate privately.

---

#### Exhibit 2: Ciphers, States, and Power

**Purpose of the exhibit:**
To show that cryptography grew from a personal tool into a political and diplomatic instrument. During the Renaissance and early modern period, secrecy became a matter of statecraft, not just individual privacy.

**Key ideas to research:**
- The emergence of diplomatic ciphers in Renaissance Italy `[VERIFY]`
- Al-Kindi's treatise on frequency analysis — considered one of the earliest works of cryptanalysis `[VERIFY — confirm date, title, and historical significance]`
- How frequency analysis broke simple substitution ciphers
- The Vigenère cipher: how it improved on substitution ciphers and why it was called "le chiffre indéchiffrable" for so long `[VERIFY — confirm attribution to Vigenère vs. earlier inventors]`
- The eventual breaking of the Vigenère cipher (Kasiski, Babbage) `[VERIFY — confirm who broke it and when]`
- The relationship between cryptography and political power in this era

**Possible artifacts:**
- A Vigenère square (tabula recta) — useful as a visual
- An example of a Renaissance diplomatic coded letter `[VERIFY — find a real historical example if possible]`
- A frequency analysis chart showing letter distributions in English

**Possible figures:**
- Al-Kindi `[VERIFY — dates, full significance, context of his cryptanalytic work]`
- Blaise de Vigenère `[VERIFY — actual role in the cipher's development]`

**Possible visitor takeaway:**
Once cryptography became a tool of power, breaking codes became just as important as making them. The arms race between cipher and analysis had begun.

---

#### Exhibit 3: Machines of Secrecy

**Purpose of the exhibit:**
To show how the industrialization of war created a demand for mechanized, scalable encryption — and how that same mechanization introduced systematic vulnerabilities that changed the outcome of conflicts.

**Key ideas to research:**
- The development of cipher machines in the early 20th century `[VERIFY]`
- The Enigma machine: how the rotor system worked, who built it, and how it was adopted by the German military `[VERIFY]`
- The role of Polish mathematicians in first breaking Enigma before WWII `[VERIFY — Marian Rejewski and the Biuro Szyfrów]`
- Bletchley Park and the British codebreaking operation during WWII `[VERIFY]`
- Alan Turing's contribution to the Bombe machine and statistical codebreaking `[VERIFY — scope and nature of his specific contributions]`
- How the breaking of Enigma affected the course of the war `[VERIFY — what is documented vs. what is contested]`
- The concept of traffic analysis — what metadata can reveal even without decryption `[VERIFY]`

**Possible artifacts:**
- Enigma machine description and rotor diagram
- A Bombe machine diagram
- An intercepted message (historical, if public domain) `[VERIFY — availability]`

**Possible figures:**
- Alan Turing `[VERIFY — confirm scope and nature of contributions specifically to cryptanalysis]`
- Marian Rejewski `[VERIFY — dates, contributions, Polish cryptographic bureau context]`
- Gordon Welchman `[VERIFY — role at Bletchley Park]`

**Possible visitor takeaway:**
Machines made cryptography faster and more complex — but they also made it more systematic, which meant it could be analyzed systematically. Complexity is not the same as security.

---

#### Exhibit 4: The Mathematical Turn

**Purpose of the exhibit:**
To show how cryptography left the world of physical devices and became a branch of mathematics — and how that shift eventually made it possible for strangers to communicate securely without ever having shared a secret.

**Key ideas to research:**
- Claude Shannon's 1949 paper "Communication Theory of Secrecy Systems" — its claims, its significance, and how it reframed cryptography as a mathematical discipline `[VERIFY — date, title, key claims]`
- The concept of perfect secrecy and the one-time pad `[VERIFY]`
- The development of public-key cryptography in the 1970s — specifically the Diffie-Hellman key exchange `[VERIFY — 1976, confirm names and paper]`
- The RSA algorithm: how it works conceptually (trapdoor functions, prime factorization), and its significance `[VERIFY — 1977, Rivest, Shamir, Adleman]`
- The distinction between symmetric and asymmetric encryption — and why the asymmetric breakthrough was fundamental `[VERIFY]`
- The concept of a trapdoor function — accessible without jargon for a general visitor

**Possible artifacts:**
- A public/private key diagram (conceptual, not code)
- A visual metaphor for the padlock/key model of asymmetric encryption
- A simplified walkthrough of how RSA works at a conceptual level

**Possible figures:**
- Claude Shannon `[VERIFY — dates, Bell Labs context, relevant work]`
- Whitfield Diffie and Martin Hellman `[VERIFY — confirm 1976 paper]`
- Ron Rivest, Adi Shamir, Leonard Adleman `[VERIFY — confirm RSA 1977 paper and MIT context]`

**Possible visitor takeaway:**
Public-key cryptography solved a problem that had existed for 4,000 years: how do you share a secret with someone you have never met? The answer turned out to be mathematics, not trust.

---

#### Exhibit 5: The Invisible Shield of Modern Life

**Purpose of the exhibit:**
To show that the cryptography of today is the direct descendant of everything that came before — and that it is not a specialized tool anymore. It is the infrastructure of digital trust.

**Key ideas to research:**
- How TLS/HTTPS works conceptually — the handshake, certificates, what it actually protects `[VERIFY]`
- The development of PGP (Pretty Good Privacy) and its significance for individual encryption `[VERIFY — Phil Zimmermann, date, context]`
- End-to-end encryption: what it means, how it differs from other forms of encryption, and where it is in use `[VERIFY]`
- Certificate authorities and the chain of trust — and its vulnerabilities `[VERIFY]`
- The threat of quantum computing to current encryption methods `[VERIFY — what is documented vs. speculative]`
- Post-quantum cryptography: what it is and where it stands `[VERIFY — NIST standardization process]`
- The civil liberties dimension — encryption as a tool of personal privacy and its political implications `[VERIFY — do not take sides, present the tension]`

**Possible artifacts:**
- A browser padlock icon with explanation of what it means and does not mean
- A TLS handshake diagram (simplified)
- A diagram of end-to-end encryption vs. server-side encryption

**Possible figures:**
- Phil Zimmermann `[VERIFY — PGP, date, legal history]`
- Possibly: figures from the NIST post-quantum standardization process `[VERIFY]`

**Possible visitor takeaway:**
Every time you open a website, every time you send a message, cryptography is working. It is invisible — and that invisibility is the point. It is what trust looks like at scale.

---

### Potential Timeline Topics

The following moments may belong in the `/timeline` page. All specific dates, names, and details are marked `[VERIFY]` until confirmed from a reliable source.

| Period | Event | Status |
|---|---|---|
| Ancient (~1900 BCE) | Earliest known use of non-standard hieroglyphs in Egypt `[VERIFY]` | Unverified |
| Ancient (~700 BCE) | Scytale used by Spartan military `[VERIFY — date and use disputed]` | Unverified |
| Ancient (~100 BCE) | Caesar cipher in use by Julius Caesar `[VERIFY]` | Unverified |
| 9th century CE | Al-Kindi writes treatise on frequency analysis `[VERIFY — date and title]` | Unverified |
| 15th–16th century | Diplomatic cipher use in Renaissance Italy `[VERIFY]` | Unverified |
| 1553 | Vigenère cipher published `[VERIFY — date and attribution]` | Unverified |
| 1840s | Telegraph enables fast long-distance communication, increases demand for coded messages `[VERIFY]` | Unverified |
| 1863–1920 | Vigenère cipher broken (Kasiski, Babbage) `[VERIFY — separate dates for each]` | Unverified |
| 1918 | Enigma machine patented `[VERIFY]` | Unverified |
| Late 1930s | Polish mathematicians break early Enigma `[VERIFY]` | Unverified |
| 1939–1945 | Bletchley Park operation, Bombe machine, WWII codebreaking `[VERIFY]` | Unverified |
| 1949 | Shannon publishes "Communication Theory of Secrecy Systems" `[VERIFY]` | Unverified |
| 1976 | Diffie-Hellman key exchange paper published `[VERIFY]` | Unverified |
| 1977 | RSA algorithm published `[VERIFY]` | Unverified |
| 1991 | PGP released by Phil Zimmermann `[VERIFY]` | Unverified |
| 1994–1995 | SSL/TLS introduced for web encryption `[VERIFY — version and date]` | Unverified |
| 2013 | Widespread public awareness of encryption following Snowden disclosures `[VERIFY — framing carefully]` | Unverified |
| Ongoing | Post-quantum cryptography standardization (NIST process) `[VERIFY — current status]` | Unverified |

---

### Potential Artifacts List

These are museum-style artifacts that could be represented visually or described in the `/artifacts` section. All require curatorial descriptions before being published.

- **Cipher wheel** — A physical or illustrated disk showing the shift cipher mechanism
- **Scytale** — A wrapped rod used for transposition ciphers in ancient Sparta `[VERIFY]`
- **Coded diplomatic letter** — A Renaissance-era political communication in cipher `[VERIFY — find real example or describe historically]`
- **Frequency analysis chart** — A bar chart showing letter frequency in English, used to break substitution ciphers
- **Vigenère table (tabula recta)** — The full grid used to encode and decode Vigenère messages
- **Enigma machine rotor diagram** — A cross-section showing how the electrical pathway changed with each keystroke
- **Bombe machine diagram** — The electromechanical device used to test Enigma configurations at Bletchley Park
- **Public/private key diagram** — A conceptual illustration of asymmetric encryption
- **TLS handshake diagram** — A simplified sequence showing what happens when a browser connects to a secure server
- **Browser lock icon** — The HTTPS padlock with an explanation of what it actually certifies

---

### Potential Figures List

The following people are candidates for the `/figures` section. All details are `[VERIFY]` until confirmed.

| Name | Exhibit Connection | Status |
|---|---|---|
| Julius Caesar | Exhibit 1 — Caesar cipher | `[VERIFY]` |
| Al-Kindi | Exhibit 2 — Frequency analysis | `[VERIFY]` |
| Blaise de Vigenère | Exhibit 2 — Vigenère cipher | `[VERIFY — actual vs. attributed role]` |
| Marian Rejewski | Exhibit 3 — Polish Enigma work | `[VERIFY]` |
| Alan Turing | Exhibit 3 — Bletchley Park, Bombe | `[VERIFY — scope of contributions]` |
| Claude Shannon | Exhibit 4 — Mathematical foundations | `[VERIFY]` |
| Whitfield Diffie | Exhibit 4 — Public-key cryptography | `[VERIFY]` |
| Martin Hellman | Exhibit 4 — Public-key cryptography | `[VERIFY]` |
| Ron Rivest | Exhibit 4 — RSA | `[VERIFY]` |
| Adi Shamir | Exhibit 4 — RSA | `[VERIFY]` |
| Leonard Adleman | Exhibit 4 — RSA | `[VERIFY]` |
| Phil Zimmermann | Exhibit 5 — PGP, personal encryption | `[VERIFY]` |

---

### Source Needs

The following types of sources should be located before writing final exhibit copy. No source has been verified yet.

- **Encyclopedic or museum sources** — Established institutions with editorial standards (e.g., the Smithsonian, the National Cryptologic Museum, Britannica)
- **University or academic sources** — Published papers, course materials, or documented lectures from credible academic institutions
- **Primary or historical sources** — Where accessible: original papers, published letters, declassified documents
- **Reputable cryptography explainers** — Technical but accessible explanations from trusted sources (e.g., EFF, IETF documentation, academic textbooks)
- **Official documentation for modern encryption** — NIST standards, RFC specifications for TLS, and similar authoritative technical sources
- **Public-domain images and artifact references** — Museums, libraries, and archives with documented open-access policies

All sources should be recorded in this file or in a separate SOURCES.md once they are confirmed.

---

### Research Quality Rules

These rules apply to everything that goes into the exhibit copy.

1. **No unsourced historical claims in final exhibit copy.** If a claim cannot be traced to a reliable source, it does not appear on the site. It stays in this document as `[VERIFY]`.
2. **Separate verified facts from interpretive writing.** It is acceptable to draw conclusions from facts — but the facts themselves must be solid.
3. **Do not overcomplicate math-heavy sections.** The goal is understanding, not technical fluency. A visitor should leave understanding why RSA matters, not how to implement it.
4. **Explain technical ideas clearly for a general visitor.** Every cryptographic term used in exhibit copy should be either explained inline or linked to the /concepts page.
5. **Keep the narrative stronger than the raw facts.** Lists of facts are not a museum exhibit. The story of why something happened — and what it changed — is what belongs on the wall.
6. **Do not editorialize on politically contested topics.** Where encryption intersects with civil liberties, law enforcement access, or national security debates, present the tension — do not take a position.
