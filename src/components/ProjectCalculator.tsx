'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Clock, DollarSign, ArrowRight } from 'lucide-react'

interface ProjectData {
  type: string
  complexity: string
  features: string[]
}

interface EstimateResult {
  minCost: number
  maxCost: number
  minWeeks: number
  maxWeeks: number
  confidence: string
}

const projectTypes = [
  { id: 'web', name: 'Web Application', multiplier: 1.0 },
  { id: 'mobile', name: 'Mobile App (Flutter)', multiplier: 1.2 },
  { id: 'ecommerce', name: 'E-commerce Platform', multiplier: 1.5 },
  { id: 'ai', name: 'AI/Automation Solution', multiplier: 1.8 },
  { id: 'enterprise', name: 'Enterprise System', multiplier: 2.0 }
]

const complexityLevels = [
  { id: 'simple', name: 'Simple', multiplier: 1.0, description: 'Basic functionality, standard design' },
  { id: 'moderate', name: 'Moderate', multiplier: 1.5, description: 'Custom features, integrations' },
  { id: 'complex', name: 'Complex', multiplier: 2.0, description: 'Advanced features, multiple integrations' },
  { id: 'enterprise', name: 'Enterprise', multiplier: 3.0, description: 'Highly complex, scalable architecture' }
]

const availableFeatures = [
  { id: 'auth', name: 'User Authentication', cost: 2000, weeks: 1 },
  { id: 'payment', name: 'Payment Integration', cost: 3000, weeks: 2 },
  { id: 'admin', name: 'Admin Dashboard', cost: 4000, weeks: 2 },
  { id: 'api', name: 'REST API', cost: 3500, weeks: 2 },
  { id: 'realtime', name: 'Real-time Features', cost: 5000, weeks: 3 },
  { id: 'analytics', name: 'Analytics Integration', cost: 2500, weeks: 1 }
]

