"use client";

import React, { useState } from "react";
import { 
  User, 
  Package, 
  MapPin, 
  FileText, 
  Bell, 
  Settings, 
  LogOut,
  ChevronRight,
  Clock,
  Plus
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("Orders");

  const menuItems = [
    { name: "My Orders", icon: Package },
    { name: "Prescriptions", icon: FileText },
    { name: "Saved Addresses", icon: MapPin },
    { name: "Profile Info", icon: User },
    { name: "Notifications", icon: Bell },
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-8 text-center">
                <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary border-4 border-white shadow-sm">
                   <User className="h-10 w-10" />
                </div>
                <h2 className="text-xl font-bold text-slate-900">John Doe</h2>
                <p className="text-sm text-slate-500">+91 98765 43210</p>
              </div>

              <nav className="space-y-1">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => setActiveTab(item.name)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                      activeTab === item.name 
                        ? "bg-primary text-white shadow-md" 
                        : "text-slate-600 hover:bg-slate-50 hover:text-primary"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="h-5 w-5" />
                      {item.name}
                    </div>
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </button>
                ))}
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold text-red-500 hover:bg-red-50 transition-all mt-4">
                  <LogOut className="h-5 w-5" />
                  Logout
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1 space-y-6">
            <div className="rounded-2xl border bg-white p-8 shadow-sm">
              <h1 className="text-2xl font-bold text-slate-900 mb-8">{activeTab}</h1>

              {activeTab === "My Orders" && (
                <div className="space-y-6">
                   {[
                     { id: "#ORD-9542", date: "Oct 12, 2023", total: "₹450", status: "Delivered", items: ["Paracetamol 500mg (2)"] },
                     { id: "#ORD-9541", date: "Oct 10, 2023", total: "₹1,250", status: "Processing", items: ["Digital B.P Monitor (1)"] }
                   ].map((order) => (
                     <div key={order.id} className="rounded-xl border p-6 transition-all hover:border-primary/20 hover:shadow-sm">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b">
                           <div>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Order ID</p>
                              <p className="font-bold text-slate-900">{order.id}</p>
                           </div>
                           <div>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Date</p>
                              <p className="font-bold text-slate-900">{order.date}</p>
                           </div>
                           <div>
                              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Total</p>
                              <p className="font-bold text-primary">{order.total}</p>
                           </div>
                           <div>
                              <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-[10px] font-bold ${
                                order.status === "Delivered" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"
                              }`}>
                                <Clock className="h-3 w-3" />
                                {order.status}
                              </span>
                           </div>
                        </div>
                        <div className="flex items-center justify-between">
                           <p className="text-sm text-slate-600">{order.items.join(", ")}</p>
                           <button className="text-sm font-bold text-primary hover:underline">View Details</button>
                        </div>
                     </div>
                   ))}
                </div>
              )}

              {activeTab === "Prescriptions" && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                   <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-50 text-slate-300">
                      <FileText className="h-8 w-8" />
                   </div>
                   <h3 className="text-lg font-bold text-slate-900">No Prescriptions Yet</h3>
                   <p className="text-sm text-slate-500 max-w-xs mt-2">Upload your prescriptions during checkout to see them here.</p>
                </div>
              )}

              {activeTab === "Saved Addresses" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="rounded-xl border-2 border-primary bg-primary/5 p-6 relative">
                      <span className="absolute top-4 right-4 bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded">Home</span>
                      <h4 className="font-bold text-slate-900 mb-2">John Doe</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        H.No 123, Civil Lines, Near District Hospital,<br />
                        Fatehpur, Uttar Pradesh - 212601
                      </p>
                      <div className="mt-4 flex gap-4">
                         <button className="text-xs font-bold text-primary hover:underline">Edit</button>
                         <button className="text-xs font-bold text-red-500 hover:underline">Remove</button>
                      </div>
                   </div>
                   <button className="rounded-xl border-2 border-dashed border-slate-200 p-6 flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary transition-all">
                      <Plus className="h-8 w-8 mb-2" />
                      <span className="font-bold">Add New Address</span>
                   </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
