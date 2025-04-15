import "./globals.css";

// components
import Header from "@/components/Header";

export const metadata = {
  title: "Garden Builder | Garden Design & Build",
  description:
    "Expert garden design and landscaping services. Garden Builder creates vibrant outdoor spaces with precision and care.",
  keywords: [
    "garden design",
    "landscaping Dublin",
    "outdoor kitchens",
    "Garden Builder",
  ],
  openGraph: {
    title: "Garden Builder",
    description:
      "Discover beautiful, functional gardens built with expert craftsmanship.",
    url: "https://www.gardenbuilder.com",
    images: [
      {
        url: "https://www.gardenbuilder.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Garden Builder",
      },
    ],
    locale: "en_IE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Garden Builder | Garden Design & Build",
    description:
      "Discover beautiful, functional gardens built with expert craftsmanship.",
    images: ["https://www.gardenbuilder.com/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Garden Builder",
              url: "https://www.gardenbuilder.com",
              telephone: "+1-555-000-0000",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dublin",
                addressCountry: "IE",
              },
              sameAs: [
                // "https://www.instagram.com/campbell.landscaping/"
              ],
            }),
          }}
        />
      </head>
      <body className={`antialiased`}>
      <Header />
        {children}
      </body>
    </html>
  );
}
