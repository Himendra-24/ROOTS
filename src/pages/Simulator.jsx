import React, { useState } from "react";
import { Sparkles, Globe, MapPin, Layers, Target, BookOpen, AlertCircle } from "lucide-react";
import OrbitalEarth from "../components/Globe/OrbitalEarth";

const SIM_COUNTRIES = [
  {
    code: "jp",
    name: "Japan",
    flag: "🇯🇵",
    lat: 35.6762,
    lon: 139.6503,
    languageName: "Japanese",
    contextAngle: "Resonates with Bunraku and traditional Japanese shadow and puppet arts. Focus on artisan leather craftsmanship, micro-perforations, and natural vegetable dyes.",
    presentationStyle: "Process-first visual documentation emphasizing tactile patience, tool carving close-ups, and quiet mastery.",
    simulatedFit: 94
  },
  {
    code: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    lat: 51.5074,
    lon: -0.1278,
    languageName: "English (Accessible)",
    contextAngle: "Contextualize oral histories and agrarian performance traditions without requiring background knowledge in South Asian epics.",
    presentationStyle: "Story-led narrative arcs with subtitle translation, contextualizing moral fables into universal human parables.",
    simulatedFit: 88
  },
  {
    code: "fr",
    name: "France",
    flag: "🇫🇷",
    lat: 48.8566,
    lon: 2.3522,
    languageName: "French",
    contextAngle: "Emphasize intangible living cultural heritage (patrimoine vivant), historical Coromandel trade links, and theatrical scenography.",
    presentationStyle: "Theatrical cinematic staging with acoustic field recordings and illuminated backstage puppetry mechanics.",
    simulatedFit: 91
  },
  {
    code: "us",
    name: "United States",
    flag: "🇺🇸",
    lat: 40.7128,
    lon: -74.0060,
    languageName: "English (Global)",
    contextAngle: "Highlight grassroots community preservation, sustainable organic raw materials, and female artistic leadership.",
    presentationStyle: "Dynamic documentary vignette highlighting generational lineage contrasted against modern global reach.",
    simulatedFit: 86
  },
  {
    code: "br",
    name: "Brazil",
    flag: "🇧🇷",
    lat: -23.5505,
    lon: -46.6333,
    languageName: "Portuguese",
    contextAngle: "Connect folk agrarian rhythms and participatory community festivities with South American vernacular celebrations and puppet carnivals (Mamulengo).",
    presentationStyle: "Percussive, celebratory live demonstrations highlighting audience call-and-response dynamics.",
    simulatedFit: 83
  },
  {
    code: "id",
    name: "Indonesia",
    flag: "🇮🇩",
    lat: -6.2088,
    lon: 106.8456,
    languageName: "Indonesian",
    contextAngle: "Deep comparative resonance with Wayang Kulit shadow puppetry; audiences recognize shared epic genealogies while celebrating distinctive Andhra leather chiseling.",
    presentationStyle: "Comparative masterclass illustrating differences in hide preparation, color translucency, and vocal meters.",
    simulatedFit: 96
  }
];

