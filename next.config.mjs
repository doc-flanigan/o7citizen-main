/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'o7citizens.com' }],
        destination: 'https://o7citizen.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.o7citizens.com' }],
        destination: 'https://o7citizen.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'o7citizen.gg' }],
        destination: 'https://o7citizen.com/:path*',
        permanent: true,
      },
      // Retired routes — keep these so old email links and search-engine
      // results don't 404 while we lean the site toward Day One Citizen.
      // Both 308 to the homepage; visitors land on a useful page.
      { source: '/weekly-update', destination: '/', permanent: true },
      { source: '/weekly-update/:path*', destination: '/', permanent: true },
      // /about merged into /o7-meaning (which now carries the About content
      // as a section near the bottom). 308 preserves backlink equity.
      { source: '/about', destination: '/o7-meaning', permanent: true },
    ]
  },
}

export default nextConfig
