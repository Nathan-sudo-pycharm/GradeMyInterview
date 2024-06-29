"use client";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({ words, className }) => {
  const scope = useRef(null);
  const animate = useAnimation();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animateWords();
  }, []);

  const animateWords = async () => {
    await animate.start({
      opacity: 1,
      transition: {
        duration: 2,
        delay: 0.2, // Adjust delay value here as needed
      },
    });
  };

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="text-neutral-300 opacity-0"
            initial={{ opacity: 0 }}
            animate={animate}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="text-neutral-300 text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
