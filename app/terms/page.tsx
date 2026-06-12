"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Scale, ArrowLeft, Gavel, UserCheck, AlertTriangle, ShieldAlert, FileSignature, Mail, Globe, Layers } from "lucide-react";
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
    title: "ĐIỀU KHOẢN SỬ DỤNG",
    subtitle: "Các quy tắc sử dụng và tiêu chuẩn cộng đồng tại GameNect. Vui lòng đọc kỹ trước khi đăng ký tài khoản.",
    sec1_title: "1. Chấp nhận điều khoản",
    sec1_desc: "Bằng việc đăng ký tài khoản và sử dụng ứng dụng GameNect, bạn đồng ý tuân thủ các Điều khoản sử dụng này. Nếu không đồng ý, vui lòng không sử dụng dịch vụ của chúng tôi.",
    sec2_title: "2. Tài khoản người dùng",
    sec2_desc: "Người dùng phải cung cấp thông tin chính xác khi đăng ký. Bạn có trách nhiệm bảo mật mật khẩu và tài khoản của mình. GameNect không chịu trách nhiệm cho bất kỳ tổn thất nào phát sinh do việc bạn không bảo mật tài khoản.",
    sec3_title: "3. Hành vi nghiêm cấm",
    sec3_desc: "Khi sử dụng GameNect, bạn không được phép:",
    sec3_item1: "Đăng tải hoặc gửi nội dung đồi trụy, xúc phạm, đe dọa hoặc vi phạm pháp luật.",
    sec3_item2: "Gian lận, lừa đảo, hoặc mạo danh người khác.",
    sec3_item3: "Sử dụng các công cụ tự động (bot) để thu thập dữ liệu hoặc tương tác với ứng dụng.",
    sec3_item4: "Chia sẻ thông tin cá nhân của người khác mà không có sự cho phép của họ.",
    sec3_warning: "Vi phạm các hướng dẫn này sẽ dẫn đến việc đình chỉ tài khoản ngay lập tức và cấm vĩnh viễn khỏi mạng lưới GameNect.",
    sec4_title: "4. Nội dung người dùng",
    sec4_desc: "Bạn giữ quyền sở hữu đối với nội dung bạn tạo ra trên GameNect (khoảnh khắc, bài viết, tin nhắn). Tuy nhiên, bằng việc đăng tải, bạn cấp cho GameNect quyền sử dụng, hiển thị và phân phối nội dung đó trong phạm vi hoạt động của ứng dụng.",
    sec5_title: "5. Chấm dứt dịch vụ",
    sec5_desc: "GameNect có quyền đình chỉ hoặc khóa vĩnh viễn tài khoản của bạn nếu phát hiện vi phạm Điều khoản sử dụng mà không cần thông báo trước.",
    sec6_title: "6. Sửa đổi điều khoản",
    sec6_desc: "GameNect có thể cập nhật các Điều khoản này bất cứ lúc nào. Sự thay đổi sẽ có hiệu lực ngay khi được đăng tải trên ứng dụng. Việc bạn tiếp tục sử dụng ứng dụng đồng nghĩa với việc bạn chấp nhận các thay đổi đó.",
    sec7_title: "7. Liên hệ",
    sec7_desc: "Nếu có bất kỳ thắc mắc nào về Điều khoản sử dụng, vui lòng liên hệ với chúng tôi qua email: support@gamenect.space",
    btn_contact: "Gửi Email Hỗ Trợ"
  },
  en: {
    back: "Back to Home",
    updated: "LAST UPDATED: 10/06/2026",
    title: "TERMS OF USE",
    subtitle: "Rules of engagement and community standards at GameNect. Please read carefully before registering an account.",
    sec1_title: "1. Acceptance of Terms",
    sec1_desc: "By registering an account and using the GameNect application, you agree to comply with these Terms of Use. If you do not agree, please do not use our services.",
    sec2_title: "2. User Account",
    sec2_desc: "Users must provide accurate information when registering. You are responsible for safeguarding your password and account. GameNect is not responsible for any losses arising from your failure to secure your account.",
    sec3_title: "3. Prohibited Conduct",
    sec3_desc: "When using GameNect, you are not allowed to:",
    sec3_item1: "Upload or send vulgar, offensive, threatening, or illegal content.",
    sec3_item2: "Defraud, deceive, or impersonate other people.",
    sec3_item3: "Use automated tools (bots) to collect data or interact with the app.",
    sec3_item4: "Share other people's personal information without their consent.",
    sec3_warning: "Violation of these guidelines will result in immediate account suspension and a permanent ban from the GameNect network.",
    sec4_title: "4. User Content",
    sec4_desc: "You retain ownership of the content you create on GameNect (moments, posts, messages). However, by uploading, you grant GameNect the right to use, display, and distribute that content within the operational scope of the application.",
    sec5_title: "5. Termination of Service",
    sec5_desc: "GameNect reserves the right to suspend or permanently block your account if a violation of the Terms of Use is detected, without prior notice.",
    sec6_title: "6. Modification of Terms",
    sec6_desc: "GameNect may update these Terms at any time. Changes take effect immediately upon posting. Your continued use of the app signifies your acceptance of those changes.",
    sec7_title: "7. Contact Us",
    sec7_desc: "If you have any questions about the Terms of Use, please contact us via email: support@gamenect.space",
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

export default function TermsPage() {
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
              <Scale className="text-black" size={40} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-black tracking-tighter uppercase mb-6 italic">
              {lang === "vi" ? (
                <>ĐIỀU KHOẢN <span className="bg-[#FFD54F] px-4 py-1 border-[3px] border-black inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_#000000]">SỬ DỤNG</span></>
              ) : (
                <>TERMS OF <span className="bg-[#FFD54F] px-4 py-1 border-[3px] border-black inline-block transform -rotate-1 shadow-[4px_4px_0px_0px_#000000]">USE</span></>
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
          
          <Section delay={0.2} icon={FileSignature} title={curr.sec1_title}>
            <p>{curr.sec1_desc}</p>
          </Section>

          <Section delay={0.3} icon={UserCheck} title={curr.sec2_title}>
            <p>{curr.sec2_desc}</p>
          </Section>

          <Section delay={0.4} icon={ShieldAlert} title={curr.sec3_title}>
            <p>{curr.sec3_desc}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4 text-zinc-800">
              <li>{curr.sec3_item1}</li>
              <li>{curr.sec3_item2}</li>
              <li>{curr.sec3_item3}</li>
              <li>{curr.sec3_item4}</li>
            </ul>
            <div className="mt-6 p-4 border-[2px] border-black bg-[#FFD54F]/15 text-black font-bold text-sm">
              {curr.sec3_warning}
            </div>
          </Section>

          <Section delay={0.5} icon={Layers} title={curr.sec4_title}>
            <p>{curr.sec4_desc}</p>
          </Section>

          <Section delay={0.6} icon={AlertTriangle} title={curr.sec5_title}>
            <p>{curr.sec5_desc}</p>
          </Section>

          <Section delay={0.7} icon={Gavel} title={curr.sec6_title}>
            <p>{curr.sec6_desc}</p>
          </Section>

          <Section delay={0.8} icon={Mail} title={curr.sec7_title}>
            <p>{curr.sec7_desc}</p>
          </Section>

          {/* Contact Footer */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-20 text-center"
          >
            <a href="mailto:support@gamenect.space" className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF6E40] text-black border-[3px] border-black font-black uppercase shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000000] transition-all">
              <Mail size={18} />
              {curr.btn_contact}
            </a>
          </motion.div>

        </div>
      </div>
    </main>
  );
}
