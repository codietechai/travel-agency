"use client";

import Link from "next/link";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Menu, X, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  // Smooth scroll progress
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Plane moves horizontally as you scroll
  const planeX = useTransform(scrollYProgress, [0, 1], ["0%", "100vw"]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-orange-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo with animated plane */}
            <Link href="/" className="flex items-center space-x-2 group">
              <motion.div
                animate={{ rotateZ: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Plane className="h-7 w-7 text-orange-600 group-hover:text-orange-700 transition-colors" />
              </motion.div>
              <span className="text-2xl font-bold text-gray-900">
                Global<span className="text-orange-600">Journey</span>
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  {link.label}
                  <motion.span
                    className="absolute left-0 -bottom-1 h-0.5 bg-orange-600"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              ))}
              <Button className="bg-orange-600 hover:bg-orange-700 shadow-md transition-all duration-300">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100 transition"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="h-6 w-6 text-gray-700" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700" />
                )}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-100 shadow-sm"
            >
              <div className="px-4 py-4 space-y-2">
                {navLinks.map((link) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <Button className="w-full bg-orange-600 hover:bg-orange-700 shadow-md">
                    Get Started
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll progress bar with moving plane */}
        <div className="relative w-full h-3 bg-transparent overflow-visible">
          <motion.div
            className="absolute top-0 left-0 h-full bg-orange-600 origin-left"
            style={{ scaleX }}
          />
          <motion.div
            style={{ x: planeX }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="absolute -top-[3px]"
          >
            <Plane className="fill-orange-600 text-orange-600 h-8 w-8 rotate-45" />
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
}
