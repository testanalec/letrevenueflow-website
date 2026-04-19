import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "LetRevenueFlow — Revenue Pipeline Growth for B2B Teams",
  description: "LetRevenueFlow helps SaaS, IT services firms, and agencies generate qualified opportunities through lead generation, appointment setting, outbound sales campaigns, and pipeline management.",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "LetRevenueFlow — Revenue Pipeline Growth for B2B Teams",
    description: "LetRevenueFlow helps SaaS, IT services firms, and agencies generate qualified opportunities through lead generation, appointment setting, outbound sales campaigns, and pipeline management.",
    url: "https://letrevenueflow.com",
    siteName: "LetRevenueFlow",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
