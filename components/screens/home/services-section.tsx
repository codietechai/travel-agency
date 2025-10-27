"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, Globe2, MapPin, Hotel, Camera, Calendar } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Globe2,
      title: "International Tours",
      description:
        "Explore breathtaking destinations across continents with expertly planned itineraries.",
      href: "/services/international-tours",
    },
    {
      icon: MapPin,
      title: "Custom Packages",
      description:
        "Tailor your journey with personalized travel experiences designed around your dreams.",
      href: "/services/custom-packages",
    },
    {
      icon: Hotel,
      title: "Hotel & Stay",
      description:
        "Luxurious and comfortable stays — from beach resorts to mountain lodges.",
      href: "/services/hotels",
    },
    {
      icon: Camera,
      title: "Adventure & Activities",
      description:
        "Add excitement to your trip with safaris, diving, hiking, and local experiences.",
      href: "/services/adventure",
    },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-orange-50/40 to-amber-50 overflow-hidden">
      {/* Decorative dotted route */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-20 left-0 w-full h-40 opacity-30"
          viewBox="0 0 1200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="orangeGradient"
              x1="0"
              x2="1200"
              y1="0"
              y2="0"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#f97316" />
              <stop offset="1" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900">
            Our Travel Services
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Discover a world of possibilities with our exclusive travel
            solutions designed for every explorer.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Link href={service.href}>
                  <Card className="group h-full border border-gray-200 hover:border-orange-500 hover:shadow-2xl transition-all duration-300 rounded-2xl cursor-pointer bg-white hover:-translate-y-2">
                    <CardHeader className="flex flex-col items-center text-center">
                      <motion.div
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        className="w-16 h-16 bg-orange-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors"
                      >
                        <Icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors" />
                      </motion.div>
                      <CardTitle className="text-lg font-semibold text-gray-900">
                        {service.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-gray-500 text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/services">
              <Button
                variant="outline"
                size="lg"
                className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 rounded-full px-8"
              >
                View All Services
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
