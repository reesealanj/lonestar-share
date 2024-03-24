import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarLayout } from "@/components/page-layout/sidebar-layout";
import { ProvidersWrapper } from "@/components/context/providers-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lonestar Share",
  description: "Share documents, images, and more with Lonestar Share.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProvidersWrapper>
          <SidebarLayout>{children}</SidebarLayout>
        </ProvidersWrapper>
      </body>
    </html>
  );
}
