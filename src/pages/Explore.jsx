import React, { useState, useMemo } from "react";
import { Search, Filter, MapPin, ArrowRight, Sparkles } from "lucide-react";

export default function Explore({ artists, onSelectArtist }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedRegion, setSelectedRegion] = useState("All");

  const categories = [
    "All",
    "Storytelling",
    "Traditional Craft",
    "Dance",
    "Textile",
    "Sculpture",
    "Music"
  ];

  const regions = useMemo(() => {
    const list = Array.from(new Set(artists.map((a) => a.region).filter(Boolean)));
    return ["All", ...list];
  }, [artists]);

  const filteredArtists = useMemo(() => {
    return artists.filter((a) => {
      const matchSearch =
        a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.artForm.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (a.tags && a.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

      const matchCategory =
        selectedCategory === "All" ||
        a.category === selectedCategory ||
        a.tags?.includes(selectedCategory);

      const matchRegion =
        selectedRegion === "All" || a.region === selectedRegion;

      return matchSearch && matchCategory && matchRegion;
    });
  }, [artists, searchQuery, selectedCategory, selectedRegion]);

  return (
    <div className="explore-page-container">
      {/* Header */}
      <div className="page-header-row">
        <div>
          <div className="text-[11px] font-mono text-[#e6a93b] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>DISCOVERY ENGINE</span>
          </div>
          <h1 className="page-main-heading">EXPLORE TRADITIONS & CRAFTS</h1>
          <p className="page-sub-heading">
            Discover living cultural heritages across South Asia and beyond. Filter by
            discipline, region, or craft materials.
          </p>
        </div>

        <div className="count-pill">
          <span className="count-val">{filteredArtists.length}</span>
          <span className="count-label">MATCHING DISCIPLINES</span>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="explore-filter-bar">
        {/* Search Input */}
        <div className="search-input-wrapper">
          <Search size={16} className="text-[#8e98af]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by artist, art form (e.g. Kalamkari, Puppetry), or city..."
            className="explore-search-input"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="text-xs text-[#8e98af] hover:text-[#faf7f2]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Region Dropdown Filter */}
        <div className="region-select-wrapper">
          <MapPin size={14} className="text-[#e6a93b]" />
          <select
            value={selectedRegion}
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="region-select"
            aria-label="Filter by region"
          >
            {regions.map((r) => (
              <option key={r} value={r} className="bg-[#0e1424]">
                {r === "All" ? "All Regions" : r}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Category Pills */}
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

      {/* Results Grid */}
      {filteredArtists.length === 0 ? (
        <div className="no-results-box">
          <p className="text-sm text-[#8e98af]">
            No artists match your current search criteria.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setSelectedRegion("All");
            }}
            className="reset-filters-btn"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="explore-grid">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              onClick={() => onSelectArtist(artist)}
              className="explore-card cursor-pointer"
            >
              <div className="explore-card-img-wrap">
                <img
                  src={artist.artworkImages?.[0] || artist.image}
                  alt={artist.artForm}
                  className="explore-card-img"
                />
                <div className="explore-img-overlay" />
                <div className="explore-card-badge">
                  {artist.flag} {artist.city}
                </div>
              </div>

              <div className="explore-card-body">
                <div className="text-[11px] font-mono text-[#e6a93b] uppercase tracking-wider">
                  {artist.category || "Traditional Craft"}
                </div>
                <h3 className="explore-card-title">{artist.artForm}</h3>
                <div className="explore-card-artist">by {artist.name}</div>

                <p className="explore-card-snippet">
                  {artist.bio}
                </p>

                <div className="explore-card-footer">
                  <div className="explore-materials">
                    {artist.materials?.[0] && (
                      <span className="material-tag">
                        ✦ {artist.materials[0]}
                      </span>
                    )}
                  </div>
                  <span className="explore-cta-link flex items-center gap-1">
                    <span>Enter World</span>
                    <ArrowRight size={13} />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
