"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
              <span className="text-xl font-bold">L</span>
            </div>
            <span className="hidden text-xl font-bold tracking-tight text-slate-900 sm:block">
              Limra<span className="text-primary">Pharmacy</span>
            </span>
          </Link>

          {/* Search Bar - Desktop */}
          <div className="hidden flex-1 max-w-md md:flex">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search for medicines, health products..."
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden items-center gap-6 md:flex">
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-primary">
                Categories <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 top-full hidden w-48 rounded-lg border bg-white p-2 shadow-lg group-hover:block">
                <Link href="/products?category=tablets" className="block rounded-md px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Tablets</Link>
                <Link href="/products?category=syrups" className="block rounded-md px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Syrups</Link>
                <Link href="/products?category=ayurvedic" className="block rounded-md px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Ayurvedic</Link>
                <Link href="/products?category=personal-care" className="block rounded-md px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary">Personal Care</Link>
              </div>
            </div>
            <Link href="/login" className="text-sm font-medium text-slate-600 hover:text-primary">
              Login
            </Link>
            <Link href="/cart" className="relative text-slate-600 hover:text-primary">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                0
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <Link href="/cart" className="relative text-slate-600">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                0
              </span>
            </Link>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-primary"
                />
              </div>
              <Link href="/products" className="text-sm font-medium text-slate-600">All Products</Link>
              <Link href="/login" className="text-sm font-medium text-slate-600">Login / Signup</Link>
              <Link href="/dashboard" className="text-sm font-medium text-slate-600">My Profile</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
