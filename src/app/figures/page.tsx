import type { Metadata } from "next";
import Link from "next/link";
import { figures, exhibits } from "@/lib/museum-data";
import FigureCard from "@/components/FigureCard";
import NextRoomCTA from "@/components/NextRoomCTA";
import ExhibitVisual from "@/components/visuals/ExhibitVisual";

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

const figuresHeroImage = "/images/companions/figures-hero.png";

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
      <section className="museum-container pt-20 pb-14 md:pt-28 md:pb-18">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(300px,430px)] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-[0.66rem] tracking-widest uppercase mb-5" style={{ color: "var(--color-accent)" }}>
              People Index
            </p>
            <h1 className="mb-4" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
              People Behind the Ciphers
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              A compact index of the people tied to each room in the museum route.
            </p>
          </div>

          <ExhibitVisual
            imagePath={figuresHeroImage}
            imageAlt="Companion hero image for figures page"
            title="Figures Index"
            caption="Scholars, cryptanalysts, and engineers across the full route."
            imageMinHeight={260}
          />
        </div>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-14 md:py-18">
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {sortedFigures.map((figure) => (
            <div key={figure.name}>
              <p className="mb-3 text-[0.64rem] tracking-widest uppercase" style={{ color: "var(--color-text-dim)" }}>
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
