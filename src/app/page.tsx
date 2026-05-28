export default function PerfOptiqPage() {
  return (
    <div style={{ fontFamily: "var(--font-body, 'Roboto Mono', monospace)", background: "#eff6ff", minHeight: "100vh", color: "#1e293b" }}>

      {/* NAVBAR */}
      <nav style={{ background: "#ffffff", borderBottom: "1px solid #bfdbfe", position: "fixed", top: 0, left: 0, right: 0, zIndex: 50 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 32, height: 32, background: "#1d4ed8", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 14, fontFamily: "var(--font-display, 'Electrolize', monospace)", fontWeight: 700 }}>P</span>
            </div>
            <span style={{ fontFamily: "var(--font-display, 'Electrolize', monospace)", fontWeight: 700, fontSize: 20, color: "#1d4ed8", letterSpacing: 1 }}>PerfOptiq</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <a href="#fonctionnalites" style={{ color: "#475569", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Fonctionnalités</a>
            <a href="#stats" style={{ color: "#475569", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Résultats</a>
            <a href="#contact" style={{ color: "#475569", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>Contact</a>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
              <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer" style={{ background: "#1d4ed8", color: "#fff", padding: "10px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-display, 'Electrolize', monospace)" }}>
                📅 Réserver un créneau →
              </button>
              <a href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20PerfOptiq%20avec%20Wikolabs." target="_blank" rel="noopener noreferrer" style={{ background: "#25d366", borderColor: "#25d366", color: "#fff", padding: "10px 20px", borderRadius: 8, textDecoration: "none", fontSize: 14, fontWeight: 600, fontFamily: "var(--font-display, 'Electrolize', monospace)" }}>
                💬 WhatsApp →
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 120, paddingBottom: 80, paddingLeft: 24, paddingRight: 24 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#dbeafe", color: "#1d4ed8", padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600, marginBottom: 20, letterSpacing: 1 }}>
              <span style={{ width: 8, height: 8, background: "#1d4ed8", borderRadius: "50%", display: "inline-block" }}></span>
              APM NOUVELLE GÉNÉRATION
            </div>
            <h1 style={{ fontFamily: "var(--font-display, 'Electrolize', monospace)", fontSize: 44, fontWeight: 700, lineHeight: 1.15, color: "#0f172a", margin: "0 0 20px" }}>
              Détectez et corrigez les goulots d'étranglement<br />
              <span style={{ color: "#1d4ed8" }}>avant qu'ils coûtent</span>
            </h1>
            <p style={{ fontSize: 17, color: "#475569", lineHeight: 1.7, margin: "0 0 36px", fontFamily: "var(--font-body, 'Roboto Mono', monospace)" }}>
              Profiling continu de vos APIs, bases de données et frontend. L'IA détecte les bottlenecks, suggère des optimisations et trace vos P95/P99 — sans une ligne d'instrumentation.
            </p>
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
                <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer" style={{ background: "#1d4ed8", color: "#fff", padding: "14px 28px", borderRadius: 10, textDecoration: "none", fontSize: 15, fontWeight: 700, fontFamily: "var(--font-display, 'Electrolize', monospace)", letterSpacing: 0.5 }}>
                  📅 Réserver un créneau →
                </button>
                <a href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20PerfOptiq%20avec%20Wikolabs." target="_blank" rel="noopener noreferrer" style={{ background: "#25d366", borderColor: "#25d366", color: "#fff", padding: "14px 28px", borderRadius: 10, textDecoration: "none", fontSize: 15, fontWeight: 700, fontFamily: "var(--font-display, 'Electrolize', monospace)", letterSpacing: 0.5 }}>
                  💬 WhatsApp →
                </a>
              </div>
              <a
                href="#fonctionnalites"
                style={{ background: "#fff", color: "#1d4ed8", padding: "14px 28px", borderRadius: 10, textDecoration: "none", fontSize: 15, fontWeight: 600, border: "2px solid #bfdbfe" }}
              >
                Voir la démo
              </a>
            </div>
          </div>

          {/* HERO VISUAL — Performance Dashboard */}
          <div style={{ background: "#0f172a", borderRadius: 16, padding: 24, boxShadow: "0 24px 64px rgba(29,78,216,0.25)", border: "1px solid #1e3a5f" }}>
            {/* Top bar */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }}></div>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }}></div>
              <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e" }}></div>
              <span style={{ color: "#94a3b8", fontSize: 12, marginLeft: 8, fontFamily: "var(--font-display, 'Electrolize', monospace)" }}>perfoptiq — dashboard</span>
            </div>

            {/* KPI row */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 8, marginBottom: 20 }}>
              {[
                { label: "P95 Latency", value: "240ms", badge: "↓32%", badgeColor: "#22c55e", badgeBg: "rgba(34,197,94,0.15)" },
                { label: "Error rate", value: "0.02%", badge: "✓", badgeColor: "#22c55e", badgeBg: "rgba(34,197,94,0.15)" },
                { label: "Throughput", value: "12k rpm", badge: "→", badgeColor: "#94a3b8", badgeBg: "rgba(148,163,184,0.1)" },
                { label: "Apdex", value: "0.97", badge: "★", badgeColor: "#f59e0b", badgeBg: "rgba(245,158,11,0.15)" },
              ].map((kpi) => (
                <div key={kpi.label} style={{ background: "#1e293b", borderRadius: 8, padding: "10px 10px 8px", border: "1px solid #334155" }}>
                  <div style={{ fontSize: 9, color: "#64748b", marginBottom: 4, fontFamily: "var(--font-display, 'Electrolize', monospace)", textTransform: "uppercase", letterSpacing: 0.5 }}>{kpi.label}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: "#f1f5f9", fontFamily: "var(--font-display, 'Electrolize', monospace)" }}>{kpi.value}</div>
                  <div style={{ display: "inline-block", background: kpi.badgeBg, color: kpi.badgeColor, fontSize: 9, fontWeight: 700, padding: "2px 6px", borderRadius: 4, marginTop: 4 }}>{kpi.badge}</div>
                </div>
              ))}
            </div>

            {/* Flame graph label */}
            <div style={{ fontSize: 10, color: "#64748b", fontFamily: "var(--font-display, 'Electrolize', monospace)", marginBottom: 8, textTransform: "uppercase", letterSpacing: 1 }}>Flame Graph — requête /api/users</div>

            {/* Flame graph bars */}
            <div style={{ display: "flex", flexDirection: "column", gap: 5, marginBottom: 16 }}>
              {[
                { label: "DB query #47", width: "78%", color: "#ef4444", highlight: true, time: "180ms" },
                { label: "Auth middleware", width: "28%", color: "#3b82f6", highlight: false, time: "42ms" },
                { label: "Image resize", width: "20%", color: "#8b5cf6", highlight: false, time: "31ms" },
                { label: "Cache miss", width: "12%", color: "#f59e0b", highlight: false, time: "18ms" },
              ].map((bar) => (
                <div key={bar.label} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 100, fontSize: 9, color: "#94a3b8", fontFamily: "var(--font-display, 'Electrolize', monospace)", flexShrink: 0, textAlign: "right" }}>{bar.label}</div>
                  <div style={{ flex: 1, background: "#1e293b", borderRadius: 3, height: 18, position: "relative", overflow: "hidden" }}>
                    <div style={{ width: bar.width, height: "100%", background: bar.color, borderRadius: 3, opacity: bar.highlight ? 1 : 0.6, display: "flex", alignItems: "center", paddingLeft: 6 }}>
                      <span style={{ fontSize: 9, color: "#fff", fontFamily: "var(--font-display, 'Electrolize', monospace)", fontWeight: 700 }}>{bar.time}</span>
                    </div>
                  </div>
                  {bar.highlight && (
                    <span style={{ fontSize: 9, color: "#fca5a5", fontFamily: "var(--font-display, 'Electrolize', monospace)", flexShrink: 0, fontWeight: 700 }}>OPTIMISABLE</span>
                  )}
                </div>
              ))}
            </div>

            {/* AI suggestion card */}
            <div style={{ background: "rgba(29,78,216,0.15)", border: "1px solid rgba(59,130,246,0.4)", borderRadius: 8, padding: "10px 14px", display: "flex", alignItems: "flex-start", gap: 10 }}>
              <span style={{ fontSize: 16 }}>🤖</span>
              <div>
                <div style={{ fontSize: 10, color: "#93c5fd", fontFamily: "var(--font-display, 'Electrolize', monospace)", fontWeight: 700, marginBottom: 3 }}>SUGGESTION IA</div>
                <div style={{ fontSize: 11, color: "#e2e8f0", fontFamily: "var(--font-display, 'Electrolize', monospace)", lineHeight: 1.5 }}>
                  Index manquant sur <span style={{ color: "#60a5fa" }}>users.email</span> — gain estimé: <span style={{ color: "#4ade80", fontWeight: 700 }}>−140ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="fonctionnalites" style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-display, 'Electrolize', monospace)", fontSize: 36, fontWeight: 700, color: "#0f172a", margin: "0 0 12px" }}>
              Observabilité complète, <span style={{ color: "#1d4ed8" }}>zéro friction</span>
            </h2>
            <p style={{ fontSize: 16, color: "#64748b", maxWidth: 520, margin: "0 auto" }}>
              De la détection à la résolution — tout se passe dans PerfOptiq.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
            {[
              {
                icon: "⚡",
                title: "Profiling continu sans agent",
                desc: "Basé sur eBPF — zéro overhead, zéro instrumentation manuelle. Plug & play sur tout environnement Linux, Kubernetes ou cloud natif.",
                tags: ["eBPF", "Zero overhead", "Plug & play"],
              },
              {
                icon: "🧠",
                title: "Détection IA des bottlenecks",
                desc: "Root cause analysis automatique. L'IA corrèle les signaux (logs, traces, métriques) et génère des suggestions de fix actionnables en quelques secondes.",
                tags: ["Root cause auto", "Fix suggestions", "Corrélation"],
              },
              {
                icon: "🔔",
                title: "Alertes intelligentes",
                desc: "Anomaly detection adaptive, sans seuil à configurer. Zéro faux positif. Intégration native Slack, PagerDuty, OpsGenie.",
                tags: ["Anomaly detection", "Slack/PagerDuty", "0 faux positif"],
              },
            ].map((f) => (
              <div key={f.title} style={{ background: "#f8fafc", borderRadius: 14, padding: 28, border: "1px solid #e2e8f0", transition: "transform 0.2s" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{f.icon}</div>
                <h3 style={{ fontFamily: "var(--font-display, 'Electrolize', monospace)", fontSize: 18, fontWeight: 700, color: "#0f172a", margin: "0 0 10px" }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: "0 0 18px" }}>{f.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {f.tags.map((t) => (
                    <span key={t} style={{ background: "#dbeafe", color: "#1d4ed8", fontSize: 11, fontWeight: 600, padding: "3px 10px", borderRadius: 12, fontFamily: "var(--font-display, 'Electrolize', monospace)" }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section id="stats" style={{ padding: "80px 24px", background: "#eff6ff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2 style={{ fontFamily: "var(--font-display, 'Electrolize', monospace)", fontSize: 36, fontWeight: 700, color: "#0f172a", margin: "0 0 12px" }}>
              Des résultats <span style={{ color: "#1d4ed8" }}>mesurables</span>
            </h2>
            <p style={{ fontSize: 16, color: "#64748b", maxWidth: 460, margin: "0 auto" }}>
              Constatés par nos clients dans les 30 premiers jours d'utilisation.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
            {[
              { value: "−32%", label: "de latence en 48h", sub: "P95 latency réduite dès le premier profilage" },
              { value: "0", label: "instrumentation manuelle", sub: "eBPF s'intègre sans modifier votre code" },
              { value: "2 sem.", label: "retour sur investissement", sub: "Économies sur incidents + ingénierie évitée" },
            ].map((s) => (
              <div key={s.label} style={{ background: "#ffffff", borderRadius: 16, padding: "36px 28px", textAlign: "center", border: "2px solid #bfdbfe", boxShadow: "0 4px 24px rgba(29,78,216,0.08)" }}>
                <div style={{ fontFamily: "var(--font-display, 'Electrolize', monospace)", fontSize: 48, fontWeight: 700, color: "#1d4ed8", lineHeight: 1, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "#0f172a", marginBottom: 8, fontFamily: "var(--font-display, 'Electrolize', monospace)" }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: "80px 24px", background: "#ffffff" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontFamily: "var(--font-display, 'Electrolize', monospace)", fontSize: 34, fontWeight: 700, color: "#0f172a", margin: "0 0 12px" }}>
              Opérationnel en <span style={{ color: "#1d4ed8" }}>5 minutes</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 24 }}>
            {[
              { step: "01", title: "Connectez votre infra", desc: "Helm chart ou Docker Compose — une commande suffit." },
              { step: "02", title: "Profiling automatique", desc: "eBPF capture chaque requête, query et trace sans overhead." },
              { step: "03", title: "IA analyse & détecte", desc: "Les bottlenecks remontent avec cause racine et fix suggéré." },
              { step: "04", title: "Optimisez & mesurez", desc: "Trackez l'amélioration de latence en temps réel." },
            ].map((item) => (
              <div key={item.step} style={{ textAlign: "center" }}>
                <div style={{ width: 48, height: 48, background: "#dbeafe", border: "2px solid #1d4ed8", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontFamily: "var(--font-display, 'Electrolize', monospace)", fontWeight: 700, fontSize: 14, color: "#1d4ed8" }}>
                  {item.step}
                </div>
                <h4 style={{ fontFamily: "var(--font-display, 'Electrolize', monospace)", fontSize: 14, fontWeight: 700, color: "#0f172a", margin: "0 0 8px" }}>{item.title}</h4>
                <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section id="contact" style={{ padding: "80px 24px", background: "#1d4ed8" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-display, 'Electrolize', monospace)", fontSize: 38, fontWeight: 700, color: "#ffffff", margin: "0 0 16px", lineHeight: 1.2 }}>
            Stoppez les ralentissements<br />avant qu'ils impactent vos utilisateurs
          </h2>
          <p style={{ fontSize: 16, color: "#bfdbfe", margin: "0 0 36px", lineHeight: 1.7 }}>
            Rejoignez les équipes qui ont éliminé leurs bottlenecks en 48h. Démo personnalisée sur votre stack — sans engagement.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <button data-cal-link="wikolabs-team/30min" data-cal-namespace="wk30min" data-cal-config='{"layout":"month_view"}' type="button" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#ffffff", color: "#1d4ed8", padding: "16px 36px", borderRadius: 12, textDecoration: "none", fontSize: 16, fontWeight: 700, fontFamily: "var(--font-display, 'Electrolize', monospace)", letterSpacing: 0.5 }}>
              📅 Réserver un créneau →
            </button>
            <a href="https://wa.me/261386626100?text=Bonjour%2C%20je%20souhaite%20discuter%20de%20PerfOptiq%20avec%20Wikolabs." target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", background: "#25d366", borderColor: "#25d366", color: "#fff", padding: "16px 36px", borderRadius: 12, textDecoration: "none", fontSize: 16, fontWeight: 700, fontFamily: "var(--font-display, 'Electrolize', monospace)", letterSpacing: 0.5 }}>
              💬 WhatsApp →
            </a>
          </div>
          <div style={{ marginTop: 20, fontSize: 13, color: "#93c5fd" }}>
            Réponse sous 24h · Démo sur votre propre stack · Aucun CB requis
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#0f172a", padding: "32px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 28, height: 28, background: "#1d4ed8", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontSize: 12, fontWeight: 700, fontFamily: "var(--font-display, 'Electrolize', monospace)" }}>P</span>
            </div>
            <span style={{ color: "#94a3b8", fontSize: 14, fontFamily: "var(--font-display, 'Electrolize', monospace)" }}>PerfOptiq</span>
          </div>
          <div style={{ color: "#64748b", fontSize: 13, fontFamily: "var(--font-body, 'Roboto Mono', monospace)" }}>
            © 2025 PerfOptiq — Un produit{" "}
            <a href="https://wikolabs.com" style={{ color: "#3b82f6", textDecoration: "none" }}>Wikolabs</a>
          </div>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="mailto:team@wikolabs.com" style={{ color: "#64748b", fontSize: 13, textDecoration: "none" }}>team@wikolabs.com</a>
            <span style={{ color: "#64748b" }}>·</span>
            <a href="tel:+261386626100" style={{ color: "#64748b", fontSize: 13, textDecoration: "none" }}>+261 38 66 261 00</a>
            <span style={{ color: "#64748b" }}>·</span>
            <a href="https://calendly.com/wikolabs" target="_blank" rel="noopener noreferrer" style={{ color: "#64748b", fontSize: 13, textDecoration: "none" }}>Prendre RDV</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
