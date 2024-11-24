import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akord",
  description: "Decentralized file storage and sharing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem={true}
                disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
