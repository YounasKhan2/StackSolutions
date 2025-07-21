'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ConsultationBooking from '@/components/ConsultationBooking'
import { Calendar, Users, Clock, CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Choose from available time slots that work best for your schedule"
  },
  {
    icon: Users,
    title: "Expert Consultation",
    description: "Meet with our experienced technical team and project managers"
  },
  {
    icon: Clock,
    title: "30-minute Session",
    description: "Focused discussion about your project requirements and goals"
  },
  {
    icon: CheckCircle,
    title: "No Obligation",
    description: "Completely free consultation with no strings attached"
  }
]

export default function ConsultationPage() {
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
              Free Consultation
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Schedule a free 30-minute consultation with our experts to discuss your project, 
              get technical advice, and receive a detailed proposal.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
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

      {/* Booking Form Section */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <ConsultationBooking />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-inter font-bold text-neutral-charcoal mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-neutral-charcoal mb-2">
                  What happens during the consultation?
                </h4>
                <p className="text-neutral-charcoal">
                  We'll discuss your project requirements, technical challenges, timeline, and budget. 
                  Our experts will provide recommendations and answer any questions you have.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-neutral-charcoal mb-2">
                  Is there really no cost or obligation?
                </h4>
                <p className="text-neutral-charcoal">
                  Absolutely! The consultation is completely free with no strings attached. 
                  We believe in providing value upfront and building relationships based on trust.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-neutral-charcoal mb-2">
                  What should I prepare for the consultation?
                </h4>
                <p className="text-neutral-charcoal">
                  Come with your project ideas, any existing documentation, and questions about 
                  technology, timeline, or budget. The more details you can share, the better we can help.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-neutral-charcoal mb-2">
                  Can I reschedule if needed?
                </h4>
                <p className="text-neutral-charcoal">
                  Yes, we understand schedules change. You can reschedule your consultation 
                  by contacting us at least 24 hours in advance.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}