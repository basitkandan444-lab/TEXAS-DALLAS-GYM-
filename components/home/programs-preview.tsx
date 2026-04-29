"use client"

import { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Flame, Target, Swords, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    icon: Target,
    title: "Strength Training",
    description: "Build muscle, increase power, and sculpt your physique with our comprehensive strength programs.",
    color: "from-red-500/20 to-transparent",
    href: "/programs#strength",
  },
  {
    icon: Flame,
    title: "HIIT & Cardio",
    description: "Torch calories and boost endurance with high-intensity interval training and cardio sessions.",
    color: "from-orange-500/20 to-transparent",
    href: "/programs#cardio",
  },
  {
    icon: Swords,
    title: "Boxing & MMA",
    description: "Learn striking techniques, improve coordination, and build confidence in our combat sports classes.",
    color: "from-amber-500/20 to-transparent",
    href: "/programs#boxing",
  },
  {
    icon: Activity,
    title: "Functional Fitness",
    description: "Train movements, not muscles. Improve everyday performance with functional training methods.",
    color: "from-yellow-500/20 to-transparent",
    href: "/programs#functional",
  },
]

export function ProgramsPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Our Programs
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-3">
              TRAIN YOUR WAY
            </h2>
          </div>
          <Link href="/programs" className="mt-6 md:mt-0">
            <Button variant="outline" className="group">
              View All Programs
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={program.href}>
                <div className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 h-full hover:border-primary/50 transition-all duration-300">
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-radial ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <program.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display text-2xl tracking-wide text-foreground mb-3">
                      {program.title.toUpperCase()}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {program.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
