import StatusBadge from "@/components/StatusBadge";
import EvidencePanel from "@/components/EvidencePanel";

interface ConceptCardProps {
  term: string;
  shortDefinition: string;
  plainLanguageExplanation: string;
  status?: "Verified" | "Needs verification";
  sources?: string[];
  compact?: boolean;
  marker?: string;
  showSources?: boolean;
}

export default function ConceptCard({
  term,
  shortDefinition,
  plainLanguageExplanation,
  status,
  sources,
  compact = false,
  marker,
  showSources = false,
}: ConceptCardProps) {
  return (
    <article
      className="p-5"
      style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <div className="flex items-start gap-2">
          {marker && (
            <span
              className="text-[0.58rem] tracking-widest uppercase mt-1 px-1.5 py-0.5"
              style={{
                color: "var(--color-accent)",
                border: "1px solid var(--color-border)",
              }}
              aria-hidden="true"
            >
              {marker}
            </span>
          )}
          <h4
            className="text-base leading-snug"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            {term}
          </h4>
        </div>
        <StatusBadge status={status} />
      </div>

      <p
        className="text-[0.67rem] tracking-wide uppercase mb-2"
        style={{ color: "var(--color-accent)" }}
      >
        {shortDefinition}
      </p>

      <p
        className={`text-sm leading-relaxed ${compact ? "line-clamp-3" : "line-clamp-5"}`}
        style={{ color: "var(--color-text-secondary)" }}
      >
        {plainLanguageExplanation}
      </p>

      {showSources && <EvidencePanel sources={sources ?? []} />}
    </article>
  );
}
