# PerfOptIQ — Optimisation continue des performances applicatives

> Profiling continu sans agent. Goulots détectés avant que vos utilisateurs ne les ressentent.

[![FastAPI](https://img.shields.io/badge/FastAPI-0.111-009688?style=flat&logo=fastapi)](https://fastapi.tiangolo.com)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat&logo=next.js)](https://nextjs.org)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-16-336791?style=flat&logo=postgresql)](https://postgresql.org)
[![OpenTelemetry](https://img.shields.io/badge/OpenTelemetry-1.x-F5A623?style=flat)](https://opentelemetry.io)

---

## Vue d'ensemble

PerfOptIQ est une plateforme d'observabilité et d'optimisation des performances applicatives. Elle collecte les traces OpenTelemetry, profil les endpoints lents, détecte les N+1 queries, identifie les memory leaks, et génère des recommandations d'optimisation automatiques via LLM. Le profiling est continu et sans agent intrusif.

**Domaine :** APM / DevOps / Performance Engineering  
**Port VM :** 3026 | **Sous-domaine :** perfoptiq.wikolabs.com

---

## Stack technique

| Couche | Technologie | Rôle |
|--------|------------|------|
| Frontend | Next.js 14, TypeScript, Tailwind CSS, Recharts | Flame graphs, traces, recommandations |
| Backend | FastAPI (Python 3.11), Uvicorn | API traces, profiling, analyse |
| Observability | OpenTelemetry (OTLP receiver) | Collecte traces/metrics/logs |
| Storage | ClickHouse (ou PostgreSQL + TimescaleDB) | Séries temporelles traces |
| Profiling | py-spy / Austin | CPU profiling sans intrusion |
| Alerting | Alertmanager-compatible | Alertes P99 > seuil |
| Base de données | PostgreSQL 16 | Configuration, alertes, recommandations |
| Cache | Redis 7 | Metrics agrégées |
| Infra | Docker Compose, Nginx | VM mono-repo (port 3026) |

### backend/requirements.txt
```
fastapi==0.111.0
uvicorn[standard]==0.29.0
opentelemetry-sdk==1.24.0
opentelemetry-exporter-otlp==1.24.0
asyncpg==0.29.0
sqlalchemy[asyncio]==2.0.30
redis==5.0.4
pydantic==2.7.1
pandas==2.2.2
numpy==1.26.4
groq==0.9.0
```

---

## Architecture mono-repo

```
perfoptiq/
├── frontend/
│   ├── src/app/
│   │   ├── page.tsx              # Dashboard performances
│   │   ├── traces/               # Explorer traces + flamegraph
│   │   ├── endpoints/            # Classement endpoints P99
│   │   ├── queries/              # N+1 queries détectées
│   │   └── recommendations/      # Suggestions optimisation LLM
│   └── src/components/
│       ├── FlameGraph.tsx        # Flame graph SVG interactif
│       ├── TraceTimeline.tsx     # Spans waterfall view
│       ├── EndpointTable.tsx     # P50/P95/P99 par endpoint
│       ├── QueryHeatmap.tsx      # Requêtes lentes par heure
│       └── OptimizationCard.tsx  # Recommandation LLM avec code
├── backend/
│   ├── app/
│   │   ├── main.py
│   │   ├── routers/
│   │   │   ├── traces.py         # OTLP receiver + query
│   │   │   ├── endpoints.py      # Métriques par endpoint
│   │   │   └── recommendations.py# LLM recommendations
│   │   ├── services/
│   │   │   ├── otlp_receiver.py  # Ingestion OpenTelemetry
│   │   │   ├── analyzer.py       # Détection N+1, slow queries
│   │   │   ├── flamegraph.py     # Génération flame graph data
│   │   │   └── optimizer.py      # Groq LLM recommendations
│   │   └── models/
│   │       └── trace.py
│   ├── requirements.txt
│   └── Dockerfile
├── docker-compose.yml
└── .github/workflows/deploy.yml
```

---

## Diagrammes UML

### Architecture système

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#0f172a', 'primaryTextColor': '#fff', 'primaryBorderColor': '#1e293b', 'lineColor': '#374151', 'secondaryColor': '#f8fafc'}}}%%
flowchart TB
    subgraph VM["🖥️ VM — Docker Compose (port 3026)"]
        NEXT["Next.js 14\nPerf Dashboard"]
        API["FastAPI + OTLP Receiver"]

        subgraph PERF["⚡ Performance Engine"]
            TRACES["OpenTelemetry\nTraces + Spans"]
            ANALYZER["Analyzer\nN+1, slow queries, memory"]
            FLAME["Flamegraph\nCPU profiling"]
            LLM["Groq LLM\nOptimization recommendations"]
        end

        PG[("PostgreSQL\nTrace metadata")]
        REDIS[("Redis\nAggregated metrics")]
    end

    APP["Your App\nOTLP instrumented"] --> API
    SCHED["APScheduler\nAnalysis every 5min"] --> ANALYZER
```

### Séquence — Détection et recommandation N+1

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#0f172a', 'primaryTextColor': '#fff', 'lineColor': '#374151'}}}%%
sequenceDiagram
    participant APP as Application
    participant OTLP as OTLP Receiver
    participant ANALYZER as Analyzer
    participant GROQ as Groq LLM
    participant DEV as Developer

    APP->>OTLP: spans {trace_id, operation, duration_ms, db_queries: [{sql, duration_ms}]}

    OTLP->>ANALYZER: analyze_trace(spans)
    ANALYZER->>ANALYZER: detect_n_plus_one(db_queries)
    Note over ANALYZER: Pattern: SELECT user WHERE id=1, id=2, id=3... (N queries dans loop)
    ANALYZER-->>OTLP: n_plus_one_detected at /api/users, N=47 queries

    OTLP->>GROQ: generate_recommendation(pattern=n_plus_one, code_context)
    GROQ-->>OTLP: "Utilisez une eager loading avec jointure: SELECT users JOIN profiles... au lieu de N queries séparées. Code suggéré: ..."

    OTLP->>DEV: alert + recommendation
    DEV-->>OTLP: mark_resolved(recommendation_id)
```

### Modèle de données (ER)

```mermaid
%%{init: {'theme': 'base', 'themeVariables': {'primaryColor': '#0f172a', 'primaryTextColor': '#fff', 'lineColor': '#374151'}}}%%
erDiagram
    TRACE {
        uuid id PK
        string trace_id
        string service_name
        string endpoint
        int duration_ms
        int span_count
        boolean has_errors
        timestamp started_at
    }
    SPAN {
        uuid id PK
        uuid trace_id FK
        string span_id
        string operation
        int duration_ms
        string db_query
        int db_queries_count
        boolean is_slow
    }
    PERFORMANCE_ISSUE {
        uuid id PK
        string issue_type
        string endpoint
        text description
        int occurrences
        float avg_overhead_ms
        string status
        timestamp first_seen
    }
    RECOMMENDATION {
        uuid id PK
        uuid issue_id FK
        text description
        text code_suggestion
        string priority
        boolean is_resolved
        timestamp generated_at
    }

    TRACE ||--o{ SPAN : "contains"
    SPAN }o--o| PERFORMANCE_ISSUE : "triggers"
    PERFORMANCE_ISSUE ||--o{ RECOMMENDATION : "gets"
```

---

## PRD

### Problème
Les problèmes de performance sont détectés en production quand les utilisateurs se plaignent. Les équipes passent des heures à déboguer des ralentissements sans visibilité sur la cause racine. Les N+1 queries, les requêtes non-indexées et les memory leaks coûtent des milliers d'euros en infrastructure inutile.

### Solution
PerfOptIQ instrumente l'application via OpenTelemetry (standard open-source), détecte automatiquement les patterns problématiques (N+1, P99 > seuil, mémoire croissante), et propose des recommendations concrètes avec du code suggéré. Zéro agent intrusif.

### Utilisateurs cibles
| Persona | Besoin |
|---------|--------|
| Backend Developer | Voir quels endpoints sont lents et pourquoi |
| DevOps | Monitorer P99, alertes automatiques |
| Tech Lead | Vue globale santé perf + ROI optimisations |

### OKRs
- Détection N+1 queries : 100% (zéro faux-négatif)
- Réduction P99 après optimisation : -60%
- Time-to-detect goulot : < 5 minutes

---

## User Stories

```
US-01 [Dev] En tant que développeur backend,
      je veux voir mes 10 endpoints les plus lents (P99)
      et pour chacun les spans les plus coûteux
      afin de savoir exactement où optimiser.

US-02 [Dev] En tant que développeur,
      je veux être notifié quand un N+1 query pattern est détecté
      avec le code suggéré pour le corriger
      afin de corriger le problème avant le prochain déploiement.

US-03 [DevOps] En tant que DevOps,
      je veux une alerte quand le P99 d'un endpoint dépasse 500ms
      afin d'agir avant que les utilisateurs ne le voient.

US-04 [Dev] En tant que développeur,
      je veux voir le flame graph de CPU de mon application
      afin d'identifier la fonction qui consomme le plus.

US-05 [Tech Lead] En tant que Tech Lead,
      je veux voir l'évolution des performances sur 30 jours
      après chaque déploiement
      afin de mesurer l'impact des optimisations.
```

---

## Règles métier

| # | Règle | Description | Simulable UI |
|---|-------|-------------|-------------|
| R1 | P99 threshold | Alert si P99 > 500ms sur endpoint | ✅ Threshold config |
| R2 | N+1 detection | ≥ 5 queries similaires dans une trace → N+1 | ✅ N+1 badge |
| R3 | Slow query | Query > 100ms → flagged | ✅ Slow query list |
| R4 | Memory trend | Heap croissant > 20% sur 30 min → alert | ✅ Memory chart |
| R5 | Error rate | > 1% errors 5min → alert | ✅ Error rate |
| R6 | Deployment markers | Deploy event → ligne verticale sur charts | ✅ Deploy marker |
| R7 | Sampling | 10% sampling en prod, 100% pour slow traces | ✅ Sample rate |
| R8 | Retention | Traces gardées 7 jours, métriques 90 jours | ✅ Retention badge |
| R9 | LLM reco | Code context + pattern → suggestion optimisation | ✅ Reco card |
| R10 | Comparison | Compare P99 avant/après fix | ✅ Before/after |

---

## Spécification API

**Base URL :** `http://perfoptiq.wikolabs.com/api/v1`

### POST /otlp/traces (OTLP HTTP receiver)
```
Standard OpenTelemetry Protocol (OTLP/HTTP+protobuf)
```

### GET /endpoints/performance
```json
// Response: {"endpoints": [{"path": "/api/users", "p50": 45, "p95": 180, "p99": 620, "n_plus_one": true, "calls_per_min": 340}]}
```

### GET /recommendations
```json
// Response: {"recommendations": [{"issue": "N+1 on /api/users", "priority": "HIGH", "description": "Use eager loading...", "code": "...", "estimated_saving_ms": 450}]}
```

---

## Simulation UI

| Composant | Description |
|-----------|-------------|
| **Flame Graph** | SVG interactif : fonctions stackées par temps CPU |
| **Trace Waterfall** | Spans d'une trace : durée, db queries, service deps |
| **Endpoint Table** | P50/P95/P99 trié, filtrable, avec N+1 badge |
| **Query Heatmap** | Heatmap 24h × 7j : quand les requêtes lentes se produisent |
| **Optimization Card** | Recommandation LLM avec code snippet copiable |

---

## Déploiement

```yaml
version: "3.9"
services:
  postgres:
    image: postgres:16-alpine
    environment: {POSTGRES_DB: perfoptiq, POSTGRES_USER: pq_user, POSTGRES_PASSWORD: "${POSTGRES_PASSWORD}"}
  redis:
    image: redis:7-alpine
  backend:
    build: ./backend
    environment:
      DATABASE_URL: postgresql+asyncpg://pq_user:${POSTGRES_PASSWORD}@postgres/perfoptiq
      GROQ_API_KEY: "${GROQ_API_KEY}"
      REDIS_URL: redis://redis:6379
    depends_on: [postgres, redis]
    expose: ["8000", "4317"]
  frontend:
    build: ./frontend
    expose: ["3000"]
  nginx:
    image: nginx:alpine
    ports: ["3026:80"]
volumes:
  pg_data:
```

---

## Roadmap

### Phase 1 — MVP
- [ ] OTLP receiver (traces)
- [ ] Dashboard P50/P95/P99
- [ ] N+1 detection

### Phase 2 — Intelligence
- [ ] LLM recommendations
- [ ] Flame graph viewer
- [ ] Memory leak detection

### Phase 3 — Ecosystem
- [ ] Intégration CI/CD (performance budgets)
- [ ] Distributed tracing multi-services
- [ ] Correlation perf → déploiements

---

*Un produit [Wikolabs](https://wikolabs.com) — Intelligence artificielle appliquée aux métiers*
