"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, ArrowLeft, Lock, Database, UserCheck, EyeOff, FileText, Mail } from "lucide-react";
import Link from "next/link";

const GlowBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen" />
    <div className="absolute bottom-[-20%] right-[-10%] w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[120px] mix-blend-screen" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />
  </div>
);

const Section = ({ icon: Icon, title, children, delay }: { icon: any, title: string, children: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="mb-12 relative group"
  >
    <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/0 via-orange-500/5 to-orange-500/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
    <div className="relative bg-zinc-900/40 border border-white/5 backdrop-blur-xl p-8 rounded-2xl hover:border-orange-500/30 transition-colors duration-300">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/20 text-orange-400 shadow-[0_0_15px_rgba(234,88,12,0.15)] group-hover:shadow-[0_0_25px_rgba(234,88,12,0.3)] transition-all">
          <Icon size={24} />
        </div>
        <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wider">{title}</h2>
      </div>
      <div className="text-gray-400 space-y-4 font-medium leading-relaxed">
        {children}
      </div>
    </div>
  </motion.div>
);

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-gray-200 font-sans selection:bg-orange-500 selection:text-black relative overflow-x-hidden">
      <GlowBackground />
      
      {/* Header Navigation */}
      <nav className="relative z-50 py-8 px-6">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
            <div className="p-2 rounded-lg bg-white/5 group-hover:bg-orange-500 group-hover:text-black transition-all">
              <ArrowLeft size={20} />
            </div>
            <span className="font-bold uppercase tracking-widest text-sm">Back to Home</span>
          </Link>
          <div className="text-sm font-mono text-orange-500/80 bg-orange-500/10 px-4 py-2 rounded-full border border-orange-500/20">
            Last Updated: Dec 2025
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-12 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-red-500/5 mb-8 border border-orange-500/30 shadow-[0_0_50px_rgba(234,88,12,0.2)]">
              <Shield className="text-orange-500" size={48} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
              Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Policy</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Your data is your domain. We believe in radical transparency and military-grade protection for your gaming identity.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          
          <Section delay={0.2} icon={Database} title="1. Information We Collect">
            <p>To provide you with the ultimate gaming network, we collect specific information to power our matchmaking algorithms and service features:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
              <li><strong className="text-white">Personal Identification:</strong> Email address, first and last name, used strictly for account management.</li>
              <li><strong className="text-white">Gaming Telemetry:</strong> In-game statistics, preferred roles, ranks, and playstyles to find your perfect squad.</li>
              <li><strong className="text-white">Technical Data:</strong> Device identifiers and usage data to optimize latency and app performance.</li>
            </ul>
          </Section>

          <Section delay={0.3} icon={UserCheck} title="2. How We Use Your Data">
            <p>Your data is exclusively used to enhance your GameNect experience. We do not sell your personal information to advertisers.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
              <li><strong className="text-white">Smart Matchmaking:</strong> Feeding our AI models to connect you with non-toxic, highly compatible teammates.</li>
              <li><strong className="text-white">Service Optimization:</strong> Maintaining low-latency voice communications and stable connections.</li>
              <li><strong className="text-white">Community Safety:</strong> Enforcing reputation systems and isolating toxic behavior.</li>
            </ul>
          </Section>

          <Section delay={0.4} icon={EyeOff} title="3. Permissions & Privacy">
            <div className="grid md:grid-cols-2 gap-6 mt-4">
              <div className="bg-black/50 p-6 rounded-xl border border-white/5">
                <div className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" /> Microphone
                </div>
                <p className="text-sm">Used for Real-Time Voice Chat via Agora.io. We <strong className="text-white">never</strong> record or store your voice conversations on our servers.</p>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-white/5">
                <div className="text-orange-400 font-bold mb-2 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" /> Location
                </div>
                <p className="text-sm">Used for the Geo-Location feature to find local gamers. This is strictly optional and can be disabled at any time.</p>
              </div>
            </div>
          </Section>

          <Section delay={0.5} icon={Lock} title="4. Data Deletion Protocol">
            <div className="bg-red-500/10 border border-red-500/20 p-6 rounded-xl text-red-100">
              <p className="mb-4 text-red-200">You retain absolute control over your digital footprint. You can initiate a complete account wipe at any time.</p>
              <ul className="list-decimal pl-6 space-y-2 text-sm font-medium">
                <li><strong className="text-white">In-App Wipdown:</strong> Navigate to Settings {'>'} Account {'>'} Delete Account.</li>
                <li><strong className="text-white">Manual Request:</strong> Email us at <a href="mailto:leminhquang2k4@gmail.com" className="text-orange-400 hover:underline">leminhquang2k4@gmail.com</a> with the subject "DELETE DATA". Processing takes up to 30 days.</li>
              </ul>
            </div>
          </Section>

          <Section delay={0.6} icon={FileText} title="5. Third-Party Integrations">
            <p>We partner with industry leaders to provide robust infrastructure. They process data strictly according to our guidelines:</p>
            <div className="flex flex-wrap gap-3 mt-4">
              {['Google Firebase (Auth/DB)', 'Agora.io (RTC)', 'Google Analytics'].map(tech => (
                <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-wider uppercase text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </Section>

          {/* Contact Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-6">Questions about your privacy?</h3>
            <a href="mailto:leminhquang2k4@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-orange-500 hover:text-white transition-all group hover:-translate-y-1 shadow-xl font-bold">
              <Mail className="group-hover:animate-bounce" size={20} />
              Contact Privacy Team
            </a>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
