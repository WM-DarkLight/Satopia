"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, TrendingUp, Sparkles } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative overflow-hidden border-b border-blue-500/20">
      <div className="container mx-auto px-4 py-20 md:py-28 lg:py-36">
        <div
          className={`mx-auto max-w-5xl text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/5 px-5 py-2.5 text-sm text-blue-300 backdrop-blur-sm animate-glow">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span>Your path to SAT success starts here</span>
          </div>

          <h1 className="mb-8 text-balance font-sans text-6xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
            Welcome to{" "}
            <span className="relative inline-block">
              <span className="neon-text relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Satopia
              </span>
              <span className="absolute inset-0 blur-2xl bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 opacity-50" />
            </span>
          </h1>

          <p className="mb-10 text-pretty text-lg text-blue-100/80 md:text-xl lg:text-2xl">
            Your comprehensive hub for SAT preparation. Access curated study materials, practice tests, and expert
            resources all in one place.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="group relative w-full overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 sm:w-auto neon-border"
            >
              <span className="relative z-10 flex items-center">
                <BookOpen className="mr-2 h-5 w-5" />
                Explore Resources
              </span>
              <span className="absolute inset-0 -z-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-blue-500/50 bg-blue-500/5 text-blue-300 backdrop-blur-sm hover:bg-blue-500/10 hover:text-blue-200 sm:w-auto"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Study Tips
            </Button>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          <div className="glass-effect group rounded-xl border border-blue-500/30 p-8 text-center transition-all hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.3)]">
            <div className="mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-5xl font-bold text-transparent">
              500+
            </div>
            <div className="text-sm text-blue-200/70">Practice Questions</div>
          </div>
          <div className="glass-effect group rounded-xl border border-cyan-500/30 p-8 text-center transition-all hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
            <div className="mb-3 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-5xl font-bold text-transparent">
              50+
            </div>
            <div className="text-sm text-blue-200/70">Study Resources</div>
          </div>
          <div className="glass-effect group rounded-xl border border-purple-500/30 p-8 text-center transition-all hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]">
            <div className="mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-5xl font-bold text-transparent">
              100%
            </div>
            <div className="text-sm text-blue-200/70">Free Access</div>
          </div>
        </div>
      </div>
    </section>
  )
}
