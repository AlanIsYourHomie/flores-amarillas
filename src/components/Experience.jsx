import { useState } from "react";
import FlowerGarden from "./FlowerGarden";

const escapePositions = [
  { x: 0, y: 0 },
  { x: -110, y: -28 },
  { x: 105, y: 38 },
  { x: -72, y: 55 },
];

export default function Experience({ experience }) {
  const [step, setStep] = useState(0);
  const [escapeCount, setEscapeCount] = useState(0);

  const isFinal = step >= experience.scenes.length;
  const scene = experience.scenes[step];

  const next = () => {
    setStep((current) => current + 1);
    setEscapeCount(0);
  };

  const restart = () => {
    setStep(0);
    setEscapeCount(0);
  };

  const dodgeButton = () => {
    if (!scene?.troll || escapeCount >= escapePositions.length - 1) {
      return;
    }

    if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      setEscapeCount((count) => count + 1);
    }
  };

  if (isFinal) {
    return (
      <main className={`experience experience--${experience.tone} final-scene`}>
        <div className="ambient-glow ambient-glow--left" />
        <div className="ambient-glow ambient-glow--right" />

        <div className="final-copy scene-enter">
          <p className="eyebrow">{experience.final.eyebrow}</p>
          <h1>{experience.final.title}</h1>
          <p className="scene-text">{experience.final.text}</p>
          <p className="final-note">{experience.final.note}</p>

          <button className="ghost-button" type="button" onClick={restart}>
            Ver otra vez ↺
          </button>
        </div>

        <FlowerGarden />
      </main>
    );
  }

  const escapeStyle = scene.troll
    ? {
        "--escape-x": `${escapePositions[escapeCount].x}px`,
        "--escape-y": `${escapePositions[escapeCount].y}px`,
      }
    : undefined;

  return (
    <main className={`experience experience--${experience.tone}`}>
      <div className="ambient-glow ambient-glow--left" />
      <div className="ambient-glow ambient-glow--right" />

      <div className="progress" aria-label="Progreso">
        {experience.scenes.map((item, index) => (
          <span
            key={item.title}
            className={index <= step ? "progress__dot is-active" : "progress__dot"}
          />
        ))}
        <span className="progress__dot" />
      </div>

      <section className="scene-card scene-enter" key={step}>
        <p className="eyebrow">{scene.eyebrow}</p>
        <h1>{scene.title}</h1>
        <p className="scene-text">{scene.text}</p>

        <div className={scene.troll ? "button-zone button-zone--troll" : "button-zone"}>
          <button
            className={scene.troll ? "primary-button primary-button--escape" : "primary-button"}
            style={escapeStyle}
            type="button"
            onPointerEnter={dodgeButton}
            onClick={next}
          >
            {scene.button}
          </button>
        </div>

        {scene.troll && escapeCount < escapePositions.length - 1 && (
          <p className="troll-hint" aria-live="polite">
            {escapeCount === 0
              ? "Dale, haz clic 😇"
              : escapeCount === 1
                ? "Uy, casi."
                : "Una más y te dejo, lo prometo."}
          </p>
        )}
      </section>

      <p className="corner-label">{experience.label}</p>
    </main>
  );
}
