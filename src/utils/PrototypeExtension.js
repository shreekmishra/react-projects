/*eslint no-extend-native: ["error", { "exceptions": ["String", "localStorage"] }]*/
String.prototype.capitalize = function (isCapitalizeWords = true) {
  let str = this;
  let sentences = str.split(".");

  let capitalizedString = sentences
    .map((sentence) => {
      let words = sentence.split(" ");
      if (isCapitalizeWords) {
        return words
          .map((word) => {
            return word.trim().charAt(0).toUpperCase() + word.trim().slice(1);
          })
          .join(" ");
      } else {
        return (
          sentence.trim().charAt(0).toUpperCase() + sentence.trim().slice(1)
        );
      }
    })
    .join(". ")
    .replace("  ", " ")
    .trim();

  return str.endsWith(".") && !capitalizedString.endsWith(".")
    ? capitalizedString.concat(".")
    : capitalizedString;
};