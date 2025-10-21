"use client"
import { ResourceCard } from "@/components/resource-card"
import { BookOpen, Video, FileText, Calculator, PenTool, Brain, Globe, Lightbulb, FolderOpen } from "lucide-react"

const resources = [
  {
    title: "Google Drive Resources",
    description: "Access our comprehensive collection of study materials and guides",
    icon: FolderOpen,
    links: [{ name: "Satopia Resource Drive", url: "https://drive.google.com/drive/u/3/my-drive" }],
  },
  {
    title: "Math Resources",
    description: "Comprehensive math study guides, formulas, and problem-solving strategies",
    icon: Calculator,
    links: [
      { name: "Khan Academy Math", url: "https://www.khanacademy.org/test-prep/v2-sat-math" },
      { name: "College Panda Math", url: "https://thecollegepanda.com" },
    ],
  },
  {
    title: "Reading & Writing",
    description: "Master reading comprehension and grammar with expert-curated materials",
    icon: BookOpen,
    links: [
      { name: "Khan Academy Reading", url: "https://www.khanacademy.org/test-prep/sat-reading-and-writing" },
      { name: "Erica Meltzer Reading", url: "https://thecriticalreader.com/" },
    ],
  },
]

export function ResourceGrid() {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="mb-16 text-center">
        <h2 className="mb-6 text-balance text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
          <span className="neon-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Explore Our Resources
          </span>
        </h2>
        <p className="mx-auto max-w-2xl text-pretty text-lg text-blue-100/70">
          Everything you need to prepare for the SAT, organized by category for easy access
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {resources.map((resource, index) => (
          <ResourceCard key={index} {...resource} />
        ))}
      </div>
    </section>
  )
}
