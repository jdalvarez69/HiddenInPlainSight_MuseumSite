// museum-data.ts
// Source-of-truth structured data for Hidden in Plain Sight: A Museum of Cryptography.
// All content is drawn from verified sources documented in docs/RESEARCH_NOTES.md.
// Items pending additional source confirmation are marked status: "Needs verification".

// ─── Types ────────────────────────────────────────────────────────────────────

export interface SiteMeta {
  title: string;
  subtitle: string;
  thesis: string;
  shortDescription: string;
  designStyle: string;
  archetype: string;
  cialdiniPrinciple: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface KeyPoint {
  text: string;
  sources: string[];
  status?: "Verified" | "Needs verification";
}

export interface FeaturedArtifact {
  title: string;
  caption: string;
  visualHint: string;
}

export interface ExhibitConcept {
  term: string;
  explanation: string;
}

export interface Exhibit {
  slug: string;
  order: number;
  title: string;
  subtitle: string;
  intro: string;
  keyPoints: KeyPoint[];
  featuredArtifact: FeaturedArtifact;
  concept: ExhibitConcept;
  takeaway: string;
  transition: string;
  sources: string[];
}

export interface TimelineEvent {
  era: string;
  title: string;
  description: string;
  exhibitSlug: string;
  status: "Verified" | "Needs verification";
  sources: string[];
}

export interface Artifact {
  title: string;
  era: string;
  description: string;
  exhibitSlug: string;
  visualHint: string;
  sources: string[];
  status?: "Verified" | "Needs verification";
}

export interface Concept {
  term: string;
  shortDefinition: string;
  plainLanguageExplanation: string;
  exhibitSlug: string;
  sources: string[];
  status?: "Verified" | "Needs verification";
}

export interface Figure {
  name: string;
  role: string;
  exhibitSlug: string;
  description: string;
  status: "Verified" | "Needs verification";
  sources: string[];
}

export interface ProcessStage {
  stage: string;
  tool: string;
  goal: string;
  result: string;
}

// ─── Site Meta ────────────────────────────────────────────────────────────────

export const siteMeta: SiteMeta = {
  title: "Hidden in Plain Sight",
  subtitle: "A Museum of Cryptography",
  thesis:
    "Cryptography began as the art of hiding messages, but became the science of protecting trust. Across history, every new way to communicate created a new need for secrecy, and every new method of secrecy changed the balance of power.",
  shortDescription:
    "A guided museum experience tracing the history of cryptography from ancient secret writing to modern digital encryption.",
  designStyle: "Editorial archival modernism",
  archetype: "The Sage + The Explorer",
  cialdiniPrinciple: "Curiosity Gap",
};

// ─── Navigation ───────────────────────────────────────────────────────────────

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Exhibits", href: "/exhibits" },
  { label: "Timeline", href: "/timeline" },
  { label: "Artifacts", href: "/artifacts" },
  { label: "Concepts", href: "/concepts" },
  { label: "Figures", href: "/figures" },
  { label: "Process", href: "/process" },
];

// ─── Exhibits ─────────────────────────────────────────────────────────────────

