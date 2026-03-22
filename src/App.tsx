/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight, Menu, X, ArrowLeft, Check, CreditCard, BarChart3, TrendingUp, Users, Globe, Zap, MapPin, Search, Info, Loader2 } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isHome = location.pathname === "/";

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-8 py-6 flex justify-between items-center border-b ${
        isScrolled || !isHome
          ? "bg-white/80 backdrop-blur-md border-black/10 py-4" 
          : "bg-transparent border-transparent"
      }`}
    >
      <Link to="/" className="text-2xl font-black tracking-tighter font-headline uppercase">
        Google AI DanTe Pilot
      </Link>
      <div className="hidden md:flex gap-12 items-center">
        <Link to="/impact-report" className="font-headline font-bold tracking-tighter uppercase text-red-600 hover:text-red-700 transition-colors text-sm">
          Impact Report
        </Link>
        <Link to="/products" className="font-headline font-bold tracking-tighter uppercase text-black/60 hover:text-black transition-colors text-sm">
          Sponsored Products
        </Link>
        <Link to="/cause" className="font-headline font-bold tracking-tighter uppercase text-black/60 hover:text-black transition-colors text-sm">
          The Cause
        </Link>
        <Link to="/awards" className="font-headline font-bold tracking-tighter uppercase text-black/60 hover:text-black transition-colors text-sm">
          Tournament Awards
        </Link>
      </div>
      <button className="bg-black text-white px-6 py-3 font-headline font-bold tracking-tighter uppercase text-sm hover:bg-zinc-800 transition-all">
        Join Program
      </button>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-black text-white py-20 px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
      <div className="mb-12 md:mb-0">
        <div className="text-xl font-bold font-headline mb-4 uppercase">Google AI DanTe Pilot</div>
        <p className="text-zinc-500 font-body text-[10px] tracking-[0.1em] uppercase max-w-xs leading-relaxed">
          Advancing the global narrative through architectural philanthropy and artistic support.
        </p>
      </div>
      <div className="flex flex-col items-end gap-12">
        <div className="flex gap-8">
          <Link to="/impact-report" className="text-zinc-500 hover:text-white transition-colors font-body text-[10px] tracking-[0.1em] uppercase">
            Impact Report
          </Link>
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a key={link} href="#" className="text-zinc-500 hover:text-white transition-colors font-body text-[10px] tracking-[0.1em] uppercase">
              {link}
            </a>
          ))}
        </div>
        <div className="text-zinc-500 font-body text-[10px] tracking-[0.1em] uppercase">
          © 2024 Google AI DanTe Pilot. All Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

// --- Views ---

const HomeView = () => (
  <div className="min-h-screen">
    {/* Hero Section */}
    <section className="px-8 pt-40 pb-24 md:pb-48">
      <div className="editorial-grid">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 md:col-span-8"
        >
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-zinc-500 mb-6 block">
            Established 2024 / Foundation
          </span>
          <h1 className="font-headline text-6xl md:text-[8.5rem] leading-[0.85] font-bold tracking-tighter uppercase mb-12">
            Captain of <br />Culture
          </h1>
          <p className="font-body text-xl md:text-2xl max-w-2xl leading-relaxed text-zinc-600 mb-12">
            A rigorous commitment to the advancement of the performing arts. We bridge the gap between creative excellence and sustainable institutional support.
          </p>
          <div className="flex flex-col md:flex-row gap-6">
            <Link to="/cause" className="bg-black text-white px-10 py-5 font-headline font-bold uppercase tracking-tighter text-lg hover:bg-zinc-800 transition-all text-center">
              Support the Cause
            </Link>
            <Link to="/impact-report" className="border border-black/20 text-black px-10 py-5 font-headline font-bold uppercase tracking-tighter text-lg hover:bg-zinc-100 transition-colors text-center">
              View Impact Report
            </Link>
          </div>
        </motion.div>
        <div className="hidden md:block col-span-4 relative h-full">
          <div className="absolute inset-0 bg-zinc-200 flex items-center justify-center">
            <span className="font-headline text-[15rem] font-bold text-zinc-300 select-none">C</span>
          </div>
        </div>
      </div>
    </section>

    {/* Mission Statement */}
    <section className="bg-black py-32 px-8 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/60 mb-8 block">
          The Mission
        </span>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="font-headline text-4xl md:text-6xl text-white leading-tight font-light mb-20 max-w-5xl italic"
        >
          "Culture is not a luxury. It is a fundamental necessity for a progressive society to articulate its own evolution."
        </motion.h2>
        <div className="flex justify-end">
          <div className="bg-zinc-900 p-6 inline-block border border-white/10">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-white/60 block mb-2">
              Impact Metric
            </span>
            <span className="font-headline text-4xl font-bold text-white">100% Direct Funding</span>
          </div>
        </div>
      </div>
    </section>

    {/* Preview Sections */}
    <section className="py-24 px-8 bg-zinc-100">
      <div className="flex justify-between items-end mb-12">
        <h2 className="font-headline text-4xl font-bold uppercase tracking-tighter">Sponsored Collections</h2>
        <Link to="/products" className="font-headline font-bold uppercase text-sm flex items-center gap-2 hover:underline">
          View All <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {[1, 2, 3].map((i) => (
          <div key={i} className="aspect-[4/5] bg-zinc-200 overflow-hidden">
             <img 
                className="w-full h-full object-cover grayscale brightness-90 hover:scale-105 transition-transform duration-700" 
                src={`https://picsum.photos/seed/performing-art-${i}/800/1000`} 
                alt="Performing Art Preview"
                referrerPolicy="no-referrer"
              />
          </div>
        ))}
      </div>
    </section>
  </div>
);

