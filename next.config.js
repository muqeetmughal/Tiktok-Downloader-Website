// /** @type {import('next').NextConfig} */


const runtimeCaching = require("next-pwa/cache");

const prod = process.env.NODE_ENV === 'production'

const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: prod ? false : true
});

const nextConfig = withPWA({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    localeDetection: false
  }
});
module.exports = nextConfig;