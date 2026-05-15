// Two concentric alphabet rings. Outer ring: A–H (plaintext).
// Inner ring: D–K (ciphertext, +3 shift). A on the outer aligns with D on the inner.

// Pre-computed letter positions (8 letters, 45° apart starting at top/-90°)
// Center (130, 130), outer r=110 (letter positions), inner r=85 (between rings)
const outerLetters = [
  { letter: "A", x: 130, y: 20 },
  { letter: "B", x: 208, y: 52 },
  { letter: "C", x: 240, y: 130 },
  { letter: "D", x: 208, y: 208 },
  { letter: "E", x: 130, y: 240 },
  { letter: "F", x: 52, y: 208 },
  { letter: "G", x: 20, y: 130 },
  { letter: "H", x: 52, y: 52 },
];

const innerLetters = [
  { letter: "D", x: 130, y: 45 },
  { letter: "E", x: 190, y: 70 },
  { letter: "F", x: 215, y: 130 },
  { letter: "G", x: 190, y: 190 },
  { letter: "H", x: 130, y: 215 },
  { letter: "I", x: 70, y: 190 },
  { letter: "J", x: 45, y: 130 },
  { letter: "K", x: 70, y: 70 },
];

export default function CaesarWheelVisual() {
  return (
    <svg
      viewBox="0 0 260 260"
      width="100%"
      style={{ maxWidth: "260px", height: "auto" }}
      aria-hidden="true"
    >
      {/* outer ring */}
      <circle cx="130" cy="130" r="100" fill="none" stroke="#3a3730" strokeWidth="1.5" />
      {/* inner ring */}
      <circle cx="130" cy="130" r="72" fill="none" stroke="#3a3730" strokeWidth="1" />
      {/* inner fill */}
      <circle cx="130" cy="130" r="71" fill="#211f1b" />

      {/* alignment indicator — dotted line from outer A to inner D at top */}
      <line x1="130" y1="30" x2="130" y2="58" stroke="#c4973a" strokeWidth="1" strokeDasharray="2 2" />
      {/* small tick at top of outer ring */}
      <line x1="127" y1="29" x2="133" y2="29" stroke="#c4973a" strokeWidth="1.5" />

      {/* outer plaintext letters */}
      {outerLetters.map(({ letter, x, y }) => (
        <text
          key={`outer-${letter}`}
          x={x}
          y={y}
          fontSize="11"
          fill={letter === "A" ? "#c4973a" : "#9b9388"}
          fontFamily="monospace"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {letter}
        </text>
      ))}

      {/* inner ciphertext letters */}
      {innerLetters.map(({ letter, x, y }) => (
        <text
          key={`inner-${letter}`}
          x={x}
          y={y}
          fontSize="10"
          fill={letter === "D" ? "#c4973a" : "#6b6460"}
          fontFamily="monospace"
          textAnchor="middle"
          dominantBaseline="central"
        >
          {letter}
        </text>
      ))}

      {/* ring labels */}
      <text x="130" y="118" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif" letterSpacing="1">PLAINTEXT</text>
      <text x="130" y="106" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif" letterSpacing="1">CIPHERTEXT</text>

      {/* shift label */}
      <text x="130" y="130" textAnchor="middle" fontSize="8" fill="#8a6826" fontFamily="sans-serif">A → D</text>
      <text x="130" y="142" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif">shift + 3</text>
    </svg>
  );
}
