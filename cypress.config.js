const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  e2e: {
    baseUrl: 'https://ddstaging.byteproducts.com',
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
