import StatusBadge from "@/components/StatusBadge";
import EvidencePanel from "@/components/EvidencePanel";

interface FigureCardProps {
  name: string;
  role: string;
  description: string;
  status?: "Verified" | "Needs verification";
  sources?: string[];
  compact?: boolean;
  showSources?: boolean;
}

function initialsFromName(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function FigureCard({
  name,
  role,
  description,
  status,
  sources,
  compact = false,
  showSources = false,
}: FigureCardProps) {
  const initials = initialsFromName(name);

  return (
    <article
      className="p-5"
      style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      <div className="flex items-start justify-between gap-2 mb-3">
        <span
          className="inline-flex items-center justify-center w-9 h-9 text-[0.65rem] tracking-widest uppercase"
          style={{
            color: "var(--color-accent)",
            border: "1px solid var(--color-border)",
            backgroundColor: "var(--color-bg-raised)",
          }}
          aria-hidden="true"
        >
          {initials}
        </span>
        <StatusBadge status={status} />
      </div>

      <h4
        className="text-base leading-snug"
        style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
      >
        {name}
      </h4>

      <p
        className="text-[0.62rem] tracking-widest uppercase mt-1 mb-3"
        style={{ color: "var(--color-text-dim)" }}
      >
        {role}
      </p>

      <p
        className={`text-sm leading-relaxed ${compact ? "line-clamp-3" : "line-clamp-4"}`}
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>

      {showSources && <EvidencePanel sources={sources ?? []} />}
    </article>
  );
}
