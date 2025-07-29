module.exports = function (eleventyConfig) {
  // Collections
eleventyConfig.addCollection("work", (collection) =>
  collection.getFilteredByTag("work").sort((a, b) =>
    (a.data.sort || 0) - (b.data.sort || 0)
  )
);
  // Passthrough for assets like logos, images, and fonts
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
     templateFormats: ["md", "njk", "html"]
  };
};
