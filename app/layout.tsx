import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { Suspense } from "react";
import UserProfile from "./components/user-profile";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Syllab",
  description: "...where learning meets excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserProvider>
     
        <body className={inter.className}>{children}</body>
      </UserProvider>
    </html>
  );
}
