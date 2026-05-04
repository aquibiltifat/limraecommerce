import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { formatPrice } from "@/lib/utils";

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
    <div className="group relative rounded-xl border bg-white p-4 transition-all hover:shadow-lg">
      {discount && (
        <span className="absolute left-3 top-3 z-10 rounded-full bg-secondary px-2 py-1 text-[10px] font-bold text-white">
          {discount}% OFF
        </span>
      )}
      
      <Link href={`/product/${id}`} className="block">
        <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-slate-50">
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain p-4 transition-transform group-hover:scale-105"
          />
        </div>
        
        <div className="mb-2 flex items-center gap-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium text-slate-500">{rating}</span>
          <span className="mx-1 text-slate-300">•</span>
          <span className="text-xs text-slate-500">{category}</span>
        </div>
        
        <h3 className="mb-1 line-clamp-1 text-sm font-bold text-slate-900 group-hover:text-primary">
          {name}
        </h3>
        
        {prescriptionRequired && (
          <div className="mb-2 inline-flex items-center gap-1 rounded bg-red-50 px-1.5 py-0.5 text-[10px] font-medium text-red-600">
            Prescription Required
          </div>
        )}
        
        <div className="mt-3 flex items-center justify-between">
          <div>
            <span className="text-lg font-bold text-slate-900">{formatPrice(price)}</span>
            {originalPrice && (
              <span className="ml-2 text-xs text-slate-400 line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
          
          <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-white transition-colors hover:bg-primary-dark">
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
