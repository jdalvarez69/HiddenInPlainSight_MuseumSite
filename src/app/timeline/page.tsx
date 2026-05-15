import type { Metadata } from "next";
import { timelineEvents } from "@/lib/museum-data";
import TimelineRail from "@/components/TimelineRail";
import NextRoomCTA from "@/components/NextRoomCTA";
import ExhibitVisual from "@/components/visuals/ExhibitVisual";

export const metadata: Metadata = {
  title: "Timeline — Hidden in Plain Sight",
  description:
    "A chronological companion path through the history of cryptography, from antiquity to post-quantum standards.",
};

const timelineHeroImage = "/images/companions/timeline-hero.png";

export default function TimelinePage() {
  return (
    <>
      <section className="museum-container pt-20 pb-14 md:pt-28 md:pb-18">
        <div className="grid gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(300px,430px)] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-[0.66rem] tracking-widest uppercase mb-5" style={{ color: "var(--color-accent)" }}>
              Chronology
            </p>
            <h1 className="mb-4" style={{ fontFamily: "var(--font-serif)", color: "var(--color-text)" }}>
              Timeline of Secrecy
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              A compact historical spine from ancient methods to post-quantum migration.
            </p>
          </div>

          <ExhibitVisual
            imagePath={timelineHeroImage}
            imageAlt="Companion hero image for timeline page"
            title="Timeline Overview"
            caption="From early manual methods to modern standards and migration phases."
            imageMinHeight={260}
          />
        </div>
      </section>

      <div className="museum-container" style={{ borderTop: "1px solid var(--color-rule)" }} />

      <section className="museum-container py-14">
        <p className="mb-7 text-[0.66rem] tracking-widest uppercase" style={{ color: "var(--color-text-dim)" }}>
          {timelineEvents.length} events
        </p>

        <div className="max-w-2xl">
          <TimelineRail events={timelineEvents} />
        </div>

        <div className="max-w-2xl mt-12">
          <p
            className="text-[0.66rem] tracking-widest uppercase mb-4"
            style={{ color: "var(--color-text-dim)" }}
          >
            Post-Quantum Horizon
          </p>
          <ExhibitVisual
            visualKey="post-quantum"
            title="Post-Quantum Transition"
            caption="NIST finalized initial post-quantum standards in 2024, beginning migration planning."
          />
        </div>
      </section>

      <section className="museum-container pb-16 max-w-2xl">
        <NextRoomCTA
          href="/artifacts"
          label="Continue"
          title="Artifact Collection"
          description="See how this chronology appears as objects and diagrams."
        />
      </section>
    </>
  );
}
