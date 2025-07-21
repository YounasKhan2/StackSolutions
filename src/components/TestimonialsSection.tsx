'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, Building, User } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
  projectType: string
  industry: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechStart Inc.",
    content: "StackSolutions transformed our outdated system into a modern, scalable platform. Their expertise in full-stack development and attention to detail exceeded our expectations. The project was delivered on time and within budget.",
    rating: 5,
    projectType: "Web Application",
    industry: "Technology"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Founder",
    company: "EcoCommerce",
    content: "The e-commerce platform they built for us increased our sales by 300% in the first quarter. The mobile app is intuitive and our customers love it. Exceptional work and ongoing support.",
    rating: 5,
    projectType: "E-commerce Platform",
    industry: "Retail"
  },
  {
    id: 3,
    name: "Dr. Emily Rodriguez",
    role: "Director",
    company: "HealthTech Solutions",
    content: "Working with StackSolutions on our healthcare management system was a game-changer. They understood our complex requirements and delivered a HIPAA-compliant solution that streamlined our operations.",
    rating: 5,
    projectType: "Healthcare System",
    industry: "Healthcare"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Operations Manager",
    company: "LogiFlow Corp",
    content: "The AI automation solution they developed saved us 40 hours per week in manual processes. The ROI was evident within the first month. Highly recommend their AI expertise.",
    rating: 5,
    projectType: "AI Automation",
    industry: "Logistics"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "GrowthAgency",
    content: "Our website traffic increased by 250% after their SEO optimization work. The technical improvements and content strategy they implemented delivered outstanding results.",
    rating: 5,
    projectType: "SEO Optimization",
    industry: "Marketing"
  },
  {
    id: 6,
    name: "David Park",
    role: "CEO",
    company: "FinanceFlow",
    content: "The mobile banking app they developed is secure, user-friendly, and has received excellent reviews from our customers. Their attention to security and compliance was impressive.",
    rating: 5,
    projectType: "Mobile App",
    industry: "Finance"
  }
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-advance testimonials
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ))
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-neutral-charcoal mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with StackSolutions.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Display */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
            <Quote className="text-primary-blue opacity-20 absolute top-6 left-6" size={48} />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                {/* Rating */}
                <div className="flex items-center justify-center mb-6">
                  <div className="flex space-x-1">
                    {renderStars(currentTestimonial.rating)}
                  </div>
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-lg md:text-xl text-neutral-charcoal leading-relaxed text-center mb-8 italic">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Client Info */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="text-white" size={24} />
                  </div>
                  <h4 className="font-inter font-bold text-lg text-neutral-charcoal">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-primary-blue font-semibold">
                    {currentTestimonial.role}
                  </p>
                  <p className="text-neutral-charcoal flex items-center justify-center mt-1">
                    <Building size={16} className="mr-2" />
                    {currentTestimonial.company}
                  </p>
                  <div className="flex items-center justify-center mt-2 space-x-4 text-sm text-neutral-charcoal">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      {currentTestimonial.projectType}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                      {currentTestimonial.industry}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="text-neutral-charcoal" size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="text-neutral-charcoal" size={20} />
            </button>
          </div>

          {/* Testimonial Dots */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-blue' : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-inter font-bold text-primary-navy mb-2">50+</div>
            <div className="text-neutral-charcoal">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-inter font-bold text-primary-navy mb-2">98%</div>
            <div className="text-neutral-charcoal">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-inter font-bold text-primary-navy mb-2">5.0</div>
            <div className="text-neutral-charcoal">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-inter font-bold text-primary-navy mb-2">100%</div>
            <div className="text-neutral-charcoal">On-Time Delivery</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-inter font-bold text-neutral-charcoal mb-4">
            Ready to Join Our Success Stories?
          </h3>
          <p className="text-lg text-neutral-charcoal mb-6">
            Let's discuss how we can help transform your business with innovative technology solutions.
          </p>
          <motion.a
            href="/consultation"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Start Your Project Today
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}