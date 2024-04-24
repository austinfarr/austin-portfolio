import { Outfit } from "next/font/google";
import "./globals.css";

//Component Imports
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Toaster } from "@/components/ui/toaster";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Austin Farr - Portfolio",
  description: "Check out my personal website!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
