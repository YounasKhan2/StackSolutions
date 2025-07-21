'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Users, Target, Award, Globe, Clock, Shield } from 'lucide-react'

const stats = [
  { number: "50+", label: "Projects Delivered", icon: Award },
  { number: "25+", label: "Happy Clients", icon: Users },
  { number: "5+", label: "Years Experience", icon: Clock },
  { number: "15+", label: "Countries Served", icon: Globe }
]

const values = [
  {
    icon: Target,
    title: "Client-Focused Approach",
    description: "We prioritize understanding your unique business needs and delivering solutions that exceed expectations."
  },
  {
    icon: Shield,
    title: "Quality & Security",
    description: "Every solution we build follows industry best practices for security, performance, and maintainability."
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our diverse team of developers, designers, and strategists brings years of experience across multiple technologies."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "We serve clients worldwide, adapting to different time zones and cultural requirements seamlessly."
  }
]

const team = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    description: "Full-stack developer with 8+ years experience in enterprise solutions and team leadership."
  },
  {
    name: "Sarah Chen",
    role: "Lead Developer",
    description: "Specialized in React, Next.js, and cloud architecture with a passion for clean, scalable code."
  },
  {
    name: "Michael Rodriguez",
    role: "Mobile Development Lead",
    description: "Flutter expert with extensive experience in cross-platform mobile app development."
  },
  {
    name: "Emily Davis",
    role: "AI/ML Specialist",
    description: "Machine learning engineer focused on automation solutions and intelligent systems."
  }
]

export default function About() {
  return (
    <main className="min-h-screen bg-white">
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
              About StackSolutions
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              We're a passionate team of developers and innovators dedicated to transforming 
              businesses through cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <stat.icon className="text-primary-blue mx-auto mb-4" size={40} />
                <div className="text-4xl font-inter font-bold text-neutral-charcoal mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-charcoal font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-inter font-bold text-neutral-charcoal mb-6">
                Our Story
              </h2>
              <p className="text-xl text-neutral-charcoal leading-relaxed">
                Founded in 2019, StackSolutions emerged from a simple belief: every business deserves 
                access to world-class technology solutions that drive growth and innovation.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="prose prose-lg max-w-none text-neutral-charcoal"
            >
              <p className="text-lg leading-relaxed mb-6">
                What started as a small team of passionate developers has grown into a full-service 
                development agency serving clients across the globe. We've helped startups launch 
                their first products, assisted enterprises in digital transformation, and everything in between.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our approach combines technical expertise with business acumen, ensuring that every 
                solution we deliver not only works flawlessly but also drives real business value. 
                We stay at the forefront of technology trends, constantly learning and adapting to 
                provide our clients with the most effective solutions.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we're proud to be trusted partners to businesses of all sizes, helping them 
                navigate the digital landscape and achieve their goals through innovative technology solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-neutral-charcoal mb-6">
              Our Values
            </h2>
            <p className="text-xl text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
              The principles that guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <value.icon className="text-primary-blue mb-6" size={48} />
                <h3 className="font-inter font-bold text-xl mb-4 text-neutral-charcoal">
                  {value.title}
                </h3>
                <p className="text-neutral-charcoal leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-inter font-bold text-neutral-charcoal mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
              The talented individuals behind StackSolutions, each bringing unique expertise and passion to every project.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-navy to-primary-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-inter font-bold text-xl">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="font-inter font-bold text-lg mb-2 text-neutral-charcoal">
                  {member.name}
                </h3>
                <p className="text-primary-blue font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-neutral-charcoal text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
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
              Ready to Work Together?
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}