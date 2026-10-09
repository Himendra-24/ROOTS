🌍 ROOTS AI Architecture
                    ROOTS
                      │
                Artist creates
                Artist World
                      │
                      ▼
              ┌───────────────┐
              │  FastAPI API  │
              └───────┬───────┘
                      │
          ┌───────────▼───────────┐
          │    AI Global Lens     │
          │                       │
          │  Gemini 3.1 Flash     │
          └───────────┬───────────┘
                      │
       ┌──────────────┼──────────────┐
       ▼              ▼              ▼
   Translation    Cultural        Audience
   Multilingual   Context         Adaptation
       │              │              │
       └──────────────┼──────────────┘
                      ▼
               Artist Review
                      │
                      ▼
              ARTIST APPROVED ✓
                      │
                      ▼
                GLOBAL STAGE 🌍
🧠 LLM: Gemini 3.1 Flash-Lite

For the actual globalization layer, I'd use Gemini 3.1 Flash-Lite.

Google currently describes it as optimized for high-volume agentic tasks, translation, and simple data processing, which maps very nicely to ROOTS.

So:

LLM
↓
Gemini 3.1 Flash-Lite

For example:

Artist input:

"Tholu Bommalata is a traditional art from our village.
We make leather puppets and perform stories."

                    ↓

             Gemini 3.1 Flash-Lite

                    ↓

Global Lens:

WHAT IS THOLU BOMMALATA?

A traditional shadow-puppet storytelling
tradition from Andhra Pradesh, India.

ORIGIN
Andhra Pradesh

CRAFT
...

CULTURAL CONTEXT
...

GLOBAL EXPLANATION
...
But here's the important part 🔥

Don't let the LLM simply translate.

ROOTS should have 3 AI operations.

1. 🌐 Translation

Artist writes in:

Telugu

ROOTS can generate:

🇬🇧 English
🇯🇵 Japanese
🇫🇷 French
🇪🇸 Spanish
🇮🇩 Indonesian

etc.

But preserve the original Telugu content.

2. 🌍 Cultural Localization

This is more interesting.

Suppose the artist says:

"బొమ్మలాటలో రామాయణ కథలను తోలుబొమ్మలతో ప్రదర్శిస్తాం."

Don't just translate word-for-word.

The AI generates:

For audiences encountering this art form for the first time:

Tholu Bommalata is a traditional shadow-puppetry performance from Andhra Pradesh in which handcrafted leather puppets are used to narrate stories, including episodes from the Ramayana.

That's globalization, not merely translation.

3. 🎭 Cultural Context

The LLM generates structured context:

Origin
Materials
Technique
Performance
History
Cultural significance
Story
Modern relevance

And then:

AI-ASSISTED CONTEXT

Pending artist review

Artist presses:

✓ APPROVE

Then:

ARTIST APPROVED

That makes your AI story much stronger.

🧠 I would actually use two AI models

For the hackathon:

Task	Model
Global Lens / translation / cultural explanation	Gemini 3.1 Flash-Lite
Complex cultural reasoning / difficult content	Gemini 3.1 Pro
Embeddings / semantic discovery	Gemini embedding model or another embedding service
Voice later	Gemini Live/TTS
Image understanding	Gemini multimodal

Google's current API also supports structured outputs, meaning you can force the AI response into a predictable JSON structure instead of parsing random prose.

That's very useful for ROOTS.

🔥 Make Global Lens structured

Instead of asking:

Explain this art form.

make Gemini return:

{
  "title": "Tholu Bommalata",
  "origin": "Andhra Pradesh, India",
  "what_is_it": "...",
  "materials": [
    "Leather",
    "Natural pigments"
  ],
  "technique": "...",
  "performance": "...",
  "cultural_significance": "...",
  "story_context": "...",
  "global_explanation": "...",
  "translation": {
    "en": "...",
    "ja": "...",
    "fr": "..."
  },
  "ai_generated": true,
  "artist_approved": false
}

Then your React UI can render it beautifully.

🏗️ Full tech stack I'd put in your PPT
Frontend
React
Vite
Three.js
React Three Fiber
Drei
Framer Motion
3D Global Stage
Three.js
React Three Fiber
Orbital Earth implementation
WebGL
Backend
FastAPI
Python
AI
Gemini 3.1 Flash-Lite
Gemini 3.1 Pro
Gemini Embeddings
Database

