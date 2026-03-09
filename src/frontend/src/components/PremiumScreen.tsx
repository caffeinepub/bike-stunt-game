interface PremiumScreenProps {
  isPremium: boolean;
  onActivate: () => void;
  onBack: () => void;
}

export default function PremiumScreen({
  isPremium,
  onBack,
}: PremiumScreenProps) {
  const benefits = [
    {
      icon: "🚗",
      title: "All Cars Unlock",
      desc: "3 premium cars including special supercars",
    },
    {
      icon: "🚚",
      title: "All Trucks Unlock",
      desc: "3 heavy trucks with massive boost stats",
    },
    {
      icon: "🏎",
      title: "Special SuperNova X",
      desc: "Speed 10, Handling 9, Boost 10 — max stats",
    },
    {
      icon: "🗺",
      title: "Extra City Map",
      desc: "City + Village + Highway — bigger world",
    },
    {
      icon: "🚫",
      title: "No Ads",
      desc: "Clean, uninterrupted gameplay forever",
    },
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
      {/* Animated gold shimmer bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,215,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80vmax",
          height: "80vmax",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,215,0,0.04) 0%, transparent 70%)",
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
          borderBottom: "1px solid rgba(255,215,0,0.2)",
          background: "rgba(0,0,0,0.5)",
          backdropFilter: "blur(8px)",
          zIndex: 5,
          position: "relative",
        }}
      >
        <button
          type="button"
          data-ocid="premium.back_button"
          onClick={onBack}
          style={{
            padding: "8px 18px",
            background: "rgba(0,0,0,0.6)",
            border: "1.5px solid rgba(255,215,0,0.4)",
            borderRadius: 8,
            color: "#ffd700",
            fontSize: 14,
            fontWeight: 700,
            fontFamily: "Geist Mono, monospace",
            cursor: "pointer",
            transition: "all 0.18s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "rgba(255,215,0,0.12)";
            e.currentTarget.style.borderColor = "#ffd700";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "rgba(0,0,0,0.6)";
            e.currentTarget.style.borderColor = "rgba(255,215,0,0.4)";
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
            color: "#ffd700",
            textShadow: "0 0 15px #ffd70088",
            letterSpacing: "-0.02em",
          }}
        >
          ⭐ PREMIUM
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
          gap: 20,
        }}
      >
        <div style={{ width: "100%", maxWidth: 600 }}>
          {/* Price banner */}
          {isPremium ? (
            <div
              style={{
                padding: "16px 20px",
                background: "rgba(57,255,20,0.08)",
                border: "2px solid rgba(57,255,20,0.4)",
                borderRadius: 12,
                textAlign: "center",
                marginBottom: 20,
                boxShadow: "0 0 20px rgba(57,255,20,0.15)",
              }}
            >
              <div
                style={{
                  fontFamily: "Bricolage Grotesque, sans-serif",
                  fontWeight: 900,
                  fontSize: 20,
                  color: "#39ff14",
                  textShadow: "0 0 10px #39ff1488",
                }}
              >
                ✅ PREMIUM ACTIVE
              </div>
              <div
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 12,
                  color: "rgba(57,255,20,0.7)",
                  marginTop: 4,
                }}
              >
                All features unlocked. Enjoy the game!
              </div>
            </div>
          ) : (
            <div
              style={{
                padding: "20px",
                background:
                  "linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,100,0,0.06))",
                border: "2px solid rgba(255,215,0,0.5)",
                borderRadius: 12,
                textAlign: "center",
                marginBottom: 20,
                boxShadow: "0 0 30px rgba(255,215,0,0.2)",
              }}
            >
              <div
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 12,
                  color: "rgba(255,215,0,0.7)",
                  letterSpacing: "0.1em",
                  marginBottom: 4,
                }}
              >
                ONE-TIME PAYMENT
              </div>
              <div
                style={{
                  fontFamily: "Bricolage Grotesque, sans-serif",
                  fontWeight: 900,
                  fontSize: 52,
                  color: "#ffd700",
                  textShadow: "0 0 20px #ffd70088, 0 0 40px #ffd70044",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                ₹29
              </div>
              <div
                style={{
                  fontFamily: "Geist Mono, monospace",
                  fontSize: 11,
                  color: "rgba(255,255,255,0.5)",
                  marginTop: 4,
                }}
              >
                Indian Rupees — Lifetime access
              </div>
            </div>
          )}

          {/* Benefits list */}
          <div
            style={{
              background: "rgba(10,10,20,0.85)",
              border: "1.5px solid rgba(255,215,0,0.2)",
              borderRadius: 12,
              overflow: "hidden",
              marginBottom: 20,
            }}
          >
            <div
              style={{
                padding: "12px 18px",
                background: "rgba(255,215,0,0.06)",
                borderBottom: "1px solid rgba(255,215,0,0.15)",
              }}
            >
              <span
                style={{
                  fontFamily: "Bricolage Grotesque, sans-serif",
                  fontWeight: 800,
                  fontSize: 13,
                  color: "#ffd700",
                  letterSpacing: "0.06em",
                }}
              >
                WHAT YOU GET
              </span>
            </div>
            <div style={{ padding: "10px 18px" }}>
              {benefits.map((b, i) => (
                <div
                  key={b.title}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 14,
                    padding: "12px 0",
                    borderBottom:
                      i < benefits.length - 1
                        ? "1px solid rgba(255,215,0,0.08)"
                        : "none",
                  }}
                >
                  <span style={{ fontSize: 24, flexShrink: 0 }}>{b.icon}</span>
                  <div>
                    <div
                      style={{
                        fontFamily: "Bricolage Grotesque, sans-serif",
                        fontWeight: 700,
                        fontSize: 15,
                        color: "#ffd700",
                        marginBottom: 2,
                      }}
                    >
                      {b.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "Geist Mono, monospace",
                        fontSize: 11,
                        color: "rgba(255,255,255,0.5)",
                        lineHeight: 1.4,
                      }}
                    >
                      {b.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Payment QR section */}
          {!isPremium && (
            <div
              style={{
                background: "rgba(10,10,20,0.85)",
                border: "1.5px solid rgba(255,215,0,0.25)",
                borderRadius: 12,
                overflow: "hidden",
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  padding: "12px 18px",
                  background: "rgba(255,215,0,0.06)",
                  borderBottom: "1px solid rgba(255,215,0,0.15)",
                }}
              >
                <span
                  style={{
                    fontFamily: "Bricolage Grotesque, sans-serif",
                    fontWeight: 800,
                    fontSize: 13,
                    color: "#ffd700",
                    letterSpacing: "0.06em",
                  }}
                >
                  💳 PAY VIA UPI / PHONEPE
                </span>
              </div>
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 14,
                }}
              >
                <div
                  style={{
                    padding: 8,
                    background: "#ffffff",
                    borderRadius: 10,
                    boxShadow: "0 0 24px rgba(255,215,0,0.3)",
                  }}
                >
                  <img
                    src="/assets/uploads/WhatsApp-Image-2026-03-07-at-9.38.21-PM-1--1.jpeg"
                    alt="PhonePe UPI QR Code"
                    style={{
                      width: "min(220px, 60vw)",
                      height: "min(220px, 60vw)",
                      display: "block",
                      borderRadius: 6,
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "Bricolage Grotesque, sans-serif",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#ffd700",
                      marginBottom: 4,
                    }}
                  >
                    📲 Scan to Pay via PhonePe / UPI
                  </div>
                  <div
                    style={{
                      fontFamily: "Geist Mono, monospace",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.5,
                    }}
                  >
                    Pay ₹29 or more to get lifetime premium access.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
