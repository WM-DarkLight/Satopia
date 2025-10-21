"use client"

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <div className="absolute inset-0 bg-black" />

      <div className="absolute -left-1/4 top-0 h-[600px] w-[600px] animate-pulse rounded-full bg-blue-500/10 blur-[120px]" />
      <div className="absolute -right-1/4 top-1/4 h-[500px] w-[500px] animate-pulse rounded-full bg-cyan-400/10 blur-[100px] [animation-delay:2s]" />
      <div className="absolute bottom-0 left-1/3 h-[550px] w-[550px] animate-pulse rounded-full bg-blue-400/10 blur-[110px] [animation-delay:4s]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(96, 165, 250, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(96, 165, 250, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
}
