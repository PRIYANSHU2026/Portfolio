"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";
import { ChevronRight } from "lucide-react";

export function CategoryShowcase() {
  // Just display Garden Tools category and its subcategories
  const mainCategory = categories[0];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-800">Our Categories</h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Explore our comprehensive range of professional garden and power tools designed for performance and reliability
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {mainCategory.subcategories.slice(0, 6).map((subcategory) => (
            <motion.div key={subcategory.id} variants={item}>
              <Link href={`/category/${mainCategory.id}/${subcategory.id}`}>
                <div className="group relative overflow-hidden rounded-lg h-[250px] border border-gray-200 bg-gray-50 shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Placeholder for subcategory image - would be replaced with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent" />

                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-red-600 transition-colors">
                      {subcategory.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-2 mb-4">
                      Discover our professional range of {subcategory.name.toLowerCase()} for all your garden needs
                    </p>
                    <div className="flex items-center text-red-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                      Explore Products <ChevronRight className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
          >
            View All Categories <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
