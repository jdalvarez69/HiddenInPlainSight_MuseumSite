interface StatusBadgeProps {
  status?: "Verified" | "Needs verification";
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  if (!status) return null;

  if (status === "Verified") {
    return (
      <span
        className="inline-flex items-center gap-1 text-[0.6rem] tracking-widest uppercase px-2 py-0.5"
        style={{ color: "var(--color-accent)", border: "1px solid var(--color-accent-dim)" }}
        aria-label="Verified source"
      >
        &#x2713; Verified
      </span>
    );
  }

  return (
    <span
      className="inline-flex items-center text-[0.6rem] tracking-widest uppercase px-2 py-0.5"
      style={{ color: "var(--color-text-dim)", border: "1px solid var(--color-border)" }}
      aria-label="Needs verification"
    >
      Needs verification
    </span>
  );
}
