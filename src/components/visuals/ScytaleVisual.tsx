export default function ScytaleVisual() {
  return (
    <svg
      viewBox="0 0 320 190"
      width="100%"
      style={{ maxWidth: "320px", height: "auto" }}
      aria-hidden="true"
    >
      {/* ── Rod / Cylinder ─────────────────────────────────────────────── */}
      <rect x="46" y="56" width="228" height="44" fill="#272420" stroke="#3a3730" strokeWidth="1" />
      {/* left cap */}
      <ellipse cx="46" cy="78" rx="15" ry="22" fill="#211f1b" stroke="#3a3730" strokeWidth="1" />
      {/* right cap */}
      <ellipse cx="274" cy="78" rx="15" ry="22" fill="#211f1b" stroke="#3a3730" strokeWidth="1" />

      {/* diagonal strip lines suggesting wrapping */}
      <line x1="62" y1="56" x2="274" y2="100" stroke="#8a6826" strokeWidth="0.8" strokeDasharray="4 3" />
      <line x1="80" y1="56" x2="274" y2="92" stroke="#8a6826" strokeWidth="0.8" strokeDasharray="4 3" />
      <line x1="62" y1="68" x2="258" y2="100" stroke="#8a6826" strokeWidth="0.8" strokeDasharray="4 3" />

      {/* message letters on the rod */}
      <text x="110" y="75" fontSize="11" fill="#c4973a" fontFamily="monospace" textAnchor="middle">H</text>
      <text x="150" y="83" fontSize="11" fill="#c4973a" fontFamily="monospace" textAnchor="middle">E</text>
      <text x="188" y="73" fontSize="11" fill="#c4973a" fontFamily="monospace" textAnchor="middle">L</text>
      <text x="226" y="80" fontSize="11" fill="#c4973a" fontFamily="monospace" textAnchor="middle">P</text>

      {/* top label */}
      <text x="160" y="20" textAnchor="middle" fontSize="8" fill="#6b6460" fontFamily="sans-serif" letterSpacing="0.8">Rod — message readable</text>

      {/* ── Unwound strip ─────────────────────────────────────────────── */}
      <rect x="46" y="130" width="228" height="20" rx="2" fill="#211f1b" stroke="#3a3730" strokeWidth="1" />
      <text
        x="56"
        y="145"
        fontSize="9"
        fill="#6b6460"
        fontFamily="monospace"
        textLength="208"
        lengthAdjust="spacing"
      >
        P E L X W H T M R A O K
      </text>

      {/* bottom label */}
      <text x="160" y="170" textAnchor="middle" fontSize="8" fill="#6b6460" fontFamily="sans-serif" letterSpacing="0.8">Strip unwound — meaning lost</text>
    </svg>
  );
}
