//cypress.config.js
//we will be confinguring cypress
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
})