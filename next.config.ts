/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'pplx-res.cloudinary.com'], // Add the hostname here
  },
}

module.exports = nextConfig