export default function ProjectCalculator() {
  const [projectData, setProjectData] = useState<ProjectData>({
    type: '',
    complexity: '',
    features: []
  })
  
  const [estimate, setEstimate] = useState<EstimateResult | null>(null)

  const calculateEstimate = () => {
    const baseProject = projectTypes.find(p => p.id === projectData.type)
    const complexity = complexityLevels.find(c => c.id === projectData.complexity)
    
    if (!baseProject || !complexity) return

    // Base costs
    let baseCost = 15000
    let baseWeeks = 6

    // Apply multipliers
    baseCost *= baseProject.multiplier * complexity.multiplier
    baseWeeks *= baseProject.multiplier * complexity.multiplier

    // Add feature costs
    const selectedFeatures = availableFeatures.filter(f => projectData.features.includes(f.id))
    const featureCost = selectedFeatures.reduce((sum, f) => sum + f.cost, 0)
    const featureWeeks = selectedFeatures.reduce((sum, f) => sum + f.weeks, 0)

    baseCost += featureCost
    baseWeeks += featureWeeks

    // Calculate range (±20%)
    const minCost = Math.round(baseCost * 0.8)
    const maxCost = Math.round(baseCost * 1.2)
    const minWeeks = Math.round(baseWeeks * 0.8)
    const maxWeeks = Math.round(baseWeeks * 1.2)

    // Determine confidence
    let confidence = 'high'
    if (projectData.features.length > 3 || complexity.id === 'enterprise') {
      confidence = 'medium'
    }
    if (projectData.type === 'ai' || projectData.features.length > 5) {
      confidence = 'low'
    }

    setEstimate({ minCost, maxCost, minWeeks, maxWeeks, confidence })
  }

  const handleFeatureToggle = (featureId: string) => {
    setProjectData(prev => ({
      ...prev,
      features: prev.features.includes(featureId)
        ? prev.features.filter(f => f !== featureId)
        : [...prev.features, featureId]
    }))
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Calculate estimate when data changes
  React.useEffect(() => {
    if (projectData.type && projectData.complexity) {
      calculateEstimate()
    }
  }, [projectData])

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <Calculator className="text-primary-blue mr-3" size={32} />
        <h2 className="text-3xl font-inter font-bold text-neutral-charcoal">
          Project Cost Calculator
        </h2>
      </div>
      
      <p className="text-neutral-charcoal mb-8 leading-relaxed">
        Get an instant estimate for your project. This calculator provides approximate costs and timelines based on your requirements.
      </p>

      <div className="space-y-8">
        {/* Project Type */}
        <div>
          <label className="block text-lg font-semibold text-neutral-charcoal mb-4">
            What type of project do you need?
          </label>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {projectTypes.map((type) => (
              <motion.button
                key={type.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setProjectData(prev => ({ ...prev, type: type.id }))}
                className={`p-4 rounded-lg border-2 text-left transition-colors ${
                  projectData.type === type.id
                    ? 'border-primary-blue bg-blue-50 text-primary-blue'
                    : 'border-gray-200 hover:border-primary-blue'
                }`}
              >
                <div className="font-semibold">{type.name}</div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Complexity Level */}
        {projectData.type && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <label className="block text-lg font-semibold text-neutral-charcoal mb-4">
              What's the complexity level?
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              {complexityLevels.map((level) => (
                <motion.button
                  key={level.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setProjectData(prev => ({ ...prev, complexity: level.id }))}
                  className={`p-4 rounded-lg border-2 text-left transition-colors ${
                    projectData.complexity === level.id
                      ? 'border-primary-blue bg-blue-50 text-primary-blue'
                      : 'border-gray-200 hover:border-primary-blue'
                  }`}
                >
                  <div className="font-semibold mb-1">{level.name}</div>
                  <div className="text-sm opacity-75">{level.description}</div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Features */}
        {projectData.complexity && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label className="block text-lg font-semibold text-neutral-charcoal mb-4">
              Select additional features (optional)
            </label>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {availableFeatures.map((feature) => (
                <motion.button
                  key={feature.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleFeatureToggle(feature.id)}
                  className={`p-3 rounded-lg border-2 text-left transition-colors ${
                    projectData.features.includes(feature.id)
                      ? 'border-primary-blue bg-blue-50 text-primary-blue'
                      : 'border-gray-200 hover:border-primary-blue'
                  }`}
                >
                  <div className="font-semibold text-sm">{feature.name}</div>
                  <div className="text-xs opacity-75">
                    +{formatCurrency(feature.cost)} • {feature.weeks}w
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* Results */}
        {estimate && projectData.type && projectData.complexity && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-primary-navy to-primary-blue text-white p-6 rounded-xl"
          >
            <h3 className="text-xl font-inter font-bold mb-4">Estimated Project Cost</h3>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-center">
                <DollarSign className="mr-3" size={24} />
                <div>
                  <div className="text-sm opacity-75">Investment Range</div>
                  <div className="text-2xl font-bold">
                    {formatCurrency(estimate.minCost)} - {formatCurrency(estimate.maxCost)}
                  </div>
                </div>
              </div>
              
              <div className="flex items-center">
                <Clock className="mr-3" size={24} />
                <div>
                  <div className="text-sm opacity-75">Timeline</div>
                  <div className="text-2xl font-bold">
                    {estimate.minWeeks} - {estimate.maxWeeks} weeks
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <div className="text-sm opacity-75 mb-2">Confidence Level</div>
              <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                estimate.confidence === 'high' ? 'bg-green-500' :
                estimate.confidence === 'medium' ? 'bg-yellow-500' : 'bg-orange-500'
              }`}>
                {estimate.confidence.toUpperCase()}
              </div>
            </div>

            <div className="text-sm opacity-90 mb-6">
              * This is an estimated range. Final pricing depends on detailed requirements, design complexity, and specific integrations needed.
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-accent-orange hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
            >
              Get Detailed Quote <ArrowRight size={20} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}