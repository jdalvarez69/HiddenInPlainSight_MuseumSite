import Link from "next/link";
import { siteMeta, exhibits } from "@/lib/museum-data";
import ExhibitCard from "@/components/ExhibitCard";
import ExhibitVisual from "@/components/visuals/ExhibitVisual";

const hooksBySlug: Record<string, string> = {
  "secret-writing": "Before mathematics, secrecy depended on who held the key.",
  "states-and-power": "Language patterns turned codebreaking into statecraft.",
  "machines-of-secrecy": "Machine complexity created machine-scale vulnerabilities.",
  "mathematical-turn": "Proof replaced obscurity as the standard for security.",
  "invisible-shield": "Encryption became invisible infrastructure for daily life.",
};

const motifBySlug: Record<string, string> = {
  "secret-writing": "A->D",
  "states-and-power": "E/T/A",
  "machines-of-secrecy": "R-III",
  "mathematical-turn": "N=p*q",
  "invisible-shield": "TLS",
};

const thesisLine =
  "Cryptography began as the art of hiding messages and became the science of protecting trust.";

const homeHeroImage = "/images/home/home-hero-collage.png";

export default function Home() {
  return (
    <>
      <section className="museum-container pt-24 pb-18 md:pt-32 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(360px,520px)] lg:items-start">
          <div className="max-w-2xl">
            <p
              className="text-[0.65rem] tracking-widest uppercase mb-5"
              style={{ color: "var(--color-accent)" }}
            >
              Museum Entrance
            </p>

            <h1
              className="mb-3"
              style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}
            >
              {siteMeta.title}
            </h1>

            <p
              className="text-[0.78rem] tracking-[0.16em] uppercase mb-7"
              style={{ color: "var(--color-text-dim)" }}
            >
              {siteMeta.subtitle}
            </p>

            <p
              className="text-xl leading-relaxed max-w-[58ch]"
              style={{ color: "var(--color-text-secondary)" }}
            >
              {thesisLine}
            </p>

            <div className="flex flex-wrap gap-3 mt-10">
              <Link
                href="/exhibits/secret-writing"
                className="inline-block px-7 py-3 text-[0.68rem] tracking-widest uppercase transition-colors"
                style={{
                  border: "1px solid var(--color-accent)",
                  color: "var(--color-accent)",
                }}
              >
                Begin the Tour
              </Link>
              <Link
                href="/process"
                className="inline-block px-7 py-3 text-[0.68rem] tracking-widest uppercase transition-colors"
                style={{
                  border: "1px solid var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
              >
                View the Process
              </Link>
            </div>
          </div>

          <div aria-label="Entrance hero image">
            <ExhibitVisual
              imagePath={homeHeroImage}
              imageAlt="Museum entrance collage connecting ancient ciphers to modern encryption"
              title="Entrance Collage"
              caption="A curated visual bridge from early secrecy methods to modern trust infrastructure."
              imageMinHeight={320}
            />
          </div>
        </div>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-14 md:py-18">
        <header className="mb-8">
          <p
            className="text-[0.66rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            Guided Route
          </p>
        </header>

        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {exhibits.map((exhibit) => (
            <ExhibitCard
              key={exhibit.slug}
              order={exhibit.order}
              title={exhibit.title}
              subtitle={exhibit.subtitle}
              href={`/exhibits/${exhibit.slug}`}
              hook={hooksBySlug[exhibit.slug]}
              motif={motifBySlug[exhibit.slug]}
              compact
            />
          ))}
        </div>
      </section>
    </>
  );
}
