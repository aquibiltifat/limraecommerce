import React from "react";
import { 
  TrendingUp, 
  ShoppingBag, 
  Users, 
  DollarSign, 
  Pill, 
  ArrowUpRight, 
  ArrowDownRight,
  Clock
} from "lucide-react";

const AdminDashboard = () => {
  const stats = [
    { name: "Total Revenue", value: "₹4,25,000", change: "+12.5%", icon: DollarSign, trend: "up" },
    { name: "Total Orders", value: "1,240", change: "+8.2%", icon: ShoppingBag, trend: "up" },
    { name: "Total Customers", value: "850", change: "-2.4%", icon: Users, trend: "down" },
    { name: "Medicines in Stock", value: "420", change: "+5.1%", icon: Pill, trend: "up" },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Dashboard Overview</h1>
        <p className="text-slate-500">Welcome back, Admin! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.name} className="rounded-2xl border bg-white p-6 shadow-sm transition-all hover:shadow-md">
            <div className="flex items-center justify-between mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <stat.icon className="h-6 w-6" />
              </div>
              <span className={`flex items-center gap-1 text-xs font-bold ${stat.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                {stat.change}
                {stat.trend === "up" ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
              </span>
            </div>
            <h3 className="text-sm font-medium text-slate-500">{stat.name}</h3>
            <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Recent Orders */}
        <div className="lg:col-span-2 rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-slate-900">Recent Orders</h2>
            <button className="text-sm font-bold text-primary hover:underline">View All</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b text-xs font-bold uppercase tracking-wider text-slate-400">
                  <th className="pb-4 pr-4">Order ID</th>
                  <th className="pb-4 pr-4">Customer</th>
                  <th className="pb-4 pr-4">Status</th>
                  <th className="pb-4 pr-4 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y text-sm">
                {[
                  { id: "#ORD-9542", customer: "Rahul Sharma", status: "Delivered", amount: "₹450" },
                  { id: "#ORD-9541", customer: "Priya Singh", status: "Processing", amount: "₹1,250" },
                  { id: "#ORD-9540", customer: "Amit Patel", status: "Cancelled", amount: "₹320" },
                  { id: "#ORD-9539", customer: "Sanjay Gupta", status: "Delivered", amount: "₹2,100" },
                ].map((order) => (
                  <tr key={order.id} className="group hover:bg-slate-50">
                    <td className="py-4 font-medium text-slate-900">{order.id}</td>
                    <td className="py-4 text-slate-600">{order.customer}</td>
                    <td className="py-4">
                      <span className={`inline-flex items-center rounded-full px-2 py-1 text-[10px] font-bold ${
                        order.status === "Delivered" ? "bg-green-100 text-green-700" :
                        order.status === "Processing" ? "bg-blue-100 text-blue-700" :
                        "bg-red-100 text-red-700"
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-4 text-right font-bold text-slate-900">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Low Stock Notifications */}
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
           <h2 className="text-lg font-bold text-slate-900 mb-6">Inventory Alerts</h2>
           <div className="space-y-4">
              {[
                { name: "Paracetamol 500mg", stock: 12, status: "Low Stock" },
                { name: "Vitamin C Syrup", stock: 5, status: "Critical" },
                { name: "Digital Thermometer", stock: 0, status: "Out of Stock" },
              ].map((item) => (
                <div key={item.name} className="flex items-center gap-4 rounded-xl border p-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                    item.status === "Critical" || item.status === "Out of Stock" ? "bg-red-100 text-red-600" : "bg-orange-100 text-orange-600"
                  }`}>
                    <Pill className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900">{item.name}</p>
                    <p className="text-xs text-slate-500">Only {item.stock} units left</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wide ${
                    item.status === "Critical" || item.status === "Out of Stock" ? "text-red-600" : "text-orange-600"
                  }`}>
                    {item.status}
                  </span>
                </div>
              ))}
           </div>
           <button className="w-full mt-6 rounded-xl border-2 border-primary/20 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-white transition-all">
             Manage Inventory
           </button>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
