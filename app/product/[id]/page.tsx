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
    <div className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="mb-8 flex items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/products" className="hover:text-primary">Medicines</Link>
          <ChevronRight className="h-4 w-4" />
          <span className="font-medium text-slate-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-3xl border bg-slate-50">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-12"
              />
              {product.discount > 0 && (
                <span className="absolute left-6 top-6 rounded-full bg-secondary px-3 py-1 text-sm font-bold text-white">
                  {product.discount}% OFF
                </span>
              )}
            </div>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative h-24 w-24 cursor-pointer overflow-hidden rounded-xl border bg-slate-50 transition-all hover:border-primary">
                   <Image src={product.image} alt={product.name} fill className="object-contain p-2" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="mb-2 inline-block rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary uppercase">
                {product.brand}
              </span>
              <h1 className="mb-2 text-3xl font-bold text-slate-900 md:text-4xl">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-bold text-slate-900">{product.rating}</span>
                  <span className="text-sm text-slate-500">({product.reviewsCount} reviews)</span>
                </div>
                <span className="text-slate-300">|</span>
                <span className="text-sm font-medium text-green-600">In Stock</span>
              </div>
            </div>

            <div className="mb-8 border-b border-t py-6">
              <div className="mb-2 flex items-center gap-3">
                <span className="text-3xl font-bold text-slate-900">{formatPrice(product.price)}</span>
                <span className="text-lg text-slate-400 line-through">{formatPrice(product.originalPrice)}</span>
              </div>
              <p className="text-sm text-slate-500">Inclusive of all taxes</p>
            </div>

            {product.prescriptionRequired && (
              <div className="mb-8 flex items-start gap-3 rounded-2xl bg-red-50 p-4 text-red-700 border border-red-100">
                <AlertCircle className="h-5 w-5 shrink-0" />
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide">Prescription Required</p>
                  <p className="text-xs opacity-80">You need to upload a valid prescription from a doctor to buy this medicine.</p>
                </div>
              </div>
            )}

            <div className="mb-8 flex flex-wrap items-center gap-6">
              <div className="flex items-center rounded-xl border p-1">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              
              <button className="flex flex-1 items-center justify-center gap-3 rounded-xl bg-primary px-8 py-4 font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg md:flex-none">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <div className="flex flex-col items-center gap-2 rounded-2xl border bg-slate-50/50 p-4 text-center">
                <Truck className="h-6 w-6 text-primary" />
                <span className="text-xs font-bold text-slate-900">Free Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border bg-slate-50/50 p-4 text-center">
                <RotateCcw className="h-6 w-6 text-primary" />
                <span className="text-xs font-bold text-slate-900">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center gap-2 rounded-2xl border bg-slate-50/50 p-4 text-center">
                <ShieldCheck className="h-6 w-6 text-primary" />
                <span className="text-xs font-bold text-slate-900">100% Secure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="flex border-b">
            {["Description", "Dosage", "Reviews"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-4 text-sm font-bold transition-all ${
                  activeTab === tab 
                    ? "border-b-2 border-primary text-primary" 
                    : "text-slate-500 hover:text-slate-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="py-8">
            {activeTab === "Description" && (
              <div className="max-w-3xl space-y-4">
                <p className="text-slate-600 leading-relaxed">{product.description}</p>
                <h4 className="font-bold text-slate-900">Side Effects:</h4>
                <p className="text-slate-600">{product.sideEffects}</p>
              </div>
            )}
            {activeTab === "Dosage" && (
              <div className="max-w-3xl">
                <p className="text-slate-600 leading-relaxed">{product.dosage}</p>
              </div>
            )}
            {activeTab === "Reviews" && (
              <div className="max-w-3xl">
                <p className="text-slate-600 italic">No reviews yet. Be the first to review this product!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
