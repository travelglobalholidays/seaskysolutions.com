"use client";

export const Slider = ({
  className = "",
  max = 100,
  min = 0,
  onValueChange,
  step = 1,
  value = [min, max],
}) => {
  const [lower = min, upper = max] = value;

  const updateLower = (nextValue) => {
    onValueChange?.([Math.min(Number(nextValue), upper), upper]);
  };

  const updateUpper = (nextValue) => {
    onValueChange?.([lower, Math.max(Number(nextValue), lower)]);
  };

  return (
    <div className={`grid gap-2 ${className}`}>
      <input
        aria-label="Minimum value"
        max={max}
        min={min}
        onChange={(event) => updateLower(event.target.value)}
        step={step}
        type="range"
        value={lower}
      />
      <input
        aria-label="Maximum value"
        max={max}
        min={min}
        onChange={(event) => updateUpper(event.target.value)}
        step={step}
        type="range"
        value={upper}
      />
    </div>
  );
};
