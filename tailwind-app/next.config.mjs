/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 新增：启用静态 HTML 导出
  distDir: '../docs',  // 新增：指定输出目录为 'docs'

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
