import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 },
        },
      };
    },
  };

  return (
    <div className="flex h-screen bg-black">
      <motion.h1
        className="text-5xl font-bold m-auto text-white"
        initial={{ scale: 0.5, opacity: 1 }}
        animate={{ scale: 1.5, opacity: 1, delay: 2 }}
      >
        Home
      </motion.h1>
    </div>
  );
}
