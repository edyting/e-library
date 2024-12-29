import type { Metadata } from "next";
import { Roboto} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const roboto = Roboto({
  // variable: "--font-roboto",
  weight: ["400", "500", "700", "900"],
  style: ["normal"],
  subsets: ["latin"],
});


// const inter = Inter({
//   // variable: "--font-roboto",
//   weight: ["400", "500", "700", "900"],
//   style: ["normal"],
//   subsets: ["latin"],
// });
// const bokor = Bokor({
//   // variable: "--font-roboto",
//   weight: ["400"],
//   style: ["normal"],
//   subsets: ["latin"],
//   display: "swap",
// });


export const metadata: Metadata = {
  title: "E-LIBRARY",
  description: "E-LIBRARY is a digital library for all your learning material needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`  ${roboto.className} antialiased`}
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
