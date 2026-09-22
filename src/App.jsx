import Experience from "./components/Experience";
import { experiences } from "./data/experiences";

function Landing() {
  const openVersion = (version) => {
    const url = new URL(window.location.href);
    url.searchParams.set("para", version);
    window.location.href = url.toString();
  };

  return (
    <main className="landing">
      <div className="landing__glow landing__glow--one" />
      <div className="landing__glow landing__glow--two" />

      <section className="landing__card">
        <p className="eyebrow">Proyecto listo 🌻</p>
        <h1>Flores amarillas</h1>
        <p className="landing__copy">
          Esta pantalla es solo para que tú pruebes las dos versiones. A cada
          amiga le mandas su enlace directo.
        </p>

        <div className="landing__actions">
          <button
            className="choice-card choice-card--funny"
            type="button"
            onClick={() => openVersion("1")}
          >
            <span className="choice-card__emoji">😈</span>
            <span>
              <strong>Versión 1</strong>
              <small>Broma, insultos y final bonito</small>
            </span>
          </button>

          <button
            className="choice-card choice-card--sweet"
            type="button"
            onClick={() => openVersion("2")}
          >
            <span className="choice-card__emoji">💛</span>
            <span>
              <strong>Versión 2</strong>
              <small>Más tranquila y sentimental</small>
            </span>
          </button>
        </div>

        <p className="landing__hint">
          Puedes volver aquí quitando <code>?para=1</code> o{" "}
          <code>?para=2</code> del enlace.
        </p>
      </section>
    </main>
  );
}

function App() {
  const version = new URLSearchParams(window.location.search).get("para");
  const experience = experiences[version];

  if (!experience) {
    return <Landing />;
  }

  return <Experience experience={experience} />;
}

export default App;
