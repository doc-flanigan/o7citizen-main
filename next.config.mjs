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
    ]
  },
}

export default nextConfig
