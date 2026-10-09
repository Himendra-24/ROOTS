📁 PROMPTS/MASTER.md
text

╔════════════════════════════════════════════════════════════════════╗
║  ROOTS — MASTER BUILD PROMPT                                       ║
║  WebGen-Z @ BYTEBIZZ 2K26                                          ║
║  "Local Talent, Global Stage"                                      ║
╚════════════════════════════════════════════════════════════════════╝

You are building ROOTS, a web application for a website development competition.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PHASE 0: READ ALL DOCS (MANDATORY FIRST STEP)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Read these four files IN ORDER before doing anything:

  1. CONTEXT.md    → Project background, decisions, team, open questions
  2. SOLUTION.md   → Concept, differentiators, one-line pitch
  3. PRD.md        → Full product requirements, features, pages, content, visual identity
  4. TRD.md        → Full technical design: schema, stack, architecture, components,
                     flows, folder structure, tailwind config, deployment

After reading all four, output this confirmation and WAIT:

─── CUT HERE ───────────────────────────────────────────────
✅ DOCS READ — READY TO BUILD

SUMMARY:
  Concept:  [one sentence]
  Stack:     [list]
  Top 5 features to build first:
    1.
    2.
    3.
    4.
    5.
  Visual identity: [colors, fonts, motif in one line]

Awaiting TASK assignment. I will build one task at a time.
─── END CUT ───────────────────────────────────────────────

DO NOT start building until you receive your first TASK prompt.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
RULES THAT APPLY TO EVERY TASK
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

