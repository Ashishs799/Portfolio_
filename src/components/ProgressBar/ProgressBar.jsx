import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProgressBar = ({ label, percentage, icon }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="">
      <div className="w-full text-xs 2xl:text-sm flex justify-between py-2">
        <span className=" flex items-center gap-x-2">
          <span>{icon}</span>
          <span>{label}</span>
        </span>{" "}
        <span>{percentage}%</span>
      </div>
      <div className="bg-pink-100 h-4 2xl:h-8">
        <motion.div
          ref={ref}
          className="bg-pink-800 h-full"
          initial={{ width: 0 }}
          animate={{ width: isInView ? `${percentage}%` : 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};
export default ProgressBar;