const ProductsView = () => {
  const products = [
    {
      id: 1,
      title: "Architectural Bowl No. 01",
      price: "$450",
      series: "Series A / 100 Pieces",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4DeTbP9Vj3yntMU7otbBih0jDSVwpDVRO-SMVmeIFucaW0Hvla8IJi_9df6b8cCOJESUTaBLYpLk1R1gbnsnnQlxbvSPdWngXN1osuqeCGkmuh7vQ0quD-7yA66dRl2s7Nhd8rEy0vCsPb03lqr710dzZ2yU32Gxtn525Lnx7OE9L7XwwBt1nk5y6Ps2MmlZz9sknmCKGarO8fWLHYXrdU0soSPTUNrWD7ZTPu0BEccGQAk4AhzoCeFNgkHb9qlEAWD_mGoQI0MFc"
    },
    {
      id: 2,
      title: "Chronograph Monolith",
      price: "$1,200",
      series: "Series A / 50 Pieces",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBongJgMVfK5eUsdyM3MO743qIIyAWu1erP0MuiF_HUTaEsrwAm-8sawxLN0R0k-Cw7cQAorK1a20WsVno_e75d1ZySiNA3Hs8afrOeMI6aGNH_S-Hee3o5vwYYmX8S5GVcr6VgVgbdL7SRuLEkRllGUxu0HZ0JTla5kBUs4QO40q8auww6w15czh99vyWz2pfAcby1Inv0XTGcC9WbZON6eBdBm_Hn1i0vyg_c_1kdIEWugWSecaEkJ5yaL9Slprk7z4bLnLOP7RAT"
    },
    {
      id: 3,
      title: "Sonic Isolation H-01",
      price: "$680",
      series: "Series B / 200 Pieces",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCs3Y9ipEfMSLjg5xcb8P7yGDTVSQCqHgsDEc11PKEDVJIG08ty1IlWcf7GjBf8fPC337sLnOBR-TpNOhDCRFpJJ1DhJ2SKs8LF6bpUF8X4ZCtb1EDAt1IV12E9rFzpsqXqIGsqQ2mFF2vKII2CypYP1H_31ftEWwE3qQFLbV7T6HbgRdX0d276rdTFnmOXsIA3G9m6gdeMpTtX5Z94SwaTigVGzKksUf7QDcHbHQ8SLh_wncBE1tl86ORWf1ldE4Bu71UWTvjPIwOW"
    },
    {
      id: 4,
      title: "Minimalist Vessel",
      price: "$320",
      series: "Series C / 150 Pieces",
      image: "https://picsum.photos/seed/vessel/800/1000"
    },
    {
      id: 5,
      title: "Acoustic Panel X",
      price: "$890",
      series: "Series D / 30 Pieces",
      image: "https://picsum.photos/seed/acoustic/800/1000"
    },
    {
      id: 6,
      title: "Sculptural Lamp",
      price: "$560",
      series: "Series E / 75 Pieces",
      image: "https://picsum.photos/seed/lamp/800/1000"
    }
  ];

  return (
    <div className="pt-32 pb-24 px-8 bg-zinc-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <span className="font-body text-[10px] tracking-[0.2em] uppercase text-zinc-500 mb-4 block">
            Limited Edition Collections
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter uppercase">Sponsored Products</h2>
        </div>
        <p className="font-body text-sm text-zinc-500 max-w-xs uppercase tracking-wider leading-relaxed">
          Every acquisition directly fuels the performing art cause fund.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        {products.map((product) => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-8 group cursor-pointer transition-all hover:shadow-2xl"
          >
            <div className="aspect-[4/5] bg-zinc-100 mb-8 relative overflow-hidden">
              <img 
                className="w-full h-full object-cover grayscale brightness-90 group-hover:scale-105 transition-transform duration-700" 
                src={product.image} 
                alt={product.title}
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-headline font-bold text-xl uppercase tracking-tighter">{product.title}</h3>
              <span className="font-body text-sm font-bold">{product.price}</span>
            </div>
            <span className="font-body text-[10px] tracking-widest text-zinc-400 uppercase">{product.series}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const DonationForm = () => {
  const [amount, setAmount] = useState<string>("100");
  const [customAmount, setCustomAmount] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  const selectedAmount = amount === "custom" ? customAmount : amount;

  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black text-white p-12 md:p-24 text-center flex flex-col items-center justify-center min-h-[600px]"
      >
        <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mb-8">
          <Check className="w-10 h-10" />
        </div>
        <h3 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">Thank You</h3>
        <p className="font-body text-zinc-400 max-w-md mx-auto uppercase tracking-widest text-sm leading-relaxed">
          Your contribution of ${selectedAmount} has been received. You are now a recognized patron of the performing arts.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="mt-12 font-headline font-bold uppercase text-sm border-b border-white pb-1 hover:text-zinc-400 transition-colors"
        >
          Make Another Donation
        </button>
      </motion.div>
    );
  }

  return (
    <section id="donation-form" className="bg-zinc-100 py-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-zinc-500 mb-4 block">Direct Support</span>
          <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-6">Become a Patron</h2>
          <p className="font-body text-zinc-500 uppercase tracking-widest text-xs max-w-md mx-auto">
            Select an amount to contribute directly to the foundation's artistic residency program.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Amount Selection */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["50", "100", "500", "custom"].map((val) => (
              <button
                key={val}
                type="button"
                onClick={() => setAmount(val)}
                className={`py-6 font-headline font-bold text-2xl border-2 transition-all ${
                  amount === val 
                    ? "bg-black text-white border-black" 
                    : "bg-white text-black border-black/5 hover:border-black/20"
                }`}
              >
                {val === "custom" ? "Custom" : `$${val}`}
              </button>
            ))}
          </div>

          {amount === "custom" && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <span className="absolute left-6 top-1/2 -translate-y-1/2 font-headline font-bold text-2xl">$</span>
              <input 
                type="number"
                required
                placeholder="Enter Amount"
                value={customAmount}
                onChange={(e) => setCustomAmount(e.target.value)}
                className="w-full bg-white border-2 border-black p-6 pl-12 font-headline font-bold text-2xl focus:outline-none"
              />
            </motion.div>
          )}

          {/* Payment Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <label className="font-headline font-bold uppercase text-xs tracking-widest block">Full Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-white border-b-2 border-black/10 p-4 font-body focus:border-black focus:outline-none transition-colors"
                placeholder="ALEXANDER VOGEL"
              />
            </div>
            <div className="space-y-4">
              <label className="font-headline font-bold uppercase text-xs tracking-widest block">Email Address</label>
              <input 
                type="email" 
                required
                className="w-full bg-white border-b-2 border-black/10 p-4 font-body focus:border-black focus:outline-none transition-colors"
                placeholder="AV@FOUNDATION.ORG"
              />
            </div>
          </div>

          <div className="bg-white p-8 border-2 border-black/5 space-y-8">
            <div className="flex items-center gap-4 mb-4">
              <CreditCard className="w-6 h-6" />
              <span className="font-headline font-bold uppercase text-sm tracking-tighter">Secure Payment Details</span>
            </div>
            
            <div className="space-y-4">
              <label className="font-headline font-bold uppercase text-[10px] tracking-widest block text-zinc-400">Card Number</label>
              <input 
                type="text" 
                required
                className="w-full border-b border-black/10 py-2 font-mono tracking-widest focus:border-black focus:outline-none transition-colors"
                placeholder="0000 0000 0000 0000"
              />
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="font-headline font-bold uppercase text-[10px] tracking-widest block text-zinc-400">Expiry</label>
                <input 
                  type="text" 
                  required
                  className="w-full border-b border-black/10 py-2 font-mono tracking-widest focus:border-black focus:outline-none transition-colors"
                  placeholder="MM/YY"
                />
              </div>
              <div className="space-y-4">
                <label className="font-headline font-bold uppercase text-[10px] tracking-widest block text-zinc-400">CVC</label>
                <input 
                  type="text" 
                  required
                  className="w-full border-b border-black/10 py-2 font-mono tracking-widest focus:border-black focus:outline-none transition-colors"
                  placeholder="000"
                />
              </div>
            </div>
          </div>

          <button 
            disabled={isSubmitting}
            className="w-full bg-black text-white py-8 font-headline font-bold text-2xl uppercase tracking-tighter hover:bg-zinc-800 transition-all disabled:bg-zinc-400 flex items-center justify-center gap-4"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Processing...</span>
            ) : (
              <>Complete Donation of ${selectedAmount || "0"}</>
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

const TownExplorer = ({ town, isOpen, onClose }: { town: string, isOpen: boolean, onClose: () => void }) => {
  const [info, setInfo] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState<{uri: string, title: string}[]>([]);

  useEffect(() => {
    if (isOpen && town) {
      exploreTown();
    }
  }, [isOpen, town]);

  const exploreTown = async () => {
    setLoading(true);
    setInfo(null);
    setLinks([]);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: `Provide a detailed cultural and historical summary of the town of ${town}, Italy. 
        Specifically focus on its potential as a cultural hub for performing arts. 
        You MUST identify and list all major Theaters (Teatri) and Cultural Sites (Luoghi della Cultura) located STRICTLY within the administrative boundaries of ${town}.
        
        CRITICAL: Do NOT include landmarks or venues from neighboring towns or hubs. 
        For example, if exploring Serrapetrona, do NOT mention or link to the Sferisterio in Macerata.
        
        Examples of what to look for:
        - Theaters like "Teatro Politeama" or "Teatro Vaccaj" in Tolentino.
        - Archaeological sites like "Anfiteatro Romano - Parco Archeologico Urbs Salvia" in Urbisaglia.
        
        Ensure every theater and cultural site mentioned is identified so it can be linked via Google Maps grounding.`,
        config: {
          tools: [{ googleMaps: {} }],
        },
      });

      setInfo(response.text || "No information available.");
      
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      if (chunks) {
        const mapsLinks = chunks
          .filter(chunk => chunk.maps)
          .map(chunk => ({
            uri: chunk.maps!.uri,
            title: chunk.maps!.title || "View on Google Maps"
          }));
        setLinks(mapsLinks);
      }
    } catch (error) {
      console.error("Error exploring town:", error);
      setInfo("Failed to load town information. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
      />
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative bg-zinc-900 border border-white/10 w-full max-w-2xl max-h-[80vh] overflow-hidden flex flex-col"
      >
        <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black">
          <div className="flex items-center gap-3">
            <MapPin className="text-red-600 w-6 h-6" />
            <h3 className="font-headline text-2xl font-bold uppercase tracking-tighter text-white">{town}</h3>
          </div>
          <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-8 overflow-y-auto custom-scrollbar">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <Loader2 className="w-10 h-10 text-red-600 animate-spin" />
              <span className="font-body text-[10px] uppercase tracking-widest text-zinc-500">Consulting Maps Grounding...</span>
            </div>
          ) : (
            <div className="space-y-8">
              <div className="prose prose-invert max-w-none font-body text-zinc-300 leading-relaxed text-sm">
                <Markdown>{info || ""}</Markdown>
              </div>

              {links.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-headline text-lg font-bold uppercase tracking-tighter text-white">Luoghi di Interesse della località e nelle vicinanze</h4>
                  <span className="font-body text-[10px] uppercase tracking-widest text-zinc-500 block">Verified Locations</span>
                  <div className="grid grid-cols-1 gap-2">
                    {links.map((link, idx) => (
                      <a 
                        key={idx}
                        href={link.uri}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between p-4 bg-white/5 border border-white/10 hover:bg-red-600 transition-all group"
                      >
                        <span className="font-headline font-bold uppercase text-xs tracking-tight text-white">{link.title}</span>
                        <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(town + ', Italy')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-black py-4 font-headline font-bold uppercase tracking-tighter text-center block hover:bg-red-600 hover:text-white transition-all"
              >
                Open in Google Maps
              </a>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

const FundingGoals = () => {
  const [selectedTown, setSelectedTown] = useState<string | null>(null);

  const hubs = [
    {
      name: "Tolentino",
      raised: 850000,
      goal: 1000000,
      spokes: ["Caldarola", "Belforte del Chienti", "Serrapetrona", "Sarnano"],
      color: "#991b1b" // red-800
    },
    {
      name: "Macerata",
      raised: 620000,
      goal: 1000000,
      spokes: ["San Ginesio", "Ripe San Ginesio", "Sant'Angelo in Pontano", "Penna San Giovanni", "Loro Piceno", "Urbisaglia"],
      color: "#450a0a" // red-950
    }
  ];

  const totalRaised = hubs.reduce((acc, hub) => acc + hub.raised, 0);

  return (
    <section className="bg-black py-24 px-8 border-t border-white/10">
      <TownExplorer 
        town={selectedTown || ""} 
        isOpen={!!selectedTown} 
        onClose={() => setSelectedTown(null)} 
      />
      
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <span className="font-body text-[10px] tracking-[0.4em] uppercase text-red-600 mb-4 block">Strategic Funding</span>
            <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter uppercase text-white">Funding Goals</h2>
          </div>
          <div className="text-right">
            <span className="font-body text-[10px] tracking-[0.2em] uppercase text-zinc-500 block mb-2">Total Amount Raised</span>
            <div className="font-headline text-4xl md:text-6xl font-bold text-red-600 tracking-tighter">
              €{totalRaised.toLocaleString()}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {hubs.map((hub) => {
            const percentage = (hub.raised / hub.goal) * 100;
            return (
              <motion.div 
                key={hub.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-zinc-900/50 p-12 border border-white/10 relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="flex justify-between items-baseline mb-8">
                    <button 
                      onClick={() => setSelectedTown(hub.name)}
                      className="font-headline text-4xl md:text-5xl font-bold uppercase tracking-tighter text-white hover:text-red-600 transition-colors flex items-center gap-4 text-left"
                    >
                      {hub.name}
                      <MapPin className="w-6 h-6 opacity-50" />
                    </button>
                    <span className="font-body text-sm font-bold text-red-600 uppercase tracking-widest">Hub Candidate</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-12">
                    <div className="flex justify-between items-end mb-4">
                      <span className="font-body text-[10px] uppercase tracking-widest text-zinc-500">Progress to Goal</span>
                      <span className="font-headline text-2xl font-bold text-white">{percentage.toFixed(0)}%</span>
                    </div>
                    <div className="h-4 bg-white/5 w-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="h-full bg-red-600"
                      />
                    </div>
                    <div className="flex justify-between mt-4">
                      <span className="font-headline font-bold text-zinc-400">€{hub.raised.toLocaleString()}</span>
                      <span className="font-headline font-bold text-zinc-600">Goal: €{hub.goal.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Spokes */}
                  <div>
                    <span className="font-body text-[10px] uppercase tracking-widest text-zinc-500 block mb-6">Contributing Spokes</span>
                    <div className="flex flex-wrap gap-3">
                      {hub.spokes.map((spoke) => (
                        <button 
                          key={spoke} 
                          onClick={() => setSelectedTown(spoke)}
                          className="px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-body uppercase tracking-widest text-zinc-300 hover:bg-red-600 hover:text-white transition-colors flex items-center gap-2 group/spoke"
                        >
                          {spoke}
                          <MapPin className="w-3 h-3 opacity-30 group-hover/spoke:opacity-100" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Background Accent */}
                <div className="absolute -right-12 -bottom-12 font-headline text-[12rem] font-bold text-white/5 select-none group-hover:text-red-600/10 transition-colors">
                  {hub.name[0]}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CauseView = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="pt-32 min-h-screen">
      <div className="px-8 pb-24">
        <div className="editorial-grid">
          <div className="col-span-12 md:col-span-5 mb-16 md:mb-0">
            <div className="sticky top-32">
              <span className="font-body text-[10px] tracking-[0.2em] uppercase text-zinc-500 mb-6 block">
                Philanthropic Pillar
              </span>
              <h2 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter uppercase leading-[0.9] mb-8">
                Performing Art Cause
              </h2>
              <div className="w-24 h-1 bg-black mb-8"></div>
              <p className="font-body text-lg text-zinc-600 leading-relaxed mb-12">
                The performing arts face unprecedented challenges in the modern era. Our initiative focuses on providing the infrastructure and resources necessary for world-class artists to push the boundaries of human expression.
              </p>
              <div className="space-y-6 mb-12">
                <div className="p-6 bg-zinc-100 border-l-4 border-black">
                  <h5 className="font-headline font-bold uppercase text-sm mb-2">Direct Impact</h5>
                  <p className="font-body text-sm text-zinc-500">100% of proceeds from sponsored products are allocated to venue restoration and artistic grants.</p>
                </div>
                <div className="p-6 bg-zinc-100 border-l-4 border-black">
                  <h5 className="font-headline font-bold uppercase text-sm mb-2">Global Reach</h5>
                  <p className="font-body text-sm text-zinc-500">Supporting over 50 venues across 12 countries, impacting thousands of performers annually.</p>
                </div>
              </div>
              <button 
                onClick={scrollToForm}
                className="w-full bg-black text-white py-6 font-headline font-bold uppercase tracking-tighter hover:bg-zinc-800 transition-all"
              >
                Donate to the Fund
              </button>
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 space-y-32">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-zinc-200 mb-8 overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNW-G5px6G1PZWoTP-ZlJV8JeHwKXJv1EuqJmu-TyaOGL3W1insPYYMfbfxcKRkDVzxUoz_fSn4Kd0878OvxyYG3N2CLTZSEcEEIwvcsQUDDgjq5t3CqOIqaIiPWOYyyUNYwfhESrbQYcoX2GfRMlz6_yKKSHoOMOMosbhxCRGj3ErbhV5S7jVsvYYpuFuzrrNOiM14SrGW_kyrstg2aMmTP5qU6ZMiAMMFWhOrm2_QNFPFtkVxiuyNCz1KVr1hH4XnB0ZOX56U7Yy" 
                  alt="Infrastructure Revival"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-headline font-bold text-2xl uppercase mb-4 tracking-tighter">01. Infrastructure Revival</h4>
              <p className="font-body text-sm text-zinc-500 leading-relaxed max-w-md">
                Restoring historic venues and equipping them with state-of-the-art technological backbones for digital-hybrid performances.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="aspect-video bg-zinc-200 mb-8 overflow-hidden">
                <img 
                  className="w-full h-full object-cover grayscale hover:scale-105 transition-transform duration-700" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG0n5HiUK7w66k3qjxHi4RRrvOPdxE0c80KZj5pbeIDW0Y5lFkw-FbTUC3zfPvjLvU9bNVnsfxgNJeeGrTToF14daeap4nLFbcaA4gTK3RvbPMqqRqYRNF3q_42eDW-f4xGsNdcWL9QJq1F3qfH_JSkmmtxyJl9x0QIidrAAE1wDap28zQetew8aimTOKWYiFv_6YmMPpWihxDtBOaZ5R9Lp0oeNJdw2Xx21A7P1sABXdAtjHxLWhmZlkNZEe3UjrUmbLJjnRRi4XW" 
                  alt="Artistic Residencies"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-headline font-bold text-2xl uppercase mb-4 tracking-tighter">02. Artistic Residencies</h4>
              <p className="font-body text-sm text-zinc-500 leading-relaxed max-w-md">
                Funding year-long residencies for emerging choreographers and composers to develop radical new works without financial constraint.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      <div ref={formRef}>
        <FundingGoals />
        <DonationForm />
      </div>
    </div>
  );
};

