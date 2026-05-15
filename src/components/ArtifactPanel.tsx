import StatusBadge from "@/components/StatusBadge";
import EvidencePanel from "@/components/EvidencePanel";

interface ArtifactPanelProps {
  title: string;
  era?: string;
  description: string;
  visualHint?: string;
  status?: "Verified" | "Needs verification";
  sources?: string[];
}

export default function ArtifactPanel({
  title,
  era,
  description,
  status,
  sources,
}: ArtifactPanelProps) {
  return (
    <article
      className="p-6"
      style={{
        backgroundColor: "var(--color-bg-raised)",
        border: "1px solid var(--color-border)",
        borderLeft: "3px solid var(--color-accent-dim)",
      }}
    >
      {/* Object label header */}
      <header className="mb-4">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <h4
            className="text-base leading-snug"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            {title}
          </h4>
          <StatusBadge status={status} />
        </div>
        {era && (
          <p
            className="text-[0.65rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            {era}
          </p>
        )}
      </header>

      {/* Description */}
      <p
        className="text-sm leading-relaxed mb-4 line-clamp-4"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>

      <EvidencePanel sources={sources ?? []} />
    </article>
  );
}
