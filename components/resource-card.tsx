"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ChevronDown, ChevronUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { useState } from "react"

interface ResourceLink {
  name: string
  url: string
}

interface ResourceCardProps {
  title: string
  description: string
  icon: LucideIcon
  links: ResourceLink[]
}

export function ResourceCard({ title, description, icon: Icon, links }: ResourceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <Card className="glass-effect group border-blue-500/20 transition-all duration-300 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(96,165,250,0.2)]">
      <CardHeader>
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]">
          <Icon className="h-7 w-7" />
        </div>
        <CardTitle className="text-xl text-white">{title}</CardTitle>
        <CardDescription className="text-sm text-blue-200/60">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {links.slice(0, isExpanded ? links.length : 2).map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-lg border border-blue-500/20 bg-blue-500/5 px-4 py-3 text-sm text-blue-100 backdrop-blur-sm transition-all hover:border-blue-400/40 hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(96,165,250,0.2)]"
            >
              <span className="truncate">{link.name}</span>
              <ExternalLink className="ml-2 h-4 w-4 flex-shrink-0 text-cyan-400" />
            </a>
          ))}
        </div>

        {links.length > 2 && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-4 w-full text-blue-300 hover:bg-blue-500/10 hover:text-blue-200"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="ml-2 h-4 w-4" />
              </>
            ) : (
              <>
                Show {links.length - 2} More <ChevronDown className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
