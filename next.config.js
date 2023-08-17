/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },

  /*CONFIG PREPARATION FOR EXTERNAL LINKS
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nazev adresy',
      },
    ],
  },*/
};

module.exports = nextConfig;
