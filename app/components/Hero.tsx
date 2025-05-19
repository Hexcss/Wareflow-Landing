// components/Hero.tsx
'use client'
import { motion } from 'framer-motion'
import { Zap, BarChartBig, PackageSearch } from 'lucide-react'
import Image from 'next/image'

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.1, // Slightly faster stagger for text
            duration: 0.5,
            ease: "easeOut",
        },
    }),
}

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delay: 0.3, // Delay after text
            duration: 0.5,
            ease: "easeOut",
        },
    },
}

const iconContainerVariants = {
    initial: { y: 20, scale: 0.5, opacity: 0 }, // Start from bottom and smaller
    animate: (i: number) => ({
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            delay: 0.6 + i * 0.2, // Stagger icons after button
            type: "spring",
            stiffness: 150,
            damping: 15,
        },
    }),
}

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center pt-32 pb-24 md:pt-28 md:pb-20 relative overflow-hidden">
            {/* Background Image and Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero-bg.png"
                    alt="WareFlow warehouse background with stacked boxes"
                    layout="fill"
                    objectFit="cover"
                    quality={80} // Slightly adjusted quality
                    priority
                    // Make the image itself slightly less opaque, overlay will do more work
                    className="opacity-40 md:opacity-50"
                />
                {/* Darkening Overlay - Increased opacity */}
                <div className="absolute inset-0 bg-wareflow-dark opacity-75 md:opacity-70"></div>
                {/* Optional: Add a very subtle secondary color gradient to the overlay if desired
        <div className="absolute inset-0 bg-gradient-to-br from-wareflow-dark/80 via-wareflow-primary/20 to-wareflow-dark/90 opacity-80"></div> 
        */}
            </div>

            {/* Floating Decorative Blobs - pushed further back and more subtle */}
            <motion.div
                className="absolute top-1/4 left-1/5 w-56 h-56 bg-wareflow-secondary/3 rounded-full filter blur-3xl animate-float -z-20 opacity-50"
                style={{ animationDelay: '0s' }}
            />
            <motion.div
                className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-wareflow-primary/3 rounded-full filter blur-3xl animate-float -z-20 opacity-50"
                style={{ animationDelay: '1.5s' }}
            />

            <div className="container mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } }
                    }}
                >
                    <motion.h1
                        custom={0}
                        variants={textVariants}
                        className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 text-wareflow-light drop-shadow-md"
                    >
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--wareflow-secondary)] via-[var(--wareflow-accent)]t to-[var(--wareflow-secondary)] animate-gradient-text">
                            Smart Inventory
                        </span>
                        <br />
                        Simplified with IoT.
                    </motion.h1>
                    <motion.p
                        custom={1}
                        variants={textVariants}
                        className="text-lg sm:text-xl md:text-2xl text-wareflow-light/90 max-w-3xl mx-auto mb-10 drop-shadow-sm"
                    >
                        WareFlow empowers SMEs with cutting-edge IoT technology for real-time inventory tracking, automation, and actionable insights. Say goodbye to stockouts and inefficiencies.
                    </motion.p>
                    <motion.div
                        variants={buttonVariants} // Apply button specific variants
                        className="mb-28 md:mb-36" // Increased margin bottom further
                    >
                        <motion.button
                            whileHover={{
                                scale: 1.05,
                                y: -2,
                                transition: { type: "spring", stiffness: 200, damping: 15 },
                            }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-md text-wareflow-dark font-bold px-10 py-4 rounded-lg text-lg 
             shadow-xl border border-white/20 hover:border-wareflow-accent 
             hover:shadow-[0_5px_25px_rgba(106,242,240,0.4)] transition-all duration-300 ease-in-out
             focus:outline-none focus:ring-2 focus:ring-wareflow-accent focus:ring-opacity-50"
                        >
                            Request a Free Demo
                        </motion.button>

                    </motion.div>
                </motion.div>

                {/* Floating Icons - Enhanced Visibility */}
                <div className="absolute -bottom-6 sm:-bottom-8 left-0 right-0 flex justify-around items-center pointer-events-none -z-10">
                    <motion.div
                        variants={iconContainerVariants}
                        initial="initial"
                        animate="animate"
                        custom={0}
                        className="p-3 sm:p-4 bg-wareflow-light/10 backdrop-blur-sm rounded-full shadow-lg" // Light, blurred background for icons
                    >
                        <PackageSearch className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-wareflow-accent" /> {/* Brighter icon color */}
                    </motion.div>
                    <motion.div
                        variants={iconContainerVariants}
                        initial="initial"
                        animate="animate"
                        custom={1}
                        className="p-3 sm:p-4 bg-wareflow-light/10 backdrop-blur-sm rounded-full shadow-lg"
                    >
                        <Zap className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-wareflow-accent" />
                    </motion.div>
                    <motion.div
                        variants={iconContainerVariants}
                        initial="initial"
                        animate="animate"
                        custom={2}
                        className="p-3 sm:p-4 bg-wareflow-light/10 backdrop-blur-sm rounded-full shadow-lg"
                    >
                        <BarChartBig className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-wareflow-accent" />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}