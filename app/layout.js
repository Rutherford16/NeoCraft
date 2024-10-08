import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import BootstrapClient from "./components/BootstrapClient";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NeoCraft",
  description: "Toko online untuk berbelanja oleh-oleh khas Kalimantan Timur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <BootstrapClient />
    </html>
  );
}
