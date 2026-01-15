'use client'

import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// --- 1. The Reusable Component ---
const FastAnimatedNumber = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false }); // 'once: true' means it won't reset if you scroll up/down

  // SPEED SETTINGS:
  // mass: 1 (Light weight = moves fast)
  // stiffness: 250 (High tension = snaps to target quickly)
  // damping: 40 (High friction = stops quickly without wobbling too much)
  const spring = useSpring(0, { mass: 1, stiffness: 150, damping: 40 });
  
  const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
};


// --- 2. The Main Section with 3 Divs ---
const Numbers = () => {
    return (
        <section className="py-20 bg-blue-900 text-white font-heading">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Grid Container for 3 Divs */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    
                    {/* --- DIV 1 --- */}
                    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl">
                        <h3 className="text-5xl md:text-6xl font-bold mb-2 text-[#049fe5]">
                            <FastAnimatedNumber value={1000} />+
                        </h3>
                        <p className="text-xl font-medium text-gray-200">Happy Customers</p>
                    </div>

                    {/* --- DIV 2 --- */}
                    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl">
                        <h3 className="text-5xl md:text-6xl font-bold mb-2 text-[#049fe5]">
                            <FastAnimatedNumber value={50} />+
                        </h3>
                        <p className="text-xl font-medium text-gray-200">Products</p>
                    </div>

                    {/* --- DIV 3 --- */}
                    <div className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 shadow-xl">
                        <h3 className="text-5xl md:text-6xl font-bold mb-2 text-[#049fe5]">
                            <FastAnimatedNumber value={95} />%
                        </h3>
                        <p className="text-xl font-medium text-gray-200">Positive Feedback</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Numbers;