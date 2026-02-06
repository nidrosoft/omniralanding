# OMNIRA — Master Product Requirements Document

### The AI-Native Operating System for Practice-Based Businesses
**Version:** 1.0 | **Date:** February 4, 2026 | **Status:** Active Development  
**Classification:** Internal — Engineering & Product Reference

---

## Document Map

This is the master reference document for the Omnira platform. Every architectural decision, product specification, and implementation detail flows from here. The 20 companion files listed below contain deep-dive specifications for each subsystem. This file provides the complete picture — anyone reading it should understand what Omnira is, how it works, why it's built the way it is, and where to find every detail.

| # | File | Purpose |
|---|------|---------|
| 00 | `00-MASTER-PRD.md` | **This file.** Vision, architecture overview, decisions, and map to everything else. |
| 01 | `01-ARCHITECTURE-SYSTEM.md` | Three-layer system architecture, event bus, lane queue execution model, sync strategy. |
| 02 | `02-ARCHITECTURE-MEMORY.md` | Agent memory tiers, JSONL audit logs, vector + keyword search, data lifecycle. |
| 03 | `03-ARCHITECTURE-DATABASE.md` | Complete schema — every table, index, relationship. SQLite local + PostgreSQL cloud. |
| 04 | `04-ARCHITECTURE-SECURITY.md` | HIPAA compliance, RBAC, encryption, audit logging, sandboxing, backup/DR. |
| 10 | `10-AGENT-ORCHESTRATOR.md` | Core routing agent — intent classification, task decomposition, multi-agent coordination. |
| 11 | `11-AGENT-SCHEDULING.md` | Stella — calendar optimization, cancellation recovery, recall, no-show prediction. |
| 12 | `12-AGENT-BILLING.md` | Vera — insurance verification, claims lifecycle, denial management, revenue cycle. |
| 13 | `13-AGENT-COMMUNICATION.md` | Relay — omnichannel messaging, voice AI, campaigns, review management. |
| 14 | `14-AGENT-CLINICAL.md` | Aria — treatment plans, referrals, prescriptions, lab tracking, clinical notes. |
| 15 | `15-AGENT-OPERATIONS.md` | Otto — morning briefings, inventory, compliance, analytics, reporting. |
| 20 | `20-UI-SHELL.md` | App shell, navigation, command palette, notification system, theming. |
| 21 | `21-UI-DASHBOARD.md` | Home dashboard — metrics, schedule overview, tasks, activity feed. |
| 22 | `22-UI-PATIENTS.md` | Patient directory, detail views, intake flow, record management. |
| 23 | `23-UI-SCHEDULE.md` | Calendar views, appointment management, waitlist, slot suggestion. |
| 24 | `24-UI-BILLING.md` | Claims management, insurance verification, payments, financial reports. |
| 25 | `25-UI-COMMUNICATIONS.md` | Unified inbox, campaign builder, call logs, template manager. |
| 26 | `26-UI-SETTINGS.md` | Practice configuration, team management, integrations, agent controls. |
| 30 | `30-API-INTERNAL.md` | Every internal endpoint — CQRS pattern, WebSocket events, schemas. |
| 31 | `31-API-EXTERNAL.md` | Third-party integrations — voice AI, Twilio, clearinghouses, MCP. |
| 40 | `40-DEPLOYMENT.md` | Build pipeline, auto-update, monitoring, multi-location setup. |

---

## Table of Contents

