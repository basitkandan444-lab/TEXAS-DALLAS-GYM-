import type { Metadata, Viewport } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
})

const bebasNeue = Bebas_Neue({ 
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "Grand Technique Gym | Elite Fitness in Texas",
  description: "Transform your body and mind at Grand Technique Gym. Premium fitness facilities, expert trainers, and a community dedicated to excellence. Start your journey today.",
  keywords: ["gym", "fitness", "Texas", "personal training", "strength training", "bodybuilding"],
  generator: "v0.app",
  openGraph: {
    title: "Grand Technique Gym | Elite Fitness in Texas",
    description: "Transform your body and mind at Grand Technique Gym. Premium fitness facilities, expert trainers, and results that speak for themselves.",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bebasNeue.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
