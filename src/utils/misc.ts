export const addSecondsWithinRange = (
  initialDateInSeconds: number,
  min: number,
  max: number
) => {
  return initialDateInSeconds + (Math.random() * (max - min) + min) * 1000;
};

export const capitalizeFirstLetter = (s: string) => {
  if (!s.length) return "";

  return s[0].toUpperCase() + s.substring(1);
};
