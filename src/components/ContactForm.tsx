'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Send, CheckCircle, AlertCircle, Loader } from 'lucide-react'

// Validation schema
const contactSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  description: z.string().min(20, 'Please provide at least 20 characters describing your project'),
  timeline: z.string().optional(),
  company: z.string().optional()
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  onSuccess?: () => void
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data)
      
      setSubmitStatus('success')
      reset()
      onSuccess?.()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-3xl font-inter font-bold text-neutral-charcoal mb-6">
        Send Us a Message
      </h2>
      
      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
        >
          <CheckCircle className="text-green-600 mr-3" size={20} />
          <div>
            <p className="text-green-800 font-semibold">Message sent successfully!</p>
            <p className="text-green-700 text-sm">We'll get back to you within 2-4 hours.</p>
          </div>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center"
        >
          <AlertCircle className="text-red-600 mr-3" size={20} />
          <div>
            <p className="text-red-800 font-semibold">Failed to send message</p>
            <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Fields */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              First Name *
            </label>
            <input 
              {...register('firstName')}
              type="text" 
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
                errors.firstName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John"
            />
            {errors.firstName && (
              <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              Last Name *
            </label>
            <input 
              {...register('lastName')}
              type="text" 
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
                errors.lastName ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>
            )}
          </div>
        </div>
        
        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
            Email Address *
          </label>
          <input 
            {...register('email')}
            type="email" 
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
              errors.email ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="john@example.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Phone and Company */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              Phone Number
            </label>
            <input 
              {...register('phone')}
              type="tel" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors"
              placeholder="+1 (555) 123-4567"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              Company
            </label>
            <input 
              {...register('company')}
              type="text" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors"
              placeholder="Your Company"
            />
          </div>
        </div>
        
        {/* Project Type */}
        <div>
          <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
            Project Type *
          </label>
          <select 
            {...register('projectType')}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
              errors.projectType ? 'border-red-500' : 'border-gray-300'
            }`}
          >
            <option value="">Select a service</option>
            <option value="web">Full-Stack Web Development</option>
            <option value="mobile">Flutter Mobile App</option>
            <option value="ai">AI Automation</option>
            <option value="seo">SEO Optimization</option>
            <option value="ecommerce">E-commerce Platform</option>
            <option value="enterprise">Enterprise System</option>
            <option value="other">Other</option>
          </select>
          {errors.projectType && (
            <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
          )}
        </div>

        {/* Budget and Timeline */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              Project Budget *
            </label>
            <select 
              {...register('budget')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
                errors.budget ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select budget range</option>
              <option value="5k-15k">$5,000 - $15,000</option>
              <option value="15k-30k">$15,000 - $30,000</option>
              <option value="30k-50k">$30,000 - $50,000</option>
              <option value="50k+">$50,000+</option>
              <option value="discuss">Let's discuss</option>
            </select>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              Preferred Timeline
            </label>
            <select 
              {...register('timeline')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors"
            >
              <option value="">Select timeline</option>
              <option value="asap">ASAP</option>
              <option value="1-2months">1-2 months</option>
              <option value="3-6months">3-6 months</option>
              <option value="6months+">6+ months</option>
              <option value="flexible">Flexible</option>
            </select>
          </div>
        </div>
        
        {/* Description */}
        <div>
          <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
            Project Description *
          </label>
          <textarea 
            {...register('description')}
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors resize-vertical ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Tell us about your project, goals, and requirements..."
          />
          {errors.description && (
            <p className="mt-1 text-sm text-red-600">{errors.description.message}</p>
          )}
        </div>
        
        {/* Submit Button */}
        <motion.button 
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full py-4 rounded-lg font-semibold text-lg flex items-center justify-center gap-2 transition-colors ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-accent-orange hover:bg-orange-600 text-white'
          }`}
        >
          {isSubmitting ? (
            <>
              <Loader className="animate-spin" size={20} />
              Sending Message...
            </>
          ) : (
            <>
              <Send size={20} />
              Send Message
            </>
          )}
        </motion.button>
      </form>
    </div>
  )
}