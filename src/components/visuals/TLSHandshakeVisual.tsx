// TLS handshake sequence. Client (browser) and Server exchange messages
// to establish a shared session key before any content is transmitted.

const steps = [
  { dir: "right", label: "1. ClientHello", y: 68 },
  { dir: "left", label: "2. ServerHello + Certificate", y: 96 },
  { dir: "right", label: "3. Key Exchange", y: 124 },
  { dir: "left", label: "4. Finished", y: 152 },
];

const clientX = 58;
const serverX = 282;
const arrowPad = 6;

export default function TLSHandshakeVisual() {
  return (
    <svg
      viewBox="0 0 340 195"
      width="100%"
      style={{ maxWidth: "340px", height: "auto" }}
      aria-hidden="true"
    >
      {/* client box */}
      <rect x="10" y="22" width="96" height="34" rx="2" fill="#211f1b" stroke="#3a3730" strokeWidth="1" />
      <text x="58" y="42" textAnchor="middle" fontSize="9" fill="#9b9388" fontFamily="sans-serif">Client (Browser)</text>

      {/* server box */}
      <rect x="234" y="22" width="96" height="34" rx="2" fill="#211f1b" stroke="#3a3730" strokeWidth="1" />
      <text x="282" y="42" textAnchor="middle" fontSize="9" fill="#9b9388" fontFamily="sans-serif">Server</text>

      {/* vertical timeline lines */}
      <line x1={clientX} y1="56" x2={clientX} y2="160" stroke="#2e2b26" strokeWidth="1" strokeDasharray="3 3" />
      <line x1={serverX} y1="56" x2={serverX} y2="160" stroke="#2e2b26" strokeWidth="1" strokeDasharray="3 3" />

      {/* handshake arrows */}
      {steps.map(({ dir, label, y }) => {
        const isRight = dir === "right";
        const x1 = isRight ? clientX + arrowPad : serverX - arrowPad;
        const x2 = isRight ? serverX - arrowPad : clientX + arrowPad;
        const arrowX = isRight ? x2 : x2;
        const arrowDir = isRight ? 1 : -1;
        const isKey = label.includes("Key") || label.includes("Finished");
        const color = isKey ? "#8a6826" : "#6b6460";

        return (
          <g key={label}>
            <line x1={x1} y1={y} x2={x2} y2={y} stroke={color} strokeWidth="1" />
            <polygon
              points={`${arrowX - arrowDir * 8},${y - 4} ${arrowX - arrowDir * 8},${y + 4} ${arrowX},${y}`}
              fill={color}
            />
            <text
              x={(clientX + serverX) / 2}
              y={y - 5}
              textAnchor="middle"
              fontSize="7.5"
              fill={isKey ? "#9b9388" : "#6b6460"}
              fontFamily="sans-serif"
            >
              {label}
            </text>
          </g>
        );
      })}

      {/* session key established label */}
      <rect x="108" y="165" width="124" height="18" rx="2" fill="#272420" stroke="#8a6826" strokeWidth="1" />
      <text x="170" y="178" textAnchor="middle" fontSize="7.5" fill="#c4973a" fontFamily="sans-serif" letterSpacing="0.4">
        Session key established
      </text>
    </svg>
  );
}
