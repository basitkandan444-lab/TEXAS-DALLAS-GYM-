"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Marcus Johnson",
    role: "Lost 45 lbs in 6 months",
    content: "Grand Technique changed my life. The trainers pushed me beyond what I thought possible, and the community kept me accountable. Best decision I ever made.",
    rating: 5,
    initials: "MJ",
  },
  {
    name: "Sarah Chen",
    role: "Competitive Powerlifter",
    content: "As a competitive athlete, I need a gym that understands serious training. The equipment here is top-tier, and the trainers actually know what they're doing.",
    rating: 5,
    initials: "SC",
  },
  {
    name: "David Rodriguez",
    role: "Member for 3 years",
    content: "I've been to a lot of gyms, but nothing compares to Grand Technique. The 24/7 access fits my schedule perfectly, and I've never felt more at home.",
    rating: 5,
    initials: "DR",
  },
]

export function Testimonials() {
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
            Success Stories
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mt-3 mb-4">
            HEAR FROM OUR MEMBERS
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real results from real people who committed to their transformation.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-background border border-border"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-display text-primary text-lg">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
