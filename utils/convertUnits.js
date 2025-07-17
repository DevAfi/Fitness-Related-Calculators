export function kgToLbs(kg) {
  return (kg * 2.20462).toFixed(1); // keep 1 decimal if you want
}

export function lbsToKg(lbs) {
  return (lbs / 2.20462).toFixed(1);
}

export function cmToInches(cm) {
  return (cm / 2.54).toFixed(1);
}

export function cmToFeet(cm) {
  return (cm / 2.54 / 12).toFixed(1);
}

export function inchesToCm(inches) {
  return (inches * 2.54).toFixed(1);
}
