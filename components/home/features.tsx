"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Dumbbell, Users, Clock, Trophy, Zap, Heart } from "lucide-react"

const features = [
  {
    icon: Dumbbell,
    title: "Premium Equipment",
    description: "State-of-the-art machines and free weights from top brands. Everything you need to train like a champion.",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals with years of experience. Personalized guidance to help you reach your goals.",
  },
  {
    icon: Clock,
    title: "24/7 Access",
    description: "Train on your schedule. Our doors are always open for members who are ready to put in the work.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Thousands of success stories. Our programs deliver real transformations, not empty promises.",
  },
  {
    icon: Zap,
    title: "Dynamic Classes",
    description: "From HIIT to yoga, boxing to strength training. Over 50 weekly classes to keep you motivated.",
  },
  {
    icon: Heart,
    title: "Community Spirit",
    description: "More than a gym - a family. Connect with like-minded individuals on the same journey.",
  },
]

export function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-wider uppercase">
            Why Choose Us
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 mb-4">
            BUILT FOR CHAMPIONS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to transform your body and exceed your fitness goals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl tracking-wide text-foreground mb-3">
                {feature.title.toUpperCase()}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
