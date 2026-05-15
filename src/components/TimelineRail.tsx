import StatusBadge from "@/components/StatusBadge";

interface TimelineEventItem {
  era: string;
  title: string;
  description: string;
  status?: "Verified" | "Needs verification";
  sources?: string[];
}

interface TimelineRailProps {
  events: TimelineEventItem[];
}

export default function TimelineRail({ events }: TimelineRailProps) {
  return (
    <ol
      className="relative list-none p-0 m-0"
      style={{ borderLeft: "1px solid var(--color-rule)" }}
      aria-label="Cryptography timeline"
    >
      {events.map((event, index) => (
        <li key={`${event.era}-${index}`} className="pl-6 pb-10 relative">
          {/* Timeline dot */}
          <span
            className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full"
            style={{ backgroundColor: "var(--color-accent-dim)" }}
            aria-hidden="true"
          />

          {/* Era label */}
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-1"
            style={{ color: "var(--color-accent)" }}
          >
            {event.era}
          </p>

          {/* Title and badge */}
          <div className="flex flex-wrap items-start gap-2 mb-2">
            <h4
              className="text-base leading-snug"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
            >
              {event.title}
            </h4>
            <StatusBadge status={event.status} />
          </div>

          {/* Description */}
          <p
            className="text-sm leading-relaxed mb-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {event.description}
          </p>

          {/* Sources — minimal inline, not a full EvidencePanel */}
          {event.sources && event.sources.length > 0 && (
            <p
              className="text-[0.65rem]"
              style={{ color: "var(--color-text-dim)" }}
            >
              {event.sources.join(" · ")}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
