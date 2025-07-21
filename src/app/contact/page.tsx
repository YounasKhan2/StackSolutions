'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ContactForm from '@/components/ContactForm'

const contactMethods = [
    {
        icon: Mail,
        title: "Email Us",
        description: "Get in touch via email for detailed discussions",
        contact: "hello@stacksolutions.dev",
        action: "Send Email"
    },
    {
        icon: Phone,
        title: "Call Us",
        description: "Speak directly with our team",
        contact: "+1 (555) 123-4567",
        action: "Call Now"
    },
    {
        icon: MessageSquare,
        title: "Live Chat",
        description: "Quick questions? Chat with us instantly",
        contact: "Available 9 AM - 6 PM EST",
        action: "Start Chat"
    },
    {
        icon: MapPin,
        title: "Visit Us",
        description: "Meet us at our office",
        contact: "123 Tech Street, Innovation District",
        action: "Get Directions"
    }
]

const officeHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM EST" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM EST" },
    { day: "Sunday", hours: "Closed" }
]

// Zod validation schema
const contactFormSchema = z.object({
    firstName: z.string().min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().optional(),
    projectType: z.string().min(1, "Please select a project type"),
    budget: z.string().min(1, "Please select a budget range"),
    description: z.string().min(10, "Please provide at least 10 characters describing your project")
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)
        setSubmitStatus('idle')
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000))
            
            console.log('Form submitted:', data)
            setSubmitStatus('success')
            reset()
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

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
                            Get In Touch
                        </h1>
                        <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
                            Ready to start your project? We'd love to hear from you.
                            Choose the contact method that works best for you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Methods */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
                        {contactMethods.map((method, index) => (
                            <motion.div
                                key={method.title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow text-center"
                            >
                                <method.icon className="text-primary-blue mx-auto mb-4" size={40} />
                                <h3 className="font-inter font-bold text-lg mb-2 text-neutral-charcoal">
                                    {method.title}
                                </h3>
                                <p className="text-neutral-charcoal text-sm mb-4">
                                    {method.description}
                                </p>
                                <p className="font-semibold text-neutral-charcoal mb-4">
                                    {method.contact}
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-primary-navy hover:bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                                >
                                    {method.action}
                                </motion.button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-white p-8 rounded-xl shadow-lg"
                        >
                            <h2 className="text-3xl font-inter font-bold text-neutral-charcoal mb-6">
                                Send Us a Message
                            </h2>
                            {/* Success Message */}
                            {submitStatus === 'success' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                                >
                                    <CheckCircle className="text-green-600" size={20} />
                                    <p className="text-green-800 font-semibold">
                                        Thank you! Your message has been sent successfully. We'll get back to you within 2-4 hours.
                                    </p>
                                </motion.div>
                            )}

                            {/* Error Message */}
                            {submitStatus === 'error' && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3"
                                >
                                    <AlertCircle className="text-red-600" size={20} />
                                    <p className="text-red-800 font-semibold">
                                        Sorry, there was an error sending your message. Please try again or contact us directly.
                                    </p>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
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
                                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                                        )}
                                    </div>
                                </div>

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
                                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                                    )}
                                </div>

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
                                        Project Type *
                                    </label>
                                    <select
                                        {...register('projectType')}
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none transition-colors ${
                                            errors.projectType ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    >
                                        <option value="">Select a service</option>
                                        <option value="full-stack">Full-Stack Web Development</option>
                                        <option value="flutter">Flutter Mobile App</option>
                                        <option value="ai-automation">AI Automation</option>
                                        <option value="seo">SEO Optimization</option>
                                        <option value="digital-transformation">Digital Transformation</option>
                                        <option value="other">Other</option>
                                    </select>
                                    {errors.projectType && (
                                        <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
                                    )}
                                </div>

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
                                        <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                                    )}
                                </div>

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
                                        <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>
                                    )}
                                </div>

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
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl font-inter font-bold text-neutral-charcoal mb-6">
                                    Let's Start a Conversation
                                </h2>
                                <p className="text-lg text-neutral-charcoal leading-relaxed mb-8">
                                    We're here to help bring your ideas to life. Whether you have a detailed project plan
                                    or just a concept, we'd love to discuss how we can work together to achieve your goals.
                                </p>
                            </div>

                            {/* Office Hours */}
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <div className="flex items-center mb-4">
                                    <Clock className="text-primary-blue mr-3" size={24} />
                                    <h3 className="font-inter font-bold text-lg text-neutral-charcoal">
                                        Office Hours
                                    </h3>
                                </div>
                                <div className="space-y-2">
                                    {officeHours.map((schedule, index) => (
                                        <div key={index} className="flex justify-between">
                                            <span className="text-neutral-charcoal">{schedule.day}</span>
                                            <span className="font-semibold text-neutral-charcoal">{schedule.hours}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Response Time */}
                            <div className="bg-primary-navy text-white p-6 rounded-xl">
                                <h3 className="font-inter font-bold text-lg mb-3">
                                    Quick Response Guarantee
                                </h3>
                                <p className="opacity-90">
                                    We typically respond to all inquiries within 2-4 hours during business hours.
                                    For urgent matters, don't hesitate to call us directly.
                                </p>
                            </div>

                            {/* FAQ Link */}
                            <div className="bg-gray-100 p-6 rounded-xl">
                                <h3 className="font-inter font-bold text-lg text-neutral-charcoal mb-3">
                                    Have Questions?
                                </h3>
                                <p className="text-neutral-charcoal mb-4">
                                    Check out our frequently asked questions or schedule a free consultation call.
                                </p>
                                <div className="flex gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="bg-primary-navy hover:bg-primary-blue text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                                    >
                                        View FAQ
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="border-2 border-primary-navy text-primary-navy hover:bg-primary-navy hover:text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                                    >
                                        Book Consultation
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </main>
    )
}