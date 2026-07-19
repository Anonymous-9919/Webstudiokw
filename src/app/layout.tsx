import type { Metadata } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { SITE } from "@/lib/constants"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { SmoothScroll } from "@/components/shared/SmoothScroll"
import { FloatingBall } from "@/components/shared/FloatingBall"
import { generateLocalBusinessSchema, generateProfessionalServiceSchema, generateWebSiteSchema } from "@/lib/schema"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: SITE.title,
    template: `%s | ${SITE.brand}`,
  },
  description: SITE.description,
  metadataBase: new URL(SITE.url),
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE.url,
    siteName: SITE.brand,
    title: SITE.title,
    description: SITE.description,
    images: [
      {
        url: `${SITE.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: SITE.brand,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [`${SITE.url}/og-image.png`],
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
  keywords: [
    "web development Kuwait",
    "website design Kuwait",
    "web developer Kuwait",
    "ecommerce website Kuwait",
    "website company Kuwait",
    "professional website Kuwait",
    "business website Kuwait",
    "hire web developer Kuwait",
    "web design Kuwait City",
    "affordable website Kuwait",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              generateLocalBusinessSchema(),
              generateProfessionalServiceSchema(),
              generateWebSiteSchema(),
            ]),
          }}
        />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {/* Header OUTSIDE smooth-scroll — like Zelta. mix-blend-mode needs to blend with viewport content */}
        <Navbar />

        {/* Smooth scroll wrapper — only wraps the scrollable content */}
        <SmoothScroll>
          <main>{children}</main>
          <Footer />
        </SmoothScroll>

        <FloatingBall />
      </body>
    </html>
  )
}
