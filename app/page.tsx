"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Gamepad2, Shield, Zap, Globe, Lock, Mail, 
  ChevronDown, Rocket, Menu, X, Download, Flame, 
  Server, Smartphone, Layers, AlertTriangle, CheckCircle2, Apple 
} from "lucide-react";

// --- CONFIGURATION ---
const APP_NAME = "GameNect";
const CONTACT_EMAIL = "leminhquang2k4@gmail.com"; 
const EFFECTIVE_DATE = "December 06, 2025";
const APP_VERSION = "1.0.0 (Cosmic Beta)";
const GOOGLE_PLAY_URL = "https://play.google.com/apps/testing/com.qco.gamenect";

// --- UI HELPERS ---

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-16 relative z-10">
    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4 uppercase italic">
      {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">{subtitle}</span>
    </h2>
    <div className="h-1 w-24 bg-orange-600 mx-auto rounded-full shadow-[0_0_15px_rgba(234,88,12,0.8)]" />
  </div>
);

const GlowBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] mix-blend-screen" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
  </div>
);

// --- COMPONENTS ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-xl border-b border-white/10 py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-orange-500 rounded-lg blur-md opacity-40 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative w-10 h-10 bg-gradient-to-br from-zinc-800 to-black border border-orange-500/50 rounded-lg flex items-center justify-center">
              <Flame className="text-orange-500" size={20} />
            </div>
          </div>
          <span className="text-xl md:text-2xl font-black text-white tracking-tighter uppercase italic">
            Game<span className="text-orange-500">Nect</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-bold text-sm text-gray-400 tracking-wide">
          {['Features', 'Tech'].map((item) => (
            <button 
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())} 
              className="hover:text-white hover:scale-105 transition-all"
            >
              {item.toUpperCase()}
            </button>
          ))}
          <button 
            onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')}
            className="px-6 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-bold transition-all shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.5)] flex items-center gap-2"
          >
            <Download size={16} /> BETA
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-950 border-b border-orange-500/20 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-center">
              {['Features', 'Tech'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-lg text-gray-300 font-bold uppercase"
                >
                  {item}
                </button>
              ))}
              <button onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')} className="text-lg text-orange-500 font-bold flex items-center justify-center gap-2">
                <Rocket size={18} /> Download App
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20">
      <GlowBackground />
      
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 rounded-full border border-orange-500/30 bg-orange-500/5 backdrop-blur-md">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
            </span>
            <span className="text-orange-400 text-sm font-mono font-bold tracking-widest uppercase">
              Alpha Protocol Initiated
            </span>
          </div>
          
          {/* Headline */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.9] mb-6">
            FIND YOUR <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-orange-400 to-orange-700">SQUAD</span>
          </h1>
          
          <p className="mt-8 text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
            Stop playing with toxic randoms. <strong className="text-white">GameNect</strong> uses advanced AI to match you with teammates who fit your rank, vibe, and playstyle.
          </p>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')}
              className="group relative px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-xl font-black text-lg uppercase tracking-wide overflow-hidden shadow-[0_0_40px_rgba(234,88,12,0.4)] transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">Get Beta Access <Rocket size={20}/></span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById("features")?.scrollIntoView({behavior: "smooth"})}
              className="px-8 py-4 bg-zinc-900 border border-zinc-800 text-gray-300 hover:text-white rounded-xl font-bold text-lg uppercase tracking-wide hover:border-orange-500/50 transition-colors"
            >
              Explore Features
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        style={{ y: y1 }}
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none"
      />
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -5 }}
    className="group p-8 rounded-2xl bg-zinc-900 border border-white/5 hover:border-orange-500/50 hover:bg-zinc-900/80 transition-all duration-300 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={100} />
    </div>
    
    <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 border border-white/5 group-hover:bg-orange-600 group-hover:text-white group-hover:shadow-[0_0_20px_rgba(234,88,12,0.5)] transition-all">
      <Icon className="text-gray-400 group-hover:text-white transition-colors" size={28} />
    </div>
    
    <h3 className="text-2xl font-black text-white mb-3 uppercase italic tracking-tight">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm font-medium">{desc}</p>
  </motion.div>
);

