/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['lecture-1.vercel.app', 'search.pstatic.net'],
  },
  i18n: {
    /** https://nextjs.org/docs/advanced-features/i18n-routing#getting-started */
    locales: ['ko'], //lang=ko 설정
    defaultLocale: 'ko',
  },
};

module.exports = nextConfig;
