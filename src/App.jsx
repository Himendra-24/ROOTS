import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navigation/Navbar";
import RegisterModal from "./components/Auth/RegisterModal";
import Home from "./pages/Home";
import GlobalStage from "./pages/GlobalStage";
import Explore from "./pages/Explore";
import Members from "./pages/Members";
import ArtistWorldPage from "./pages/ArtistWorldPage";
import Simulator from "./pages/Simulator";
import Opportunities from "./pages/Opportunities";
import About from "./pages/About";
import { INITIAL_DEMO_ARTISTS } from "./data/artists";

export function RootsApp() {
  // Navigation state: 'home' | 'stage' | 'explore' | 'members' | 'artist-world' | 'simulator' | 'about'
  const [currentPage, setCurrentPage] = useState("home");

  // Artists state initialized from localStorage or initial demo data
  const [artists, setArtists] = useState(() => {
    try {
      const saved = localStorage.getItem("roots_artists");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn("Error reading stored artists:", e);
    }
    return INITIAL_DEMO_ARTISTS;
  });

  // Current logged in user (if registered or logged in)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem("roots_current_user");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn("Error reading current user:", e);
    }
    return null;
  });

  // Currently focused/selected artist for Global Stage & Artist World
  const [selectedArtist, setSelectedArtist] = useState(() => {
    return (
      INITIAL_DEMO_ARTISTS.find((a) => a.id === "artist-002") ||
      INITIAL_DEMO_ARTISTS[0]
    );
  });

  // Registration / Login Modal state
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  // Sync artists to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("roots_artists", JSON.stringify(artists));
    } catch (e) {
      console.warn("Error saving artists to localStorage:", e);
    }
  }, [artists]);

  // Sync current user to localStorage
  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem("roots_current_user", JSON.stringify(currentUser));
      } else {
        localStorage.removeItem("roots_current_user");
      }
    } catch (e) {
      console.warn("Error saving current user:", e);
    }
  }, [currentUser]);

  // Handle successful registration of a new artist
  const handleRegisterSuccess = (newArtist) => {
    setArtists((prev) => [newArtist, ...prev.filter((a) => a.id !== newArtist.id)]);
    setCurrentUser(newArtist);
    setSelectedArtist(newArtist);
    setCurrentPage("stage");
  };

  // Handle demo login
  const handleLoginSuccess = (user) => {
    setCurrentUser(user);
    const existing = artists.find((a) => a.id === user.id) || user;
    setSelectedArtist(existing);
    setCurrentPage("artist-world");
  };

  // Switch to artist world for an artist
  const handleEnterArtistWorld = (artist) => {
    setSelectedArtist(artist);
    setCurrentPage("artist-world");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Locate an artist on the 3D Globe
  const handleLocateOnGlobe = (artist) => {
    setSelectedArtist(artist);
    setCurrentPage("stage");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="roots-app-root min-h-screen flex flex-col bg-[#070a12] text-[#faf7f2]">
      {/* Primary Navigation */}
      <Navbar
        page={currentPage}
        setPage={(page) => {
          setCurrentPage(page);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        onOpenJoin={() => setJoinModalOpen(true)}
        currentUser={currentUser}
        onSelectArtist={handleEnterArtistWorld}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          {currentPage === "home" && (
            <motion.div
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Home
                artists={artists}
                onNavigate={setCurrentPage}
                onOpenJoin={() => setJoinModalOpen(true)}
                onSelectArtist={handleLocateOnGlobe}
              />
            </motion.div>
          )}

          {currentPage === "stage" && (
            <motion.div
              key="stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <GlobalStage
                artists={artists}
                selectedArtist={selectedArtist}
                onSelectArtist={setSelectedArtist}
                onEnterArtistWorld={handleEnterArtistWorld}
              />
            </motion.div>
          )}

          {currentPage === "explore" && (
            <motion.div
              key="explore"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Explore
                artists={artists}
                onSelectArtist={handleEnterArtistWorld}
              />
            </motion.div>
          )}

          {currentPage === "members" && (
            <motion.div
              key="members"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Members
                artists={artists}
                currentUser={currentUser}
                onSelectArtist={handleEnterArtistWorld}
                onOpenJoin={() => setJoinModalOpen(true)}
              />
            </motion.div>
          )}

          {currentPage === "artist-world" && (
            <motion.div
              key="artist-world"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ArtistWorldPage
                artist={selectedArtist}
                onBack={() => setCurrentPage("stage")}
                onNavigateStage={handleLocateOnGlobe}
              />
            </motion.div>
          )}

          {currentPage === "opportunities" && (
            <motion.div
              key="opportunities"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Opportunities
                artists={artists}
                onSelectArtist={handleEnterArtistWorld}
                onNavigateSimulator={(_opp) => {
                  setCurrentPage("simulator");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </motion.div>
          )}

          {currentPage === "simulator" && (
            <motion.div
              key="simulator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Simulator
                artists={artists}
                selectedArtist={selectedArtist}
                onSelectArtist={setSelectedArtist}
              />
            </motion.div>
          )}

          {currentPage === "about" && (
            <motion.div
              key="about"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <About />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Join ROOTS / Registration Modal */}
      <RegisterModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        onRegisterSuccess={handleRegisterSuccess}
        onLoginSuccess={handleLoginSuccess}
      />

      {/* Global Footer */}
      <footer className="roots-footer">
        <div className="footer-inner">
          <div className="flex items-center gap-2">
            <span className="text-[#e6a93b]">✦ ROOTS</span>
            <span>— LOCAL TALENT · GLOBAL STAGE</span>
          </div>
          <div>
            <span>Demo Prototype · Fictional Seed Data · AI helps tell their story. The artist owns the story.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return <RootsApp />;
}
