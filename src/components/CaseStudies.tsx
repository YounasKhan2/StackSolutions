'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Clock, DollarSign } from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Transformation",
    client: "EcoCommerce",
    industry: "Retail",
    challenge: "Outdated e-commerce platform with poor mobile experience and slow loading times",
    solution: "Complete platform rebuild with Next.js, optimized checkout flow, and mobile-first design",
    results: [
      { metric: "Sales Increase", value: "300%", icon: TrendingUp },
      { metric: "Mobile Conversions", value: "450%", icon: Users },
      { metric: "Page Load Time", value: "75% faster", icon: Clock },
      { metric: "ROI", value: "520%", icon: DollarSign }
    ],
    image: "/case-study-ecommerce.jpg",
    testimonial: "StackSolutions transformed our business. The new platform increased our sales by 300% in the first quarter.",
    clientName: "Michael Chen",
    clientRole: "Founder, EcoCommerce",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe"],
    timeline: "3 months",
    featured: true
  },
  {
    id: 2,
    title: "Healthcare Management System",
    client: "HealthTech Solutions",
    industry: "Healthcare",
    challenge: "Manual patient management processes causing delays and compliance issues",
    solution: "HIPAA-compliant web application with automated workflows and real-time analytics",
    results: [
      { metric: "Processing Time", value: "80% reduction", icon: Clock },
      { metric: "Patient Satisfaction", value: "95%", icon: Users },
      { metric: "Compliance Score", value: "100%", icon: TrendingUp },
      { metric: "Cost Savings", value: "$50K/year", icon: DollarSign }
    ],
    image: "/case-study-healthcare.jpg",
    testimonial: "The system streamlined our operations and improved patient care significantly.",
    clientName: "Dr. Emily Rodriguez",
    clientRole: "Director, HealthTech Solutions",
    technologies: ["React", "Node.js", "MongoDB", "AWS", "HIPAA"],
    timeline: "4 months",
    featured: true
  },
  {
    id: 3,
    title: "AI-Powered Logistics Automation",
    client: "LogiFlow Corp",
    industry: "Logistics",
    challenge: "Manual route planning and inventory management consuming 40+ hours weekly",
    solution: "AI-powered automation system with predictive analytics and real-time optimization",
    results: [
      { metric: "Time Saved", value: "40 hrs/week", icon: Clock },
      { metric: "Route Efficiency", value: "35% improvement", icon: TrendingUp },
      { metric: "Cost Reduction", value: "25%", icon: DollarSign },
      { metric: "Accuracy", value: "99.2%", icon: Users }
    ],
    image: "/case-study-logistics.jpg",
    testimonial: "The AI automation saved us 40 hours per week. ROI was evident within the first month.",
    clientName: "James Wilson",
    clientRole: "Operations Manager, LogiFlow Corp",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL", "Docker"],
    timeline: "5 months",
    featured: false
  }
]

export default function CaseStudies() {
  const featuredCases = caseStudies.filter(study => study.featured)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-neutral-charcoal mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
            Real results from real clients. See how we've helped businesses transform their operations 
            and achieve remarkable growth through innovative technology solutions.
          </p>
        </motion.div>

        <div className="space-y-16">
          {featuredCases.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary-blue text-white text-sm font-semibold rounded-full mb-2">
                    {study.industry}
                  </span>
                  <h3 className="text-3xl font-inter font-bold text-neutral-charcoal mb-2">
                    {study.title}
                  </h3>
                  <p className="text-lg text-primary-blue font-semibold">
                    {study.client}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-neutral-charcoal mb-2">Challenge:</h4>
                  <p className="text-neutral-charcoal mb-4">{study.challenge}</p>
                  
                  <h4 className="font-semibold text-neutral-charcoal mb-2">Solution:</h4>
                  <p className="text-neutral-charcoal mb-6">{study.solution}</p>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="bg-gray-50 p-4 rounded-lg text-center">
                      <result.icon className="text-primary-blue mx-auto mb-2" size={24} />
                      <div className="text-2xl font-inter font-bold text-neutral-charcoal">
                        {result.value}
                      </div>
                      <div className="text-sm text-neutral-charcoal">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <blockquote className="bg-primary-navy text-white p-6 rounded-lg mb-6">
                  <p className="italic mb-4">"{study.testimonial}"</p>
                  <footer>
                    <strong>{study.clientName}</strong>
                    <br />
                    <span className="opacity-75">{study.clientRole}</span>
                  </footer>
                </blockquote>

                {/* Technologies & Timeline */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-charcoal">
                    <strong>Timeline:</strong> {study.timeline}
                  </span>
                  <motion.a
                    href="/case-studies"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-primary-blue font-semibold hover:text-primary-navy transition-colors"
                  >
                    View Full Case Study <ArrowRight size={16} />
                  </motion.a>
                </div>
              </div>

              {/* Image Placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="bg-gradient-to-br from-primary-navy to-primary-blue rounded-xl p-8 text-white min-h-[400px] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <h4 className="text-xl font-semibold mb-2">{study.title}</h4>
                    <p className="opacity-75">Visual representation of results</p>
                    <div className="mt-4 text-sm opacity-60">
                      Image: {study.image}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16 bg-gray-50 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-inter font-bold text-neutral-charcoal mb-4">
            Ready to Write Your Success Story?
          </h3>
          <p className="text-lg text-neutral-charcoal mb-6">
            Join our growing list of successful clients who have transformed their businesses with our solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="/consultation"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              Start Your Project
            </motion.a>
            <motion.a
              href="/case-studies"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors text-center"
            >
              View All Case Studies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}