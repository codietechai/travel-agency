"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Hero from "@/components/screens/home/hero-section";
import Services from "@/components/screens/home/services-section";
import CTASection from "@/components/screens/home/cta";
import { Star } from "lucide-react";

export default function Home() {
  // Track cursor position for plane animation
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student, University of Toronto",
      content:
        "GlobalJourney made my dream of studying in Canada a reality. Their team was incredibly supportive throughout the process.",
      rating: 5,
    },
    {
      name: "Rajesh Patel",
      role: "Software Engineer, Australia",
      content:
        "Thanks to their expert visa and career services, I successfully relocated to Australia. Highly recommend!",
      rating: 5,
    },
    {
      name: "Emily Chen",
      role: "IELTS Student",
      content:
        "The IELTS training was top-notch. I scored 8.5 and got accepted into my dream university in the UK.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen text-gray-900 relative">
      {/* <motion.div
        className="fixed top-0 left-0 z-50 pointer-events-none"
        animate={{ x: cursor.x - 20, y: cursor.y - 20, rotateY: [0, 360] }}
        transition={{
          x: { type: "spring", stiffness: 100, damping: 15 },
          y: { type: "spring", stiffness: 100, damping: 15 },
          rotateY: {
            repeat: Infinity,
            ease: "linear",
            duration: 10,
          },
        }}
      >
        <svg
          fill="#f97316"
          width="50px"
          height="50px"
          viewBox="0 0 36 36"
          version="1.1"
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>plane-solid</title>
          <path
            className="clr-i-solid clr-i-solid-path-1"
            d="M6.25,11.5,12,13.16l6.32-4.59-9.07.26A.52.52,0,0,0,9,8.91L6.13,10.56A.51.51,0,0,0,6.25,11.5Z"
          ></path>
          <path
            className="clr-i-solid clr-i-solid-path-2"
            d="M34.52,6.36,28.22,5a3.78,3.78,0,0,0-3.07.67L6.12,19.5l-4.57-.2a1.25,1.25,0,0,0-.83,2.22l4.45,3.53a.55.55,0,0,0,.53.09c1.27-.49,6-3,11.59-6.07l1.12,11.51a.55.55,0,0,0,.9.37l2.5-2.08a.76.76,0,0,0,.26-.45l2.37-13.29c4-2.22,7.82-4.37,10.51-5.89A1.55,1.55,0,0,0,34.52,6.36Z"
          ></path>
          <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
        </svg>
      </motion.div> */}

      <Hero />
      {/* Services Section */}

      <Services />
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-500">
              Hear from our students and professionals who trusted us.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="border border-gray-200 rounded-2xl hover:border-orange-500 hover:shadow-xl transition-all duration-300 p-2">
                  <CardHeader>
                    <div className="flex gap-1 mb-3">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <CardTitle className="text-lg font-semibold">
                      {t.name}
                    </CardTitle>
                    <CardDescription className="text-gray-500">
                      {t.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{t.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
