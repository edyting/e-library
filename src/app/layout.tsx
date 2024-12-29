import type { Metadata } from "next";
import { Rubik} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";


// sidebar
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { AppSidebar } from "@/components/app-sidebar";
import AppSidebar from "@/components/ui/app-sidebar";



const rubik = Rubik({
  // variable: "--font-roboto",
  weight: ["400","500","600"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});


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
      <SidebarProvider>
        <AppSidebar />
        <body className={`  ${rubik.className} antialiased`}>
          <Navbar />
          <SidebarTrigger />
          {children}
        </body>
      </SidebarProvider>
    </html>
  );
}
