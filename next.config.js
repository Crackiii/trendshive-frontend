/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['v1.tailwindcss.com'],
    formats: ['image/avif', 'image/webp'],
  },

  redirects: async () => {
    return [
      {
        source: '/categories',
        destination: '/categories/business',
        permanent: true,
      },
      {
        source: '/story/:category',
        destination: '/categories/:category',
        permanent: true,
      },
      {
        source: '/story/:category/:type',
        destination: '/categories/:category',
        permanent: true,
      },
      {
        source: '/story/:category/:type/:id/(.*)',
        destination: '/story/:category/:type/:id',
        permanent: true,
      }
    ]
  }
}

module.exports = nextConfig

