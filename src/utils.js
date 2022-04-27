export const titleize = (str) =>
  str
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase())
    .trim();

export const capitalize = ([firstLetter, ...restOfWord]) =>
  firstLetter.toUpperCase() + restOfWord.join("");

