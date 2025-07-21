'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Code, Smartphone, Zap, TrendingUp, Globe, Database } from 'lucide-react'

const services = [
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "End-to-end web solutions using modern frameworks like React, Next.js, Node.js, and cloud technologies.",
    features: ["Custom Web Applications", "E-commerce Platforms", "Progressive Web Apps", "API Development"],
    color: "text-blue-600"
  },
  {
    icon: Smartphone,
    title: "Flutter Mobile Development",
    description: "Cross-platform mobile applications that work seamlessly on both iOS and Android devices.",
    features: ["Native Performance", "Single Codebase", "Custom UI/UX", "App Store Deployment"],
    color: "text-green-600"
  },
  {
    icon: Zap,
    title: "AI Automation Solutions",
    description: "Intelligent automation systems to streamline business processes and increase efficiency.",
    features: ["Process Automation", "Chatbot Development", "Data Analysis", "Machine Learning Integration"],
    color: "text-purple-600"
  },
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Comprehensive SEO strategies and digital marketing solutions to boost your online presence.",
    features: ["Technical SEO", "Content Optimization", "Performance Monitoring", "Analytics Setup"],
    color: "text-orange-600"
  },
  {
    icon: Globe,
    title: "Digital Transformation",
    description: "Complete digital transformation services to modernize your business operations.",
    features: ["Legacy System Migration", "Cloud Integration", "Digital Strategy", "Technology Consulting"],
    color: "text-indigo-600"
  },
  {
    icon: Database,
    title: "Database & Backend Solutions",
    description: "Robust backend architectures and database solutions for scalable applications.",
    features: ["Database Design", "API Architecture", "Cloud Infrastructure", "Performance Optimization"],
    color: "text-red-600"
  }
]

export default function Services() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-navy to-primary-blue text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-inter font-bold mb-6">
              Our Solutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Comprehensive technology solutions tailored to transform your business and drive growth
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <service.icon className={`${service.color} mb-6`} size={48} />
                <h3 className="font-inter font-bold text-xl mb-4 text-neutral-charcoal">
                  {service.title}
                </h3>
                <p className="text-neutral-charcoal mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-neutral-charcoal">
                      <div className="w-2 h-2 bg-accent-orange rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-primary-navy hover:bg-primary-blue text-white py-3 rounded-lg font-semibold transition-colors"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-inter font-bold text-neutral-charcoal mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-neutral-charcoal mb-8">
              Let's discuss how our solutions can help you achieve your goals and drive growth.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}