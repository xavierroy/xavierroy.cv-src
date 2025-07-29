module.exports = {
  layout: "work.njk",
  tags: "work",
  permalink: (data) => `work/${data.page.fileSlug}/index.html`
};