export const exhibits: Exhibit[] = [
  {
    slug: "secret-writing",
    order: 1,
    title: "The Birth of Secret Writing",
    subtitle: "When Hiding a Message Was Enough",
    intro:
      "The need to hide a message is older than most writing systems. Before formal cryptography, people concealed messages physically or scrambled letters with simple rules. Both methods were clever, but neither was truly secure.",
    keyPoints: [
      {
        text: "Cryptology has roots in antiquity. The manual era lasted from ancient times through World War I, with ciphers created and broken by hand.",
        sources: ["Britannica — History of Cryptology"],
      },
      {
        text: "The scytale used a strip wrapped around a rod. When unwound, the message looked random unless the reader had a matching rod diameter.",
        sources: ["NSA — Fun Facts about Cryptology"],
      },
      {
        text: "The Caesar cipher shifts each letter by a fixed number of positions, creating a simple substitution rule.",
        sources: ["Britannica — Caesar Cipher"],
      },
      {
        text: "Simple substitution and transposition keep language fingerprints, including letter frequencies and common patterns.",
        sources: [],
        status: "Needs verification",
      },
      {
        text: "Their strength was practical, not absolute: the intended recipient had the key, and the adversary usually did not.",
        sources: [],
        status: "Needs verification",
      },
    ],
    featuredArtifact: {
      title: "Caesar Cipher Wheel",
      caption:
        "The Caesar cipher does not obscure the structure of a message. It only displaces it. Every letter has been moved the same distance. If you know the distance — or you are patient enough to try all twenty-five — the message returns.",
      visualHint:
        "Two concentric rings of the alphabet, offset by a fixed number of positions.",
    },
    concept: {
      term: "Substitution cipher",
      explanation:
        "A substitution cipher replaces each letter in the original message with a different letter according to a fixed rule. In the Caesar cipher, that rule is a uniform shift: A becomes D, B becomes E, and so on. The cipher does not change the frequency of letters — it only changes which letter stands in for which. That predictability is exactly what makes it breakable.",
    },
    takeaway:
      "The earliest methods of hiding messages worked because the people receiving them already shared a secret with the sender — the shape of the rod, the size of the shift. Secrecy was relational, not mathematical. The moment someone with no prior knowledge could still break the message, the method was already obsolete.",
    transition:
      "Substitution ciphers were broken almost as soon as people started using them seriously. But there was a period — roughly a thousand years — when one particular technique was nearly unbeatable, and the people in power knew it. The next room is about what happened when cryptography stopped being personal and started being political.",
    sources: [
      "Britannica — History of Cryptology",
      "Britannica — Caesar Cipher",
      "NSA — Fun Facts about Cryptology",
    ],
  },
  {
    slug: "states-and-power",
    order: 2,
    title: "Ciphers, States, and Power",
    subtitle: "When Secrecy Became a Tool of the State",
    intro:
      "Cryptography shifted from personal secrecy to state power. Diplomats encoded dispatches, governments built cipher bureaus, and cryptanalysis became strategic. Better ciphers and better codebreaking advanced together.",
    keyPoints: [
      {
        text: "Around 850 CE, Al-Kindi documented one of the earliest recorded methods of cryptanalysis using letter-frequency patterns.",
        sources: ["History of Information — Al-Kindi"],
      },
      {
        text: "Frequency analysis turns language structure against a cipher: symbols change, but letter-frequency patterns remain.",
        sources: ["History of Information — Al-Kindi"],
      },
      {
        text: "The Vigenere cipher used a repeating keyword and resisted basic frequency analysis for a long time.",
        sources: [],
        status: "Needs verification",
      },
      {
        text: "Babbage developed an unpublished Vigenere break method; Kasiski published it in 1863 using repeated sequences to infer keyword length.",
        sources: ["Michigan Tech — Kasiski's Method"],
      },
      {
        text: "A recurring pattern emerged: each 'unbreakable' cipher eventually failed under structural analysis.",
        sources: [],
        status: "Needs verification",
      },
    ],
    featuredArtifact: {
      title: "Frequency Analysis Chart",
      caption:
        "Al-Kindi recognized something that every cipher maker has had to reckon with since: the message does not travel alone. The shape of the language travels with it.",
      visualHint:
        "Bar chart showing relative letter frequencies in English alongside an example cipher text.",
    },
    concept: {
      term: "Frequency analysis",
      explanation:
        "Every language has patterns. In English, certain letters — E, T, A, O — appear far more often than others. In a simple substitution cipher, the most frequent symbol in the cipher text will typically correspond to the most frequent letter in the underlying language. Frequency analysis uses this property to reverse-engineer a cipher without possessing the key.",
    },
    takeaway:
      "Every cipher that relies on a fixed, repeating pattern carries the seeds of its own defeat. Al-Kindi understood this a thousand years before mechanical cryptography was invented. The arms race between cipher and analysis was not a product of the modern era — it was already well underway.",
    transition:
      "By the twentieth century, hand-crafted ciphers were no longer sufficient for the scale of modern communication. States were sending thousands of messages a day. The solution was to build machines — devices that could encode and decode at speed and at scale. The next room covers what those machines could do, and what they could not hide.",
    sources: [
      "History of Information — Al-Kindi",
      "Michigan Tech — Kasiski's Method",
    ],
  },
  {
    slug: "machines-of-secrecy",
    order: 3,
    title: "Machines of Secrecy",
    subtitle: "When Complexity Became the Key",
    intro:
      "The twentieth century industrialized secrecy. Cipher machines like Enigma produced huge complexity and were believed unbreakable. Breaking them required new machines in return.",
    keyPoints: [
      {
        text: "Arthur Scherbius's Enigma used rotating rotors to change substitution on every keypress.",
        sources: ["Bletchley Park — Enigma"],
      },
      {
        text: "Turing's Bombe determined Naval Enigma daily settings (wheel order, positions, and plugboard) at a scale impossible by hand.",
        sources: [
          "Bletchley Park — Bombe",
          "National Museum of Computing — The Turing-Welchman Bombe",
        ],
      },
      {
        text: "Bletchley's success built on 1930s Polish work by Rejewski, Zygalski, and Rozycki.",
        sources: [
          "JSTOR Daily — The Polish Connection",
          "ScienceDirect — Rejewski & Enigma",
        ],
      },
      {
        text: "Because Enigma settings changed daily, key recovery had to be repeated each day. The Bombe automated that search.",
        sources: ["National Museum of Computing — The Turing-Welchman Bombe"],
      },
      {
        text: "Enigma showed that mechanical complexity is not the same as mathematical security.",
        sources: [],
        status: "Needs verification",
      },
    ],
    featuredArtifact: {
      title: "Enigma Rotor System Diagram",
      caption:
        "Every time a key was pressed on the Enigma machine, the rotors stepped forward, changing the electrical pathway entirely. The same letter pressed twice would produce two different cipher letters. This was considered its great strength. It was also the source of its vulnerability.",
      visualHint:
        "Labeled cross-section showing the electrical pathway through the rotors, shifting with each keypress.",
    },
    concept: {
      term: "Enigma daily key",
      explanation:
        "The Enigma machine's operators changed their settings every day according to a codebook. The daily key included the order of the rotors, their starting positions, and the configuration of the plugboard. Breaking any given day's Enigma messages required first determining that day's key — which is exactly what the Bombe was built to do.",
    },
    takeaway:
      "The Enigma story is sometimes told as a story about Turing. The fuller version begins with three Polish mathematicians whose work was interrupted by invasion, continued in secret, and eventually reached the people who had the resources to finish it. Codebreaking in the twentieth century was not the work of lone geniuses. It was collaborative, institutional, and built on what came before.",
    transition:
      "After World War II, something shifted. The question stopped being 'how do we build a better machine?' and started being 'what is secrecy, mathematically speaking?' The next room covers the moment cryptography stopped being an engineering problem and became a branch of mathematics — and why that distinction changed everything.",
    sources: [
      "Bletchley Park — Enigma",
      "Bletchley Park — Bombe",
      "National Museum of Computing — The Turing-Welchman Bombe",
      "JSTOR Daily — The Polish Connection",
      "ScienceDirect — Rejewski & Enigma",
    ],
  },
  {
    slug: "mathematical-turn",
    order: 4,
    title: "The Mathematical Turn",
    subtitle: "When Secrecy Became a Proof",
    intro:
      "In the mid-twentieth century, cryptography became a formal mathematical discipline. The question shifted from 'hard to break' to 'provably secure.' That shift made modern internet security possible.",
    keyPoints: [
      {
        text: "Shannon's 1949 secrecy theory formalized cryptography and set mathematical terms for security.",
        sources: ["Shannon — Communication Theory of Secrecy Systems"],
      },
      {
        text: "The key distribution problem persisted: secure communication required sharing a secret in advance, which did not scale.",
        sources: [],
        status: "Needs verification",
      },
      {
        text: "Diffie and Hellman proposed distinct public and private keys, allowing secure exchange without a prior shared secret.",
        sources: ["Diffie & Hellman — New Directions in Cryptography"],
      },
      {
        text: "Rivest, Shamir, and Adleman developed RSA, a practical public-key and signature system based on hard factorization.",
        sources: ["RSA Paper — Rivest, Shamir, Adleman"],
      },
      {
        text: "These systems rely on trapdoor functions: easy to compute one way, hard to reverse without special knowledge.",
        sources: [],
        status: "Needs verification",
      },
    ],
    featuredArtifact: {
      title: "Public/Private Key Diagram",
      caption:
        "Before public-key cryptography, two parties who wanted to communicate securely had to share a secret in advance. Diffie and Hellman's insight was that you could eliminate that requirement entirely — that the mathematics itself could substitute for the prior meeting.",
      visualHint:
        "Two labeled keys, an open padlock, and a message — illustrating that anyone can encrypt with the public key, but only the private key holder can decrypt.",
    },
    concept: {
      term: "Public-key cryptography",
      explanation:
        "In a public-key system, every participant has two keys: a public key that can be shared freely, and a private key that is never shared. A message encrypted with someone's public key can only be decrypted with their private key. This makes it possible for two people who have never communicated before to establish a secure channel — without exchanging a secret in advance.",
    },
    takeaway:
      "Shannon, Diffie, Hellman, Rivest, Shamir, and Adleman did not just improve cryptography. They solved a problem that had existed for as long as the field had: how do you share a secret with someone you have never met? The mathematical tools they developed in a span of about thirty years became the infrastructure underlying every secure transaction on the internet.",
    transition:
      "Most people have never heard of public-key cryptography. Most people use it dozens of times a day. The final room is about where all of this mathematics lives in the world right now — invisible, automatic, and everywhere.",
    sources: [
      "Shannon — Communication Theory of Secrecy Systems",
      "Diffie & Hellman — New Directions in Cryptography",
      "RSA Paper — Rivest, Shamir, Adleman",
    ],
  },
  {
    slug: "invisible-shield",
    order: 5,
    title: "The Invisible Shield of Modern Life",
    subtitle: "The Cryptography You Use Without Knowing It",
    intro:
      "You may not think about cryptography, but you use it constantly. Secure browsing, encrypted messages, and online transactions all rely on ideas from the previous rooms — now automated and mostly invisible.",
    keyPoints: [
      {
        text: "A TLS handshake lets browser and server exchange key material and establish encrypted session keys in milliseconds.",
        sources: ["Cloudflare — How SSL/TLS Works"],
      },
      {
        text: "End-to-end encryption keeps data encrypted from sender device to recipient device; intermediaries do not hold the key.",
        sources: ["IBM — What is End-to-End Encryption?"],
      },
      {
        text: "Signal is an example of end-to-end encryption in everyday communication.",
        sources: ["Signal — Is it private? Can I trust it?"],
      },
      {
        text: "In 1991, Phil Zimmermann released PGP for individuals. Its global spread triggered a U.S. export-control investigation that was later dropped.",
        sources: ["OpenPGP — History of OpenPGP"],
      },
      {
        text: "In August 2024, NIST finalized three post-quantum standards and advised organizations to begin migration.",
        sources: [
          "NIST — Post-Quantum Cryptography",
          "NIST — Post-Quantum Cryptography Project",
        ],
      },
    ],
    featuredArtifact: {
      title: "TLS Handshake Sequence",
      caption:
        "The TLS handshake completes in a fraction of a second. In that interval, two computers that have never communicated before establish a shared secret, verify each other's identities, and agree on the terms of an encrypted channel. The browser lock icon is the only thing a user ever sees.",
      visualHint:
        "Simplified sequence diagram showing the browser-server exchange: hello, certificate, key exchange, first encrypted message.",
    },
    concept: {
      term: "End-to-end encryption",
      explanation:
        "In end-to-end encryption, only the sender and the intended recipient hold the keys to decrypt the conversation. The service carrying the message — the app, the platform, the server — cannot read it. This is distinct from server-side encryption, where the service encrypts data in storage but holds the keys itself.",
    },
    takeaway:
      "The lock icon in a browser address bar is the most visible piece of a system that descends directly from centuries of cryptographic development. The mathematics in use today would be unrecognizable to Julius Caesar or even Alan Turing. But the problem it solves — how do you communicate privately with someone, across a distance, without trusting the channel? — is exactly the same one they were working on.",
    transition:
      "This is the last room in the museum. But the technology described here is still being built. Post-quantum cryptography standards were just finalized in 2024. The field that began with a strip of cloth wrapped around a stick is now preparing for computers that do not yet exist. The story continues.",
    sources: [
      "Cloudflare — How SSL/TLS Works",
      "IBM — What is End-to-End Encryption?",
      "Signal — Is it private? Can I trust it?",
      "OpenPGP — History of OpenPGP",
      "NIST — Post-Quantum Cryptography",
      "NIST — Post-Quantum Cryptography Project",
    ],
  },
];

