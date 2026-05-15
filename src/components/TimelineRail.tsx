interface TimelineEventItem {
  era: string;
  title: string;
  description: string;
  status?: "Verified" | "Needs verification";
  sources?: string[];
}

interface TimelineRailProps {
  events: TimelineEventItem[];
  showSources?: boolean;
}

export default function TimelineRail({
  events,
  showSources = false,
}: TimelineRailProps) {
  return (
    <ol
      className="relative list-none p-0 m-0"
      style={{ borderLeft: "1px solid var(--color-rule)" }}
      aria-label="Cryptography timeline"
    >
      {events.map((event, index) => {
        const previousEra = index > 0 ? events[index - 1].era : null;
        const showEraDivider = previousEra !== event.era;

        return (
          <li key={`${event.era}-${index}`} className="pl-6 pb-8 relative">
            {showEraDivider && (
              <p
                className="text-[0.64rem] tracking-widest uppercase mb-3"
                style={{ color: "var(--color-accent)" }}
              >
                {event.era}
              </p>
            )}

            <span
              className="absolute left-0 top-1.5 -translate-x-1/2 w-2 h-2 rounded-full"
              style={{ backgroundColor: "var(--color-accent-dim)" }}
              aria-hidden="true"
            />

            <h4
              className="text-lg leading-snug mb-1"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
            >
              {event.title}
            </h4>

            <p
              className="text-base leading-relaxed"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {event.description}
            </p>

            {showSources && event.sources && event.sources.length > 0 && (
              <p
                className="text-[0.65rem] mt-2"
                style={{ color: "var(--color-text-dim)" }}
              >
                {event.sources.join(" · ")}
              </p>
            )}
          </li>
        );
      })}
    </ol>
  );
}
