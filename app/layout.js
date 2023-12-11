import { Saira_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const saira = Saira_Condensed({ weight: "800", preload: false });

export const metadata = {
  title: "Gwalia Records",
  description: "Music Albums",
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
