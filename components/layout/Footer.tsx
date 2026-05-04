import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Send, Camera, Play } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Info */}
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <span className="text-xl font-bold">L</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                Limra<span className="text-primary">Pharmacy</span>
              </span>
            </div>
            <p className="mb-6 text-sm leading-relaxed">
              Your trusted partner in health. We provide quality medicines and healthcare products delivered right to your doorstep in Fatehpur.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors"><Globe className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Send className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Camera className="h-5 w-5" /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Play className="h-5 w-5" /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/products" className="hover:text-primary transition-colors">All Medicines</Link></li>
              <li><Link href="/products?category=personal-care" className="hover:text-primary transition-colors">Personal Care</Link></li>
              <li><Link href="/products?category=ayurvedic" className="hover:text-primary transition-colors">Ayurvedic</Link></li>
              <li><Link href="/offers" className="hover:text-primary transition-colors">Special Offers</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Customer Service</h3>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="mb-6 text-lg font-bold text-white">Store Location</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-primary" />
                <span>297/280, G.T. Road, Baqar Ganj, Mohalla kheldar, Lathi Mohal, Fatehpur, Uttar Pradesh 212601</span>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <span>contact@limrapharmacy.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-xs">
          <p>© {new Date().getFullYear()} Limra Pharmacy. All rights reserved. Developed for Fatehpur Community.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
