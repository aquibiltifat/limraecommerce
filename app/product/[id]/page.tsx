"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Star, 
  Minus, 
  Plus, 
  ShoppingCart, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  AlertCircle,
  ChevronRight
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ProductDetailPage = ({ params }: { params: { id: string } }) => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("Description");

  // Mock product data (in a real app, this would be fetched based on params.id)
  const product = {
    id: params.id,
    name: "Paracetamol 500mg Tablets",
    price: 45,
    originalPrice: 60,
    discount: 25,
    image: "/medicine-placeholder.png",
    category: "Tablets",
    rating: 4.8,
    reviewsCount: 124,
    prescriptionRequired: true,
    brand: "HealthCorp Labs",
    stock: 50,
    description: "Paracetamol is a common painkiller used to treat aches and pain. It can also be used to reduce a high temperature. It's available combined with other painkillers and anti-sickness medicines.",
    dosage: "Take 1-2 tablets every 4-6 hours as needed. Do not exceed 8 tablets in 24 hours.",
    sideEffects: "Nausea, allergic reactions, skin rash. Consult a doctor if symptoms persist.",
  };

  return (
    <div className="bg-white py-12 pt-24 md:pt-40 lg:pt-48">
      <div className="site-container">
        {/* Breadcrumbs */}
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 flex items-center gap-2 text-sm text-slate-500"
        >
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-primary transition-colors">Medicines</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-bold text-slate-900">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Images */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-4"
          >
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border bg-slate-50 shadow-inner">
              <motion.div
                key={product.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-full w-full"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-12"
                />
              </motion.div>
              {product.discount > 0 && (
                <span className="absolute left-6 top-6 rounded-full bg-secondary px-4 py-1.5 text-sm font-black text-white shadow-lg">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative h-24 w-24 cursor-pointer overflow-hidden rounded-2xl border bg-slate-50 transition-all hover:border-primary"
                >
                   <Image src={product.image} alt={product.name} fill className="object-contain p-2" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <motion.span 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-3 inline-block rounded-full bg-primary/10 px-4 py-1 text-xs font-black text-primary uppercase tracking-widest"
              >
                {product.brand}
              </motion.span>
              <h1 className="mb-4 text-4xl font-black text-slate-900 md:text-5xl leading-tight">{product.name}</h1>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-1.5 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-black text-slate-900">{product.rating}</span>
                  <span className="text-sm text-slate-500">({product.reviewsCount} reviews)</span>
                </div>
                <span className="text-slate-200">|</span>
                <span className="text-sm font-bold text-green-600 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                  In Stock
                </span>
              </div>
            </div>

            <div className="mb-8 rounded-3xl bg-slate-50 p-8 border border-slate-100 shadow-inner">
              <div className="mb-2 flex items-baseline gap-4">
                <span className="text-4xl font-black text-slate-900">{formatPrice(product.price)}</span>
                <span className="text-xl text-slate-400 line-through font-medium">{formatPrice(product.originalPrice)}</span>
              </div>
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">Inclusive of all taxes</p>
            </div>

            {product.prescriptionRequired && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 flex items-start gap-4 rounded-3xl bg-red-50 p-6 text-red-700 border border-red-100 shadow-sm shadow-red-100"
              >
                <AlertCircle className="h-6 w-6 shrink-0" />
                <div>
                  <p className="text-sm font-black uppercase tracking-widest mb-1">Prescription Required</p>
                  <p className="text-sm opacity-80 leading-relaxed">A valid prescription from a registered doctor is mandatory to purchase this item.</p>
                </div>
              </motion.div>
            )}

            <div className="mb-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center rounded-2xl border-2 border-slate-100 bg-white p-1.5 shadow-sm">
                <motion.button 
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                >
                  <Minus className="h-5 w-5" />
                </motion.button>
                <span className="w-16 text-center text-xl font-black">{quantity}</span>
                <motion.button 
                  whileTap={{ scale: 0.8 }}
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-600 transition-colors"
                >
                  <Plus className="h-5 w-5" />
                </motion.button>
              </div>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-primary px-8 py-5 font-black text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-dark md:flex-none"
              >
                <ShoppingCart className="h-6 w-6" />
                Add to Cart
              </motion.button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { icon: Truck, label: "Free Delivery" },
                { icon: RotateCcw, label: "Easy Returns" },
                { icon: ShieldCheck, label: "100% Secure" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col items-center gap-2 rounded-2xl border bg-white p-4 text-center shadow-sm hover:shadow-md transition-shadow">
                  <item.icon className="h-6 w-6 text-primary" />
                  <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-20">
          <div className="flex gap-4 border-b border-slate-100">
            {["Description", "Dosage", "Reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-8 py-4 text-sm font-black uppercase tracking-widest transition-all ${
                  activeTab === tab 
                    ? "text-primary" 
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-primary"
                  />
                )}
              </button>
            ))}
          </div>
          <div className="py-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="max-w-3xl"
              >
                {activeTab === "Description" && (
                  <div className="space-y-6">
                    <p className="text-slate-600 text-lg leading-relaxed">{product.description}</p>
                    <div className="rounded-3xl bg-slate-50 p-8 border border-slate-100">
                      <h4 className="font-black text-slate-900 uppercase tracking-widest mb-4">Side Effects:</h4>
                      <p className="text-slate-600 leading-relaxed">{product.sideEffects}</p>
                    </div>
                  </div>
                )}
                {activeTab === "Dosage" && (
                  <div className="rounded-3xl bg-primary/5 p-8 border border-primary/10">
                    <p className="text-primary font-bold text-lg leading-relaxed">{product.dosage}</p>
                  </div>
                )}
                {activeTab === "Reviews" && (
                  <div className="flex flex-col items-center justify-center h-40 rounded-3xl border-2 border-dashed border-slate-200">
                    <p className="text-slate-400 font-bold italic">No reviews yet. Be the first to share your experience!</p>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