For hackathon:

Firebase Firestore

or, if you want a more serious architecture:

PostgreSQL

I'd personally choose PostgreSQL + FastAPI if you're presenting the architecture, but Firebase is faster for an MVP.

Authentication
Firebase Authentication
Storage
Firebase Storage

Artist uploads:

photos
videos
artwork
audio
API communication
REST API
Axios / Fetch
🚀 The killer architecture

I'd present it like this:

                       🌍 GLOBAL STAGE
                              │
                     Interactive Earth
                              │
                ┌─────────────┴─────────────┐
                │                           │
          ARTIST WORLD                GLOBAL AUDIENCE
                │                           │
                ▼                           ▼
        Artist Content              Discovery / Explore
                │
                ▼
           FASTAPI
                │
        ┌───────┴────────┐
        │                │
        ▼                ▼
   Gemini 3.1       Embeddings
   Flash-Lite
        │
 ┌──────┼───────────────┐
 │      │               │
 ▼      ▼               ▼
Translate Context   Localization
 │      │               │
 └──────┼───────────────┘
        ▼
   Artist Review
        │
        ▼
   APPROVED ✓
        │
        ▼
 GLOBAL LENS

And the most important sentence in your architecture presentation:

“ROOTS doesn't use AI to replace the artist's voice; it uses AI to translate, contextualize, and carry that voice across cultural boundaries.”

🔥 That's much stronger than simply saying “we use Gemini API.”

Also, Google documents structured-output support for Gemini, which lets your backend request schema-constrained JSON for things like the Global Lens fields above.

If you want, I can also give you the exact Antigravity prompt to implement this entire Gemini + FastAPI + Global Lens architecture into the current ROOTS project, including the API endpoints and JSON schema.

complete trd + flow of app 

Absolutely brooo. 🔥 Let’s lock the complete ROOTS TRD + end-to-end app flow now. This should become the master document for Antigravity, your PPT, architecture diagram, and your actual implementation.

One correction from my earlier message: for a new implementation today, I would use Gemini 3.8 Flash rather than Gemini 3.1 Flash-Lite. Google currently lists Gemini 3.8 Flash as GA and its strongest Flash model for complex workflows; Gemini 3.1 Flash-Lite is still available but is scheduled for shutdown in May 2027.

ROOTS — Complete TRD
1. Product Definition
Product

ROOTS — Local Talent, Global Stage

Tagline

THE WORLD IS FULL OF TALENT. WE JUST DON'T SEE IT.

Core proposition

ROOTS is an AI-powered global discovery platform for emerging local artists.

It allows artists to:

Create an Artist World
Showcase their art and story
Preserve their local/cultural identity
Translate their story for international audiences
Generate understandable cultural context
Reach global audiences
Discover opportunities
Become geographically discoverable through an interactive 3D Earth

The central experience is:

LOCAL ROOTS → ARTIST WORLD → GLOBAL LENS → GLOBAL DISCOVERY

2. The Main Problem

Local artists frequently face four problems:

Discoverability

Their work is known locally but difficult for people outside their region to discover.

Context

An international viewer may see an unfamiliar art form but not understand:

what it is
where it came from
how it is created
why it matters
Language

Artists may express themselves in their regional language while their potential audience speaks another language.

Opportunities

Talent and opportunities don't always meet.

3. ROOTS Solution

ROOTS creates a bridge:

LOCAL ARTIST
     ↓
ARTIST WORLD
     ↓
AI GLOBALIZATION
     ↓
GLOBAL LENS
     ↓
GLOBAL AUDIENCE
     ↓
DISCOVERY
     ↓
OPPORTUNITIES
4. Core Product Pillars

There are 5 major pillars.

01 — Global Stage 🌍

Interactive 3D Earth.

The Earth is the main discovery interface.

02 — Artist World 🎨

A digital identity for each artist.

03 — Global Lens 🌐

AI converts local cultural context into understandable global context.

04 — Community 👥

Artists can discover other artists.

05 — Opportunities 🚀

Artists can eventually connect with opportunities, scouts, events and collaborations.

5. Complete Application Flow

