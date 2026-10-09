import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe2,
  Languages,
  X,
  CheckCircle,
  Clock,
  Sparkles,
  Edit3,
  Save,
  RotateCcw,
  BookOpen,
  MapPin,
  Layers,
  HeartHandshake,
  AlertCircle,
  HelpCircle,
  FileCheck2,
  ChevronDown,
  Info
} from "lucide-react";
import {
  SUPPORTED_LANGUAGES,
  fetchGlobalLensContext,
  saveGlobalLensContext
} from "../../services/globalLensService";

export default function GlobalLensModal({ artist, onClose }) {
  const [currentLang, setCurrentLang] = useState("en");
  const [lensData, setLensData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isApproving, setIsApproving] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState("");

  // Editable fields state
  const [editForm, setEditForm] = useState({
    introduction: "",
    cultural_roots: "",
    materials: "",
    techniques: "",
    performance: "",
    stories_and_traditions: "",
    cultural_significance: "",
    global_explanation: ""
  });

  // Load context on mount or language switch
  useEffect(() => {
    let active = true;
    async function loadData() {
      setLoading(true);
      setError(null);
      setIsEditing(false);
      try {
        const data = await fetchGlobalLensContext(artist, currentLang);
        if (active) {
          setLensData(data);
          setEditForm({
            introduction: data.introduction || "",
            cultural_roots: data.cultural_roots || "",
            materials: Array.isArray(data.materials) ? data.materials.join(", ") : (data.materials || ""),
            techniques: Array.isArray(data.techniques) ? data.techniques.join(", ") : (data.techniques || ""),
            performance: data.performance || "",
            stories_and_traditions: data.stories_and_traditions || "",
            cultural_significance: data.cultural_significance || "",
            global_explanation: data.global_explanation || ""
          });
        }
      } catch (err) {
        if (active) {
          setError("Failed to load Global Lens context. Please try again.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }
    loadData();
    return () => {
      active = false;
    };
  }, [artist, currentLang]);

  // Handle Save as Artist-Edited Draft
  const handleSaveDraft = async () => {
    if (!lensData) return;
    const updated = {
      ...lensData,
      introduction: editForm.introduction,
      cultural_roots: editForm.cultural_roots,
      materials: editForm.materials.split(",").map((s) => s.trim()).filter(Boolean),
      techniques: editForm.techniques.split(",").map((s) => s.trim()).filter(Boolean),
      performance: editForm.performance,
      stories_and_traditions: editForm.stories_and_traditions,
      cultural_significance: editForm.cultural_significance,
      global_explanation: editForm.global_explanation,
      approval_status: "edited",
      artist_approved: false
    };

    const saved = await saveGlobalLensContext(artist.id, currentLang, updated, "edited");
    setLensData(saved);
    setIsEditing(false);
    showNotice("Draft saved with your personal cultural edits.");
  };

  // Handle Artist Approval
  const handleApprove = async () => {
    if (!lensData) return;
    setIsApproving(true);
    const updated = isEditing
      ? {
          ...lensData,
          introduction: editForm.introduction,
          cultural_roots: editForm.cultural_roots,
          materials: editForm.materials.split(",").map((s) => s.trim()).filter(Boolean),
          techniques: editForm.techniques.split(",").map((s) => s.trim()).filter(Boolean),
          performance: editForm.performance,
          stories_and_traditions: editForm.stories_and_traditions,
          cultural_significance: editForm.cultural_significance,
          global_explanation: editForm.global_explanation,
          approval_status: "approved",
          artist_approved: true
        }
      : {
          ...lensData,
          approval_status: "approved",
          artist_approved: true
        };

    const saved = await saveGlobalLensContext(artist.id, currentLang, updated, "approved");
    setLensData(saved);
    setIsEditing(false);
    setIsApproving(false);
    showNotice("✓ Approved & Published to ROOTS! Visible to global visitors as verified.");
  };

  // Handle Regenerate
  const handleRegenerate = async () => {
    if (!window.confirm("Regenerate AI explanation? Any unsaved edits will be replaced.")) return;
    try {
      localStorage.removeItem(`roots_lens_${artist.id}_${currentLang}`);
    } catch (e) {}
    setLoading(true);
    try {
      const data = await fetchGlobalLensContext(artist, currentLang);
      setLensData(data);
      setEditForm({
        introduction: data.introduction || "",
        cultural_roots: data.cultural_roots || "",
        materials: Array.isArray(data.materials) ? data.materials.join(", ") : (data.materials || ""),
        techniques: Array.isArray(data.techniques) ? data.techniques.join(", ") : (data.techniques || ""),
        performance: data.performance || "",
        stories_and_traditions: data.stories_and_traditions || "",
        cultural_significance: data.cultural_significance || "",
        global_explanation: data.global_explanation || ""
      });
      showNotice("Regenerated new AI-assisted cultural interpretation.");
    } catch (err) {
      setError("Failed to regenerate.");
    } finally {
      setLoading(false);
    }
  };

  const showNotice = (msg) => {
    setFeedbackMsg(msg);
    setTimeout(() => setFeedbackMsg(""), 4500);
  };

  return (
    <div className="modal-overlay lens-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 18 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="modal-window-lens max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="lens-modal-header">
          <div className="flex items-center gap-3">
            <div className="lens-header-icon-box">
              <Globe2 size={22} className="text-[#ffb547]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="lens-header-tag font-mono">GLOBAL LENS // CULTURAL INTERPRETER</span>
                <span className="text-[11px] text-[#ffb547] bg-[#ffb547]/10 px-2 py-0.5 rounded border border-[#ffb547]/20">
                  {artist.artForm}
                </span>
              </div>
              <h2 className="lens-header-title text-xl font-serif text-[#faf7f2]">
                {artist.name} <span className="text-[#8e98af] font-sans text-sm font-normal">• {artist.city}, {artist.region || artist.country}</span>
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <div className="lens-lang-selector-wrap">
              <Languages size={14} className="text-[#ffb547]" />
              <select
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value)}
                className="lens-lang-select"
                aria-label="Select explanation language"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label} ({lang.nativeName})
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={onClose}
              className="lens-close-btn"
              aria-label="Close Global Lens and return to Artist Profile"
              title="Return to Artist Profile (Esc)"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Temporary Notification Banner */}
        {feedbackMsg && (
          <div className="p-3 bg-[#112328] border-b border-[#24614e] text-xs text-[#6ee7b7] flex items-center justify-between font-mono animate-fadeIn">
            <span>{feedbackMsg}</span>
            <button onClick={() => setFeedbackMsg("")} className="text-[#a7f3d0] hover:underline">
              Dismiss
            </button>
          </div>
        )}

        {/* Main Content Body */}
        <div className="lens-modal-body">
          {loading ? (
            <div className="lens-loading-state py-20">
              <div className="lens-spinner" />
              <div className="lens-loading-text mt-4 font-mono text-sm tracking-wider text-[#ffb547]">
                EXPLORING THROUGH GLOBAL LENS...
              </div>
              <p className="lens-loading-sub text-xs text-[#9098ae] max-w-md text-center mt-2">
                Deciphering regional craft genealogies, mineral pigments, and oral storytelling traditions without flattening the artist's original voice.
              </p>
            </div>
          ) : error ? (
            <div className="lens-error-state py-16 text-center">
              <AlertCircle size={32} className="mx-auto text-[#f87171] mb-3" />
              <div className="lens-error-text text-sm font-semibold text-[#faf7f2]">{error}</div>
              <p className="lens-error-sub text-xs text-[#9098ae] mt-1 mb-4">
                The Artist World remains fully functional. You can retry generation now.
              </p>
              <button
                onClick={() => setCurrentLang(currentLang)}
                className="lens-retry-btn px-4 py-2 bg-[#ffb547] text-[#0b0e23] font-mono text-xs font-bold rounded"
              >
                Retry Generation
              </button>
            </div>
          ) : lensData ? (
            <div className="lens-content-stack space-y-6">
              {/* Status & Core Workflow Banner */}
              <div className="lens-status-banner flex flex-wrap items-center justify-between gap-4 p-4 rounded-lg bg-[#0e132c] border border-[#232b58]">
                <div className="lens-status-left flex items-center gap-3">
                  {lensData.approval_status === "approved" ? (
                    <div className="badge-approved flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#10b981]/15 text-[#34d399] border border-[#10b981]/30 font-mono text-xs font-bold">
                      <CheckCircle size={14} />
                      <span>✓ ARTIST APPROVED & PUBLISHED</span>
                    </div>
                  ) : lensData.approval_status === "edited" ? (
                    <div className="badge-edited flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38bdf8]/15 text-[#38bdf8] border border-[#38bdf8]/30 font-mono text-xs font-bold">
                      <Edit3 size={14} />
                      <span>ARTIST-EDITED DRAFT</span>
                    </div>
                  ) : (
                    <div className="badge-pending flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f59e0b]/15 text-[#fbbf24] border border-[#f59e0b]/30 font-mono text-xs font-bold">
                      <Clock size={14} />
                      <span>AI-GENERATED DRAFT — PENDING ARTIST REVIEW</span>
                    </div>
                  )}

                  <span className="lens-status-desc text-xs text-[#9aa4bf]">
                    {lensData.approval_status === "approved"
                      ? "Verified cultural context authorized for global audiences."
                      : lensData.approval_status === "edited"
                      ? "Custom edits by artist. Ready for final approval."
                      : "Generated draft awaiting the artist's review & approval."}
                  </span>
                </div>

                {/* Workflow controls */}
                <div className="flex items-center gap-2">
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-3 py-1.5 text-xs font-mono text-[#faf7f2] bg-[#1a224a] hover:bg-[#253069] border border-[#2d3a77] rounded flex items-center gap-1.5 transition-colors"
                      title="Review and edit cultural context as artist"
                    >
                      <Edit3 size={13} className="text-[#ffb547]" />
                      <span>Review & Edit as Artist</span>
                    </button>
                  ) : (
                    <button
                      onClick={() => setIsEditing(false)}
                      className="px-3 py-1.5 text-xs font-mono text-[#949bb2] hover:text-[#faf7f2] bg-transparent border border-[#2d3a77] rounded"
                    >
                      Cancel Edit
                    </button>
                  )}

                  <button
                    onClick={handleRegenerate}
                    className="p-1.5 text-xs text-[#949bb2] hover:text-[#ffb547] bg-[#1a224a] border border-[#2d3a77] rounded"
                    title="Regenerate AI explanation"
                  >
                    <RotateCcw size={13} />
                  </button>
                </div>
              </div>

              {/* Core Principle Banner */}
              <div className="flex items-center justify-between text-xs px-3 py-2 bg-[#121838] border border-[#1e2759] rounded font-mono text-[#c3cadf]">
                <div className="flex items-center gap-2">
                  <Sparkles size={14} className="text-[#ffb547]" />
                  <span>CORE PRINCIPLE: <b>AI helps tell their story. The artist owns the story.</b></span>
                </div>
                <span className="text-[11px] text-[#818ba7]">
                  Language: {SUPPORTED_LANGUAGES.find((l) => l.code === currentLang)?.label}
                </span>
              </div>

              {/* SECTION F: A GLOBAL PERSPECTIVE (HERO CALLOUT) */}
              <div className="lens-hero-explanation-box p-5 rounded-lg bg-[#111638] border border-[#283570] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#ffb547] uppercase tracking-wider">
                    <Info size={14} />
                    <span>SECTION F // A GLOBAL PERSPECTIVE</span>
                  </div>
                  <span className="text-[11px] text-[#818ba7] font-mono">
                    For audiences encountering this art form for the first time
                  </span>
                </div>

                {isEditing ? (
                  <div>
                    <label className="text-[11px] font-mono text-[#8e98af] block mb-1">
                      Edit Global Perspective Explanation:
                    </label>
                    <textarea
                      value={editForm.global_explanation}
                      onChange={(e) => setEditForm({ ...editForm, global_explanation: e.target.value })}
                      className="w-full p-3 bg-[#0a0d24] border border-[#2b3975] rounded text-sm text-[#faf7f2] font-sans leading-relaxed focus:outline-none focus:border-[#ffb547]"
                      rows={4}
                    />
                  </div>
                ) : (
                  <p className="lens-hero-text text-base leading-relaxed text-[#f4efe6] font-sans">
                    {lensData.global_explanation}
                  </p>
                )}
              </div>

              {/* THE 7 STRUCTURED SECTIONS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* SECTION A: ABOUT THE ART AT A GLANCE */}
                <div className="lens-grid-card p-4 rounded-lg bg-[#0e132f] border border-[#1f285c] space-y-2">
                  <div className="card-kicker font-mono text-xs text-[#ffb547] flex items-center gap-1.5">
                    <BookOpen size={13} />
                    <span>SECTION A // THE ART AT A GLANCE</span>
                  </div>
                  {isEditing ? (
                    <div>
                      <label className="text-[10px] font-mono text-[#8e98af] block mb-1">Introduction:</label>
                      <textarea
                        value={editForm.introduction}
                        onChange={(e) => setEditForm({ ...editForm, introduction: e.target.value })}
                        className="w-full p-2 bg-[#090c22] border border-[#27326b] rounded text-xs text-[#faf7f2]"
                        rows={3}
                      />
                    </div>
                  ) : (
                    <div>
                      <h4 className="font-serif text-sm font-semibold text-[#faf7f2] mb-1">{lensData.title}</h4>
                      <p className="text-xs text-[#c3cadf] leading-relaxed">{lensData.introduction}</p>
                    </div>
                  )}
                  <div className="pt-2 border-t border-[#1a2250] flex items-center justify-between text-[11px] font-mono text-[#8a94b4]">
                    <span>Category: {artist.category || "Traditional Heritage"}</span>
                    <span>Origin: {lensData.origin}</span>
                  </div>
                </div>

                {/* SECTION B: CULTURAL ROOTS */}
                <div className="lens-grid-card p-4 rounded-lg bg-[#0e132f] border border-[#1f285c] space-y-2">
                  <div className="card-kicker font-mono text-xs text-[#ffb547] flex items-center gap-1.5">
                    <MapPin size={13} />
                    <span>SECTION B // CULTURAL ROOTS</span>
                  </div>
                  {isEditing ? (
                    <div>
                      <label className="text-[10px] font-mono text-[#8e98af] block mb-1">Geographical & Historical Context:</label>
                      <textarea
                        value={editForm.cultural_roots}
                        onChange={(e) => setEditForm({ ...editForm, cultural_roots: e.target.value })}
                        className="w-full p-2 bg-[#090c22] border border-[#27326b] rounded text-xs text-[#faf7f2]"
                        rows={3}
                      />
                    </div>
                  ) : (
                    <p className="text-xs text-[#c3cadf] leading-relaxed">{lensData.cultural_roots}</p>
                  )}
                  <div className="pt-2 border-t border-[#1a2250] text-[11px] font-mono text-[#8a94b4]">
                    <span>Geographical lineage: {lensData.origin}</span>
                  </div>
                </div>

                {/* SECTION C: MATERIALS AND TECHNIQUES */}
                <div className="lens-grid-card p-4 rounded-lg bg-[#0e132f] border border-[#1f285c] space-y-2">
                  <div className="card-kicker font-mono text-xs text-[#ffb547] flex items-center gap-1.5">
                    <Layers size={13} />
                    <span>SECTION C // MATERIALS & TECHNIQUES</span>
                  </div>
                  {isEditing ? (
                    <div className="space-y-2">
                      <div>
                        <label className="text-[10px] font-mono text-[#8e98af] block mb-1">Materials (comma-separated):</label>
                        <input
                          type="text"
                          value={editForm.materials}
                          onChange={(e) => setEditForm({ ...editForm, materials: e.target.value })}
                          className="w-full p-2 bg-[#090c22] border border-[#27326b] rounded text-xs text-[#faf7f2]"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] font-mono text-[#8e98af] block mb-1">Techniques & Craftsmanship:</label>
                        <textarea
                          value={editForm.techniques}
                          onChange={(e) => setEditForm({ ...editForm, techniques: e.target.value })}
                          className="w-full p-2 bg-[#090c22] border border-[#27326b] rounded text-xs text-[#faf7f2]"
                          rows={2}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {lensData.materials?.map((mat, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-[#172047] border border-[#273570] text-[11px] text-[#ffd285]">
                            {mat}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-[#c3cadf] leading-relaxed">
                        {Array.isArray(lensData.techniques) ? lensData.techniques.join(". ") : lensData.techniques}
                      </p>
                    </div>
                  )}
                </div>

                {/* SECTION D: STORIES BEHIND THE ART */}
                <div className="lens-grid-card p-4 rounded-lg bg-[#0e132f] border border-[#1f285c] space-y-2">
                  <div className="card-kicker font-mono text-xs text-[#ffb547] flex items-center gap-1.5">
                    <HeartHandshake size={13} />
                    <span>SECTION D // STORIES & TRADITIONS</span>
                  </div>
                  {isEditing ? (
                    <div>
                      <label className="text-[10px] font-mono text-[#8e98af] block mb-1">Legends, narratives & community themes:</label>
                      <textarea
                        value={editForm.stories_and_traditions}
                        onChange={(e) => setEditForm({ ...editForm, stories_and_traditions: e.target.value })}
                        className="w-full p-2 bg-[#090c22] border border-[#27326b] rounded text-xs text-[#faf7f2]"
                        rows={3}
                      />
                    </div>
                  ) : (
                    <p className="text-xs text-[#c3cadf] leading-relaxed">{lensData.stories_and_traditions}</p>
                  )}
                  {lensData.performance && (
                    <div className="pt-2 border-t border-[#1a2250] text-[11px] text-[#8e98af]">
                      <span className="font-mono text-[#ffb547]">Performance format: </span>
                      {lensData.performance}
                    </div>
                  )}
                </div>

                {/* SECTION E: CULTURAL SIGNIFICANCE */}
                <div className="lens-grid-card p-4 rounded-lg bg-[#0e132f] border border-[#1f285c] space-y-2 md:col-span-2">
                  <div className="card-kicker font-mono text-xs text-[#ffb547] flex items-center gap-1.5">
                    <Sparkles size={13} />
                    <span>SECTION E // CULTURAL SIGNIFICANCE</span>
                  </div>
                  {isEditing ? (
                    <div>
                      <label className="text-[10px] font-mono text-[#8e98af] block mb-1">Why this art matters to the community:</label>
                      <textarea
                        value={editForm.cultural_significance}
                        onChange={(e) => setEditForm({ ...editForm, cultural_significance: e.target.value })}
                        className="w-full p-2 bg-[#090c22] border border-[#27326b] rounded text-xs text-[#faf7f2]"
                        rows={2}
                      />
                    </div>
                  ) : (
                    <p className="text-xs text-[#c3cadf] leading-relaxed">{lensData.cultural_significance}</p>
                  )}
                </div>

                {/* SECTION G: THE ARTIST'S OWN STORY (VERBATIM) */}
                <div className="lens-grid-card p-4 rounded-lg bg-[#0a0d24] border border-[#283570] space-y-2 md:col-span-2">
                  <div className="card-kicker font-mono text-xs text-[#ffb547] flex items-center justify-between">
                    <span>SECTION G // THE ARTIST'S OWN STORY (ORIGINAL VOICE)</span>
                    <span className="text-[10px] text-[#717b9b] lowercase font-sans">
                      Preserved verbatim • Distinguishable from AI general commentary
                    </span>
                  </div>
                  <blockquote className="text-xs italic text-[#f4efe6] border-l-2 border-[#ffb547] pl-3 py-1 leading-relaxed">
                    "{artist.story || artist.bio || lensData.artist_story}"
                  </blockquote>
                  <div className="text-[11px] font-mono text-[#8e98af]">
                    — {artist.name}, {artist.city}
                  </div>
                </div>

                {/* SECTION H: SOURCES AND UNCERTAINTIES */}
                <div className="lens-grid-card p-4 rounded-lg bg-[#0c102a] border border-[#1a2350] space-y-2 md:col-span-2">
                  <div className="card-kicker font-mono text-xs text-[#ffb547] flex items-center gap-1.5">
                    <HelpCircle size={13} />
                    <span>SECTION H // SOURCES & UNCERTAINTY DECLARATIONS</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                    <div>
                      <span className="font-mono text-[11px] text-[#8e98af] block mb-1">Verifiable References:</span>
                      {lensData.sources && lensData.sources.length > 0 ? (
                        <ul className="list-disc list-inside text-[#9da8c9] space-y-0.5">
                          {lensData.sources.map((src, i) => (
                            <li key={i}>{src}</li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-[#646e8c] italic">Documented in direct living artisan transmission.</span>
                      )}
                    </div>
                    <div>
                      <span className="font-mono text-[11px] text-[#f59e0b] block mb-1">Identified Uncertainties:</span>
                      {lensData.uncertainties && lensData.uncertainties.length > 0 ? (
                        <ul className="list-disc list-inside text-[#c99e65] space-y-0.5">
                          {lensData.uncertainties.map((unc, i) => (
                            <li key={i}>{unc}</li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-[#646e8c] italic">No conflicting historical dates flagged.</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>

        {/* Modal Footer / Workflow Actions */}
        <div className="lens-modal-footer flex items-center justify-between p-4 bg-[#0a0d24] border-t border-[#1e2759]">
          <div className="text-xs font-mono text-[#8a94b4] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10b981]" />
            <span>Target Language: <b>{SUPPORTED_LANGUAGES.find((l) => l.code === currentLang)?.label}</b></span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-mono text-[#8a94b4] hover:text-[#faf7f2] transition-colors"
            >
              Back to Artist Profile
            </button>

            {isEditing ? (
              <>
                <button
                  onClick={handleSaveDraft}
                  className="px-4 py-2 text-xs font-mono text-[#38bdf8] bg-[#38bdf8]/10 hover:bg-[#38bdf8]/20 border border-[#38bdf8]/30 rounded flex items-center gap-1.5"
                >
                  <Save size={13} />
                  <span>Save Draft</span>
                </button>
                <button
                  onClick={handleApprove}
                  disabled={isApproving}
                  className="px-5 py-2 text-xs font-mono font-bold text-[#090d24] bg-[#ffb547] hover:bg-[#ffd285] rounded flex items-center gap-1.5 shadow-lg transition-all"
                >
                  <CheckCircle size={14} />
                  <span>Approve & Publish</span>
                </button>
              </>
            ) : lensData?.approval_status !== "approved" ? (
              <button
                onClick={handleApprove}
                disabled={loading || !lensData || isApproving}
                className="px-5 py-2 text-xs font-mono font-bold text-[#090d24] bg-[#ffb547] hover:bg-[#ffd285] rounded flex items-center gap-1.5 shadow-lg transition-all"
              >
                {isApproving ? (
                  <>
                    <Clock size={14} className="animate-spin" />
                    <span>Publishing Context...</span>
                  </>
                ) : (
                  <>
                    <CheckCircle size={14} />
                    <span>APPROVE & PUBLISH CONTEXT</span>
                  </>
                )}
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <span className="px-3 py-1.5 text-xs font-mono text-[#34d399] bg-[#10b981]/15 border border-[#10b981]/30 rounded flex items-center gap-1.5">
                  <FileCheck2 size={13} />
                  <span>Approved & Live on ROOTS</span>
                </span>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-3 py-1.5 text-xs font-mono text-[#8e98af] hover:text-[#faf7f2] border border-[#263162] rounded"
                >
                  Edit Again
                </button>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
