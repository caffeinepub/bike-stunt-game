import { useState } from "react";
import { toast } from "sonner";
import BikeGame from "./components/BikeGame";
import GarageScreen from "./components/GarageScreen";
import MenuScreen from "./components/MenuScreen";
import PremiumScreen from "./components/PremiumScreen";
import SettingsScreen from "./components/SettingsScreen";
import { Toaster } from "./components/ui/sonner";
import { useSoundEngine } from "./hooks/useSoundEngine";

type Screen = "menu" | "garage" | "settings" | "premium" | "playing";

export default function App() {
  const [screen, setScreen] = useState<Screen>("menu");
  const [currentLevel, setCurrentLevel] = useState(1);
  const [isPremium, setIsPremium] = useState(false);
  const [selectedVehicleId, setSelectedVehicleId] = useState("bike_street");

  // Sound engine managed here so Settings can access muted state
  const { muted, toggleMute } = useSoundEngine();

  const handleLevelUp = () => {
    setCurrentLevel((prev) => prev + 1);
  };

  const handleActivatePremium = () => {
    setIsPremium(true);
    toast.success("⭐ Premium activated! All vehicles unlocked.", {
      duration: 4000,
    });
    setScreen("menu");
  };

  const handleExit = () => {
    toast("❌ Exit is not available in browser mode.", {
      description: "Close the tab to exit, or enjoy playing!",
      duration: 3000,
    });
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        background: "#0a0a0f",
      }}
    >
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "rgba(10,10,20,0.95)",
            border: "1px solid rgba(0,255,255,0.3)",
            color: "#e0f8ff",
            fontFamily: "Geist Mono, monospace",
            fontSize: 13,
          },
        }}
      />

      {screen === "menu" && (
        <MenuScreen
          currentLevel={currentLevel}
          isPremium={isPremium}
          onStartGame={() => setScreen("playing")}
          onGarage={() => setScreen("garage")}
          onSettings={() => setScreen("settings")}
          onPremium={() => setScreen("premium")}
          onExit={handleExit}
        />
      )}

      {screen === "garage" && (
        <GarageScreen
          isPremium={isPremium}
          selectedVehicleId={selectedVehicleId}
          onSelectVehicle={(id) => setSelectedVehicleId(id)}
          onBack={() => setScreen("menu")}
        />
      )}

      {screen === "settings" && (
        <SettingsScreen
          muted={muted}
          onToggleMute={toggleMute}
          onBack={() => setScreen("menu")}
        />
      )}

      {screen === "premium" && (
        <PremiumScreen
          isPremium={isPremium}
          onActivate={handleActivatePremium}
          onBack={() => setScreen("menu")}
        />
      )}

      {screen === "playing" && (
        <BikeGame
          level={currentLevel}
          onLevelUp={handleLevelUp}
          onBackToMenu={() => setScreen("menu")}
          selectedVehicleId={selectedVehicleId}
        />
      )}
    </div>
  );
}