const TechBadge = ({ text }: { text: string }) => (
  <div className="px-5 py-3 rounded-lg bg-zinc-900 border border-white/10 text-gray-300 font-mono text-sm font-bold uppercase tracking-wider hover:border-orange-500 hover:text-orange-400 hover:shadow-[0_0_15px_rgba(234,88,12,0.2)] transition-all cursor-default">
    {text}
  </div>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-200 font-sans selection:bg-orange-500 selection:text-black overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* FEATURES SECTION */}
      <section id="features" className="py-32 px-6 relative bg-zinc-950">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
        <div className="container mx-auto">
          <SectionTitle title="SYSTEM" subtitle="FEATURES" />

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <FeatureCard 
              delay={0.1}
              icon={Gamepad2}
              title="Smart Matching"
              desc="Deep learning algorithms analyze 50+ data points including KDA, communication style, and playtime to find your perfect duo."
            />
            <FeatureCard 
              delay={0.2}
              icon={Zap}
              title="Low Latency Voice"
              desc="Integrated Agora.io engine ensures crystal clear voice communication with sub-20ms latency. No external apps needed."
            />
            <FeatureCard 
              delay={0.3}
              icon={Globe}
              title="Geo-Location"
              desc="Find gamers in your dormitory, university, or city. Organize local LAN parties and meetups effortlessly."
            />
            <FeatureCard 
              delay={0.4}
              icon={Shield}
              title="Reputation System"
              desc="Community-driven moderation. Toxic players are flagged and isolated. Positive behavior unlocks exclusive badges."
            />
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="py-24 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-sm font-bold mb-12 text-orange-500 uppercase tracking-[0.4em]">Powered By Modern Tech</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Flutter 3.0", "Firebase", "Node.js", "Agora RTC", "TensorFlow Lite", "Next.js 14", "Tailwind", "Stripe API"].map((tech) => (
              <TechBadge key={tech} text={tech} />
            ))}
          </div>
        </div>
        {/* Background Noise Texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>
      </section>



      {/* DOWNLOAD CTA */}
      <section id="download" className="py-24 bg-gradient-to-b from-zinc-950 to-black text-center relative">
        <GlowBackground />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase italic tracking-tighter">
              Ready to <span className="text-orange-500">Dominate?</span>
            </h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
              Join the beta testing program. Secure your unique username before the public launch.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {/* GOOGLE PLAY - ACTIVE */}
              <button 
                onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')}
                className="flex items-center justify-center gap-4 px-8 py-4 bg-white text-black rounded-xl hover:bg-orange-500 hover:text-white transition-all group hover:-translate-y-1 shadow-2xl font-bold min-w-[200px]"
              >
                <Download className="group-hover:animate-bounce" size={24} />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider opacity-80">Get it on</div>
                  <div className="text-xl">Google Play</div>
                </div>
              </button>

              {/* APPLE STORE - COMING SOON */}
              <button 
                disabled
                className="flex items-center justify-center gap-4 px-8 py-4 bg-zinc-900 border border-zinc-800 text-gray-500 rounded-xl cursor-not-allowed opacity-70 min-w-[200px]"
              >
                <Apple size={24} />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider opacity-60">Coming Soon</div>
                  <div className="text-xl">App Store</div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-black border-t border-zinc-900">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 opacity-70">
              <Flame className="text-orange-600" size={24} />
              <span className="font-black tracking-widest uppercase text-white text-xl">GameNect</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm font-bold tracking-wider text-gray-500">
              <a href="/privacy" className="hover:text-orange-500 transition-colors uppercase">Privacy Policy</a>
              <span className="w-1 h-1 bg-zinc-800 rounded-full" />
              <a href="/terms" className="hover:text-orange-500 transition-colors uppercase">Terms of Use</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-zinc-900 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-zinc-600 text-sm font-mono">
            <p>&copy; 2025 GameNect Inc. By Le Minh Quang.</p>
            <p>Built with Next.js & Tailwind</p>
          </div>
        </div>
      </footer>
    </main>
  );
}