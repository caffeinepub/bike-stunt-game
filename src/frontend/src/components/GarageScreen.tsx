import { useState } from "react";

export type VehicleType = "bike" | "car" | "truck";

export interface Vehicle {
  id: string;
  name: string;
  type: VehicleType;
  emoji: string;
  speed: number;
  handling: number;
  boost: number;
  locked: boolean;
}

const VEHICLES: Vehicle[] = [
  // Bikes - all free
  {
    id: "bike_street",
    name: "Street Hawk",
    type: "bike",
    emoji: "🏍",
    speed: 7,
    handling: 9,
    boost: 6,
    locked: false,
  },
  {
    id: "bike_dirt",
    name: "Dirt Devil",
    type: "bike",
    emoji: "🛵",
    speed: 6,
    handling: 8,
    boost: 8,
    locked: false,
  },
  {
    id: "bike_super",
    name: "Neon Bolt",
    type: "bike",
    emoji: "⚡",
    speed: 9,
    handling: 7,
    boost: 7,
    locked: false,
  },
  // Cars - premium
  {
    id: "car_muscle",
    name: "Muscle Beast",
    type: "car",
    emoji: "🚗",
    speed: 8,
    handling: 7,
    boost: 7,
    locked: true,
  },
  {
    id: "car_sport",
    name: "Sport Flash",
    type: "car",
    emoji: "🏎",
    speed: 9,
    handling: 8,
    boost: 9,
    locked: true,
  },
  {
    id: "car_super",
    name: "SuperNova X",
    type: "car",
    emoji: "🚀",
    speed: 10,
    handling: 9,
    boost: 10,
    locked: true,
  },
  // Trucks - premium
  {
    id: "truck_heavy",
    name: "Heavy Titan",
    type: "truck",
    emoji: "🚚",
    speed: 6,
    handling: 5,
    boost: 8,
    locked: true,
  },
  {
    id: "truck_monster",
    name: "Monster Crusher",
    type: "truck",
    emoji: "🚛",
    speed: 5,
    handling: 4,
    boost: 10,
    locked: true,
  },
  {
    id: "truck_cyber",
    name: "Cyber Rig",
    type: "truck",
    emoji: "🛻",
    speed: 7,
    handling: 6,
    boost: 9,
    locked: true,
  },
];

interface GarageScreenProps {
  isPremium: boolean;
  selectedVehicleId: string;
  onSelectVehicle: (vehicleId: string) => void;
  onBack: () => void;
}

