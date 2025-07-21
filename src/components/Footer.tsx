'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Github,
  Facebook,
  Instagram,
  ExternalLink
} from 'lucide-react'

const footerLinks = {
  services: [
    { name: 'Full-Stack Development', href: '/services#web-development' },
    { name: 'Flutter Mobile Apps', href: '/services#mobile-development' },
    { name: 'AI Automation', href: '/services#ai-automation' },
    { name: 'SEO Optimization', href: '/services#seo-optimization' },
    { name: 'Digital Transformation', href: '/services#digital-transformation' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Process', href: '/#process' },
    { name: 'Case Studies', href: '/#case-studies' },
    { name: 'Testimonials', href: '/#testimonials' },
    { name: 'Careers', href: '/careers' },
  ],
  resources: [
    { name: 'Blog', href: '/#blog' },
    { name: 'Resource Center', href: '/#resources' },
    { name: 'Project Calculator', href: '/calculator' },
    { name: 'Free Consultation', href: '/consultation' },
    { name: 'Contact Support', href: '/contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'GDPR Compliance', href: '/gdpr' },
  ]
}

const socialLinks = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/stacksolutions', icon: Linkedin },
  { name: 'Twitter', href: 'https://twitter.com/stacksolutions', icon: Twitter },
  { name: 'GitHub', href: 'https://github.com/stacksolutions', icon: Github },
  { name: 'Facebook', href: 'https://facebook.com/stacksolutions', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/stacksolutions', icon: Instagram },
]

const industries = [
  'Healthcare', 'E-commerce', 'Finance', 'Education', 'Real Estate', 
  'Logistics', 'Entertainment', 'Manufacturing', 'Non-profit', 'Government'
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-navy to-primary-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-inter font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-2xl font-inter font-bold text-white">
                  Stack<span className="text-primary-blue">Solutions</span>
                </span>
              </div>
            </Link>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              We transform businesses through innovative technology solutions. From startups to Fortune 500 companies, 
              we've helped over 50 businesses achieve remarkable growth with cutting-edge development services.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-primary-blue" />
                <Link href="tel:+1-555-123-4567" className="text-gray-300 hover:text-white transition-colors">
                  +1 (555) 123-4567
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-primary-blue" />
                <Link href="mailto:hello@stacksolutions.dev" className="text-gray-300 hover:text-white transition-colors">
                  hello@stacksolutions.dev
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={16} className="text-primary-blue" />
                <span className="text-gray-300">123 Tech Street, Innovation District, CA 90210</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-primary-blue rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon size={18} className="text-gray-300 group-hover:text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-inter font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-inter font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-inter font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors flex items-center group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <h3 className="text-lg font-inter font-bold mb-4">Industries We Serve</h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-primary-blue hover:text-white transition-colors cursor-pointer"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-600">
          <div className="max-w-md">
            <h3 className="text-lg font-inter font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get weekly insights, industry trends, and exclusive resources delivered to your inbox.
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 text-white rounded-lg focus:ring-2 focus:ring-primary-blue focus:outline-none placeholder-gray-400"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-accent-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <span>Subscribe</span>
                <ArrowRight size={16} />
              </motion.button>
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Join 1,000+ professionals. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-600">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} StackSolutions. All rights reserved. Built with ❤️ using Next.js & Tailwind CSS.
            </div>

            {/* Legal Links */}
            <div className="flex space-x-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-white text-sm transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Certifications/Badges */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">A</span>
                </div>
                <span>WCAG 2.1 AA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-accent-orange hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors z-40"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <ArrowRight size={20} className="rotate-[-90deg]" />
      </motion.button>
    </footer>
  )
}