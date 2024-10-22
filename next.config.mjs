const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: isProd ? 'docs' : '.next',
  basePath: isProd ? '/react' : '',
  assetPrefix: isProd ? '/react/' : '',
};

export default nextConfig;
