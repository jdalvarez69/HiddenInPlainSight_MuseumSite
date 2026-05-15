import { ReactNode } from "react";

interface CuratorNoteProps {
  children: ReactNode;
  label?: string;
}

export default function CuratorNote({
  children,
  label = "Curator's Note",
}: CuratorNoteProps) {
  return (
    <aside
      className="my-6 py-4 px-5"
      style={{
        borderLeft: "2px solid var(--color-accent-dim)",
        backgroundColor: "var(--color-bg-surface)",
      }}
      role="note"
    >
      <p
        className="text-[0.6rem] tracking-widest uppercase mb-2"
        style={{ color: "var(--color-accent-dim)", fontFamily: "var(--font-serif)" }}
      >
        {label}
      </p>
      <div
        className="text-sm leading-relaxed"
        style={{ color: "var(--color-text-secondary)" }}
      >
        {children}
      </div>
    </aside>
  );
}
