import Link from "next/link";

interface NextRoomCTAProps {
  href: string;
  label?: string;
  title: string;
  description?: string;
}

export default function NextRoomCTA({
  href,
  label = "Continue to next room",
  title,
  description,
}: NextRoomCTAProps) {
  return (
    <nav aria-label={label} className="mt-16">
      <div
        className="py-1"
        style={{ borderTop: "1px solid var(--color-rule)" }}
      />
      <Link
        href={href}
        className="group flex items-start justify-between gap-6 pt-6 pb-2"
        aria-label={`${label}: ${title}`}
      >
        <div className="flex-1">
          <p
            className="text-[0.6rem] tracking-widest uppercase mb-1"
            style={{ color: "var(--color-text-dim)" }}
          >
            {label}
          </p>
          <h3
            className="text-xl leading-snug mb-1 transition-colors group-hover:text-[var(--color-accent)]"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
          >
            {title}
          </h3>
          {description && (
            <p
              className="text-sm leading-relaxed line-clamp-2"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {description}
            </p>
          )}
        </div>
        <span
          className="text-2xl mt-1 transition-transform group-hover:translate-x-1"
          style={{ color: "var(--color-accent)" }}
          aria-hidden="true"
        >
          &rarr;
        </span>
      </Link>
    </nav>
  );
}
