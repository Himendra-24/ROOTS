import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Sparkles, MapPin, Palette, Feather, ArrowRight, Check } from "lucide-react";

export default function RegisterModal({
  isOpen,
  onClose,
  onRegisterSuccess,
  onLoginSuccess
}) {
  const [mode, setMode] = useState("register"); // 'register' | 'login' | 'welcome'
  const [createdArtist, setCreatedArtist] = useState(null);

  // Registration Form State
  const [fullName, setFullName] = useState("");
  const [locationCity, setLocationCity] = useState("");
  const [locationRegion, setLocationRegion] = useState("Andhra Pradesh");
  const [artForm, setArtForm] = useState("");
  const [craftStory, setCraftStory] = useState("");
  const [customArtCategory, setCustomArtCategory] = useState("Traditional Craft");
  const [error, setError] = useState("");

  // Login Form State
  const [loginEmail, setLoginEmail] = useState("");

  if (!isOpen) return null;

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim()) {
      setError("Please enter your full name.");
      return;
    }
    if (!locationCity.trim()) {
      setError("Please enter your city or town.");
      return;
    }
    if (!artForm.trim()) {
      setError("Please specify your art form or craft.");
      return;
    }
    if (!craftStory.trim()) {
      setError("Please tell us about your craft so Global Lens can represent you faithfully.");
      return;
    }

    // Geocoding estimate for India or regional coordinates
    const baseCoords = {
      lat: 16.5 + (Math.random() - 0.5) * 4,
      lon: 80.5 + (Math.random() - 0.5) * 4
    };

    const newArtist = {
      id: `artist-${Date.now()}`,
      name: fullName.trim(),
      artForm: artForm.trim(),
      category: customArtCategory,
      city: locationCity.trim(),
      region: locationRegion.trim() || "India",
      country: "India",
      latitude: Number(baseCoords.lat.toFixed(4)),
      longitude: Number(baseCoords.lon.toFixed(4)),
      isDemo: false, // New registered user is NOT demo
      flag: "🇮🇳",
      tags: [customArtCategory, "Registered Artist", "Local Talent"],
      bio: craftStory.trim().slice(0, 160) + "...",
      story: craftStory.trim(),
      craftDescription: `Traditional handcrafted technique practiced in ${locationCity.trim()}.`,
      culturalContext: `Living cultural craft rooted in the communities of ${locationCity.trim()}.`,
      materials: ["Natural regional media", "Handmade artisanal tools"],
      techniques: ["Traditional handcrafting", "Apprenticeship methods"],
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      artworkImages: [
        "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80"
      ],
      createdAt: new Date().toISOString()
    };

    setCreatedArtist(newArtist);
    setMode("welcome");
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginEmail.trim()) {
      setError("Please enter your email to continue in demo mode.");
      return;
    }
    const demoUser = {
      id: "artist-002",
      name: "Meera Devi",
      artForm: "Tholu Bommalata / Leather Puppet Art",
      category: "Traditional Craft",
      city: "Nellore",
      region: "Andhra Pradesh",
      country: "India",
      latitude: 14.4426,
      longitude: 79.9865,
      isDemo: true,
      email: loginEmail
    };
    onLoginSuccess(demoUser);
    onClose();
  };

  const handleEnterStage = () => {
    if (createdArtist) {
      onRegisterSuccess(createdArtist);
    }
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.22 }}
        className="modal-window-auth"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="auth-close-btn"
          aria-label="Close registration"
        >
          <X size={20} />
        </button>

        {mode === "welcome" ? (
          /* Welcome Screen */
          <div className="auth-welcome-view">
            <div className="auth-sparkle-icon">✦</div>
            <div className="auth-welcome-text">
              <div className="kicker">REGISTRATION COMPLETE</div>
              <h2 className="title">WELCOME TO ROOTS</h2>
              <p className="subtitle">
                Your Artist World is ready. Your story, your art form, and your
                geographic marker are now live on the global stage.
              </p>
            </div>

            <div className="auth-artist-recap-box">
              <div className="recap-tag">YOUR NEW ARTIST WORLD</div>
              <div className="recap-name">{createdArtist?.name}</div>
              <div className="recap-art">
                {createdArtist?.artForm} · {createdArtist?.city}, {createdArtist?.country}
              </div>
              <div className="recap-note">
                Visible immediately on the 3D Earth, Members directory, and Explore.
              </div>
            </div>

            <button
              onClick={handleEnterStage}
              className="btn-enter-stage"
            >
              <span>ENTER GLOBAL STAGE</span>
              <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          /* Register or Login Form */
          <div className="auth-form-wrap">
            <div className="auth-header-box">
              <div className="kicker flex items-center gap-1.5">
                <Sparkles size={13} />
                <span>ROOTS · ARTIST ONBOARDING</span>
              </div>
              <h2 className="title">
                {mode === "register" ? "CREATE YOUR ARTIST WORLD" : "WELCOME BACK TO ROOTS"}
              </h2>
              <p className="subtitle">
                {mode === "register"
                  ? "Bring your local story to a global stage without losing your voice."
                  : "Sign in to access your Artist World and manage your Global Lens."}
              </p>
            </div>

            {/* Mode Switch Tabs */}
            <div className="auth-tab-switch">
              <button
                type="button"
                onClick={() => {
                  setMode("register");
                  setError("");
                }}
                className={`tab-btn ${mode === "register" ? "active" : ""}`}
              >
                Join as Artist
              </button>
              <button
                type="button"
                onClick={() => {
                  setMode("login");
                  setError("");
                }}
                className={`tab-btn ${mode === "login" ? "active" : ""}`}
              >
                I Already Have An Account
              </button>
            </div>

            {error && <div className="auth-error-box">{error}</div>}

            {mode === "register" ? (
              <form onSubmit={handleRegisterSubmit} className="auth-inputs-stack">
                {/* FULL NAME */}
                <div className="input-group">
                  <label className="input-label">FULL NAME *</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Kavitha Reddy"
                    className="auth-input"
                  />
                </div>

                {/* LOCATION */}
                <div className="input-row-2">
                  <div className="input-group">
                    <label className="input-label flex items-center gap-1">
                      <MapPin size={12} className="text-[#e6a93b]" />
                      <span>CITY / TOWN *</span>
                    </label>
                    <input
                      type="text"
                      value={locationCity}
                      onChange={(e) => setLocationCity(e.target.value)}
                      placeholder="e.g. Kondapalli"
                      className="auth-input"
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">REGION / STATE</label>
                    <input
                      type="text"
                      value={locationRegion}
                      onChange={(e) => setLocationRegion(e.target.value)}
                      placeholder="e.g. Andhra Pradesh"
                      className="auth-input"
                    />
                  </div>
                </div>

                {/* ART FORM */}
                <div className="input-row-2">
                  <div className="input-group">
                    <label className="input-label flex items-center gap-1">
                      <Palette size={12} className="text-[#e6a93b]" />
                      <span>ART FORM / CRAFT *</span>
                    </label>
                    <input
                      type="text"
                      value={artForm}
                      onChange={(e) => setArtForm(e.target.value)}
                      placeholder="e.g. Kondapalli Softwood Toys"
                      className="auth-input"
                    />
                  </div>
                  <div className="input-group">
                    <label className="input-label">DISCIPLINE CATEGORY</label>
                    <select
                      value={customArtCategory}
                      onChange={(e) => setCustomArtCategory(e.target.value)}
                      className="auth-input"
                    >
                      <option value="Traditional Craft">Traditional Craft</option>
                      <option value="Storytelling">Folk Storytelling</option>
                      <option value="Music">Traditional Music</option>
                      <option value="Dance">Regional Dance</option>
                      <option value="Textile">Textile & Dyeing</option>
                      <option value="Sculpture">Terracotta / Sculpture</option>
                    </select>
                  </div>
                </div>

                {/* TELL US ABOUT YOUR CRAFT */}
                <div className="input-group">
                  <label className="input-label flex items-center gap-1">
                    <Feather size={12} className="text-[#e6a93b]" />
                    <span>TELL US ABOUT YOUR CRAFT *</span>
                  </label>
                  <textarea
                    rows={3}
                    value={craftStory}
                    onChange={(e) => setCraftStory(e.target.value)}
                    placeholder="Tell us what you create, how you create it, and what makes your work meaningful to your community..."
                    className="auth-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="auth-submit-btn"
                >
                  <span>CREATE MY ARTIST WORLD</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            ) : (
              <form onSubmit={handleLoginSubmit} className="auth-inputs-stack">
                <div className="input-group">
                  <label className="input-label">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    value={loginEmail}
                    onChange={(e) => setLoginEmail(e.target.value)}
                    placeholder="meera@roots-demo.org"
                    className="auth-input"
                  />
                  <p className="text-[11px] text-[#717b94] mt-1.5">
                    Demo sign-in — enter any email or use our demo master artisan account.
                  </p>
                </div>

                <button
                  type="submit"
                  className="auth-submit-btn"
                >
                  <span>CONTINUE AS DEMO ARTIST</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            )}

            <div className="auth-footer-notice">
              Demo environment · Data persisted locally · Architected for Firebase Auth
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
}
