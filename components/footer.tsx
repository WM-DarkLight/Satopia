import { GraduationCap, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-blue-500/20 bg-black/40 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <GraduationCap className="h-6 w-6 text-cyan-400" />
              <span className="neon-text text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Satopia
              </span>
            </div>
            <p className="text-sm text-blue-200/60">
              Your comprehensive SAT preparation hub. All resources curated to help you achieve your best score.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm text-blue-200/60">
              <li>
                <a
                  href="https://satsuite.collegeboard.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-400"
                >
                  Official SAT Website
                </a>
              </li>
              <li>
                <a
                  href="https://www.khanacademy.org/test-prep/sat"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-400"
                >
                  Khan Academy
                </a>
              </li>
              <li>
                <a
                  href="https://blog.prepscholar.com/sat-study-guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-cyan-400"
                >
                  Study Guides
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">About</h3>
            <p className="text-sm text-blue-200/60">
              Satopia is a free resource hub designed to help students access quality SAT preparation materials from
              trusted sources across the web.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t border-blue-500/20 pt-8 text-center text-sm text-blue-200/60">
          <p className="flex items-center justify-center gap-1">
            Made with <Heart className="h-4 w-4 fill-red-500 text-red-500" /> for SAT students everywhere
          </p>
          <p className="mt-2">© {new Date().getFullYear()} Satopia. All resources link to their respective owners.</p>
        </div>
      </div>
    </footer>
  )
}
