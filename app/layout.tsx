import "./globals.css";
import Navbar from "../components/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal Portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 transition-colors duration-200">
          <Navbar />
          <main className="max-w-5xl mx-auto p-0.5">{children}</main>
      </body>
    </html>
  );
}
