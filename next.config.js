/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {

    // ignoreBuildErrors: true,
  }
,
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig