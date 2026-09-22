export default function Scene({
  children,
  className = "",
}) {
  return (
    <main className={`scene ${className}`}>
      <div className="scene__content">
        {children}
      </div>
    </main>
  );
}