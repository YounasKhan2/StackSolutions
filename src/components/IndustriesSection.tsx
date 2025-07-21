'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building2, ShoppingCart, Heart, GraduationCap, Car, Home, Briefcase, Gamepad2 } from 'lucide-react'

const industries = [
  {
    icon: Building2,
    title: "Enterprise & Corporate",
    description: "Large-scale solutions for enterprise businesses and corporations",
    color: "text-blue-600"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Retail",
    description: "Online stores, marketplaces, and retail management systems",
    color: "text-green-600"
  },
  {
    icon: Heart,
    title: "Healthcare & Medical",
    description: "HIPAA-compliant healthcare applications and medical platforms",
    color: "text-red-600"
  },
  {
    icon: GraduationCap,
    title: "Education & E-learning",
    description: "Educational platforms, LMS, and online learning solutions",
    color: "text-purple-600"
  },
  {
    icon: Car,
    title: "Automotive & Transportation",
    description: "Fleet management, logistics, and transportation solutions",
    color: "text-orange-600"
  },
  {
    icon: Home,
    title: "Real Estate & Property",
    description: "Property management, real estate platforms, and CRM systems",
    color: "text-indigo-600"
  },
  {
    icon: Briefcase,
    title: "Financial Services",
    description: "Fintech solutions, banking apps, and financial management tools",
    color: "text-yellow-600"
  },
  {
    icon: Gamepad2,
    title: "Entertainment & Media",
    description: "Gaming platforms, media streaming, and content management",
    color: "text-pink-600"
  }
]

export default function IndustriesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-inter font-bold text-neutral-charcoal mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
            We bring specialized expertise across diverse industries, delivering tailored solutions 
            that meet unique sector requirements and compliance standards.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <industry.icon className={`${industry.color} mb-4`} size={40} />
              <h3 className="font-inter font-semibold text-lg mb-3 text-neutral-charcoal">
                {industry.title}
              </h3>
              <p className="text-neutral-charcoal text-sm leading-relaxed">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-neutral-charcoal mb-6">
            Don't see your industry? We adapt our solutions to meet any business need.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary-navy hover:bg-primary-blue text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Discuss Your Project
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}