/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        dirs: ['pages', 'components', 'utils']
    },
    images: {
        domains: ['images.unsplash.com']
    }
}

module.exports = nextConfig
