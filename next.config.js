/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['v1.tailwindcss.com'],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig 
