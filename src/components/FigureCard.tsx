import StatusBadge from "@/components/StatusBadge";
import EvidencePanel from "@/components/EvidencePanel";

interface FigureCardProps {
  name: string;
  role: string;
  description: string;
  status?: "Verified" | "Needs verification";
  sources?: string[];
}

export default function FigureCard({
  name,
  role,
  description,
  status,
  sources,
}: FigureCardProps) {
  return (
    <article
      className="p-5"
      style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "1px solid var(--color-border)",
      }}
    >
      {/* Name and badge */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-0.5">
        <h4
          className="text-base leading-snug"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
        >
          {name}
        </h4>
        <StatusBadge status={status} />
      </div>

      {/* Role */}
      <p
        className="text-[0.65rem] tracking-widest uppercase mb-3"
        style={{ color: "var(--color-text-dim)" }}
      >
        {role}
      </p>

      {/* Description */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {description}
      </p>

      <EvidencePanel sources={sources ?? []} />
    </article>
  );
}
