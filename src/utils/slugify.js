module.exports.slugify = (text, separator = "-") => {
  // Remove special characters, replace spaces with the separator, and convert to lowercase
  text = text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, separator) // Replace spaces with the separator
    .replace(/[^\w\-]+/g, "") // Remove special characters
    .replace(/\-\-+/g, separator) // Replace consecutive separators with a single one
    .replace(/^-+/, "") // Remove leading separators
    .replace(/-+$/, ""); // Remove trailing separators

  return text;
};
