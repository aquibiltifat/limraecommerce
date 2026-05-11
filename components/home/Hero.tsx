"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-medical-blue pt-28 pb-12 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32">
      <div className="site-container">
        <div className="flex flex-col items-center gap-10 lg:flex-row">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left w-full">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-[10px] sm:text-sm font-black text-primary shadow-sm uppercase tracking-widest"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Fastest Delivery in Fatehpur
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-7xl leading-[1.1]"
            >
              Your Health, <br />
              <span className="text-primary">Our Priority.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-lg text-sm sm:text-lg text-slate-600 lg:mx-0 mx-auto leading-relaxed"
            >
              Get genuine medicines, wellness products, and healthcare essentials delivered to your doorstep within 60 minutes.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 font-black text-white transition-all hover:bg-primary-dark hover:shadow-xl shadow-primary/20"
              >
                Order Now <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 rounded-2xl border-2 border-primary/20 bg-white px-8 py-4 font-black text-primary transition-all hover:bg-slate-50"
              >
                Upload Prescription
              </motion.button>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-6 sm:gap-8 lg:justify-start"
            >
              {[
                { icon: ShieldCheck, label: "100% Genuine" },
                { icon: Truck, label: "Free Delivery" },
                { icon: Clock, label: "60 Min Delivery" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-2xl border border-white/50 shadow-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-white text-primary shadow-inner">
                    <badge.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-black text-slate-700 uppercase tracking-widest">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-1 w-full max-w-[500px] lg:max-w-none"
          >
            <div className="relative z-10 overflow-hidden rounded-[3rem] shadow-2xl border-4 border-white/80">
              <div className="bg-gradient-to-br from-primary/10 via-white to-secondary/10 p-4 sm:p-8">
                 <div className="relative h-[300px] sm:h-[450px] w-full">
                    <div className="flex h-full w-full items-center justify-center rounded-[2.5rem] bg-white/40 backdrop-blur-md shadow-inner border border-white/50">
                        <div className="text-center p-6">
                            <motion.div 
                              animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, 5, -5, 0]
                              }}
                              transition={{ repeat: Infinity, duration: 4 }}
                              className="mb-6 inline-flex h-24 w-24 items-center justify-center rounded-[2rem] bg-white text-primary shadow-xl ring-8 ring-primary/5"
                            >
                                <ShieldCheck className="h-12 w-12" />
                            </motion.div>
                            <h3 className="text-2xl font-black text-slate-800 uppercase tracking-widest mb-2">Licensed Pharmacy</h3>
                            <p className="text-sm font-bold text-slate-400">Fatehpur's most trusted medical store</p>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/30 blur-3xl animate-pulse"></div>
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/30 blur-3xl animate-pulse delay-700"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
