// eslint-disable-next-line
const withPWA = require('next-pwa')

// eslint-disable-next-line
module.exports = withPWA({
  pwa: {
    dest: "public",
  },
  images: {
    domains: ["images.microcms-assets.io"],
  },
});
