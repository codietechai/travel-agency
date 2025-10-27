"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plane, Globe2, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function JourneyCTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Decorative Animated Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute top-20 left-16 w-20 h-20 rounded-full bg-orange-200 opacity-40 blur-2xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-10 right-20 text-orange-400"
      >
        <Globe2 size={60} />
      </motion.div>
      <motion.div
        animate={{ y: [0, 10, 0], scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        className="absolute bottom-16 left-1/4 -translate-x-1/2 text-orange-300"
      >
        <Plane size={50} />
      </motion.div>
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        className="absolute bottom-10 right-10 text-yellow-400"
      >
        <Star size={40} />
      </motion.div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl mx-auto px-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-orange-500">
          Ready to Start Your Journey?
        </h2>
        <p className="text-lg mb-8 text-gray-600">
          Get a free consultation with our experts and begin your path to
          success abroad.
        </p>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-8 py-6 rounded-full shadow-lg transition-all"
            >
              Contact Us Now
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
