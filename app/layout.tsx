import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Jadamy Elite Academy",
  description: "Center of Excellence - Shaping the Future of Learning",
  keywords: "Jadamy Elite Academy, education, private school, Nairobi, Kenya",
  authors: [{ name: "Jadamy Elite Academy", url: "https://jadamyeliteacademy.com" }],
  openGraph: {
    title: "Jadamy Elite Academy - Excellence in Education",
    description: "A leading private academy offering quality education in Nairobi, Kenya.",
    url: "https://jadamyeliteacademy.com",
    siteName: "Jadamy Elite Academy",
    type: "website",
    images: [
      {
        url: "/jadamy.jpeg", // Replace with your school's banner image
        width: 1200,
        height: 630,
        alt: "Jadamy Elite Academy Campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jadamy Elite Academy",
    description: "Center of Excellence - Nairobi's premier private school.",
    images: ["/jadamy.jpeg"], // Replace with actual image
  }, 
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-gray-100 text-gray-900`}>
        <div className="min-h-screen flex flex-col">
          <header className="shadow-md bg-white">
            <Navbar />
          </header>
          <main className="flex-grow container mx-auto px-6 py-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