export default function Simulator({ artists, selectedArtist, onSelectArtist }) {
  const [targetCountry, setTargetCountry] = useState(SIM_COUNTRIES[0]);
  const activeArtist = selectedArtist || artists[0];

  return (
    <div className="simulator-page-container">
      {/* Page Header */}
      <div className="page-header-row">
        <div>
          <div className="text-[11px] font-mono text-[#e6a93b] uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles size={13} />
            <span>GLOBAL AUDIENCE SIMULATOR</span>
          </div>
          <h1 className="page-main-heading">AUDIENCE SIMULATION ENGINE</h1>
          <p className="page-sub-heading">
            Simulate how an artist's local heritage story and Global Lens presentation
            adapt across distinct international cultural landscapes.
          </p>
        </div>

        {/* Prototype Warning Pill (Section 31 requirement) */}
        <div className="flex items-center gap-2 bg-[#171f34] border border-[#2b3c66] px-3.5 py-1.5 rounded-xl text-xs text-[#a2aec8]">
          <AlertCircle size={14} className="text-[#e6a93b]" />
          <span className="font-mono text-[11px] text-[#e6a93b] font-bold">
            AUDIENCE SIMULATION — PROTOTYPE
          </span>
        </div>
      </div>

      {/* Control Row: Select Artist & Destination */}
      <div className="sim-control-grid">
        {/* Artist Selector */}
        <div className="sim-control-box">
          <label className="text-[10px] font-mono text-[#8e98af] uppercase tracking-wider block mb-2">
            1. SELECT LOCAL ARTIST
          </label>
          <select
            value={activeArtist.id}
            onChange={(e) => {
              const found = artists.find((a) => a.id === e.target.value);
              if (found) onSelectArtist(found);
            }}
            className="sim-select"
            aria-label="Select local artist for simulation"
          >
            {artists.map((a) => (
              <option key={a.id} value={a.id} className="bg-[#0e1424]">
                {a.name} — {a.artForm} ({a.city})
              </option>
            ))}
          </select>
        </div>

        {/* Country Selector Pills */}
        <div className="sim-control-box">
          <label className="text-[10px] font-mono text-[#8e98af] uppercase tracking-wider block mb-2">
            2. SELECT TARGET AUDIENCE / REGION
          </label>
          <div className="flex flex-wrap gap-2">
            {SIM_COUNTRIES.map((c) => (
              <button
                key={c.code}
                onClick={() => setTargetCountry(c)}
                className={`sim-country-btn ${targetCountry.code === c.code ? "active" : ""}`}
              >
                <span>{c.flag}</span>
                <span>{c.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Simulation Viewport */}
      <div className="sim-viewport-layout">
        {/* Globe Visualization */}
        <div className="sim-globe-card">
          <div className="sim-globe-header">
            <span className="text-[11px] font-mono text-[#e6a93b] uppercase tracking-wider">
              CULTURAL TRAJECTORY MAP
            </span>
            <span className="text-xs text-[#a0a9bf]">
              {activeArtist.city}, India ➔ {targetCountry.name} {targetCountry.flag}
            </span>
          </div>

          <div className="sim-globe-canvas">
            <OrbitalEarth
              artists={[activeArtist]}
              selectedArtist={activeArtist}
              compact={true}
            />
          </div>
        </div>

        {/* Simulation Output Card */}
        <div className="sim-results-card">
          <div className="sim-results-top">
            <div>
              <div className="text-[10px] font-mono text-[#e6a93b] uppercase tracking-wider">
                SIMULATION INSIGHTS
              </div>
              <h2 className="text-2xl font-serif font-bold text-[#faf7f2] mt-0.5">
                {activeArtist.name} in {targetCountry.name} {targetCountry.flag}
              </h2>
              <div className="text-xs text-[#d8a855] font-medium">
                Art Form: {activeArtist.artForm}
              </div>
            </div>

            <div className="sim-score-box">
              <div className="text-2xl font-serif font-bold text-[#e6a93b]">
                {targetCountry.simulatedFit}%
              </div>
              <div className="text-[9px] font-mono text-[#8e98af] uppercase">
                DEMO DISCOVERY FIT
              </div>
            </div>
          </div>

          <div className="space-y-4 pt-4 border-t border-[#1e2a44]">
            {/* Language Adaptation */}
            <div className="sim-insight-item">
              <div className="insight-label flex items-center gap-1.5">
                <Globe size={13} className="text-[#e6a93b]" />
                <span>LANGUAGE ADAPTATION</span>
              </div>
              <p className="insight-desc">
                Localized into {targetCountry.languageName}. Translates technical terminology
                (e.g. leather preparation, rhythmic meters) while preserving original regional names.
              </p>
            </div>

            {/* Cultural Context */}
            <div className="sim-insight-item">
              <div className="insight-label flex items-center gap-1.5">
                <BookOpen size={13} className="text-[#e6a93b]" />
                <span>CULTURAL CONTEXT EMPHASIS</span>
              </div>
              <p className="insight-desc">
                {targetCountry.contextAngle}
              </p>
            </div>

            {/* Presentation Style */}
            <div className="sim-insight-item">
              <div className="insight-label flex items-center gap-1.5">
                <Layers size={13} className="text-[#e6a93b]" />
                <span>RECOMMENDED PRESENTATION STYLE</span>
              </div>
              <p className="insight-desc">
                {targetCountry.presentationStyle}
              </p>
            </div>

            <div className="p-3 bg-[#111728] border border-[#202c48] rounded-xl text-[11px] text-[#7d879e]">
              <b>Prototype Notice:</b> Insights represent simulated heuristics designed for
              the hackathon demonstration. ROOTS does not present these as scientifically
              validated audience predictions.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