// ─── Timeline Events ──────────────────────────────────────────────────────────

export const timelineEvents: TimelineEvent[] = [
  {
    era: "Ancient",
    title: "Early Cryptology Begins",
    description:
      "Cryptology has roots in antiquity. The manual cryptography era stretched from ancient times through World War I.",
    exhibitSlug: "secret-writing",
    status: "Verified",
    sources: ["Britannica — History of Cryptology"],
  },
  {
    era: "Ancient Greece",
    title: "The Scytale",
    description:
      "Ancient Greeks used a scytale by wrapping a strip of material around a rod, writing the message across the surface, and unwinding it for transit. Only a matching rod could reveal the message.",
    exhibitSlug: "secret-writing",
    status: "Verified",
    sources: ["NSA — Fun Facts about Cryptology"],
  },
  {
    era: "Ancient Rome",
    title: "The Caesar Cipher",
    description:
      "The Caesar cipher shifts each letter in the alphabet by a fixed number of positions. It is a simple substitution cipher associated with Julius Caesar.",
    exhibitSlug: "secret-writing",
    status: "Needs verification",
    sources: ["Britannica — Caesar Cipher"],
  },
  {
    era: "~850 CE",
    title: "Al-Kindi and Frequency Analysis",
    description:
      "Al-Kindi wrote a treatise in Baghdad describing one of the earliest recorded explanations of cryptanalysis — identifying patterns in cipher text by analyzing letter frequencies.",
    exhibitSlug: "states-and-power",
    status: "Verified",
    sources: ["History of Information — Al-Kindi"],
  },
  {
    era: "~16th century",
    title: "The Vigenère Cipher",
    description:
      "A polyalphabetic cipher using a repeating keyword to vary the substitution for each letter. It resisted frequency analysis and was considered extremely difficult to break for an extended period.",
    exhibitSlug: "states-and-power",
    status: "Needs verification",
    sources: [],
  },
  {
    era: "~1846 (unpublished)",
    title: "Babbage's Method",
    description:
      "Charles Babbage developed a technique for breaking the Vigenère cipher around 1846, but did not publish it.",
    exhibitSlug: "states-and-power",
    status: "Verified",
    sources: ["Michigan Tech — Kasiski's Method"],
  },
  {
    era: "1863",
    title: "Kasiski Publishes His Method",
    description:
      "Friedrich Kasiski published the first recorded account of breaking the Vigenère cipher, using repeated sequences in cipher text to determine keyword length.",
    exhibitSlug: "states-and-power",
    status: "Verified",
    sources: ["Michigan Tech — Kasiski's Method"],
  },
  {
    era: "Shortly after World War I",
    title: "Enigma Machine Invented",
    description:
      "German engineer Arthur Scherbius invented the Enigma machine, a rotating electrical cipher device capable of producing mechanically complex substitutions.",
    exhibitSlug: "machines-of-secrecy",
    status: "Verified",
    sources: ["Bletchley Park — Enigma"],
  },
  {
    era: "1930s",
    title: "Polish Mathematicians Work on Enigma",
    description:
      "Marian Rejewski, Henryk Zygalski, and Jerzy Różycki worked on Enigma cryptanalysis in the 1930s. The Bletchley Park operation was built on this foundation.",
    exhibitSlug: "machines-of-secrecy",
    status: "Verified",
    sources: [
      "JSTOR Daily — The Polish Connection",
      "ScienceDirect — Rejewski & Enigma",
    ],
  },
  {
    era: "World War II",
    title: "Bletchley Park and the Bombe",
    description:
      "Alan Turing developed the Bombe to determine Naval Enigma daily key settings — wheel order, wheel settings, and plugboard configuration — enabling large-scale decryption of intercepted messages.",
    exhibitSlug: "machines-of-secrecy",
    status: "Verified",
    sources: [
      "Bletchley Park — Bombe",
      "National Museum of Computing — The Turing-Welchman Bombe",
    ],
  },
  {
    era: "~1949",
    title: "Shannon's Mathematical Theory of Secrecy",
    description:
      "Claude Shannon published a paper defining secrecy systems formally and establishing the mathematical foundations of cryptography as a discipline.",
    exhibitSlug: "mathematical-turn",
    status: "Needs verification",
    sources: ["Shannon — Communication Theory of Secrecy Systems"],
  },
  {
    era: "~1976",
    title: "Diffie-Hellman Key Exchange",
    description:
      "Whitfield Diffie and Martin Hellman proposed a public-key cryptosystem in which enciphering and deciphering use distinct keys, and the public key can be disclosed without compromising the private key.",
    exhibitSlug: "mathematical-turn",
    status: "Needs verification",
    sources: ["Diffie & Hellman — New Directions in Cryptography"],
  },
  {
    era: "~1977",
    title: "RSA Algorithm",
    description:
      "Ron Rivest, Adi Shamir, and Leonard Adleman published RSA — a practical method for public-key cryptosystems and digital signatures, building on the Diffie-Hellman framework.",
    exhibitSlug: "mathematical-turn",
    status: "Needs verification",
    sources: ["RSA Paper — Rivest, Shamir, Adleman"],
  },
  {
    era: "1991",
    title: "PGP Released",
    description:
      "Phil Zimmermann released Pretty Good Privacy (PGP), making public-key encryption available to individuals. PGP's international spread as freeware triggered a criminal investigation under U.S. export control laws.",
    exhibitSlug: "invisible-shield",
    status: "Verified",
    sources: ["OpenPGP — History of OpenPGP"],
  },
  {
    era: "1990s–present",
    title: "TLS and HTTPS",
    description:
      "TLS secures communication between browsers and servers through a handshake: parties exchange public-key information and generate session keys for encrypted communication.",
    exhibitSlug: "invisible-shield",
    status: "Needs verification",
    sources: ["Cloudflare — How SSL/TLS Works"],
  },
  {
    era: "August 2024",
    title: "NIST Finalizes Post-Quantum Standards",
    description:
      "NIST published the first three finalized post-quantum cryptography standards, designed to remain secure against future quantum computers, and advised organizations to begin migrating their systems.",
    exhibitSlug: "invisible-shield",
    status: "Verified",
    sources: [
      "NIST — Post-Quantum Cryptography",
      "NIST — Post-Quantum Cryptography Project",
    ],
  },
];