This is the flow I would use for the hackathon.

                         ROOTS
                           │
                           ▼
                    LANDING / HOME
                           │
              ┌────────────┴────────────┐
              ▼                         ▼
       EXPLORE GLOBAL STAGE         JOIN ROOTS
              │                         │
              ▼                         ▼
        3D EARTH 🌍                 REGISTER
              │                         │
              ▼                         ▼
       ARTIST MARKER              ARTIST WORLD
              │                         │
              ▼                         ▼
       ARTIST PREVIEW              GLOBAL STAGE
              │
              ▼
        ARTIST WORLD
              │
       ┌──────┴──────┐
       ▼             ▼
   GLOBAL LENS    OPPORTUNITIES
       │
       ▼
 AI CULTURAL CONTEXT
       │
       ▼
 ARTIST REVIEW
       │
       ▼
  APPROVED ✓
       │
       ▼
 GLOBAL DISCOVERY
6. Screen-by-Screen Flow
SCREEN 01 — Home

The first screen should communicate the entire idea immediately.

Hero

THE WORLD IS FULL OF TALENT.
WE JUST DON'T SEE IT.

Supporting text:

ROOTS gives emerging local artists a digital world of their own — and a stage beyond borders.

Buttons:

EXPLORE GLOBAL STAGE

JOIN ROOTS

Visual:

A cinematic transition into the Earth.

7. Screen 02 — Global Stage

This is the most important screen.

GLOBAL STAGE

Large Orbital Earth.

The user can:

rotate
zoom
explore
hover markers
click artists
discover regions

Example:

GLOBAL STAGE

Discover talent beyond borders.

06
ARTISTS

14
REGIONS

32
ART FORMS

These are clearly demo/prototype statistics.

8. Globe Data

Each artist has:

{
  "id": "artist-002",
  "name": "Meera Devi",
  "artForm": "Tholu Bommalata",
  "city": "Nellore",
  "region": "Andhra Pradesh",
  "country": "India",
  "latitude": 14.4426,
  "longitude": 79.9865
}

The marker is positioned geographically.

9. Globe Marker Interaction
Hover

Display:

MEERA DEVI

Leather Puppet Artist

Nellore, India
Click

Earth smoothly rotates toward Nellore.

Marker expands.

Then:

MEERA DEVI

THOLU BOMMALATA
Leather Puppet Artist

Nellore · Andhra Pradesh · India

[ ENTER ARTIST WORLD ]
10. Global Audience Points

Add subtle global discovery locations.

Example:

Tokyo
London
New York
Paris
Jakarta
São Paulo

But these are demo discovery points.

Don't claim:

"1,482 Americans are watching."

Instead:

GLOBAL AUDIENCE PREVIEW

or:

DEMO DISCOVERY

This keeps the prototype honest.

11. Screen 03 — Artist World

When the user selects an artist:

MEERA DEVI
Leather Puppet Artist

Nellore · Andhra Pradesh · India

Hero artwork

Large visual representation of the artist's craft.

THE ARTIST

Short biography.

THE CRAFT

Explain the technique.

THE STORY

Artist's own narrative.

THE WORK

Gallery / video / audio.

CULTURAL CONTEXT

Information about the tradition.

GLOBAL LENS

Large CTA:

SEE THIS THROUGH A GLOBAL LENS →

12. Global Lens

This is your AI hero feature.

Suppose the artist writes:

"Tholu Bommalata is a traditional art from Andhra Pradesh..."

ROOTS sends the artist's content + structured metadata to the AI layer.

13. AI Globalization Pipeline
Artist Content
      │
      ▼
FastAPI
      │
      ▼
Content Validation
      │
      ▼
Gemini 3.8 Flash
      │
 ┌────┼──────────────┐
 ▼    ▼              ▼
Context Translation Localization
 │    │              │
 └────┼──────────────┘
      ▼
Structured JSON
      │
      ▼
Artist Review
      │
      ▼
APPROVE / EDIT
      │
      ▼
GLOBAL LENS

Gemini supports structured JSON output using a defined schema, which is exactly what we want here instead of asking the model for arbitrary prose.

14. Global Lens Output

For Tholu Bommalata:

GLOBAL LENS
What is it?

Traditional shadow-puppet storytelling from Andhra Pradesh.

Origin

Andhra Pradesh, India.

