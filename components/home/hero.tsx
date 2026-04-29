"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { gsap } from "gsap"
import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const rotatingWords = ["STRENGTH", "POWER", "DISCIPLINE", "EXCELLENCE", "RESULTS"]

export function Hero() {
  const [currentWord, setCurrentWord] = useState(0)
  const headingRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )
    }
  }, [currentWord])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-gym.jpg"
          alt="Grand Technique Gym Interior"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">Texas&apos;s Premier Fitness Destination</span>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6"
          >
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-foreground leading-none">
              UNLEASH YOUR
            </h1>
            <h1 
              ref={headingRef}
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight text-primary leading-none mt-2"
            >
              {rotatingWords[currentWord]}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            World-class equipment, expert trainers, and a community dedicated to pushing limits. 
            Your transformation starts here.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/join">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 h-14 text-base group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-border hover:bg-card text-foreground h-14 px-8 text-base group"
            >
              <Play className="mr-2 h-5 w-5 text-primary" />
              Watch Video
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-border/50"
          >
            {[
              { value: "5,000+", label: "Active Members" },
              { value: "50+", label: "Expert Trainers" },
              { value: "15+", label: "Years Experience" },
              { value: "98%", label: "Success Rate" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </div>
      </motion.div>
    </section>
  )
}
