/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {

        domains: ['drive.google.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
            },
        ],
    },
}

export default nextConfig;
