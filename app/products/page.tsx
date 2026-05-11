"use client";

import React, { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { Filter, SlidersHorizontal, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const allProducts = [
  { id: "1", name: "Paracetamol 500mg Tablets", price: 45, originalPrice: 60, discount: 25, image: "/medicine-placeholder.png", category: "Tablets", rating: 4.8 },
  { id: "2", name: "Digital Blood Pressure Monitor", price: 1850, originalPrice: 2400, discount: 22, image: "/device-placeholder.png", category: "Devices", rating: 4.9 },
  { id: "3", name: "Vitamin C Chewable Tablets", price: 120, originalPrice: 150, discount: 20, image: "/wellness-placeholder.png", category: "Wellness", rating: 4.7 },
  { id: "4", name: "Baby Soft Skin Lotion", price: 320, originalPrice: 400, discount: 20, image: "/baby-placeholder.png", category: "Baby Care", rating: 4.6 },
  { id: "5", name: "Amoxicillin 250mg Capsules", price: 85, originalPrice: 100, discount: 15, image: "/medicine-placeholder.png", category: "Tablets", rating: 4.5, prescriptionRequired: true },
  { id: "6", name: "Cough Syrup (Herbal)", price: 110, originalPrice: 130, discount: 15, image: "/syrup-placeholder.png", category: "Syrups", rating: 4.4 },
  { id: "7", name: "Face Wash for Oily Skin", price: 199, originalPrice: 250, discount: 20, image: "/personal-care-placeholder.png", category: "Personal Care", rating: 4.3 },
  { id: "8", name: "Hand Sanitizer 500ml", price: 150, originalPrice: 200, discount: 25, image: "/wellness-placeholder.png", category: "Wellness", rating: 4.9 },
];

const categories = ["All", "Tablets", "Syrups", "Wellness", "Baby Care", "Personal Care", "Devices"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Popularity");

  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-slate-50 min-h-screen pt-24 pb-12 md:pt-40 lg:pt-48">
      <div className="site-container">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
        >
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-slate-900">All Products</h1>
            <p className="text-sm text-slate-500 font-medium">Showing {filteredProducts.length} health essentials</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative group">
              <motion.button 
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
              >
                <SlidersHorizontal className="h-4 w-4" />
                Sort: {sortBy}
                <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
              </motion.button>
              <div className="absolute right-0 mt-2 hidden w-48 rounded-2xl border bg-white p-2 shadow-2xl group-hover:block z-20">
                {["Popularity", "Price: Low to High", "Price: High to Low", "Newest"].map(option => (
                  <button 
                    key={option} 
                    onClick={() => setSortBy(option)}
                    className="block w-full text-left rounded-xl px-4 py-2.5 text-sm font-bold text-slate-600 hover:bg-primary/5 hover:text-primary transition-all"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Mobile Categories (Horizontal Scroll) */}
          <div className="lg:hidden -mx-6 px-6 overflow-x-auto no-scrollbar pb-2">
            <div className="flex gap-2 min-w-max">
              {categories.map(category => (
                <motion.button
                  key={category}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                    selectedCategory === category 
                      ? "bg-primary text-white shadow-lg shadow-primary/20" 
                      : "bg-white text-slate-500 border border-slate-100 hover:border-primary/20"
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Desktop Filters Sidebar */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block w-64 shrink-0"
          >
            <div className="sticky top-36 space-y-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
              <div>
                <h3 className="mb-4 flex items-center gap-2 font-black text-slate-900 uppercase tracking-widest text-[10px]">
                  <Filter className="h-4 w-4 text-primary" />
                  Categories
                </h3>
                <div className="space-y-1">
                  {categories.map(category => (
                    <motion.button
                      key={category}
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
                        selectedCategory === category 
                          ? "bg-primary text-white shadow-lg shadow-primary/20" 
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {category}
                    </motion.button>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-slate-50 pt-6">
                <h3 className="mb-4 font-black text-slate-900 uppercase tracking-widest text-[10px]">Price Range</h3>
                <div className="space-y-4">
                  <input type="range" className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-primary" min="0" max="5000" />
                  <div className="flex items-center justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest">
                    <span>₹0</span>
                    <span>₹5000+</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-50 pt-6">
                <h3 className="mb-4 font-black text-slate-900 uppercase tracking-widest text-[10px]">Availability</h3>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="h-5 w-5 rounded-lg border-slate-200 text-primary focus:ring-primary/20" defaultChecked />
                  <span className="text-sm font-bold text-slate-600 group-hover:text-primary transition-colors">Exclude Out of Stock</span>
                </label>
              </div>
            </div>
          </motion.aside>

          {/* Product Grid */}
          <div className="flex-1">
            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div 
                  key={selectedCategory}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
                >
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex h-80 flex-col items-center justify-center rounded-[2.5rem] border-2 border-dashed border-slate-100 bg-white text-center p-8"
                >
                  <p className="text-lg font-black text-slate-300 mb-4">No products found</p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory("All")}
                    className="rounded-full bg-primary/10 px-8 py-3 text-sm font-black text-primary transition-all hover:bg-primary hover:text-white"
                  >
                    View All Products
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
