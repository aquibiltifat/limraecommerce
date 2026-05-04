"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-medical-blue py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-primary shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
              Fastest Delivery in Fatehpur
            </div>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
              Your Health, <br />
              <span className="text-primary">Our Priority.</span>
            </h1>
            <p className="mb-8 max-w-lg text-lg text-slate-600 lg:mx-0 mx-auto">
              Get genuine medicines, wellness products, and healthcare essentials delivered to your doorstep within 60 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <button className="flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg">
                Order Now <ArrowRight className="h-5 w-5" />
              </button>
              <button className="flex items-center gap-2 rounded-full border-2 border-primary/20 bg-white px-8 py-4 font-bold text-primary transition-all hover:bg-slate-50">
                Upload Prescription
              </button>
            </div>
            
            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-slate-700">100% Genuine</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <Truck className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-slate-700">Free Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-sm">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="text-sm font-semibold text-slate-700">60 Min Delivery</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative flex-1">
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 p-8">
                 <div className="relative h-[400px] w-full">
                    {/* Placeholder for Hero Image - I will generate one or use a clean placeholder style */}
                    <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/50 backdrop-blur-sm">
                        <div className="text-center">
                            <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <ShieldCheck className="h-10 w-10" />
                            </div>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