• One task per prompt. Only modify files named in the task.
• Follow TRD §8 folder structure exactly.
• Use design tokens from TRD §9 (tailwind.config.js). NO default colors.
• Every component needs: loading state, empty state, error state (TRD §15).
• NEVER put API keys in code. Always import.meta.env.VITE_*
• Run `npm run dev` (or `npm run build`) after each change. Fix errors before finishing.
• VISUAL IDENTITY (NON-NEGOTIABLE):
  - Backgrounds: #1E2761 (stage), #151B3D (stage-deep), #1A2040 (stage-surface)
  - Accent:     #F9E795 (lamp/gold), #D4A843 (lamp-gold)
  - Text:       #E7E8D1 (bone), #A7BEAE (bone-muted)
  - Fonts:      heading = Playfair Display / serif, body = Inter / sans, mono = JetBrains Mono
  - Motif:      Lamp-lit shadow-puppet stage
  - FORBIDDEN:  purple gradients, glass-morphism, neon glows, gradient text,
               emoji as icons, stock illustrations, cream/beige backgrounds (#F5F5DC etc),
               accent lines under titles, decorative color bars or stripes
• Icons: Lucide React only (import individually per icon, never the whole lib)
• Animations: Framer Motion only
• Text quality: FINAL text everywhere. NO lorem ipsum. NO placeholder gibberish.
• Images: Use https://picsum.photos or Unsplash with proper credits for placeholders.
  Real artist photos for seed data should be sourced from Unsplash with photographer credit.
• Git commit after each task with descriptive message.

When you complete a task, output:

─── CUT HERE ───────────────────────────────────────────────
✅ TASK [N] COMPLETE: [task name]
Files created:   [list]
Files modified:  [list]
How to test:     [steps]
Next task needed: [Y/N, or what comes next logically]
─── END CUT ───────────────────────────────────────────────

Now read the 4 docs and confirm you're ready.
📁 PROMPTS/TASKS.md
TASK 1: Foundation & Project Setup
Markdown

## TASK 1: Foundation & Project Setup

Create the bare project skeleton with all tooling configured.

### WHAT TO CREATE/MODIFY:

**1. Initialize the project**
- Run: `npm create vite@latest . -- --template react` (in the project root)
- Do NOT use TypeScript. Plain JavaScript (.jsx).

**2. Install all dependencies**
```bash
npm install react-router-dom@6 @tanstack/react-query framer-motion react-globe.gl howler @supabase/supabase-js lucide-react clsx date-fns
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
3. Configure tailwind.config.js
Copy the COMPLETE config from TRD §9 — every color token (stage, lamp, bone, coral, tier), font family (heading/body/mono), fontSize scale, custom spacing, shadows, animations, keyframes. Do not shorten or simplify anything.

4. Create src/styles/globals.css

CSS

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    @apply bg-stage-deep text-bone font-body;
    margin: 0;
    min-height: 100vh;
  }
  * { box-sizing: border-box; }
}
5. Create the folder structure from TRD §8
Create EVERY directory listed in TRD §8. For empty directories, add a .gitkeep file.
The structure must be:

text

src/
├── main.jsx
├── App.jsx
├── lib/
│   └── supabase.js          (create file — see below)
├── hooks/
├── contexts/
│   ├── AuthContext.jsx       (create boilerplate)
│   └── AppContext.jsx        (create boilerplate)
├── components/
│   ├── layout/
│   ├── Hero/
│   ├── Globe/
│   ├── SidePanel/
│   ├── Artist/
│   ├── Upload/
│   ├── ScaleLab/
│   ├── About/
│   └── ui/
├── pages/
├── mocks/
│   └── global-lens/
└── styles/
    └── globals.css
Also create: public/textures/, public/sounds/, netlify/functions/, scripts/, .env.example

6. Create src/lib/supabase.js

JavaScript

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
7. Create src/contexts/AuthContext.jsx (boilerplate — don't implement fully yet)

React context with: user (null), loading (true), signIn, signUp, signOut
Placeholder functions that console.log
Export useAuth() hook
Wrap children, render nothing fancy
8. Create src/contexts/AppContext.jsx (boilerplate)

soundEnabled (true), toggleSound function
Export useApp() hook
9. Update index.html

<title>ROOTS — Local Talent, Global Stage</title>
Meta description about ROOTS
Link to Google Fonts: Playfair Display (400,700), Inter (400,500,600,700), JetBrains Mono (400)
Preconnect to fonts.googleapis.com
Favicon reference to /favicon.svg
<div id="root"></div> as the mount point
10. Create src/App.jsx (minimal routing shell)

QueryClientProvider wrapping everything
AuthProvider wrapping everything
AppProvider inside that
BrowserRouter with one route: / → <div>ROOTS loading...</div>
Import and use globals.css
11. Create src/main.jsx standard Vite entry importing App.jsx and ReactDOM rendering

12. Create .env.example with all vars from TRD §10

13. Create public/favicon.svg — a simple dark indigo circle with an amber "R" letter (SVG, inline)

QUALITY CHECK:
Run npm run dev. The page should load with no console errors (a blank dark page or "ROOTS loading..." is fine). No red text in terminal.

DO NOT:
Install TypeScript or any type annotations
Create actual page components or UI yet
Write any application logic beyond the boilerplate above
Skip any directory in the folder structure
text


---

## TASK 2: Database Schema + Seed Data

```markdown
## TASK 2: Database Schema & Seed Data Files

Create the SQL schema and seed data so the database can be set up in one step.

### WHAT TO CREATE:

**1. `supabase/schema.sql`**

Write the COMPLETE schema from TRD §3.2. Include:
- All extensions (uuid-ossp)
- `profiles` table + trigger for auto-create on auth
- `categories` table + 6 inserts (music, visual-art, dance, theatre, literature, film) with slugs and lucide icon names
- `artists` table with all columns, check constraints, indexes
- `global_lens` table
- `scout_votes` table with unique constraint
- `booking_requests` table
- `artist_views` table
- `update_artist_stats()` function with tier promotion logic
- Triggers on scout_votes insert/delete
- RLS policies on EVERY table (exactly as written in TRD §3.2)

Add a header comment block:
```sql
-- ============================================================
-- ROOTS — Database Schema v2.0
-- Local Talent, Global Stage
-- WebGen-Z @ BYTEBIZZ 2K26
--
-- Apply via: Supabase Dashboard > SQL Editor > Paste > Run
-- WARNING: This will DROP and recreate tables. Backup first.
-- ============================================================
2. scripts/seed-db.js

A Node.js script that:

Uses @supabase/supabase-js with SUPABASE_SERVICE_ROLE_KEY from env (or falls back to SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY)
Is idempotent: checks if categories exist before inserting; upserts artists by slug
Inserts data in this order: categories → profiles → artists → global_lens → scout_votes (sample)
Creates 32 artists distributed as per PRD §6:
Music: 8 artists (all 4 tiers represented, 6+ countries)
Visual Art: 6 artists (Local–National, 4+ countries)
Dance: 5 artists (Local–Regional, 3+ countries)
Theatre: 4 artists (Local–Regional, 3+ countries)
Literature: 4 artists (Local–National, 3+ countries)
Film: 5 artists (Local–National, 4+ countries)
Each artist gets:
Realistic name (mix of cultures: Indian, East Asian, African, European, Latin American, Middle Eastern)
Real city + country with ACCURATE latitude/longitude (use known coordinates)
Category slug matching categories table
2-4 sub_tags (relevant strings like ["carnatic-fusion", "vocalist"])
Bio: 2-3 sentences, specific, believable, 50-500 chars
Profile image URL: use https://i.pravatar.cc/300?img=[N] or Unsplash placeholder with credit note
Media links: 2-3 plausible URLs (can be placeholder domains)
Tier-appropriate stats (viewers, scouts, countries, score that matches tier thresholds from TRD §3.2)
is_live = true
global_lens_status = 'published'
Each artist gets a global_lens record with published status, containing mock text (see below)
Creates 2 test user profiles:
email: sai@test.com, password: password123 (note: password must be set via Supabase Auth Admin API or the script creates the profile only; document that the user needs to sign up via the app)
email: teammate@test.com
Creates 10-15 sample scout votes (distributed across artists, showing realistic patterns)
Logs every operation: "✓ Inserted artist: Arjun V. (music/local)" or "✗ Failed: ..."
Ends with a summary table: total artists per category, per tier
3. Mock Global Lens templates: src/mocks/global-lens/*.json (6 files)

Each file contains a template object:

JSON

{
  "story": "A vivid 2-3 paragraph narrative about this artist's journey. Write like an arts journalist — specific details, evocative language, no buzzwords like 'revolutionary' or 'trailblazer'. Reference real cultural traditions.",
  "style_explained": "1-2 paragraphs explaining this art form to someone who has NEVER encountered it. Use analogies. Avoid jargon completely.",
  "cultural_context": "1 paragraph about the regional/cultural background shaping this artist's work. Connect it to something universal."
}
Files:

music.json — Focus on a vocalist/instrumentalist tradition. Mention rhythm, texture, lineage.
visual-art.json — Focus on a painter/digital artist. Mention medium, color philosophy, influences.
dance.json — Focus on a traditional or contemporary dancer. Mention body as instrument, storytelling through movement.
theatre.json — Focus on a performer. Mention character, voice, stage presence, tradition vs innovation.
literature.json — Focus on a writer/poet. Mention language, themes, form, audience.
film.json — Focus on a filmmaker. Mention visual language, narrative style, cultural perspective.
Writing quality requirement: These must read like they were written by a thoughtful arts publication (like The New Yorker, Guardian Culture, or Pitchfork at its best). Not generic. Not flowery. Specific enough that swapping in an artist's name makes it feel personalized. 200-400 words per section.

The seed script should interpolate {name}, {category}, {city}, {country} into these templates when creating GL records.

QUALITY CHECK:
Run node scripts/seed-db.js --dry-run (if you implement a dry-run flag) OR just review the code for correctness
Verify the SQL file has no syntax errors (all semicolons, proper quoting)
Count: schema.sql should have ~250+ lines of SQL. seed-db.js should be ~300+ lines. Each mock JSON should be 200-400 words per section (so ~600-1200 words total per file).
DO NOT:
Actually connect to Supabase and run these — just create the files
Use lorem ipsum or generic text in the mock GL files
Skip any of the 32 artists (they all need to exist for the demo globe to look populated)
text


---

## TASK 3: Authentication (Complete Flow)

```markdown
## TASK 3: Authentication — Complete Sign Up / Sign In / Session Flow

Build auth end-to-end so users can create accounts and persist sessions.

### WHAT TO CREATE/MODIFY:

**1. Complete `src/contexts/AuthContext.jsx`**
- Use `createContext` + `useContext` pattern
- State: `user` (object or null), `loading` (boolean, true initially)
- On mount: call `supabase.auth.getSession()` to recover existing session
- Subscribe to `supabase.auth.onAuthStateChange` → update user/loading
- `signIn(email, password)` → `supabase.auth.signInWithPassword(...)`
- `signUp(email, password, displayName)` → `supabase.auth.signUp(...)` + update profile display_name
- `signOut()` → `supabase.auth.signOut()`
- Return `{ user, loading, signIn, signUp, signOut }` from provider value
- Export `useAuth()` hook (throws if used outside provider)

**2. Create reusable UI primitives:**

`src/components/ui/Input.jsx`:
- Props: label, type, value, onChange, error, disabled, placeholder
- Styled: bg-stage-raised, border border-stage-surface, rounded-lg, px-4 py-2.5, text-bone, focus:border-lamp focus:ring-1 focus:ring-lamp/30
- Error state: border-coral text-coral (small text below input)
- Label: small, bone-muted, mb-1 block

`src/components/ui/Button.jsx`:
- Props: children, variant ('primary' | 'secondary' | 'ghost' | 'danger'), size ('sm' | 'md' | 'lg'), loading, disabled, onClick, fullWidth
- Primary: bg-lamp text-stage-deep font-semibold, hover:bg-lamp-gold, disabled:opacity-50
- Secondary: border border-lamp text-lamp, hover:bg-lamp/10
- Ghost: text-bone hover:bg-stage-raised
- Danger: bg-coral text-white
- Loading: show spinner (inline SVG animation) + disable button + change text to "Loading..."
- Sizes: sm=py-1.5 px-3 text-sm, md=py-2.5 px-5 text-base, lg=py-3 px-7 text-lg

`src/components/ui/Card.jsx`:
- Props: children, className
- Bg-stage-surface, rounded-2xl, border border-stage-raised, p-6, shadow-card

**3. Create `src/pages/SignInPage.jsx`**
- Centered vertically and horizontally on bg-stage-deep
- Card component containing:
  - Large heading: "Welcome back" (font-heading, text-2xl)
  - Subheading: "Sign in to enter the stage" (text-bone-muted, text-sm)
  - Form: Email Input + Password Input (type=password) + Button("Sign In", primary, fullWidth)
  - Footer text: "Don't have an account? " + link to /sign-up ("Create one")
- On submit: call `signIn()`. Handle errors: toast or inline error message.
- On success: `navigate('/discover')`
- If already logged in (user exists): redirect to `/discover` immediately (use `Navigate` from react-router)
- Animate entrance: Framer Motion fade-in + slide-up

**4. Create `src/pages/SignUpPage.jsx`**
- Same layout/card style as SignInPage
- Heading: "Join the stage"
- Subheading: "Create your account to discover and be discovered"
- Form: Display Name Input + Email Input + Password Input + Button("Create Account", primary, fullWidth)
- Footer: "Already have an account? " + link to /sign-in ("Sign in")
- On submit: call `signUp(name, email, password)`
- After signup success: show "Check your email to confirm, then sign in" message (or auto-sign-in if email confirmation is off)
- Same animate entrance as SignInPage

**5. Update `src/App.jsx`**
- Add routes:
  - `/sign-in` → `<SignInPage />`
  - `/sign-up` → `<SignUpPage />`
  - `/` → redirect to `/discover` (placeholder for now)
- Wrap routes in `<Suspense>` with a simple fallback (dark spinner)
- Ensure AuthProvider and QueryClientProvider wrap everything

**6. Create a simple ProtectedRoute component** (for later use):
`src/components/layout/ProtectedRoute.jsx`
- Checks `useAuth().user`
- If no user && loading done: `<Navigate to="/sign-in" replace />`
- If loading: show centered spinner
- Otherwise: render `<Outlet />` or children

### QUALITY CHECK:
1. `npm run dev` — no errors
2. Visit /sign-up — fill form, submit. Check Supabase Dashboard > Auth > Users — new user appears.
3. Sign out, visit /sign-in — login with same creds. Should redirect to /discover (or wherever).
4. Refresh page — session persists (user stays logged in).
5. Try wrong password — see error message, no crash.
6. Check mobile: card shouldn't overflow screen.

### DO NOT:
- Build any other pages yet
- Add OAuth (Google/GitHub) — email/password only for demo
- Forget the loading states (when checking session on mount, show something)
TASK 4: App Shell Layout + Header
Markdown

## TASK 4: Application Shell — Layout, Header, Routing Skeleton

Build the persistent shell that wraps the main experience.

### WHAT TO CREATE/MODIFY:

**1. Create `src/components/layout/Header.jsx`**
A fixed top bar:
- Height: ~64px (h-16)
- Background: bg-stage/80 backdrop-blur-sm (subtle, not heavy glass — just readability over scrolling content)
- Border-bottom: border-b border-stage-raised
- Contents (flex row, items-center, justify-between, px-6):
  - **Left:** Logo — text "ROOTS" in font-heading, text-xl, text-lamp. Below it in tiny text: "Local Talent, Global Stage" (text-bone-faint, text-[10px], tracking-widest uppercase). Wraps as a link to `/discover`.
  - **Center:** (empty for now, will hold search later)
  - **Right:** 
    - Sound toggle button: icon from lucide (Volume2 / VolumeX). Small, ghost variant. Toggles `useApp().soundEnabled`.
    - User avatar: if logged in, show a circle (w-8 h-8, rounded-full, bg-lamp/20, text-lamp, flex center, initials of display_name). Clicking opens a dropdown menu (absolute positioned): "Profile", "Sign Out". If not logged in: "Sign In" button (ghost variant, small).

Use `useAuth()` for user state. Use `useApp()` for sound. Use `useNavigate()` for navigation.

**2. Create `src/components/layout/Footer.jsx`**
Minimal footer:
- Py-6, px-6, border-t border-stage-raised
- Flex: left side "© 2026 ROOTS. WebGen-Z @ BYTEBIZZ 2K26." (text-bone-faint, text-xs)
- Right side: links "About", "How It Works" (text-bone-muted, hover:text-lamp, text-xs) — these can be # anchors for now
- Keep it visually lightweight — not a big block taking up screen space

**3. Create `src/components/layout/AppShell.jsx`**
The main layout wrapper:
- Renders: `<Header />` + `<main>{children}</main>` + `<Footer />`
- Main: `min-h-[calc(100vh-64px-80px)]` (accounting for header + footer)
- Accepts `children`
- This is what wraps the Discover page, About page, etc. (but NOT Hero flow pages — those are fullscreen)

**4. Create `src/pages/DiscoverPage.jsx`**
Placeholder page for now — just renders inside AppShell:
- A div with: "GLOBE + SIDE PANEL GOES HERE" (centered text, text-bone-muted)
- This confirms the shell works

**5. Create `src/pages/AboutPage.jsx`**
Renders inside AppShell. For now: a heading "About ROOTS" and a placeholder paragraph. We'll flesh this out in a later task.

**6. Update `src/App.jsx` routes:**
/sign-in → SignInPage (no shell)
/sign-up → SignUpPage (no shell)
/discover → <AppShell><DiscoverPage /></AppShell>
/about → <AppShell><AboutPage /></AppShell>
/ → redirect to /discover

text


**7. Create `src/components/ui/Logo.jsx`** (extracted from Header)
- Reusable: renders "ROOTS" wordmark
- Props: size ('sm' | 'md' | 'lg') — adjusts font size
- Used in Header and GateScreen (later task)

### QUALITY CHECK:
1. `npm run dev` — visit /discover — see header (with ROOTS logo, sound toggle, empty avatar area), footer, and "GLOBE + SIDE PANEL" text in between
2. Header sticks on scroll (position sticky top-0 z-50)
3. Sound toggle clicks without error (won't play sound yet, just toggles state)
4. Visit /about — same shell, different content
5. Visit / — redirects to /discover
6. Mobile: header doesn't overflow, elements don't squash

### DO NOT:
- Build the globe or side panel yet
- Make the header complex (no search, no notifications yet)
- Use heavy blur/glass effects on header (the identity forbids glass-morphism)
TASK 5: Globe Component (react-globe.gl Integration)
Markdown

## TASK 5: Interactive Globe — Core Discovery Interface

Build the 3D globe that is the heart of the entire application.

### WHAT TO CREATE/MODIFY:

**1. Install dependency (if not already done):**
```bash
npm install react-globe.gl
2. Create src/components/Globe/Globe.jsx

This is the main globe instance. It is a complex component — build it carefully.

Props:

artists: array of objects: { id, display_name, latitude, longitude, tier, category_slug }
onArtistClick(artistId): callback when a lamp is clicked
selectedArtistId: string | null (highlights/animates the selected lamp)
categoryFilter: string | null (if set, only lamps of this category glow; others hidden or very dim)
Internal state:

globeRef (ref to the react-globe.gl element)
Current camera position (for zoom-level awareness, stored but not necessarily used yet)
Render configuration:

JavaScript

<Globe
  ref={globeRef}
  width={containerWidth}          // useResizeObserver or parent dims
  height={containerHeight}
  globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
  backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
  atmosphereColor="#F9E795"
  atmosphereAltitude={0.15}
  pointsData={processedArtists}    // see below
  pointLat="lat"
  pointLng="lng"
  pointColor="color"
  pointRadius="size"
  pointAltitude={0.05}
  pointLabel="label"              // HTML string or function returning HTML
  onPointClick={(point) => onArtistClick(point.id)}
  pointsMerge={true}              // performance: merge into one geometry
  {...(selectedArtistId && {
    // highlight selected: could adjust point size/color for selected ID
  })}
/>
Processing artists into point data:
Map the artists prop array into point objects:

JavaScript

const processedArtists = artists
  .filter(a => !categoryFilter || a.category_slug === categoryFilter)
  .map(a => ({
    id: a.id,
    lat: a.latitude,
    lng: a.longitude,
    name: a.display_name,
    tier: a.tier,
    category: a.category_slug,
    // Color by tier (from TRC §9 tier colors):
    color: tierToHex(a.tier),  // local=#6B7A6A, regional=#CD9B4A, national=#C0C0C0, global=#F9E795
    size: tierToSize(a.tier),  // local=0.4, regional=0.6, national=0.8, global=1.2
    // HTML label (shown on hover):
    label: `
      <div class="bg-stage-deep/90 border border-lamp/30 rounded-lg px-3 py-2 text-center shadow-lamp" style="min-width:120px">
        <p class="text-bone font-heading text-sm">${a.display_name}</p>
        <p class="text-bone-muted text-[10px] uppercase tracking-wider mt-0.5">${a.tier} · ${a.category_slug.replace('-', ' ')}</p>
        <p class="text-lamp text-[10px] mt-1">${a.city}, ${a.country}</p>
      </div>
    `,
  }));
Helper functions tierToHex(tier) and tierToSize(tier) — define these in the file or in src/lib/utils.js.

Container sizing:

The Globe component fills its parent container (w-full h-full).
Parent should have explicit dimensions (e.g., w-full h-[calc(100vh-64px-80px)] or similar — the space between header and footer).
Use a useRef + ResizeObserver or just let CSS handle it with a wrapper div of w-full h-full.
Performance notes:

Cap pixel ratio: override the WebGL context's pixel ratio to max 2
pointsMerge={true} is important for 200+ points
If artists array is empty or loading: show a subtle loading indicator (not the globe spinning, just a "loading artists..." overlay or keep globe showing with no points)
3. Create src/hooks/useArtists.js
A custom hook using TanStack React Query:

JavaScript

// Fetches all live artists from Supabase
// Query key: ['artists']
// select: id, display_name, latitude, longitude, tier, category_slug, slug, city, country
// where: is_live = true
// order by: stage_score desc
// staleTime: 5 minutes (artists don't change every second)
// Returns: { artists, isLoading, isError, error, refetch }
4. Create src/lib/utils.js
Utility functions:

tierToHex(tier) — returns color string
tierToSize(tier) — returns number
tierToLabel(tier) — returns "Local", "Regional", etc.
calculateScore(viewers, scouts, countries) — returns number
formatNumber(n) — formats large numbers (1500 → "1.5K", 250000 → "250K")
getInitials(displayName) — "Arjun Vijayakumar" → "AV"
5. Wire into DiscoverPage (TEMPORARY integration):
Update src/pages/DiscoverPage.jsx to:

Use useArtists() hook
Render the Globe component inside a container div that takes most of the width (e.g., w-2/3 h-full or w-full h-full for now since we don't have the side panel yet)
Pass artists data to Globe
Handle loading state (show spinner/skeleton while isLoading)
Handle error state (show retry button)
Log clicked artist ID to console (we'll wire to side panel next task)
Add category filter state (default null) with a temporary row of pill buttons above the globe to filter by category (Music, Visual Art, etc.) — this is temporary UI, will be replaced by Selection Screen later
6. Create src/mocks/artists.json
Mock data for development when Supabase isn't connected:

10 sample artists with the same shape as DB records
Used as fallback in useArtists() if env var VITE_USE_MOCK_DATA=true (optional, or just always hit Supabase)
QUALITY CHECK:
npm run dev, go to /discover
See a dark Earth globe with amber/gold/gray dots (lamps) scattered across it
Hover over a dot: tooltip shows artist name, tier, city
Click a dot: console logs the artist ID
Use the temporary category pills: clicking "Music" should hide non-music lamps; clicking again or selecting "All" shows all
Rotate the globe by dragging
Zoom with scroll wheel
No console errors related to WebGL or react-globe.gl
Page loads in under 3 seconds (check Network tab)
Responsive: on smaller screens, globe still renders (may need min-height)
DO NOT:
Build the side panel yet (next task)
Add arcs/connections yet (later enhancement)
Make the globe transparent or weirdly styled — dark earth, visible land masses, glowing points
Use the default blue earth image — use the dark one specified
text


---

## TASK 6: Side Panel System

```markdown
## TASK 6: Side Panel — Contextual Panel Alongside the Globe

Build the right-side panel that shows artist cards, category info, or help content depending on user interaction.

### WHAT TO CREATE/MODIFY:

**1. Create `src/components/SidePanel/SidePanel.jsx`**

This is the container/orchestrator. It manages which "view" to show based on props/state.

Props:
- `view`: 'default' | 'artist' | 'category' | 'region'
- `selectedArtist`: object | null (full artist data when view='artist')
- `categoryData`: object | null (category info when view='category')
- `onClose`: fn (resets to 'default')

Layout:
- Fixed width: `w-[420px]` on desktop (`hidden` or `w-full` on mobile — but mobile handling can come later)
- Height: full available height (between header/footer)
- Background: bg-stage-surface
- Border-left: border-l border-stage-raised
- Overflow-y-auto (scrollable internally)
- Padding: p-6
- Close button (X icon, top-right, absolute or flex-row-end) — only visible when view !== 'default'

Based on `view` prop, render:
- `'default'` → `<DefaultView />`
- `'artist'` → `<ArtistCard artist={selectedArtist} />` (compact version)
- `'category'` → `<CategoryInfoView category={categoryData} />`
- `'region'` → `<RegionListView regionData={...} />` (can be skeleton for now)

**2. Create `src/components/SidePanel/DefaultView.jsx`**
Shows when no artist is selected and no active filter. Content:
- Heading: "How ROOTS Works" (font-heading, text-h2, text-lamp, mb-6)
- Three cards (using the Card UI component), stacked vertically, gap-4:

Card 1: 🌍 (icon: Globe from lucide, rendered in a colored circle w-10 h-10 rounded-full bg-lamp/10 flex center, icon text-lamp)
- Title: "Discover by Place"
- Body: "Every artist starts somewhere. Explore talent emerging from cities across the globe. Zoom from your neighborhood to the whole world."

Card 2: 🔍 (icon: Sparkles or Eye)
- Title: "Global Lens"
- Body: "AI writes context that bridges cultures — but the artist approves every word before it goes public. Understanding, not assumptions."

Card 3: 🪜 (icon: TrendingUp or ArrowBigUp)
- Title: "Climb the Ladder"
- Body: "Four stages from Local to Global. Your reach, endorsements, and impact determine how far you rise."

At bottom: a muted text "Select an artist on the globe to learn more" (text-bone-faint, text-sm, text-center, mt-8)

**3. Create `src/components/SidePanel/ArtistCard.jsx`**

COMPACT version (for side panel). Props: `artist` (object with all needed fields).

Layout (vertical):
- **Top row**: Artist image (rounded-xl, w-full h-48 object-cover, mb-4) — use artist.profile_image_url or a fallback gradient with initials
- **Name**: font-heading, text-h3, text-bone, mb-1
- **Tier badge**: inline Badge component (pill-shaped, bg colored by tier, text-tiny, uppercase, tracking-wider, px-2 py-0.5 rounded-full). Next to it: place (city, country) in text-bone-muted text-caption
- **Category chip**: small pill, icon + category name, bg-stage-raised, text-bone-muted, text-xs, mt-2
- **Global Lens snippet**: section with label "Global Lens" (text-xs uppercase tracking-wider text-lamp mb-1), then first 150 chars of GL story_text, truncated with "...", then a "Read more →" link (text-lamp, text-sm, underline-offset-2). Mt-4, pt-4, border-t border-stage-raised.
- **Stats row**: flex, 3 items (or 4), each: icon + number + label. Viewers (Eye icon), scouts (Users icon), countries (Globe icon). Numbers formatted (formatNumber utility). Text-bone for numbers, text-bone-faint for labels. Mt-4.
- **Actions**: two buttons, flex row, gap-3, mt-4
  - "Scout" button (Button, secondary variant, icon: Star/Plus) — if user is logged in and hasn't scouted. Shows "Scouted" if already scouted.
  - "View Profile" button (Button, ghost variant, icon: ArrowRight) — links to `/artist/{slug}`

Import and use: `useAuth()` to check login status, `useScout()` hook (create a basic one that just logs for now — we'll implement the real mutation in Task 8).

**4. Create `src/components/SidePanel/CategoryInfoView.jsx`**
Props: `category` ({ slug, name, icon_name })
- Icon large (w-16 h-16, rounded-2xl, bg-lamp/10, flex center, icon text-lamp, mb-4)
- Category name: font-heading, text-h2, text-bone, mb-2
- Description paragraph (write a SHORT compelling description for each category — store in a map/object in this file or import from constants):
Music: "Voices and instruments that carry tradition forward — or tear it down and rebuild it."
Visual Art: "Canvases, screens, and surfaces where culture paints itself visible."
Dance: "Bodies that speak louder than words, telling stories older than memory."
Theatre: "The living stage where character, conflict, and catharsis meet."
Literature: "Words shaped into worlds — poetry, prose, and the spaces between."
Film: "Moving images that capture moments, movements, and the human condition frame by frame."

text

- "Top Artists" section: list the top 3 artists in this category (passed as prop or fetched). Show mini-cards (just name + tier badge + city). Clicking one triggers the artist selection.

**5. Create `src/components/ui/Badge.jsx`**
- Props: children, variant (tier-based or color string), size ('sm' | 'md')
- Pill-shaped (rounded-full)
- Size sm: text-[10px] px-2 py-0.5; md: text-xs px-3 py-1
- Passes through className for custom colors

**6. Wire everything together in `DiscoverPage.jsx`:**
Layout becomes a flex row:
<div className="flex h-[calc(100vh-64px-80px)]"> {/* Left: Globe — takes remaining space */} <div className="flex-1 relative"> <Globe ... /> </div>
{/* Right: Side Panel — fixed width */}
<SidePanel
view={sidePanelView}
selectedArtist={selectedArtist}
categoryData={selectedCategory}
onClose={() => setSidePanelView('default')}
/>

</div> ```
State management in DiscoverPage:

selectedArtistId (string | null) — set when Globe fires onArtistClick
sidePanelView (default|artist|category|region)
selectedArtist (object | null) — fetch full artist data when selectedArtistId changes
categoryFilter (string | null) — also sets sidePanelView to 'category' when changed
When an artist is clicked on the globe:

Set selectedArtistId
Fetch the full artist data (create a useArtist(slug) hook or query directly)
Set sidePanelView = 'artist'
Set selectedArtist = fetchedData
Add a useEffect that watches selectedArtistId and fetches artist details. Show a shimmer/skeleton in the side panel while fetching.

Remove the temporary category pills from Task 5 — the category filter will move to the Selection Screen (Hero flow) later, but for now you can keep a minimal version or remove it entirely and just show all artists.

QUALITY CHECK:
Go to /discover
See globe on left, "How ROOTS Works" default view on right
Click a lamp on globe → side panel switches to ArtistCard with artist's data
See artist image area (or initials fallback), name, tier badge, place, category, GL snippet, stats, Scout + View Profile buttons
Click X (close) on side panel → returns to DefaultView
ArtistCard looks good: no text overflow, image area proportioned correctly, stats readable
Click "View Profile" → navigates to /artist/:slug (will 404, that's OK — we build that page next)
DO NOT:
Implement the real scout mutation (next task)
Build the full artist profile page (next task)
Make the side panel collapsible/animated on desktop (it can just be there)
Put glass/blur effects on the side panel
text


---

## TASK 7: Artist Profile Page (Full)

```markdown
## TASK 7: Artist Profile Page — Full Detail View

Build the dedicated profile page for each artist (/artist/:slug).

### WHAT TO CREATE/MODIFY:

**1. Create `src/hooks/useArtist.js`**
Custom hook:
- Takes `slug` (from URL param)
- Queries `artists` table joined with `profiles`, `global_lens`, `categories`
- Select: all artist fields, profile.avatar_url, global_lens.*, categories.name, categories.icon_name
- Filter: `slug = $1`, `is_live = true`
- Single query (`.single()`)
- Returns: { artist, isLoading, isError, error }
- Also fetches scout count (can be from artist.scout_count denormalized column, or separate query)

**2. Create `src/pages/ArtistPage.jsx`**

This renders INSIDE AppShell (header + footer visible).

Uses `useParams()` to get `:slug`, passes to `useArtist(slug)`.

While loading: full-page skeleton/shimmer (match the layout structure: hero banner skeleton, text line skeletons, stat box skeletons).

On error: "Artist not found" message with a "Back to discovery" button.

On success, render these SECTIONS in order:

**SECTION A: Hero Banner**
- Full-width (within the content area, not viewport-wide)
- Height: ~280px (h-70)
- Background: gradient from stage-deep to stage (subtle, diagonal or radial)
- If artist has profile_image_url: show image as background with dark overlay (bg-gradient-to-t from-stage-deep/90 via-stage-deep/50 to-transparent)
- Content overlaid at bottom-left, padding: p-8:
  - Tier badge: large (Badge, md size, tier-colored)
  - Name: font-heading, text-hero (3rem), text-bone, mt-2, drop-shadow
  - Place: text-bone-muted, text-body-lg, flex items-center, gap-2 (MapPin icon + "City, Country")
  - Category: chip with icon, text-sm, mt-2
  - Action buttons row: Scout CTA button (large, prominent) + Booking button (secondary) + Share button (ghost, icon only: Share2). Flex row, gap-3, mt-6.

**SECTION B: Global Lens (THE STAR FEATURE)**
- Container: max-w-3xl (constrain reading width), mx-auto, mt-12
- Section label: tiny uppercase "GLOBAL LENS" in text-lamp, tracking-[0.2em], mb-4, flex items-center gap-2 (Sparkles icon)
- Three sub-sections, each separated by mt-8:

  **Your Story:**
  - Heading: font-heading, text-h2, text-bone, mb-3
  - Body: text-body-lg, text-bone, leading-relaxed (leading-loose or 1.8), max-w-prose
  - Content: `artist.global_lens.story_text`

  **Your Style Explained:**
  - Heading: font-heading, text-h3, text-lamp, mb-3
  - Body: text-body, text-bone/90, leading-relaxed
  - Content: `artist.global_lens.style_text`

  **Your Cultural Context:**
  - Heading: font-heading, text-h3, text-lamp, mb-3
  - Body: text-body, text-bone/90, leading-relaxed
  - Content: `artist.global_lens.cultural_context_text`

Styling for GL section:
- Left border accent: border-l-2 border-lamp/40 pl-6 on each sub-section (or on the whole GL container)
- Or: subtle bg-stage-raised/30 rounded-2xl p-8 for the entire GL block
- Typography is KEY here — this is the magazine-feature moment. Generous line-height (1.7-1.8), comfortable measure (max 65-70ch), no hyphenation.

**SECTION C: Stats Bar**
- Container: bg-stage-surface, rounded-2xl, p-6, mt-12, grid grid-cols-4, gap-4
- 4 stat blocks, each centered:
  - Icon (large, text-lamp/60, w-8 h-8 mb-2)
  - Number: font-heading, text-h1 (2.25rem), text-bone
  - Label: text-caption, text-bone-muted, uppercase tracking-wider, mt-1
- Stats: Unique Viewers (Eye icon, artist.unique_viewer_count), Scouts (Users icon, artist.scout_count), Countries (Globe icon, artist.countries_reached), Stage Score (TrendingUp icon, artist.stage_score)
- Highlight the score differently (maybe slight glow or lamp color)

**SECTION D: Media Links**
- If artist.media_links exists and length > 0:
- Heading: "Links" (font-heading, text-h3, text-bone, mt-12, mb-4)
- Flex wrap, gap-3:
  - For each link: a styled button/link
    - Icon depending on type (Instagram icon for instagram, Youtube for youtube, etc. — map type names to lucide icons)
    - Label: domain name or type name
    - Styling: bg-stage-raised, border border-stage-surface, rounded-xl, px-4 py-3, text-bone, hover:border-lamp/50 transition-colors, flex items-center gap-2
- External link icon (ExternalLink, tiny, text-bone-faint) on each

**SECTION E: Booking Modal (triggered by "Book [Name]" button)**
Create `src/components/Artist/BookingModal.jsx`:
- Modal overlay (fixed inset-0, bg-black/60, flex center, z-50, Framer Motion fade+scale entrance)
- Card (bg-stage-surface, rounded-2xl, p-8, max-w-lg, w-full mx-4)
- Heading: `Book ${artist.name}` (font-heading, text-h2)
- Subheading: "Send a booking request or collaboration inquiry" (text-bone-muted, text-sm, mb-6)
- Form fields (using Input component):
  - Your name (required)
  - Your email (required, type=email)
  - Event / Organization (optional)
  - Date (optional, type=date)
  - Message (required, textarea, min 20 chars, 4 rows)
- Buttons: Cancel (ghost) + Send Request (primary, loading state)
- On submit: insert into booking_requests table via supabase
- On success: close modal, show toast "Request sent!"
- On error: show inline error

State: open boolean, controlled by parent (ArtistPage). Pass `isOpen`, `onClose`, `artistId`, `artistName`.

**SECTION F: Share Button**
Simple: copies `window.location.href` to clipboard.
- Use `navigator.clipboard.writeText()`
- Show toast "Link copied!" on success
- Share2 icon button

**3. Update routing in App.jsx:**
- Route: `/artist/:slug` → `<AppShell><ArtistPage /></AppShell>`

**4. Update the "View Profile" link in ArtistCard (SidePanel)** to navigate to `/artist/${artist.slug}`.

### QUALITY CHECK:
1. Navigate manually to /artist/arjun-v (or whatever slug exists in seed data)
2. See full profile: hero with name/tier/place, GL sections beautifully typeset, stats bar, media links
3. Click Scout button: should at least toggle UI state (even if mutation isn't wired yet)
4. Click Book button: modal opens, fill form, submit → check Supabase booking_requests table for new row
5. Click Share: URL copied toast appears
6. Scroll down: smooth, no jank, sections well-spaced
7. Mobile: hero banner squashes gracefully, GL text still readable, stats stack to 2x2 grid

### DO NOT:
- Implement the real scout mutation logic (Task 8 does that)
- Add comments section or social feed
- Let GL text overflow its container (use word-break, overflow-wrap, max-width)
- Use white or light backgrounds anywhere — everything stays dark-themed
TASK 8: Scout System (Complete Mutation + Optimistic Update)
Markdown

## TASK 8: Scout System — End-to-End Endorsement Flow

Make the Scout button actually work: toggle, optimistic UI update, score recalculation, persistence.

### WHAT TO CREATE/MODIFY:

**1. Create `src/lib/mutations.js`**
Centralize all write operations (mutations):

```javascript
// toggleScout(voterId, artistId, isCurrentlyScouted)
//   - If !isCurrentlyScouted: INSERT into scout_votes
//   - If isCurrentlyScouted: DELETE from scout_votes
//   - Returns the result
//   - Handles errors gracefully

// submitBooking(requestData)
//   - Insert into booking_requests
//   - Returns the new record

// Other mutations can live here too
2. Create src/hooks/useScout.js
Custom hook using useMutation from TanStack Query:

JavaScript

// Takes: artistId
// Returns: { isScouted, isLoading, toggleScout, scoutCount }

// Internal logic:
// 1. Check current state: query scout_votes for (currentUserId, artistId) -> maybeSingle()
//    This tells us if user has already scouted this artist
// 2. Mutation: calls toggleScout() from mutations.js
// 3. On mutate (optimistic):
//    - Flip isScouted boolean
//    - Adjust scoutCount (+1 or -1)
//    - This makes the UI respond instantly
// 4. onSuccess: invalidate queries for:
//    - ['artist', slug] (refreshes artist stats)
//    - ['artists'] (might affect sort order)
// 5. onError: rollback optimistic update (revert isScouted and scoutCount)
// 6. Toast notification: "You scouted [name]" or "Scout removed"
3. Update src/components/Artist/ScoutButton.jsx (extract from ArtistPage/ArtistCard)
Reusable scout button component:

Props: artistId, artistName, initialIsScouted, initialScoutCount, size ('sm' | 'md' | 'lg')

Behavior:

Checks useAuth().user — if null: render button as "Sign in to scout", onClick → navigate to /sign-in?redirect=/current-path
If logged in: uses useScout(artistId) hook
Displays:
When NOT scouted: Star icon + "Scout [Name]" (or just "Scout" for compact) + "(+5 pts)" hint in tiny text
When scouted: filled Star icon (solid) + "Scouted ✓" + maybe the count
Loading: spinner
Size variants:
lg (profile page): large button, icon + text, prominent (secondary or outlined style)
sm (card): compact, icon + short text or icon only
Animation on toggle: Framer Motion scale bounce (0.95 → 1.05 → 1) + color transition
Show impact explanation below or as tooltip: "Each scout adds 5 points to [name]'s stage score"
4. Integrate ScoutButton into:

ArtistPage.jsx (Section A, hero area, large button) — pass artistId, use initialIsScouted from a query or derived state
ArtistCard.jsx (SidePanel, actions row, smaller button)
Both get their own useScout(artistId) instance, or the state is lifted up — simplest: each usage calls the hook (React Query deduplicates anyway)
5. Update useArtists.js and useArtist.js hooks:

Include scout status for the current user in the query:
For useArtist: add a subquery or separate query to check if auth.uid() has voted for this artist
Alternative (simpler for demo): in the component, derive initial state from a quick maybeSingle query inside the hook
After scout toggle: invalidate the artist query so fresh data (including updated scout_count and stage_score) refetches and updates the UI
6. Verify the database trigger works:

After inserting/deleting a scout_vote, the trigger should fire update_artist_stats()
This recalculates: unique_viewer_count, scout_count, countries_reached, stage_score, tier
The next time the artist query runs, it should show updated numbers
Test this manually: scout an artist, refresh the page, check that scout_count increased by 1 and stage_score increased by 5
7. Create src/components/ui/Toast.jsx (simple toast system):

Context-based: ToastProvider wraps app, exposes toast(message, type) function
Types: 'success' (border-l-success), 'error' (border-coral), 'info' (border-lamp)
Position: bottom-right, stacked, auto-dismiss after 3 seconds
Framer Motion: slide in from right + fade
Used by: scout toggle (success/error), booking submit, share copy
QUALITY CHECK:
Go to an artist profile (logged in as sai@test.com)
See Scout button in "not scouted" state
Click it:
Button immediately changes to "Scouted ✓" (optimistic — fast)
Toast appears: "You scouted Arjun V."
Stats bar: Scout count +1, Stage Score +5 (after refetch)
Button animation plays (bounce/scale)
Click Scouted button again (unscout):
Reverts to "Scout" state
Toast: "Scout removed"
Stats update accordingly
Log out, visit artist profile:
Scout button says "Sign in to scout"
Click → redirects to /sign-in
Go to Discover, click artist lamp → see ArtistCard in side panel
Scout button there also works (same behavior, compact size)
Check Supabase dashboard: scout_votes table shows your vote appearing/disappearing
Rapid-click scout button: no duplicate entries (unique constraint), no crashes
DO NOT:
Allow self-scouting (add a check: if artist.profile_id === user.id, disable button with "You can't scout yourself")
Break the optimistic update (test: disconnect network, click scout, see rollback)
Forget error handling (LLM down, network error, etc.)
text


---

## TASK 9: Hero Flow — Loader, Gate, Selection Screen

```markdown
## TASK 9: Hero Flow — Cinematic Entry Sequence (Loader → Gate → Selection)

Build the three-screen entry flow that users see before the main app shell.

### WHAT TO CREATE/MODIFY:

**IMPORTANT: These pages do NOT render inside AppShell. They are FULLSCREEN, no header/footer.**

**1. Create `src/pages/HeroPage.jsx`**
This is actually a controller/stepper that manages which sub-screen to show:
- State: `step`: 'loader' | 'gate' | 'selection'
- Step transitions happen automatically (loader→gate) or on user action (gate→selection, selection→app)
- Each step is a separate component rendered conditionally
- Framer Motion `AnimatePresence` for transitions between steps
- Uses `useNavigate()` to push to '/discover' after selection completes

**2. Create `src/components/Hero/LoaderScreen.jsx`**
Fullscreen (`w-screen h-screen`, `fixed inset-0`, `z-50`, `bg-stage-deep`, `flex center`):

- Single element: percentage counter
  - Font: font-mono
  - Size: text-display (4rem) or larger (6rem)
  - Color: text-bone (subtle, not blaring)
  - Content: starts at "0%", animates to "100%"
- Animation:
  - Mount: counter starts at 0
  - Use `useEffect` + `setInterval` or `requestAnimationFrame` to count 0→100 over ~2000ms
  - Format: `${Math.round(value)}%` (always integer, always %)
- Optional: very subtle ambient pulse behind the number (a dim lamp-glow radial gradient that breathes)
- When reaches 100%:
  - Wait 300ms (let user see "100%")
  - Call `onComplete()` prop (which advances to gate step)
  - Exit animation: fade out

**3. Create `src/components/Hero/GateScreen.jsx`**
Fullscreen, bg-stage-deep, flex center, Framer motion entrance (fade + slight slide-up):

Content (vertically centered, text-center, max-w-md mx-auto):
- Optional: a thin horizontal rule or decorative element at top (NOT a thick color bar — think hairline, maybe a subtly glowing line in lamp/20 opacity)
- Headline: one powerful line
  - Options (pick ONE or make it configurable):
    - "Enter the stage."
    - "The world is listening."
    - "Local talent. Global stage."
  - Font: font-heading, text-hero (3rem) or larger, text-bone, font-light (weight 300-400), tracking-tight
  - Line height: tight (leading-none or leading-tight)
- Spacing: my-8 or my-10
- CTA Button (THE focal point):
  - `[ Enter ]` — bracket-style decoration
  - Custom styling: large (lg or xl), bg-transparent, border-2 border-lamp, text-lamp, font-mono, letter-spacing widest, px-10 py-4
  - Hover: bg-lamp/10, border-lamp, maybe subtle lamp-glow shadow
  - Click handler: `onEnter()` prop
- Below button (mt-6): tiny text "Best experienced with headphones 🔊" (text-bone-faint, text-[11px]) — NOTE: use a small lucide Headphones icon, NOT emoji. If emoji shows here, fix it.

Entrance: fade in + translateY(20px → 0), duration 0.8s, ease-out.
Exit: fade out (when user clicks Enter).

**4. Create `src/components/Hero/SelectionScreen.jsx`**

Fullscreen, bg-stage-deep, but with the GLOBE starting to render BEHIND this screen (at reduced opacity).

Layout:
- Backdrop layer (z-0): The Globe component! Render it here at `opacity-0.3` or `opacity-0.2`, `pointer-events-none` (not interactive yet). This gives the impression the stage is being revealed.
- Foreground layer (z-10): The selection UI, centered, over the dimmed globe.

Selection UI (max-w-lg mx-auto, text-center):
- Subheading: "What brings you?" (text-bone-muted, text-sm, uppercase tracking-widest, mb-8)
  
**Category Selection:**
- Label: "Choose a stage" (text-bone, font-heading, text-h3, mb-4)
- Horizontal scrollable/flex-wrap row of category pills
- Each pill:
  - Rounded-full, border border-stage-raised, px-5 py-2.5, text-bone, text-sm, flex items-center gap-2, cursor-pointer
  - Icon: lucide icon from category.icon_name, w-4 h-4, text-lamp
  - Label: category name
  - Selected state: bg-lamp/10, border-lamp, text-lamp (icon and text)
  - Hover: border-bone/30
- Only one selectable (radio behavior)
- Categories fetched from `categories` table (use a simple query or static const for 6 categories — either works)

**Intent Selection:**
- Label: "I want to..." (text-bone, font-heading, text-h3, mb-4, mt-10)
- Three options in a row (flex, gap-3, justify-center):
  1. "Discover" (Compass/Eye icon) — pill/button, same style as category pills
  2. "Become an artist" (Plus/Camera icon)
  3. "Scout talent" (Star/Users icon)
- Same selected/unselected styling
- Only one selectable

**Continue button:**
- Disabled until BOTH selections are made (category AND intent)
- When enabled: "Continue →" (button, primary variant, mt-10, w-full max-w-xs mx-auto)
- On click: `onComplete({ category, intent })` prop
- This should:
  - Store the selected category in context/AppContext (so the globe knows what to filter by)
  - Navigate to '/discover'
  - The DiscoverPage reads the category from context and filters the globe

Transitions:
- Entrance: fade in + slide up (slower, ~1s, elegant)
- Background globe behind fades from opacity-0 to opacity-0.2 over 2s (simultaneous with entrance)

**5. Create `src/components/ui/PillSelector.jsx`**
Reusable component for both category and intent selection:
- Props: options (array of {value, label, icon}), value (selected value), onChange(fn)
- Renders horizontal group of pills
- Accessible: role="radiogroup", aria-checked on selected pill

**6. Update routing:**
- Change `/` route from "redirect to /discover" to `<HeroPage />`
- HeroPage handles its own internal stepping, then navigates away

**7. Update AppContext to hold `selectedCategory` and `intent`:**
- Add `selectedCategory` (string | null) and `setSelectedCategory`
- Add `intent` (string | null) and `setIntent`
- SelectionScreen writes to these on Continue
- DiscoverPage reads `selectedCategory` on mount to filter the globe

**8. Update DiscoverPage:**
- On mount: read `selectedCategory` from useApp()
- If set: pass it as initial `categoryFilter` to Globe
- Also set sidePanelView to 'category' initially if a category is pre-selected

### QUALITY CHECK:
1. Visit / (root)
2. See LOADER: "0%" counting to "100%" over ~2 seconds. Dark background, monospace, clean.
3. After 100%, fades to GATE: headline appears, "[ Enter ]" button, headphones note.
4. Click Enter (or press Space/Enter key): gate fades out, SELECTION appears.
5. Behind selection: faintly visible globe (dimmed, non-interactive). Looks cinematic.
6. Pick a category (e.g., Music) → pill highlights in lamp color.
7. Pick an intent (e.g., Discover) → pill highlights.
8. "Continue →" button enables. Click it.
9. Navigates to /discover. Globe shows filtered (only music lamps lit). Side panel shows CategoryInfoView for Music.
10. Hard refresh / return to root: flow restarts from loader.

### DO NOT:
- Skip any of the three screens (they're part of the signature experience)
- Make the transitions jarring/harsh — every transition is a crossfade or gentle slide
- Put header/footer on any of these three screens (they're fullscreen, immersive)
- Allow proceeding from Gate without clicking (no auto-advance after gate — user must consciously enter)
- Use emoji in the headphones note
TASK 10: Artist Upload Flow (6 Steps)
Markdown

## TASK 10: Artist Upload/Onboarding — 6-Step Flow

Build the complete artist registration and profile creation flow.

### WHAT TO CREATE/MODIFY:

**PREREQUISITE:** User must be signed in. If not, redirect to /sign-in.

**1. Create `src/pages/UploadPage.jsx`**
Full page, renders inside AppShell (shows header/footer).

Manages step state: `currentStep` (1-6). Renders `UploadFlow` component.

**2. Create `src/components/Upload/UploadFlow.jsx`**
Container/orchestrator for the 6-step form.

State: collects all form data across steps:
```javascript
const [formData, setFormData] = useState({
  displayName: '',
  city: '',
  country: '',
  categoryId: '',       // slug
  subTags: [],
  bio: '',
  profileImage: null,   // File object
  profileImageUrl: '',  // URL after upload
  mediaLinks: [],       // [{type, url}]
  globalLensDraft: null, // {story, style_explained, cultural_context}
});
Steps:

Stepper/navigation at top: shows 6 circles/numbers, current step highlighted, past steps checked
Content area: renders current step component
Navigation: "Back" button (except step 1), "Next" button (except step 6 where it's "Go Live")
Validate current step before allowing advance
Save draft to localStorage on each step change (resilience: if user refreshes, data isn't lost)
3. Create src/components/Upload/Stepper.jsx
Visual step indicator:

Horizontal row of 6 circles (numbered 1-6)
Active step: circle bg-lamp, text-stage-deep, slightly larger
Completed steps: circle bg-lamp/30, text-lamp, with a checkmark icon
Future steps: circle border border-stage-raised, text-bone-faint
Connecting lines between circles (horizontal lines, completed portions colored)
Below each circle: tiny label (Account, Info, Image, Bio, Media, Review)
Responsive: on mobile, might need to scroll horizontally or simplify
4. Create each Step component:

StepAccount.jsx (Step 1):

If user is already signed in (useAuth): show "Signed in as {email}" + "Not you? Sign out" link. Auto-advance or allow manual Next.
If not signed in: show embedded sign-up form (email + password + name) OR redirect to /sign-in?redirect=/upload
Simplest approach: require sign-in before accessing /upload page (ProtectedRoute). This step then just confirms identity.
StepBasicInfo.jsx (Step 2):

Display name: Input (text, required)
City: Input (text, required)
Country: Input (text, required) — for demo, free text. Production would use a searchable dropdown.
Category: Select dropdown (populated from categories table/query). Required. Shows icon + name.
Sub-tags: Input (text, placeholder: "carnatic fusion, vocalist, classical"). Comma-separated. Converts to array on save. Optional but encouraged.
Validation: all required fields filled. Min lengths where appropriate.
StepImageUpload.jsx (Step 3):

Drag-and-drop zone (styled: dashed border-2 border-dashed border-stage-raised, rounded-2xl, p-8, text-center)
Accepts: image/jpeg, image/png, image/webp
Max size: 2MB (check client-side, show error if larger)
Preview: when image selected, show preview (rounded-xl, max-h-64, object-cover, centered)
Upload action: on "Next", upload to Supabase Storage (bucket: 'profiles', path: {userId}/{timestamp}_{filename})
Store returned URL in formData.profileImageUrl
If no image: allow continue (use a generated avatar with initials as fallback)
StepBio.jsx (Step 4):

Bio: Textarea (required, minLength 20, maxLength 500)
Placeholder text with guidance: "Tell us who you are as an artist. What drives your work? What traditions are you part of or breaking from?"
Character counter: "{length}/500"
Real-time validation feedback
StepMediaLinks.jsx (Step 5):

Dynamic list of media links

Each item: type selector (dropdown: Instagram, YouTube, SoundCloud, Portfolio, Website, Other) + URL input (type=url)

"Add another link" button (plus icon, ghost variant, text-sm)

Remove button (X icon) on each row

Minimum 0, maximum 5 links

Validate URLs (basic format check)

StepGlobalLensReview.jsx (Step 6 — THE CRITICAL STEP):
This is where the AI magic happens (or mock magic).

UI layout (two columns on desktop, stacked on mobile):

LEFT COLUMN: Editor

Heading: "Your Global Lens" (font-heading, text-h2, text-lamp, mb-2)
Subheading: "AI-written context for global audiences. Review, edit, or regenerate before publishing." (text-bone-muted, text-sm, mb-6)
Status indicator: if generating: spinner + "Writing your Global Lens..." (with typewriter animation on the dots)
Once generated, show THREE editable sections, each labeled:
"Your Story" (textarea, 4-6 rows)
"Your Style Explained" (textarea, 3-4 rows)
"Your Cultural Context" (textarea, 3-4 rows)
Each textarea: bg-stage-raised, border border-stage-surface, rounded-xl, p-4, text-bone, font-body, resize-vertical
Section labels: text-xs, uppercase, tracking-wider, text-lamp, mb-2
"Regenerate" button (ghost variant, icon: RefreshCw, text-sm) — calls LLM again, replaces draft. Shows regeneration count (if tracking: "2/3 regenerations used today")
RIGHT COLUMN: Preview

Heading: "Preview" (font-heading, text-h3, text-bone, mb-4)
Preview card: mimics how GL will look on the profile page (styled card, same typography as ArtistPage GL section)
Updates in real-time as user types in editor (debounced, 300ms)
BOTTOM ACTION AREA (full width, sticky at bottom of step):

Two buttons:
"Save Draft" (ghost variant) — saves current state, doesn't publish
"Approve & Go Live" (primary variant, prominent, icon: Sparkles or Check)
Saves GL as 'published'
Sets artist.is_live = true
Sets artist.global_lens_status = 'published'
Inserts artist record into DB (all formData)
Shows success celebration animation (confetti or glow pulse)
Navigates to /artist/{newSlug} after 2 seconds
GL Generation Logic (integrated in this step or called from a util):

JavaScript

// On step mount (or when user first reaches this step):
async function generateLens() {
  setIsGenerating(true);
  try {
    const lensData = await generateGlobalLens({
      displayName: formData.displayName,
      categoryName: selectedCategory.name, // looked up from categoryId
      city: formData.city,
      country: formData.country,
      bio: formData.bio,
      subTags: formData.subTags,
      categorySlug: formData.categoryId,
    });
    setFormData(prev => ({ ...prev, globalLensDraft: lensData }));
  } catch (error) {
    // Mock fallback handled inside generateGlobalLens
    const mockLens = getMockGlobalLens(formData.categoryId);
    setFormData(prev => ({ ...prev, globalLensDraft: mockLens }));
  } finally {
    setIsGenerating(false);
  }
}
Use the generateGlobalLens function from src/lib/globalLens.js (created in Task 2's scope, or create it now if not done).

5. Slug generation:

When creating the artist record, generate a URL-safe slug from displayName:
Lowercase, replace spaces with hyphens, strip special chars: "Arjun Vijayakumar" → "arjun-vijayakumar"
Check uniqueness (append -2, -3 if collision)
Store in slug field
6. Protect the /upload route:

In App.jsx, wrap UploadPage in ProtectedRoute (created in Task 3)
Or check in the component: if !user, redirect to /sign-in?redirect=/upload
7. Update navigation:

In Hero SelectionScreen: when user picks "Become an artist" intent + clicks Continue → navigate to /upload instead of /discover (or navigate to /discover with a banner/prompt to upload)
Simpler: add a "+ Become an artist" link in Header (visible when logged in) that goes to /upload
QUALITY CHECK:
Be signed in as sai@test.com. Visit /upload.
See Step 1 (Account) — confirms your identity.
Click Next → Step 2: fill name, city, country, pick category, add tags. Click Next.
Step 3: drag an image (or skip). Click Next.
Step 4: write a bio (20+ chars). Click Next.
Step 5: add 1-2 media links (or skip). Click Next.
Step 6: sees "Writing your Global Lens..." loading state.
After 2-3 seconds (mock or real LLM), sees 3 text sections populated.
Edit text in left column — preview updates on right.
Click "Approve & Go Live":
Artist inserted into DB (check Supabase)
Global Lens saved as published
Navigates to new artist's profile page
New artist's lamp appears on the globe (visit /discover to verify)
Refresh /upload: should start fresh (or reload draft from localStorage — implement at least basic localStorage save/restore)
DO NOT:
Allow going live without reviewing Global Lens (step 6 must be completed)
Lose form data on accidental refresh (localStorage save)
Skip validation on any step
Let the GL generation feel broken (always have the mock fallback ready)
text


---

## TASK 11: About Page (Complete Content)

```markdown
## TASK 11: About Page — How It Works + Team + Credits

Build the complete About page with final-quality content.

### WHAT TO CREATE/MODIFY:

**1. Rewrite `src/pages/AboutPage.jsx`** (currently a placeholder)

This page renders inside AppShell. It's a SCROLLING page with distinct sections. Use generous vertical padding between sections (py-20 or more). Max content width: ~900px (max-w-4xl mx-auto) for text sections.

**SECTIONS (in order):**

**SECTION 1: Hero Text Block**
- Full-width (within AppShell content area), centered text
- Background: subtle gradient from stage-deep to stage (diagonal, very understated)
- Padding: py-24, px-6
- Label: tiny, uppercase, tracking-[0.3em], text-lamp, mb-4 — "ABOUT ROOTS"
- Heading: font-heading, text-display (4rem), text-bone, leading-tight, max-w-4xl mx-auto
  - "Where local talent meets the global stage — and the world finally understands what it's seeing."
- Optional: a thin horizontal rule (hairline, lamp/20 opacity) below heading, w-16 mx-auto, mt-8

**SECTION 2: The Problem**
- Grid: 2 columns (desktop) or 1 col (mobile). Left: icon/illustration area. Right: text.
- Icon area: a large stylized icon or simple visual (could be a Globe X or AlertCircle in lamp/10, huge, w-32 h-32, centered)
- Right column text:
  - Label: "THE PROBLEM" (tiny uppercase, text-coral, tracking-widest, mb-3)
  - Heading: "Great artists stay invisible beyond their borders" (font-heading, text-h2, text-bone, mb-4)
  - Body paragraphs (2-3, text-body-lg, text-bone/80, leading-relaxed):
    - Para 1: "An exceptional Carnatic fusion vocalist in Ongole performs for hundreds — but a booker in Bangalore can't find them, doesn't understand their genre, and books someone safer. Talent without context is invisible."
    - Para 2: "Social media feeds bury them under algorithmic noise. Portfolios sit unvisited. And even when someone discovers the work, the question lingers: 'What am I looking at?' Without cultural translation, local talent cannot become global."

**SECTION 3: The Solution — 3-Column Cards**
- Section label: "THE SOLUTION" (tiny uppercase, text-lamp, tracking-widest, text-center, mb-8)
- Heading: "Three engines, one platform" (font-heading, text-h2, text-bone, text-center, mb-12, max-w-2xl mx-auto)
- Grid: 3 columns, gap-6, mt-8

Card 1: 🌍 (Globe icon, w-12 h-12, rounded-xl, bg-lamp/10, flex center, text-lamp, mb-4)
- Title: "Discovery by Place" (font-heading, text-h3, text-bone, mb-2)
- Body: "Every artist begins somewhere real — a city, a neighborhood, a stage. ROOTS places talent on a living globe. You explore by location, not by algorithm. Find what's emerging from Tokyo and Tennessee alike." (text-body, text-bone/70)

Card 2: 🔍 (Sparkles icon, same styling)
- Title: "Global Lens"
- Body: "AI generates cultural context — the story, the style explained, the tradition behind the work. But the artist reviews and approves every word. Understanding without assumption. Translation without erasure."

Card 3: 🪜 (TrendingUp icon, same styling)
- Title: "The Stage Ladder"
- Body: "Four tiers from Local to Global. Progress is earned: each viewer, each scout endorsement, each new country reached adds to your score. Climb fairly. Rise visibly."

**SECTION 4: How Scouting Works — Visual Diagram**
- Section label: "HOW SCOUTING WORKS" (tiny uppercase, text-lamp, tracking-widest, text-center, mb-8)
- Heading: "Fans become talent agents" (font-heading, text-h2, text-bone, text-center, mb-12)
- Visual: a horizontal flow diagram (CSS/Flexbox, not an image):
[Fan discovers artist] → [Clicks ✦ Scout] → [Artist gains +5 score] → [Artist climbs ladder]

text

Each step is a rounded box (bg-stage-surface, border border-stage-raised, rounded-xl, px-6 py-4, text-center):
- Step 1: "A fan finds an artist on ROOTS" + Users icon
- Arrow (→ in lamp/40 color, text-2xl)
- Step 2: "They click Scout — a meaningful endorsement" + Star icon, text-lamp
- Arrow
- Step 3: "The artist's score increases by 5 points" + TrendingUp icon
- Arrow
- Step 4: "As score grows, the artist rises through tiers" + Trophy/Award icon in tier-global color
- Below diagram: text (text-bone-muted, text-center, max-w-lg mx-auto, mt-8):
"One scout carries the weight of five views. It's not a vanity metric — it's a signal that someone believes in this artist's work. That signal, multiplied across fans worldwide, is what lifts local talent to the global stage."

**SECTION 5: The Scoring Formula**
- Section label: "TRANSPARENT SCORING" (tiny uppercase...)
- Heading: "No secrets. No pay-to-win." (font-heading, text-h2...)
- Formula displayed prominently (font-mono, text-lg, bg-stage-surface, rounded-2xl, p-6, text-center, text-lamp, mx-auto, max-w-fit):
STAGE_SCORE = VIEWS + (5 × SCOUTS) + (10 × COUNTRIES)

text

- Explanation below (3 columns or flex row, gap-8, mt-8, text-sm):
- **VIEWS** (Eye icon): "Each unique person who views your profile."
- **SCOUTS** (Star icon, text-lamp): "Each endorsement from a registered fan. Weighted 5× because human curation matters."
- **COUNTRIES** (Globe icon): "Each nation where your profile has been viewed. Global reach proves universal appeal."
- Note: "Tiers are calculated from score: Local (0+), Regional (50+), National (200+), Global (500+)." (text-bone-faint, text-xs, mt-6, text-center)

**SECTION 6: The Team**
- Section label: "THE TEAM" (tiny uppercase...)
- Heading: "Built by two people, driven by one belief." (font-heading, text-h2...)
- Two columns (or centered cards):

Person 1 (Sai):
- Avatar placeholder: circle, w-20 h-20, bg-lamp/20, rounded-full, flex center, text-lamp, font-heading text-xl, mx-auto, mb-4 — initials or "S"
- Name: "Sai" (font-heading, text-h3, text-bone, text-center)
- Role: "Product & Experience" (text-lamp, text-sm, text-center, mb-2)
- Short bio: "Concept, design direction, and the conviction that emerging artists deserve better platforms." (text-bone/70, text-sm, text-center, max-w-xs mx-auto)

Person 2 (Teammate):
- Same card layout
- Name: "[Teammate Name]" (or placeholder)
- Role: "Engineering & Craft"
- Short bio: "Building the stage, wiring the lights, making sure every interaction feels intentional."

Below: "Built by vibe coding with Google Antigravity — human-reviewed, AI-assisted." (text-bone-faint, text-xs, text-center, mt-8)

**SECTION 7: Credits & Tech**
- Section label: "CREDITS" (tiny uppercase...)
- Heading: "What powers ROOTS" (font-heading, text-h2...)
- Two-column layout:

Left: Technology
- List of tech with icons (Lucide, tiny, text-bone-faint):
- React + Vite (Code2 icon)
- Tailwind CSS (Palette icon)
- Framer Motion (Move icon)
- react-globe.gl (Globe icon)
- Supabase (Database icon)
- Netlify (Cloud icon)
- AI: Gemini API / OpenAI (Sparkles icon)

Right: Assets & Credits
- Fonts: Playfair Display, Inter, JetBrains Mono (Type icon)
- Icons: Lucide (Image icon)
- Artist photos: Unsplash photographers (list names/URLs if using real ones)
- Globe textures: NASA Blue Marble (adapted), three-globe.gl (credit the library)

Footer of page: "Made with obsession for WebGen-Z @ BYTEBIZZ 2K26. October 2026." (text-bone-faint, text-xs, text-center, mt-16, pb-8)

**2. Styling rules for this page:**
- Every section has at least py-16 (vertical breathing room)
- Text never flush against edges — max-width containers
- No two adjacent sections have the same layout (vary: centered text, 2-col, 3-col cards, diagram)
- Colors: mostly bone text on dark backgrounds, lamp for accents/highlights, coral only for "Problem" label
- NO purple, NO glass, NO gradient text, NO emoji (icons only), NO stock illustrations

**3. Add a link to About in Footer component** (from Task 4):
- Footer should have `/about` link (already may have it, ensure it works)

### QUALITY CHECK:
1. Visit /about
2. Scroll through all 7 sections — smooth, no jumps, no overlapping
3. Each section is visually distinct (different layout pattern)
4. Text is final quality — no lorem ipsum, no placeholder text
5. Formula displays correctly in monospace, legible
6. Scouting flow diagram is clear and visually balanced
7. Team section looks professional (even with placeholder teammate)
8. Credits section properly attributes tech and assets
9. Mobile: sections stack reasonably, text remains readable, diagram wraps or scrolls
10. Lighthouse accessibility audit: headings hierarchy correct, contrast ratios pass

### DO NOT:
- Use AI-generated-sounding phrases ("revolutionizing," "leveraging," "game-changing")
- Make any section text-heavy without visual breaks
- Skip the credits/attribution section (judges care about honesty about AI/tools used)
TASK 12: Scale Lab Page
Markdown

## TASK 12: Scale Lab — Simulation / Visualization Page

Build the Scale Lab page that demonstrates thinking about scale (1 lakh artists scenario).

### WHAT TO CREATE/MODIFY:

**1. Create `src/pages/ScaleLabPage.jsx`**
Renders inside AppShell. This is an informational/demo page — impressive, interactive enough to feel alive, but not backed by real computation (the numbers are illustrative).

**PAGE STRUCTURE:**

**HEADER SECTION:**
- Full-width within content, bg-stage-surface, py-16, px-6, text-center
- Label: "SCALE LAB" (tiny uppercase, text-lamp, tracking-[0.3em], mb-4)
- Heading: "What happens at 100,000 artists?" (font-heading, text-h2 or text-hero, text-bone, max-w-3xl mx-auto)
- Subheading: "A simulation of ROOTS under real-world scale pressure." (text-bone-muted, text-body-lg, mt-4, max-w-2xl mx-auto)

**FUNNEL VISUALIZATION:**
- Section: py-16, max-w-4xl mx-auto
- Label: "THE FUNNEL" (tiny uppercase, text-bone-muted, tracking-widest, mb-8, text-center)
- Visual: a funnel/conversion diagram (CSS-only, vertical):

Render as a centered column of 4 "layers" (each layer is a horizontal bar or rounded rectangle, getting narrower as you go down):

Layer 1 (top, widest):
- Label: "100,000 artists register" 
- Width: w-full (100%)
- Bg: bg-stage-raised, rounded-t-2xl
- Text: text-bone, font-mono, text-2xl, text-center, py-4
- Sub-label: "Ongole scenario: every emerging artist in a mid-sized city joins"

Arrow/down-chevron (text-lamp/40) ↓

Layer 2:
- Label: "10,000 promoted to Regional (Top 10%)"
- Width: w-4/5 (80%)
- Bg: bg-tier-regional/20 (bronze tint), mx-auto, rounded-xl
- Text: text-tier-regional (bronze), font-mono, text-xl, text-center, py-3

↓

Layer 3:
- Label: "1,000 promoted to National (Top 10% of Regional)"
- Width: w-3/5 (60%)
- Bg: bg-tier-national/20 (silver tint), mx-auto, rounded-xl
- Text: text-tier-national (silver), font-mono, text-xl, text-center, py-3

↓

Layer 4 (bottom, narrowest):
- Label: "100 reach Global (Top 10% of National)"
- Width: w-2/5 (40%)
- Bg: bg-tier-global/20 (gold tint), mx-auto, rounded-b-2xl, rounded-t-xl
- Text: text-tier-global (gold), font-mono, text-xl, text-center, py-3

Below funnel:
- Text: "At each tier, the top 10% of artists within their (place × category) pool advance. Merit, not followers." (text-bone-muted, text-sm, text-center, mt-8, max-w-lg mx-auto)

**MECHANISM TOGGLES:**
- Section: py-16, bg-stage-deep (alternating bg for visual break), max-w-3xl mx-auto
- Label: "TUNE THE MECHANISMS" (tiny uppercase, text-lamp, tracking-widest, mb-4, text-center)
- Heading: "What changes the funnel shape?" (font-heading, text-h2, text-bone, text-center, mb-12)

- 6 toggle switches (or checkbox-styled toggles), each in a card/row:

Toggle 1: "Fair Exposure Rotation"
- Description: "New artists appear in category feeds regardless of follower count."
- Default: ON
- Visual effect (when toggled): the funnel layers slightly adjust widths (simulate via CSS transition or JS state) — e.g., Layer 2 expands slightly (more artists promoted because visibility is fairer)

Toggle 2: "Scout Weight Multiplier"
- Description: "How much each scout endorsement counts (currently 5×)."
- Default: 5× (slider or select: 1×, 3×, 5×, 10×)
- Effect: higher weight → funnel narrows faster (fewer artists reach top because scouts become more powerful/selective)

Toggle 3: "Geographic Diversity Bonus"
- Description: "Extra score for reaching artists in underrepresented regions."
- Default: ON
- Effect: layer widths shift slightly, text note: "Artists from 30+ countries now qualify for National tier"

Toggle 4: "Category Balance"
- Description: "No single category dominates the Global tier."
- Default: ON
- Effect: visual: small pie chart or note showing category distribution equalizing

Toggle 5: "Anti-Gaming: One Vote Per User"
- Description: "Each person can scout an artist once. No bot armies."
- Default: ON (locked/non-toggleable, shown as checked + locked icon)
- Note: "Always enabled. Non-negotiable."

Toggle 6: "Cold-Start Boost"
- Description: "New artists get temporary visibility boost in their region."
- Default: ON
- Effect: Layer 1 shows a highlighted portion: "New artist boost: 2 weeks of elevated local visibility"

Implementation: use React state for each toggle. When toggles change, re-render the funnel with adjusted values (pre-compute a few scenarios and interpolate). This doesn't need to be mathematically precise — it's a DEMONSTRATION of thinking.

**COLD-START WARNING:**
- Section: py-16, max-w-3xl mx-auto
- Special callout box: bg-coral/10, border-l-4 border-coral, rounded-r-xl, p-6
- Icon: AlertTriangle (text-coral, w-6 h-6, mb-3)
- Heading: "The Cold-Start Problem" (font-heading, text-h2, text-bone, mb-3)
- Body:
  - Paragraph 1: "A platform with zero artists attracts zero users. A platform with zero users attracts zero artists. This is the cold-start loop." (text-bone/80)
  - Paragraph 2: "Our mitigation:" (text-bone/80, mt-4, font-semibold)
  - Bulleted list (text-bone/70, ml-6, mt-2, space-y-2):
    - "Seed with 30+ diverse artists across all 6 categories before launch"
    - "Partner with 3-5 local event organizers to bring their roster first"
    - "Run the cold-start boost mechanism (new artists get 2 weeks of elevated local visibility)"
    - "Geographic clustering: ensure at least 5 artists per target region at launch"
  - Closing: "The Scale Lab simulates the post-seed state. Getting TO that state requires manual curation, community outreach, and patience." (text-bone-faint, text-sm, mt-6, italic)

**FOOTER NOTE:**
- "Numbers shown are illustrative, based on the scoring formula and 10% promotion rate. Actual outcomes depend on user behavior, geographic distribution, and category popularity." (text-bone-faint, text-xs, text-center, py-8)

**2. Create `src/components/ScaleLab/FunnelChart.jsx`**
Extract the funnel visualization into its own component.
- Props: `toggles` object (values of the 6 mechanisms)
- Returns JSX of the 