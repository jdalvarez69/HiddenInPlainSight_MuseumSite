// Three Enigma rotors side by side. Each rotor is a circle with contact points
// around its edge and an internal wiring path showing signal permutation.
// Signal enters from the left and exits on the right after passing through all three.

const rotors = [
  { label: "I", cx: 72, cy: 88 },
  { label: "II", cx: 160, cy: 88 },
  { label: "III", cx: 248, cy: 88 },
];

const r = 44; // rotor radius
const contactCount = 8;

function contactPositions(cx: number, cy: number, radius: number) {
  return Array.from({ length: contactCount }, (_, i) => {
    const angle = (i * 2 * Math.PI) / contactCount - Math.PI / 2;
    return {
      x: cx + radius * Math.cos(angle),
      y: cy + radius * Math.sin(angle),
    };
  });
}

// A simple "wiring" path inside a rotor — just a cubic bezier for visual effect
function wiringPath(cx: number, cy: number): string {
  const x0 = cx - r + 6;
  const x1 = cx + r - 6;
  const cp1x = cx - 10;
  const cp1y = cy - 22;
  const cp2x = cx + 10;
  const cp2y = cy + 22;
  return `M ${x0} ${cy + 10} C ${cp1x} ${cp1y} ${cp2x} ${cp2y} ${x1} ${cy - 8}`;
}

export default function EnigmaRotorVisual() {
  return (
    <svg
      viewBox="0 0 320 175"
      width="100%"
      style={{ maxWidth: "320px", height: "auto" }}
      aria-hidden="true"
    >
      {/* signal entry arrow */}
      <line x1="8" y1="88" x2="26" y2="88" stroke="#8a6826" strokeWidth="1.5" />
      <polygon points="26,84 26,92 34,88" fill="#8a6826" />

      {/* signal exit arrow */}
      <line x1="294" y1="88" x2="312" y2="88" stroke="#8a6826" strokeWidth="1.5" />
      <polygon points="304,84 304,92 312,88" fill="#8a6826" />

      {rotors.map(({ label, cx, cy }) => {
        const contacts = contactPositions(cx, cy, r);
        return (
          <g key={label}>
            {/* rotor body */}
            <circle cx={cx} cy={cy} r={r} fill="#211f1b" stroke="#3a3730" strokeWidth="1.5" />
            {/* inner wiring suggestion */}
            <path d={wiringPath(cx, cy)} fill="none" stroke="#8a6826" strokeWidth="0.8" opacity="0.7" />

            {/* contact dots */}
            {contacts.map(({ x, y }, i) => (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="2.5"
                fill="#272420"
                stroke="#6b6460"
                strokeWidth="0.8"
              />
            ))}

            {/* rotor label */}
            <text
              x={cx}
              y={cy + 4}
              textAnchor="middle"
              fontSize="12"
              fill="#9b9388"
              fontFamily="monospace"
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* connection lines between rotors */}
      <line x1={72 + r} y1={88} x2={160 - r} y2={88} stroke="#3a3730" strokeWidth="1" />
      <line x1={160 + r} y1={88} x2={248 - r} y2={88} stroke="#3a3730" strokeWidth="1" />

      {/* label */}
      <text x="160" y="162" textAnchor="middle" fontSize="8" fill="#6b6460" fontFamily="sans-serif" letterSpacing="0.5">
        Each rotor permutes the signal — position changes with every keypress
      </text>
    </svg>
  );
}
