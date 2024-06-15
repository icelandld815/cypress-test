const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8002',
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'outputs',
      overwrite: true,
      html: true,
      json: true,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env: {
    //config whether the execution can be reapeatable
    repeatable: false
  },
  "screenshotsFolder": "outputs/screenshots"

});
