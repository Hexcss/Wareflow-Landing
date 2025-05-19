// components/CtaSection.tsx
'use client'
import { motion } from 'framer-motion'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", delay: 0.2 }
  },
}

export default function CtaSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-wareflow-primary to-wareflow-secondary">
      <motion.div
        className="container mx-auto px-6 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-wareflow-dark">
          Ready to Transform Your Inventory?
        </h2>
        <p className="text-xl mb-10 text-wareflow-dark/80">
          Join leading SMEs who are leveraging <span className="font-semibold text-[var(--wareflow-secondary)]">WareFlow</span>{' '} 
          to reduce costs, improve efficiency, and gain a competitive edge.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="bg-wareflow-dark text-[var(--wareflow-light)] font-bold px-12 py-4 rounded-lg text-lg shadow-2xl hover:bg-opacity-90 transition-all duration-300"
        >
          Schedule Your Personalized Demo
        </motion.button>
      </motion.div>
    </section>
  )
}
