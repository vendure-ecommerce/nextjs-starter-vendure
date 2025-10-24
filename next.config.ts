import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    cacheComponents: true,
    turbopack: {
        root: process.cwd()
    },
    images: {
        remotePatterns: [{
            hostname: 'readonlydemo.vendure.io',
        }]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);