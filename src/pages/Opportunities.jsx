import React, { useState, useMemo } from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Award,
  Filter,
  CheckCircle,
  ArrowRight,
  Layers,
  Sparkles
} from "lucide-react";
import { DEMO_OPPORTUNITIES } from "../data/opportunities";

export default function Opportunities({ artists, onSelectArtist, onNavigateSimulator }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeApplication, setActiveApplication] = useState(null);
  const [applicationStatus, setApplicationStatus] = useState({});

  const categories = useMemo(() => {
    const list = Array.from(new Set(DEMO_OPPORTUNITIES.map((o) => o.category)));
    return ["All", ...list];
  }, []);

  const filteredOpportunities = useMemo(() => {
    if (selectedCategory === "All") return DEMO_OPPORTUNITIES;
    return DEMO_OPPORTUNITIES.filter((o) => o.category === selectedCategory);
  }, [selectedCategory]);

  const handleApplyDraft = (oppId) => {
    setApplicationStatus((prev) => ({
      ...prev,
      [oppId]: "saving"
    }));
    setTimeout(() => {
      setApplicationStatus((prev) => ({
        ...prev,
        [oppId]: "saved"
      }));
    }, 600);
  };

  return (
    <div className="opportunities-page-container">
      {/* Page Header */}
      <div className="page-header-row">
        <div>
          <div className="text-[11px] font-mono text-[#ffb547] uppercase tracking-widest flex items-center gap-1.5">
            <Briefcase size={13} />
            <span>GLOBAL DISCOVERY & GRANTS</span>
          </div>
          <h1 className="page-main-heading">CURATED OPPORTUNITIES</h1>
          <p className="page-sub-heading">
            Verified international residencies, museum commissions, and folk art
            biennales seeking living cultural traditions and master craftspeople.
          </p>
        </div>

        <div className="count-pill">
          <span className="count-val">{filteredOpportunities.length}</span>
          <span className="count-label">ACTIVE OPEN CALLS</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="category-pills-row">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Opportunities List Grid */}
      <div className="opportunities-editorial-grid">
        {filteredOpportunities.map((opp) => {
          const isSaved = applicationStatus[opp.id] === "saved";
          const isSaving = applicationStatus[opp.id] === "saving";

          return (
            <article key={opp.id} className="opportunity-editorial-card">
              <div className="opp-card-header">
                <div className="opp-category-tag">{opp.category}</div>
                <div className="opp-deadline-meta">
                  <Calendar size={12} className="text-[#ffb547]" />
                  <span>Deadline: {opp.deadline}</span>
                </div>
              </div>

              <h2 className="opp-card-title">{opp.title}</h2>

              <div className="opp-institution-row">
                <span className="opp-org-name">{opp.organization}</span>
                <span className="divider">·</span>
                <span className="opp-location flex items-center gap-1">
                  <MapPin size={12} className="text-[#c9822b]" />
                  {opp.location}
                </span>
              </div>

              <p className="opp-card-summary">{opp.description}</p>

              {/* Specs Box */}
              <div className="opp-specs-box">
                <div className="spec-row">
                  <span className="spec-label">TYPE</span>
                  <span className="spec-val">{opp.type}</span>
                </div>
                <div className="spec-row">
                  <span className="spec-label">STIPEND / GRANT</span>
                  <span className="spec-val text-[#ffb547] font-semibold">
                    {opp.grantAmount}
                  </span>
                </div>
              </div>

              {/* Recommended Artists Matching this Call */}
              <div className="matching-artists-box">
                <div className="match-title">SUGGESTED LOCAL ARTISTS FOR THIS CALL:</div>
                <div className="match-artists-list">
                  {artists.slice(0, 3).map((artist) => (
                    <button
                      key={artist.id}
                      onClick={() => onSelectArtist(artist)}
                      className="match-artist-pill"
                      title={`View ${artist.name}`}
                    >
                      <span className="dot" />
                      <span>{artist.name}</span>
                      <span className="craft">({artist.artForm})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div className="opp-card-actions">
                <button
                  onClick={() => onNavigateSimulator(opp)}
                  className="simulate-fit-btn"
                  title="Simulate audience adaptation in destination country"
                >
                  <Layers size={13} />
                  <span>Simulate Cultural Reach</span>
                </button>

                <button
                  onClick={() => handleApplyDraft(opp.id)}
                  disabled={isSaving}
                  className={`draft-apply-btn ${isSaved ? "applied" : ""}`}
                >
                  {isSaving ? (
                    <span>Linking...</span>
                  ) : isSaved ? (
                    <>
                      <CheckCircle size={14} className="text-[#38b284]" />
                      <span>Profile Linked</span>
                    </>
                  ) : (
                    <>
                      <span>Link Artist Profile</span>
                      <ArrowRight size={13} />
                    </>
                  )}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
