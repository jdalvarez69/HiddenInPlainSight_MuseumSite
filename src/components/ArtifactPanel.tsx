import type { ReactNode } from "react";
import StatusBadge from "@/components/StatusBadge";
import EvidencePanel from "@/components/EvidencePanel";

interface ArtifactPanelProps {
  title: string;
  era?: string;
  description: string;
  visualHint?: string;
  status?: "Verified" | "Needs verification";
  sources?: string[];
  visual?: ReactNode;
  compact?: boolean;
  showSources?: boolean;
}

export default function ArtifactPanel({
  title,
  era,
  description,
  status,
  sources,
  visual,
  compact = false,
  showSources = false,
}: ArtifactPanelProps) {
  return (
    <article
      className="p-5"
      style={{
        backgroundColor: "var(--color-bg-raised)",
        border: "1px solid var(--color-border)",
        borderLeft: "3px solid var(--color-accent-dim)",
      }}
    >
      {visual && (
        <div
          className="mb-4"
          style={{ border: "1px solid var(--color-border)" }}
          aria-hidden="true"
        >
          {visual}
        </div>
      )}

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

      <p
        className={`text-sm leading-relaxed mb-3 ${compact ? "line-clamp-3" : "line-clamp-4"}`}
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>

      {showSources && <EvidencePanel sources={sources ?? []} />}
    </article>
  );
}
