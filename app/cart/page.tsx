"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: "1", name: "Paracetamol 500mg Tablets", price: 45, quantity: 2, image: "/medicine-placeholder.png" },
    { id: "2", name: "Digital Blood Pressure Monitor", price: 1850, quantity: 1, image: "/device-placeholder.png" },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items => items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCharge = subtotal > 500 ? 0 : 50;
  const total = subtotal + deliveryCharge;

  if (cartItems.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 pt-24 md:pt-40"
      >
        <div className="mb-6 rounded-full bg-slate-50 p-8 text-slate-300">
          <ShoppingBag className="h-20 w-20" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="mb-8 text-slate-500">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products" className="rounded-full bg-primary px-8 py-3 font-bold text-white transition-all hover:bg-primary-dark">
          Start Shopping
        </Link>
      </motion.div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12 pt-24 md:pt-40 lg:pt-48">
      <div className="site-container">
        <motion.h1 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8 text-3xl font-black text-slate-900"
        >
          Shopping Cart
        </motion.h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            <AnimatePresence mode="popLayout">
              {cartItems.map((item) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  className="flex flex-col sm:flex-row items-center gap-6 rounded-[2rem] border border-slate-100 bg-white p-6 transition-all hover:shadow-xl group"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border bg-slate-50">
                    <Image src={item.image} alt={item.name} fill className="object-contain p-2 transition-transform group-hover:scale-110" />
                  </div>
                  
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-primary transition-colors">{item.name}</h3>
                    <p className="text-sm font-black text-primary">{formatPrice(item.price)}</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center rounded-xl border-2 border-slate-100 p-1 bg-slate-50/50">
                      <motion.button whileTap={{ scale: 0.8 }} onClick={() => updateQuantity(item.id, -1)} className="flex h-8 w-8 items-center justify-center hover:bg-white rounded-lg transition-colors"><Minus className="h-3 w-3" /></motion.button>
                      <span className="w-8 text-center text-sm font-black">{item.quantity}</span>
                      <motion.button whileTap={{ scale: 0.8 }} onClick={() => updateQuantity(item.id, 1)} className="flex h-8 w-8 items-center justify-center hover:bg-white rounded-lg transition-colors"><Plus className="h-3 w-3" /></motion.button>
                    </div>
                    <motion.button 
                      whileHover={{ scale: 1.1, color: "#ef4444" }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => removeItem(item.id)} 
                      className="text-slate-400 transition-colors p-2"
                    >
                      <Trash2 className="h-5 w-5" />
                    </motion.button>
                  </div>

                  <div className="text-right min-w-[100px]">
                    <p className="text-lg font-black text-slate-900">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              <Link href="/products" className="inline-flex items-center gap-2 font-black text-primary hover:gap-3 transition-all">
                <ArrowLeft className="h-4 w-4" />
                Continue Shopping
              </Link>
            </motion.div>
          </div>

          {/* Summary */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="rounded-[2rem] border border-slate-100 bg-white p-8 shadow-xl">
              <h3 className="mb-6 text-xl font-black text-slate-900 uppercase tracking-widest">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Subtotal</span>
                  <span className="font-black text-slate-900">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-medium">
                  <span>Delivery Charges</span>
                  <span className={deliveryCharge === 0 ? "text-green-600 font-black" : "font-black text-slate-900"}>
                    {deliveryCharge === 0 ? "FREE" : formatPrice(deliveryCharge)}
                  </span>
                </div>
                {deliveryCharge > 0 && (
                   <motion.p 
                     animate={{ x: [0, 5, 0] }}
                     transition={{ repeat: Infinity, duration: 2 }}
                     className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/5 p-2 rounded-lg text-center"
                   >
                     Add ₹{500 - subtotal} more for FREE delivery
                   </motion.p>
                )}
                
                <div className="border-t border-slate-100 pt-6 mt-6">
                  <div className="flex justify-between text-2xl font-black text-slate-900">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-400 font-medium uppercase tracking-widest">Inclusive of all taxes</p>
                </div>

                <Link href="/checkout" className="block mt-8">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full rounded-2xl bg-primary py-5 font-black text-white shadow-xl shadow-primary/20 transition-all hover:bg-primary-dark"
                  >
                    Proceed to Checkout
                  </motion.button>
                </Link>
              </div>
            </div>
            
            <div className="mt-6 rounded-2xl border-2 border-dashed border-primary/20 bg-primary/5 p-6">
              <p className="text-xs font-bold text-slate-600 leading-relaxed">
                <span className="font-black text-primary uppercase tracking-widest block mb-1">Important:</span> 
                Prescription medicines will require a valid prescription upload at the next step.
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
