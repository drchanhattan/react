const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'docs',
  basePath: isProd ? '/react' : '',
  assetPrefix: isProd ? '/react/' : '',
};

export default nextConfig;