// ─── Artifacts ────────────────────────────────────────────────────────────────

export const artifacts: Artifact[] = [
  {
    title: "Scytale",
    era: "Ancient Greece",
    description:
      "A transposition device: a strip of material wrapped around a rod of a specific diameter. The message was written across the wrapped surface and the strip unwound for transport. A matching rod was required to read it.",
    exhibitSlug: "secret-writing",
    visualHint: "Illustration of a rod with a strip of cloth wound around it, partially unwound.",
    sources: ["NSA — Fun Facts about Cryptology"],
  },
  {
    title: "Caesar Cipher Wheel",
    era: "Antiquity",
    description:
      "Two concentric rings of the alphabet, offset by a fixed number of positions. Rotating the outer ring encodes or decodes a message using the Caesar shift.",
    exhibitSlug: "secret-writing",
    visualHint: "Two concentric alphabet rings, outer ring offset by three positions.",
    sources: ["Britannica — Caesar Cipher"],
  },
  {
    title: "Frequency Analysis Chart",
    era: "~850 CE",
    description:
      "A visualization of Al-Kindi's method: a bar chart showing the relative frequency of each letter in English, used to map cipher symbols back to their plaintext equivalents.",
    exhibitSlug: "states-and-power",
    visualHint: "Bar chart of letter frequencies in English alongside a sample cipher text.",
    sources: ["History of Information — Al-Kindi"],
  },
  {
    title: "Vigenère Square (Tabula Recta)",
    era: "~16th century",
    description:
      "The grid used to encode and decode polyalphabetic Vigenère messages. Each row shifts the alphabet by one additional position.",
    exhibitSlug: "states-and-power",
    visualHint: "26×26 grid of alphabet letters, each row shifted by one position.",
    sources: [],
    status: "Needs verification",
  },
  {
    title: "Kasiski Examination Diagram",
    era: "1863",
    description:
      "A visual representation of Kasiski's method: repeated sequences in cipher text with measured distances between them, used to determine the keyword length of a Vigenère cipher.",
    exhibitSlug: "states-and-power",
    visualHint: "Cipher text with colored highlights marking repeated sequences and distance labels.",
    sources: ["Michigan Tech — Kasiski's Method"],
  },
  {
    title: "Enigma Rotor System Diagram",
    era: "Post-World War I",
    description:
      "A cross-section of the Enigma machine's rotor system showing how the electrical pathway changes position with each keypress, producing a different substitution for every letter.",
    exhibitSlug: "machines-of-secrecy",
    visualHint: "Labeled cross-section of three rotors with electrical pathway traced through them.",
    sources: ["Bletchley Park — Enigma"],
  },
  {
    title: "Bombe Machine Diagram",
    era: "World War II",
    description:
      "The Bombe was an electromechanical device that systematically tested Enigma key configurations to determine the daily key: wheel order, wheel settings, and plugboard configuration.",
    exhibitSlug: "machines-of-secrecy",
    visualHint: "Schematic of the Bombe's drum arrangement with labeled wheel order and settings inputs.",
    sources: [
      "Bletchley Park — Bombe",
      "National Museum of Computing — The Turing-Welchman Bombe",
    ],
  },
  {
    title: "Public/Private Key Diagram",
    era: "~1976–1977",
    description:
      "A conceptual illustration of asymmetric encryption: anyone can encrypt a message with the recipient's public key, but only the holder of the matching private key can decrypt it.",
    exhibitSlug: "mathematical-turn",
    visualHint: "Two labeled keys, an open padlock, and a message — showing the one-way relationship.",
    sources: [
      "Diffie & Hellman — New Directions in Cryptography",
      "RSA Paper — Rivest, Shamir, Adleman",
    ],
  },
  {
    title: "TLS Handshake Sequence",
    era: "Present",
    description:
      "A simplified sequence diagram of the TLS handshake: the exchange of hellos, server certificate, key exchange, and first encrypted message between browser and server.",
    exhibitSlug: "invisible-shield",
    visualHint: "Step-by-step sequence diagram with browser and server columns, labeled message exchanges.",
    sources: ["Cloudflare — How SSL/TLS Works"],
  },
  {
    title: "End-to-End Encryption Diagram",
    era: "Present",
    description:
      "A comparison showing server-side encryption (service holds the key) versus end-to-end encryption (only sender and recipient hold keys).",
    exhibitSlug: "invisible-shield",
    visualHint: "Side-by-side diagram of two encryption models with lock icons at different points in the chain.",
    sources: ["IBM — What is End-to-End Encryption?"],
  },
  {
    title: "Browser Lock Icon",
    era: "Present",
    description:
      "The HTTPS padlock — the most visible piece of TLS in everyday use. It indicates that the connection is encrypted and the server's certificate has been verified.",
    exhibitSlug: "invisible-shield",
    visualHint: "Browser address bar with padlock icon, annotated to explain what the certificate confirms.",
    sources: ["Cloudflare — How SSL/TLS Works"],
  },
];

