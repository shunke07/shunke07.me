// eslint-disable-next-line
const withPWA = require("next-pwa");

// eslint-disable-next-line
module.exports = withPWA({
  pwa: {
    // eslint-disable-next-line
    disable: process.env.NODE_ENV === "development",
    dest: "public",
  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
});
