// components/Features.tsx
'use client'
import { motion } from 'framer-motion'
import { Wifi, BarChart3, Lock, Zap, Package, Users } from 'lucide-react'

const features = [
  {
    icon: <Wifi className="w-10 h-10 text-wareflow-secondary mb-4" />,
    title: 'Real-Time RFID Tracking',
    description: 'Monitor your inventory movement instantly with advanced RFID technology.',
  },
  {
    icon: <Lock className="w-10 h-10 text-wareflow-secondary mb-4" />,
    title: 'Intelligent Lockers',
    description: 'Secure and automated access to high-value items, with full audit trails.',
  },
  {
    icon: <BarChart3 className="w-10 h-10 text-wareflow-secondary mb-4" />,
    title: 'Advanced Analytics',
    description: 'Gain valuable insights with AI-powered demand forecasting and inventory reports.',
  },
  {
    icon: <Zap className="w-10 h-10 text-wareflow-secondary mb-4" />,
    title: 'Process Automation',
    description: 'Reduce manual labor and errors with automated check-ins, check-outs, and alerts.',
  },
  {
    icon: <Package className="w-10 h-10 text-wareflow-secondary mb-4" />,
    title: 'Scalable for SMEs',
    description: 'Cost-effective and flexible solutions designed to grow with your business needs.',
  },
  {
    icon: <Users className="w-10 h-10 text-wareflow-secondary mb-4" />,
    title: 'Seamless Integration',
    description: 'Easily integrate WareFlow with your existing systems and workflows.',
  },
]

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" }
  },
}

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
}

export default function Features() {
  return (
    <section id="features" className="py-20 bg-wareflow-dark">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-wareflow-light">
          Why <span className="text-[var(--wareflow-secondary)]">WareFlow</span>?
        </h2>
        <p className="text-lg text-wareflow-gray text-center max-w-2xl mx-auto mb-16">
          Discover the powerful features that make WareFlow the ultimate IoT inventory solution for your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              className="bg-wareflow-primary/10 p-8 rounded-xl shadow-xl border border-wareflow-primary/20 
                         hover:shadow-2xl hover:border-wareflow-secondary/50 
                         transition-transform transition-shadow duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] 
                         transform-gpu will-change-transform hover:-translate-y-1"
            >
              <div className="flex justify-center md:justify-start mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-[var(--wareflow-secondary)]">
                {feature.title}
              </h3>
              <p className="text-wareflow-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
