import React from "react";
import { Sparkles, Globe, Cpu, ShieldCheck, HeartHandshake, Eye } from "lucide-react";

export default function About() {
  return (
    <div className="about-page-container">
      {/* Hero */}
      <section className="about-hero">
        <div className="text-[11px] font-mono text-[#e6a93b] uppercase tracking-widest flex items-center gap-1.5">
          <Sparkles size={13} />
          <span>ABOUT ROOTS · LOCAL TALENT · GLOBAL STAGE</span>
        </div>
        <h1 className="about-main-title">
          THE WORLD IS FULL OF TALENT.<br />
          <span className="text-[#e6a93b]">WE JUST DON'T SEE IT.</span>
        </h1>
        <p className="about-lead">
          ROOTS is a global discovery platform for emerging local artists. It creates
          an intimate bridge between localized cultural heritage and international
          audiences through interactive 3D spatial discovery and artist-reviewed AI.
        </p>
      </section>

      {/* Core Principle Callout */}
      <section className="principle-banner">
        <div className="principle-quote">
          “AI helps tell their story. The artist owns the story.”
        </div>
        <div className="principle-author">
          — The Core ROOTS Product Principle
        </div>
      </section>

      {/* Three Pillars: Problem, Solution, Principle */}
      <section className="about-triad-grid">
        {/* The Problem */}
        <div className="about-triad-card">
          <div className="triad-icon-box">
            <Eye size={20} className="text-[#e6a93b]" />
          </div>
          <div className="text-[10px] font-mono text-[#e6a93b] uppercase tracking-widest">
            THE PROBLEM
          </div>
          <h2 className="triad-title">Invisibility & Context Barriers</h2>
          <p className="triad-text">
            Exceptional traditional masters, puppeteers, and folk performers
            possess profound artistic mastery, but face immense discoverability
            barriers outside their home districts. International audiences often lack
            the cultural context required to comprehend their work.
          </p>
        </div>

        {/* The Solution */}
        <div className="about-triad-card">
          <div className="triad-icon-box">
            <Globe size={20} className="text-[#e6a93b]" />
          </div>
          <div className="text-[10px] font-mono text-[#e6a93b] uppercase tracking-widest">
            THE SOLUTION
          </div>
          <h2 className="triad-title">Geographic Stage & Global Lens</h2>
          <p className="triad-text">
            ROOTS pairs an interactive 3D Earth Global Stage with an AI-powered
            Global Lens that translates materials, performance canons, and historical
            significance into plain-language international context.
          </p>
        </div>

        {/* The Ethics */}
        <div className="about-triad-card">
          <div className="triad-icon-box">
            <ShieldCheck size={20} className="text-[#e6a93b]" />
          </div>
          <div className="text-[10px] font-mono text-[#e6a93b] uppercase tracking-widest">
            THE ETHICS
          </div>
          <h2 className="triad-title">Mandatory Artist Verification</h2>
          <p className="triad-text">
            We never let AI overwrite an artist's authentic voice. Every AI-generated
            cultural translation remains in a pending draft state until the artist reviews,
            edits, and approves it for publication.
          </p>
        </div>
      </section>

      {/* Technical Architecture */}
      <section className="about-tech-section">
        <div className="tech-section-header">
          <div className="text-[10px] font-mono text-[#e6a93b] uppercase tracking-widest">
            ENGINEERING & INFRASTRUCTURE
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#faf7f2] mt-1">
            Production-Grade Hybrid Architecture
          </h2>
        </div>

        <div className="tech-architecture-grid">
          <div className="tech-card">
            <div className="flex items-center gap-2 mb-2">
              <Globe className="text-[#e6a93b]" size={16} />
              <h3 className="tech-card-title">3D Orbital Global Stage</h3>
            </div>
            <p className="tech-card-desc">
              Three.js, WebGL, React Three Fiber, and Drei powering a responsive,
              textured Orbital Earth with procedural lighting, coordinate geocoding,
              and cinematic camera focus.
            </p>
          </div>

          <div className="tech-card">
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="text-[#e6a93b]" size={16} />
              <h3 className="tech-card-title">Gemini 3.8 Flash AI</h3>
            </div>
            <p className="tech-card-desc">
              Structured JSON schema enforcement for Global Lens cultural contextualization,
              7-language translation, and audience adaptation without stereotyping.
            </p>
          </div>

          <div className="tech-card">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="text-[#e6a93b]" size={16} />
              <h3 className="tech-card-title">FastAPI Backend</h3>
            </div>
            <p className="tech-card-desc">
              Python 3.12, FastAPI, Pydantic schemas, secure environment variables
              for zero frontend API key leaks, and graceful offline fallback.
            </p>
          </div>
        </div>
      </section>

      {/* Final Pitch Summary Box */}
      <section className="pitch-summary-box">
        <h2 className="pitch-title">
          "ROOTS doesn't create talent. It makes hidden talent discoverable."
        </h2>
        <p className="pitch-body">
          We give local artists their own digital world, then use an interactive global
          stage and AI-powered cultural context to help audiences understand and discover
          their work.
        </p>
        <p className="pitch-footer-note">
          AI helps tell their story. But the artist owns the story.
        </p>
      </section>
    </div>
  );
}
