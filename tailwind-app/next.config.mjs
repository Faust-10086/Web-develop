/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "../docs",
  // 在这里添加 basePath 配置
  basePath: "/Web-develop",
  // 如果您有 images 配置，确保路径也考虑到 basePath
  // 例如，如果您的图片在 public 目录下，并且在代码中通过 /images/my-image.png 引用
  // Next.js 会自动处理 basePath。但如果您有特殊的 loader 配置，可能需要调整。
  // 通常情况下，对于 /_next/image 加载的图片，basePath 会自动生效。
  // 对于直接在 public 目录并通过 <img src="/my-image.png"> 引用的图片，
  // Next.js 也会在导出时尝试正确处理，但 basePath 是关键。

  // 如果你在项目中通过 next/image 使用了外部图片 (例如 Unsplash),
  // 并且遇到了图片加载问题, 你可能需要配置 'images.remotePatterns'
  // 或者, 对于静态导出, 设置 'images.unoptimized = true'.
  // 示例:
  // images: {
  //   unoptimized: true, // 如果选择不优化所有通过 next/image 处理的图片
  //   // remotePatterns: [ // 或者配置允许的远程域名
  //   //   {
  //   //     protocol: 'https',
  //   //     hostname: 'images.unsplash.com',
  //   //   },
  //   //   {
  //   //     protocol: 'https',
  //   //     hostname: 'source.unsplash.com',
  //   //   },
  //   // ],
  // },

  // 此处可以保留或添加其他 Next.js 配置
};

export default nextConfig;
