import React, { useState } from "react";
import { ArrowRight, Globe, Sparkles, MapPin, ExternalLink, Users, Compass } from "lucide-react";
import OrbitalEarth from "../components/Globe/OrbitalEarth";
import { DEMO_AUDIENCE_POINTS } from "../data/artists";

export default function GlobalStage({
  artists,
  selectedArtist,
  onSelectArtist,
  onEnterArtistWorld
}) {
  const [panelOpen, setPanelOpen] = useState(true);

  const activeArtist = selectedArtist || artists[0];

  return (
    <div className="global-stage-container">
      {/* 3D Earth Hero Area (Visually Dominant) */}
      <div className="globe-viewport">
        <OrbitalEarth
          artists={artists}
          selectedArtist={activeArtist}
          onSelectArtist={onSelectArtist}
          compact={false}
          className="w-full h-full"
        />

        {/* Floating Top Indicator */}
        <div className="globe-hud-header">
          <div className="hud-pill">
            <span className="live-dot" />
            <span className="hud-title">ORBITAL 3D STAGE</span>
            <span className="hud-divider">|</span>
            <span className="hud-hint">Drag to rotate · Scroll to zoom · Click markers to explore</span>
          </div>
        </div>

        {/* Global Audience Discovery Legend */}
        <div className="globe-hud-legend">
          <div className="legend-item">
            <span className="legend-marker-gold" />
            <span>Artist Roots (India)</span>
          </div>
          <div className="legend-item">
            <span className="legend-marker-blue" />
            <span>Global Audience Discovery Points</span>
          </div>
        </div>
      </div>

      {/* Side Context Panel (Section 6 Requirements) */}
      <aside className={`stage-side-panel ${panelOpen ? "open" : "collapsed"}`}>
        <div className="side-panel-header">
          <div>
            <div className="panel-eyebrow">
              <span className="text-[#ffb547]">GLOBAL STAGE</span>
              <span className="demo-badge">DEMO NETWORK</span>
            </div>
            <h2 className="panel-title">Discover talent beyond borders.</h2>
          </div>
          <button
            onClick={() => setPanelOpen(!panelOpen)}
            className="panel-toggle-btn"
            aria-label={panelOpen ? "Collapse panel to view globe" : "Expand artist panel"}
          >
            {panelOpen ? "Minimize" : "Explore"}
          </button>
        </div>

        {/* Demo Network Stats (Section 6) */}
        <div className="demo-network-stats">
          <div className="stat-box">
            <div className="stat-number">
              {String(artists.length).padStart(2, "0")}
            </div>
            <div className="stat-label">ARTISTS</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">14</div>
            <div className="stat-label">REGIONS</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">32</div>
            <div className="stat-label">ART FORMS</div>
          </div>
        </div>

        {/* Discovering Now: Artist Preview (Section 6 & 8) */}
        <div className="discovering-now-section">
          <div className="section-label">
            <Compass size={13} className="text-[#ffb547]" />
            <span>DISCOVERING NOW</span>
          </div>

          <div className="artist-preview-card">
            <div className="preview-media-row">
              <img
                src={activeArtist.image}
                alt={activeArtist.name}
                className="preview-avatar"
              />
              <div className="preview-meta">
                <h3 className="preview-name">{activeArtist.name}</h3>
                <div className="preview-art">{activeArtist.artForm}</div>
                <div className="preview-loc">
                  <MapPin size={12} className="text-[#ffb547]" />
                  <span>
                    {activeArtist.city}, {activeArtist.region || activeArtist.country} {activeArtist.flag}
                  </span>
                </div>
              </div>
            </div>

            <p className="preview-bio leading-relaxed">
              {activeArtist.bio}
            </p>

            <div className="preview-tags">
              {activeArtist.tags?.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => onEnterArtistWorld(activeArtist)}
              className="enter-world-btn"
            >
              <span>ENTER ARTIST WORLD</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>

        {/* Global Audience Preview Connections (Section 9) */}
        <div className="connected-audience-section">
          <div className="section-label">
            <Globe size={13} className="text-[#72c5ed]" />
            <span>GLOBAL AUDIENCE PREVIEW (DEMO DISCOVERY)</span>
          </div>
          <div className="audience-cities-list">
            {DEMO_AUDIENCE_POINTS.map((pt) => (
              <div key={pt.name} className="audience-city-tag">
                <span>{pt.flag}</span>
                <span>{pt.name}</span>
              </div>
            ))}
          </div>
          <div className="text-[10px] text-[#a9a7a0] mt-2">
            Subtle arcs illustrate how localized traditions travel to international cultural nodes.
          </div>
        </div>

        {/* Quick Artist Switcher */}
        <div className="artist-quick-list">
          <div className="text-[11px] font-mono text-[#8d95ab] uppercase tracking-wider mb-2">
            ALL DISCOVERABLE ARTISTS
          </div>
          <div className="quick-artist-scroll">
            {artists.map((a) => {
              const isActive = a.id === activeArtist.id;
              return (
                <button
                  key={a.id}
                  onClick={() => onSelectArtist(a)}
                  className={`quick-artist-item ${isActive ? "active" : ""}`}
                >
                  <span className="dot" />
                  <span className="name">{a.name}</span>
                  <span className="craft">· {a.artForm}</span>
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </div>
  );
}
