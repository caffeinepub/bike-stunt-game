import { useEffect, useRef } from "react";

interface MenuScreenProps {
  currentLevel: number;
  isPremium: boolean;
  onStartGame: () => void;
  onGarage: () => void;
  onSettings: () => void;
  onPremium: () => void;
  onExit: () => void;
}

export default function MenuScreen({
  currentLevel: _currentLevel,
  isPremium,
  onStartGame,
  onGarage,
  onSettings,
  onPremium,
  onExit,
}: MenuScreenProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const starsRef = useRef<
    { x: number; y: number; size: number; blink: number }[]
  >([]);
  const gridOffsetRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Generate stars
    starsRef.current = Array.from({ length: 150 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 1.8 + 0.3,
      blink: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const draw = (timestamp: number) => {
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const W = canvas.width;
      const H = canvas.height;
      t = timestamp / 1000;
      gridOffsetRef.current = (gridOffsetRef.current + 0.4) % 60;

      // Background
      ctx.fillStyle = "#0a0a0f";
      ctx.fillRect(0, 0, W, H);

      // Grid lines (perspective scrolling)
      const gridOff = gridOffsetRef.current;
      ctx.strokeStyle = "rgba(0, 255, 255, 0.07)";
      ctx.lineWidth = 1;
      // Vertical lines
      for (let x = 0; x < W; x += 60) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, H);
        ctx.stroke();
      }
      // Horizontal lines
      for (let y = -gridOff; y < H; y += 60) {
        ctx.beginPath();
        ctx.moveTo(0, y + gridOff);
        ctx.lineTo(W, y + gridOff);
        ctx.stroke();
      }

      // Stars
      for (const star of starsRef.current) {
        const alpha = 0.4 + 0.4 * Math.sin(star.blink + t * 2);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      animRef.current = requestAnimationFrame(draw);
    };

    animRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animRef.current);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#0a0a0f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Animated canvas background */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      />

      {/* Premium badge - top right */}
      {isPremium && (
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            padding: "6px 14px",
            background: "rgba(0,0,0,0.7)",
            border: "1.5px solid #ffd700",
            borderRadius: 8,
            boxShadow: "0 0 12px #ffd70055",
            fontFamily: "Geist Mono, monospace",
            fontSize: 12,
            fontWeight: 700,
            color: "#ffd700",
            zIndex: 10,
          }}
        >
          ⭐ PREMIUM
        </div>
      )}

      {/* Main menu panel */}
      <div
        style={{
          position: "relative",
          zIndex: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0,
          width: "min(420px, 92vw)",
        }}
      >
        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: 36 }}>
          <div
            style={{
              fontFamily: "Geist Mono, monospace",
              fontSize: 13,
              letterSpacing: "0.35em",
              color: "rgba(0,255,255,0.6)",
              marginBottom: 6,
              textTransform: "uppercase",
            }}
          >
            — EXTREME RACING —
          </div>
          <h1
            style={{
              fontFamily: "Bricolage Grotesque, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(52px, 14vw, 88px)",
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "#00ffff",
              textShadow:
                "0 0 20px #00ffff, 0 0 40px #00ffff88, 0 0 80px #00ffff44",
            }}
          >
            BIKE
          </h1>
          <h1
            style={{
              fontFamily: "Bricolage Grotesque, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(52px, 14vw, 88px)",
              margin: 0,
              lineHeight: 0.9,
              letterSpacing: "-0.04em",
              color: "#ff00ff",
              textShadow:
                "0 0 20px #ff00ff, 0 0 40px #ff00ff88, 0 0 80px #ff00ff44",
            }}
          >
            STUNT
          </h1>
          <div
            style={{
              marginTop: 10,
              width: "100%",
              height: 2,
              background:
                "linear-gradient(90deg, transparent, #00ffff, #ff00ff, transparent)",
              boxShadow: "0 0 10px #00ffff66",
            }}
          />
        </div>

        {/* Menu buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
          }}
        >
          <MenuButton
            icon="▶"
            label="START GAME"
            color="#00ffff"
            onClick={onStartGame}
            dataOcid="menu.start_button"
            primary
          />
          <MenuButton
            icon="🚗"
            label="GARAGE"
            color="#39ff14"
            onClick={onGarage}
            dataOcid="menu.garage_button"
          />
          <MenuButton
            icon="⚙"
            label="SETTINGS"
            color="#ff00ff"
            onClick={onSettings}
            dataOcid="menu.settings_button"
          />
          <MenuButton
            icon="⭐"
            label={isPremium ? "PREMIUM ✓" : "PREMIUM  ₹29"}
            color="#ffd700"
            onClick={onPremium}
            dataOcid="menu.premium_button"
          />
          <MenuButton
            icon="❌"
            label="EXIT"
            color="#ff4444"
            onClick={onExit}
            dataOcid="menu.exit_button"
          />
        </div>

        {/* Footer */}
        <p
          style={{
            marginTop: 28,
            fontSize: 11,
            color: "rgba(255,255,255,0.2)",
            fontFamily: "Geist Mono, monospace",
            textAlign: "center",
          }}
        >
          © {new Date().getFullYear()}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "rgba(0,255,255,0.35)", textDecoration: "none" }}
          >
            Built with ♥ using caffeine.ai
          </a>
        </p>
      </div>
    </div>
  );
}

interface MenuButtonProps {
  icon: string;
  label: string;
  color: string;
  onClick: () => void;
  dataOcid: string;
  primary?: boolean;
}

function MenuButton({
  icon,
  label,
  color,
  onClick,
  dataOcid,
  primary,
}: MenuButtonProps) {
  return (
    <button
      type="button"
      data-ocid={dataOcid}
      onClick={onClick}
      style={{
        width: "100%",
        padding: primary ? "18px 24px" : "14px 24px",
        background: primary
          ? `linear-gradient(135deg, ${color}18, ${color}08)`
          : "rgba(0,0,0,0.55)",
        border: `${primary ? "2px" : "1.5px"} solid ${color}${primary ? "cc" : "66"}`,
        borderRadius: 10,
        color: color,
        fontSize: primary ? 20 : 16,
        fontWeight: 900,
        fontFamily: "Bricolage Grotesque, sans-serif",
        letterSpacing: "0.06em",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        gap: 14,
        textAlign: "left",
        transition: "all 0.18s",
        boxShadow: primary
          ? `0 0 24px ${color}44, inset 0 0 12px ${color}0a`
          : `0 0 10px ${color}22`,
        backdropFilter: "blur(6px)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.background = `${color}1a`;
        el.style.boxShadow = `0 0 32px ${color}88`;
        el.style.borderColor = color;
        el.style.transform = "translateX(4px)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.background = primary
          ? `linear-gradient(135deg, ${color}18, ${color}08)`
          : "rgba(0,0,0,0.55)";
        el.style.boxShadow = primary
          ? `0 0 24px ${color}44, inset 0 0 12px ${color}0a`
          : `0 0 10px ${color}22`;
        el.style.borderColor = `${color}${primary ? "cc" : "66"}`;
        el.style.transform = "translateX(0)";
      }}
    >
      <span
        style={{
          fontSize: primary ? 22 : 18,
          minWidth: 24,
          textAlign: "center",
        }}
      >
        {icon}
      </span>
      <span>{label}</span>
    </button>
  );
}