// ─── Concepts ─────────────────────────────────────────────────────────────────

export const concepts: Concept[] = [
  {
    term: "Substitution cipher",
    shortDefinition: "Replaces each letter with a different letter according to a fixed rule.",
    plainLanguageExplanation:
      "A substitution cipher swaps every letter in a message for another letter based on a rule both parties know. In the Caesar cipher, every letter is shifted a fixed number of places: A becomes D, B becomes E. The cipher doesn't change how often letters appear — it only changes which letter stands in for which. That pattern survives the transformation, which is what makes it breakable.",
    exhibitSlug: "secret-writing",
    sources: ["Britannica — Caesar Cipher"],
  },
  {
    term: "Transposition cipher",
    shortDefinition: "Rearranges the letters of a message without changing them.",
    plainLanguageExplanation:
      "A transposition cipher keeps the same letters as the original message but scrambles their positions. The scytale is an early example: the letters were written diagonally across a wrapped rod, and the order made no sense once the strip was unwound. The key to reading it was knowing the rod's exact diameter.",
    exhibitSlug: "secret-writing",
    sources: ["NSA — Fun Facts about Cryptology"],
  },
  {
    term: "Frequency analysis",
    shortDefinition: "Exploits predictable letter frequencies to break substitution ciphers.",
    plainLanguageExplanation:
      "Every language has patterns. In English, E appears far more often than Q. A simple substitution cipher shifts the letters, but it doesn't change how often they appear. Frequency analysis maps the most common symbols in the cipher text to the most common letters in the underlying language — and works backward from there to decode the message.",
    exhibitSlug: "states-and-power",
    sources: ["History of Information — Al-Kindi"],
  },
  {
    term: "Kasiski examination",
    shortDefinition: "Determines a Vigenère cipher's keyword length using repeated sequences.",
    plainLanguageExplanation:
      "Friedrich Kasiski published this method in 1863. A Vigenère cipher uses a repeating keyword, which means the same plaintext word encrypted at different positions in the message will sometimes produce the same cipher text. By finding those repeated sequences and measuring the distances between them, an analyst can determine the keyword's length — and then attack each position separately.",
    exhibitSlug: "states-and-power",
    sources: ["Michigan Tech — Kasiski's Method"],
  },
  {
    term: "Enigma daily key",
    shortDefinition: "The daily configuration of the Enigma machine's rotors and plugboard.",
    plainLanguageExplanation:
      "Enigma operators changed their machine's settings every day from a codebook. The daily key specified which rotors to use and in what order, the starting position of each rotor, and the plugboard connections that swapped additional letter pairs. Without knowing the daily key, intercepted messages were unreadable. Discovering it for each new day was the Bombe's entire purpose.",
    exhibitSlug: "machines-of-secrecy",
    sources: ["National Museum of Computing — The Turing-Welchman Bombe"],
  },
  {
    term: "Public-key cryptography",
    shortDefinition: "Uses separate keys for encryption and decryption, eliminating the need for a prior shared secret.",
    plainLanguageExplanation:
      "Every participant in a public-key system has two keys: a public key they share with anyone, and a private key they never share. A message encrypted with someone's public key can only be decrypted with their private key. This solves a problem that had existed throughout cryptographic history: before this, two parties had to meet in advance to share a key. Public-key cryptography eliminated that requirement entirely.",
    exhibitSlug: "mathematical-turn",
    sources: ["Diffie & Hellman — New Directions in Cryptography"],
  },
  {
    term: "Trapdoor function",
    shortDefinition: "Easy to compute in one direction; computationally hard to reverse without a key.",
    plainLanguageExplanation:
      "A trapdoor function works like a lock that's easy to close but hard to open without the right key. Multiplying two large prime numbers is fast. Factoring the result back into those two primes is computationally hard — and that asymmetry is what makes RSA secure. The public key is derived from the product; the private key depends on the primes themselves.",
    exhibitSlug: "mathematical-turn",
    sources: ["RSA Paper — Rivest, Shamir, Adleman"],
  },
  {
    term: "TLS / HTTPS",
    shortDefinition: "The protocol that secures communication between a browser and a server.",
    plainLanguageExplanation:
      "TLS (Transport Layer Security) is the protocol behind the padlock icon in a browser's address bar. When you connect to a secure website, your browser and the server perform a handshake: they exchange public-key information, verify the server's certificate, and generate temporary session keys for the connection. All communication after that is encrypted with those keys.",
    exhibitSlug: "invisible-shield",
    sources: ["Cloudflare — How SSL/TLS Works"],
  },
  {
    term: "End-to-end encryption",
    shortDefinition: "Data is encrypted at the sender's device and only decrypted at the recipient's device.",
    plainLanguageExplanation:
      "In end-to-end encryption, the encryption happens before the message leaves your device — and only the intended recipient's device holds the key to decrypt it. The service carrying the message cannot read it. This is different from standard server-side encryption, where the service encrypts messages in storage but holds the decryption keys itself.",
    exhibitSlug: "invisible-shield",
    sources: [
      "IBM — What is End-to-End Encryption?",
      "Signal — Is it private? Can I trust it?",
    ],
  },
  {
    term: "Post-quantum cryptography",
    shortDefinition: "Encryption designed to remain secure against quantum computers.",
    plainLanguageExplanation:
      "Current encryption methods like RSA depend on mathematical problems that classical computers cannot solve efficiently. Quantum computers, once powerful enough, could break these systems. Post-quantum cryptography uses different mathematical problems that are expected to resist quantum attacks. In August 2024, NIST released the first three finalized post-quantum standards and advised organizations to begin migrating their systems.",
    exhibitSlug: "invisible-shield",
    sources: [
      "NIST — Post-Quantum Cryptography",
      "NIST — Post-Quantum Cryptography Project",
    ],
  },
];

