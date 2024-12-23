export const getRandomColor = () => {
  const baseColors = [
    { r: 214, g: 40, b: 57 }, // --color-secondary
    { r: 0, g: 61, b: 41 }, // --color-tertiary
    { r: 236, g: 167, b: 44 }, // --color-quaternary
    { r: 155, g: 26, b: 46 }, // --color-secondary-dark
    { r: 0, g: 40, b: 32 }, // --color-tertiary-dark
    { r: 163, g: 98, b: 44 }, // --color-quaternary-dark
  ];

  // Add a wider range of random adjustments to each base color
  const randomAdjustment = (baseValue: number, range: number = 30) => {
    const randomOffset = Math.floor(Math.random() * range) - range / 2; // More variation
    return Math.min(Math.max(baseValue + randomOffset, 50), 255); // Ensure value stays within RGB bounds and avoids too dark colors
  };

  const selectedColor =
    baseColors[Math.floor(Math.random() * baseColors.length)];

  // Adjust the selected color with larger variation
  const r = randomAdjustment(selectedColor.r, 50); // Allow more variation (up to +/- 50)
  const g = randomAdjustment(selectedColor.g, 50);
  const b = randomAdjustment(selectedColor.b, 50);

  // Optional: Lighten or darken the color slightly based on random chance
  const shouldDarken = Math.random() > 0.5;
  if (shouldDarken) {
    // Ensure darkening doesn't result in too dark colors by limiting the minimum value
    return `rgba(${Math.max(r - 20, 50)}, ${Math.max(g - 20, 50)}, ${Math.max(
      b - 20,
      50
    )}, 0.8)`;
  } else {
    // Lighten the color, ensuring it doesn't go too bright
    return `rgba(${Math.min(r + 20, 255)}, ${Math.min(g + 20, 255)}, ${Math.min(
      b + 20,
      255
    )}, 0.8)`;
  }
};
