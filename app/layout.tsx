import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Edward Bird, PhD - Bioinformatics & Genomics",
  description: "Personal website of Edward Bird, PhD - Bioinformatician specializing in metagenomic surveillance, antimicrobial resistance detection, and genomic analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-100 border-t border-gray-200 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-6 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Edward Bird, PhD. All rights reserved.</p>
            <p className="mt-2">
              <a href="mailto:edwardbird@ksu.edu" className="text-blue-600 hover:text-blue-800">
                edwardbird@ksu.edu
              </a>
              {" | "}
              <a href="tel:4052743539" className="text-blue-600 hover:text-blue-800">
                (405) 274-3539
              </a>
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
