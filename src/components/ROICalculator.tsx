'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calculator, TrendingUp, DollarSign, Clock, Zap } from 'lucide-react'

interface ROIData {
  currentRevenue: number
  teamSize: number
  hourlyRate: number
  inefficiencyHours: number
  projectType: string
}

interface ROIResults {
  costOfInefficiency: number
  potentialSavings: number
  revenueIncrease: number
  roiPercentage: number
  paybackMonths: number
}

const projectMultipliers = {
  'web-app': { efficiency: 1.2, revenue: 1.15, cost: 25000 },
  'mobile-app': { efficiency: 1.3, revenue: 1.25, cost: 35000 },
  'ai-automation': { efficiency: 2.5, revenue: 1.4, cost: 45000 },
  'ecommerce': { efficiency: 1.4, revenue: 1.35, cost: 40000 },
  'enterprise': { efficiency: 1.8, revenue: 1.3, cost: 75000 }
}

export default function ROICalculator() {
  const [roiData, setROIData] = useState<ROIData>({
    currentRevenue: 1000000,
    teamSize: 10,
    hourlyRate: 75,
    inefficiencyHours: 20,
    projectType: 'web-app'
  })

  const [results, setResults] = useState<ROIResults | null>(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const calculateROI = () => {
    setIsCalculating(true)
    
    // Simulate calculation delay for better UX
    setTimeout(() => {
      const multiplier = projectMultipliers[roiData.projectType as keyof typeof projectMultipliers]
      
      // Calculate current inefficiency cost
      const weeklyInefficiencyCost = roiData.inefficiencyHours * roiData.hourlyRate * roiData.teamSize
      const annualInefficiencyCost = weeklyInefficiencyCost * 52
      
      // Calculate potential improvements
      const efficiencyImprovement = multiplier.efficiency
      const revenueImprovement = multiplier.revenue
      const projectCost = multiplier.cost
      
      // Calculate savings and revenue increase
      const potentialSavings = annualInefficiencyCost * (efficiencyImprovement - 1)
      const revenueIncrease = roiData.currentRevenue * (revenueImprovement - 1)
      
      // Calculate ROI
      const totalBenefit = potentialSavings + revenueIncrease
      const roiPercentage = ((totalBenefit - projectCost) / projectCost) * 100
      const paybackMonths = (projectCost / (totalBenefit / 12))
      
      setResults({
        costOfInefficiency: annualInefficiencyCost,
        potentialSavings,
        revenueIncrease,
        roiPercentage,
        paybackMonths
      })
      
      setIsCalculating(false)
    }, 1500)
  }

  useEffect(() => {
    calculateROI()
  }, [roiData])

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-background-light to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-semibold mb-4">
            Signature Tool
          </span>
          <h2 className="text-4xl md:text-5xl font-poppins font-bold text-neutral-charcoal mb-6">
            True ROI Calculator
          </h2>
          <p className="text-xl text-neutral-charcoal max-w-3xl mx-auto leading-relaxed">
            Discover the real cost of inefficient development and calculate your potential ROI with StackSolutions.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <Calculator className="text-primary-blue mr-3" size={32} />
              <h3 className="text-2xl font-poppins font-bold text-neutral-charcoal">
                Your Current Situation
              </h3>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
                  Annual Revenue
                </label>
                <input
                  type="number"
                  value={roiData.currentRevenue}
                  onChange={(e) => setROIData(prev => ({ ...prev, currentRevenue: Number(e.target.value) }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                  placeholder="1000000"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
                  Development Team Size
                </label>
                <input
                  type="number"
                  value={roiData.teamSize}
                  onChange={(e) => setROIData(prev => ({ ...prev, teamSize: Number(e.target.value) }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                  placeholder="10"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
                  Average Hourly Rate ($)
                </label>
                <input
                  type="number"
                  value={roiData.hourlyRate}
                  onChange={(e) => setROIData(prev => ({ ...prev, hourlyRate: Number(e.target.value) }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                  placeholder="75"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
                  Weekly Hours Lost to Inefficiency
                </label>
                <input
                  type="number"
                  value={roiData.inefficiencyHours}
                  onChange={(e) => setROIData(prev => ({ ...prev, inefficiencyHours: Number(e.target.value) }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                  placeholder="20"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-neutral-charcoal mb-2">
                  Project Type
                </label>
                <select
                  value={roiData.projectType}
                  onChange={(e) => setROIData(prev => ({ ...prev, projectType: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent outline-none"
                >
                  <option value="web-app">Web Application</option>
                  <option value="mobile-app">Mobile App</option>
                  <option value="ai-automation">AI Automation</option>
                  <option value="ecommerce">E-commerce Platform</option>
                  <option value="enterprise">Enterprise System</option>
                </select>
              </div>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gradient-to-br from-primary-navy to-primary-blue text-white p-8 rounded-xl shadow-lg"
          >
            <div className="flex items-center mb-6">
              <TrendingUp className="text-accent-orange mr-3" size={32} />
              <h3 className="text-2xl font-poppins font-bold">
                Your ROI Potential
              </h3>
            </div>

            {isCalculating ? (
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-accent-orange border-t-transparent"></div>
                <span className="ml-4 text-lg">Calculating your ROI...</span>
              </div>
            ) : results ? (
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <DollarSign className="text-red-400 mr-2" size={20} />
                    <span className="text-sm opacity-80">Annual Cost of Inefficiency</span>
                  </div>
                  <div className="text-2xl font-bold text-red-400">
                    {formatCurrency(results.costOfInefficiency)}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Zap className="text-green-400 mr-2" size={20} />
                    <span className="text-sm opacity-80">Potential Annual Savings</span>
                  </div>
                  <div className="text-2xl font-bold text-green-400">
                    {formatCurrency(results.potentialSavings)}
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="text-accent-orange mr-2" size={20} />
                    <span className="text-sm opacity-80">Revenue Increase Potential</span>
                  </div>
                  <div className="text-2xl font-bold text-accent-orange">
                    {formatCurrency(results.revenueIncrease)}
                  </div>
                </div>

                <div className="bg-accent-orange/20 p-4 rounded-lg border border-accent-orange/30">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent-orange mb-2">
                      {results.roiPercentage.toFixed(0)}% ROI
                    </div>
                    <div className="text-sm opacity-80">
                      Payback in {results.paybackMonths.toFixed(1)} months
                    </div>
                  </div>
                </div>

                <div className="text-center pt-4">
                  <motion.a
                    href="/consultation"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block bg-accent-orange hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Get Your Custom ROI Analysis
                  </motion.a>
                </div>
              </div>
            ) : null}
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-2xl mx-auto">
            <h4 className="font-poppins font-semibold text-lg text-neutral-charcoal mb-3">
              Why This Calculator is Different
            </h4>
            <p className="text-neutral-charcoal text-sm leading-relaxed">
              Unlike generic ROI calculators, this tool factors in real inefficiency costs, 
              technology-specific improvements, and actual business impact metrics from our 50+ completed projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}