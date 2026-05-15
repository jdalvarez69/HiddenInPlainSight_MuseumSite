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
  imagePath?: string;
  imageAlt?: string;
  imageMinHeight?: number;
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

const fallbackCaptionByKey: Record<VisualKey, string> = {
  scytale: "Scytale transposition model showing message alignment on a matched rod.",
  caesar: "Caesar shift wheel showing fixed substitution offset across the alphabet.",
  frequency: "Letter-frequency profile used to infer plaintext structure from cipher text.",
  vigenere: "Vigenere tabula recta used to apply polyalphabetic substitution by keyword.",
  enigma: "Rotor permutation pathway showing how Enigma changed substitution each keypress.",
  bombe: "Bombe search abstraction for testing Enigma key-space constraints at scale.",
  "public-private-key": "Asymmetric encryption model linking public encryption to private decryption.",
  tls: "TLS handshake flow establishing verified identity and encrypted session keys.",
  e2e: "End-to-end message path where only sender and recipient can decrypt content.",
  "post-quantum": "Post-quantum migration concept for replacing vulnerable classical key systems.",
};

function resolveLocalAssetPath(path: string) {
  if (!path.startsWith("/")) return path;
  const basePath = process.env.GITHUB_PAGES === "true" ? "/HiddenInPlainSight_MuseumSite" : "";
  return `${basePath}${path}`;
}

export default function ExhibitVisual({
  slug,
  visualKey,
  title,
  caption,
  imagePath,
  imageAlt,
  imageMinHeight = 220,
}: ExhibitVisualProps) {
  if (imagePath) {
    const resolvedImagePath = resolveLocalAssetPath(imagePath);

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
              className="text-[0.62rem] tracking-widest uppercase"
              style={{ color: "var(--color-text-dim)" }}
            >
              {title}
            </p>
          </div>
        )}

        <div
          className="relative"
          style={{
            minHeight: `${imageMinHeight}px`,
            borderTop: title ? "1px solid var(--color-rule)" : undefined,
            borderBottom: caption ? "1px solid var(--color-rule)" : undefined,
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(26, 23, 20, 0.16), rgba(26, 23, 20, 0.16)), url(${resolvedImagePath})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            role="img"
            aria-label={imageAlt ?? title ?? "Curated exhibit image"}
          />
        </div>

        {caption && (
          <figcaption
            className="px-5 py-3 text-[0.78rem] leading-relaxed italic"
            style={{
              color: "var(--color-text-secondary)",
            }}
          >
            {caption}
          </figcaption>
        )}
      </figure>
    );
  }

  // Resolve which visual to show
  const resolvedKey: VisualKey | null =
    visualKey ?? (slug ? slugVisualMap[slug] ?? null : null);

  if (!resolvedKey) return null;

  const visual = renderVisual(resolvedKey);
  const resolvedCaption = caption ?? fallbackCaptionByKey[resolvedKey];

  // If no title/caption wrapper requested, return the bare visual
  if (!title && !caption) {
    return <span aria-hidden="true">{visual}</span>;
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
        aria-hidden="true"
      >
        {visual}
      </div>

      {resolvedCaption && (
        <figcaption
          className="px-5 py-3 text-[0.7rem] leading-relaxed italic"
          style={{
            color: "var(--color-text-secondary)",
            borderTop: "1px solid var(--color-rule)",
          }}
        >
          {resolvedCaption}
        </figcaption>
      )}
    </figure>
  );
}
