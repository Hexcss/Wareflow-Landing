// components/HowItWorks.tsx
'use client'
import { motion } from 'framer-motion';
import { Settings, ScanSearch, LineChart, Send } from 'lucide-react';

const steps = [
  {
    icon: <Settings className="w-12 h-12 text-wareflow-primary mb-4" />,
    title: '1. Setup & Integrate',
    description: 'Quickly deploy our IoT devices (RFID tags, sensors, smart lockers) and integrate with your existing systems.',
  },
  {
    icon: <ScanSearch className="w-12 h-12 text-wareflow-primary mb-4" />,
    title: '2. Real-Time Monitoring',
    description: 'Track your inventory movements, stock levels, and item conditions instantly via our intuitive dashboard.',
  },
  {
    icon: <LineChart className="w-12 h-12 text-wareflow-primary mb-4" />,
    title: '3. Analyze & Optimize',
    description: 'Leverage AI-powered analytics for demand forecasting, identifying trends, and optimizing stock levels.',
  },
  {
    icon: <Send className="w-12 h-12 text-wareflow-primary mb-4" />,
    title: '4. Automate & Scale',
    description: 'Automate reordering, receive critical alerts, and scale your inventory operations with confidence.',
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.2 }
  },
};

const stepVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-wareflow-primary/5">
      <motion.div
        className="container mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-4xl font-bold text-center mb-4 text-wareflow-dark">
          Get Started in{' '}
          <span className="text-[var(--wareflow-secondary)] underline decoration-wareflow-secondary">
            Simple Steps
          </span>
        </h2>
        <p className="text-lg text-wareflow-gray text-center max-w-2xl mx-auto mb-16">
          <span className="font-semibold text-wareflow-primary">WareFlow</span> is designed for ease of use and rapid deployment, transforming your inventory management effortlessly.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="flex flex-col items-center text-center p-6 bg-wareflow-dark rounded-lg shadow-lg border border-wareflow-primary/10"
            >
              <div className="p-4 bg-wareflow-secondary/10 rounded-full mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[var(--wareflow-secondary)]">
                {step.title}
              </h3>
              <p className="text-wareflow-light text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
