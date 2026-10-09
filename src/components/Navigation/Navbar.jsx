import React from "react";
import { Globe, Compass, Users, Briefcase, Layers, Info, UserRound, ArrowRight } from "lucide-react";

export default function Navbar({
  page,
  setPage,
  onOpenJoin,
  currentUser,
  onSelectArtist
}) {
  const navItems = [
    { id: "stage", label: "Global Stage", icon: Globe },
    { id: "explore", label: "Explore", icon: Compass },
    { id: "members", label: "Members", icon: Users },
    { id: "opportunities", label: "Opportunities", icon: Briefcase },
    { id: "simulator", label: "Simulator", icon: Layers },
    { id: "about", label: "About", icon: Info }
  ];

  const handleNav = (targetPage) => {
    setPage(targetPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Header for Desktop & Mobile Brand */}
      <header className="roots-header">
        <div className="header-inner">
          {/* Brand Logo */}
          <button
            className="brand-logo"
            onClick={() => handleNav("home")}
            aria-label="ROOTS Home"
          >
            <span className="brand-title">ROOTS</span>
            <span className="brand-tagline">LOCAL TALENT · GLOBAL STAGE</span>
          </button>

          {/* Desktop Navigation (Icon + Text) */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = page === item.id;
              return (
                <button
                  key={item.id}
                  className={`nav-link ${isActive ? "active" : ""}`}
                  onClick={() => handleNav(item.id)}
                  aria-current={isActive ? "page" : undefined}
                >
                  <Icon size={14} className={isActive ? "text-[#ffb547]" : "text-[#a9a7a0]"} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Action Button: User World or Join */}
          <div className="header-actions">
            {currentUser ? (
              <button
                className="user-badge"
                onClick={() => {
                  onSelectArtist(currentUser);
                  handleNav("artist-world");
                }}
                aria-label={`View Artist World for ${currentUser.name}`}
              >
                <UserRound size={14} className="text-[#ffb547]" />
                <span>My Artist World</span>
                <span className="user-avatar-tag">{currentUser.name.split(" ")[0]}</span>
              </button>
            ) : (
              <button
                className="cta-join-btn"
                onClick={onOpenJoin}
                aria-label="Join ROOTS Platform"
              >
                <span>Join ROOTS</span>
                <ArrowRight size={13} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation Bar (Microsoft-level UX standard) */}
      <nav className="mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
        <button
          className={`mobile-nav-item ${page === "stage" ? "active" : ""}`}
          onClick={() => handleNav("stage")}
          aria-label="Global Stage"
        >
          <Globe size={18} />
          <span>Stage</span>
        </button>

        <button
          className={`mobile-nav-item ${page === "explore" ? "active" : ""}`}
          onClick={() => handleNav("explore")}
          aria-label="Explore"
        >
          <Compass size={18} />
          <span>Explore</span>
        </button>

        <button
          className={`mobile-nav-item ${page === "members" ? "active" : ""}`}
          onClick={() => handleNav("members")}
          aria-label="Members"
        >
          <Users size={18} />
          <span>Members</span>
        </button>

        <button
          className={`mobile-nav-item ${page === "opportunities" ? "active" : ""}`}
          onClick={() => handleNav("opportunities")}
          aria-label="Opportunities"
        >
          <Briefcase size={18} />
          <span>Opportunities</span>
        </button>

        {currentUser ? (
          <button
            className={`mobile-nav-item ${page === "artist-world" ? "active" : ""}`}
            onClick={() => {
              onSelectArtist(currentUser);
              handleNav("artist-world");
            }}
            aria-label="My Artist World"
          >
            <UserRound size={18} />
            <span>World</span>
          </button>
        ) : (
          <button
            className="mobile-nav-item"
            onClick={onOpenJoin}
            aria-label="Join ROOTS"
          >
            <UserRound size={18} />
            <span>Join</span>
          </button>
        )}
      </nav>
    </>
  );
}
