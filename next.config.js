/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'lojapalmeiras.vteximg.com.br'
            }
        ]
    }
}

module.exports = nextConfig
