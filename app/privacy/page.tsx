"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, ArrowLeft, Database, UserCheck, EyeOff, Lock, FileText, Mail, Globe } from "lucide-react";
import Link from "next/link";

const GridBackground = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100" />
  </div>
);

const translations = {
  vi: {
    back: "Trở về trang chủ",
    updated: "CẬP NHẬT LẦN CUỐI: 10/06/2026",
    title: "CHÍNH SÁCH BẢO MẬT",
    subtitle: "Chào mừng bạn đến với chính sách bảo mật của GameNect. Chúng tôi cam kết bảo vệ dữ liệu cá nhân và quyền riêng tư của bạn khi sử dụng ứng dụng.",
    sec1_title: "1. Thu thập thông tin",
    sec1_desc: "GameNect thu thập thông tin khi bạn đăng ký tài khoản, sử dụng ứng dụng và tương tác với các người dùng khác. Các thông tin này bao gồm: thông tin cá nhân (tên, email, số điện thoại), ảnh đại diện, lịch sử trò chuyện và thông tin vị trí (nếu được cấp quyền).",
    sec2_title: "2. Sử dụng thông tin",
    sec2_desc: "Chúng tôi sử dụng thông tin của bạn để:",
    sec2_item1: "Cung cấp, duy trì và cải thiện các dịch vụ của GameNect.",
    sec2_item2: "Gợi ý bạn bè, đối tác chơi game phù hợp dựa trên sở thích và xếp hạng của bạn.",
    sec2_item3: "Xử lý các giao dịch hoặc hỗ trợ khách hàng.",
    sec2_item4: "Ngăn chặn các hoạt động gian lận, vi phạm tiêu chuẩn cộng đồng.",
    sec3_title: "3. Chia sẻ thông tin",
    sec3_desc: "GameNect cam kết không bán thông tin cá nhân của bạn cho bên thứ ba. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp:",
    sec3_item1: "Có sự đồng ý của bạn.",
    sec3_item2: "Yêu cầu từ cơ quan pháp luật có thẩm quyền.",
    sec3_item3: "Với các đối tác cung cấp dịch vụ bên thứ ba (như dịch vụ lưu trữ đám mây, thanh toán) nhằm mục đích vận hành ứng dụng.",
    sec4_title: "4. Bảo mật dữ liệu",
    sec4_desc: "Chúng tôi áp dụng các biện pháp bảo mật tiêu chuẩn ngành để bảo vệ dữ liệu của bạn khỏi việc truy cập trái phép, thay đổi, tiết lộ hoặc phá hủy.",
    sec5_title: "5. Quyền của người dùng",
    sec5_desc: "Bạn có quyền truy cập, chỉnh sửa hoặc yêu cầu xóa dữ liệu cá nhân của mình bất cứ lúc nào thông qua liên hệ với bộ phận hỗ trợ của chúng tôi qua email.",
    sec6_title: "6. Liên hệ",
    sec6_desc: "Nếu có bất kỳ thắc mắc nào về Chính sách bảo mật, vui lòng liên hệ với chúng tôi qua email: leminhquang2k4@gmail.com",
    btn_contact: "Gửi Email Liên Hệ"
  },
  en: {
    back: "Back to Home",
    updated: "LAST UPDATED: 10/06/2026",
    title: "PRIVACY POLICY",
    subtitle: "Welcome to the GameNect Privacy Policy. We are committed to protecting your personal data and privacy when using the application.",
    sec1_title: "1. Information Collection",
    sec1_desc: "GameNect collects information when you register an account, use the application, and interact with other users. This information includes: personal information (name, email, phone number), profile pictures, chat history, and location details (if permitted).",
    sec2_title: "2. Use of Information",
    sec2_desc: "We use your information to:",
    sec2_item1: "Provide, maintain, and improve GameNect services.",
    sec2_item2: "Suggest friends and suitable gaming partners based on your interests and rankings.",
    sec2_item3: "Process transactions or support customers.",
    sec2_item4: "Prevent fraudulent activities and violations of community guidelines.",
    sec3_title: "3. Sharing of Information",
    sec3_desc: "GameNect is committed to not selling your personal information to third parties. We only share information in the following cases:",
    sec3_item1: "With your explicit consent.",
    sec3_item2: "Compliance with requests from competent legal authorities.",
    sec3_item3: "With third-party service providers (such as cloud storage, payment processors) for application operations.",
    sec4_title: "4. Data Security",
    sec4_desc: "We apply industry-standard security measures to protect your data from unauthorized access, modification, disclosure, or destruction.",
    sec5_title: "5. User Rights",
    sec5_desc: "You have the right to access, edit, or request the deletion of your personal data at any time by contacting our support team via email.",
    sec6_title: "6. Contact Us",
    sec6_desc: "If you have any questions about the Privacy Policy, please contact us via email: leminhquang2k4@gmail.com",
    btn_contact: "Email Support"
  }
};

