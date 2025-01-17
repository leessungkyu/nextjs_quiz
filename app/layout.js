import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Quiz",
  description: "Quiz app",
  icons:{
    icon:"/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
      </body>
    </html>
  );
}
