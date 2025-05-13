import { Geist, Geist_Mono } from "next/font/google"; // 保持原有字体导入
import "./globals.css";
import Footer from "@/components/Footer"; // 导入 Footer 组件

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web前端开发练习平台", // 更新标题
  description: "《Web前端开发》课程练习成果展示", // 更新描述
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN"> {/* 推荐使用中文 lang */}
      <head>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 flex flex-col min-h-screen`}
      >
        <div className="flex-grow">{children}</div>
        <Footer /> {/* 添加 Footer 组件 */}
      </body>
    </html>
  );
}
