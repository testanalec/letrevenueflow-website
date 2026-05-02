import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://letrevenueflow.com"),
  title: {
    default: "LetRevenueFlow — Revenue Pipeline Growth for B2B Teams",
    template: "%s | LetRevenueFlow",
  },
  description: "LetRevenueFlow helps SaaS, IT services firms, and agencies generate qualified opportunities through lead generation, appointment setting, outbound sales campaigns, and pipeline management.",
  keywords: ["B2B lead generation", "appointment setting", "outbound sales", "revenue pipeline", "SaaS growth", "IT services leads", "sales development"],
  authors: [{ name: "LetRevenueFlow" }],
  creator: "LetRevenueFlow",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "LetRevenueFlow — Revenue Pipeline Growth for B2B Teams",
    description: "LetRevenueFlow helps SaaS, IT services firms, and agencies generate qualified opportunities through lead generation, appointment setting, outbound sales campaigns, and pipeline management.",
    url: "https://letrevenueflow.com",
    siteName: "LetRevenueFlow",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "LetRevenueFlow — Revenue Pipeline Growth for B2B Teams",
    description: "B2B lead generation, appointment setting, and outbound sales campaigns that drive qualified pipeline.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://letrevenueflow.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LetRevenueFlow",
              url: "https://letrevenueflow.com",
              logo: "https://letrevenueflow.com/logo.png",
              description: "B2B lead generation, appointment setting, and outbound sales campaigns that drive qualified pipeline.",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "sales",
                email: "rahul.mittal@analec.com",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
