"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Pill, 
  ClipboardList, 
  Users, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Bell,
  Search
} from "lucide-react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, href: "/admin" },
    { name: "Medicines", icon: Pill, href: "/admin/medicines" },
    { name: "Orders", icon: ClipboardList, href: "/admin/orders" },
    { name: "Customers", icon: Users, href: "/admin/customers" },
    { name: "Settings", icon: Settings, href: "/admin/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 transform bg-slate-900 text-slate-300 transition-transform lg:static lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-800">
          <Link href="/admin" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
              <span className="font-bold">L</span>
            </div>
            <span className="font-bold text-white">Limra Admin</span>
          </Link>
          <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden">
            <X className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-8 px-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                pathname === item.href 
                  ? "bg-primary text-white shadow-lg" 
                  : "hover:bg-slate-800 hover:text-white"
              }`}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 w-full px-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-slate-400 hover:bg-red-500/10 hover:text-red-500 transition-all">
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-1 flex-col">
        {/* Top Header */}
        <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden text-slate-600">
            <Menu className="h-6 w-6" />
          </button>
          
          <div className="hidden max-w-md flex-1 lg:flex ml-4">
             <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input type="text" placeholder="Search for orders, medicines..." className="w-full rounded-lg bg-slate-50 border-none py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20" />
             </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative text-slate-500 hover:text-primary">
              <Bell className="h-6 w-6" />
              <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-primary/10 border-2 border-primary/20 overflow-hidden">
               <div className="h-full w-full flex items-center justify-center text-primary font-bold text-xs">AD</div>
            </div>
          </div>
        </header>

        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
