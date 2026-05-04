"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Minus, Plus, ArrowLeft, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: "1", name: "Paracetamol 500mg Tablets", price: 45, quantity: 2, image: "/medicine-placeholder.png" },
    { id: "2", name: "Digital Blood Pressure Monitor", price: 1850, quantity: 1, image: "/device-placeholder.png" },
  ]);

  const updateQuantity = (id: string, delta: number) => {
    setCartItems(items => items.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCharge = subtotal > 500 ? 0 : 50;
  const total = subtotal + deliveryCharge;

  if (cartItems.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4">
        <div className="mb-6 rounded-full bg-slate-50 p-8 text-slate-300">
          <ShoppingBag className="h-20 w-20" />
        </div>
        <h1 className="mb-2 text-2xl font-bold text-slate-900">Your cart is empty</h1>
        <p className="mb-8 text-slate-500">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/products" className="rounded-full bg-primary px-8 py-3 font-bold text-white transition-all hover:bg-primary-dark">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="mb-8 text-3xl font-bold text-slate-900">Shopping Cart</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 rounded-2xl border bg-white p-6 transition-all hover:shadow-sm">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl border bg-slate-50">
                  <Image src={item.image} alt={item.name} fill className="object-contain p-2" />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg font-bold text-slate-900">{item.name}</h3>
                  <p className="text-sm font-medium text-primary">{formatPrice(item.price)}</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-lg border p-1">
                    <button onClick={() => updateQuantity(item.id, -1)} className="flex h-8 w-8 items-center justify-center hover:bg-slate-50"><Minus className="h-3 w-3" /></button>
                    <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="flex h-8 w-8 items-center justify-center hover:bg-slate-50"><Plus className="h-3 w-3" /></button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>

                <div className="text-right min-w-[80px]">
                  <p className="font-bold text-slate-900">{formatPrice(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}

            <Link href="/products" className="inline-flex items-center gap-2 font-bold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" />
              Continue Shopping
            </Link>
          </div>

          {/* Summary */}
          <aside>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-xl font-bold text-slate-900">Order Summary</h3>
              
              <div className="space-y-4">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Delivery Charges</span>
                  <span className={deliveryCharge === 0 ? "text-green-600 font-bold" : "font-medium"}>
                    {deliveryCharge === 0 ? "FREE" : formatPrice(deliveryCharge)}
                  </span>
                </div>
                {deliveryCharge > 0 && (
                   <p className="text-[10px] text-slate-400">Shop for ₹{500 - subtotal} more for FREE delivery</p>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-bold text-slate-900">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                  <p className="mt-1 text-xs text-slate-500 italic">Inclusive of all taxes</p>
                </div>

                <Link href="/checkout" className="block">
                  <button className="w-full rounded-xl bg-primary py-4 font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg">
                    Proceed to Checkout
                  </button>
                </Link>
              </div>
            </div>
            
            <div className="mt-6 rounded-xl border-2 border-dashed border-primary/20 bg-primary/5 p-4">
              <p className="text-xs font-medium text-slate-600">
                <span className="font-bold text-primary">Note:</span> Prescription medicines will require a valid prescription upload at checkout.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
