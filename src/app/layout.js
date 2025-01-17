import { Inter, Anton, Antonio } from "next/font/google";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const anton = Anton({ subsets: ["latin"], weight: "400", variable: '--anton'})
const antonio = Antonio({ subsets: ["latin"], weight: "100" })

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${antonio.className} ${anton.variable}`}>
        <NavBar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
