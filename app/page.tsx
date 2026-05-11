"use client";

import Hero from "@/components/home/Hero";
import CategorySection from "@/components/home/CategorySection";
import ProductCard from "@/components/product/ProductCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const featuredProducts = [
  {
    id: "1",
    name: "Paracetamol 500mg Tablets",
    price: 45,
    originalPrice: 60,
    discount: 25,
    image: "/medicine-placeholder.png",
    category: "Tablets",
    rating: 4.8,
  },
  {
    id: "2",
    name: "Digital Blood Pressure Monitor",
    price: 1850,
    originalPrice: 2400,
    discount: 22,
    image: "/device-placeholder.png",
    category: "Devices",
    rating: 4.9,
  },
  {
    id: "3",
    name: "Vitamin C Chewable Tablets",
    price: 120,
    originalPrice: 150,
    discount: 20,
    image: "/wellness-placeholder.png",
    category: "Wellness",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Baby Soft Skin Lotion",
    price: 320,
    originalPrice: 400,
    discount: 20,
    image: "/baby-placeholder.png",
    category: "Baby Care",
    rating: 4.6,
  },
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
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <CategorySection />
      
      {/* Featured Products */}
      <section className="py-16 bg-slate-50">
        <div className="site-container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 flex items-end justify-between"
          >
            <div>
              <h2 className="mb-2 text-3xl font-bold text-slate-900">Featured Products</h2>
              <p className="text-slate-500">Handpicked essentials for your health and wellbeing</p>
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
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard {...product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-16 bg-white">
        <div className="site-container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-dark p-10 text-white shadow-xl shadow-primary/10"
            >
              <div className="relative z-10">
                <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">Limited Offer</span>
                <h3 className="mb-4 text-3xl font-bold">Flat 20% OFF on <br />First Medicine Order</h3>
                <p className="mb-8 text-white/80">Use Code: <span className="font-bold text-white">LIMRA20</span></p>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="rounded-full bg-white px-6 py-3 font-bold text-primary transition-all hover:bg-slate-100 shadow-lg">Shop Now</motion.button>
              </div>
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-secondary to-secondary-dark p-10 text-white shadow-xl shadow-secondary/10"
            >
              <div className="relative z-10">
                <span className="mb-4 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">Health Special</span>
                <h3 className="mb-4 text-3xl font-bold">Free Health Checkup <br />on Orders above ₹999</h3>
                <p className="mb-8 text-white/80">Valid for all Fatehpur residents</p>
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="rounded-full bg-white px-6 py-3 font-bold text-secondary transition-all hover:bg-slate-100 shadow-lg">Know More</motion.button>
              </div>
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/10 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-slate-50">
        <div className="site-container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white p-8 shadow-sm lg:p-16 border border-slate-100"
          >
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="text-center lg:text-left">
                <h2 className="mb-4 text-3xl font-bold text-slate-900">Why Choose Limra Pharmacy & Surgical?</h2>
                <p className="text-slate-500">We are committed to providing the best healthcare experience in Fatehpur.</p>
              </div>
              
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2">
                {[
                  { id: "01", title: "Genuine Medicines", desc: "Directly sourced from authorized distributors and manufacturers." },
                  { id: "02", title: "Expert Advice", desc: "In-house pharmacists to help you with your prescriptions." },
                  { id: "03", title: "Safe Packaging", desc: "Temperature-controlled and tamper-proof packaging for safety." },
                  { id: "04", title: "Quick Support", desc: "Dedicated customer support for all your queries and concerns." }
                ].map((item) => (
                  <motion.div key={item.id} whileHover={{ x: 5 }} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary font-bold">{item.id}</div>
                    <div>
                      <h4 className="mb-2 font-bold text-slate-900">{item.title}</h4>
                      <p className="text-sm text-slate-500">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

