import React from "react";
import { ArrowRight, MapPin, Sparkles, UserCheck } from "lucide-react";

export default function Members({
  artists,
  currentUser,
  onSelectArtist,
  onOpenJoin
}) {
  return (
    <div className="members-page-container">
      {/* Page Header */}
      <div className="page-header-row">
        <div>
          <div className="text-[11px] font-mono text-[#e6a93b] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>ROOTS COMMUNITY</span>
          </div>
          <h1 className="page-main-heading">THE ROOTS COMMUNITY</h1>
          <p className="page-sub-heading">
            Discover artists, traditions, and stories from different places.
            Every member possesses a dedicated Artist World and Global Lens.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="count-pill">
            <span className="count-val">{artists.length}</span>
            <span className="count-label">ARTISTS ACTIVE</span>
          </div>
          <button onClick={onOpenJoin} className="cta-join-btn">
            + REGISTER ARTIST
          </button>
        </div>
      </div>

      {/* Editorial Artist Cards Grid */}
      <div className="members-editorial-grid">
        {artists.map((artist) => {
          const isCurrentUser = currentUser?.id === artist.id;
          return (
            <div
              key={artist.id}
              className={`member-editorial-card ${isCurrentUser ? "current-user-card" : ""}`}
            >
              <div className="card-image-wrap">
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="card-portrait"
                />
                <div className="card-top-badges">
                  {isCurrentUser && (
                    <span className="badge-you flex items-center gap-1">
                      <UserCheck size={12} />
                      <span>YOUR ARTIST WORLD</span>
                    </span>
                  )}
                  {artist.isDemo && (
                    <span className="badge-demo">
                      DEMO ARTIST
                    </span>
                  )}
                </div>
              </div>

              <div className="card-body-content">
                <div className="card-location">
                  <MapPin size={12} className="text-[#e6a93b]" />
                  <span>
                    {artist.city}, {artist.region || artist.country} {artist.flag}
                  </span>
                </div>

                <h2 className="card-artist-name">{artist.name}</h2>
                <div className="card-art-form">{artist.artForm}</div>

                <p className="card-bio-snippet">
                  {artist.bio}
                </p>

                <div className="card-tags-row">
                  {artist.tags?.slice(0, 3).map((t) => (
                    <span key={t} className="card-tag">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="card-footer-action">
                  <button
                    onClick={() => onSelectArtist(artist)}
                    className="view-world-btn"
                  >
                    <span>VIEW ARTIST WORLD</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
