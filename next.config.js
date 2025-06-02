/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'upload.wikimedia.org',
      'encrypted-tbn0.gstatic.com',
      'cdn.worldvectorlogo.com',
      'dev-to-uploads.s3.amazonaws.com',
      'getlogovector.com',
      '2024.allthingsopen.org',
      'images.unsplash.com',
      'verpex.com',
      'logotyp.us',
      'private-user-images.githubusercontent.com',
      'i.sstatic.net',
      'images.contentstack.io',
      'i.pinimg.com',
      'hackersonlineclub.com',
      'media.licdn.com'
    ],
  },
}

module.exports = nextConfig
