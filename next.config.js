/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'localhost', 'muzical.vercel.app', '127.0.0.1']
  }
}

module.exports = nextConfig