const Section = ({ icon: Icon, title, children, delay }: { icon: any, title: string, children: React.ReactNode, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="mb-12 relative group"
  >
    <div className="relative bg-white border-[3px] border-black p-8 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all duration-200">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-[#FFD54F] border-[2.5px] border-black flex items-center justify-center text-black shadow-[2px_2px_0px_0px_#000000]">
          <Icon size={24} />
        </div>
        <h2 className="text-xl md:text-2xl font-black text-black uppercase tracking-wider italic">{title}</h2>
      </div>
      <div className="text-zinc-800 space-y-4 font-bold leading-relaxed text-sm md:text-base">
        {children}
      </div>
    </div>
  </motion.div>
);

export default function PrivacyPage() {
  const [lang, setLang] = useState<"vi" | "en">("vi");

  useEffect(() => {
    const saved = localStorage.getItem("gamenect_lang");
    if (saved === "vi" || saved === "en") {
      setLang(saved);
    }
  }, []);

  const changeLang = (l: "vi" | "en") => {
    setLang(l);
    localStorage.setItem("gamenect_lang", l);
  };

  const curr = translations[lang];

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FFD54F] selection:text-black relative overflow-x-hidden">
      <GridBackground />
      
      {/* Header Navigation */}
      <nav className="relative z-50 py-8 px-6 border-b-[3px] border-black bg-white">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-flex items-center gap-2 text-black hover:text-[#FF6E40] transition-colors group font-black uppercase text-xs tracking-wider">
            <div className="p-2 border-[2px] border-black bg-white group-hover:bg-[#FF6E40] shadow-[2.5px_2.5px_0px_0px_#000000] group-hover:shadow-[4px_4px_0px_0px_#000000] group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000000] transition-all">
              <ArrowLeft size={16} />
            </div>
            <span>{curr.back}</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => changeLang(lang === "vi" ? "en" : "vi")}
              className="px-3 py-1.5 bg-white text-black border-[2px] border-black font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#000000] hover:shadow-[3px_3px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000000] transition-all cursor-pointer flex items-center gap-1"
            >
              <Globe size={13} /> {lang === "vi" ? "VI" : "EN"}
            </button>
            <div className="text-xs font-mono font-black text-black bg-[#FFD54F] px-4 py-2 border-[2px] border-black shadow-[2.5px_2.5px_0px_0px_#000000]">
              {curr.updated}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 pt-16 pb-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center justify-center p-4 bg-[#FF6E40] mb-8 border-[3px] border-black shadow-[4px_4px_0px_0px_#000000]">
              <Shield className="text-black" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-6 italic">
              {lang === "vi" ? (
                <>CHÍNH SÁCH <span className="bg-[#FFD54F] px-4 py-1 border-[3px] border-black inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_#000000]">BẢO MẬT</span></>
              ) : (
                <>PRIVACY <span className="bg-[#FFD54F] px-4 py-1 border-[3px] border-black inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_#000000]">POLICY</span></>
              )}
            </h1>
            <p className="text-md md:text-lg text-zinc-800 max-w-xl mx-auto font-bold border-l-[4px] border-black pl-4 text-left">
              {curr.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 px-6 pb-24">
        <div className="max-w-4xl mx-auto">
          
          <Section delay={0.2} icon={Database} title={curr.sec1_title}>
            <p>{curr.sec1_desc}</p>
          </Section>

          <Section delay={0.3} icon={UserCheck} title={curr.sec2_title}>
            <p>{curr.sec2_desc}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-800">
              <li>{curr.sec2_item1}</li>
              <li>{curr.sec2_item2}</li>
              <li>{curr.sec2_item3}</li>
              <li>{curr.sec2_item4}</li>
            </ul>
          </Section>

          <Section delay={0.4} icon={EyeOff} title={curr.sec3_title}>
            <p>{curr.sec3_desc}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-800">
              <li>{curr.sec3_item1}</li>
              <li>{curr.sec3_item2}</li>
              <li>{curr.sec3_item3}</li>
            </ul>
          </Section>

          <Section delay={0.5} icon={Lock} title={curr.sec4_title}>
            <p>{curr.sec4_desc}</p>
          </Section>

          <Section delay={0.6} icon={FileText} title={curr.sec5_title}>
            <p>{curr.sec5_desc}</p>
          </Section>

          <Section delay={0.7} icon={Mail} title={curr.sec6_title}>
            <p>{curr.sec6_desc}</p>
          </Section>

          {/* Contact Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 text-center"
          >
            <a href="mailto:leminhquang2k4@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6E40] text-black border-[3px] border-black font-black uppercase shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000000] transition-all">
              <Mail size={18} />
              {curr.btn_contact}
            </a>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
