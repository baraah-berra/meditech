/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
    // Add this to ensure all assets are copied to the output directory
    distDir: 'out',
    assetPrefix: '',
    // Optional: if you're still having issues, try adding:
    experimental: {
      images: {
        unoptimized: true,
      },
    },
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  }
}

module.exports = nextConfig