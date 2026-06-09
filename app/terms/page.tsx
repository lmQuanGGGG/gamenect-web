"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scale, ArrowLeft, Gavel, UserCheck, AlertTriangle, ShieldAlert, FileSignature, Mail } from "lucide-react";
import Link from "next/link";

const GlowBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-600/10 rounded-full blur-[120px] mix-blend-screen" />
    <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-red-600/10 rounded-full blur-[120px] mix-blend-screen" />
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

export default function TermsPage() {
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
            Effective Date: Dec 2025
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
              <Scale className="text-orange-500" size={48} />
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase mb-6">
              Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-600">Use</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The rules of engagement. By using GameNect, you agree to uphold our community standards and respect your fellow gamers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 px-6 pb-32">
        <div className="max-w-4xl mx-auto">
          
          <Section delay={0.2} icon={FileSignature} title="1. Agreement to Terms">
            <p>By accessing or using GameNect, you agree to be bound by these Terms. If you disagree with any part of the terms, you do not have permission to access the Service.</p>
            <p>We reserve the right to modify these terms at any time. We will always notify you of significant changes.</p>
          </Section>

          <Section delay={0.3} icon={UserCheck} title="2. Community Guidelines">
            <p>GameNect is built on respect. We have a zero-tolerance policy for toxicity. Users must agree to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
              <li><strong className="text-white">Respect All Players:</strong> No harassment, hate speech, or bullying.</li>
              <li><strong className="text-white">Fair Play:</strong> No cheating, smurfing, or exploiting game mechanics.</li>
              <li><strong className="text-white">Appropriate Content:</strong> No NSFW content or unauthorized advertising.</li>
            </ul>
            <div className="mt-6 p-4 rounded-lg bg-orange-500/10 border border-orange-500/20 text-orange-200 text-sm">
              Violation of these guidelines will result in immediate account suspension and a permanent ban from the GameNect network.
            </div>
          </Section>

          <Section delay={0.4} icon={ShieldAlert} title="3. Account Responsibilities">
            <p>You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password.</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
              <li>You must provide accurate and complete information upon registration.</li>
              <li>You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.</li>
              <li>You may not use as a username the name of another person or entity that is not lawfully available for use.</li>
            </ul>
          </Section>

          <Section delay={0.5} icon={AlertTriangle} title="4. Disclaimer & Limitations">
            <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis.</p>
            <p>GameNect, its directors, employees, partners, and agents do not warrant that:</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-gray-300">
              <li>The Service will function uninterrupted, secure, or available at any particular time or location.</li>
              <li>Any errors or defects will be corrected.</li>
              <li>The Service is free of viruses or other harmful components.</li>
            </ul>
          </Section>

          <Section delay={0.6} icon={Gavel} title="5. Governing Law">
            <p>These Terms shall be governed and construed in accordance with international laws, without regard to its conflict of law provisions.</p>
            <p>Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.</p>
          </Section>

          {/* Contact Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <h3 className="text-xl font-bold text-white mb-6">Need clarification?</h3>
            <a href="mailto:leminhquang2k4@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-xl hover:bg-orange-500 hover:text-white transition-all group hover:-translate-y-1 shadow-xl font-bold">
              <Mail className="group-hover:animate-bounce" size={20} />
              Contact Legal Team
            </a>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
