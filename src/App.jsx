import Scene from "./components/Scene";
import SceneButton from "./components/SceneButton";

function App() {
  return (
    <Scene className="test-scene">
      <p className="eyebrow">
        21 de septiembre 🌻
      </p>

      <h1>
        Tengo algo para ti
      </h1>

      <p className="description">
        Pero primero tienes que presionar este botón.
      </p>

      <SceneButton
        onClick={() => console.log("funciona")}
      >
        A ver 👀
      </SceneButton>
    </Scene>
  );
}

export default App;