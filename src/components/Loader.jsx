import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  useEffect(() => {
    setTimeout(() => {
      onComplete();
    }, 5000); // Duration of the loading animation (5 seconds)
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white text-black text-9xl font-bold tracking-widest">
      {/* Animated text */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 1, ease: "easeInOut", repeatType: "reverse" }}
      >
        ASHISH
      </motion.div>
    </div>
  );
};

export default Loader;
