// Import the markdown-it library, which Eleventy uses internally for Markdown processing.
// This line should be at the very top of your .eleventy.js file.
const markdownIt = require("markdown-it"); 

module.exports = function (eleventyConfig) {
  // Collections
  eleventyConfig.addCollection("work", (collection) => {
    return collection.getAll().filter(item => item.data.type === 'work').sort((a, b) =>
      (a.data.sort || 0) - (b.data.sort || 0)
    );
  });

  // Passthrough for assets like logos, images, and fonts
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/styles": "styles" });

  // Initialize a new markdown-it instance.
  // This instance will be used by our custom Nunjucks filter.
  const md = new markdownIt();

  // Add a custom Nunjucks filter named 'markdown'
  // This filter will take content and render it as Markdown.
  eleventyConfig.addNunjucksFilter("markdown", (content) => {
    // Ensure content is a string before rendering, as md.render expects a string.
    if (typeof content === 'string') {
      return md.render(content);
    }
    return content; // Return original content if not a string
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    },
    // These template engines configurations are correct for their respective roles.
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  };
};