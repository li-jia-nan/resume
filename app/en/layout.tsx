import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "lijianan-FrontEnd-fourYears",
  description: "resume",
};

const RootLayout = ({ children }: React.PropsWithChildren) => {
  return (
    <html lang="en">
      <body className={clsx(inter.className)}>{children}</body>
    </html>
  );
};

export default RootLayout;
