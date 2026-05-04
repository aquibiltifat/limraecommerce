"use client";

import React, { useState } from "react";
import ProductCard from "@/components/product/ProductCard";
import { Filter, SlidersHorizontal, ChevronDown } from "lucide-react";

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
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">All Products</h1>
            <p className="text-slate-500">Showing {filteredProducts.length} medicines and health products</p>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative group">
              <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50">
                <SlidersHorizontal className="h-4 w-4" />
                Sort: {sortBy}
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute right-0 mt-2 hidden w-40 rounded-lg border bg-white p-2 shadow-xl group-hover:block z-20">
                {["Popularity", "Price: Low to High", "Price: High to Low", "Newest"].map(option => (
                  <button 
                    key={option} 
                    onClick={() => setSortBy(option)}
                    className="block w-full text-left rounded-md px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-primary"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="sticky top-24 space-y-6 rounded-2xl border bg-white p-6 shadow-sm">
              <div>
                <h3 className="mb-4 flex items-center gap-2 font-bold text-slate-900">
                  <Filter className="h-4 w-4 text-primary" />
                  Categories
                </h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-left rounded-md px-3 py-2 text-sm transition-colors ${
                        selectedCategory === category 
                          ? "bg-primary/10 text-primary font-bold" 
                          : "text-slate-600 hover:bg-slate-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="border-t pt-6">
                <h3 className="mb-4 font-bold text-slate-900">Price Range</h3>
                <div className="space-y-4">
                  <input type="range" className="w-full accent-primary" min="0" max="5000" />
                  <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                    <span>₹0</span>
                    <span>₹5000+</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-6">
                <h3 className="mb-4 font-bold text-slate-900">Availability</h3>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary h-4 w-4" defaultChecked />
                  <span className="text-sm text-slate-600">Exclude Out of Stock</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="flex-1">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="flex h-64 flex-col items-center justify-center rounded-2xl border-2 border-dashed bg-white text-center">
                <p className="text-lg font-medium text-slate-500">No products found in this category.</p>
                <button 
                  onClick={() => setSelectedCategory("All")}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
