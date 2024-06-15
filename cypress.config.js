const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8002',
    env:{
      adminUrl: 'http://localhost:8001',
      clientUrl: 'http://localhost:8000',
      repeatable: true
    },
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
    repeatable: true
  },
  "screenshotsFolder": "outputs/screenshots"

});
