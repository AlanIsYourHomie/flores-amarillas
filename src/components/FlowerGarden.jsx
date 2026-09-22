const flowers = [
  { left: "4%", height: 210, scale: 0.76, delay: "0.55s", lean: "-5deg" },
  { left: "14%", height: 285, scale: 0.92, delay: "0.2s", lean: "4deg" },
  { left: "26%", height: 235, scale: 0.78, delay: "0.75s", lean: "-3deg" },
  { left: "38%", height: 330, scale: 1.02, delay: "0s", lean: "2deg" },
  { left: "50%", height: 265, scale: 0.9, delay: "0.4s", lean: "-2deg" },
  { left: "62%", height: 315, scale: 1, delay: "0.12s", lean: "4deg" },
  { left: "74%", height: 245, scale: 0.82, delay: "0.62s", lean: "-4deg" },
  { left: "85%", height: 295, scale: 0.94, delay: "0.3s", lean: "3deg" },
  { left: "95%", height: 220, scale: 0.74, delay: "0.82s", lean: "-5deg" },
];

const fallingPetals = [
  { left: "8%", delay: "1.1s", duration: "6.8s" },
  { left: "18%", delay: "2.6s", duration: "7.4s" },
  { left: "31%", delay: "0.5s", duration: "6.1s" },
  { left: "43%", delay: "3.3s", duration: "7s" },
  { left: "55%", delay: "1.8s", duration: "6.6s" },
  { left: "68%", delay: "4s", duration: "7.8s" },
  { left: "79%", delay: "2.1s", duration: "6.4s" },
  { left: "91%", delay: "0.9s", duration: "7.2s" },
];

function Flower({ flower, index }) {
  return (
    <div
      className={`flower flower--${index + 1}`}
      style={{
        "--flower-left": flower.left,
        "--stem-height": `${flower.height}px`,
        "--flower-scale": flower.scale,
        "--grow-delay": flower.delay,
        "--lean": flower.lean,
      }}
    >
      <div className="flower__stem">
        <span className="flower__leaf flower__leaf--left" />
        <span className="flower__leaf flower__leaf--right" />
      </div>

      <div className="flower__head">
        <div className="flower__petals">
          {Array.from({ length: 12 }, (_, petal) => (
            <span
              className="flower__petal"
              key={petal}
              style={{ "--petal-angle": `${petal * 30}deg` }}
            />
          ))}
        </div>
        <div className="flower__center" />
      </div>
    </div>
  );
}

export default function FlowerGarden() {
  return (
    <>
      <div className="petal-rain" aria-hidden="true">
        {fallingPetals.map((petal, index) => (
          <span
            key={index}
            style={{
              "--petal-left": petal.left,
              "--petal-delay": petal.delay,
              "--petal-duration": petal.duration,
            }}
          />
        ))}
      </div>

      <div className="flower-garden" aria-hidden="true">
        <div className="garden-haze" />
        {flowers.map((flower, index) => (
          <Flower key={flower.left} flower={flower} index={index} />
        ))}
      </div>
    </>
  );
}
