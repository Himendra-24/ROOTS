import React from "react";
import { ArrowRight, Globe, Sparkles, ShieldCheck, Compass, HeartHandshake } from "lucide-react";
import OrbitalEarth from "../components/Globe/OrbitalEarth";

export default function Home({
  artists,
  onNavigate,
  onOpenJoin,
  onSelectArtist
}) {
  const meera = artists.find((a) => a.id === "artist-002") || artists[0];

  return (
    <div className="home-page-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span className="badge-text">LOCAL TALENT · GLOBAL STAGE</span>
          </div>

          <h1 className="hero-title">
            THE WORLD IS FULL OF TALENT.<br />
            <span className="highlight-text">WE JUST DON'T SEE IT.</span>
          </h1>

          <p className="hero-description">
            ROOTS gives emerging local artists a digital world of their own —
            and a stage beyond borders. Transforming regional craftsmanship and
            oral heritage into globally discoverable cultural stories.
          </p>

          <div className="hero-button-row">
            <button
              onClick={() => onNavigate("stage")}
              className="cta-primary-btn"
            >
              <span>EXPLORE GLOBAL STAGE</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={onOpenJoin}
              className="cta-secondary-btn"
            >
              <span>JOIN ROOTS</span>
            </button>
          </div>

          <div className="hero-meta-stats">
            <div className="meta-stat-item">
              <span className="meta-stat-tag">DEMO NETWORK</span>
              <span className="meta-stat-val">06 Initial Artists</span>
            </div>
            <div className="meta-stat-divider">·</div>
            <div className="meta-stat-item">
              <span className="meta-stat-tag">CONNECTED</span>
              <span className="meta-stat-val">06 Global Cities</span>
            </div>
            <div className="meta-stat-divider">·</div>
            <div className="meta-stat-item">
              <span className="meta-stat-tag">PRINCIPLE</span>
              <span className="meta-stat-val">Artist-Approved AI</span>
            </div>
          </div>
        </div>

        {/* 3D Earth Preview in Hero */}
        <div className="hero-globe-stage">
          <div className="globe-overlay-tag">
            <span className="tag-pulse" />
            <div>
              <div className="text-[10px] font-mono text-[#e6a93b] uppercase tracking-wider">
                ORBITAL STAGE LIVE
              </div>
              <div className="text-xs text-[#faf7f2] font-medium">
                Tap or drag Earth to explore
              </div>
            </div>
          </div>

          <div className="globe-canvas-wrapper">
            <OrbitalEarth
              artists={artists}
              selectedArtist={meera}
              onSelectArtist={(artist) => {
                onSelectArtist(artist);
                onNavigate("stage");
              }}
              compact={true}
            />
          </div>
        </div>
      </section>

      {/* Philosophy Statement Banner */}
      <section className="philosophy-section">
        <div className="philosophy-inner">
          <div className="philosophy-lead">
            <div className="philosophy-kicker">CORE PROPOSITION</div>
            <h2 className="philosophy-quote">
              ROOTS doesn't create talent.<br />
              <span className="text-[#e6a93b]">It makes hidden talent discoverable.</span>
            </h2>
          </div>
          <div className="philosophy-body">
            <p>
              An international viewer encountering an ancient regional art form
              for the first time may struggle to comprehend what it is, how it is made,
              or why it matters.
            </p>
            <p className="mt-3">
              ROOTS creates a bridge: each artist gets an <b>Artist World</b>, and
              our AI-powered <b>Global Lens</b> provides respectful cultural
              context — reviewed and approved by the artist before publication.
            </p>
          </div>
        </div>
      </section>

      {/* The ROOTS Product Loop */}
      <section className="loop-section">
        <div className="section-header-centered">
          <div className="section-eyebrow">THE ROOTS ARCHITECTURE</div>
          <h2 className="section-headline">The Local-to-Global Product Loop</h2>
          <p className="section-subtitle">
            How regional heritage moves from village roots to international recognition.
          </p>
        </div>

        <div className="loop-grid">
          <div className="loop-card">
            <div className="loop-step">01</div>
            <div className="loop-icon-box">
              <HeartHandshake className="text-[#e6a93b]" size={22} />
            </div>
            <h3 className="loop-card-title">Local Artist</h3>
            <p className="loop-card-text">
              Master artisans, folk dancers, and oral storytellers creating
              invaluable heritage across regional hubs.
            </p>
          </div>

          <div className="loop-card">
            <div className="loop-step">02</div>
            <div className="loop-icon-box">
              <Compass className="text-[#e6a93b]" size={22} />
            </div>
            <h3 className="loop-card-title">Artist World</h3>
            <p className="loop-card-text">
              A bespoke digital world representing their craft, narrative, and
              materials — preserving their authentic voice.
            </p>
          </div>

          <div className="loop-card">
            <div className="loop-step">03</div>
            <div className="loop-icon-box">
              <Sparkles className="text-[#e6a93b]" size={22} />
            </div>
            <h3 className="loop-card-title">Global Lens</h3>
            <p className="loop-card-text">
              Structured AI contextualization explaining techniques and symbolism
              to first-time international audiences.
            </p>
          </div>

          <div className="loop-card">
            <div className="loop-step">04</div>
            <div className="loop-icon-box">
              <ShieldCheck className="text-[#e6a93b]" size={22} />
            </div>
            <h3 className="loop-card-title">Artist Approval</h3>
            <p className="loop-card-text">
              AI output remains pending review until verified by the artist.
              The artist retains ultimate ownership of the narrative.
            </p>
          </div>

          <div className="loop-card">
            <div className="loop-step">05</div>
            <div className="loop-icon-box">
              <Globe className="text-[#e6a93b]" size={22} />
            </div>
            <h3 className="loop-card-title">Global Stage</h3>
            <p className="loop-card-text">
              Interactive 3D Earth makes them geographically discoverable to
              curators, festivals, and audiences worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Artist Spotlight */}
      <section className="featured-section">
        <div className="featured-card">
          <div className="featured-img-col">
            <img
              src={meera.image}
              alt={meera.name}
              className="featured-img"
            />
            <div className="featured-tag">FEATURED DEMO ARTIST</div>
          </div>

          <div className="featured-info-col">
            <div className="text-xs font-mono text-[#e6a93b] uppercase tracking-widest">
              SPOTLIGHT · ANDHRA PRADESH
            </div>
            <h2 className="text-3xl font-serif font-bold text-[#faf7f2] mt-1">
              {meera.name}
            </h2>
            <div className="text-base text-[#d8a855] font-medium">
              {meera.artForm}
            </div>
            <p className="text-xs text-[#9ba4bb] flex items-center gap-1 mt-1">
              <span>{meera.flag}</span>
              <span>{meera.city}, {meera.region}, {meera.country}</span>
            </p>

            <p className="text-sm text-[#c5cddf] leading-relaxed mt-4">
              "{meera.story}"
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {meera.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs bg-[#162038] border border-[#273860] text-[#c5cddf] px-2.5 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap gap-3">
              <button
                onClick={() => {
                  onSelectArtist(meera);
                  onNavigate("artist-world");
                }}
                className="cta-primary-btn"
              >
                <span>ENTER ARTIST WORLD</span>
                <ArrowRight size={15} />
              </button>
              <button
                onClick={() => {
                  onSelectArtist(meera);
                  onNavigate("stage");
                }}
                className="cta-secondary-btn"
              >
                <span>LOCATE ON 3D GLOBE</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
