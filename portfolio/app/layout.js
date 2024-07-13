import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Customize as needed
});

export const metadata = {
  title: "Portfolio Website - Sidi Chaikh",
  description: "Sidi Chaikh portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-[#121213]">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
