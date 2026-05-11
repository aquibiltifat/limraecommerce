"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Menu, X, ChevronDown, Upload, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Tablets", href: "/products?category=tablets" },
    { name: "Syrups", href: "/products?category=syrups" },
    { name: "Ayurvedic", href: "/products?category=ayurvedic" },
    { name: "Personal Care", href: "/products?category=personal-care" },
    { name: "Devices", href: "/products?category=devices" },
    { name: "Baby Care", href: "/products?category=baby-care" },
  ];

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-1 origin-left bg-primary"
        style={{ scaleX }}
      />
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-6 sm:px-4 py-2 sm:py-4 pointer-events-none">
        <motion.div 
          layout
          initial={false}
          className={cn(
            "w-full max-w-7xl pointer-events-auto transition-all duration-500 ease-in-out",
            "border border-slate-200/50 bg-white/80 backdrop-blur-xl shadow-xl overflow-hidden",
            isScrolled ? "rounded-full py-2 px-6" : "rounded-2xl sm:rounded-[2.5rem] py-3 px-4 md:px-8"
          )}
        >
          <div className="flex flex-col gap-2">
            {/* Main Row */}
            <div className="flex items-center justify-between gap-2 sm:gap-8">
              {/* Logo */}
              <Link href="/" className="flex shrink-0 items-center transition-transform hover:scale-105 active:scale-95">
                <motion.div layout>
                  <Image
                    src="/logo.png"
                    alt="Limra Pharmacy & Surgical"
                    width={280}
                    height={80}
                    className={cn(
                      "w-auto object-contain transition-all duration-500",
                      isScrolled ? "h-8 sm:h-12" : "h-10 sm:h-20"
                    )}
                    priority
                  />
                </motion.div>
              </Link>

              {/* Search Bar - Desktop */}
              <div className="hidden flex-1 max-w-xl lg:flex h-11 transition-all duration-300">
                <div className="group relative flex items-center bg-slate-100 rounded-full border border-transparent focus-within:border-primary focus-within:bg-white h-full w-full transition-all duration-300">
                  <button className="flex items-center justify-center w-12 h-full text-slate-400 group-focus-within:text-primary">
                    <Search className="size-5" />
                  </button>
                  <input
                    type="text"
                    placeholder="Search for medicines, surgical gear..."
                    className="bg-transparent border-none outline-none text-sm h-full w-full placeholder:text-slate-500 pr-4"
                  />
                </div>
              </div>

              {/* Actions & Contact */}
              <div className="flex items-center gap-2 sm:gap-6">
                {/* Contact Us - Desktop */}
                <AnimatePresence>
                  {!isScrolled && (
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="hidden sm:flex flex-col items-end justify-center"
                    >
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Contact Us</span>
                      <div className="flex flex-col items-end">
                        <a href="tel:+917388292324" className="text-xs font-black text-slate-900 hover:text-primary transition-colors">
                          +91 73882 92324
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Action Buttons */}
                <div className="flex items-center gap-1 sm:gap-2">
                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                    <Link href="/cart" className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-slate-100 text-primary transition-all hover:bg-primary hover:text-white group">
                      <ShoppingCart className="size-5" />
                      <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white shadow-sm ring-2 ring-white">
                        1
                      </span>
                    </Link>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="hidden xs:flex">
                    <Link href="/login" className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-slate-100 text-primary transition-all hover:bg-primary hover:text-white">
                      <User className="size-5" />
                    </Link>
                  </motion.div>

                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsMenuOpen(!isMenuOpen)} 
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white md:hidden"
                  >
                    {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Navigation Row - Desktop */}
            <AnimatePresence>
              {!isScrolled && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="hidden md:block border-t border-slate-100 pt-3"
                >
                  <nav className="flex items-center justify-center gap-8 overflow-x-auto pb-1 no-scrollbar">
                    {categories.map((cat) => (
                      <Link 
                        key={cat.name} 
                        href={cat.href}
                        className="relative text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-primary transition-colors whitespace-nowrap group"
                      >
                        {cat.name}
                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all group-hover:w-full" />
                      </Link>
                    ))}
                    <Link 
                      href="/upload-prescription" 
                      className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary hover:text-white"
                    >
                      <Upload className="h-3.5 w-3.5" />
                      Upload Prescription
                    </Link>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Content */}
          <div 
            className={cn(
              "grid transition-all duration-500 ease-in-out md:hidden",
              isMenuOpen ? "grid-rows-[1fr] opacity-100 py-6 border-t mt-4" : "grid-rows-[0fr] opacity-0"
            )}
          >
            <div className="overflow-hidden space-y-6">
              <div className="relative w-full h-12">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for medicines..."
                  className="w-full h-full rounded-2xl bg-slate-100 border-none px-12 text-sm outline-none focus:bg-white focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div className="space-y-4">
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-black">Categories</span>
                <div className="grid grid-cols-2 gap-2">
                  {categories.map((cat) => (
                    <Link 
                      key={cat.name} 
                      href={cat.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-center h-12 rounded-xl bg-slate-50 text-xs font-bold text-slate-700 active:bg-primary active:text-white transition-all"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                 <Link href="/login" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
                    <User className="h-4 w-4" />
                    Account
                 </Link>
                 <Link href="/cart" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-2 h-12 rounded-xl bg-slate-100 text-sm font-bold text-slate-700">
                    <ShoppingCart className="h-4 w-4" />
                    Cart
                 </Link>
              </div>

              <Link href="/upload-prescription" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-center gap-3 h-14 rounded-2xl bg-primary text-white text-base font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
                <Upload className="h-5 w-5" />
                Upload Prescription
              </Link>

              <div className="pt-4 border-t border-slate-100 text-center">
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mb-1">Emergency Support</p>
                <a href="tel:+917388292324" className="text-lg font-black text-primary">+91 73882 92324</a>
              </div>
            </div>
          </div>
        </motion.div>
      </header>
    </>
  );
};

export default Navbar;
