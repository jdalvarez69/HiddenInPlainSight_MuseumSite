import type { ReactNode } from "react";

interface VisualFrameProps {
  title: string;
  caption?: string;
  children: ReactNode;
}

export default function VisualFrame({ title, caption, children }: VisualFrameProps) {
  return (
    <figure
      className="w-full overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-raised)",
        border: "1px solid var(--color-border)",
        borderTop: "2px solid var(--color-accent-dim)",
      }}
    >
      <div className="px-5 pt-4 pb-1">
        <p
          className="text-[0.6rem] tracking-widest uppercase"
          style={{ color: "var(--color-text-dim)" }}
        >
          {title}
        </p>
      </div>

      <div
        className="flex items-center justify-center px-4 py-6"
        style={{ minHeight: "160px" }}
      >
        {children}
      </div>

      {caption && (
        <figcaption
          className="px-5 py-3 text-[0.7rem] leading-relaxed italic"
          style={{
            color: "var(--color-text-secondary)",
            borderTop: "1px solid var(--color-rule)",
          }}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