// ─── Figures ──────────────────────────────────────────────────────────────────

export const figures: Figure[] = [
  {
    name: "Julius Caesar",
    role: "Roman general and statesman",
    exhibitSlug: "secret-writing",
    description:
      "Associated with the Caesar cipher, a simple letter-shift substitution cipher. The cipher shifts each letter by a fixed number of positions in the alphabet.",
    status: "Needs verification",
    sources: ["Britannica — Caesar Cipher"],
  },
  {
    name: "Al-Kindi",
    role: "Ninth-century scholar, Baghdad",
    exhibitSlug: "states-and-power",
    description:
      "Wrote what is described as one of the earliest recorded explanations of cryptanalysis and frequency analysis, around 850 CE. His treatise described how to analyze letter patterns in cipher text to identify their plaintext equivalents.",
    status: "Verified",
    sources: ["History of Information — Al-Kindi"],
  },
  {
    name: "Charles Babbage",
    role: "Mathematician and inventor",
    exhibitSlug: "states-and-power",
    description:
      "Developed a method for breaking the Vigenère cipher around 1846, but did not publish it. The same technique was later published by Friedrich Kasiski in 1863.",
    status: "Verified",
    sources: ["Michigan Tech — Kasiski's Method"],
  },
  {
    name: "Friedrich Kasiski",
    role: "Prussian military officer and cryptanalyst",
    exhibitSlug: "states-and-power",
    description:
      "Published the first recorded account of breaking the Vigenère cipher in 1863, using repeated sequences in cipher text to determine the keyword length.",
    status: "Verified",
    sources: ["Michigan Tech — Kasiski's Method"],
  },
  {
    name: "Arthur Scherbius",
    role: "German engineer",
    exhibitSlug: "machines-of-secrecy",
    description:
      "Invented the Enigma machine shortly after World War I — a rotating electrical cipher device that produced mechanically complex substitutions.",
    status: "Needs verification",
    sources: ["Bletchley Park — Enigma"],
  },
  {
    name: "Marian Rejewski",
    role: "Polish mathematician and cryptanalyst",
    exhibitSlug: "machines-of-secrecy",
    description:
      "Worked on Enigma cryptanalysis in the 1930s. The Bletchley Park codebreaking operation was built on the foundation he and his colleagues established before the war.",
    status: "Verified",
    sources: ["JSTOR Daily — The Polish Connection", "ScienceDirect — Rejewski & Enigma"],
  },
  {
    name: "Henryk Zygalski",
    role: "Polish mathematician and cryptanalyst",
    exhibitSlug: "machines-of-secrecy",
    description:
      "One of three Polish mathematicians who worked on Enigma before Bletchley Park, alongside Marian Rejewski and Jerzy Różycki.",
    status: "Verified",
    sources: ["JSTOR Daily — The Polish Connection"],
  },
  {
    name: "Jerzy Różycki",
    role: "Polish mathematician and cryptanalyst",
    exhibitSlug: "machines-of-secrecy",
    description:
      "One of three Polish mathematicians who worked on Enigma before Bletchley Park, alongside Marian Rejewski and Henryk Zygalski.",
    status: "Verified",
    sources: ["JSTOR Daily — The Polish Connection"],
  },
  {
    name: "Alan Turing",
    role: "Mathematician, Bletchley Park",
    exhibitSlug: "machines-of-secrecy",
    description:
      "Developed the Bombe to determine Naval Enigma key settings that could not be solved by hand. Central figure in the Bletchley Park codebreaking operation.",
    status: "Needs verification",
    sources: ["Bletchley Park — Bombe"],
  },
  {
    name: "Claude Shannon",
    role: "Mathematician and electrical engineer",
    exhibitSlug: "mathematical-turn",
    description:
      "Published a paper on the mathematical theory of secrecy around 1949, formally defining secrecy systems and establishing cryptography as a mathematical discipline.",
    status: "Needs verification",
    sources: ["Shannon — Communication Theory of Secrecy Systems"],
  },
  {
    name: "Whitfield Diffie",
    role: "Cryptographer",
    exhibitSlug: "mathematical-turn",
    description:
      "Co-proposed the public-key cryptosystem concept with Martin Hellman: a system in which enciphering and deciphering use distinct keys, and the public key can be disclosed without compromising the private key.",
    status: "Needs verification",
    sources: ["Diffie & Hellman — New Directions in Cryptography"],
  },
  {
    name: "Martin Hellman",
    role: "Cryptographer",
    exhibitSlug: "mathematical-turn",
    description:
      "Co-proposed the public-key cryptosystem concept with Whitfield Diffie, introducing the foundational principle underlying modern asymmetric encryption.",
    status: "Needs verification",
    sources: ["Diffie & Hellman — New Directions in Cryptography"],
  },
  {
    name: "Ron Rivest",
    role: "Cryptographer and computer scientist",
    exhibitSlug: "mathematical-turn",
    description:
      "Co-developed RSA with Adi Shamir and Leonard Adleman — the first practical implementation of public-key cryptosystems and digital signatures, building on Diffie and Hellman's framework.",
    status: "Needs verification",
    sources: ["RSA Paper — Rivest, Shamir, Adleman"],
  },
  {
    name: "Adi Shamir",
    role: "Cryptographer and computer scientist",
    exhibitSlug: "mathematical-turn",
    description:
      "Co-developed RSA with Ron Rivest and Leonard Adleman.",
    status: "Needs verification",
    sources: ["RSA Paper — Rivest, Shamir, Adleman"],
  },
  {
    name: "Leonard Adleman",
    role: "Cryptographer and computer scientist",
    exhibitSlug: "mathematical-turn",
    description:
      "Co-developed RSA with Ron Rivest and Adi Shamir.",
    status: "Needs verification",
    sources: ["RSA Paper — Rivest, Shamir, Adleman"],
  },
  {
    name: "Phil Zimmermann",
    role: "Software engineer and privacy advocate",
    exhibitSlug: "invisible-shield",
    description:
      "Developed Pretty Good Privacy (PGP) in 1991, making public-key encryption available to individuals for the first time. PGP's international spread as freeware triggered a criminal investigation under U.S. export control laws; the investigation was eventually dropped.",
    status: "Verified",
    sources: ["OpenPGP — History of OpenPGP"],
  },
];

