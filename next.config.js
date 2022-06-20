const basePathPrefix = 'https://raw.githubusercontent.com/juoyuanyang/test-nextjs-ts-workflow/deployment/out/';

module.exports = {
  reactStrictMode: true,
  distDir: 'dist',
  images: {
    loader: 'akamai',
    path: basePathPrefix,
  },
  // assetPrefix: './',
  assetPrefix: basePathPrefix,
};