Craft

Handcrafted leather puppets are manipulated behind a screen while light creates their silhouettes.

Performance

Storytelling combines puppetry, dialogue, music and traditional narratives.

Cultural significance

The art form connects craftsmanship, performance, storytelling and regional cultural memory.

For audiences encountering this art form for the first time

A simple explanation that removes cultural assumptions.

15. Translation

User can choose:

LANGUAGE

English
తెలుగు
हिन्दी
日本語
Français
Español
Bahasa Indonesia

The original artist content remains intact.

The AI translates the approved representation, not the artist's original identity.

16. Artist Approval

This is extremely important.

AI generates:

AI-ASSISTED CULTURAL CONTEXT

Status:
PENDING REVIEW

Artist sees:

EDIT

APPROVE

After approval:

✓ ARTIST APPROVED

AI-assisted context reviewed by the artist.

This supports your core principle:

AI helps tell their story. The artist owns the story.

17. AI Safety / Cultural Integrity

The AI must not invent cultural facts.

Pipeline:

Artist Input
     ↓
AI Draft
     ↓
Source/context check where appropriate
     ↓
Artist Review
     ↓
Approval
     ↓
Public

For the MVP, don't promise academic verification.

Call it:

AI-assisted cultural context

not:

"Verified cultural truth."

18. LLM Architecture
Primary LLM

Gemini 3.8 Flash

Use it for:

Global Lens
translation
cultural explanation
content restructuring
multilingual descriptions
audience-friendly summaries

Google describes Gemini 3.8 Flash as GA and designed for complex workflows, long-horizon tasks and agentic applications.

Higher-reasoning fallback

Gemini 3.1 Pro Preview

Use only when deeper reasoning is actually required.

Don't use it for every request.

Embeddings

Gemini Embedding 2

Useful later for semantic artist discovery / RAG. Google's current model catalog lists Gemini Embedding 2 as a multimodal embedding model for semantic search and RAG.

19. Why Embeddings?

Eventually a visitor could search:

"Show me traditional storytelling artists."

Instead of exact keyword matching:

"storytelling"

embeddings understand:

folk narrative
oral tradition
puppetry
traditional performance
regional storytelling

Then ROOTS can recommend relevant artists.

That's your future:

AI Discovery Engine

20. Registration Flow

Click:

JOIN ROOTS

Screen:

CREATE YOUR ARTIST WORLD
FULL NAME
[________________]

LOCATION
[________________]

ART FORM
[________________]

TELL US ABOUT YOUR CRAFT
[________________]

Optional:

PROFILE IMAGE
ARTWORK
VIDEO
AUDIO

Button:

CREATE MY ARTIST WORLD

21. After Registration

Show:

WELCOME TO ROOTS

Your Artist World is ready.

Then:

ENTER GLOBAL STAGE →

The newly created artist appears:

🌍 on the globe

👥 in Members

🎨 in Explore

22. Existing User Login

Provide:

I ALREADY HAVE AN ACCOUNT

For hackathon MVP:

Use demo authentication.

Later:

Firebase Authentication

Production:

Google OAuth
Email
Phone
23. Members

Navigation:

MEMBERS

Display:

Arjun Rao

Folk Storytelling
Ongole, India

Meera Devi

Tholu Bommalata
Nellore, India

Sahana K

Folk Dance
Vijayawada, India

Rahul Varma

Kalamkari
Machilipatnam, India

Nisha Paul

Terracotta Sculpture
Bankura, India

Dev Sen

Baul Music
Shantiniketan, India

24. Explore

Explore should be different from Members.

Members = people.

Explore = discovery.

Filters:

ART FORM
LOCATION
LANGUAGE
CULTURAL REGION

Example:

Folk Art

results:

Tholu Bommalata
Kalamkari
Baul Music
Terracotta
Folk Dance
25. Opportunities

Artist World contains:

OPPORTUNITIES

Examples:

International Folk Art Festival
Open Call

Digital Culture Exhibition
Submission

Global Artist Residency
Application

For hackathon, opportunities can be demo/static data.

Later:

real events API
organizer accounts
applications
notifications
26. Simulator

Your existing Simulator can remain.

Purpose:

"What happens if this artist reaches different global audiences?"

Example:

ARTIST

Meera Devi

