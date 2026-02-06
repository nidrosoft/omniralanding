# Omnira — Landing Page

**The AI-Native Operating System for Practice-Based Businesses**

Omnira is an AI-powered platform that replaces the 5-10 fragmented software tools dental practices use today with a single, unified system powered by 5 autonomous AI agents. This repository contains the marketing landing page for [omnira.space](https://omnira.space).

---

## What Is Omnira?

Omnira deploys **5 specialized AI agents** that work 24/7 to handle the repetitive administrative work that overwhelms dental practice staff:

| Agent | Domain | What It Does |
|-------|--------|--------------|
| **Scheduling Agent** | Calendar & Appointments | Smart booking, cancellation recovery (80%+ fill rate), recall management, no-show prediction, waitlist automation |
| **Billing & Revenue Agent** | Revenue Cycle | Insurance verification, same-day claims, denial management, patient billing, payment plans |
| **Communication Agent** | Patient Touchpoints | AI phone system, appointment reminders, review management, reactivation campaigns, emergency triage |
| **Clinical Support Agent** | Clinical Operations | Treatment plan presentation, referral management, e-prescriptions, lab tracking, clinical notes |
| **Operations Agent** | Practice Intelligence | Morning briefings, inventory management, compliance monitoring, analytics, end-of-day processing |

**The result for a mid-size dental practice:** $250K-$500K+ in annual recovered revenue and cost savings.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | [Next.js 14](https://nextjs.org/) (App Router) |
| **Language** | TypeScript |
| **Styling** | SASS Modules |
| **Icons** | [Iconsax React](https://iconsax-react.pages.dev/) |
| **Animations** | [React Scroll Parallax](https://react-scroll-parallax.damnthat.tv/), [Swiper](https://swiperjs.com/) |
| **Fonts** | Rubik (Google Fonts), Host Grotesk (local) |
| **Package Manager** | Yarn |

---

## Getting Started

### Prerequisites

- Node.js 18+ 
- Yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/nidrosoft/omniralanding.git
cd omniralanding

# Install dependencies
yarn install

# Start the development server
yarn dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
yarn build
yarn start
```

---

## Project Structure

```
omnira/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with SEO metadata
│   ├── page.tsx                  # Home page entry
│   └── providers.tsx             # Client-side providers (Parallax)
│
├── components/                   # Shared UI components
│   ├── Button/                   # CTA button component
│   ├── CompletedTasks/           # Task completion illustration
│   ├── Footer/                   # Site footer with navigation
│   ├── Header/                   # Sticky header with nav
│   ├── Icon/                     # SVG icon system
│   ├── Image/                    # Optimized image wrapper
│   └── Label/                    # Section label badge
│
├── templates/HomePage/           # Landing page sections
│   ├── Hero/                     # Hero section with CTAs
│   ├── InteractiveDemo/          # 7-step interactive onboarding demo
│   ├── SocialProof/              # Industry statistics
│   ├── ProblemStatement/         # Pain points (4 cards)
│   ├── ProductOverview/          # Agent autonomy framework
│   ├── Agents/                   # 5 AI agents deep-dive (tabbed)
│   ├── Work/                     # "How It Works" 3-step bento
│   ├── WorkflowShowcase/         # Before/after workflow comparisons
│   ├── DayInLife/                # Timeline: traditional vs. Omnira
│   ├── ImpactStats/              # Quantified impact metrics
│   ├── Pricing/                  # Cost comparison & pricing
│   ├── TrustCompliance/          # HIPAA & security pillars
│   ├── Testimonials/             # Swiper carousel testimonials
│   ├── Faq/                      # FAQ accordion (2-column)
│   └── Waitlist/                 # Lead capture form
│
├── mocks/                        # Static content data
│   ├── faq.tsx                   # FAQ questions & answers
│   └── testimonials.tsx          # Testimonial entries
│
├── styles/                       # Global styles
│   ├── app.sass                  # Main stylesheet imports
│   ├── variables.sass            # Design tokens & variables
│   ├── reset.sass                # CSS reset
│   ├── common.sass               # Common utilities
│   └── blocks/                   # Shared style blocks
│
├── public/images/                # Static assets (logos, illustrations, OG images)
├── 00-MASTER-PRD.md              # Master Product Requirements Document
└── package.json                  # Dependencies & scripts
```

---

## Landing Page Sections

The landing page is structured to guide dental practice owners from problem awareness through to waitlist signup:

1. **Header** — Sticky navigation with section links + "Join the Waitlist" CTA
2. **Hero** — Core value proposition: "Your dental practice running itself"
3. **Interactive Demo** — Walk through the Omnira setup experience in 7 steps
4. **Social Proof** — Industry stats showing the scale of the problem
5. **Problem Statement** — 4 pain points dental practices face today
6. **Product Overview** — Agent autonomy framework (Autonomous / Supervised / Escalated)
7. **Agents** — Deep-dive into all 5 AI agents with capabilities & impact
8. **How It Works** — 3-step onboarding process
9. **Workflow Showcase** — 6 before/after comparisons of real workflows
10. **Day in the Life** — Full-day timeline: traditional practice vs. Omnira
11. **Impact Stats** — Quantified metrics ($250K-$500K+ value)
12. **Pricing** — Current spend vs. Omnira cost comparison
13. **Trust & Compliance** — HIPAA, encryption, data privacy, compliance
14. **Testimonials** — Carousel of dental professional quotes
15. **FAQ** — 10 common questions in 2-column accordion
16. **Waitlist** — Lead capture form with incentives
17. **Footer** — Navigation, vertical roadmap teaser, legal links

---

## Design System

- **Color Palette:** Dark backgrounds with `#D2FE17` (lime/chartreuse) as the primary accent
- **Typography:** Rubik for body, Host Grotesk Bold for display
- **Visual Style:** Dark mode, generous whitespace, geometric accents
- **Inspiration:** Linear, Notion, Stripe, Vercel

---

## SEO

The landing page includes comprehensive SEO optimization:

- **Meta tags:** Title, description, keywords targeting dental practice management
- **Open Graph:** Full OG tags with image for Facebook/LinkedIn sharing
- **Twitter Cards:** `summary_large_image` card for rich Twitter previews
- **Structured Data:** JSON-LD `SoftwareApplication` schema
- **Canonical URL:** Points to `https://omnira.space`
- **Semantic HTML:** Proper heading hierarchy and landmark elements

### Target Keywords
- Dental practice management software
- AI dental practice automation
- Dentrix alternative / Eaglesoft alternative
- HIPAA compliant dental software
- Dental billing & claims management

---

## About the Product

Omnira is being built as a **Tauri desktop application** (Rust backend + React frontend) with:

- **Local-first architecture** — Patient data encrypted on the practice's machine (SQLCipher/AES-256)
- **Cloud sync** — Supabase for backup, multi-device access, and AI processing
- **Multi-model AI** — Claude for complex tasks, Gemini Flash for routine operations
- **HIPAA compliance** — End-to-end encryption, audit logging, BAA, RBAC
- **Vertical-pack model** — Dental first, then veterinary, optometry, med spa, chiropractic

For the full product specification, see [`00-MASTER-PRD.md`](./00-MASTER-PRD.md).

---

## About

**Brand:** Omnira  
**Domain:** [omnira.space](https://omnira.space)  
**Built by:** [Nidrosoft LLC](https://nidrosoft.com)  
**Contact:** hello@omnira.space

---

## License

This project is proprietary software. All rights reserved.

&copy; 2026 Omnira / Nidrosoft LLC
