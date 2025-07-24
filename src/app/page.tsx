'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code, Smartphone, Zap, TrendingUp } from 'lucide-react'
import IndustriesSection from '../components/IndustriesSection'
import ProcessTimeline from '../components/ProcessTimeline'
import TestimonialsSection from '../components/TestimonialsSection'
import CaseStudies from '../components/CaseStudies'
import BlogSection from '../components/BlogSection'
import ROICalculator from '../components/ROICalculator'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Hero Background with Signature Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-navy via-primary-blue/90 to-accent-orange/20"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-primary-blue/10 to-accent-orange/30"></div>
        {/* Signature Geometric Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rotate-45 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-accent-orange/30 rotate-12 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-primary-blue/40 -rotate-12"></div>
          <div className="absolute bottom-20 right-20 w-20 h-20 border border-white/15 rotate-45"></div>
        </div>

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
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-accent-orange/20 text-accent-orange rounded-full text-sm font-semibold mb-4">
                  Business-First Development Agency
                </span>
              </div>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                We don't just code, we architect business growth. Every line of code is written with your ROI in mind.
                <span className="block mt-4 text-lg opacity-80">
                  We've saved our clients over 10,000 hours of manual work and generated $50M+ in additional revenue.
                </span>
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

      {/* Signature Methodology Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-64 h-64 border border-primary-blue/20 rounded-full"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 border border-accent-orange/20 rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-primary-blue/10 text-primary-blue rounded-full text-sm font-semibold mb-4">
              The StackSolutions Way
            </span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold text-neutral-charcoal mb-6">
              Our Signature Methodologies
            </h2>
            <p className="text-xl text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
              Proven frameworks that deliver measurable business impact, not just technical solutions.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-navy to-primary-blue rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-poppins font-bold text-xl">1</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3 text-neutral-charcoal">
                ROI-First Architecture
              </h3>
              <p className="text-neutral-charcoal text-sm leading-relaxed">
                Every technical decision is evaluated through business impact lens, ensuring maximum return on investment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-accent-orange rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-poppins font-bold text-xl">2</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3 text-neutral-charcoal">
                Scale Framework
              </h3>
              <p className="text-neutral-charcoal text-sm leading-relaxed">
                Built-in scalability from day one, with architecture that grows seamlessly with your business.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-accent-orange to-primary-navy rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-poppins font-bold text-xl">3</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3 text-neutral-charcoal">
                90-Day Launch Method
              </h3>
              <p className="text-neutral-charcoal text-sm leading-relaxed">
                Rapid deployment methodology that gets you to market fast without compromising quality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary-blue to-primary-navy rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="text-white font-poppins font-bold text-xl">4</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3 text-neutral-charcoal">
                Future-Proof Tech Selection
              </h3>
              <p className="text-neutral-charcoal text-sm leading-relaxed">
                Strategic technology choices that keep you ahead of the curve and reduce technical debt.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="/methodology"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-primary-navy hover:bg-primary-blue text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Learn Our Methodology <ArrowRight size={20} />
            </motion.a>
          </motion.div>
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

      {/* The Anti-Agency Agency Section */}
      <section className="py-20 bg-gradient-to-br from-primary-navy to-primary-blue text-white relative overflow-hidden">
        {/* Signature Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="grid grid-cols-8 gap-4 h-full opacity-20">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-white/10 rounded"></div>
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-accent-orange/20 text-accent-orange rounded-full text-sm font-semibold mb-4">
              The Anti-Agency Agency
            </span>
            <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-6">
              We Fixed What's Broken in Development
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              Tired of agencies that overpromise and underdeliver? We built StackSolutions to solve the problems we experienced as clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-poppins font-bold text-2xl">$</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">
                Transparent Pricing
              </h3>
              <p className="opacity-80 text-sm leading-relaxed">
                No hidden costs, no surprise bills. Fixed-scope projects with clear change management.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-poppins font-bold text-2xl">👨‍💻</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">
                Senior Developers Only
              </h3>
              <p className="opacity-80 text-sm leading-relaxed">
                Direct access to senior developers. No junior handoffs, no communication gaps.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-poppins font-bold text-2xl">⚡</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">
                Responsive Support
              </h3>
              <p className="opacity-80 text-sm leading-relaxed">
                Post-launch support that actually responds. 2-hour response time guaranteed.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-accent-orange rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-poppins font-bold text-2xl">📊</span>
              </div>
              <h3 className="font-poppins font-semibold text-lg mb-3">
                Business Impact Focus
              </h3>
              <p className="opacity-80 text-sm leading-relaxed">
                Every project starts with ROI analysis. We measure success by your business growth.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 max-w-2xl mx-auto">
              <h3 className="font-poppins font-semibold text-xl mb-3">
                "Finally, a development partner that gets it."
              </h3>
              <p className="opacity-90 text-sm">
                - Every client who switched to StackSolutions from traditional agencies
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <div id="case-studies">
        <CaseStudies />
      </div>

      {/* ROI Calculator */}
      <ROICalculator />

      {/* Blog & Resources */}
      <div id="blog">
        <BlogSection />
      </div>
    </main>
  )
}