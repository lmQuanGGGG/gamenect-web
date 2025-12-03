"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  Gamepad2, Shield, Zap, Globe, Lock, Mail, 
  ChevronDown, Rocket, Menu, X, Download, Flame 
} from "lucide-react";

// --- CONFIGURATION ---
const APP_NAME = "GameNect";
const CONTACT_EMAIL = "support@gamenect.com"; // Thay email thật của bạn
const EFFECTIVE_DATE = "December 05, 2025";
const APP_VERSION = "1.0.0 (Cosmic Beta)";

// --- LINK TẢI APP (BETA) ---
const GOOGLE_PLAY_URL = "https://play.google.com/apps/testing/com.qco.gamenect";

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
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-black/80 backdrop-blur-md border-b border-orange-500/20 py-3" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <div className="absolute inset-0 bg-orange-600 rounded-xl blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
            <div className="relative w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center border border-white/20">
              <Flame className="text-white fill-white" size={20} />
            </div>
          </div>
          <span className="text-2xl font-black text-white tracking-tighter uppercase italic">
            Game<span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Nect</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-300">
          <button onClick={() => scrollToSection("features")} className="hover:text-orange-400 transition-colors">Features</button>
          <button onClick={() => scrollToSection("tech")} className="hover:text-orange-400 transition-colors">Tech Stack</button>
          <button onClick={() => scrollToSection("privacy")} className="hover:text-orange-400 transition-colors">Privacy Policy</button>
          <button 
            onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')}
            className="px-6 py-2.5 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-500 hover:to-red-500 text-white rounded-full font-bold transition-all shadow-[0_0_15px_rgba(234,88,12,0.4)] hover:shadow-[0_0_25px_rgba(234,88,12,0.6)] hover:scale-105 flex items-center gap-2"
          >
            <Download size={16} /> Get App
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
            className="md:hidden bg-black/95 border-b border-orange-500/20 overflow-hidden backdrop-blur-xl"
          >
            <div className="flex flex-col p-6 gap-6 text-center">
              <button onClick={() => scrollToSection("features")} className="text-lg text-gray-300 hover:text-orange-400">Features</button>
              <button onClick={() => scrollToSection("tech")} className="text-lg text-gray-300 hover:text-orange-400">Tech Stack</button>
              <button onClick={() => scrollToSection("privacy")} className="text-lg text-gray-300 hover:text-orange-400">Privacy Policy</button>
              <button onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')} className="text-lg text-orange-500 font-bold flex items-center justify-center gap-2">
                <Rocket size={18} /> Download Now
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
  const scale = useTransform(scrollY, [0, 300], [1, 1.2]);

  const handleScrollDown = () => {
    const element = document.getElementById("features");
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Cosmic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/10 via-black to-black z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />
      
      {/* Orange Nebulas */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-[120px] mix-blend-screen opacity-60" />
      <motion.div style={{ scale }} className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] mix-blend-screen opacity-50" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-300 text-xs md:text-sm font-mono tracking-widest uppercase backdrop-blur-md shadow-[0_0_20px_rgba(249,115,22,0.2)]">
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"/> Connecting Gamers Worldwide
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-orange-100 to-orange-600 drop-shadow-[0_0_35px_rgba(234,88,12,0.3)] leading-tight tracking-tight">
            UNLEASH <br/> YOUR SQUAD
          </h1>
          
          <p className="mt-8 text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            The ultimate <span className="text-orange-400 font-bold">AI Matching</span> platform. 
            Find your perfect duo, join voice chats with zero latency, and conquer the leaderboards.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')}
              className="group relative px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl font-bold text-lg overflow-hidden shadow-[0_0_30px_rgba(234,88,12,0.4)] hover:shadow-[0_0_50px_rgba(234,88,12,0.6)] transition-shadow"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative flex items-center gap-2">Download Beta <Rocket size={20}/></span>
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollDown}
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-md flex items-center justify-center gap-2"
            >
              Learn More <ChevronDown size={20} />
            </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-600 cursor-pointer"
        onClick={handleScrollDown}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay }: { icon: any, title: string, desc: string, delay: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    whileHover={{ y: -10, rotateX: 5, rotateY: 5, z: 50 }}
    className="group p-8 rounded-3xl bg-zinc-900/60 border border-white/5 hover:border-orange-500/50 transition-all duration-300 relative overflow-hidden"
    style={{ perspective: 1000 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative w-16 h-16 bg-gradient-to-br from-zinc-800 to-black rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg border border-white/5 group-hover:shadow-orange-500/20">
      <Icon className="text-orange-500 group-hover:text-orange-400 transition-colors" size={32} />
    </div>
    
    <h3 className="relative text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">{title}</h3>
    <p className="relative text-gray-400 leading-relaxed text-sm">{desc}</p>
  </motion.div>
);

const TechBadge = ({ text }: { text: string }) => (
  <motion.span 
    whileHover={{ scale: 1.1, backgroundColor: "rgba(234, 88, 12, 0.1)" }}
    className="px-4 py-2 rounded-lg bg-zinc-900 border border-orange-500/20 text-orange-200 text-sm font-mono hover:border-orange-500/60 hover:shadow-[0_0_15px_rgba(249,115,22,0.2)] transition-all cursor-default select-none"
  >
    {text}
  </motion.span>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gray-200 font-sans selection:bg-orange-500 selection:text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />

      {/* FEATURES SECTION */}
      <section id="features" className="py-32 px-6 relative bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Game Changing <span className="text-orange-500">Features</span></h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full shadow-[0_0_15px_rgba(234,88,12,0.5)]" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard 
              delay={0.1}
              icon={Gamepad2}
              title="Smart Matching"
              desc="Our AI algorithm analyzes your playstyle, rank, and preferred hours to find your perfect teammate instantly."
            />
            <FeatureCard 
              delay={0.2}
              icon={Zap}
              title="Crystal Voice"
              desc="Powered by Agora.io for low-latency, high-fidelity voice chat. Communicate without lagging your game."
            />
            <FeatureCard 
              delay={0.3}
              icon={Globe}
              title="Hyper-Local"
              desc="Find gamers in your city or university. Easily organize LAN parties or coffee meetups."
            />
            <FeatureCard 
              delay={0.4}
              icon={Shield}
              title="Anti-Toxic"
              desc="Advanced reputation system and Mentor program help eliminate toxic behavior and build a clean community."
            />
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section id="tech" className="py-24 bg-gradient-to-b from-zinc-900 to-black border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-sm font-bold mb-10 text-gray-500 uppercase tracking-[0.3em]">Core Technologies</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Flutter 3.0", "Firebase Auth", "Cloud Firestore", "Agora RTC", "AI Matching", "Next.js 14", "Tailwind CSS", "Stripe"].map((tech) => (
              <TechBadge key={tech} text={tech} />
            ))}
          </div>
        </div>
      </section>

      {/* PRIVACY POLICY & DATA SAFETY - CRITICAL FOR GOOGLE PLAY */}
      <section id="privacy" className="py-32 px-6 bg-black relative">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 border-l-4 border-orange-500 pl-4">Privacy Policy & Data Safety</h2>
            <p className="text-gray-500 font-mono text-xs mt-2">Version: {APP_VERSION} | Effective Date: {EFFECTIVE_DATE}</p>
          </div>

          <div className="prose prose-invert prose-lg max-w-none bg-zinc-900/40 p-8 md:p-12 rounded-3xl border border-white/5 backdrop-blur-sm">
            {/* 1. DATA COLLECTION */}
            <h3 className="text-orange-400 font-bold">1. Data Collection</h3>
            <p className="text-sm">To ensure the functionality of the app, <strong>{APP_NAME}</strong> collects the following data:</p>
            <ul className="text-gray-300 text-sm list-disc pl-5">
              <li><strong>Personal Information:</strong> Email address, User ID, Profile Picture (via Firebase Authentication) for account management.</li>
              <li><strong>Gaming Profile:</strong> List of favorite games, Ranks, Roles, and Playstyles for the matching algorithm.</li>
              <li><strong>Location (Optional):</strong> Approximate location data to suggest nearby players (User can disable this in settings).</li>
              <li><strong>Audio Data:</strong> Microphone access is required for Voice Chat (via Agora). Audio data is transient and <strong>not stored</strong> on our servers.</li>
            </ul>

            {/* 2. THIRD PARTY */}
            <h3 className="text-orange-400 font-bold mt-8">2. Third-Party Services</h3>
            <p className="text-sm">We use verified third-party SDKs to operate our service:</p>
            <ul className="text-gray-300 text-sm grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"/> Google Firebase (Backend & Auth)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"/> Agora.io (Real-time Voice/Video)</li>
              <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-orange-500 rounded-full"/> RAWG API (Game Metadata)</li>
            </ul>

            {/* 3. DELETION - MANDATORY FOR GOOGLE PLAY */}
            <div className="mt-10 p-6 bg-red-900/10 border border-red-500/20 rounded-xl relative overflow-hidden group">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Lock size={100} />
               </div>
               <h3 className="text-red-400 mt-0 flex items-center gap-2 font-bold">
                 <Lock className="w-5 h-5"/> 3. Account Deletion Rights
               </h3>
               <p className="text-gray-300 text-sm mb-4">
                 In compliance with Google Play Data Safety standards, you have the absolute right to request the deletion of your account and all associated data.
               </p>
               <div className="bg-black/40 p-4 rounded-lg border border-white/5">
                 <p className="text-white font-semibold text-sm mb-2">How to delete your data:</p>
                 <ol className="text-gray-400 text-sm list-decimal pl-4 space-y-2">
                   <li>Open the App &gt; Go to <strong>Settings</strong>.</li>
                   <li>Select <strong>Account Management</strong> &gt; Tap <strong>Delete Account</strong>.</li>
                   <li>Confirm the action. All your personal data will be permanently wiped from our servers within 30 days.</li>
                 </ol>
               </div>
               <p className="mt-4 text-xs text-gray-500">
                 Alternatively, you can submit a deletion request via email: <a href={`mailto:${CONTACT_EMAIL}`} className="text-orange-400 hover:text-orange-300 transition-colors underline">{CONTACT_EMAIL}</a>
               </p>
            </div>

            {/* 4. CONTACT */}
            <h3 className="text-orange-400 font-bold mt-8">4. Contact Us</h3>
            <p className="text-sm text-gray-400">If you have any questions regarding this privacy policy, please contact us:</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 px-6 py-3 mt-4 bg-orange-600/10 text-orange-400 border border-orange-600/20 rounded-lg hover:bg-orange-600 hover:text-white hover:border-orange-500 transition-all cursor-pointer no-underline font-bold text-sm">
              <Mail size={16}/> Email Support
            </a>
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION */}
      <section id="download" className="py-24 bg-gradient-to-t from-orange-900/20 to-black text-center border-t border-white/10">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-black text-white mb-8">Ready to Conquer the Virtual World?</h2>
            <p className="text-gray-400 mb-10 max-w-xl mx-auto">Join thousands of gamers who have found their perfect squad. Download the beta version today.</p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              {/* Google Play Button - ACTIVE */}
              <button 
                onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')}
                className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-800 border border-zinc-700 rounded-xl hover:bg-zinc-700 hover:border-orange-500 transition-all group hover:-translate-y-1 shadow-lg"
              >
                <div className="text-left">
                  <div className="text-[10px] text-gray-400 uppercase tracking-wider">Get it on</div>
                  <div className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">Google Play</div>
                </div>
              </button>
              
              {/* App Store Button - DISABLED/PLACEHOLDER */}
              <button className="flex items-center justify-center gap-3 px-8 py-4 bg-zinc-900/50 border border-zinc-800 rounded-xl opacity-60 cursor-not-allowed">
                <div className="text-left">
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">Coming Soon</div>
                  <div className="text-xl font-bold text-gray-400">App Store</div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-black border-t border-white/5 text-center">
        <div className="flex justify-center items-center gap-2 mb-4 opacity-50">
          <Flame size={16} />
          <span className="font-bold tracking-widest uppercase">GameNect</span>
        </div>
        <p className="text-gray-600 text-sm">&copy; 2025 GameNect Team. Built for Gamers.</p>
      </footer>
    </main>
  );
}