ART FORM

Tholu Bommalata

AUDIENCE

Japan 🇯🇵

Show demo insights:

LANGUAGE
Japanese explanation

CULTURAL CONTEXT
Simplified

DISCOVERY POTENTIAL
High

RECOMMENDED PRESENTATION
Visual storytelling

Important:

Label this as:

Audience Simulation — Prototype

Don't present predictions as scientifically validated.

27. About

Explain:

THE PROBLEM

Local talent is often invisible beyond its immediate community.

THE SOLUTION

ROOTS creates a bridge between cultural identity and global discoverability.

THE PRINCIPLE

AI helps tell their story.
The artist owns the story.

28. Technical Architecture
                 ┌──────────────────────┐
                 │       ROOTS UI       │
                 │                      │
                 │ React + Vite         │
                 │ Framer Motion        │
                 └──────────┬───────────┘
                            │
                  ┌─────────▼─────────┐
                  │   3D GLOBAL STAGE │
                  │                   │
                  │ Three.js          │
                  │ React Three Fiber │
                  │ Drei              │
                  └─────────┬─────────┘
                            │
                         REST API
                            │
                  ┌─────────▼─────────┐
                  │      FastAPI      │
                  │     Backend      │
                  └──────┬─────┬─────┘
                         │     │
              ┌──────────┘     └──────────┐
              ▼                           ▼
       PostgreSQL                    Gemini API
              │                           │
       Artist Data                Global Lens
       User Data                  Translation
       Opportunities              Localization
       Content                    AI Context
              │                           │
              └──────────┬────────────────┘
                         ▼
                    GLOBAL STAGE
29. Recommended Stack
Frontend
React
Vite
JavaScript / TypeScript
Three.js
React Three Fiber
Drei
Framer Motion
Backend
Python
FastAPI
Pydantic
Database

For your architecture:

PostgreSQL

Authentication

Firebase Authentication

Storage

Firebase Storage

or object storage later.

AI
Gemini 3.8 Flash
Gemini 3.1 Pro Preview
Gemini Embedding 2
Communication
REST API
JSON
3D
Three.js
WebGL
Orbital Earth
30. Backend API

I'd structure it like:

POST   /api/auth/register
POST   /api/auth/login

GET    /api/artists
GET    /api/artists/{id}
POST   /api/artists
PUT    /api/artists/{id}

GET    /api/artists/{id}/world

POST   /api/global-lens/generate
POST   /api/global-lens/translate
PUT    /api/global-lens/{id}/approve

GET    /api/explore
GET    /api/opportunities

POST   /api/simulator
31. Global Lens API

Request:

{
  "artist_id": "artist-002",
  "content": "...",
  "art_form": "Tholu Bommalata",
  "location": "Andhra Pradesh, India",
  "target_language": "en"
}

Gemini returns structured JSON:

{
  "title": "Tholu Bommalata",
  "origin": "Andhra Pradesh, India",
  "what_is_it": "...",
  "materials": [],
  "technique": "...",
  "performance": "...",
  "cultural_significance": "...",
  "global_explanation": "...",
  "language": "en",
  "ai_generated": true,
  "artist_approved": false
}

Then artist approves.

32. Database
users
id
name
email
location
role
created_at
artists
id
user_id
name
art_form
city
region
country
latitude
longitude
bio
story
craft_description
image_url
is_demo
created_at
artworks
id
artist_id
title
description
media_url
media_type
created_at
global_lens
id
artist_id
language
content_json
model
status
artist_approved
created_at
updated_at
opportunities
id
title
organization
location
description
deadline
url
33. RAG — Later / Optional

Don't make RAG mandatory for the first demo.

But architecture can support:

Artist Content
       ↓
Chunking
       ↓
Gemini Embedding 2
       ↓
Vector Database
       ↓
Semantic Retrieval
       ↓
Gemini
       ↓
Global Lens

This becomes useful when ROOTS has thousands of artists.

34. Why RAG?

Imagine:

"Show me artists from South India working with traditional storytelling."

RAG can search:

artist bios
art descriptions
cultural metadata
locations

and return relevant artists.

35. Security

Never put Gemini API keys inside React.

Wrong:

React
 ↓
Gemini API

Correct:

React
 ↓
FastAPI
 ↓
