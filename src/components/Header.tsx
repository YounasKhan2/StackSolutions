'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navigation = [
    { name: 'Home', href: '/' },
    {
        name: 'Services',
        href: '/services',
        dropdown: [
            { name: 'Full-Stack Development', href: '/services#web-development' },
            { name: 'Flutter Mobile Apps', href: '/services#mobile-development' },
            { name: 'AI Automation', href: '/services#ai-automation' },
            { name: 'SEO Optimization', href: '/services#seo-optimization' },
        ]
    },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '#blog' },
]

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const isActive = (href: string) => {
        if (href === '/') return pathname === '/'
        return pathname.startsWith(href)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 bg-gradient-to-br from-primary-navy to-primary-blue rounded-lg flex items-center justify-center">
                            <span className="text-white font-inter font-bold text-lg">S</span>
                        </div>
                        <div className="hidden sm:block">
                            <span className="text-xl font-inter font-bold text-primary-navy">
                                Stack<span className="text-primary-blue">Solutions</span>
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative">
                                {item.dropdown ? (
                                    <div
                                        className="relative"
                                        onMouseEnter={() => setActiveDropdown(item.name)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        <button className={`flex items-center space-x-1 px-3 py-2 rounded-lg font-semibold transition-colors ${isActive(item.href)
                                                ? 'text-primary-blue bg-blue-50'
                                                : 'text-neutral-charcoal hover:text-primary-blue hover:bg-gray-50'
                                            }`}>
                                            <span>{item.name}</span>
                                            <ChevronDown size={16} className={`transition-transform ${activeDropdown === item.name ? 'rotate-180' : ''
                                                }`} />
                                        </button>

                                        <AnimatePresence>
                                            {activeDropdown === item.name && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2"
                                                >
                                                    {item.dropdown.map((dropdownItem) => (
                                                        <Link
                                                            key={dropdownItem.name}
                                                            href={dropdownItem.href}
                                                            className="block px-4 py-3 text-neutral-charcoal hover:text-primary-blue hover:bg-gray-50 transition-colors"
                                                        >
                                                            {dropdownItem.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className={`px-3 py-2 rounded-lg font-semibold transition-colors ${isActive(item.href)
                                                ? 'text-primary-blue bg-blue-50'
                                                : 'text-neutral-charcoal hover:text-primary-blue hover:bg-gray-50'
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* CTA Buttons */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <Link
                            href="tel:+1-555-123-4567"
                            className="flex items-center space-x-2 text-neutral-charcoal hover:text-primary-blue transition-colors"
                        >
                            <Phone size={16} />
                            <span className="text-sm font-semibold">+1 (555) 123-4567</span>
                        </Link>
                        <Link
                            href="/consultation"
                            className="bg-accent-orange hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                        >
                            <span>Free Consultation</span>
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden p-2 rounded-lg text-neutral-charcoal hover:text-primary-blue hover:bg-gray-50 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="lg:hidden bg-white border-t border-gray-100 py-4"
                        >
                            <nav className="space-y-2">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`block px-4 py-3 rounded-lg font-semibold transition-colors ${isActive(item.href)
                                                    ? 'text-primary-blue bg-blue-50'
                                                    : 'text-neutral-charcoal hover:text-primary-blue hover:bg-gray-50'
                                                }`}
                                        >
                                            {item.name}
                                        </Link>
                                        {item.dropdown && (
                                            <div className="ml-4 mt-2 space-y-1">
                                                {item.dropdown.map((dropdownItem) => (
                                                    <Link
                                                        key={dropdownItem.name}
                                                        href={dropdownItem.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="block px-4 py-2 text-sm text-neutral-charcoal hover:text-primary-blue hover:bg-gray-50 rounded-lg transition-colors"
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* Mobile CTA */}
                            <div className="mt-6 pt-6 border-t border-gray-100 space-y-3">
                                <Link
                                    href="tel:+1-555-123-4567"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center space-x-2 px-4 py-3 text-neutral-charcoal hover:text-primary-blue transition-colors"
                                >
                                    <Phone size={16} />
                                    <span className="font-semibold">+1 (555) 123-4567</span>
                                </Link>
                                <Link
                                    href="mailto:hello@stacksolutions.dev"
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center space-x-2 px-4 py-3 text-neutral-charcoal hover:text-primary-blue transition-colors"
                                >
                                    <Mail size={16} />
                                    <span className="font-semibold">hello@stacksolutions.dev</span>
                                </Link>
                                <Link
                                    href="/consultation"
                                    onClick={() => setIsOpen(false)}
                                    className="mx-4 bg-accent-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                                >
                                    <span>Free Consultation</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    )
}