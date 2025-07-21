'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ProjectCalculator from '@/components/ProjectCalculator'
import { Calculator, Lightbulb, MessageSquare } from 'lucide-react'

const benefits = [
  {
    icon: Calculator,
    title: "Instant Estimates",
    description: "Get immediate cost and timeline estimates based on your project requirements"
  },
  {
    icon: Lightbulb,
    title: "Smart Recommendations",
    description: "Our calculator considers project complexity and feature requirements for accurate estimates"
  },
  {
    icon: MessageSquare,
    title: "Free Consultation",
    description: "Get a detailed quote and discuss your project with our experts at no cost"
  }
]

export default function CalculatorPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-navy to-primary-blue text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-inter font-bold mb-6">
              Project Cost Calculator
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Get instant estimates for your development project. Our smart calculator 
              considers your specific requirements to provide accurate cost and timeline projections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <benefit.icon className="text-primary-blue mx-auto mb-4" size={48} />
                <h3 className="font-inter font-bold text-xl mb-3 text-neutral-charcoal">
                  {benefit.title}
                </h3>
                <p className="text-neutral-charcoal leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <ProjectCalculator />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary-navy text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-inter font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Our calculator provides estimates, but every project is unique. 
              Let's discuss your specific requirements and provide a detailed proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                Schedule Free Consultation
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white hover:bg-white hover:text-primary-navy px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                View Our Portfolio
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}