import type { Metadata } from "next";
import { Electrolize, Roboto_Mono } from "next/font/google";
import "./globals.css";

const electrolize = Electrolize({ subsets: ["latin"], weight: "400", variable: "--font-display", display: "swap" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "PerfOptiq — Détectez et corrigez les bottlenecks avant qu'ils coûtent",
  description: "APM IA sans agent. Profiling continu, détection automatique des goulots d'étranglement, suggestions de fix. −32% de latence en 48h.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${electrolize.variable} ${robotoMono.variable}`}>
      <body style={{ fontFamily: "var(--font-body)", background: "#eff6ff" }}>{children}</body>
    </html>
  );
}
