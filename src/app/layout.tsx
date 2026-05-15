import type { Metadata } from "next";
import "./globals.css";
import MuseumNav from "@/components/MuseumNav";

export const metadata: Metadata = {
  title: "Hidden in Plain Sight",
  description:
    "A museum-style website about the history of cryptography and the evolution of secrecy into modern digital trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col antialiased">
        <MuseumNav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[var(--color-rule)] py-8 mt-16">
          <div className="museum-container">
            <p className="text-sm text-center text-secondary tracking-wide">
              Hidden in Plain Sight &mdash; A Museum of Cryptography
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
