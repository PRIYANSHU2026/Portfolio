"use client";

import { motion } from "framer-motion";
import { Battery, Box, Leaf, Shield, Zap } from "lucide-react";

const features = [
  {
    id: "cordless",
    title: "Cordless Freedom",
    description: "Our cordless tools provide maximum mobility and convenience with long-lasting battery performance.",
    icon: Battery,
  },
  {
    id: "power",
    title: "Professional Power",
    description: "Experience professional-grade power and performance for demanding tasks in your garden.",
    icon: Zap,
  },
  {
    id: "eco",
    title: "Eco-Friendly",
    description: "Environmentally conscious tools with reduced emissions and energy-efficient operation.",
    icon: Leaf,
  },
  {
    id: "warranty",
    title: "Extended Warranty",
    description: "Our products come with extended warranty and reliable after-sales support.",
    icon: Shield,
  },
  {
    id: "kit",
    title: "Complete Kits",
    description: "Get everything you need with our comprehensive tool kits and accessories.",
    icon: Box,
  },
];

export function FeatureSection() {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold">Why Choose Our Products</h2>
          <p className="mt-2 max-w-2xl mx-auto text-red-100">
            Discover the advantages of K&S Enterprises garden and power tools
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="h-16 w-16 rounded-full bg-white/10 flex items-center justify-center mb-4 backdrop-blur-sm">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-red-100 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
