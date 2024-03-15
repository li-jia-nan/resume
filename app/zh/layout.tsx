import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "栗嘉男-前端-四年",
  description: "个人简历",
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="zh">
      <body className={clsx(inter.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
