import { ThemeProvider } from "@/components/theme-provider"
import HomePage from "@/components/home-page"

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <HomePage />
    </ThemeProvider>
  )
}

