import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionFadeProps {
  children: ReactNode;
}

export default function MotionFade({ children }: MotionFadeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}