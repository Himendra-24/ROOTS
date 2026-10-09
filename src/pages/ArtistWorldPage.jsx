import React, { useState } from "react";
import {
  ArrowLeft,
  Languages,
  Globe2,
  Globe,
  MapPin,
  Volume2,
  Calendar,
  CheckCircle,
  ExternalLink,
  ShieldCheck,
  Award,
  Bookmark,
  Sparkles
} from "lucide-react";
import GlobalLensModal from "../components/GlobalLens/GlobalLensModal";
import { DEMO_OPPORTUNITIES } from "../data/opportunities";

export default function ArtistWorldPage({ artist, onBack, onNavigateStage }) {
  const [lensOpen, setLensOpen] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [linkedOppId, setLinkedOppId] = useState(null);
  const [isFollowing, setIsFollowing] = useState(() => {
    try {
      const saved = localStorage.getItem(`roots_following_${artist?.id}`);
      return saved === "true";
    } catch {
      return false;
    }
  });

  const handleToggleFollow = () => {
    const next = !isFollowing;
    setIsFollowing(next);
    try {
      localStorage.setItem(`roots_following_${artist.id}`, String(next));
    } catch (e) {
      console.warn("Follow storage error", e);
    }
  };

  if (!artist) return null;

  return (
    <div className="artist-world-page">
      {/* Top Breadcrumb & Controls */}
      <div className="artist-world-topbar">
        <button onClick={onBack} className="back-nav-btn">
          <ArrowLeft size={16} />
          <span>Back to Discovery</span>
        </button>

        <div className="flex items-center gap-2">
          {artist.isDemo && (
            <span className="text-[11px] font-mono text-[#8d95ab] border border-[#2b395a] bg-[#12192e] px-2.5 py-1 rounded-full">
              DEMO ARTIST WORLD
            </span>
          )}
          <button
            onClick={() => onNavigateStage(artist)}
            className="globe-locate-btn"
          >
            <Globe size={14} className="text-[#e6a93b]" />
            <span>Locate on Earth</span>
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="artist-hero">
        <div className="artist-hero-backdrop">
          <img
            src={artist.artworkImages?.[0] || artist.image}
            alt={artist.artForm}
            className="hero-backdrop-img"
          />
          <div className="hero-gradient-overlay" />
        </div>

        <div className="artist-hero-content">
          <div className="artist-badge-row">
            <span className="artist-badge">ARTIST WORLD</span>
            <span className="artist-origin-pill">
              {artist.flag} {artist.city} · {artist.region || artist.country}
            </span>
          </div>

          <h1 className="artist-hero-name">{artist.name}</h1>
          <div className="artist-hero-craft">{artist.artForm}</div>

          <p className="artist-hero-tagline">
            Traditional heritage and living cultural craft preserved through generations.
          </p>

          <div className="artist-hero-actions">
            <button
              onClick={() => setLensOpen(true)}
              className="open-lens-hero-btn"
              aria-label="Explore Through Global Lens"
            >
              <Globe2 size={18} className="text-[#101422]" />
              <span>Explore Through Global Lens</span>
              <span className="lens-tag">CULTURAL CONTEXT</span>
            </button>

            <button
              onClick={handleToggleFollow}
              className={`artist-follow-btn ${isFollowing ? "following" : ""}`}
              aria-label={isFollowing ? `Following ${artist.name}` : `Follow ${artist.name}`}
            >
              {isFollowing ? (
                <>
                  <CheckCircle size={15} className="text-[#38b284]" />
                  <span>Following</span>
                </>
              ) : (
                <>
                  <Bookmark size={15} />
                  <span>Follow Artist</span>
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Seven Core Sections */}
      <div className="artist-sections-wrapper">
        {/* 1. THE ARTIST */}
        <section className="artist-section">
          <div className="section-label-kicker">SECTION 01</div>
          <h2 className="section-title">THE ARTIST</h2>
          <div className="artist-bio-grid">
            <div className="bio-col-text">
              <p className="bio-lead-text">{artist.bio}</p>
              <div className="artist-origin-box">
                <div className="text-xs font-mono text-[#e6a93b] uppercase tracking-wider">
                  ORIGIN & LINEAGE
                </div>
                <div className="text-sm text-[#faf7f2] font-medium mt-1">
                  Rooted in {artist.city}, {artist.region}, {artist.country}
                </div>
                <p className="text-xs text-[#8e98af] mt-1 leading-relaxed">
                  Practicing generational methods deeply intertwined with local
                  community gatherings, seasonal agrarian festivals, and regional history.
                </p>
              </div>
            </div>
            <div className="bio-col-image">
              <img
                src={artist.image}
                alt={artist.name}
                className="artist-portrait"
              />
              <div className="portrait-caption">
                Master practitioner of {artist.artForm}
              </div>
            </div>
          </div>
        </section>

        {/* 2. THE CRAFT */}
        <section className="artist-section">
          <div className="section-label-kicker">SECTION 02</div>
          <h2 className="section-title">THE CRAFT & TECHNIQUE</h2>
          <div className="craft-container">
            <p className="craft-desc">{artist.craftDescription}</p>

            <div className="craft-specs-grid">
              <div className="craft-spec-card">
                <h3 className="spec-title">MATERIALS USED</h3>
                <ul className="spec-list">
                  {artist.materials?.map((m, i) => (
                    <li key={i} className="spec-item">
                      <span className="bullet">✦</span>
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="craft-spec-card">
                <h3 className="spec-title">TECHNIQUES INVOLVED</h3>
                <ul className="spec-list">
                  {artist.techniques?.map((t, i) => (
                    <li key={i} className="spec-item">
                      <span className="bullet">✦</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. THE STORY */}
        <section className="artist-section">
          <div className="section-label-kicker">SECTION 03</div>
          <h2 className="section-title">THE STORY (ORIGINAL VOICE)</h2>
          <div className="artist-story-quote-box">
            <div className="quote-mark">“</div>
            <p className="artist-story-quote">{artist.story}</p>
            <div className="quote-attribution">
              — {artist.name}, {artist.city}
            </div>
            <div className="quote-disclaimer">
              <ShieldCheck size={14} className="text-[#e6a93b]" />
              <span>Preserved verbatim to ensure authentic artist voice.</span>
            </div>
          </div>
        </section>

        {/* 4. THE WORK */}
        <section className="artist-section">
          <div className="section-label-kicker">SECTION 04</div>
          <h2 className="section-title">THE WORK & VISUALS</h2>

          {/* Audio Snippet Preview */}
          {artist.audioPreviewTitle && (
            <div className="audio-preview-banner">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                  className="audio-play-btn"
                  aria-label="Play audio preview"
                >
                  <Volume2 size={16} />
                </button>
                <div>
                  <div className="text-[10px] font-mono text-[#e6a93b] uppercase tracking-wider">
                    ACOUSTIC SAMPLE
                  </div>
                  <div className="text-xs text-[#faf7f2] font-medium">
                    {artist.audioPreviewTitle}
                  </div>
                </div>
              </div>
              <div className="audio-waveform-bars">
                {[40, 75, 55, 90, 60, 85, 45, 95, 70, 50, 80, 65].map((h, i) => (
                  <span
                    key={i}
                    style={{ height: isPlayingAudio ? `${h}%` : "30%" }}
                    className={`bar ${isPlayingAudio ? "animate-pulse" : ""}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {artist.artworkImages?.map((img, i) => (
              <div key={i} className="gallery-card">
                <img
                  src={img}
                  alt={`${artist.artForm} piece ${i + 1}`}
                  className="gallery-img"
                />
                <div className="gallery-meta">
                  <span className="text-xs font-serif text-[#faf7f2]">
                    {artist.artForm} Series #{i + 1}
                  </span>
                  <span className="text-[11px] text-[#9098ae]">
                    Studio Archive · {artist.city}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. CULTURAL CONTEXT */}
        <section className="artist-section">
          <div className="section-label-kicker">SECTION 05</div>
          <h2 className="section-title">CULTURAL CONTEXT & HERITAGE</h2>
          <div className="cultural-context-card">
            <p className="context-text leading-relaxed">
              {artist.culturalContext}
            </p>
            <div className="context-tags-row">
              {artist.tags?.map((tag) => (
                <span key={tag} className="context-tag">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* 6. GLOBAL LENS (CORE AI DIFFERENTIATOR) */}
        <section className="artist-section global-lens-callout-section">
          <div className="lens-callout-box">
            <div className="lens-callout-header">
              <div className="flex items-center gap-2">
                <Sparkles size={18} className="text-[#e6a93b]" />
                <span className="text-xs font-mono text-[#e6a93b] uppercase tracking-widest">
                  GLOBAL LENS · CORE DIFFERENTIATOR
                </span>
              </div>
              <div className="text-xs text-[#8e98af]">
                Powered by Gemini AI Cultural Translation
              </div>
            </div>

            <h2 className="lens-callout-headline">
              Make {artist.artForm} Understandable to Any Audience Worldwide
            </h2>

            <p className="lens-callout-sub">
              For an international visitor encountering this tradition for the first time,
              Global Lens explains what it is, how it is made, its cultural significance,
              and its storytelling depth — in 7 global languages, reviewed and approved
              by {artist.name}.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setLensOpen(true)}
                className="lens-callout-cta"
              >
                <span>EXPLORE THROUGH GLOBAL LENS</span>
                <span className="cta-arrow">→</span>
              </button>
            </div>
          </div>
        </section>

        {/* 7. OPPORTUNITIES */}
        <section className="artist-section">
          <div className="section-label-kicker">SECTION 07</div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="section-title mb-0">DISCOVERY & OPPORTUNITIES</h2>
            <span className="text-[11px] font-mono text-[#8e98af] border border-[#2b395a] px-2.5 py-1 rounded-full">
              DEMO OPPORTUNITIES
            </span>
          </div>

          <div className="opportunities-grid">
            {DEMO_OPPORTUNITIES.map((opp) => (
              <div key={opp.id} className="opportunity-card">
                <div className="opp-header">
                  <span className="opp-category">{opp.category}</span>
                  <span className="opp-deadline">Deadline: {opp.deadline}</span>
                </div>
                <h3 className="opp-title">{opp.title}</h3>
                <div className="opp-org">
                  {opp.organization} · {opp.location}
                </div>
                <p className="opp-desc">{opp.description}</p>
                <div className="opp-footer">
                  <span className="opp-grant">{opp.grantAmount}</span>
                  <button
                    onClick={() =>
                      setLinkedOppId(linkedOppId === opp.id ? null : opp.id)
                    }
                    className="opp-apply-btn"
                    aria-label={`Open call details for ${opp.title}`}
                  >
                    {linkedOppId === opp.id ? (
                      <>
                        <CheckCircle size={12} className="text-[#38b284]" />
                        <span>Saved to World</span>
                      </>
                    ) : (
                      <>
                        <span>View Call</span>
                        <ExternalLink size={12} />
                      </>
                    )}
                  </button>
                </div>

                {linkedOppId === opp.id && (
                  <div className="mt-3 p-3 bg-[#111732] border border-[#263764] rounded-lg text-xs text-[#dcd6c8] flex items-center justify-between">
                    <span>✓ Application draft archived to {artist.name}'s World portfolio.</span>
                    <button
                      onClick={() => setLinkedOppId(null)}
                      className="text-[#a9a7a0] hover:text-[#faf7f2] font-mono text-[10px]"
                    >
                      Dismiss
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Global Lens Modal */}
      {lensOpen && (
        <GlobalLensModal
          artist={artist}
          onClose={() => setLensOpen(false)}
        />
      )}
    </div>
  );
}
