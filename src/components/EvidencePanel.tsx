interface EvidencePanelProps {
  sources: string[];
  title?: string;
}

export default function EvidencePanel({ sources, title = "Sources" }: EvidencePanelProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <aside
      className="mt-6 pt-4"
      style={{ borderTop: "1px solid var(--color-rule)" }}
      aria-label="Source references"
    >
      <p
        className="text-[0.6rem] tracking-widest uppercase mb-2"
        style={{ color: "var(--color-text-dim)" }}
      >
        {title}
      </p>
      <ul className="space-y-0.5 list-none p-0 m-0">
        {sources.map((source) => (
          <li
            key={source}
            className="text-[0.75rem] leading-snug"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {source}
          </li>
        ))}
      </ul>
    </aside>
  );
}
