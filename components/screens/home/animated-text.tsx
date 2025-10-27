import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const texts = [
  "Discover. Travel. Repeat.",
  "Turning Dreams into Destinations.",
  "Explore Beyond Boundaries.",
  "Adventure Awaits You.",
];

export default function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const currentText = texts[index];
    let i = 0;

    const typeInterval = setInterval(() => {
      setDisplayText(currentText.slice(0, i + 1));
      i++;
      if (i === currentText.length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setDisplayText("");
          setIndex((prev) => (prev + 1) % texts.length);
        }, 1500);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [index]);

  return (
    <p className="text-xl text-gray-600 max-w-2xl mb-8">
      <span>{displayText}</span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="inline-block ml-[1px]"
      >
        |
      </motion.span>
    </p>
  );
}
