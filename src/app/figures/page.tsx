import type { Metadata } from "next";
import Link from "next/link";
import { figures, exhibits } from "@/lib/museum-data";
import FigureCard from "@/components/FigureCard";
import NextRoomCTA from "@/components/NextRoomCTA";

export const metadata: Metadata = {
  title: "People Behind the Ciphers — Hidden in Plain Sight",
  description:
    "Key figures in the history of cryptography — soldiers, scholars, mathematicians, engineers, and privacy advocates.",
};

const roomBySlug = Object.fromEntries(
  exhibits.map((exhibit) => [
    exhibit.slug,
    {
      order: exhibit.order,
      label: `Room ${String(exhibit.order).padStart(2, "0")}`,
    },
  ])
);

function shortDescription(text: string) {
  const sentence = text.split(". ")[0]?.trim();
  if (!sentence) return text;
  return sentence.endsWith(".") ? sentence : `${sentence}.`;
}

export default function FiguresPage() {
  const sortedFigures = [...figures].sort((a, b) => {
    const aOrder = roomBySlug[a.exhibitSlug]?.order ?? 99;
    const bOrder = roomBySlug[b.exhibitSlug]?.order ?? 99;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <section className="museum-container pt-20 pb-12 md:pt-28 md:pb-14">
        <div className="max-w-2xl">
          <p className="text-[0.6rem] tracking-widest uppercase mb-5" style={{ color: "var(--color-accent)" }}>
            People Index
          </p>
          <h1 className="mb-4" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
            People Behind the Ciphers
          </h1>
          <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>
            A compact index of the people tied to each room in the museum route.
          </p>
        </div>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-10 md:py-14">
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {sortedFigures.map((figure) => (
            <div key={figure.name}>
              <p className="mb-2 text-[0.58rem] tracking-widest uppercase" style={{ color: "var(--color-text-dim)" }}>
                {roomBySlug[figure.exhibitSlug]?.label ?? "Room --"}
              </p>
              <FigureCard
                name={figure.name}
                role={figure.role}
                description={shortDescription(figure.description)}
                status={figure.status}
                compact
              />
            </div>
          ))}
        </div>
      </section>

      <section className="museum-container pb-16 max-w-2xl">
        <NextRoomCTA
          href="/timeline"
          label="Continue"
          title="Timeline of Secrecy"
          description="Place each figure inside the longer chronology."
        />

        <p className="mt-8 text-sm" style={{ color: "var(--color-text-dim)" }}>
          Or return to the
          <Link
            href="/exhibits"
            className="ml-1 underline underline-offset-2"
            style={{ color: "var(--color-text-secondary)" }}
          >
            guided route
          </Link>
          .
        </p>
      </section>
    </>
  );
}
