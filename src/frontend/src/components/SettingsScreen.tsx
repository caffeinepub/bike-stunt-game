interface SettingsScreenProps {
  muted: boolean;
  onToggleMute: () => void;
  onBack: () => void;
}

export default function SettingsScreen({
  muted,
  onToggleMute,
  onBack,
}: SettingsScreenProps) {
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
            "linear-gradient(rgba(255,0,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,0,255,0.04) 1px, transparent 1px)",
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
          borderBottom: "1px solid rgba(255,0,255,0.15)",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)",
          zIndex: 5,
          position: "relative",
        }}
      >
        <button
          type="button"
          data-ocid="settings.back_button"
          onClick={onBack}
          style={{
            padding: "8px 18px",
            background: "rgba(0,0,0,0.6)",
            border: "1.5px solid rgba(255,0,255,0.4)",
            borderRadius: 8,
            color: "#ff00ff",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "Geist Mono, monospace",
            cursor: "pointer",
            transition: "all 0.18s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,0,255,0.12)";
            e.currentTarget.style.borderColor = "#ff00ff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.6)";
            e.currentTarget.style.borderColor = "rgba(255,0,255,0.4)";
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
            color: "#ff00ff",
            textShadow: "0 0 15px #ff00ff88",
            letterSpacing: "-0.02em",
          }}
        >
          ⚙ SETTINGS
        </h2>

        <div style={{ width: 80 }} />
      </div>

      {/* Content */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          width: "100%",
          padding: "28px 24px",
          zIndex: 5,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div style={{ width: "100%", maxWidth: 540 }}>
          {/* Sound section */}
          <SectionCard color="#ff00ff" title="🔊 AUDIO">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 0",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "Bricolage Grotesque, sans-serif",
                    fontWeight: 700,
                    fontSize: 16,
                    color: "rgba(255,255,255,0.9)",
                  }}
                >
                  Sound Effects
                </div>
                <div
                  style={{
                    fontFamily: "Geist Mono, monospace",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    marginTop: 2,
                  }}
                >
                  Engine, boosts, crashes & stunts
                </div>
              </div>

              {/* Toggle */}
              <button
                type="button"
                data-ocid="settings.sound_toggle"
                onClick={onToggleMute}
                aria-pressed={!muted}
                style={{
                  position: "relative",
                  width: 56,
                  height: 28,
                  background: muted
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(57,255,20,0.2)",
                  border: `2px solid ${muted ? "rgba(255,255,255,0.2)" : "#39ff14"}`,
                  borderRadius: 14,
                  cursor: "pointer",
                  transition: "all 0.2s",
                  boxShadow: muted ? "none" : "0 0 12px #39ff1444",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 3,
                    left: muted ? 3 : 27,
                    width: 18,
                    height: 18,
                    borderRadius: 9,
                    background: muted ? "rgba(255,255,255,0.4)" : "#39ff14",
                    transition: "all 0.2s",
                    boxShadow: muted ? "none" : "0 0 8px #39ff14",
                  }}
                />
              </button>
            </div>
            <div
              style={{
                padding: "10px 14px",
                background: muted
                  ? "rgba(255,68,68,0.08)"
                  : "rgba(57,255,20,0.08)",
                border: `1px solid ${muted ? "rgba(255,68,68,0.25)" : "rgba(57,255,20,0.25)"}`,
                borderRadius: 8,
                fontFamily: "Geist Mono, monospace",
                fontSize: 12,
                color: muted ? "#ff6666" : "#39ff14",
              }}
            >
              {muted ? "🔇 Sound is OFF" : "🔊 Sound is ON"}
            </div>
          </SectionCard>

          {/* Controls section */}
          <SectionCard color="#00ffff" title="🎮 CONTROLS">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              {/* Keyboard */}
              <div>
                <div
                  style={{
                    fontFamily: "Geist Mono, monospace",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                    textTransform: "uppercase",
                  }}
                >
                  ⌨ KEYBOARD
                </div>
                {[
                  { key: "↑ / W", action: "Accelerate" },
                  { key: "↓ / S", action: "Brake" },
                  { key: "← / A", action: "Lean Back" },
                  { key: "→ / D", action: "Lean Fwd" },
                ].map((ctrl) => (
                  <div
                    key={ctrl.key}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "6px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Geist Mono, monospace",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#ffff00",
                        textShadow: "0 0 6px #ffff0066",
                      }}
                    >
                      {ctrl.key}
                    </span>
                    <span
                      style={{
                        fontFamily: "Geist Mono, monospace",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {ctrl.action}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mobile */}
              <div>
                <div
                  style={{
                    fontFamily: "Geist Mono, monospace",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.4)",
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                    textTransform: "uppercase",
                  }}
                >
                  📱 MOBILE
                </div>
                {[
                  { key: "▲ GAS", action: "Accelerate" },
                  { key: "▼ BRAKE", action: "Brake" },
                  { key: "↺ FLIP", action: "Back Flip" },
                  { key: "↻ FLIP", action: "Fwd Flip" },
                ].map((ctrl) => (
                  <div
                    key={ctrl.key}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "6px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Geist Mono, monospace",
                        fontSize: 12,
                        fontWeight: 700,
                        color: "#00ffff",
                        textShadow: "0 0 6px #00ffff66",
                      }}
                    >
                      {ctrl.key}
                    </span>
                    <span
                      style={{
                        fontFamily: "Geist Mono, monospace",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.6)",
                      }}
                    >
                      {ctrl.action}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </SectionCard>

          {/* Tips section */}
          <SectionCard color="#ffff00" title="💡 PRO TIPS">
            <ul
              style={{
                margin: 0,
                padding: "0 0 0 18px",
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              {[
                "Chain backflips for combo multiplier boost",
                "Land smoothly to avoid crash",
                "Boost pickups give 3 seconds of extra speed",
                "Wheelies score points while balanced",
                "Higher levels have traffic obstacles — dodge them!",
                "Level 21+ has night mode & rain — stay focused",
              ].map((tip) => (
                <li
                  key={tip}
                  style={{
                    fontFamily: "Geist Mono, monospace",
                    fontSize: 12,
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.5,
                  }}
                >
                  {tip}
                </li>
              ))}
            </ul>
          </SectionCard>
        </div>
      </div>
    </div>
  );
}

function SectionCard({
  color,
  title,
  children,
}: {
  color: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        marginBottom: 20,
        background: "rgba(10,10,20,0.85)",
        border: `1.5px solid ${color}33`,
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          padding: "12px 18px",
          background: `${color}0d`,
          borderBottom: `1px solid ${color}22`,
        }}
      >
        <span
          style={{
            fontFamily: "Bricolage Grotesque, sans-serif",
            fontWeight: 800,
            fontSize: 14,
            color: color,
            textShadow: `0 0 8px ${color}66`,
            letterSpacing: "0.04em",
          }}
        >
          {title}
        </span>
      </div>
      <div style={{ padding: "14px 18px" }}>{children}</div>
    </div>
  );
}
