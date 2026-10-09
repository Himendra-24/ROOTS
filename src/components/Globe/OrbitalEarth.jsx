import React, { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { DEMO_AUDIENCE_POINTS } from "../../data/artists";

export function latLonToVector3(lat, lon, radius = 2.4) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.cos(theta) * Math.sin(phi),
    radius * Math.cos(phi),
    radius * Math.sin(theta) * Math.sin(phi)
  );
}

function MarkerRing({ position, active, color = "#ffb547" }) {
  const ringRef = useRef();
  const quaternion = useMemo(() => {
    const normal = position.clone().normalize();
    return new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
  }, [position]);

  useFrame(({ clock }) => {
    if (ringRef.current) {
      const t = clock.getElapsedTime();
      const scale = active ? 1 + Math.sin(t * 3.5) * 0.22 : 1 + Math.sin(t * 1.8) * 0.1;
      ringRef.current.scale.set(scale, scale, 1);
    }
  });

  return (
    <group position={position} quaternion={quaternion}>
      <mesh ref={ringRef}>
        <ringGeometry args={[0.07, active ? 0.12 : 0.09, 28]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={active ? 0.85 : 0.45}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

function EarthSphere({ textures }) {
  return (
    <group>
      {/* Primary Earth sphere */}
      <mesh receiveShadow castShadow>
        <sphereGeometry args={[2.4, 48, 48]} />
        <meshStandardMaterial
          map={textures.map || null}
          bumpMap={textures.bump || null}
          bumpScale={0.03}
          roughness={0.7}
          metalness={0.1}
          color={textures.map ? "#ffffff" : "#141b3a"}
        />
      </mesh>

      {/* Atmospheric inner glow */}
      <mesh>
        <sphereGeometry args={[2.425, 36, 36]} />
        <meshBasicMaterial
          color="#4f75d6"
          transparent
          opacity={0.15}
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>

      {/* Atmospheric outer haze */}
      <mesh>
        <sphereGeometry args={[2.47, 36, 36]} />
        <meshBasicMaterial
          color="#3864c7"
          transparent
          opacity={0.08}
          blending={THREE.AdditiveBlending}
          side={THREE.FrontSide}
        />
      </mesh>
    </group>
  );
}

function Arcs({ selectedArtist, audiencePoints, radius = 2.4 }) {
  const arcs = useMemo(() => {
    if (!selectedArtist) return [];
    const from = latLonToVector3(selectedArtist.latitude, selectedArtist.longitude, radius * 1.01);

    return audiencePoints.map((aud, idx) => {
      const to = latLonToVector3(aud.lat, aud.lon, radius * 1.01);
      const distance = from.distanceTo(to);
      const elevation = Math.min(1.1, 0.35 + distance * 0.2);
      const mid = from.clone().add(to).multiplyScalar(0.5).normalize().multiplyScalar(radius + elevation);

      const curve = new THREE.CatmullRomCurve3([from, mid, to]);
      return { id: `arc-${selectedArtist.id}-${aud.name}-${idx}`, curve };
    });
  }, [selectedArtist, audiencePoints, radius]);

  return (
    <group>
      {arcs.map((arc) => (
        <mesh key={arc.id}>
          <tubeGeometry args={[arc.curve, 36, 0.008, 6, false]} />
          <meshBasicMaterial
            color="#ffb547"
            transparent
            opacity={0.38}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
}

function GlobeInner({
  artists,
  selectedArtist,
  onSelectArtist,
  onHoverArtist,
  compact,
  textures
}) {
  const globeGroup = useRef();
  const targetRotation = useRef({ x: 0, y: 0, active: false });

  // When an artist is selected, smoothly orient the globe toward that artist
  useEffect(() => {
    if (selectedArtist) {
      const phi = (90 - selectedArtist.latitude) * (Math.PI / 180);
      const theta = (selectedArtist.longitude + 180) * (Math.PI / 180);
      targetRotation.current = {
        x: (phi - Math.PI / 2) * 0.35,
        y: -theta + Math.PI / 2 + 0.3,
        active: true
      };
      const timer = setTimeout(() => {
        targetRotation.current.active = false;
      }, 2400);
      return () => clearTimeout(timer);
    }
  }, [selectedArtist]);

  useFrame((_, delta) => {
    if (!globeGroup.current) return;

    if (targetRotation.current.active) {
      globeGroup.current.rotation.y = THREE.MathUtils.lerp(
        globeGroup.current.rotation.y,
        targetRotation.current.y,
        delta * 3.2
      );
      globeGroup.current.rotation.x = THREE.MathUtils.lerp(
        globeGroup.current.rotation.x,
        targetRotation.current.x,
        delta * 3.2
      );
    } else {
      // Idle slow subtle movement
      globeGroup.current.rotation.y += delta * (compact ? 0.035 : 0.045);
    }
  });

  return (
    <group ref={globeGroup}>
      <EarthSphere textures={textures} />

      {/* Artist Markers (Lamp Amber) */}
      {artists.map((artist) => {
        const isSelected = selectedArtist?.id === artist.id;
        const pos = latLonToVector3(artist.latitude, artist.longitude, 2.42);

        return (
          <group key={artist.id} position={pos}>
            <mesh
              onClick={(e) => {
                e.stopPropagation();
                onSelectArtist?.(artist);
              }}
              onPointerOver={(e) => {
                e.stopPropagation();
                document.body.style.cursor = "pointer";
                onHoverArtist?.(artist);
              }}
              onPointerOut={(e) => {
                e.stopPropagation();
                document.body.style.cursor = "auto";
                onHoverArtist?.(null);
              }}
            >
              <sphereGeometry args={[isSelected ? 0.085 : 0.06, 14, 14]} />
              <meshStandardMaterial
                color={isSelected ? "#ffd88a" : "#ffb547"}
                emissive={isSelected ? "#ffb547" : "#c9822b"}
                emissiveIntensity={isSelected ? 2.6 : 1.2}
                roughness={0.25}
              />
            </mesh>

            <MarkerRing position={new THREE.Vector3(0, 0, 0)} active={isSelected} />
          </group>
        );
      })}

      {/* Global Audience Discovery Markers (Subtle Cool Blue) */}
      {DEMO_AUDIENCE_POINTS.map((aud) => {
        const pos = latLonToVector3(aud.lat, aud.lon, 2.415);
        return (
          <group key={`aud-${aud.name}`} position={pos}>
            <mesh>
              <sphereGeometry args={[0.036, 10, 10]} />
              <meshStandardMaterial
                color="#72c5ed"
                emissive="#1e6894"
                emissiveIntensity={1.2}
                roughness={0.4}
              />
            </mesh>
            <MarkerRing position={new THREE.Vector3(0, 0, 0)} active={false} color="#72c5ed" />
          </group>
        );
      })}

      {/* Connection Arcs */}
      <Arcs selectedArtist={selectedArtist} audiencePoints={DEMO_AUDIENCE_POINTS} />

      {/* Background Starfield Particles */}
      <Sparkles
        count={compact ? 40 : 90}
        scale={[7, 6, 7]}
        size={1.3}
        speed={0.16}
        color="#fce8c3"
      />
    </group>
  );
}

// Module-level cached textures to avoid re-fetching on unmount/remount
let globalCachedTextures = null;

export default function OrbitalEarth({
  artists,
  selectedArtist,
  onSelectArtist,
  compact = false,
  className = ""
}) {
  const [hoveredArtist, setHoveredArtist] = useState(null);
  const [textures, setTextures] = useState(() => globalCachedTextures || {});

  useEffect(() => {
    if (globalCachedTextures) {
      setTextures(globalCachedTextures);
      return;
    }

    const loader = new THREE.TextureLoader();
    const baseUrl = import.meta.env.BASE_URL || "/";
    loader.load(
      `${baseUrl}textures/earth-blue-marble.jpg`,
      (mapTex) => {
        mapTex.colorSpace = THREE.SRGBColorSpace;
        loader.load(
          `${baseUrl}textures/earth-topology.png`,
          (bumpTex) => {
            const loaded = { map: mapTex, bump: bumpTex };
            globalCachedTextures = loaded;
            setTextures(loaded);
          },
          undefined,
          () => {
            const loaded = { map: mapTex };
            globalCachedTextures = loaded;
            setTextures(loaded);
          }
        );
      },
      undefined,
      (err) => console.warn("Earth texture load fallback:", err)
    );
  }, []);

  return (
    <div className={`orbital-earth-wrapper relative w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, compact ? 7.2 : 6.8], fov: 42 }}
        dpr={[1, 1.75]} // Clamped pixel ratio for GPU performance
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.52} color="#c2d1f0" />
        <directionalLight position={[6, 4, 5]} intensity={2.5} color="#fff6e3" />
        <pointLight position={[-6, -3, -3]} intensity={1.6} color="#355cb0" />

        <GlobeInner
          artists={artists}
          selectedArtist={selectedArtist}
          onSelectArtist={onSelectArtist}
          onHoverArtist={setHoveredArtist}
          compact={compact}
          textures={textures}
        />

        <OrbitControls
          enableZoom={!compact}
          enablePan={false}
          minDistance={4.5}
          maxDistance={9.5}
          rotateSpeed={0.65}
          zoomSpeed={0.75}
        />
      </Canvas>

      {/* Floating Hover Card */}
      {hoveredArtist && (
        <div
          className="absolute pointer-events-none transition-all duration-150 z-30"
          style={{ top: "20px", left: "20px" }}
          role="tooltip"
          aria-live="polite"
        >
          <div className="bg-[#0f152d]/90 border border-[#ffb547]/50 backdrop-blur-md px-3.5 py-2.5 rounded-xl shadow-xl text-left">
            <div className="text-[10px] uppercase font-mono tracking-widest text-[#ffb547] font-semibold">
              ARTIST MARKER
            </div>
            <div className="text-sm font-serif font-bold text-[#f5f0e6] mt-0.5">
              {hoveredArtist.name}
            </div>
            <div className="text-xs text-[#c9822b] font-medium">
              {hoveredArtist.artForm}
            </div>
            <div className="text-[11px] text-[#a9a7a0] mt-0.5">
              {hoveredArtist.city}, {hoveredArtist.country}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
