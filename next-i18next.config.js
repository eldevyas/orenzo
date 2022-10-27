// Filename: next-i18next.config.js
const path = require('path')

module.exports = {
    i18n: {
        locales: ["ar", "en", "fr"],
        defaultLocale: "en",
    },
    localePath: path.resolve('./public/locales'),
    localeStructure: '{{lng}}/{{ns}}'
};