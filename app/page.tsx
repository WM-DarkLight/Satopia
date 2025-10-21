import { Hero } from "@/components/hero"
import { ResourceGrid } from "@/components/resource-grid"
import { Footer } from "@/components/footer"
import { ParticlesBackground } from "@/components/particles-background"
import { AnimatedBackground } from "@/components/animated-background"

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <ParticlesBackground />
      <Hero />
      <ResourceGrid />
      <Footer />
    </main>
  )
}
