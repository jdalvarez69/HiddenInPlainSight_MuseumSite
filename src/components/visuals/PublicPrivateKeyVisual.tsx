// Public/private key asymmetric encryption.
// Anyone can encrypt with the public key. Only the holder of the private key can decrypt.

export default function PublicPrivateKeyVisual() {
  return (
    <svg
      viewBox="0 0 360 160"
      width="100%"
      style={{ maxWidth: "360px", height: "auto" }}
      aria-hidden="true"
    >
      {/* ── Sender (left) ──────────────────────────────────────────────── */}
      <rect x="10" y="60" width="64" height="38" rx="2" fill="#211f1b" stroke="#3a3730" strokeWidth="1" />
      <text x="42" y="82" textAnchor="middle" fontSize="8" fill="#9b9388" fontFamily="sans-serif">Sender</text>

      {/* arrow: sender → public key */}
      <line x1="74" y1="79" x2="106" y2="79" stroke="#3a3730" strokeWidth="1" />
      <polygon points="104,75 104,83 112,79" fill="#3a3730" />

      {/* public key symbol */}
      <g transform="translate(118,62)">
        {/* key shaft */}
        <rect x="0" y="10" width="26" height="6" rx="1" fill="#272420" stroke="#6b6460" strokeWidth="0.8" />
        {/* key bow (open padlock circle) */}
        <circle cx="-6" cy="13" r="8" fill="none" stroke="#9b9388" strokeWidth="1.2" />
        {/* key teeth */}
        <rect x="14" y="16" width="5" height="3" rx="0.5" fill="#272420" stroke="#6b6460" strokeWidth="0.6" />
        <rect x="20" y="16" width="4" height="5" rx="0.5" fill="#272420" stroke="#6b6460" strokeWidth="0.6" />
      </g>
      <text x="130" y="104" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif" letterSpacing="0.5">Public key</text>
      <text x="130" y="114" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif">Anyone can use</text>

      {/* arrow: public key → cipher */}
      <line x1="152" y1="79" x2="172" y2="79" stroke="#3a3730" strokeWidth="1" />
      <polygon points="170,75 170,83 178,79" fill="#3a3730" />

      {/* ── Encrypted message (center) ─────────────────────────────────── */}
      <rect x="178" y="56" width="50" height="46" rx="2" fill="#272420" stroke="#8a6826" strokeWidth="1.5" />
      {/* lock icon on the message */}
      <rect x="189" y="69" width="28" height="20" rx="2" fill="#1a1714" stroke="#8a6826" strokeWidth="1" />
      <path d="M 195 69 L 195 63 Q 203 57 211 63 L 211 69" fill="none" stroke="#8a6826" strokeWidth="1.2" />
      <circle cx="203" cy="77" r="3" fill="#8a6826" />

      {/* transit label */}
      <text x="203" y="118" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif">Over the network</text>

      {/* arrow: cipher → private key */}
      <line x1="228" y1="79" x2="248" y2="79" stroke="#3a3730" strokeWidth="1" />
      <polygon points="246,75 246,83 254,79" fill="#3a3730" />

      {/* ── Private key (right) ────────────────────────────────────────── */}
      <g transform="translate(260,62)">
        {/* key shaft */}
        <rect x="0" y="10" width="26" height="6" rx="1" fill="#272420" stroke="#c4973a" strokeWidth="0.8" />
        {/* key bow (filled — only you hold this) */}
        <circle cx="-6" cy="13" r="8" fill="none" stroke="#c4973a" strokeWidth="1.5" />
        <circle cx="-6" cy="13" r="4" fill="#8a6826" />
        {/* key teeth */}
        <rect x="14" y="16" width="5" height="3" rx="0.5" fill="#272420" stroke="#c4973a" strokeWidth="0.6" />
        <rect x="20" y="16" width="4" height="5" rx="0.5" fill="#272420" stroke="#c4973a" strokeWidth="0.6" />
      </g>
      <text x="272" y="104" textAnchor="middle" fontSize="7" fill="#8a6826" fontFamily="sans-serif" letterSpacing="0.5">Private key</text>
      <text x="272" y="114" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif">Only you hold this</text>

      {/* arrow: private key → recipient */}
      <line x1="294" y1="79" x2="314" y2="79" stroke="#c4973a" strokeWidth="1" />
      <polygon points="312,75 312,83 320,79" fill="#c4973a" />

      {/* ── Recipient (right) ─────────────────────────────────────────── */}
      <rect x="320" y="60" width="32" height="38" rx="2" fill="#211f1b" stroke="#c4973a" strokeWidth="1" />
      <text x="336" y="76" textAnchor="middle" fontSize="7" fill="#9b9388" fontFamily="sans-serif">Re-</text>
      <text x="336" y="87" textAnchor="middle" fontSize="7" fill="#9b9388" fontFamily="sans-serif">cip-</text>
      <text x="336" y="98" textAnchor="middle" fontSize="7" fill="#9b9388" fontFamily="sans-serif">ient</text>
    </svg>
  );
}
