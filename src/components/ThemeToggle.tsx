import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark")

    useEffect(() => {
        // Sync state with current DOM state on mount
        // CSS uses :root.light for light mode; dark is the default (:root)
        const isLight = document.documentElement.classList.contains("light")
        setTheme(isLight ? "light" : "dark")
    }, [])

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark"

        if (newTheme === "light") {
            document.documentElement.classList.add("light")
            document.documentElement.classList.remove("dark")
        } else {
            document.documentElement.classList.remove("light")
            document.documentElement.classList.add("dark")
        }

        localStorage.setItem("theme", newTheme)
        setTheme(newTheme)
    }

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full w-9 h-9 border border-border/50 bg-background/50 backdrop-blur-sm"
        >
            <Sun className={`h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`} />
            <Moon className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"}`} />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}
