// Post-quantum cryptography: abstract lattice structure.
// Lattice-based cryptography uses the hardness of certain geometric problems
// in high-dimensional space. Visualized as a regular grid of points with
// connected paths — a structure that is easy to describe but hard to navigate without a key.

const cols = 7;
const rows = 5;
const spacingX = 36;
const spacingY = 34;
const startX = 28;
const startY = 26;

export default function PostQuantumVisual() {
  const points: { x: number; y: number; col: number; row: number }[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      points.push({
        x: startX + col * spacingX,
        y: startY + row * spacingY,
        col,
        row,
      });
    }
  }

  // Highlight a short lattice path (the "hidden" basis vector)
  const accentPath = [
    { col: 2, row: 1 },
    { col: 3, row: 2 },
    { col: 4, row: 1 },
    { col: 3, row: 0 },
    { col: 2, row: 1 },
  ];

  const accentCoords = accentPath.map(({ col, row }) => ({
    x: startX + col * spacingX,
    y: startY + row * spacingY,
  }));

  const pathD = accentCoords
    .map(({ x, y }, i) => `${i === 0 ? "M" : "L"} ${x} ${y}`)
    .join(" ");

  return (
    <svg
      viewBox="0 0 272 202"
      width="100%"
      style={{ maxWidth: "272px", height: "auto" }}
      aria-hidden="true"
    >
      {/* grid connection lines (horizontal) */}
      {Array.from({ length: rows }, (_, row) => (
        <line
          key={`h-${row}`}
          x1={startX}
          y1={startY + row * spacingY}
          x2={startX + (cols - 1) * spacingX}
          y2={startY + row * spacingY}
          stroke="#2e2b26"
          strokeWidth="0.6"
        />
      ))}

      {/* grid connection lines (vertical) */}
      {Array.from({ length: cols }, (_, col) => (
        <line
          key={`v-${col}`}
          x1={startX + col * spacingX}
          y1={startY}
          x2={startX + col * spacingX}
          y2={startY + (rows - 1) * spacingY}
          stroke="#2e2b26"
          strokeWidth="0.6"
        />
      ))}

      {/* diagonal lattice lines for mathematical depth */}
      {Array.from({ length: rows - 1 }, (_, row) =>
        Array.from({ length: cols - 1 }, (_, col) => (
          <line
            key={`d-${row}-${col}`}
            x1={startX + col * spacingX}
            y1={startY + row * spacingY}
            x2={startX + (col + 1) * spacingX}
            y2={startY + (row + 1) * spacingY}
            stroke="#272420"
            strokeWidth="0.5"
          />
        ))
      )}

      {/* accent path — the hidden lattice basis */}
      <path d={pathD} fill="none" stroke="#8a6826" strokeWidth="1.5" strokeDasharray="4 2" opacity="0.8" />

      {/* grid points */}
      {points.map(({ x, y, col, row }) => {
        const isAccent = accentPath.some((p) => p.col === col && p.row === row);
        return (
          <circle
            key={`pt-${row}-${col}`}
            cx={x}
            cy={y}
            r={isAccent ? 4 : 2.5}
            fill={isAccent ? "#8a6826" : "#272420"}
            stroke={isAccent ? "#c4973a" : "#3a3730"}
            strokeWidth={isAccent ? 1 : 0.8}
          />
        );
      })}

      {/* annotation */}
      <text x="136" y="186" textAnchor="middle" fontSize="8" fill="#8a6826" fontFamily="sans-serif" letterSpacing="0.3">
        The hidden path is easy to walk — impossible to find
      </text>
      <text x="136" y="197" textAnchor="middle" fontSize="7" fill="#6b6460" fontFamily="sans-serif">
        Lattice-based cryptography, 2024 NIST standards
      </text>
    </svg>
  );
}
