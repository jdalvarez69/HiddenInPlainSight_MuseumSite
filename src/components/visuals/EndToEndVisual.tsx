// End-to-end encryption: message is encrypted at the sender's device,
// travels as cipher, and is decrypted only at the recipient's device.
// An interceptor in the middle sees only unreadable cipher symbols.

export default function EndToEndVisual() {
  return (
    <svg
      viewBox="0 0 360 175"
      width="100%"
      style={{ maxWidth: "360px", height: "auto" }}
      aria-hidden="true"
    >
      {/* ── Sender device ─────────────────────────────────────────────── */}
      <rect x="12" y="32" width="58" height="72" rx="4" fill="#211f1b" stroke="#3a3730" strokeWidth="1" />
      {/* screen */}
      <rect x="18" y="40" width="46" height="38" rx="2" fill="#1a1714" stroke="#2e2b26" strokeWidth="0.8" />
      <text x="41" y="55" textAnchor="middle" fontSize="7" fill="#c4973a" fontFamily="monospace">Hello</text>
      <text x="41" y="66" textAnchor="middle" fontSize="7" fill="#c4973a" fontFamily="monospace">Alice</text>
      {/* home button */}
      <circle cx="41" cy="94" r="5" fill="none" stroke="#3a3730" strokeWidth="0.8" />
      <text x="41" y="118" textAnchor="middle" fontSize="8" fill="#9b9388" fontFamily="sans-serif">Sender</text>

      {/* encrypt arrow */}
      <line x1="70" y1="68" x2="92" y2="68" stroke="#8a6826" strokeWidth="1" />
      <polygon points="90,64 90,72 98,68" fill="#8a6826" />

      {/* ── Encrypted blob (transit) ───────────────────────────────────── */}
      <rect x="98" y="46" width="72" height="44" rx="2" fill="#272420" stroke="#8a6826" strokeWidth="1.5" />
      <text x="134" y="63" textAnchor="middle" fontSize="9" fill="#6b6460" fontFamily="monospace">X4#@</text>
      <text x="134" y="76" textAnchor="middle" fontSize="9" fill="#6b6460" fontFamily="monospace">¡k9&amp;</text>
      {/* lock over it */}
      <rect x="154" y="44" width="16" height="12" rx="1" fill="#1a1714" stroke="#c4973a" strokeWidth="1" />
      <path d="M 157 44 L 157 40 Q 162 36 167 40 L 167 44" fill="none" stroke="#c4973a" strokeWidth="1" />

      {/* decrypt arrow */}
      <line x1="170" y1="68" x2="192" y2="68" stroke="#8a6826" strokeWidth="1" />
      <polygon points="190,64 190,72 198,68" fill="#8a6826" />

      {/* second encrypted blob */}
      <rect x="198" y="46" width="72" height="44" rx="2" fill="#272420" stroke="#8a6826" strokeWidth="1.5" />
      <text x="234" y="63" textAnchor="middle" fontSize="9" fill="#6b6460" fontFamily="monospace">X4#@</text>
      <text x="234" y="76" textAnchor="middle" fontSize="9" fill="#6b6460" fontFamily="monospace">¡k9&amp;</text>

      {/* final arrow */}
      <line x1="270" y1="68" x2="292" y2="68" stroke="#c4973a" strokeWidth="1" />
      <polygon points="290,64 290,72 298,68" fill="#c4973a" />

      {/* ── Recipient device ───────────────────────────────────────────── */}
      <rect x="298" y="32" width="54" height="72" rx="4" fill="#211f1b" stroke="#c4973a" strokeWidth="1" />
      <rect x="304" y="40" width="42" height="38" rx="2" fill="#1a1714" stroke="#2e2b26" strokeWidth="0.8" />
      <text x="325" y="55" textAnchor="middle" fontSize="7" fill="#c4973a" fontFamily="monospace">Hello</text>
      <text x="325" y="66" textAnchor="middle" fontSize="7" fill="#c4973a" fontFamily="monospace">Alice</text>
      <circle cx="325" cy="94" r="5" fill="none" stroke="#c4973a" strokeWidth="0.8" />
      <text x="325" y="118" textAnchor="middle" fontSize="8" fill="#9b9388" fontFamily="sans-serif">Recipient</text>

      {/* ── Interceptor (below) ────────────────────────────────────────── */}
      <line x1="134" y1="90" x2="134" y2="130" stroke="#3a3730" strokeWidth="0.8" strokeDasharray="2 2" />
      <rect x="90" y="130" width="90" height="30" rx="2" fill="#1a1714" stroke="#2e2b26" strokeWidth="1" />
      <text x="135" y="142" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif">Interceptor sees:</text>
      <text x="135" y="154" textAnchor="middle" fontSize="9" fill="#6b6460" fontFamily="monospace">X4#@ ¡k9&amp;</text>
    </svg>
  );
}
