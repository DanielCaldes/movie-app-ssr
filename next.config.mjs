const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/nombre-del-repo' : '',
  assetPrefix: isProd ? '/nombre-del-repo/' : '',
};


export default nextConfig;