Gemini

API key lives in:

.env

Backend only.

36. Privacy

Artists control:

profile visibility
artwork visibility
cultural story
Global Lens approval
personal information

Don't expose private data on the globe.

37. Performance

The Earth is the most expensive visual element.

Optimize:

textures
image sizes
lazy loading
artist data
markers
animations
mobile rendering

Don't render hundreds of unnecessary objects.

For hackathon:

6–20 demo artists is enough.

38. Mobile

Mobile should still have:

GLOBAL STAGE
      ↓
    🌍
      ↓
Artist marker
      ↓
Bottom sheet

Don't cover the entire globe with cards.

39. Complete User Journey
Visitor
ROOTS
 ↓
HOME
 ↓
EXPLORE GLOBAL STAGE
 ↓
3D EARTH
 ↓
Select India
 ↓
Meera Devi
 ↓
Artist World
 ↓
Global Lens
 ↓
Tholu Bommalata explained
 ↓
Language: Japanese
 ↓
Cultural context
 ↓
Back to Earth
Artist
ROOTS
 ↓
JOIN ROOTS
 ↓
Register
 ↓
Create Artist World
 ↓
Add story
 ↓
AI Globalization
 ↓
Review
 ↓
Approve
 ↓
Artist appears on Earth
 ↓
Global discovery
40. The Hackathon Demo Flow 🎤

This is the flow I'd actually perform on stage.

0:00

Start with:

"The world is full of talent. We just don't see it."

0:15

Show the Earth.

"This is ROOTS — a global stage for local talent."

0:30

Rotate Earth.

Click India.

Select Meera.

0:50

Show:

Meera Devi — Tholu Bommalata

1:00

Open Artist World.

1:20

Click:

GLOBAL LENS

1:30

Show AI-generated context.

Switch:

🇬🇧 English → 🇯🇵 Japanese

1:50

Show:

AI-ASSISTED
ARTIST APPROVED ✓

2:00

Return to Earth.

"Her roots remain local. Her story can now travel globally."

2:15

Click Join ROOTS.

Create a new demo artist.

2:40

New artist appears on globe.

3:00

Finish:

"ROOTS doesn't create talent. It makes hidden talent discoverable."

🔥 That's your pitch.

41. MVP vs Future
Hackathon MVP

Must have:

3D Earth
Artist markers
Artist World
Demo artists
Registration
Members
Global Lens
Gemini integration
Translation
Artist approval
Responsive UI
V2
Real authentication
Real artist uploads
RAG
semantic discovery
real opportunities
artist/audience accounts
recommendations
analytics
V3
Global artist marketplace
international collaborations
event discovery
AI cultural preservation
multilingual voice
creator monetization
42. The One-Line Architecture

If a judge asks:

"What exactly does ROOTS do?"

Say:

"ROOTS combines a geographic 3D discovery layer with AI-powered cultural localization, allowing local artists to create an Artist World and present their work to global audiences without losing the context or ownership of their story."

43. The Three Technologies Judges Should Remember

Don't throw 20 technologies at the judges.

Make them remember:

🌍 Three.js

Global Stage

🧠 Gemini

Global Lens

⚡ FastAPI

AI + platform backend

Then PostgreSQL/Firebase/etc. support those.

44. The Core ROOTS Loop

This is the heart of the entire product:

             🌱 ROOTS
                │
                ▼
          LOCAL ARTIST
                │
                ▼
         ARTIST WORLD
                │
                ▼
       AI GLOBALIZATION
                │
        ┌───────┴───────┐
        ▼               ▼
   TRANSLATION      CONTEXT
        │               │
        └───────┬───────┘
                ▼
          ARTIST REVIEW
                │
                ▼
          GLOBAL LENS
                │
                ▼
          GLOBAL STAGE 🌍
                │
                ▼
          DISCOVERY
                │
                ▼
         OPPORTUNITIES

That is ROOTS.

And for the actual implementation, I'd keep Gemini 3.8 Flash + structured JSON as the main AI path; Google's current Gemini API recommends the newer Interactions API for new projects, and structured outputs are supported for schema-constrained responses.

This gives you a much stronger story than “we made a 3D website with an AI chatbot.” The globe is the stage, the Artist World is the identity, and Gemini is the cultural bridge