const ImpactReportView = () => {
  const stakeholderData = [
    { name: 'Local Artists', value: 40 },
    { name: 'Micro-Enterprises', value: 25 },
    { name: 'Community', value: 20 },
    { name: 'Sponsors', value: 15 },
  ];

  const COLORS = ['#000000', '#450a0a', '#7f1d1d', '#991b1b'];

  const maturityData = [
    { name: 'Pre-Project', maturity: 20 },
    { name: 'Post-Project', maturity: 85 },
  ];

  return (
    <div className="bg-black text-white min-h-screen pt-32 pb-24 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24 border-b border-white/10 pb-12">
          <span className="font-body text-[10px] tracking-[0.4em] uppercase text-red-600 mb-6 block">Annual Impact Assessment</span>
          <h1 className="font-headline text-6xl md:text-9xl font-bold tracking-tighter uppercase leading-none mb-8">
            DanTe <br />Project
          </h1>
          <p className="font-body text-xl text-zinc-400 max-w-2xl uppercase tracking-widest leading-relaxed">
            Measuring the socio-economic resonance of artistic intervention in the Monti Azzurri Hub.
          </p>
        </div>

        {/* Top Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 bg-white/5 mb-24">
          {/* 1. Total Economic Value */}
          <div className="bg-black p-12 border border-white/10">
            <BarChart3 className="text-red-600 mb-6 w-8 h-8" />
            <span className="font-body text-[10px] tracking-widest uppercase text-zinc-500 block mb-4">01. Total Economic Value</span>
            <div className="font-headline text-5xl font-bold tracking-tighter">€2,450,000</div>
          </div>

          {/* 2. Share of Value Shared */}
          <div className="bg-black p-12 border border-white/10">
            <Users className="text-red-600 mb-6 w-8 h-8" />
            <span className="font-body text-[10px] tracking-widest uppercase text-zinc-500 block mb-4">02. Value Shared Among Stakeholders</span>
            <div className="font-headline text-5xl font-bold tracking-tighter">85%</div>
          </div>

          {/* 4. Brand Awareness */}
          <div className="bg-black p-12 border border-white/10">
            <TrendingUp className="text-red-600 mb-6 w-8 h-8" />
            <span className="font-body text-[10px] tracking-widest uppercase text-zinc-500 block mb-4">04. Sponsor Brand Awareness</span>
            <div className="font-headline text-5xl font-bold tracking-tighter text-red-600">+42%</div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* 3. Distribution of Value */}
          <div className="bg-zinc-900/50 p-12 border border-white/10">
            <h3 className="font-headline text-2xl font-bold uppercase tracking-tighter mb-12">03. Stakeholder Distribution</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={stakeholderData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {stakeholderData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} stroke="#ffffff20" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff20', borderRadius: '0' }}
                    itemStyle={{ color: '#fff', fontSize: '12px', textTransform: 'uppercase' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stakeholderData.map((item, i) => (
                <div key={item.name} className="flex items-center gap-2">
                  <div className="w-3 h-3" style={{ backgroundColor: COLORS[i] }}></div>
                  <span className="font-body text-[10px] uppercase tracking-widest text-zinc-500">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 5. Digital Maturity */}
          <div className="bg-zinc-900/50 p-12 border border-white/10">
            <h3 className="font-headline text-2xl font-bold uppercase tracking-tighter mb-12">05. Digital Maturity Growth</h3>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={maturityData}>
                  <XAxis dataKey="name" stroke="#52525b" fontSize={10} tickLine={false} axisLine={false} />
                  <Bar dataKey="maturity" fill="#991b1b" radius={[4, 4, 0, 0]} />
                  <Tooltip cursor={{fill: 'transparent'}} contentStyle={{ backgroundColor: '#000', border: '1px solid #ffffff20', borderRadius: '0' }} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="font-body text-[10px] uppercase tracking-widest text-zinc-500 mt-8">
              Measured across 45 local micro-enterprises in the Monti Azzurri region.
            </p>
          </div>
        </div>

        {/* Secondary Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          <div className="space-y-12">
            {/* 6. Advertising Value */}
            <div className="flex items-start gap-8 group">
              <div className="font-headline text-4xl font-bold text-red-600">06</div>
              <div>
                <h4 className="font-headline font-bold uppercase tracking-tighter text-xl mb-2">Advertising Value Equivalent</h4>
                <p className="font-body text-sm text-zinc-500 uppercase tracking-widest leading-relaxed">
                  3.2x return on sponsor's initial investment through global media resonance.
                </p>
              </div>
            </div>

            {/* 7. Avoided Costs */}
            <div className="flex items-start gap-8 group">
              <div className="font-headline text-4xl font-bold text-red-600">07</div>
              <div>
                <h4 className="font-headline font-bold uppercase tracking-tighter text-xl mb-2">Avoided Costs for Funders</h4>
                <p className="font-body text-sm text-zinc-500 uppercase tracking-widest leading-relaxed">
                  €120,000 saved through the Startup Intervention efficiency protocols.
                </p>
              </div>
            </div>

            {/* 8. Value Transferred */}
            <div className="flex items-start gap-8 group">
              <div className="font-headline text-4xl font-bold text-red-600">08</div>
              <div>
                <h4 className="font-headline font-bold uppercase tracking-tighter text-xl mb-2">Monti Azzurri Hub Transfer</h4>
                <p className="font-body text-sm text-zinc-500 uppercase tracking-widest leading-relaxed">
                  €450,000 directly transferred to performing arts infrastructure.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            {/* 9. Local Destination Value */}
            <div className="bg-red-950/20 p-8 border border-red-900/30">
              <Globe className="text-red-600 mb-6 w-8 h-8" />
              <h4 className="font-headline font-bold uppercase tracking-tighter text-xl mb-4">09. Local Destination Value</h4>
              <div className="font-headline text-5xl font-bold tracking-tighter mb-4">€890,000</div>
              <p className="font-body text-xs text-zinc-500 uppercase tracking-widest leading-relaxed">
                Economic uplift for tourism and hospitality services in the destination area.
              </p>
            </div>

            {/* 10. Cultural Captains Donations */}
            <div className="bg-zinc-900 p-8 border border-white/10">
              <Zap className="text-red-600 mb-6 w-8 h-8" />
              <h4 className="font-headline font-bold uppercase tracking-tighter text-xl mb-4">10. Cultural Captains Fund</h4>
              <div className="font-headline text-5xl font-bold tracking-tighter mb-4">€1,200,000</div>
              <p className="font-body text-xs text-zinc-500 uppercase tracking-widest leading-relaxed">
                Total contributions from our global network of private patrons.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center py-24 border-t border-white/10">
          <h2 className="font-headline text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-12">Join the Movement</h2>
          <Link to="/cause" className="inline-block bg-red-600 text-white px-12 py-6 font-headline font-bold uppercase tracking-tighter text-xl hover:bg-red-700 transition-all">
            Become a Patron
          </Link>
        </div>
      </div>
    </div>
  );
};

const AwardsView = () => {
  const locations = [
    { id: "01", city: "New York", venue: "Grand Opera House / Nov 2024", description: "The inaugural Hub & Spoke gala celebrating architectural innovation in theater design." },
    { id: "02", city: "London", venue: "The Concrete Hall / Jan 2025", description: "A showcase of brutalist restoration and its impact on modern dance performance." },
    { id: "03", city: "Tokyo", venue: "Zenith Pavilion / Mar 2025", description: "Exploring the intersection of digital media and traditional Kabuki stagecraft." },
    { id: "04", city: "Paris", venue: "The Monolith / May 2025", description: "A retrospective on the foundation's first decade of sustainable institutional support." },
    { id: "05", city: "Berlin", venue: "Bauhaus Center / July 2025", description: "Honoring the next generation of experimental composers." },
    { id: "06", city: "Milan", venue: "Teatro Nuovo / Sept 2025", description: "Celebrating excellence in classical opera production." }
  ];

  return (
    <div className="bg-zinc-200 pt-32 pb-24 px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-baseline mb-24">
          <h2 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter uppercase">
            Hub & Spoke<br />Awards
          </h2>
          <span className="font-body text-xs tracking-[0.3em] font-bold uppercase hidden md:block text-zinc-500">
            Global Context
          </span>
        </div>
        <div className="border-t border-black/10">
          {locations.map((loc) => (
            <motion.div 
              key={loc.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-start md:items-center py-12 border-b border-black/10 hover:bg-zinc-300 transition-colors group px-4 cursor-pointer"
            >
              <span className="font-headline text-xl font-bold w-full md:w-24 mb-4 md:mb-0">{loc.id}</span>
              <div className="flex-1">
                <h3 className="font-headline text-3xl md:text-5xl font-bold tracking-tighter uppercase mb-2">{loc.city}</h3>
                <p className="font-body text-sm text-zinc-600 max-w-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {loc.description}
                </p>
              </div>
              <div className="flex flex-col items-end gap-4 mt-6 md:mt-0">
                <span className="font-body text-[10px] tracking-widest text-zinc-500 uppercase">
                  {loc.venue}
                </span>
                <a className="flex items-center gap-2 font-headline font-bold uppercase text-sm group-hover:underline" href="#">
                  Details <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/products" element={<ProductsView />} />
            <Route path="/cause" element={<CauseView />} />
            <Route path="/awards" element={<AwardsView />} />
            <Route path="/impact-report" element={<ImpactReportView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
