import React from "react";
import Link from "next/link";
import { Pill, Baby, Activity, Heart, Sparkles, Wind } from "lucide-react";

const categories = [
  { name: "Medicines", icon: Pill, color: "bg-blue-100 text-blue-600", count: "1200+ Products" },
  { name: "Baby Care", icon: Baby, color: "bg-pink-100 text-pink-600", count: "450+ Products" },
  { name: "Wellness", icon: Heart, color: "bg-green-100 text-green-600", count: "800+ Products" },
  { name: "Personal Care", icon: Sparkles, color: "bg-purple-100 text-purple-600", count: "600+ Products" },
  { name: "Health Devices", icon: Activity, color: "bg-orange-100 text-orange-600", count: "200+ Products" },
  { name: "Ayurvedic", icon: Wind, color: "bg-teal-100 text-teal-600", count: "350+ Products" },
];

const CategorySection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="mb-2 text-3xl font-bold text-slate-900">Shop by Category</h2>
            <p className="text-slate-500">Find what you need by browsing our top categories</p>
          </div>
          <Link href="/products" className="font-semibold text-primary hover:underline">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/products?category=${category.name.toLowerCase().replace(" ", "-")}`}
              className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-slate-50/50 p-6 transition-all hover:border-primary/20 hover:bg-white hover:shadow-xl"
            >
              <div className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${category.color} transition-transform group-hover:scale-110`}>
                <category.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-1 text-center font-bold text-slate-900">{category.name}</h3>
              <p className="text-center text-xs text-slate-400">{category.count}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