// ─── Process Stages ───────────────────────────────────────────────────────────

export const processStages: ProcessStage[] = [
  {
    stage: "Topic selection and conceptual planning",
    tool: "GitHub Copilot (Claude Sonnet)",
    goal: "Define the project topic, thesis, brand direction, design style, and exhibit structure.",
    result:
      "PROJECT_BRIEF.md, CONTENT_MODEL.md, DESIGN_SYSTEM.md, AI_ORCHESTRATION_LOG.md, QA_REVIEW_LOG.md, and PRESENTATION_NOTES.md created. Exhibit route condensed from six exhibits to five.",
  },
  {
    stage: "Technical foundation setup",
    tool: "GitHub Copilot (Claude Sonnet)",
    goal: "Initialize a Next.js project with TypeScript, Tailwind CSS, ESLint, App Router, and src directory.",
    result:
      "Next.js 16.2.6 project initialized. Package name corrected to a valid lowercase npm name. Turbopack root config added to silence a workspace warning.",
  },
  {
    stage: "Research planning and source organization",
    tool: "GitHub Copilot (Claude Sonnet) under student direction",
    goal: "Organize research direction and identify credible sources for each exhibit.",
    result:
      "RESEARCH_NOTES.md created with two verified source packs totaling 20 sources, each assigned to an exhibit. [VERIFY] tags applied to all unconfirmed claims.",
  },
  {
    stage: "Controlled site copy creation",
    tool: "GitHub Copilot (Claude Sonnet) under student direction",
    goal: "Convert verified research into controlled museum copy for all five exhibits and companion pages, without fabricating any historical content.",
    result:
      "SITE_COPY.md created as source-of-truth writing document. No content added without a supporting source. Unverified items retained as [VERIFY] placeholders and excluded from production.",
  },
  {
    stage: "Structured data layer",
    tool: "GitHub Copilot (Claude Sonnet) under student direction",
    goal: "Create typed TypeScript data file from SITE_COPY.md to serve as the source of truth for website content.",
    result:
      "src/lib/museum-data.ts created with full TypeScript interfaces and exported data for all content types. status? field added to support honest display of unverified items.",
  },
  {
    stage: "Global design system implementation",
    tool: "GitHub Copilot (Claude Sonnet) under student direction",
    goal: "Implement the design system from DESIGN_SYSTEM.md as production CSS, root layout, and sitewide navigation.",
    result:
      "globals.css replaced with 10 CSS custom property tokens and archival dot-grid texture. layout.tsx updated with system serif/sans/mono stacks, metadata, MuseumNav component, and footer to avoid external font-fetch build dependencies.",
  },
  {
    stage: "Reusable component system",
    tool: "GitHub Copilot (Claude Sonnet) under student direction",
    goal: "Build 9 shared server components for all recurring content types.",
    result:
      "StatusBadge, EvidencePanel, ExhibitCard, ArtifactPanel, ConceptCard, FigureCard, TimelineRail, CuratorNote, and NextRoomCTA created in src/components/. All are server components with no client-side JavaScript.",
  },
  {
    stage: "Homepage and exhibit route implementation",
    tool: "GitHub Copilot (Claude Sonnet) under student direction",
    goal: "Build the homepage, exhibits index, and five dynamic exhibit detail pages.",
    result:
      "src/app/page.tsx (homepage), src/app/exhibits/page.tsx (gallery lobby), and src/app/exhibits/[slug]/page.tsx (5 static rooms via generateStaticParams) implemented. Build passed with zero lint errors.",
  },
  {
    stage: "Companion page implementation",
    tool: "GitHub Copilot (Claude Sonnet) under student direction",
    goal: "Build the five companion pages: Timeline, Artifacts, Concepts, Figures, and Process.",
    result:
      "All five companion pages built and verified. Every navigation link in the museum resolves to a built page. Total: 15 static routes. ESLint and TypeScript clean at each step.",
  },
  {
    stage: "Final visual presentation pass",
    tool: "GitHub Copilot (GPT-5.3-Codex) under student direction",
    goal: "Reduce SVG clutter in public listings, prioritize local hero image layer, and tighten readability for final submission.",
    result:
      "Homepage, exhibit rooms, and companion pages now use curated local hero images. Diagram usage is limited to controlled supporting placements only. Readability and section spacing were increased while preserving route structure and source tracking.",
  },
  {
    stage: "Ongoing QA through lint and build verification",
    tool: "npm run lint && npm run build (run after every implementation step)",
    goal: "Catch TypeScript errors, ESLint violations, and broken static generation before moving to the next step.",
    result:
      "Every implementation step ended with a passing build. One server component event handler error was caught and corrected on the homepage. No other build failures occurred.",
  },
];
