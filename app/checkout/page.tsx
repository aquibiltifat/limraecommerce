"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  MapPin, 
  Phone, 
  User, 
  Mail, 
  ChevronRight, 
  Upload, 
  CheckCircle2, 
  AlertCircle 
} from "lucide-react";
import { formatPrice } from "@/lib/utils";

const CheckoutPage = () => {
  const [step, setStep] = useState(1);
  const [prescriptionUploaded, setPrescriptionUploaded] = useState(false);

  const subtotal = 1895;
  const deliveryCharge = 0;
  const total = subtotal + deliveryCharge;

  return (
    <div className="bg-slate-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Checkout Steps */}
        <div className="mx-auto mb-12 flex max-w-2xl items-center justify-between">
          {[
            { label: "Address", step: 1 },
            { label: "Prescription", step: 2 },
            { label: "Payment", step: 3 }
          ].map((item, idx, arr) => (
            <React.Fragment key={item.step}>
              <div className="flex flex-col items-center gap-2">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                  step >= item.step ? "bg-primary text-white shadow-lg" : "bg-slate-200 text-slate-500"
                }`}>
                  {step > item.step ? <CheckCircle2 className="h-6 w-6" /> : item.step}
                </div>
                <span className={`text-xs font-bold ${step >= item.step ? "text-primary" : "text-slate-400"}`}>
                  {item.label}
                </span>
              </div>
              {idx < arr.length - 1 && (
                <div className={`h-0.5 flex-1 mx-4 ${step > item.step ? "bg-primary" : "bg-slate-200"}`}></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {step === 1 && (
              <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
                  <MapPin className="h-5 w-5 text-primary" />
                  Delivery Address
                </h2>
                <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-bold text-slate-700">Full Name</label>
                    <input type="text" className="w-full rounded-xl border bg-slate-50 p-3 outline-none focus:border-primary" placeholder="Receiver's name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">Mobile Number</label>
                    <input type="tel" className="w-full rounded-xl border bg-slate-50 p-3 outline-none focus:border-primary" placeholder="10-digit number" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">Pincode</label>
                    <input type="text" className="w-full rounded-xl border bg-slate-50 p-3 outline-none focus:border-primary" placeholder="212601" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-bold text-slate-700">Full Address</label>
                    <textarea className="w-full rounded-xl border bg-slate-50 p-3 outline-none focus:border-primary" rows={3} placeholder="House No., Building Name, Street, etc."></textarea>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">City</label>
                    <input type="text" className="w-full rounded-xl border bg-slate-50 p-3 outline-none focus:border-primary" defaultValue="Fatehpur" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-bold text-slate-700">State</label>
                    <input type="text" className="w-full rounded-xl border bg-slate-50 p-3 outline-none focus:border-primary" defaultValue="Uttar Pradesh" />
                  </div>
                  
                  <button 
                    type="button"
                    onClick={() => setStep(2)}
                    className="sm:col-span-2 mt-4 rounded-xl bg-primary py-4 font-bold text-white transition-all hover:bg-primary-dark"
                  >
                    Deliver to this Address
                  </button>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
                  <Upload className="h-5 w-5 text-primary" />
                  Upload Prescription
                </h2>
                <div className="mb-8 rounded-2xl bg-medical-blue p-6 border border-primary/10">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-primary">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">Why do I need to upload a prescription?</p>
                      <p className="text-xs text-slate-600 leading-relaxed mt-1">Government regulations require a valid prescription for certain medicines to ensure your safety and correct dosage.</p>
                    </div>
                  </div>
                </div>

                <div 
                  className={`flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-12 text-center transition-all ${
                    prescriptionUploaded ? "border-secondary bg-secondary/5" : "border-slate-200 hover:border-primary"
                  }`}
                  onClick={() => setPrescriptionUploaded(true)}
                >
                  {prescriptionUploaded ? (
                    <>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-white">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">Prescription Uploaded!</h3>
                      <p className="text-sm text-slate-500 mb-6">prescription_v1.jpg</p>
                      <button onClick={(e) => {e.stopPropagation(); setPrescriptionUploaded(false)}} className="text-sm font-bold text-red-500 hover:underline">Remove and Change</button>
                    </>
                  ) : (
                    <>
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Upload className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">Choose a file to upload</h3>
                      <p className="mb-6 text-sm text-slate-500">Supported formats: JPG, PNG, PDF (Max 5MB)</p>
                      <button className="rounded-lg bg-white border-2 border-primary px-6 py-2 font-bold text-primary hover:bg-primary hover:text-white transition-all">
                        Browse Files
                      </button>
                    </>
                  )}
                </div>

                <div className="mt-8 flex gap-4">
                   <button onClick={() => setStep(1)} className="flex-1 rounded-xl border py-4 font-bold text-slate-600 hover:bg-slate-50">Back</button>
                   <button 
                    disabled={!prescriptionUploaded}
                    onClick={() => setStep(3)} 
                    className="flex-[2] rounded-xl bg-primary py-4 font-bold text-white transition-all hover:bg-primary-dark disabled:opacity-50"
                  >
                    Continue to Payment
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="rounded-2xl border bg-white p-8 shadow-sm">
                <h2 className="mb-6 flex items-center gap-2 text-xl font-bold text-slate-900">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  Select Payment Method
                </h2>
                <div className="space-y-4">
                  {[
                    { id: "cod", label: "Cash on Delivery", sub: "Pay at your doorstep" },
                    { id: "upi", label: "UPI / QR Code", sub: "PhonePe, Google Pay, Paytm" },
                    { id: "card", label: "Credit / Debit Card", sub: "All major cards supported" }
                  ].map((method) => (
                    <label key={method.id} className="flex cursor-pointer items-center justify-between rounded-xl border p-6 transition-all hover:border-primary hover:bg-primary/5">
                      <div className="flex items-center gap-4">
                        <input type="radio" name="payment" className="h-5 w-5 text-primary" />
                        <div>
                          <p className="font-bold text-slate-900">{method.label}</p>
                          <p className="text-xs text-slate-500">{method.sub}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                   <button onClick={() => setStep(2)} className="flex-1 rounded-xl border py-4 font-bold text-slate-600 hover:bg-slate-50">Back</button>
                   <Link href="/order-confirmation" className="flex-[2]">
                    <button className="w-full rounded-xl bg-primary py-4 font-bold text-white transition-all hover:bg-primary-dark">
                      Place Order {formatPrice(total)}
                    </button>
                   </Link>
                </div>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <aside className="space-y-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="mb-6 text-lg font-bold text-slate-900 border-b pb-4">Order Details</h3>
              <div className="space-y-4 mb-6">
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Items (2)</span>
                    <span className="font-bold text-slate-900">{formatPrice(subtotal)}</span>
                 </div>
                 <div className="flex justify-between text-sm">
                    <span className="text-slate-500">Delivery</span>
                    <span className="font-bold text-green-600">FREE</span>
                 </div>
              </div>
              <div className="border-t pt-4 flex justify-between items-center">
                 <span className="font-bold text-slate-900">Amount Payable</span>
                 <span className="text-xl font-bold text-primary">{formatPrice(total)}</span>
              </div>
            </div>

            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-4">Items in your order</h4>
              <div className="space-y-4">
                 <div className="flex gap-3">
                    <div className="h-12 w-12 rounded border bg-slate-50 shrink-0"></div>
                    <div className="text-xs">
                       <p className="font-bold text-slate-900 line-clamp-1">Paracetamol 500mg Tablets</p>
                       <p className="text-slate-500 mt-1">Qty: 2 • {formatPrice(90)}</p>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <div className="h-12 w-12 rounded border bg-slate-50 shrink-0"></div>
                    <div className="text-xs">
                       <p className="font-bold text-slate-900 line-clamp-1">Digital Blood Pressure Monitor</p>
                       <p className="text-slate-500 mt-1">Qty: 1 • {formatPrice(1850)}</p>
                    </div>
                 </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
