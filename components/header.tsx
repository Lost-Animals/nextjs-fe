"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Heart } from "lucide-react"

export function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-pink-500" />
          <span className="font-bold text-xl">LOST KITTY</span>
        </Link>

        <nav className="flex items-center space-x-6 text-sm font-medium ml-8">
          <Link href="/lost" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Lost Cats
          </Link>
          <Link href="/add-cat" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Add Cat
          </Link>
          <Link href="/info" className="transition-colors hover:text-foreground/80 text-foreground/60">
            Info
          </Link>
        </nav>

        <div className="ml-auto">
          <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
