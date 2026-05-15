import type { ReactNode } from "react";
import Link from "next/link";

interface ExhibitCardProps {
  order: number;
  title: string;
  subtitle: string;
  intro?: string;
  href: string;
  visual?: ReactNode;
  hook?: string;
  motif?: string;
  showIntro?: boolean;
  compact?: boolean;
}

export default function ExhibitCard({
  order,
  title,
  subtitle,
  intro,
  href,
  visual,
  hook,
  motif,
  showIntro = true,
  compact = false,
}: ExhibitCardProps) {
  if (compact) {
    return (
      <Link
        href={href}
        className="group block p-6 transition-colors"
        style={{
          backgroundColor: "var(--color-bg-surface)",
          border: "1px solid var(--color-border)",
        }}
        aria-label={`Exhibit ${order}: ${title}`}
      >
        <div className="flex items-start justify-between gap-4 mb-3">
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            Room {String(order).padStart(2, "0")}
          </p>
          {motif && (
            <span
              className="text-[0.6rem] tracking-widest uppercase px-2 py-1"
              style={{
                color: "var(--color-accent)",
                border: "1px solid var(--color-border)",
              }}
              aria-hidden="true"
            >
              {motif}
            </span>
          )}
        </div>

        <h3
          className="text-xl mb-1 leading-snug transition-colors group-hover:text-[var(--color-accent)]"
          style={{
            fontFamily: "var(--font-serif)",
            color: "var(--color-text)",
          }}
        >
          {title}
        </h3>

        <p
          className="text-[0.68rem] tracking-wider uppercase mb-3"
          style={{ color: "var(--color-text-dim)" }}
        >
          {subtitle}
        </p>

        {hook && (
          <p
            className="text-sm leading-relaxed line-clamp-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {hook}
          </p>
        )}

        <p
          className="mt-4 text-[0.65rem] tracking-widest uppercase transition-colors"
          style={{ color: "var(--color-text-dim)" }}
          aria-hidden="true"
        >
          Enter room &rarr;
        </p>
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group block p-6 transition-colors"
      style={{
        backgroundColor: "var(--color-bg-surface)",
        border: "1px solid var(--color-border)",
      }}
      aria-label={`Exhibit ${order}: ${title}`}
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

      {/* Room number */}
      <p
        className="text-[0.6rem] tracking-widest uppercase mb-3"
        style={{ color: "var(--color-text-dim)" }}
      >
        Room {String(order).padStart(2, "0")}
      </p>

      {/* Title */}
      <h3
        className="text-xl mb-1 leading-snug transition-colors group-hover:text-[var(--color-accent)]"
        style={{
          fontFamily: "var(--font-serif)",
          color: "var(--color-text)",
        }}
      >
        {title}
      </h3>

      {/* Subtitle */}
      <p
        className="text-[0.7rem] tracking-wider uppercase mb-4"
        style={{ color: "var(--color-text-dim)" }}
      >
        {subtitle}
      </p>

      {hook && (
        <p
          className="text-sm leading-relaxed mb-3 line-clamp-2"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {hook}
        </p>
      )}

      {showIntro && intro && (
        <p
          className="text-sm leading-relaxed line-clamp-2"
          style={{ color: "var(--color-text-secondary)" }}
        >
          {intro}
        </p>
      )}

      {/* Enter indicator */}
      <p
        className="mt-4 text-[0.65rem] tracking-widest uppercase transition-colors"
        style={{ color: "var(--color-text-dim)" }}
        aria-hidden="true"
      >
        Enter room &rarr;
      </p>
    </Link>
  );
}
