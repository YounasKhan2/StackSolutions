'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Smartphone, Zap, TrendingUp } from 'lucide-react'
import IndustriesSection from '../components/IndustriesSection'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialsSection from '../components/TestimonialsSection'
import CaseStudies from '../components/CaseStudies'
import BlogSection from '../components/BlogSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Hero Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy/95 via-primary-blue/90 to-accent-orange/85"></div>
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10"></div>

        <div className="relative container mx-auto px-4 py-32">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-poppins font-bold text-white mb-6">
                Stack<span className="text-accent-orange">Solutions</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                We don't just build software—we craft digital experiences that drive real business growth.
                From startups to Fortune 500 companies, we've helped over 50 businesses transform their operations with innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.a
                  href="/consultation"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-2 transition-colors"
                >
                  Start Your Project <ArrowRight size={20} />
                </motion.a>
                <motion.a
                  href="#case-studies"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white hover:bg-white hover:text-primary-navy px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  View Our Work
                </motion.a>
              </div>
            </motion.div>

            {/* Services Preview */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Code className="text-primary-blue mb-4" size={40} />
                <h3 className="font-inter font-semibold text-lg mb-2">Full-Stack Development</h3>
                <p className="text-neutral-charcoal text-sm">Scalable web applications that grow with your business—from MVP to enterprise-grade platforms</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Smartphone className="text-primary-blue mb-4" size={40} />
                <h3 className="font-inter font-semibold text-lg mb-2">Flutter Mobile Apps</h3>
                <p className="text-neutral-charcoal text-sm">Native-quality mobile experiences that reach both iOS and Android users with a single codebase</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <Zap className="text-primary-blue mb-4" size={40} />
                <h3 className="font-inter font-semibold text-lg mb-2">AI Automation</h3>
                <p className="text-neutral-charcoal text-sm">Save 40+ hours weekly with intelligent automation that handles repetitive tasks seamlessly</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <TrendingUp className="text-primary-blue mb-4" size={40} />
                <h3 className="font-inter font-semibold text-lg mb-2">SEO Optimization</h3>
                <p className="text-neutral-charcoal text-sm">Increase organic traffic by 250%+ with our proven technical SEO and content strategies</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <div id="industries">
        <IndustriesSection />
      </div>

      {/* Our Process */}
      <div id="process">
        <ProcessTimeline />
      </div>

      {/* Client Testimonials */}
      <div id="testimonials">
        <TestimonialsSection />
      </div>

      {/* Case Studies */}
      <div id="case-studies">
        <CaseStudies />
      </div>

      {/* Blog & Resources */}
      <div id="blog">
        <BlogSection />
      </div>
    </main>
  )
}