"use client";

import React from "react";
import Link from "next/link";
import { Pill, Baby, Activity, Heart, Sparkles, Wind, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  { name: "Medicines", icon: Pill, color: "bg-blue-100 text-blue-600", count: "1200+ Products" },
  { name: "Baby Care", icon: Baby, color: "bg-pink-100 text-pink-600", count: "450+ Products" },
  { name: "Wellness", icon: Heart, color: "bg-green-100 text-green-600", count: "800+ Products" },
  { name: "Personal Care", icon: Sparkles, color: "bg-purple-100 text-purple-600", count: "600+ Products" },
  { name: "Health Devices", icon: Activity, color: "bg-orange-100 text-orange-600", count: "200+ Products" },
  { name: "Ayurvedic", icon: Wind, color: "bg-teal-100 text-teal-600", count: "350+ Products" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="site-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 flex items-end justify-between"
        >
          <div>
            <h2 className="mb-2 text-3xl font-bold text-slate-900">Shop by Category</h2>
            <p className="text-slate-500">Find what you need by browsing our top categories</p>
          </div>
          <Link href="/products" className="group flex items-center gap-1 font-semibold text-primary">
            View All <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
        >
          {categories.map((category) => (
            <motion.div key={category.name} variants={itemVariants}>
              <Link
                href={`/products?category=${category.name.toLowerCase().replace(" ", "-")}`}
                className="group flex flex-col items-center rounded-3xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-primary/20 hover:bg-white hover:shadow-2xl hover:-translate-y-1"
              >
                <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} shadow-inner transition-transform group-hover:scale-110`}>
                  <category.icon className="h-8 w-8" />
                </div>
                <h3 className="mb-1 text-center font-bold text-slate-900">{category.name}</h3>
                <p className="text-center text-xs text-slate-400">{category.count}</p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategorySection;
