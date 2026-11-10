import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-grotesk" });

export const metadata = {
  title: "Modera | Building Strong Foundations for Modern Living",
  description: "Construction company for offices, retail, and residential projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${grotesk.variable} font-sans`}>{children}</body>
    </html>
  );
}
