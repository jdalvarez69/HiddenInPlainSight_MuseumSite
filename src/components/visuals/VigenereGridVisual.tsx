// Partial tabula recta (Vigenère grid). 5×5 excerpt showing how the keyword
// row and plaintext column intersect to produce the ciphertext letter.

// Grid: rows indexed by keyword letter, columns by plaintext letter
// Starting letters: A, B, C, D, E
const gridLetters = [
  ["A", "B", "C", "D", "E"],
  ["B", "C", "D", "E", "F"],
  ["C", "D", "E", "F", "G"],
  ["D", "E", "F", "G", "H"],
  ["E", "F", "G", "H", "I"],
];

const cellW = 32;
const cellH = 28;
const gridX = 62; // start of columns
const gridY = 48; // start of rows
const headerLetters = ["A", "B", "C", "D", "E"];

// Highlighted cell: row 2 (key "C"), col 2 (plain "C") → cipher "E"
const hlRow = 2;
const hlCol = 2;

export default function VigenereGridVisual() {
  return (
    <svg
      viewBox="0 0 260 210"
      width="100%"
      style={{ maxWidth: "260px", height: "auto" }}
      aria-hidden="true"
    >
      {/* column header label */}
      <text x={gridX + (cellW * 5) / 2} y="18" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif" letterSpacing="1">
        PLAINTEXT →
      </text>

      {/* row header label (rotated) */}
      <text
        x="18"
        y={gridY + (cellH * 5) / 2}
        textAnchor="middle"
        fontSize="7"
        fill="#6b6460"
        fontFamily="sans-serif"
        letterSpacing="1"
        transform="rotate(-90, 18, 120)"
      >
        KEY →
      </text>

      {/* column header letters */}
      {headerLetters.map((letter, i) => (
        <text
          key={`col-header-${letter}`}
          x={gridX + i * cellW + cellW / 2}
          y={36}
          textAnchor="middle"
          fontSize="9"
          fill={i === hlCol ? "#c4973a" : "#9b9388"}
          fontFamily="monospace"
        >
          {letter}
        </text>
      ))}

      {/* row header letters */}
      {headerLetters.map((letter, j) => (
        <text
          key={`row-header-${letter}`}
          x={48}
          y={gridY + j * cellH + cellH / 2 + 4}
          textAnchor="middle"
          fontSize="9"
          fill={j === hlRow ? "#c4973a" : "#9b9388"}
          fontFamily="monospace"
        >
          {letter}
        </text>
      ))}

      {/* grid cells */}
      {gridLetters.map((row, j) =>
        row.map((letter, i) => {
          const isHighlighted = i === hlCol && j === hlRow;
          const x = gridX + i * cellW;
          const y = gridY + j * cellH;
          return (
            <g key={`cell-${j}-${i}`}>
              <rect
                x={x}
                y={y}
                width={cellW}
                height={cellH}
                fill={isHighlighted ? "#272420" : "none"}
                stroke={isHighlighted ? "#c4973a" : "#3a3730"}
                strokeWidth={isHighlighted ? 1.5 : 0.5}
              />
              <text
                x={x + cellW / 2}
                y={y + cellH / 2 + 4}
                textAnchor="middle"
                fontSize="10"
                fill={isHighlighted ? "#c4973a" : "#9b9388"}
                fontFamily="monospace"
              >
                {letter}
              </text>
            </g>
          );
        })
      )}

      {/* annotation */}
      <text x="130" y="192" textAnchor="middle" fontSize="8" fill="#8a6826" fontFamily="sans-serif">
        Key &#34;C&#34; + Plain &#34;C&#34; = Cipher &#34;E&#34;
      </text>
      <text x="130" y="204" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif" letterSpacing="0.3">
        Each keyword letter selects a different shift row
      </text>
    </svg>
  );
}
