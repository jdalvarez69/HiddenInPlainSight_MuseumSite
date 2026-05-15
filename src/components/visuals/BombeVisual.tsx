// The Bombe: banks of rotating drums testing Enigma configurations in parallel.
// Three rows × five columns of circular drums with subtle connection lines.

const rows = 3;
const cols = 5;
const drumR = 18;
const colSpacing = 52;
const rowSpacing = 52;
const startX = 52;
const startY = 36;

export default function BombeVisual() {
  const drums: { cx: number; cy: number; row: number; col: number }[] = [];
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      drums.push({
        cx: startX + col * colSpacing,
        cy: startY + row * rowSpacing,
        row,
        col,
      });
    }
  }

  return (
    <svg
      viewBox="0 0 320 185"
      width="100%"
      style={{ maxWidth: "320px", height: "auto" }}
      aria-hidden="true"
    >
      {/* machine housing background */}
      <rect x="16" y="18" width="288" height="130" rx="2" fill="#1a1714" stroke="#2e2b26" strokeWidth="1" />

      {/* horizontal connection lines between drums in each row */}
      {Array.from({ length: rows }, (_, row) => {
        const y = startY + row * rowSpacing;
        return (
          <line
            key={`row-line-${row}`}
            x1={startX - drumR}
            y1={y}
            x2={startX + (cols - 1) * colSpacing + drumR}
            y2={y}
            stroke="#2e2b26"
            strokeWidth="0.8"
          />
        );
      })}

      {/* vertical connection lines between rows for each column */}
      {Array.from({ length: cols }, (_, col) => {
        const x = startX + col * colSpacing;
        return (
          <line
            key={`col-line-${col}`}
            x1={x}
            y1={startY - drumR}
            x2={x}
            y2={startY + (rows - 1) * rowSpacing + drumR}
            stroke="#2e2b26"
            strokeWidth="0.6"
            strokeDasharray="2 3"
          />
        );
      })}

      {/* drums */}
      {drums.map(({ cx, cy, row, col }) => {
        const isActive = row === 1 && col === 2;
        return (
          <g key={`drum-${row}-${col}`}>
            <circle
              cx={cx}
              cy={cy}
              r={drumR}
              fill="#211f1b"
              stroke={isActive ? "#8a6826" : "#3a3730"}
              strokeWidth={isActive ? 1.5 : 1}
            />
            <circle
              cx={cx}
              cy={cy}
              r={drumR - 6}
              fill="none"
              stroke={isActive ? "#6b6460" : "#272420"}
              strokeWidth="0.8"
            />
            {/* center dot */}
            <circle cx={cx} cy={cy} r="2" fill={isActive ? "#8a6826" : "#3a3730"} />
          </g>
        );
      })}

      {/* label */}
      <text x="160" y="172" textAnchor="middle" fontSize="8" fill="#6b6460" fontFamily="sans-serif" letterSpacing="0.5">
        Parallel drums test configurations — most fail, one succeeds
      </text>
    </svg>
  );
}
