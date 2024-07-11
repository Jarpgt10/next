/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {

        domains: ['drive.google.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.pixabay.com',
            },
        ],
    },
}

export default nextConfig;
