import type { Metadata } from "next";
import Link from "next/link";
import { artifacts, exhibits } from "@/lib/museum-data";
import ArtifactPanel from "@/components/ArtifactPanel";
import NextRoomCTA from "@/components/NextRoomCTA";
import ExhibitVisual from "@/components/visuals/ExhibitVisual";

export const metadata: Metadata = {
  title: "Artifacts — Hidden in Plain Sight",
  description:
    "Objects, diagrams, machines, and symbols from the history of cryptography — one from each stage of the museum route.",
};

type VisualKey =
  | "scytale"
  | "caesar"
  | "frequency"
  | "vigenere"
  | "enigma"
  | "bombe"
  | "public-private-key"
  | "tls"
  | "e2e"
  | "post-quantum";

const orderBySlug = Object.fromEntries(exhibits.map((exhibit) => [exhibit.slug, exhibit.order]));

function visualForArtifact(title: string, exhibitSlug: string): VisualKey {
  const normalized = title.toLowerCase();

  if (normalized.includes("scytale")) return "scytale";
  if (normalized.includes("caesar") || normalized.includes("wheel")) return "caesar";
  if (normalized.includes("frequency")) return "frequency";
  if (normalized.includes("vigen") || normalized.includes("tabula") || normalized.includes("kasiski")) {
    return "vigenere";
  }
  if (normalized.includes("enigma") || normalized.includes("rotor")) return "enigma";
  if (normalized.includes("bombe")) return "bombe";
  if (normalized.includes("public") || normalized.includes("private") || normalized.includes("rsa")) {
    return "public-private-key";
  }
  if (normalized.includes("tls") || normalized.includes("handshake") || normalized.includes("https") || normalized.includes("lock")) {
    return "tls";
  }
  if (normalized.includes("end-to-end") || normalized.includes("e2e") || normalized.includes("pgp")) {
    return "e2e";
  }

  if (exhibitSlug === "secret-writing") return "scytale";
  if (exhibitSlug === "states-and-power") return "frequency";
  if (exhibitSlug === "machines-of-secrecy") return "enigma";
  if (exhibitSlug === "mathematical-turn") return "public-private-key";
  return "post-quantum";
}

function shortDescription(text: string) {
  const sentence = text.split(". ")[0]?.trim();
  if (!sentence) return text;
  return sentence.endsWith(".") ? sentence : `${sentence}.`;
}

export default function ArtifactsPage() {
  const sortedArtifacts = [...artifacts].sort((a, b) => {
    const aOrder = orderBySlug[a.exhibitSlug] ?? 99;
    const bOrder = orderBySlug[b.exhibitSlug] ?? 99;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.title.localeCompare(b.title);
  });

  return (
    <>
      <section className="museum-container pt-20 pb-12 md:pt-28 md:pb-14">
        <div className="max-w-2xl">
          <p className="text-[0.6rem] tracking-widest uppercase mb-5" style={{ color: "var(--color-accent)" }}>
            Companion Gallery
          </p>
          <h1 className="mb-4" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
            Artifact Collection
          </h1>
          <p className="text-base" style={{ color: "var(--color-text-secondary)" }}>
            A visual catalog of objects and diagrams that carry the five-room story.
          </p>
        </div>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-10 md:py-14">
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3">
          {sortedArtifacts.map((artifact) => {
            const roomOrder = String(orderBySlug[artifact.exhibitSlug] ?? 0).padStart(2, "0");

            return (
              <div key={artifact.title}>
                <p className="mb-2 text-[0.58rem] tracking-widest uppercase" style={{ color: "var(--color-text-dim)" }}>
                  Room {roomOrder}
                </p>
                <ArtifactPanel
                  title={artifact.title}
                  era={artifact.era}
                  description={shortDescription(artifact.description)}
                  status={artifact.status}
                  compact
                  visual={<ExhibitVisual visualKey={visualForArtifact(artifact.title, artifact.exhibitSlug)} />}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="museum-container pb-16 max-w-2xl">
        <NextRoomCTA
          href="/concepts"
          label="Continue"
          title="Concept Decoder"
          description="Read the key terms that make the objects legible."
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
