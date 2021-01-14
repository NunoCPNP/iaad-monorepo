const data = require('../static-data/data')

const Query = {
  navbar: () => data.navbar,
  cta: () => data.cta,
  about: () => data.about,
  technologies: () => data.technologies,
  projects: () => data.projects
}

module.exports = { Query }