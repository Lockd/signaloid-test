export const addSecondsWithinRange = (
  initialDateInSeconds: number,
  min: number,
  max: number
) => {
  return initialDateInSeconds + (Math.random() * (max - min) + min) * 1000;
};
