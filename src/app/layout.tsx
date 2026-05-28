import type { Metadata } from "next";
import { Electrolize, Roboto_Mono } from "next/font/google";
import Script from "next/script";
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
      <body style={{ fontFamily: "var(--font-body)", background: "#eff6ff" }}>{children}<Script id="cal-embed" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: '(function(C,A,L){var p=function(a,ar){a.q.push(ar);};var d=C.document;C.Cal=C.Cal||function(){var cal=C.Cal;var ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true;}if(ar[0]===L){const api=function(){p(api,arguments);};const namespace=ar[1];api.q=api.q||[];if(typeof namespace==="string"){cal.ns[namespace]=cal.ns[namespace]||api;p(cal.ns[namespace],ar);p(cal,["-",namespace,ar[2]]);}else p(cal,ar);return;}p(cal,ar);};})(window,"https://app.cal.com/embed/embed.js","init");Cal("init","wk30min",{origin:"https://app.cal.com"});Cal.ns["wk30min"]("ui",{"theme":"light","hideEventTypeDetails":false,"layout":"month_view"});' }} /></body>
    </html>
  );
}
