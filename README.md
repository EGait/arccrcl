# ArcCRCL

**The Arc ecosystem hub** — news, project discovery, and stablecoin FX in one place, built for Circle's Arc blockchain.

🌐 **Live at [arccrcl.com](https://arccrcl.com)**

---

## What It Does

ArcCRCL is a one-stop dashboard for anyone active in the Arc ecosystem — whether you're a developer tracking the space or tracking stablecoin infrastructure ahead of mainnet.

- **News Feed** — Aggregated Arc and stablecoin ecosystem news, updated regularly
- **Project Discovery** — Browse and explore projects building on Arc
- **Stablecoin FX** — Track onchain stablecoin swaps and FX rates on Arc
- **Stablecoins & Yield** — Compare stablecoins and yield/treasury products available on Arc
- **RWAs** — Tokenized funds and real-world assets launching on Arc
- **AI Assistant** — A multi-model chat assistant grounded in the site's own data

> **Status:** Arc mainnet launches September 16, 2026. Most content pages are
> intentionally blank placeholders right now — see [Content Status](#content-status) below.

---

## AI Assistant

A chat assistant available both as a hero search bar on the homepage and as a
floating widget site-wide. It answers questions about the site's content using
the site's real data rather than the model's general knowledge.

### Multi-provider architecture

The assistant supports multiple model providers behind a single API route.
Users pick a model from a dropdown; each reply is labeled with the model that
produced it.

- **Gemini** (`@google/genai`) — the grounded default, with the highest free-tier ceiling
- **OpenRouter** (OpenAI-compatible REST) — access to open models like Llama 3.3 70B

The two providers have entirely different request and response shapes. Rather
than branching throughout the app, each is wrapped in an adapter that normalizes
its output to a shared `{ reply, sources }` interface, so the frontend is
provider-agnostic:

```
app/lib/models.ts       — shared model registry (server + UI read from one source)
app/api/chat/route.ts   — provider adapters, grounding, rate limiting
app/lib/feed.ts         — builds the grounding context from site data
```

Adding a third provider means writing one adapter function and one registry
entry — no changes to the components.

### Grounding

Rather than duplicating data fetching, the assistant reuses the site's existing
`/api/news` route and imports the same hand-maintained data files that power the
stablecoin, yield, RWA, project, and guide pages. This guarantees the assistant
and the site can never disagree — there's one source of truth. Right now those
data files are empty placeholders (see below), so the assistant's grounded
context will fill out as real content gets added.

The context is assembled into labeled sections with per-section item caps and
truncated descriptions, keeping requests small enough to stay fast and within
free-tier limits even as the underlying datasets grow.

### Failure handling

Free-tier APIs are unreliable by nature, so the assistant is built to degrade
rather than break:

- **Feed fetch timeout** — a 4s `AbortController` cap on `/api/news`; on timeout
  the assistant still answers from static site data instead of hanging
- **Model delisting fallback** — OpenRouter rotates and removes free model IDs
  without notice, so requests include `openrouter/free` as an automatic fallback
- **Context caching** — grounding context is cached for 5 minutes rather than
  rebuilt per message
- **Rate limiting** — in-memory per-IP throttling to protect free-tier quota
- **Server-side keys** — all API keys live in route handlers; none are exposed
  to the client

### Guardrails

The system prompt enforces product constraints, not just tone:

- No financial advice, and no price predictions
- No guessing at live data it can't access — it declines and points to the
  relevant page instead of hallucinating figures
- Never requests seed phrases or private keys, and warns users not to share them

---

## Tech Stack

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Google Gemini + OpenRouter
- **Deployment**: Vercel

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment variables

Create a `.env.local` in the project root:

```dotenv
GEMINI_API_KEY=your_gemini_key
OPENROUTER_API_KEY=your_openrouter_key
```

Both AI keys are free to obtain — Gemini from
[Google AI Studio](https://aistudio.google.com), OpenRouter from
[openrouter.ai](https://openrouter.ai). Neither requires a credit card.
The site runs fine without them — only the AI assistant widget needs them.

Note that `GEMINI_API_KEY` and `OPENROUTER_API_KEY` intentionally omit the
`NEXT_PUBLIC_` prefix so they stay server-side only.

---

## Project Structure

```
app/
├── api/
│   ├── chat/       # AI assistant endpoint (provider adapters + grounding)
│   └── news/       # News aggregation endpoint
├── data/           # Hand-maintained datasets (projects, stablecoins, RWAs, yield, guides)
├── lib/
│   ├── feed.ts     # Builds AI grounding context from site data
│   └── models.ts   # Shared model registry
├── news/           # News aggregation
├── projects/       # Project discovery
├── swap/           # Stablecoin FX / swap page
├── lsts/           # Stablecoin yield & treasury comparisons
├── stablecoins/    # Stablecoin comparisons
├── rwas/           # Tokenized real-world assets
└── components/     # Shared UI components (incl. HeroChat, ChatWidget)
```

---

## Content Status

This is a fresh fork built ahead of Arc's mainnet launch, so most content
pages are intentionally empty placeholders rather than populated with
Solana-era content:

- `app/data/*.ts` — all datasets (projects, stablecoins, RWAs, yield, guides,
  in-house articles) are empty arrays, ready to be filled in
- News, project detail, and wallet-guide article pages that were Solana-specific
  have been removed rather than ported
- The swap page has a placeholder UI — no swap provider is wired up yet
  (the previous Jupiter integration was Solana-only and doesn't apply to Arc)

---

## Roadmap

- Populate `app/data/*.ts` with real Arc ecosystem projects, stablecoins, and RWAs
- Wire up an EVM wallet connection (Arc is EVM-compatible) once mainnet is live
- Add a swap/FX widget appropriate for Arc (Uniswap-style DEX or Circle StableFX-style flow)
- Live web search fallback for the assistant (Gemini grounding, pending billing)

---

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

---

## License

[MIT](./license)
