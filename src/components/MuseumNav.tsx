import Link from "next/link";
import { mainNav, siteMeta } from "@/lib/museum-data";

export default function MuseumNav() {
  return (
    <header className="border-b border-[var(--color-border)]">
      <div className="museum-container flex flex-wrap items-center justify-between gap-4 py-4">

        {/* Museum identity */}
        <Link
          href="/"
          className="group flex flex-col gap-0.5"
          aria-label={`${siteMeta.title} — Home`}
        >
          <span
            className="text-base font-semibold tracking-tight leading-tight text-[var(--color-text)] group-hover:text-[var(--color-accent)] transition-colors"
            style={{ fontFamily: "var(--font-serif)" }}
          >
            {siteMeta.title}
          </span>
          <span className="text-[0.65rem] tracking-widest uppercase text-secondary leading-tight">
            {siteMeta.subtitle}
          </span>
        </Link>

        {/* Primary navigation */}
        <nav aria-label="Museum navigation">
          <ul className="flex flex-wrap items-center gap-x-1 list-none m-0 p-0">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-[0.65rem] tracking-widest uppercase text-secondary hover:text-[var(--color-text)] transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      </div>
    </header>
  );
}
