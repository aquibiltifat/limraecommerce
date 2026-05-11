"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  category: string;
  rating?: number;
  prescriptionRequired?: boolean;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  discount,
  image,
  category,
  rating = 4.5,
  prescriptionRequired = false,
}: ProductCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="group relative rounded-2xl border border-slate-100 bg-white p-4 transition-all hover:shadow-2xl hover:border-primary/10"
    >
      {discount && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold text-white shadow-lg">
          {discount}% OFF
        </span>
      )}
      
      <Link href={`/product/${id}`} className="block">
        <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-slate-50">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium text-slate-500">{rating}</span>
          <span className="mx-1 text-slate-300">•</span>
          <span className="text-xs text-slate-500">{category}</span>
        </div>
        
        <h3 className="mb-1 line-clamp-1 text-sm font-bold text-slate-900 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {prescriptionRequired && (
          <div className="mb-2 inline-flex items-center gap-1 rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-medium text-red-600">
            Prescription Required
          </div>
        )}
        
        <div className="mt-3 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-lg font-black text-slate-900">{formatPrice(price)}</span>
            {originalPrice && (
              <span className="text-[10px] text-slate-400 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          
          <motion.button 
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary-dark"
          >
            <Plus className="h-6 w-6" />
          </motion.button>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
