// Simple bar chart of English letter frequencies.
// E is highlighted — the most frequent letter, the key to frequency analysis.

const bars = [
  { letter: "E", height: 100, freq: "12.7%" },
  { letter: "T", height: 72, freq: "9.1%" },
  { letter: "A", height: 65, freq: "8.2%" },
  { letter: "O", height: 59, freq: "7.5%" },
  { letter: "I", height: 55, freq: "7.0%" },
  { letter: "N", height: 53, freq: "6.7%" },
  { letter: "S", height: 50, freq: "6.3%" },
  { letter: "H", height: 48, freq: "6.1%" },
];

const barWidth = 22;
const gap = 10;
const startX = 24;
const baselineY = 140;

export default function FrequencyAnalysisVisual() {
  return (
    <svg
      viewBox="0 0 280 175"
      width="100%"
      style={{ maxWidth: "280px", height: "auto" }}
      aria-hidden="true"
    >
      {/* baseline */}
      <line x1="14" y1={baselineY} x2="266" y2={baselineY} stroke="#3a3730" strokeWidth="1" />

      {/* bars */}
      {bars.map(({ letter, height, freq }, i) => {
        const x = startX + i * (barWidth + gap);
        const y = baselineY - height;
        const isE = letter === "E";
        return (
          <g key={letter}>
            <rect
              x={x}
              y={y}
              width={barWidth}
              height={height}
              fill={isE ? "#8a6826" : "#272420"}
              stroke={isE ? "#c4973a" : "#3a3730"}
              strokeWidth="1"
            />
            {/* frequency label above bar */}
            <text
              x={x + barWidth / 2}
              y={y - 5}
              textAnchor="middle"
              fontSize="7"
              fill={isE ? "#c4973a" : "#6b6460"}
              fontFamily="sans-serif"
            >
              {freq}
            </text>
            {/* letter label below baseline */}
            <text
              x={x + barWidth / 2}
              y={baselineY + 12}
              textAnchor="middle"
              fontSize="10"
              fill={isE ? "#c4973a" : "#9b9388"}
              fontFamily="monospace"
            >
              {letter}
            </text>
          </g>
        );
      })}

      {/* annotation */}
      <text x="140" y="163" textAnchor="middle" fontSize="8" fill="#6b6460" fontFamily="sans-serif" letterSpacing="0.5">
        Pattern becomes evidence
      </text>
    </svg>
  );
}
