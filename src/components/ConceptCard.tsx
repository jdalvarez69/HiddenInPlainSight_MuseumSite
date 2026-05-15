import StatusBadge from "@/components/StatusBadge";
import EvidencePanel from "@/components/EvidencePanel";

interface ConceptCardProps {
  term: string;
  shortDefinition: string;
  plainLanguageExplanation: string;
  status?: "Verified" | "Needs verification";
  sources?: string[];
}

export default function ConceptCard({
  term,
  shortDefinition,
  plainLanguageExplanation,
  status,
  sources,
}: ConceptCardProps) {
  return (
    <article
      className="p-5"
      style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      {/* Term and badge */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h4
          className="text-base leading-snug"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
        >
          {term}
        </h4>
        <StatusBadge status={status} />
      </div>

      {/* Short definition */}
      <p
        className="text-[0.7rem] tracking-wide uppercase mb-3"
        style={{ color: "var(--color-accent)" }}
      >
        {shortDefinition}
      </p>

      {/* Plain-language explanation */}
      <p
        className="text-sm leading-relaxed line-clamp-5"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {plainLanguageExplanation}
      </p>

      <EvidencePanel sources={sources ?? []} />
    </article>
  );
}
