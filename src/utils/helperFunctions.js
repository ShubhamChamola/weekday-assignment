export function toCapitalize(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}
