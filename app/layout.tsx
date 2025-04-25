import "./globals.css";
import NavBar from "@/components/NavBar";
import { Inter, Inconsolata, Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const inconsolata = Inconsolata({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], weight: ["400"] });

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <NavBar />
        <main className="max-w-3xl py-4 mx-auto"> {children}</main>
      </body>
    </html>
  );
}
export default AppLayout;