export default function GarageScreen({
  isPremium,
  selectedVehicleId,
  onSelectVehicle,
  onBack,
}: GarageScreenProps) {
  const [activeTab, setActiveTab] = useState<VehicleType>("bike");

  const vehicles = VEHICLES.map((v) => ({
    ...v,
    locked: v.locked && !isPremium,
  }));

  const filtered = vehicles.filter((v) => v.type === activeTab);

  const tabs: {
    type: VehicleType;
    icon: string;
    label: string;
    color: string;
  }[] = [
    { type: "bike", icon: "🏍", label: "BIKES", color: "#39ff14" },
    { type: "car", icon: "🚗", label: "CARS", color: "#00ffff" },
    { type: "truck", icon: "🚚", label: "TRUCKS", color: "#ff6600" },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#0a0a0f",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Grid bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 24px",
          borderBottom: "1px solid rgba(0,255,255,0.15)",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)",
          zIndex: 5,
          position: "relative",
        }}
      >
        <button
          type="button"
          data-ocid="garage.back_button"
          onClick={onBack}
          style={{
            padding: "8px 18px",
            background: "rgba(0,0,0,0.6)",
            border: "1.5px solid rgba(0,255,255,0.4)",
            borderRadius: 8,
            color: "#00ffff",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "Geist Mono, monospace",
            cursor: "pointer",
            transition: "all 0.18s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(0,255,255,0.12)";
            e.currentTarget.style.borderColor = "#00ffff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.6)";
            e.currentTarget.style.borderColor = "rgba(0,255,255,0.4)";
          }}
        >
          ← BACK
        </button>

        <h2
          style={{
            fontFamily: "Bricolage Grotesque, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(22px, 5vw, 32px)",
            margin: 0,
            color: "#00ffff",
            textShadow: "0 0 15px #00ffff88",
            letterSpacing: "-0.02em",
          }}
        >
          🚗 GARAGE
        </h2>

        <div style={{ width: 80 }} />
      </div>

      {/* Tabs */}
      <div
        style={{
          display: "flex",
          gap: 8,
          padding: "16px 24px 0",
          zIndex: 5,
          position: "relative",
        }}
      >
        {tabs.map((tab) => (
          <button
            key={tab.type}
            type="button"
            data-ocid={`garage.${tab.type}s_tab`}
            onClick={() => setActiveTab(tab.type)}
            style={{
              padding: "10px 20px",
              background:
                activeTab === tab.type ? `${tab.color}1a` : "rgba(0,0,0,0.5)",
              border: `2px solid ${activeTab === tab.type ? tab.color : `${tab.color}44`}`,
              borderRadius: 8,
              color: activeTab === tab.type ? tab.color : `${tab.color}88`,
              fontSize: 13,
              fontWeight: 800,
              fontFamily: "Geist Mono, monospace",
              cursor: "pointer",
              letterSpacing: "0.06em",
              transition: "all 0.18s",
              boxShadow:
                activeTab === tab.type ? `0 0 16px ${tab.color}44` : "none",
            }}
          >
            {tab.icon} {tab.label}
            {tab.type !== "bike" && !isPremium && (
              <span style={{ marginLeft: 6, fontSize: 11, opacity: 0.7 }}>
                🔒
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Vehicle grid */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          width: "100%",
          padding: "20px 24px",
          zIndex: 5,
          position: "relative",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill, minmax(min(260px, 90vw), 1fr))",
            gap: 14,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          {filtered.map((vehicle) => {
            const isSelected = selectedVehicleId === vehicle.id;
            const tColor =
              tabs.find((t) => t.type === vehicle.type)?.color ?? "#00ffff";

            return (
              <div
                key={vehicle.id}
                style={{
                  background: isSelected
                    ? `${tColor}12`
                    : "rgba(10,10,20,0.85)",
                  border: `${isSelected ? "2px" : "1.5px"} solid ${isSelected ? tColor : `${tColor}33`}`,
                  borderRadius: 12,
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 12,
                  position: "relative",
                  boxShadow: isSelected ? `0 0 24px ${tColor}44` : "none",
                  opacity: vehicle.locked ? 0.65 : 1,
                  transition: "all 0.18s",
                }}
              >
                {vehicle.locked && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(0,0,0,0.55)",
                      borderRadius: 12,
                      zIndex: 2,
                      flexDirection: "column",
                      gap: 4,
                    }}
                  >
                    <span style={{ fontSize: 32 }}>🔒</span>
                    <span
                      style={{
                        fontFamily: "Geist Mono, monospace",
                        fontSize: 11,
                        color: "#ffd700",
                        letterSpacing: "0.08em",
                      }}
                    >
                      PREMIUM ONLY
                    </span>
                  </div>
                )}

                {/* Vehicle icon */}
                <div style={{ textAlign: "center", fontSize: 52 }}>
                  {vehicle.emoji}
                </div>

                {/* Name */}
                <div
                  style={{
                    fontFamily: "Bricolage Grotesque, sans-serif",
                    fontWeight: 800,
                    fontSize: 17,
                    color: tColor,
                    textShadow: `0 0 8px ${tColor}66`,
                    letterSpacing: "-0.01em",
                    textAlign: "center",
                  }}
                >
                  {vehicle.name}
                </div>

                {/* Stats */}
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 6 }}
                >
                  {[
                    { label: "SPEED", value: vehicle.speed, color: "#00ffff" },
                    {
                      label: "HANDLING",
                      value: vehicle.handling,
                      color: "#ff00ff",
                    },
                    { label: "BOOST", value: vehicle.boost, color: "#ffff00" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <span
                        style={{
                          fontFamily: "Geist Mono, monospace",
                          fontSize: 9,
                          color: "rgba(255,255,255,0.4)",
                          letterSpacing: "0.1em",
                          width: 60,
                          flexShrink: 0,
                        }}
                      >
                        {stat.label}
                      </span>
                      <div
                        style={{
                          flex: 1,
                          height: 5,
                          background: "rgba(255,255,255,0.1)",
                          borderRadius: 3,
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${stat.value * 10}%`,
                            height: "100%",
                            background: stat.color,
                            boxShadow: `0 0 6px ${stat.color}`,
                            borderRadius: 3,
                          }}
                        />
                      </div>
                      <span
                        style={{
                          fontFamily: "Geist Mono, monospace",
                          fontSize: 10,
                          color: stat.color,
                          width: 18,
                          textAlign: "right",
                        }}
                      >
                        {stat.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Select button */}
                {!vehicle.locked && (
                  <button
                    type="button"
                    data-ocid="garage.select_button"
                    onClick={() => onSelectVehicle(vehicle.id)}
                    style={{
                      width: "100%",
                      padding: "10px",
                      background: isSelected
                        ? `${tColor}22`
                        : "rgba(0,0,0,0.5)",
                      border: `1.5px solid ${isSelected ? tColor : `${tColor}55`}`,
                      borderRadius: 8,
                      color: isSelected ? tColor : `${tColor}99`,
                      fontSize: 13,
                      fontWeight: 800,
                      fontFamily: "Geist Mono, monospace",
                      cursor: "pointer",
                      letterSpacing: "0.06em",
                      transition: "all 0.18s",
                    }}
                  >
                    {isSelected ? "✓ SELECTED" : "SELECT"}
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
