"use client";

import React, { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  ChevronLeft, 
  ChevronRight,
  Download
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

const AdminMedicines = () => {
  const [medicines] = useState([
    { id: "1", name: "Paracetamol 500mg", category: "Tablets", price: 45, stock: 120, expiry: "2025-12-31" },
    { id: "2", name: "Amoxicillin 250mg", category: "Antibiotics", price: 185, stock: 45, expiry: "2025-08-15" },
    { id: "3", name: "Cough Syrup (Herbal)", category: "Syrups", price: 110, stock: 85, expiry: "2024-11-20" },
    { id: "4", name: "Digital B.P Monitor", category: "Devices", price: 1850, stock: 15, expiry: "N/A" },
    { id: "5", name: "Vitamin C Chewable", category: "Wellness", price: 120, stock: 200, expiry: "2026-03-10" },
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Medicines Inventory</h1>
          <p className="text-slate-500">Manage your stock, pricing, and product details.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 rounded-xl border bg-white px-4 py-2.5 text-sm font-bold text-slate-700 shadow-sm hover:bg-slate-50">
            <Download className="h-4 w-4" />
            Export
          </button>
          <button className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white shadow-lg hover:bg-primary-dark">
            <Plus className="h-4 w-4" />
            Add Medicine
          </button>
        </div>
      </div>

      <div className="rounded-2xl border bg-white shadow-sm overflow-hidden">
        {/* Table Filters */}
        <div className="flex flex-col gap-4 border-b p-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input type="text" placeholder="Search medicines..." className="w-full rounded-lg bg-slate-50 border-none py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20" />
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-400">
                <th className="px-6 py-4">Medicine Name</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Expiry Date</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y text-sm">
              {medicines.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center text-primary font-bold">
                        {item.name.charAt(0)}
                      </div>
                      <span className="font-bold text-slate-900">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900">{formatPrice(item.price)}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${item.stock < 50 ? "bg-red-500" : "bg-green-500"}`}></div>
                      <span className="font-medium text-slate-600">{item.stock} Units</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-500">{item.expiry}</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="rounded-lg p-2 text-slate-400 hover:bg-primary/10 hover:text-primary transition-all">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="rounded-lg p-2 text-slate-400 hover:bg-red-50 hover:text-red-600 transition-all">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between border-t p-4">
          <p className="text-sm text-slate-500">Showing 1 to 5 of 42 entries</p>
          <div className="flex items-center gap-2">
            <button className="rounded-lg border bg-white p-2 text-slate-400 hover:bg-slate-50 disabled:opacity-50" disabled>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="rounded-lg border bg-white p-2 text-slate-400 hover:bg-slate-50">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMedicines;
