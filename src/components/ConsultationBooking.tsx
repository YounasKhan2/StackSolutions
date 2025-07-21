'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Calendar, Clock, User, Mail, Phone, CheckCircle, AlertCircle, Video } from 'lucide-react'

// Validation schema
const bookingSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  company: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  budget: z.string().min(1, 'Please select a budget range'),
  preferredDate: z.string().min(1, 'Please select a preferred date'),
  preferredTime: z.string().min(1, 'Please select a preferred time'),
  meetingType: z.enum(['video', 'phone', 'in-person']),
  message: z.string().optional()
})

type BookingFormData = z.infer<typeof bookingSchema>

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
]

const projectTypes = [
  'Web Application',
  'Mobile App (Flutter)',
  'E-commerce Platform',
  'AI/Automation Solution',
  'SEO Optimization',
  'Digital Transformation',
  'Other'
]

const budgetRanges = [
  '$5,000 - $15,000',
  '$15,000 - $30,000',
  '$30,000 - $50,000',
  '$50,000+',
  'Let\'s discuss'
]

const meetingTypes = [
  { id: 'video', name: 'Video Call', icon: Video, description: 'Google Meet or Zoom' },
  { id: 'phone', name: 'Phone Call', icon: Phone, description: 'Traditional phone call' },
  { id: 'in-person', name: 'In-Person', icon: User, description: 'At our office or yours' }
]

export default function ConsultationBooking() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema)
  })

  const selectedMeetingType = watch('meetingType')

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Here you would typically send the data to your booking system
      console.log('Consultation booked:', data)
      
      setSubmitStatus('success')
      reset()
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Generate next 30 days for date selection
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          value: date.toISOString().split('T')[0],
          label: date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'short', 
            day: 'numeric' 
          })
        })
      }
    }
    
    return dates
  }

  const availableDates = getAvailableDates()

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Calendar className="text-primary-blue mr-3" size={32} />
        <h2 className="text-3xl font-inter font-bold text-neutral-charcoal">
          Book Free Consultation
        </h2>
      </div>
      
      <p className="text-neutral-charcoal mb-8 leading-relaxed">
        Schedule a free 30-minute consultation to discuss your project requirements, 
        get expert advice, and receive a detailed proposal.
      </p>

      {submitStatus === 'success' && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center"
        >
          <CheckCircle className="text-green-600 mr-3" size={20} />
          <div>
            <p className="text-green-800 font-semibold">Consultation booked successfully!</p>
            <p className="text-green-700 text-sm">We'll send you a calendar invite and meeting details shortly.</p>
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
            <p className="text-red-800 font-semibold">Failed to book consultation</p>
            <p className="text-red-700 text-sm">Please try again or contact us directly.</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              Full Name *
            </label>
            <input 
              {...register('name')}
              type="text" 
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
                errors.name ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
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

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 gap-4">
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
          
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              Phone Number *
            </label>
            <input 
              {...register('phone')}
              type="tel" 
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
                errors.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
        </div>

        {/* Project Information */}
        <div className="grid md:grid-cols-2 gap-4">
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
              <option value="">Select project type</option>
              {projectTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.projectType && (
              <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              Budget Range *
            </label>
            <select 
              {...register('budget')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
                errors.budget ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select budget range</option>
              {budgetRanges.map(range => (
                <option key={range} value={range}>{range}</option>
              ))}
            </select>
            {errors.budget && (
              <p className="mt-1 text-sm text-red-600">{errors.budget.message}</p>
            )}
          </div>
        </div>

        {/* Meeting Type */}
        <div>
          <label className="block text-sm font-semibold text-neutral-charcoal mb-4">
            Meeting Type *
          </label>
          <div className="grid md:grid-cols-3 gap-4">
            {meetingTypes.map((type) => (
              <label key={type.id} className="cursor-pointer">
                <input
                  {...register('meetingType')}
                  type="radio"
                  value={type.id}
                  className="sr-only"
                />
                <div className={`p-4 border-2 rounded-lg transition-colors ${
                  selectedMeetingType === type.id
                    ? 'border-primary-blue bg-blue-50'
                    : 'border-gray-200 hover:border-primary-blue'
                }`}>
                  <type.icon className={`mb-2 ${
                    selectedMeetingType === type.id ? 'text-primary-blue' : 'text-neutral-charcoal'
                  }`} size={24} />
                  <div className="font-semibold text-neutral-charcoal">{type.name}</div>
                  <div className="text-sm text-gray-500">{type.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Date and Time Selection */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              Preferred Date *
            </label>
            <select 
              {...register('preferredDate')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
                errors.preferredDate ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select date</option>
              {availableDates.map(date => (
                <option key={date.value} value={date.value}>{date.label}</option>
              ))}
            </select>
            {errors.preferredDate && (
              <p className="mt-1 text-sm text-red-600">{errors.preferredDate.message}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
              Preferred Time *
            </label>
            <select 
              {...register('preferredTime')}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
                errors.preferredTime ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select time</option>
              {timeSlots.map(time => (
                <option key={time} value={time}>{time} EST</option>
              ))}
            </select>
            {errors.preferredTime && (
              <p className="mt-1 text-sm text-red-600">{errors.preferredTime.message}</p>
            )}
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
            Additional Information
          </label>
          <textarea 
            {...register('message')}
            rows={4}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors resize-vertical"
            placeholder="Tell us more about your project or any specific questions you have..."
          />
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
              <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
              Booking Consultation...
            </>
          ) : (
            <>
              <Calendar size={20} />
              Book Free Consultation
            </>
          )}
        </motion.button>
      </form>

      {/* Additional Info */}
      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-neutral-charcoal mb-2">What to expect:</h4>
        <ul className="text-sm text-neutral-charcoal space-y-1">
          <li>• 30-minute consultation with our technical experts</li>
          <li>• Discussion of your project requirements and goals</li>
          <li>• Technical recommendations and best practices</li>
          <li>• Detailed project proposal and timeline</li>
          <li>• No obligation - completely free consultation</li>
        </ul>
      </div>
    </div>
  )
}