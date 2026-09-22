export default function SceneButton({
  children,
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      className={`scene-button ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}