1. [Product Vision](#1-product-vision)
2. [Brand Identity](#2-brand-identity)
3. [Market Context & Target Audience](#3-market-context--target-audience)
4. [Product Architecture — The Big Picture](#4-product-architecture--the-big-picture)
5. [The Vertical-Pack Model](#5-the-vertical-pack-model)
6. [The Five-Agent System](#6-the-five-agent-system)
7. [The Orchestrator — Omnira Core](#7-the-orchestrator--omnira-core)
8. [The Named AI Assistant](#8-the-named-ai-assistant)
9. [Agent Autonomy & Permission Framework](#9-agent-autonomy--permission-framework)
10. [Agent Training & Adaptation](#10-agent-training--adaptation)
11. [Technical Stack — Every Layer](#11-technical-stack--every-layer)
12. [System Architecture — Three Layers](#12-system-architecture--three-layers)
13. [Local-First Data Architecture](#13-local-first-data-architecture)
14. [Cloud Sync & Multi-Device Strategy](#14-cloud-sync--multi-device-strategy)
15. [AI Model Strategy](#15-ai-model-strategy)
16. [Memory Architecture](#16-memory-architecture)
17. [Security & HIPAA Compliance](#17-security--hipaa-compliance)
18. [Onboarding Flow](#18-onboarding-flow)
19. [UI Philosophy & Design System](#19-ui-philosophy--design-system)
20. [Communication Infrastructure](#20-communication-infrastructure)
21. [Insurance & Claims Infrastructure](#21-insurance--claims-infrastructure)
22. [Hardware Integration Strategy](#22-hardware-integration-strategy)
23. [Pricing & Business Model](#23-pricing--business-model)
24. [Competitive Analysis & Moat](#24-competitive-analysis--moat)
25. [API Cost Analysis](#25-api-cost-analysis)
26. [Development Roadmap](#26-development-roadmap)
27. [Key Metrics & Success Criteria](#27-key-metrics--success-criteria)

---

## 1. Product Vision

### What Is Omnira?

Omnira is an **AI-native operating system for practice-based businesses**. It replaces the 5–10 fragmented software tools a practice uses today — practice management, patient communication, billing, analytics, scheduling, inventory, compliance tracking — with a single, unified platform powered by autonomous AI agents that handle the repetitive administrative work so staff can focus on patient care.

Omnira is not a plugin. It is not an add-on. It is a **complete replacement** for the entire software stack a practice runs on today. The product is a desktop application (built with Tauri) that runs locally on the practice's machines, with encrypted cloud sync for backup, multi-device access, and AI agent processing.

### The Core Insight

Practice-based businesses (dental, veterinary, optometry, chiropractic, med spa) share a common operational structure: they schedule appointments, treat patients/clients, bill insurance or patients, communicate across channels, manage staff and compliance, and track business performance. They all suffer from the same problem — fragmented software where nothing talks to each other, and front desk staff drown in repetitive work that could be automated.

The average dental practice pays $1,500–$3,000/month across 5–10 software tools, and their front desk spends 60–70% of their time on tasks that are repetitive and rule-based. Add the cost of admin labor on those tasks ($2,000–$4,000/month equivalent), and the total cost of the current approach is $3,200–$6,200/month.

Omnira replaces all of it.

### The Core Value Proposition

> **Five AI agents. One platform. Your practice running itself.**

Omnira deploys 5 specialized AI agents that work 24/7. Overnight they process claims, verify tomorrow's insurance, follow up with inactive patients, and prepare a morning briefing so the team walks in ready to go. During the day, they fill cancellations in minutes, handle routine phone calls, submit claims same-day, and manage the entire billing cycle without human involvement.

**The result for a mid-size dental practice:** $250K–$500K+ in annual recovered revenue and cost savings. That's why $799–$2,499/month is a no-brainer.

### What Makes Omnira Different

1. **AI-native from the ground up.** Not AI bolted onto a 20-year-old codebase. The entire system is designed around agent-first workflows.
2. **Local-first architecture.** Patient data lives on the practice's machine, encrypted. Not just in someone else's cloud. This is a genuine competitive advantage for HIPAA compliance and privacy-conscious practices.
3. **Five specialized agents working as a team.** Not a single chatbot. Not isolated AI features. A coordinated multi-agent system that shares context and collaborates.
4. **One platform replaces everything.** Practice management, communication, billing, analytics, scheduling, inventory, compliance — unified with zero data silos.
5. **Vertical-specific from day one.** Built specifically for dental (and later other verticals). Not a generic tool adapted for dentistry.

---

## 2. Brand Identity

### Name & Domain

- **Brand:** Omnira
- **Domain:** omnira.space
- **Parent positioning:** Omnira is the platform brand. Each vertical gets its own product name underneath: "Omnira for Dental," "Omnira for Veterinary," etc.

### Brand Personality

- **Intelligent** but not cold — warm, confident, approachable
- **Premium** but not corporate — feels modern, founder-led
- **Capable** but not overwhelming — emphasizes simplicity of a complex system
- Think: **Linear meets Stripe** — clean, powerful, developer-respected, practice-owner-friendly

### Visual Direction

- **Primary palette:** Deep navy/slate + warm accent (amber/orange or teal)
- **Feel:** Dark mode-capable, clean typography, generous whitespace
- **Inspiration:** linear.app, notion.so, stripe.com, vercel.com
- **Avoid:** Generic SaaS blue, stock photos, overly clinical feel, clip art, generic AI imagery
- **Illustration style:** Abstract/geometric or subtle 3D elements
- **Typography:** Modern sans-serif (Inter, Satoshi, General Sans, or similar)
- **UI Font Pairing:** Sans-serif for UI chrome, optional serif accent for headlines and marketing

### Naming Convention — Agents

Each agent has an internal codename used in the UI and conversation:

| Agent | Codename | Domain |
|-------|----------|--------|
| Orchestrator | **Core** | Intent routing, multi-agent coordination |
| Scheduling | **Stella** | Calendar, recalls, waitlist, cancellation recovery |
| Billing & Revenue | **Vera** | Insurance, claims, payments, revenue cycle |
| Communication | **Relay** | Messaging, voice, campaigns, reviews |
| Clinical Support | **Aria** | Treatment plans, referrals, prescriptions, labs |
| Operations | **Otto** | Briefings, inventory, compliance, analytics |

These codenames appear in the agent activity feed, logs, and settings. They make agents feel like team members, not features.

---

## 3. Market Context & Target Audience

### The Market

- **200,000+** dental practices in the US alone
- Average practice has 2–10 operatory chairs, 5–30 employees
- Dental software market is fragmented, legacy-dominated, and ripe for disruption
- No incumbent offers a unified AI-native platform

### Primary Audience: Dental Practice Decision Makers

| Attribute | Detail |
|-----------|--------|
| **Role** | Practice owner (dentist), office manager, or operations director |
| **Practice size** | 2–10 chairs, 5–30 employees |
| **Current pain** | Paying $1,500–3,000/month across 5–10 disconnected software tools |
| **Staff pain** | Front desk overwhelmed — 60–70% of their time is repetitive tasks |
| **Tech comfort** | Uses software daily but not technical — needs it to "just work" |
| **Decision factor** | ROI-driven — will it save money, save time, increase revenue? |
| **Trust factor** | HIPAA compliance is non-negotiable. Data privacy matters deeply. |
| **Buying cycle** | 2–6 week evaluation, needs demo or trial |

### What They Currently Use (Software Stack Being Replaced)

| Tool Category | Examples | Monthly Cost |
|--------------|----------|-------------|
| Practice management | Dentrix, Eaglesoft, Open Dental, Curve Dental | $150–500 |
| Patient communications | Weave, RevenueWell | $300–400 |
| Analytics | Dental Intelligence | $300–500 |
| Clearinghouse | Various | $100–200 |
| Marketing tools | Various | $100–300 |
| Other (inventory, forms) | Various | $100–300 |
| **Total software** | | **$1,200–2,200/month** |
| Admin labor on automatable tasks | | $2,000–4,000/month equiv. |
| **Total cost of current approach** | | **$3,200–6,200/month** |

### Secondary Audience

- Early adopters who follow dental industry podcasts/conferences
- Recently opened practices looking for modern solutions from day one
- Multi-location groups evaluating unified platforms
- DSOs (Dental Service Organizations) managing multiple locations

### Future Verticals (Post-Dental)

| Vertical | Priority | Rationale |
|----------|----------|-----------|
| Veterinary | High (2nd) | Similar workflow structure, growing market, strong willingness to pay |
| Optometry | Medium | Smaller market but high software spend per practice |
| Med Spa / Aesthetics | Medium | Fast-growing vertical, less insurance complexity |
| Chiropractic | Lower | Price-sensitive market but good fit for the platform |
| Physical Therapy | Future | Complex scheduling needs, insurance-heavy |

Each vertical shares the same core platform but loads a different **Vertical Pack** (see Section 5).

---

## 4. Product Architecture — The Big Picture

### Architectural Philosophy

Omnira follows three core architectural principles:

**1. Local-First.** The primary data store is an encrypted SQLite database on the practice's machine. The application works fully offline for core operations. Cloud is for sync, backup, and AI processing — not for primary data access.

**2. Agent-Native.** The system is designed around autonomous agents, not traditional CRUD screens. The UI surfaces agent results, approvals, and controls. The database is event-sourced to give agents full audit trails. Every workflow is designed for agent execution first, human fallback second.

**3. Vertical-Agnostic Core with Vertical-Specific Packs.** The platform engine (auth, scheduling primitives, billing primitives, communication channels, analytics framework, agent runtime) is shared. Industry-specific knowledge (CDT codes, insurance rules, clinical protocols, regulatory requirements, terminology) lives in swappable configuration packs.

### High-Level Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    OMNIRA DESKTOP APP (Tauri)                │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │              PRESENTATION LAYER (React/TS)           │    │
│  │  Dashboard │ Schedule │ Patients │ Billing │ Comms   │    │
│  │  Settings  │ Reports  │ Agent Control │ Chat Panel   │    │
│  └──────────────────────┬──────────────────────────────┘    │
│                         │                                    │
│  ┌──────────────────────▼──────────────────────────────┐    │
│  │                 GATEWAY LAYER (Rust)                  │    │
│  │  Command Router │ Permission Engine │ Event Bus       │    │
│  │  Rate Limiter   │ Action Validator  │ Audit Logger    │    │
│  └──────────┬──────────────┬──────────────┬────────────┘    │
│             │              │              │                   │
│  ┌──────────▼──┐  ┌───────▼────┐  ┌──────▼─────────┐       │
│  │   AGENT     │  │ PERSISTENCE│  │  SYNC ENGINE   │       │
│  │   RUNTIME   │  │   LAYER    │  │  (Cloud Sync)  │       │
│  │             │  │            │  │                 │       │
│  │  Orchestr.  │  │  SQLite    │  │  CRDT-based    │       │
│  │  Stella     │  │  (SQLCipher│  │  conflict res.  │       │
│  │  Vera       │  │  encrypted)│  │  Background     │       │
│  │  Relay      │  │            │  │  worker         │       │
│  │  Aria       │  │  Event Log │  │                 │       │
│  │  Otto       │  │  (append)  │  │  ──► Supabase  │       │
│  └──────┬──────┘  └────────────┘  └────────────────┘       │
│         │                                                    │
└─────────┼────────────────────────────────────────────────────┘
          │
          │  API calls (encrypted, authenticated)
          ▼
┌─────────────────────────────────────────────────────────────┐
│                     CLOUD SERVICES                           │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │ Supabase │  │ AI Models│  │  Twilio  │  │ SendGrid │   │
│  │ (Sync,   │  │ Claude   │  │ (SMS,    │  │ (Email)  │   │
│  │  Auth,   │  │ Gemini   │  │  Voice)  │  │          │   │
│  │  Storage)│  │          │  │          │  │          │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
│                                                             │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐                  │
│  │ Voice AI │  │ Insurance│  │ Stripe   │                  │
│  │(Retell/  │  │ APIs     │  │(Payments)│                  │
│  │ Vapi)    │  │(Stedi)   │  │          │                  │
│  └──────────┘  └──────────┘  └──────────┘                  │
└─────────────────────────────────────────────────────────────┘
```

### Execution Model — Lane Queue Pattern

Inspired by the OpenClaw architecture, Omnira uses a **lane queue** execution model for agent tasks:

**Serial by default.** Agent tasks within the same domain execute sequentially to prevent conflicts. Stella's scheduling tasks run one at a time. Vera's billing tasks run one at a time. This eliminates race conditions (two agents trying to book the same slot, two agents modifying the same claim).

**Parallel across domains.** Different agents execute concurrently. Stella can fill a cancellation while Vera submits claims while Relay sends reminders. They share data through the event bus but don't block each other.

**Priority lanes.** Each agent has a task queue with priority levels:
- **Critical:** Patient safety issues, escalations, time-sensitive actions (cancellation recovery)
- **High:** Revenue-impacting actions (claim submission, insurance verification)
- **Normal:** Routine operations (reminders, reports, inventory checks)
- **Background:** Analytics, learning, optimization tasks

```
LANE QUEUE ARCHITECTURE

┌─── Stella Lane (Serial) ────────────────────────┐
│  [Critical: Fill cancellation] → [High: Recall] │
│  → [Normal: Optimize tomorrow] → [Bg: Learn]    │
└──────────────────────────────────────────────────┘

┌─── Vera Lane (Serial) ──────────────────────────┐
│  [High: Submit 12 claims] → [High: Verify ins.] │
│  → [Normal: Post payments] → [Bg: Analyze]      │
└──────────────────────────────────────────────────┘

┌─── Relay Lane (Serial) ─────────────────────────┐
│  [High: Emergency triage] → [Normal: Reminders] │
│  → [Normal: Review response] → [Bg: Campaign]   │
└──────────────────────────────────────────────────┘

┌─── Aria Lane (Serial) ──────────────────────────┐
│  [High: Drug interaction check] → [Normal: Lab]  │
│  → [Normal: Referral letter] → [Bg: Notes]      │
└──────────────────────────────────────────────────┘

┌─── Otto Lane (Serial) ──────────────────────────┐
│  [High: Morning briefing] → [Normal: Inventory] │
│  → [Normal: Compliance] → [Bg: Analytics]        │
└──────────────────────────────────────────────────┘

All lanes execute concurrently. Within each lane, tasks are serial.
Cross-lane coordination happens through the Event Bus.
```

**Cross-agent tasks** (e.g., "patient cancelled → fill slot → update billing → notify patient") are decomposed by the Orchestrator into subtasks dispatched to the appropriate lanes, with dependency tracking to ensure correct ordering.

→ **Deep dive:** `01-ARCHITECTURE-SYSTEM.md`

---

## 5. The Vertical-Pack Model

### Why Vertical Packs?

Omnira's core platform is **vertical-agnostic**. Scheduling, billing, communication, operations, and clinical support are universal concepts across practice-based businesses. What changes between verticals is:

- **Terminology** (patients vs. clients vs. members)
- **Procedure codes** (CDT for dental, CPT for medical, custom for veterinary)
- **Insurance rules** (dental insurance ≠ medical insurance ≠ pet insurance)
- **Clinical protocols** (dental charting ≠ veterinary charting)
- **Regulatory requirements** (OSHA specifics, DEA specifics, state board specifics)
- **Hardware integrations** (dental X-ray sensors vs. veterinary imaging)
- **Workflow variations** (dental recall cycles ≠ veterinary vaccination schedules)

### How It Works

When a practice signs up and selects their vertical during onboarding, the system loads a **Vertical Pack** — a configuration bundle that transforms the generic platform into a vertical-specific experience.

```
VERTICAL PACK STRUCTURE

omnira-core/
├── platform/                  # Shared platform code
│   ├── scheduling-engine/     # Generic scheduling primitives
│   ├── billing-engine/        # Generic billing primitives
│   ├── communication-engine/  # Channel management
│   ├── agent-runtime/         # Agent execution framework
│   ├── analytics-engine/      # Reporting framework
│   └── sync-engine/           # Local-cloud sync
│
└── verticals/
    ├── dental/                # DENTAL VERTICAL PACK
    │   ├── schema.json        # Dental-specific tables, fields, relationships
    │   ├── seed-data/         # CDT codes, insurance plan structures, form templates
    │   ├── agent-configs/     # Dental-specific system prompts per agent
    │   ├── ui-config.json     # Dental terminology, field labels, chart types
    │   ├── workflows/         # Dental-specific workflow definitions
    │   ├── compliance/        # OSHA dental, state board rules
    │   └── integrations/      # Dental lab portals, imaging (DEXIS, Schick)
    │
    ├── veterinary/            # VETERINARY VERTICAL PACK (future)
    │   ├── schema.json        # Species, breeds, vaccination schedules
    │   ├── seed-data/         # Veterinary procedure codes, common meds
    │   ├── agent-configs/     # Vet-specific agent behaviors
    │   └── ...
    │
    └── [other verticals]/     # Same pattern
```

### What the Vertical Pack Contains

**Schema Configuration:** Defines additional tables, fields, and relationships specific to the vertical. For dental: tooth charts, CDT procedure codes, insurance benefit categories (preventive/basic/major/ortho), perio charting tables, lab case tables. The core schema (patients, appointments, communications, billing, staff) is shared — the vertical pack extends it.

**Seed Data:** Pre-loaded reference data. For dental: the complete CDT procedure code library (~800 codes), common insurance plan structures, ADA-compliant form templates, dental-specific communication templates, standard scheduling block types (hygiene 60min, restorative 90min, emergency 30min, etc.).

**Agent System Prompts:** Each agent gets vertical-specific instructions injected into their system prompt at runtime. Vera knows CDT codes and dental claim rules. Stella understands chair types and procedure durations. Relay uses dental-appropriate language in patient messages. Aria knows dental clinical protocols.

**UI Configuration:** Labels, terminology, chart types, and field visibility rules. "Patient" vs. "Client." "Operatory" vs. "Exam Room." Dental chart (tooth map) vs. veterinary body map. This is purely configuration — the UI components are shared.

**Workflow Definitions:** Vertical-specific workflow sequences. Dental recall is every 6 months for hygiene. Veterinary recall follows vaccination schedules. The workflow engine is shared; the definitions are vertical-specific.

### The Onboarding Router

During onboarding, the user selects their vertical:

```
┌──────────────────────────────────────────┐
│         Welcome to Omnira                │
│                                          │
│   What type of practice do you run?      │
│                                          │
│   [✓] Dental Practice                    │
│   [ ] Veterinary Clinic    (Coming Soon) │
│   [ ] Optometry Practice   (Coming Soon) │
│   [ ] Med Spa / Aesthetics (Coming Soon) │
│   [ ] Chiropractic         (Coming Soon) │
│                                          │
│              [Continue →]                │
└──────────────────────────────────────────┘
```

Selecting "Dental Practice" triggers:
1. Load dental schema extensions into the local SQLite database
2. Insert dental seed data (CDT codes, templates, defaults)
3. Configure all 5 agents with dental-specific system prompts
4. Set UI labels and terminology to dental mode
5. Pre-configure scheduling templates for common dental appointment types
6. Load dental compliance checklists (OSHA, HIPAA dental-specific)

The practice is now running Omnira for Dental. The underlying platform is identical — only the configuration differs.

### Scaling to New Verticals

Adding a new vertical requires:
1. Research the vertical's workflows, codes, insurance rules, and regulatory requirements
2. Build the schema extensions, seed data, and agent configurations
3. Design any vertical-specific UI components (e.g., tooth chart for dental, body map for veterinary)
4. Test with pilot practices in that vertical
5. Ship as a new Vertical Pack — no core platform changes needed

**Estimated effort per new vertical:** 2–4 months, primarily research and content (not code).

→ **Deep dive:** Agent config specifics in `10-AGENT-ORCHESTRATOR.md` through `15-AGENT-OPERATIONS.md`

---

## 6. The Five-Agent System

### Overview

Omnira's intelligence is distributed across five specialized agents, each owning a distinct operational domain. They are coordinated by a sixth entity — the Orchestrator (Omnira Core) — which routes requests, decomposes complex tasks, and manages cross-agent workflows.

```
                    ┌──────────────┐
                    │  OMNIRA CORE │
                    │ (Orchestrator│
                    │   / Router)  │
                    └──────┬───────┘
                           │
            ┌──────┬───────┼───────┬──────┐
            ▼      ▼       ▼       ▼      ▼
        ┌───────┐┌──────┐┌──────┐┌──────┐┌──────┐
        │Stella ││ Vera ││Relay ││ Aria ││ Otto │
        │Sched. ││Bill. ││Comms ││Clin. ││ Ops  │
        └───────┘└──────┘└──────┘└──────┘└──────┘
            │      │       │       │      │
            └──────┴───────┴───────┴──────┘
                    │
              SHARED DATA LAYER
         (SQLite + Event Bus + Memory)
```

### Agent 1: Stella — Scheduling Agent

**Tagline:** "Your calendar, optimized 24/7."

**Owns:** The entire appointment calendar — booking, recalls, cancellations, waitlist, provider optimization, no-show prediction.

**Key Capabilities:**
- **Smart Booking:** Books considering procedure type, duration, provider skills, equipment needs, patient preferences, and insurance status. Suggests optimal slots — doesn't just show a blank calendar.
- **Cancellation Recovery:** The moment a cancellation hits, texts 3–5 waitlist patients simultaneously. First to confirm gets the slot. Target: 80%+ fill rate vs. industry average of 10–20%.
- **Recall Management:** Manages the entire recall system (6-month hygiene, perio maintenance). Sends scheduling link → reminder → personal message. Tracks overdue patients and escalates. A well-run recall system = $200K+/year.
- **No-Show Prediction:** Tracks patterns per patient. Confirmation sequences at 7 days, 48 hours, 24 hours. After 3 no-shows, flags for deposit requirement. Predicts no-show likelihood and suggests double-booking high-risk slots.
- **Schedule Optimization:** Balances daily schedule — high-production procedures during peak hours, buffer time between complex cases, emergency slots held open, staff efficiently utilized across chairs.
- **Waitlist Management:** Automated priority waitlist. When slots open, patients contacted instantly. Self-select from available times via link. No phone tag.

**Impact:** 15–25% increase in chair utilization. $50–150K in saved cancellation revenue annually.

→ **Deep dive:** `11-AGENT-SCHEDULING.md`

### Agent 2: Vera — Billing & Revenue Agent

**Tagline:** "Every dollar accounted for. Every claim submitted same-day."

**Owns:** The entire revenue cycle — from insurance verification through final patient payment.

**Key Capabilities:**
- **Insurance Verification:** Automatically verifies eligibility and benefits for every patient before every visit. Pulls plan details, annual max + used, deductible + met, coverage % by category, waiting periods, frequency limitations, coordination of benefits. Re-verifies 48 hours before.
- **Treatment Estimates:** Generates accurate cost breakdowns with procedure codes, fees, coverage %, insurance payment, patient responsibility, and payment plan options. Presented before treatment — no billing surprises.
- **Same-Day Claims:** After every visit: compiles claim (CDT codes, tooth numbers, surfaces, narratives), validates against payer-specific rules, attaches documentation, submits electronically. Same-day, not batched weekly.
- **Denial Management:** Reads denial codes, categorizes the issue, acts. Correctable denials: fixed and resubmitted automatically. Complex denials: appeal packages prepared with documentation and queued for staff review. Tracks outcomes and learns per payer. Most practices write off 5–10% of production — Vera recovers it.
- **Claim Tracking:** Real-time dashboard — submitted, pending, paid, denied, appealed. Flags claims not adjudicated within expected timeframe. Posts payments and reconciles.
- **Patient Billing Cycle:** After insurance pays: calculates balance, sends statement, offers online payment, follows up on configurable schedule (30/60/90 days), flags for collections. Fully automated.
- **Predetermination & Pre-Auth:** For major procedures: submits predetermination, tracks response, updates treatment plan, notifies patient and scheduling.
- **Payment Plans:** Configurable plans, recurring charges, reminders, missed payment handling.

**Impact:** 40–60% reduction in claim rejections. $30–80K recovered annually from denials. Claims paid 2–3 weeks faster.

→ **Deep dive:** `12-AGENT-BILLING.md`

### Agent 3: Relay — Communication Agent

**Tagline:** "Every patient touchpoint, handled."

**Owns:** All inbound and outbound patient communication across every channel — text, email, phone, portal.

**Key Capabilities:**
- **AI Phone System:** Handles routine calls (hours/directions, scheduling, confirmations, refill requests, insurance questions). Routes complex calls to staff with context. Transcript and summary for every call. Handles 50–70% of call volume without a human.
- **Appointment Reminders:** Configurable sequence — 7 days (email), 48 hours (text), 24 hours (final + outstanding forms). Unconfirmed patients flagged for staff.
- **Post-Procedure Follow-Up:** Care instructions per procedure type, check-in at 24–48 hours, triage complications to clinical team, satisfaction survey.
- **Review Management:** Satisfaction check after visits. Happy patients → Google review link. Unhappy → routed to office manager privately. Drafts responses to all online reviews within 2 hours.
- **Reactivation Campaigns:** For patients inactive 12+ months: reminder → offer → personal message → after 3 attempts, marked inactive.
- **Unscheduled Treatment Follow-Up:** Tracks diagnosed but unscheduled treatment. Follows up at 1 week, 1 month, 3 months, 6 months. Mid-size practices have $100–300K in unscheduled treatment at any time.
- **Birthday & Milestones:** Birthdays, anniversaries, cavity-free milestones. Builds loyalty.
- **Emergency Triage:** Triages emergency contacts using clinical protocols. Immediate care instructions, emergency slots, on-call provider alerts.

**Impact:** 50–70% reduction in phone volume. $50–200K recovered from unscheduled treatment annually.

→ **Deep dive:** `13-AGENT-COMMUNICATION.md`

### Agent 4: Aria — Clinical Support Agent

**Tagline:** "Your clinical team's documentation backbone."

**Owns:** Treatment planning, referrals, prescriptions, lab coordination, clinical documentation.

**Key Capabilities:**
- **Treatment Plan Presentation:** Formats plans into patient-friendly documents — clear language, cost estimates with coverage, phased plans, visual showing affected teeth, financing options.
- **Unscheduled Treatment Tracking:** Real-time list of all diagnosed but unscheduled treatment. Feeds data to Relay for follow-up sequences. Tracks conversion rates.
- **Referral Management:** End-to-end — generates letter, sends to specialist with records/X-rays, notifies patient, tracks whether patient scheduled, follows up, requests and files specialist's report.
- **E-Prescriptions:** Allergy/interaction checking, e-prescription generation, pharmacy routing, DEA compliance for controlled substances, refill request routing.
- **Lab Case Management:** Lab Rx generation, digital impression transmission, case tracking, delivery alerts, proactive rescheduling if delayed.
- **Clinical Notes Assistance:** Auto-populate by CDT code, voice-to-text, flag charting inconsistencies, patient-friendly visit summaries.
- **Medical History Flagging:** Flags blood thinners, bisphosphonates, diabetes, heart conditions (premedication), allergies, pregnancy. Prominent chart display.

**Impact:** Higher treatment acceptance. Closed referral loops. Safer prescribing. $50–200K unscheduled treatment recovered.

→ **Deep dive:** `14-AGENT-CLINICAL.md`

### Agent 5: Otto — Operations Agent

**Tagline:** "Your practice intelligence, always on."

**Owns:** Daily operations, inventory, compliance, HR, reporting, analytics.

**Key Capabilities:**
- **Morning Briefing:** Generated overnight, ready by 7 AM. Today's schedule with patient notes, production goal vs. likely production, unconfirmed patients, lab cases expected, outstanding tasks, AR items, birthday patients. Replaces 20–30 min of manual prep.
- **Inventory Management:** Usage-based tracking, predictive ordering (10 crowns next week → ensure materials), auto-reorder at thresholds, vendor price comparison, expiration tracking, cost analysis vs. industry benchmarks.
- **Compliance Monitoring:** Tracks every deadline — HIPAA training, OSHA certs, licenses, DEA registration, CE requirements, radiology certs, autoclave testing. Alerts at 90/60/30 days.
- **Staff Management:** Staff schedules paired with providers, PTO tracking, payroll data prep, performance reports per provider/hygienist. Integrates with ADP, Gusto, QuickBooks Payroll.
- **Daily/Monthly Reporting:** Daily dashboard (production vs. goal, collections, patients seen, open chair time). Monthly comprehensive report (production, new patients, recall effectiveness, case acceptance, AR aging, supply costs, per-provider metrics). Would cost $2–5K/month from a consultant.
- **Predictive Analytics:** Revenue forecasting, patient attrition prediction, optimal scheduling patterns, insurance mix profitability, staffing needs.
- **Benchmarking:** Practice KPIs vs. industry benchmarks and (eventually) anonymized platform-wide data.
- **Accounting Integration:** Syncs with QuickBooks, Xero — daily production/collection entries, expense categorization, payroll data, AR reconciliation.
- **End-of-Day Processing:** Automatic — reconcile payments, identify unsubmitted claims, production report, next-day briefing, final confirmations.

**Impact:** Morning prep: 5 min instead of 30. Never miss compliance deadlines. Real-time practice visibility.

→ **Deep dive:** `15-AGENT-OPERATIONS.md`

---

## 7. The Orchestrator — Omnira Core

### Purpose

The Orchestrator is the routing layer between user intent and agent execution. When a user types a question in the chat panel, speaks a voice command, or when a system event triggers (cancellation, incoming call, EOB received), the Orchestrator:

1. **Classifies the intent** — What domain does this belong to? What action is needed?
2. **Routes to the right agent(s)** — Simple requests go to one agent. Complex requests are decomposed into subtasks.
3. **Manages cross-agent workflows** — A cancellation triggers Stella (fill slot) → Vera (update billing) → Relay (notify patient). The Orchestrator coordinates.
4. **Injects shared context** — Before an agent executes, the Orchestrator loads relevant patient data, practice preferences, and conversation history.
5. **Enforces permissions** — Checks the action against the practice's permission configuration before allowing execution.

### Cross-Agent Workflow Examples

**Cancellation Recovery:**
```
Event: Patient cancels 2:30 PM appointment
  │
  ├─► Orchestrator identifies: scheduling + billing + communication impact
  │
  ├─► Stella: Find waitlist candidates, send texts, fill slot
  │     └─► Result: Maria Gonzalez confirmed
  │
  ├─► Vera: Cancel original patient billing prep, set up new patient billing
  │
  └─► Relay: Send confirmation to Maria, send "sorry to miss you" to canceller
```

**New Patient Intake:**
```
Event: New patient books online
  │
  ├─► Stella: Confirm optimal slot, book appointment
  │
  ├─► Relay: Send welcome email + digital intake forms link
  │
  ├─► Vera: Begin insurance verification upon form submission
  │
  ├─► Aria: Flag medical history items when forms complete
  │
  └─► Otto: Update new patient metrics, add to morning briefing
```

**Provider Calls in Sick:**
```
Event: Office manager marks provider as absent
  │
  ├─► Stella: Identify all affected appointments, find alternatives
  │     ├── Moveable to another provider → reschedule
  │     └── Must cancel → release slots, contact waitlist for other providers
  │
  ├─► Relay: Contact all affected patients with options
  │
  ├─► Otto: Adjust staff scheduling, update production forecasts
  │
  └─► Vera: Update any pre-authorizations affected by date changes
```

→ **Deep dive:** `10-AGENT-ORCHESTRATOR.md`

---

## 8. The Named AI Assistant

### The Concept

Every practice gets to **name their AI assistant** during onboarding. This is the unified conversational interface — the single personality that represents all five agents working underneath. When the office manager opens the chat panel and says "Hey Jarvis, how many new patients did we get this month?" — the Orchestrator routes that to Otto, gets the answer, and responds as "Jarvis."

### Why This Matters

- **Emotional ownership.** "Our AI is named Luna" creates attachment that "our practice management software" never will.
- **Switching cost.** Once a practice has spent weeks teaching the system their preferences and calling it by name, switching feels like losing a team member.
- **Word-of-mouth marketing.** "We have an AI named Jarvis running our whole practice" is a story people tell at conferences and dinner parties.
- **Competitive differentiation.** Dentrix doesn't have a personality. Eaglesoft doesn't have a name.

### Implementation

**During onboarding (after practice setup):**

```
┌──────────────────────────────────────────┐
│     Name Your AI Assistant               │
│                                          │
│  This is the AI that ties all five       │
│  agents together — your conversational   │
│  interface to the entire system.         │
│                                          │
│  Name: [________________________]        │
│                                          │
│  Suggestions: Luna, Atlas, Sage,         │
│  Iris, Nova, Echo                        │
│                                          │
│  Default: Omnira Assistant               │
│                                          │
│              [Continue →]                │
└──────────────────────────────────────────┘
```

**Technical implementation:** The name is stored as a practice setting and injected as a variable into the system prompt. Costs nothing to implement — it's a string replacement — but creates massive differentiation.

### Voice Conversation Roadmap

| Version | Capability | Implementation |
|---------|-----------|----------------|
| **v1 (Launch)** | Text-based chat only. Named assistant works via typed messages in the slide-out panel. | LLM API calls. Cheap. |
| **v1.5 (3–6 months)** | In-app voice input/output. Talk to your AI while moving around the office. | Web Speech API (free) for STT, ElevenLabs/PlayHT for TTS. Different from phone system — this is in-app, much cheaper. |
| **v2 (6–12 months)** | Choose a voice personality. 3–5 voice options. Consistent voice across in-app and phone system. | Full voice identity. |

---

## 9. Agent Autonomy & Permission Framework

### The Three-Tier Model

Every agent action in Omnira operates within a three-tier permission framework that the practice owner configures:

| Tier | What It Means | Examples |
|------|--------------|----------|
| 🟢 **Autonomous** | Agent acts without asking. Practice pre-approved these actions. | Send reminders, verify insurance, submit clean claims, reorder supplies at threshold, send recall messages, post standard payments |
| 🟡 **Supervised** | Agent prepares the action and queues it for human approval before execution. | Appeal denied claims, send collections notices, respond to negative reviews, reschedule patients due to provider absence, adjust treatment estimates, order from new vendors |
| 🔴 **Escalated** | Agent cannot handle the situation. Creates a task with full context for a human to resolve. | Patient disputes requiring judgment, clinical questions, legal/liability issues, insurance situations with no clear resolution, unhappy patients needing personal attention |

### How It Works

```
User Action or System Event
        │
        ▼
┌─────────────────┐
│  Agent decides   │
│  what to do      │
│  (AI inference)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│  PERMISSION      │     ┌── 🟢 Autonomous → Execute immediately, log result
│  CHECK           │─────┤
│  (Deterministic) │     ├── 🟡 Supervised → Queue for approval, notify staff
└─────────────────┘     │
                         └── 🔴 Escalated → Create task card, alert team
```

The permission check is **deterministic, not AI-driven**. The AI decides *what* to do; a rule engine checks *whether it's allowed*. This separation is critical for compliance and predictability.

### Configuration

During onboarding, the system presents default permission settings (conservative — most actions supervised). The practice owner reviews and adjusts. At any point, they can promote actions from Supervised to Autonomous as they gain confidence, or demote actions if something goes wrong.

Each action has a unique permission key:
```
stella.appointment.book          → Autonomous
stella.appointment.cancel        → Supervised
stella.waitlist.contact           → Autonomous
vera.claim.submit_clean          → Autonomous
vera.claim.appeal                → Supervised
vera.collections.send_notice     → Supervised
relay.reminder.send              → Autonomous
relay.review.respond             → Supervised
relay.reactivation.send          → Autonomous
aria.prescription.generate       → Supervised (always — clinical)
otto.inventory.reorder           → Autonomous
otto.briefing.generate           → Autonomous
```

### The Training Period

For the first 2 weeks after onboarding, ALL agent actions default to Supervised mode regardless of configuration. This serves two purposes:
1. Staff learns how the agents think — they see every recommendation and approve/reject
2. Agents learn practice-specific patterns — approval/rejection data tunes future decisions

After 2 weeks, the system generates a **Readiness Report** showing agent accuracy rates and recommending which actions to promote to Autonomous. The practice owner reviews and decides.

---

## 10. Agent Training & Adaptation

### How Agents Learn

Agents don't have a static behavior set. They adapt to each practice through multiple mechanisms:

**1. Practice Configuration (Explicit)**
Set during onboarding and adjustable anytime. Provider preferences, scheduling rules, communication tone, billing thresholds, inventory reorder points. This is direct instruction.

**2. Feedback Loop (Supervised Actions)**
Every time a staff member approves, rejects, or modifies a supervised agent action, that decision is logged and used to tune future behavior. If the office manager consistently rejects Relay's draft response to 3-star reviews and edits them to be warmer, the agent learns to draft warmer responses.

**3. Outcome Tracking (Autonomous Actions)**
For autonomous actions, agents track outcomes. Did the cancellation fill? Did the claim get accepted? Did the patient respond to the recall? Outcome data feeds into the agent's decision-making for future similar situations.

**4. Pattern Recognition (Background)**
Agents continuously analyze practice data to identify patterns:
- Which patients tend to no-show (and should be double-booked or confirmed more aggressively)
- Which insurance payers are slow to adjudicate (and should be followed up earlier)
- Which times of day have the most cancellations (and should hold emergency slots)
- Which recall messages get the best response rates
- Which treatment plan formats lead to higher acceptance

**5. Practice Memory (Curated Knowledge)**
Each practice has a `PRACTICE_MEMORY.md`-style curated knowledge store that accumulates over time:
- "Dr. Martinez prefers to see implant patients before 11 AM"
- "Delta Dental PPO always requires X-rays with crown claims"
- "Mrs. Johnson's daughter calls for her because Mrs. Johnson is hard of hearing"
- "The Henry Schein rep's name is Greg, he gives 10% on bulk composite orders"

This memory is built from agent observations and staff corrections, reviewed periodically, and injected into agent context when relevant.

### Memory Architecture (Summary)

Three tiers of memory:

| Tier | Type | Storage | Use |
|------|------|---------|-----|
| **Working Memory** | Current task context, active conversation | In-memory (RAM) | Immediate agent execution |
| **Structured Memory** | Practice config, patient records, schedules, claims | SQLite (local) + Supabase (cloud) | Queried per-task as needed |
| **Semantic Memory** | Curated practice knowledge, agent learnings, embeddings | SQLite-vec (local) + pgvector (cloud) | Similarity search for relevant context |

→ **Deep dive:** `02-ARCHITECTURE-MEMORY.md`

---

## 11. Technical Stack — Every Layer

### Desktop Application

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **App framework** | Tauri 2.x (Rust backend + web frontend) | Lightweight (~10MB vs. 200MB+ Electron), native performance, Rust safety, secure IPC |
| **Frontend** | React 19 + TypeScript | Ecosystem maturity, component library availability, hiring pool |
| **State management** | Zustand + React Query | Lightweight, performant, good async/cache patterns |
| **Styling** | Tailwind CSS + Radix UI primitives | Rapid development, accessible components, consistent design |
| **Routing** | TanStack Router | Type-safe, file-based, modern |
| **Build** | Vite | Fast HMR, good Tauri integration |

### Local Data Layer

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Primary database** | SQLite 3.x (via rusqlite) | Fast, zero-config, single-file, perfect for local-first |
| **Encryption** | SQLCipher (AES-256) | HIPAA-compliant encryption at rest for PHI |
| **Vector search** | sqlite-vec extension | Semantic search for agent memory without separate service |
| **Full-text search** | SQLite FTS5 | Fast keyword search across patient records, notes, communications |
| **Event store** | Append-only SQLite tables | Event sourcing for audit trail and agent replay |
| **File storage** | Local filesystem (encrypted directory) | X-rays, documents, attachments |

### Cloud Layer

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Cloud database** | Supabase (PostgreSQL) | HIPAA-compliant (Pro plan), includes auth/storage/realtime/edge functions |
| **Cloud vector search** | pgvector (via Supabase) | Same embeddings, cloud-side search for mobile and cross-device |
| **Auth** | Supabase Auth | Included, handles MFA, SSO, role management |
| **File storage** | Supabase Storage | X-ray backups, document sync, encrypted |
| **Realtime** | Supabase Realtime | Live sync between devices, agent status updates |
| **Edge functions** | Supabase Edge Functions | Webhook handlers, background jobs, API adapters |

### AI Layer

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Tier 1 — Complex tasks** | Claude Sonnet 4.5 / Opus 4.5 | Best for agent orchestration, tool use, structured output, nuanced reasoning |
| **Tier 2 — Routine tasks** | Gemini 2.0 Flash / GPT-4o-mini | Cost-effective for classification, message generation, data parsing |
| **Voice AI** | Retell.ai (primary) or Vapi | HIPAA-compliant phone handling, simpler pricing than Vapi |
| **In-app voice** | Web Speech API + ElevenLabs/PlayHT | Free STT (browser-native), paid TTS for voice responses (v1.5) |
| **Embeddings** | Voyage AI or OpenAI text-embedding-3-small | For semantic memory and similarity search |

### Communication Layer

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **SMS** | Twilio | Industry standard, reliable, HIPAA-compliant |
| **Email** | SendGrid | Free tier covers MVP (100/day), scales well |
| **Voice infrastructure** | Twilio + Retell.ai | Phone numbers + AI conversation |

### Insurance & Payments

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Insurance verification** | Stedi (primary) | Free test APIs, HIPAA-ready, X12 support |
| **Insurance backup** | pVerify or Onederful | Per-verification pricing, no upfront costs |
| **Payment processing** | Stripe | PCI-compliant, zero upfront, subscription billing for Omnira itself |

### Mobile

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **Staff mobile app** | React Native | Shared codebase iOS/Android, notification-driven, v1 requirement |
| **Patient web pages** | Next.js or SvelteKit (hosted) | Mobile-optimized web pages for forms, check-in, payments — no patient app download needed |

### DevOps & Monitoring

| Component | Technology | Rationale |
|-----------|-----------|-----------|
| **CI/CD** | GitHub Actions | Tauri builds for Windows/macOS/Linux |
| **Crash reporting** | Sentry | Cross-platform error tracking |
| **Analytics** | PostHog (self-hosted option) | Product analytics, HIPAA-compatible |
| **Logging** | Local logs + cloud aggregation | Agent action logs, system health |

→ **Deep dive:** `01-ARCHITECTURE-SYSTEM.md`, `40-DEPLOYMENT.md`

---

## 12. System Architecture — Three Layers

### Layer 1: Gateway

The Gateway is the Rust-native layer that sits between the UI and everything else. It is the single point of control.

**Responsibilities:**
- **Command routing:** Receives commands from the UI (book appointment, submit claim, send message) and routes to the appropriate handler
- **Permission enforcement:** Checks every agent action against the configured permission level before allowing execution
- **Action validation:** Deterministic validation rules (is this CDT code valid? Does this patient exist? Is this slot available?) run before AI inference
- **Event bus:** Publishes events that agents and UI subscribe to (appointment_cancelled, claim_denied, patient_checked_in)
- **Rate limiting:** Prevents runaway agent loops or excessive API calls
- **Audit logging:** Every action, every access to PHI, every agent decision logged with timestamp, actor, and context

**Implementation:** Rust (Tauri backend). The Gateway uses tokio channels for the local event bus. Events are serialized as JSON and written to the append-only event log in SQLite.

### Layer 2: Agent Runtime

The Agent Runtime manages agent lifecycle, task queuing, and execution.

**Responsibilities:**
- **Task queue management:** Each agent has a priority queue (the lane queue pattern). Tasks are enqueued by the Gateway or by other agents.
- **Agent lifecycle:** Agents can be active, paused, or in training mode. The runtime manages transitions.
- **LLM orchestration:** Manages API calls to AI providers, handles retries, fallbacks, and model routing (Tier 1 vs. Tier 2).
- **Tool execution:** Agents call tools (functions that interact with the database, APIs, or file system). The runtime executes tools in a sandboxed context.
- **Context assembly:** Before each agent inference, the runtime assembles the context window — system prompt, practice config, relevant patient data, memory, and the current task.

**Implementation:** TypeScript/Rust hybrid. The orchestration logic runs in TypeScript (for LLM SDK compatibility and rapid iteration). Tool execution and database access happen through Rust via Tauri commands (for performance and safety).

### Layer 3: Persistence

The Persistence layer manages all data storage and retrieval.

**Responsibilities:**
- **SQLite management:** Schema migrations, query execution, connection pooling
- **Event store:** Append-only event log for every state change (event sourcing)
- **Materialized views:** Pre-computed aggregations for dashboards and reports (production totals, AR aging, recall metrics)
- **Sync engine:** CRDT-based conflict resolution for local↔cloud sync
- **Backup:** Encrypted local backups + cloud backup via Supabase
- **File management:** Encrypted local file storage for documents, X-rays, attachments

→ **Deep dive:** `01-ARCHITECTURE-SYSTEM.md`, `03-ARCHITECTURE-DATABASE.md`

---

## 13. Local-First Data Architecture

### Why Local-First?

This is one of Omnira's strongest competitive differentiators and a critical selling point for healthcare practices.

**1. HIPAA advantage.** Patient data lives on the practice's own machine, encrypted. Not solely in a third-party cloud. This is a genuine compliance advantage that resonates with privacy-conscious practices and gives Omnira a selling point that pure-cloud competitors cannot match.

**2. Performance.** Local SQLite queries return in microseconds. No network latency for viewing schedules, patient records, or running reports. The app feels instant.

**3. Offline resilience.** Dental offices have internet outages. Core operations (scheduling, viewing records, check-in/check-out, payment processing via offline queue) continue working without internet. Agents pause and resume when connectivity returns.

**4. Data ownership.** Practices own their data. Always exportable, never locked in. If they cancel Omnira, they get a full export. This builds trust.

### How It Works

```
┌────────────────────────────────────────────────────┐
│                  PRACTICE MACHINE                   │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │  OMNIRA APP (Tauri)                           │  │
│  │                                               │  │
│  │  ┌──────────────┐  ┌──────────────────────┐  │  │
│  │  │ SQLite DB    │  │ Encrypted File Store │  │  │
│  │  │ (SQLCipher)  │  │ (X-rays, docs, etc.) │  │  │
│  │  │              │  │                      │  │  │
│  │  │ • Patients   │  └──────────────────────┘  │  │
│  │  │ • Appts      │                            │  │
│  │  │ • Claims     │  ┌──────────────────────┐  │  │
│  │  │ • Comms      │  │ Event Log            │  │  │
│  │  │ • Clinical   │  │ (append-only)        │  │  │
│  │  │ • Settings   │  │                      │  │  │
│  │  │ • Memory     │  │ Every state change   │  │  │
│  │  └──────┬───────┘  │ recorded here        │  │  │
│  │         │          └──────────────────────┘  │  │
│  └─────────┼────────────────────────────────────┘  │
│            │                                        │
└────────────┼────────────────────────────────────────┘
             │
             │ Encrypted sync (TLS 1.3)
             │ Background worker
             │ CRDT conflict resolution
             ▼
┌────────────────────────────────────────────────────┐
│                  SUPABASE (Cloud)                    │
│                                                     │
│  • Encrypted backup of all data                     │
│  • Cross-device access (second workstation, mobile)  │
│  • AI agent processing (for computations too heavy   │
│    for local, or when local app is closed)           │
│  • Mobile app data source                            │
│  • Auth management                                   │
└────────────────────────────────────────────────────┘
```

### Data Storage Tiers

| Tier | Storage | Contents | Access Pattern |
|------|---------|----------|---------------|
| **Hot** | SQLite (local, in-memory cache) | Today's schedule, active patients, current claims, recent comms | Sub-millisecond reads, write-through to disk |
| **Warm** | SQLite (local, on-disk) | All patient records, historical appointments, billing history, agent memory | Millisecond reads |
| **Cold** | Supabase (cloud) + local archive | Inactive patients (3+ years), archived records, old imaging | Seconds (cloud fetch), used for long-term analytics |

### Offline Behavior

When internet connectivity is lost:

| Capability | Offline Status |
|-----------|---------------|
| View schedule | ✅ Full functionality |
| View patient records | ✅ Full functionality |
| Check in/check out patients | ✅ Full functionality |
| Book/cancel appointments | ✅ Queued for sync |
| Process payments | ✅ Offline queue, reconcile on reconnect |
| Clinical notes | ✅ Full functionality |
| Agent actions | ⏸ Paused — resume on reconnect |
| AI chat assistant | ⏸ Paused — resume on reconnect |
| Phone system (cloud-based) | ❌ Falls back to practice's regular phone line |
| Insurance verification | ⏸ Queued — runs on reconnect |
| Claim submission | ⏸ Queued — runs on reconnect |

→ **Deep dive:** `03-ARCHITECTURE-DATABASE.md`

---

## 14. Cloud Sync & Multi-Device Strategy

### Sync Architecture

Omnira uses a **CRDT-based** (Conflict-free Replicated Data Type) sync strategy. Each workstation in a practice has its own local SQLite database. Changes propagate to the cloud and then to other workstations.

**Sync triggers:**
- Immediate: Patient check-in, appointment changes, payment processing
- Batched (every 30 seconds): Notes, communications, routine updates
- Scheduled (hourly): Analytics, reports, memory updates
- On-demand: Full sync on app launch

**Conflict resolution:**
- **Last-write-wins** for most fields (e.g., patient phone number updated on two machines)
- **Merge** for append-only data (e.g., communication logs — both entries kept)
- **Alert** for conflicting appointment bookings (same slot booked on two machines simultaneously — rare but possible)

### Multi-Workstation Setup

A typical practice has 3–8 workstations (front desk, each operatory, office manager, billing). Each runs the Omnira desktop app with its own local database, synced through Supabase.

```
Workstation 1         Workstation 2         Workstation 3
(Front Desk)          (Operatory 1)         (Office Manager)
     │                     │                      │
     └─────────┬───────────┘──────────────────────┘
               │
          Supabase (Cloud)
               │
     ┌─────────┴───────────┐
     │                     │
Staff Mobile App     Patient Web Pages
```

### Multi-Location (Future)

For practices with multiple offices, each location operates as an independent installation with its own local database. Cross-location sync happens through the cloud layer, enabling:
- Shared patient records across locations
- Centralized reporting for the practice owner
- Per-location scheduling and billing
- Unified communication history

→ **Deep dive:** `01-ARCHITECTURE-SYSTEM.md`

---

## 15. AI Model Strategy

### Multi-Model Architecture

Omnira uses a **model-agnostic abstraction layer** that routes tasks to the optimal AI provider based on complexity, cost, and capability requirements. No single-vendor lock-in.

```
┌──────────────────────────────────────┐
│          MODEL ROUTER                │
│                                      │
│  Task complexity? ──┬── Complex ───► Tier 1 (Claude)
│                     │
│                     ├── Routine ───► Tier 2 (Gemini Flash)
│                     │
│                     └── Voice ────► Tier 3 (Retell/Vapi)
└──────────────────────────────────────┘
```

### Tier 1 — Complex Agent Tasks (Claude Sonnet 4.5 / Opus 4.5)

Used for tasks requiring nuanced reasoning, structured output, and reliable tool use:
- Insurance claim analysis and denial appeal generation
- Treatment plan presentation generation (patient-friendly language)
- Complex scheduling optimization (multi-constraint problem solving)
- Patient communication drafting (tone-sensitive, error-critical)
- Clinical decision support (medical history flagging, drug interactions)
- Orchestrator routing for ambiguous or multi-step requests
- Ad-hoc analytics queries ("which patients have overdue treatment worth more than $1,000?")

**Why Claude:** Best-in-class for structured output, tool use, following complex instructions, and agentic workflows. BAA available. US-based.

### Tier 2 — Routine Tasks (Gemini 2.0 Flash / GPT-4o-mini)

Used for high-volume, lower-complexity tasks where cost matters:
- Appointment confirmation message generation
- Basic data extraction and parsing (insurance cards, forms)
- Simple classification (routing patient inquiries by type)
- Notification text generation
- Data validation and error checking
- Document summarization

**Why Gemini Flash:** Extremely cost-effective ($0.10/M tokens), fast, sufficient quality for these tasks.

### Tier 3 — Voice AI (Specialized Provider)

Phone calls require specialized voice infrastructure:
- Speech-to-text + text-to-speech + real-time conversation management
- Phone number provisioning and call routing
- HIPAA-compliant call recording and transcription

**Primary choice:** Retell.ai (simpler pricing, HIPAA in enterprise plan)  
**Alternative:** Vapi ($0.05/min platform + provider costs, HIPAA at $1,000/mo add-on)  
**Underlying LLM brain:** Claude or GPT (configurable)

### Cost Optimization

The model router doesn't just route by capability — it optimizes for cost:
- Before calling Tier 1, check if Tier 2 can handle it (classification step)
- Cache common responses (insurance verification results, standard messages)
- Batch similar requests (submit 15 claims in one inference call, not 15 separate calls)
- Use structured output modes to reduce token waste
- Pre-compute during off-peak hours (overnight processing uses cheaper compute)

### HIPAA Requirements for AI Providers

All AI providers must:
- Offer a BAA (Business Associate Agreement)
- Not train on customer data
- Encrypt data in transit and at rest
- Be US-based or have US data residency

**Currently qualified:** Anthropic (Claude), Google (Gemini via GCP), OpenAI (Enterprise), Retell.ai (Enterprise)  
**Not qualified:** Moonshot AI (Kimi K2.5) — Beijing-based, no BAA, no HIPAA path. Impressive benchmarks but disqualified for US healthcare.

→ **Deep dive:** `31-API-EXTERNAL.md`

---

## 16. Memory Architecture

### Overview

Agent memory is what makes Omnira get smarter over time for each practice. Without memory, every agent interaction starts from zero. With memory, agents accumulate knowledge about the practice, its patients, its patterns, and its preferences.

### Three Memory Tiers

**Working Memory (Ephemeral)**
- Current task context, active conversation history, in-progress workflows
- Lives in RAM during execution
- Discarded after task completion (but outcomes are logged)
- Size: Whatever fits in the LLM context window

**Structured Memory (Persistent, Queryable)**
- All data in the SQLite database: patient records, appointments, claims, communications, settings
- Queried by agents per-task using SQL (or via tools that abstract SQL)
- This is the "source of truth" for all operational data
- Updated through the event-sourced write path

**Semantic Memory (Persistent, Searchable)**
- Curated practice knowledge embedded as vectors
- Agent learnings and pattern recognition results
- Natural language facts about the practice, its patients, and its operations
- Stored in sqlite-vec (local) and pgvector (cloud)
- Searched via hybrid retrieval: vector similarity + keyword (FTS5) + recency weighting

### Semantic Memory Examples

```
Practice-Level Knowledge:
- "Dr. Martinez prefers crown preps before 11 AM"
- "Delta Dental PPO requires pre-authorization for implants"  
- "Our lab (Valley Dental Lab) takes 10 business days for crowns"
- "Morning appointments have 15% higher no-show rate than afternoon"
- "Our best reactivation message mentions the specific hygienist by name"

Patient-Level Knowledge:
- "Mrs. Johnson prefers text over email and is hard of hearing on the phone"
- "Mr. Chen always brings his wife to translate — speak with her directly"
- "Sarah Davis has a needle phobia — alert clinical team before procedures"
- "The Williams family (3 patients) always books together on Tuesdays"
```

### Memory Lifecycle

1. **Observation:** Agent notices something during task execution (e.g., a patient's insurance always requires X-rays with crown claims)
2. **Logging:** Observation written to JSONL audit log with timestamp and context
3. **Compaction:** Background process periodically reviews logs and extracts durable knowledge
4. **Embedding:** Extracted knowledge is embedded as a vector and stored in semantic memory
5. **Retrieval:** Before future agent tasks, relevant memories are retrieved via hybrid search and injected into the context window
6. **Decay:** Knowledge that is never retrieved or is contradicted by newer observations is eventually deprioritized

→ **Deep dive:** `02-ARCHITECTURE-MEMORY.md`

---

## 17. Security & HIPAA Compliance

### HIPAA Is Foundational, Not an Add-On

Omnira handles Protected Health Information (PHI). HIPAA compliance is not optional — it must be built into every layer.

### Encryption

| Layer | Method | Standard |
|-------|--------|----------|
| Data at rest (local) | SQLCipher (AES-256-CBC) | HIPAA §164.312(a)(2)(iv) |
| Data at rest (cloud) | Supabase managed encryption (AES-256) | HIPAA §164.312(a)(2)(iv) |
| Data in transit | TLS 1.3 for all cloud communication | HIPAA §164.312(e)(1) |
| File storage (local) | AES-256 encrypted directory | HIPAA §164.312(a)(2)(iv) |
| Backups | Encrypted with practice-held keys | HIPAA §164.310(d)(2)(iv) |

### Access Controls (RBAC)

| Role | Permissions |
|------|------------|
| **Owner** | Full access. Configure agents, manage team, view all data, billing/subscription management. |
| **Office Manager** | Near-full access. Cannot manage billing/subscription. Can configure agents and manage staff. |
| **Dentist/Provider** | Clinical data, schedule, treatment plans. Cannot access financial reports or agent settings. |
| **Hygienist** | Own schedule, patient charts for assigned patients, clinical notes. |
| **Front Desk** | Schedule, patient demographics, insurance, check-in/out, basic billing. No clinical notes. |
| **Billing Coordinator** | Full billing/claims access. Patient financial data. No clinical notes. |
| **Assistant** | Minimal access — today's schedule, assigned patient info only. |

### Audit Logging

Every access to PHI is logged:
- Who accessed it (user ID, role)
- What was accessed (patient ID, data type)
- When (timestamp)
- From where (device, IP)
- Action taken (view, edit, export, delete)

Audit logs are append-only and tamper-evident. They are stored locally and synced to cloud. Retainable for 6+ years per HIPAA requirements.

### Agent Sandboxing

Agents execute tools through a sandboxed permission layer:
- Each tool call is validated against the agent's allowed tool set
- Each tool call is checked against the permission framework (autonomous/supervised/escalated)
- All tool call results are logged
- Agents cannot access data outside their scope (Stella cannot read clinical notes, Vera cannot modify schedules directly)

### BAA (Business Associate Agreement)

Omnira provides a BAA to every practice customer. BAAs are also maintained with:
- Supabase (cloud infrastructure)
- Anthropic (AI processing)
- Google Cloud (Gemini AI processing)
- Twilio (communication)
- Retell.ai (voice AI)
- Stripe (payment processing)
- Stedi (insurance APIs)

### Additional Security

- Multi-factor authentication (optional, recommended)
- Automatic session timeout (configurable, default 15 minutes)
- Secure backup with practice-held encryption keys
- Data export in standard formats on request
- Right to deletion (patient records can be purged per request, subject to regulatory retention requirements)
- Breach notification procedures per HIPAA §164.408

→ **Deep dive:** `04-ARCHITECTURE-SECURITY.md`

---

## 18. Onboarding Flow

### Philosophy

Onboarding should feel guided, not overwhelming. The practice should be productive within their first day. The 2-week training period handles the rest.

### The Seven Phases

**Phase 1: Download & Install**
- Desktop app download (Mac .dmg / Windows .exe)
- Lightweight (~100MB — Tauri, not Electron)
- Installation < 2 minutes
- First launch → clean welcome screen

**Phase 2: Account & Practice Profile**
- Create account (name, email, password, practice name)
- Select vertical: "Dental Practice" (only option at launch, others show "Coming Soon")
- System configures itself with dental-specific modules, terminology, agent behaviors
- Basic practice info: address, phone, providers, chairs, staff count
- This info pre-configures schedule templates, agent capacity, defaults

**Phase 3: Name Your AI Assistant**
- Special screen: "Name Your AI Assistant"
- Default: "Omnira Assistant"
- Suggestions: Luna, Atlas, Sage, Iris, Nova, Echo
- Or type any name — Jarvis, Max, whatever fits their culture

**Phase 4: Data Migration**
- Guided import wizards for top PMS: Dentrix, Eaglesoft, Open Dental, Curve Dental, Denticon
- For each: export instructions with screenshots, drag-and-drop upload
- Agent parses and maps data automatically
- Imports: patient records, appointment history, treatment plans, insurance, fee schedules, balances
- Fallback: CSV/Excel import with smart column mapping
- Estimated time: 30 min – 2 hours (agent does the work)

**Phase 5: Practice Configuration**
- Guided wizard, skip-and-return-later capable:
  - **Schedule:** Office hours, provider schedules, chair assignments, appointment types/durations
  - **Insurance:** Accepted plans (searchable database), fee schedules per plan
  - **Communication:** Reminder timing, preferred channels, practice branding (logo, colors)
  - **Agent Permissions:** Per-action autonomous/supervised/off (defaults conservative)
  - **Integrations:** Email, phone system, accounting software, lab portals
- Smart defaults based on practice size from Phase 2

**Phase 6: Team Setup**
- Invite team by email
- Assign roles (Owner, Office Manager, Front Desk, Provider, Hygienist, Assistant)
- Pre-configured permission sets per role (adjustable)
- Each member downloads app and signs in with invite link
- View auto-configures based on role

**Phase 7: Training Period & Go Live**
- First 2 weeks: ALL agent actions in Supervised mode
- Notification center shows every agent recommendation → approve/reject
- Staff learns agents. Agents learn practice.
- After 2 weeks: Readiness Report with accuracy rates and promotion recommendations
- Practice owner reviews, promotes actions to Autonomous as comfortable
- Dedicated onboarding specialist (human) for first 30 days
- Weekly check-in calls during first month

---

## 19. UI Philosophy & Design System

### The Hybrid Approach

The primary interface is a **structured dashboard** with set UI components (tables, charts, calendars, lists). An **ever-present AI chat panel** can be opened from any screen for natural language queries and commands.

The dashboard is the cockpit. The chat is the co-pilot.

### Why Not Pure Chat?

Dental staff are busy and moving fast — they need to glance at today's schedule, not type "show me today's schedule." Certain information must be always visible. Chat creates friction for routine one-click actions. Dental staff are not always tech-savvy. Regulatory data needs structured display.

### Why Not Pure Static Dashboard?

Sometimes users want ad-hoc queries that don't map to any screen ("Which patients have overdue treatment worth more than $1,000?"). The chat handles edge cases beautifully. It also serves as the command center for instructing agents.

### Key Screens

| Screen | Purpose | Primary Users |
|--------|---------|--------------|
| **Dashboard** | Today's overview — schedule, metrics, tasks, agent activity | Office Manager, Owner |
| **Schedule** | Full calendar — day/week/month, drag-and-drop, waitlist | Front Desk, All |
| **Patients** | Directory + full patient chart (demographics → clinical → billing → comms) | All |
| **Billing & Claims** | Claims dashboard, insurance verification, AR, payments | Billing, Office Manager |
| **Communication Hub** | Unified inbox across all channels, campaign builder | Front Desk, Office Manager |
| **Agent Control Center** | Agent status, activity logs, approval queue, permission settings | Office Manager, Owner |
| **Reports & Analytics** | Pre-built + custom reports, benchmarking, exports | Owner, Office Manager |
| **Settings** | Practice config, team, integrations, agent settings, appearance | Owner, Office Manager |

### Adaptive Elements

- **Time-of-day adaptation:** Morning → daily briefing prominent. End of day → close-out tasks.
- **Role-based views:** Providers see clinical. Front desk sees operations. Owner sees business intelligence.
- **Smart suggestions:** Schedule gaps highlight waitlist candidates. Overdue recalls surface at the top.
- **Customizable widgets:** Rearrangeable per user, but defaults are carefully designed so most never need to customize.

### The Chat Panel

- Persistent slide-out drawer, openable from any screen
- Natural language questions and commands
- Context-aware (knows which screen you're on, which patient is selected)
- Voice input option (v1.5)
- NOT the primary interface — a power-user shortcut and safety net

### Agent Visibility — What Users See

Agents work in the **background**. Users see **results**, not process. No visible computer clicking buttons.

**Notification-based (default):** "✅ 25/27 patients verified. 2 issues need attention." Things get done; users see outcomes.

**Activity log (on-demand):** Chronological feed in Agent Control Center. Every action logged and expandable. Like a security camera — always recording, reviewed when needed.

**Approval queue (supervised actions):** Task cards showing what the agent wants to do, why, and approve/reject/modify buttons. Can be pushed as mobile notifications.

→ **Deep dive:** `20-UI-SHELL.md` through `26-UI-SETTINGS.md`

---

## 20. Communication Infrastructure

### Channels

| Channel | Provider | Use Cases |
|---------|----------|----------|
| **SMS/Text** | Twilio | Appointment reminders, confirmations, waitlist outreach, quick updates |
| **Email** | SendGrid | Welcome emails, statements, treatment plans, detailed communications |
| **Phone (AI)** | Retell.ai + Twilio | Inbound call handling, outbound confirmations, emergency triage |
| **Phone (transfer)** | Twilio | Routing complex calls to human staff |
| **Patient Portal** | Hosted web pages | Forms, check-in, payment, treatment plan review |

### AI Phone System Behavior

**Inbound calls:**
- AI answers, identifies purpose
- Handles: hours/directions, simple scheduling, confirmations, refill requests (routed to provider), insurance questions (real-time lookup)
- Routes complex calls to staff with full context
- Transcript + summary for every call
- Target: 50–70% handled without human

**Outbound calls (by agents):**
- Appointment confirmations
- Recall outreach (when text/email failed)
- Post-procedure check-ins
- All calls logged with transcript

**What the user sees:**
- After call completes: notification with summary ("Inbound call from (555) 123-4567 — patient wanted to reschedule. Agent rescheduled to Monday 10 AM. [View Transcript]")
- Optional live call monitor for real-time oversight (premium/power-user feature)

### Communication Sequencing

Agents use configurable sequences. Example for appointment reminders:
```
7 days before  → Email (confirmation + location details)
48 hours before → SMS (reply Y to confirm)
24 hours before → SMS (final reminder + outstanding forms)
If unconfirmed  → Agent flags for staff + checks waitlist
```

→ **Deep dive:** `13-AGENT-COMMUNICATION.md`, `31-API-EXTERNAL.md`

---

## 21. Insurance & Claims Infrastructure

### The Revenue Cycle Pipeline

```
Patient Books → Insurance Verified → Treatment Performed → Claim Compiled
     │                │                      │                   │
     ▼                ▼                      ▼                   ▼
  Vera pulls      Benefits stored       CDT codes, tooth     Validated against
  eligibility     in patient record     numbers, surfaces,   payer-specific rules
  from Stedi      for estimate gen.     narratives compiled  (bundling, frequency)
                                                                  │
                                                                  ▼
Claim Submitted → Tracked → Paid (post payment, reconcile)
     │                         │
     │                         └─► Patient balance calculated
     │                              → Statement sent
     │                              → Follow-up sequence
     │
     └─► IF DENIED:
           → Read denial code
           → Classify (correctable vs. complex)
           → Correctable: fix + resubmit (auto)
           → Complex: prepare appeal + queue for staff
           → Track outcome, learn per payer
```

### Insurance Verification Data

Vera pulls for every patient before every visit:
- Eligibility status (active/inactive)
- Plan name and group number
- Annual maximum + amount used
- Deductible + amount met
- Coverage percentages by category (preventive, basic, major, ortho)
- Waiting periods
- Frequency limitations (cleanings every 6 months, X-rays every 12 months, etc.)
- Coordination of benefits (if dual coverage)

### X12 Standards

Claims are submitted in X12 837D (dental) format through the clearinghouse (Stedi). Remittance advice (ERA) is received in X12 835 format and auto-posted.

→ **Deep dive:** `12-AGENT-BILLING.md`, `31-API-EXTERNAL.md`

---

## 22. Hardware Integration Strategy

### Priority Integrations

| Hardware | Standard | Priority | Notes |
|----------|---------|----------|-------|
| Digital X-ray sensors | TWAIN/DICOM | High (v1) | DEXIS, Schick, Carestream — most common |
| Intraoral cameras | TWAIN | Medium (v1.5) | Image capture and display |
| Payment terminals | Stripe Terminal API | High (v1) | Square/Clover via Stripe |
| Barcode scanners | Standard HID | Medium (v1.5) | Inventory management |
| Printers | OS print API | High (v1) | Labels, prescriptions, referrals |
| CBCT scanners | DICOM | Low (v2) | 3D imaging — complex integration |

### Imaging Integration Approach

Omnira implements a **TWAIN/DICOM bridge** that communicates with dental imaging hardware. Images are captured through the bridge, stored in the encrypted local file system, and linked to the patient record. The bridge runs as a background service on the practice's machine.

This is a critical integration — practices will not switch if they can't access their X-rays. Budget significant engineering time for this.

---

## 23. Pricing & Business Model

### Pricing Philosophy

**Replacement cost pricing.** The pitch is not "here's another software subscription" — it's "here's your entire tech stack + an AI team member that works 24/7, for less than what you're paying now."

### Tier Structure

| | Starter | Professional | Enterprise |
|---|---------|-------------|-----------|
| **Price** | $799/mo | $1,499/mo | $2,499/mo |
| **Practice Size** | 1–2 providers, 1–3 chairs | 2–5 providers, 3–8 chairs | 5+ providers, 8+ chairs or multi-location |
| **Users** | Up to 5 | Up to 15 | Unlimited |
| **All 5 Agents** | ✅ | ✅ | ✅ |
| **AI Phone System** | 100 calls/mo | 500 calls/mo | Unlimited |
| **Benchmarking** | ❌ | ✅ | ✅ + Custom Reports |
| **Data Migration** | Self-service | Assisted | White-glove |
| **Support** | Email + Chat | Priority + Phone | Dedicated CSM |
| **Contract** | Annual (monthly pay) | Annual (10% off prepay) | Annual (15% off prepay) |

### Revenue Model

- **Subscription revenue:** Primary revenue stream. Monthly recurring per practice.
- **Onboarding/migration fees:** $500–$2,000 one-time for assisted migration (optional, included in Enterprise)
- **Transaction revenue (future):** Small markup on payment processing, insurance verification volume
- **Platform fees (future):** When benchmarking data becomes valuable, premium analytics tier

### Unit Economics Target

At 20 paying customers (average $1,200/mo):
- Revenue: $24,000/month
- API costs: $800–2,000/month (3–8% of revenue)
- Infrastructure: $200–500/month
- Gross margin target: 80%+

---

## 24. Competitive Analysis & Moat

### Current Competitors

| Competitor | What They Are | Weakness |
|-----------|--------------|----------|
| **Dentrix** (Henry Schein) | Legacy PMS, 30+ years old | Ancient UI, no AI, fragmented add-ons, expensive |
| **Eaglesoft** (Patterson) | Legacy PMS | Similar to Dentrix — legacy, no AI, poor integration |
| **Open Dental** | Open-source PMS | More modern but still manual, limited AI, requires add-ons |
| **Curve Dental** | Cloud-only PMS | Better UI but limited AI, no local-first, full cloud dependency |
| **Weave** | Patient comms platform | Communication only — doesn't replace PMS or billing |
| **Dental Intelligence** | Analytics only | Reporting layer on top of existing PMS, no operational capability |
| **Pearl AI** | Clinical AI (X-ray analysis) | Single feature, not a platform |

### Why Incumbents Can't Catch Up Easily

Dentrix and Eaglesoft are built on codebases that are 20–30 years old. Adding AI to a legacy system means:
- Bolting on features to an architecture that wasn't designed for them
- AI operates on top of the system, not natively within it
- Data silos within their own product make cross-feature AI difficult
- Their business model (per-module pricing) conflicts with unified AI

### Omnira's Moat (Ranked by Strength)

1. **AI-native architecture.** Every workflow designed for agent execution. Can't be retrofitted.
2. **Local-first privacy advantage.** Patient data on the practice's machine. Cannot be matched by cloud-only competitors.
3. **Multi-agent coordination.** Five agents sharing context and collaborating, not isolated features.
4. **Training period switching cost.** After 2 weeks of teaching agents, practices have invested in Omnira's knowledge of their workflow. The named AI assistant creates emotional attachment.
5. **Network effects (future).** Benchmarking data gets better with more practices. AI gets smarter with more training data (anonymized, aggregated).
6. **Vertical-pack platform.** Once the dental vertical is proven, expanding to veterinary/optometry/etc. is primarily content work, not engineering.

---

## 25. API Cost Analysis

### By Phase

**Development (Building MVP):** $0–25/month
- Free tiers: Supabase, Gemini, SendGrid
- Only Claude API testing (~$10–20/mo)

**Pilot (2–3 Free Practices):** $150–400/month
- Supabase Pro ($25), Claude (~$50–100), Voice AI (~$50–100 limited), Twilio (~$30–50), SendGrid free

**First 20 Paying Customers:** $800–2,000/month
- Revenue: ~$24,000/month
- API costs: 3–8% of revenue — healthy margins

### Cost-Per-Service Breakdown

| Service | Pricing | Monthly at Scale (20 practices) |
|---------|---------|-------------------------------|
| Claude Sonnet 4.5 | $3/M input, $15/M output | $200–500 |
| Gemini Flash | $0.10/M tokens | $20–60 |
| Twilio SMS | $0.0079/msg | $50–150 |
| Twilio Voice | $0.0085/min | $50–100 |
| Retell.ai Voice AI | $0.07+/min | $200–500 |
| SendGrid | Free–$19.95/mo | $0–20 |
| Stedi (insurance) | Transaction-based | $50–200 |
| Supabase Pro | $25/mo | $25 |
| Stripe | 2.9% + $0.30/txn | Pass-through |

### Voice AI Cost Warning

Voice AI is the most expensive API. At $0.15–0.30/min, a busy practice (50 calls/day × 3 min average) = ~$675–1,350/month per practice.

**Mitigation strategy:**
- v1: Text-based AI communication only (SMS confirmations, chat). No AI phone.
- v1.5: Add AI phone as a premium feature or included only in higher tiers
- Use Retell.ai over Vapi for simpler, more predictable pricing
- HIPAA for voice adds $1,000/mo on Vapi; Retell includes it in enterprise

---

## 26. Development Roadmap

### Phase 1: Foundation (Months 1–3)

**Goal:** Working desktop app shell with patient database and one agent.

- [ ] Tauri app shell with React frontend
- [ ] SQLite database with SQLCipher encryption
- [ ] Core schema: patients, appointments, providers, rooms
- [ ] Dental vertical pack: CDT codes, basic seed data
- [ ] Scheduling UI (day/week view, appointment CRUD)
- [ ] Patient directory and basic chart view
- [ ] **Stella (Scheduling Agent):** Smart booking, basic recall, cancellation recovery
- [ ] Supabase cloud setup (auth, sync foundation)
- [ ] Basic onboarding flow (account creation, practice setup)

### Phase 2: Revenue Engine (Months 4–6)

**Goal:** Billing and insurance automation — the feature that sells.

- [ ] Billing schema: claims, payments, insurance plans, fee schedules
- [ ] **Vera (Billing Agent):** Insurance verification, claim compilation, same-day submission
- [ ] Stedi integration for eligibility verification
- [ ] Clearinghouse integration for claim submission
- [ ] Claim tracking dashboard
- [ ] Denial detection and auto-rework (basic)
- [ ] Patient billing cycle (statements, payment processing)
- [ ] Stripe integration for patient payments
- [ ] Treatment estimate generation

### Phase 3: Communication Layer (Months 7–9)

**Goal:** Multi-channel patient communication and the AI phone system.

- [ ] **Relay (Communication Agent):** Appointment reminders, recall campaigns, review management
- [ ] Twilio integration (SMS)
- [ ] SendGrid integration (email)
- [ ] Communication hub UI (unified inbox)
- [ ] Campaign builder (recall, reactivation)
- [ ] AI phone system (Retell.ai integration) — text-based first, voice v1.5
- [ ] Post-procedure follow-up sequences
- [ ] Patient portal web pages (forms, check-in, payments)

### Phase 4: Clinical + Operations (Months 10–12)

**Goal:** Complete the five-agent suite.

- [ ] **Aria (Clinical Support Agent):** Treatment plan formatting, referral management, lab tracking
- [ ] **Otto (Operations Agent):** Morning briefings, inventory, compliance, reporting
- [ ] Clinical notes assistance (templates, voice-to-text)
- [ ] E-prescription integration
- [ ] Inventory management system
- [ ] Compliance tracking dashboard
- [ ] Automated reporting (daily/monthly)
- [ ] Analytics and benchmarking (basic)
- [ ] Staff management features

### Phase 5: Polish & Launch (Months 13–15)

**Goal:** Production-ready for first 20 paying customers.

- [ ] Named AI assistant feature
- [ ] Agent Control Center (full UI)
- [ ] Readiness Report and training period flow
- [ ] Staff mobile app (React Native) — approvals, monitoring, notifications
- [ ] Data migration tools (Dentrix, Eaglesoft, Open Dental importers)
- [ ] HIPAA compliance audit ($20–50K budget)
- [ ] Performance optimization (Lighthouse 95+, query optimization)
- [ ] Security penetration testing
- [ ] Documentation and in-app help

### Phase 6: Scale (Months 16–24)

- [ ] In-app voice assistant (v1.5)
- [ ] Advanced denial management and appeal automation
- [ ] Predictive analytics engine
- [ ] Multi-location support
- [ ] Hardware integrations (imaging, payment terminals)
- [ ] Accounting software integrations (QuickBooks, Xero)
- [ ] Platform benchmarking (anonymized cross-practice data)
- [ ] Begin second vertical research (veterinary)

---

## 27. Key Metrics & Success Criteria

### Product Metrics

| Metric | Target | Measurement |
|--------|--------|-------------|
| Waitlist signups (pre-launch) | 100+ practices | Landing page conversion |
| Pilot practices | 2–3 free pilots | Discovery calls → pilot agreement |
| Time to first value | < 1 day (basic scheduling working) | Onboarding tracking |
| Full onboarding | < 2 weeks | Phase completion tracking |
| Agent accuracy (training period) | > 90% approval rate | Approval/rejection ratio |
| DAU per practice | > 80% of staff | Login tracking |
| NPS | > 50 | Post-onboarding survey |

### Business Metrics

| Metric | Target | Timeline |
|--------|--------|----------|
| First paying customer | $799+/mo | Month 15 |
| 20 paying customers | ~$24K MRR | Month 18 |
| 100 practices | ~$120K MRR | Month 24 |
| Gross margin | > 80% | Ongoing |
| Churn rate | < 3% monthly | After first 6 months |
| CAC payback | < 6 months | Ongoing |

### Practice Impact Metrics (Customer Success)

| Metric | Target | How Measured |
|--------|--------|-------------|
| Cancellation fill rate | 80%+ (from 10–20% industry avg) | Stella tracking |
| Insurance verification automation | 100% pre-visit | Vera tracking |
| Claim rejection reduction | 40–60% improvement | Vera tracking |
| Phone volume reduction | 50–70% | Relay tracking |
| Morning prep time | < 5 min (from 20–30 min) | Otto tracking |
| Annual recovered revenue | $250K–500K per practice | Aggregate agent impact |

---

## Appendix A: Glossary

| Term | Definition |
|------|-----------|
| **CDT Code** | Current Dental Terminology — standardized codes for dental procedures (e.g., D2740 = porcelain crown) |
| **Clearinghouse** | Electronic intermediary that transmits insurance claims between practices and payers |
| **CRDT** | Conflict-free Replicated Data Type — data structure for distributed sync without coordination |
| **EOB** | Explanation of Benefits — document from insurer detailing claim adjudication |
| **ERA** | Electronic Remittance Advice — electronic version of EOB |
| **FTS5** | SQLite's full-text search extension |
| **Lane Queue** | Execution model where each agent has its own serial task queue, with parallel execution across agents |
| **Perio** | Periodontal — relating to gum disease treatment |
| **PHI** | Protected Health Information — any health data that can identify a patient |
| **PMS** | Practice Management Software |
| **Recall** | Scheduled follow-up appointments (typically 6-month hygiene visits) |
| **SQLCipher** | Open-source extension to SQLite providing AES-256 encryption |
| **Vertical Pack** | Configuration bundle that transforms the generic platform for a specific industry |
| **X12 837D** | EDI standard format for dental insurance claim submission |
| **X12 835** | EDI standard format for insurance payment/remittance advice |

---

## Appendix B: Decision Log

Decisions made during product development, with rationale.

| Decision | Choice | Rationale | Date |
|----------|--------|-----------|------|
| Desktop framework | Tauri (not Electron) | 10x smaller (~100MB vs 200MB+), Rust performance/safety, native OS access | Feb 2026 |
| Local database | SQLite + SQLCipher (not PostgreSQL local) | Zero-config, single-file, perfect for local-first, HIPAA encryption built in | Feb 2026 |
| Cloud database | Supabase (not Neon, not MongoDB) | HIPAA-ready, includes auth/storage/realtime, pgvector for embeddings, full-stack | Feb 2026 |
| Primary AI | Claude (not GPT, not Kimi K2.5) | Best agentic performance, BAA available, US-based, reliable tool use | Feb 2026 |
| Voice AI | Retell.ai (over Vapi) | Simpler pricing, HIPAA in enterprise, all-inclusive per-minute | Feb 2026 |
| Architecture | Local-first (not cloud-first) | HIPAA advantage, offline resilience, performance, privacy selling point | Feb 2026 |
| Agent model | Pre-packed (not user-created) | Dental staff aren't AI engineers; compliance requires controlled agents | Feb 2026 |
| Patient mobile | Web pages (not native app in v1) | Patients won't download an app for their dentist; web links have higher engagement | Feb 2026 |
| Pricing model | Replacement cost tiers | Position as replacement for $3K+ in current spend, not as "another subscription" | Feb 2026 |
| Brand name | Omnira (renamed from Wellorna, originally DentOS) | Platform-level brand for multi-vertical expansion | Feb 2026 |
| First vertical | Dental | Clear pain point, established software budgets, regulatory switching costs, large market (200K+ US practices) | Feb 2026 |
| Second vertical | Veterinary | Similar workflows, growing market, strong willingness to pay | Feb 2026 |

---

*End of Master PRD. All companion files (01–40) contain deep-dive specifications referenced throughout this document.*
