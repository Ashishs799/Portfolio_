import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Loader = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "ASHISH";
  const typingSpeed = 200; // Adjust speed of typing

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1000); // Delay before completing
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black text-white font-bold">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.2 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl tracking-widest"
      >
        {text}
      </motion.div>
    </div>
  );
};

export default Loader;
