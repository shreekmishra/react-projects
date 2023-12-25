/*eslint no-extend-native: ["error", { "exceptions": ["String", "localStorage"] }]*/
String.prototype.capitalize = function (isCapitalizeWords) {
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

Storage.prototype.setObject = function (key, value) {
  this.setItem(key, JSON.stringify(value));
};

Storage.prototype.getObject = function (key) {
  var value = this.getItem(key);
  return value && JSON.parse(value);
};

Storage.prototype.getItemOrDefault = function(key, defaultValue) {
  return this.getItem(key) || defaultValue;
}

Storage.prototype.getOrSetItem = function(key, defaultValue) {
  var value = this.getItem(key);
  if(!!!value) {
    this.setItem(key, defaultValue)
  }
  return value || defaultValue;
}