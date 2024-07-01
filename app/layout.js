import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Harmonyville",
  description: "Desarrollado por albalk en Github",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
