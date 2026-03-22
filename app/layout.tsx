import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ocean Springs Tech | Premier Pool Experts in Coachella Valley",
  description: "Enhance your outdoor living space with Coachella Valley's most trusted pool company. We specialize in pool construction, renovation, maintenance, and lighting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        
        {/* HubSpot CRM & Chatbot Tracker */}
        <Script
          id="hs-script-loader"
          strategy="lazyOnload"
          src="//js.hs-scripts.com/TU_HUBSPOT_ID.js"
        />
      </body>
    </html>
  );
}
