import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Inter } from "next/font/google";
import React from "react";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dong Payton Pei — Software Engineer",
    template: "%s | Dong Payton Pei",
  },
  description:
    "Software engineer building local-first AI systems, native apps, and developer tools.",
  applicationName: "Dong Payton Pei — CV",
  authors: [{ name: "Dong Payton Pei" }],
  creator: "Dong Payton Pei",
};

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
