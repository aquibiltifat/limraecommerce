"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-[80vh] items-center justify-center bg-slate-50 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-white shadow-lg">
             <span className="text-3xl font-bold">L</span>
          </div>
          <h1 className="text-3xl font-bold text-slate-900">Welcome Back</h1>
          <p className="text-slate-500">Login to your Limra Pharmacy account</p>
        </div>

        <div className="rounded-3xl border bg-white p-8 shadow-sm lg:p-10">
          <form className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-bold text-slate-700">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-bold text-slate-700">Password</label>
                <Link href="#" className="text-xs font-bold text-primary hover:underline">Forgot Password?</Link>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-12 outline-none transition-all focus:border-primary focus:ring-1 focus:ring-primary"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-4 font-bold text-white transition-all hover:bg-primary-dark hover:shadow-lg"
            >
              Login <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          <div className="mt-8 text-center text-sm">
            <p className="text-slate-500">
              Don't have an account?{" "}
              <Link href="/signup" className="font-bold text-primary hover:underline">
                Create Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
