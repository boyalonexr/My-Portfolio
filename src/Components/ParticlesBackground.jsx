import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadFull(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,
        particles: {
          number: { value: 40, density: { enable: true, value_area: 800 } },
          color: { value: ["#8b5cf6", "#3b82f6"] },
          shape: { type: "circle" },
          opacity: { value: 0.12 },
          size: { value: { min: 1, max: 3 } },
          links: { enable: true, distance: 160, color: "#6b7280", opacity: 0.08 },
          move: { enable: true, speed: 0.7, outMode: "out" }
        },
        detectRetina: true,
        background: { color: "transparent" }
      }}
    />
  );
}
