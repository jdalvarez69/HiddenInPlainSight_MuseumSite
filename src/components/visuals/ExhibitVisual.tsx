import ScytaleVisual from "@/components/visuals/ScytaleVisual";
import CaesarWheelVisual from "@/components/visuals/CaesarWheelVisual";
import FrequencyAnalysisVisual from "@/components/visuals/FrequencyAnalysisVisual";
import VigenereGridVisual from "@/components/visuals/VigenereGridVisual";
import EnigmaRotorVisual from "@/components/visuals/EnigmaRotorVisual";
import BombeVisual from "@/components/visuals/BombeVisual";
import PublicPrivateKeyVisual from "@/components/visuals/PublicPrivateKeyVisual";
import TLSHandshakeVisual from "@/components/visuals/TLSHandshakeVisual";
import EndToEndVisual from "@/components/visuals/EndToEndVisual";
import PostQuantumVisual from "@/components/visuals/PostQuantumVisual";

// Supported exhibit slugs
type ExhibitSlug =
  | "secret-writing"
  | "states-and-power"
  | "machines-of-secrecy"
  | "mathematical-turn"
  | "invisible-shield";

// Supported individual visual keys
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

interface ExhibitVisualProps {
  slug?: ExhibitSlug;
  visualKey?: VisualKey;
  title?: string;
  caption?: string;
}

// Default visual per exhibit slug
const slugVisualMap: Record<ExhibitSlug, VisualKey> = {
  "secret-writing": "scytale",
  "states-and-power": "frequency",
  "machines-of-secrecy": "enigma",
  "mathematical-turn": "public-private-key",
  "invisible-shield": "tls",
};

function renderVisual(key: VisualKey) {
  switch (key) {
    case "scytale":
      return <ScytaleVisual />;
    case "caesar":
      return <CaesarWheelVisual />;
    case "frequency":
      return <FrequencyAnalysisVisual />;
    case "vigenere":
      return <VigenereGridVisual />;
    case "enigma":
      return <EnigmaRotorVisual />;
    case "bombe":
      return <BombeVisual />;
    case "public-private-key":
      return <PublicPrivateKeyVisual />;
    case "tls":
      return <TLSHandshakeVisual />;
    case "e2e":
      return <EndToEndVisual />;
    case "post-quantum":
      return <PostQuantumVisual />;
  }
}

export default function ExhibitVisual({
  slug,
  visualKey,
  title,
  caption,
}: ExhibitVisualProps) {
  // Resolve which visual to show
  const resolvedKey: VisualKey | null =
    visualKey ?? (slug ? slugVisualMap[slug] ?? null : null);

  if (!resolvedKey) return null;

  const visual = renderVisual(resolvedKey);

  // If no title/caption wrapper requested, return the bare visual
  if (!title && !caption) {
    return <>{visual}</>;
  }

  return (
    <figure
      className="w-full overflow-hidden"
      style={{
        backgroundColor: "var(--color-bg-raised)",
        border: "1px solid var(--color-border)",
        borderTop: "2px solid var(--color-accent-dim)",
      }}
    >
      {title && (
        <div className="px-5 pt-4 pb-1">
          <p
            className="text-[0.6rem] tracking-widest uppercase"
            style={{ color: "var(--color-text-dim)" }}
          >
            {title}
          </p>
        </div>
      )}

      <div
        className="flex items-center justify-center px-4 py-6"
        style={{ minHeight: "160px" }}
      >
        {visual}
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
