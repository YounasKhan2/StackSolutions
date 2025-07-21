'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Code2, TestTube, Rocket, HeadphonesIcon } from 'lucide-react'

const processSteps = [
  {
    icon: MessageSquare,
    title: "Discovery & Consultation",
    description: "We start by understanding your business goals, requirements, and challenges through detailed consultation sessions.",
    duration: "1-2 weeks",
    color: "bg-blue-500"
  },
  {
    icon: Lightbulb,
    title: "Strategy & Planning",
    description: "Our team creates a comprehensive project roadmap, technical architecture, and timeline tailored to your needs.",
    duration: "1 week",
    color: "bg-green-500"
  },
  {
    icon: Code2,
    title: "Development & Implementation",
    description: "We build your solution using agile methodologies, with regular updates and milestone reviews.",
    duration: "4-12 weeks",
    color: "bg-purple-500"
  },
  {
    icon: TestTube,
    title: "Testing & Quality Assurance",
    description: "Rigorous testing ensures your solution is bug-free, secure, and performs optimally across all platforms.",
    duration: "1-2 weeks",
    color: "bg-orange-500"
  },
  {
    icon: Rocket,
    title: "Deployment & Launch",
    description: "We handle the complete deployment process and ensure a smooth launch of your solution.",
    duration: "1 week",
    color: "bg-red-500"
  },
  {
    icon: HeadphonesIcon,
    title: "Support & Maintenance",
    description: "Ongoing support, updates, and maintenance to ensure your solution continues to perform at its best.",
    duration: "Ongoing",
    color: "bg-indigo-500"
  }
]

export default function ProcessTimeline() {
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
            Our Development Process
          </h2>
          <p className="text-xl text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
            A proven methodology that ensures successful project delivery, from initial concept to ongoing support.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              {/* Timeline Line */}
              <div className="hidden md:flex flex-col items-center mx-8">
                <div className={`w-16 h-16 ${step.color} rounded-full flex items-center justify-center shadow-lg`}>
                  <step.icon className="text-white" size={24} />
                </div>
                {index < processSteps.length - 1 && (
                  <div className="w-1 h-16 bg-gray-300 mt-4"></div>
                )}
              </div>

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right md:text-right'}`}>
                <div className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex md:hidden items-center mb-4">
                    <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mr-4`}>
                      <step.icon className="text-white" size={20} />
                    </div>
                    <span className="text-sm font-semibold text-accent-orange">{step.duration}</span>
                  </div>
                  
                  <div className="hidden md:block mb-2">
                    <span className="text-sm font-semibold text-accent-orange">{step.duration}</span>
                  </div>
                  
                  <h3 className="font-inter font-bold text-xl mb-3 text-neutral-charcoal">
                    {step.title}
                  </h3>
                  <p className="text-neutral-charcoal leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-inter font-bold text-neutral-charcoal mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-lg text-neutral-charcoal mb-6">
            Let's discuss your requirements and create a custom development plan.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Schedule Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}