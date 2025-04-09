import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import logoap from "../public/images/logo.png"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Agência Pontes - Inteligência Artificial",
  description: "Criação de agentes de IA personalizados para aumentar seu faturamento com eficiência",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
      <link rel="icon" href="/images/logo.png" type="image/png" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
            body {
              background-color: #000 !important;
            }
            
            .dark {
              background-color: #000 !important;
            }
            
            html {
              background-color: #000;
            }
          `}
        </style>
      </head>
      <body className={inter.className} style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}



import './globals.css'