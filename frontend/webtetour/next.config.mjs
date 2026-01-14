/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  
  // Proxy API requests to bypass CORS in development
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://tetour.onrender.com/api/:path*',
      },
    ];
  },
}

export default nextConfig
