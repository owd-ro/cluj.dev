import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export const metadata = {
  title: "cluj.dev - Open Source Community",
  description:
    "cluj.dev is a community of developers, designers, and tech enthusiasts in Cluj-Napoca, Romania.",
  metadataBase: new URL("https://cluj.dev"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(GeistSans.variable, GeistMono.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-50 via-white to-yellow-100" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
