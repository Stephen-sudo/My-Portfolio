import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const ovo = Ovo({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Portfolio",
  description: " Portfolio of a Web-Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="smooth-scroll">
      <body
        className={`${outfit.className} ${ovo.className} antialiased dark:bg-darkTheme  dark:text-white leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
