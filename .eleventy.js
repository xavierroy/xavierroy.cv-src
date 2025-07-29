module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles");
  eleventyConfig.addPassthroughCopy("src/assets");

eleventyConfig.addCollection("work", function (collectionApi) {
  return collectionApi.getFilteredByGlob("src/work/*.md").sort((a, b) => {
    return (b.data.sort || 0) - (a.data.sort || 0);
  });
});

 return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",  // This line is crucial
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};