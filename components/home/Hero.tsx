"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-medical-blue pt-32 pb-16 md:pt-48 md:pb-24 lg:pt-56 lg:pb-32">
      <div className="site-container">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Fastest Delivery in Fatehpur
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl"
            >
              Your Health, <br />
              <span className="text-primary">Our Priority.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8 max-w-lg text-lg text-slate-600 lg:mx-0 mx-auto"
            >
              Get genuine medicines, wellness products, and healthcare essentials delivered to your doorstep within 60 minutes.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
              >
                Order Now <ArrowRight className="h-5 w-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white px-8 py-4 font-bold text-primary transition-all hover:bg-slate-50"
              >
                Upload Prescription
              </motion.button>
            </motion.div>
            
            {/* Trust Badges */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
            >
              {[
                { icon: ShieldCheck, label: "100% Genuine" },
                { icon: Truck, label: "Free Delivery" },
                { icon: Clock, label: "60 Min Delivery" }
              ].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                    <badge.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{badge.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex-1"
          >
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl border border-white/50">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                 <div className="relative h-[400px] w-full">
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/50 backdrop-blur-sm">
                        <div className="text-center">
                            <motion.div 
                              animate={{ scale: [1, 1.1, 1] }}
                              transition={{ repeat: Infinity, duration: 3 }}
                              className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary"
                            >
                                <ShieldCheck className="h-10 w-10" />
                            </motion.div>
                            <h3 className="text-xl font-bold text-slate-800">Licensed Pharmacy</h3>
                            <p className="text-sm text-slate-500">Fatehpur's most trusted medical store</p>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-secondary/20 blur-3xl"></div>
            <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-primary/20 blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
