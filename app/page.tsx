"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Gamepad2, Shield, Zap, Globe, Lock, Mail, 
  ChevronDown, Rocket, Menu, X, Download, Flame, 
  Server, Smartphone, Layers, AlertTriangle, CheckCircle2, Apple,
  MessageSquare, Share2, User
} from "lucide-react";

// --- CONFIGURATION ---
const APP_NAME = "GameNect";
const CONTACT_EMAIL = "leminhquang2k4@gmail.com"; 
const EFFECTIVE_DATE = "December 06, 2025";
const APP_VERSION = "1.0.0 (Cosmic Release)";
const GOOGLE_PLAY_URL = "https://apkpure.com/p/com.qco.gamenect";
const MOBILE_WEB_URL = "https://www.gamenect.space/";

// --- TRANSLATIONS DICTIONARY ---
const t = {
  vi: {
    features: "Tính năng",
    tip_nav: "Mẹo",
    showcase: "Trải nghiệm",
    tech: "Công nghệ",
    guide: "Hướng dẫn",
    android_app: "Bản Android",
    mobile_web: "Mobile Web",
    badge: "ĐÃ HOÀN THIỆN MOBILE WEB & ANDROID 😭",
    headline_1: "TÌM KIẾM",
    headline_2: "ĐỒNG ĐỘI",
    subtitle: "Nếu Locket + Tinder + Discord có con chung thì chắc sẽ giống GameNect 😆\n\nMột nơi để kết bạn mới, tìm đồng đội hợp ý, đăng ảnh, chia sẻ khoảnh khắc và livestream.",
    cta_android: "Tải Bản Android (APK)",
    cta_web: "Trải nghiệm Mobile Web",
    feature_section_title: "TÍNH NĂNG",
    feature_section_subtitle: "NỔI BẬT",
    features_intro: "GameNect là mạng xã hội kết nối thế hệ mới. Đừng chật vật leo rank một mình nữa. Hệ thống ghép đôi AI thông minh của chúng tôi phân tích dữ liệu người chơi để giúp bạn tìm kiếm những người đồng đội có chung kỹ năng, sở thích và phong cách chơi, giúp việc lập đội và kết bạn mới trở nên dễ dàng hơn bao giờ hết.",
    match_title: "Ghép đôi AI",
    match_desc: "Nhanh chóng tìm kiếm đồng đội và đối tác chơi game phù hợp.",
    voice_title: "Trò chuyện & Kết nối",
    voice_desc: "Nhắn tin, giao lưu và lập đội với các game thủ trên toàn thế giới.",
    geo_title: "Khoảnh khắc & Bảng tin",
    geo_desc: "Chia sẻ những pha highlights xuất sắc nhất, đăng tải cập nhật trạng thái và tương tác cùng cộng đồng.",
    verify_title: "Hồ sơ Game thủ",
    verify_desc: "Tạo trang cá nhân game thủ mang dấu ấn riêng của bạn để trưng bày danh tính, thành tích và các tựa game yêu thích.",
    mentor_title: "Trở thành Mentor",
    mentor_desc: "Mở khóa đặc quyền đăng Post công khai trên bảng tin, livestream tương tác, chia sẻ kinh nghiệm và xây dựng thương hiệu cá nhân của riêng bạn.",
    tip_title: "Tip: Tìm Bạn Nhanh",
    tip_desc: "Chờ Match quá lâu? Bạn hoàn toàn có thể chủ động tìm kiếm bạn bè chưa Match bằng thanh tìm kiếm trong Chat để rủ họ chơi chung ngay lập tức!",
    showcase_title: "GIAO DIỆN",
    showcase_subtitle: "ỨNG DỤNG",
    showcase_desc: "Khám phá bên trong giao diện ứng dụng di động GameNect. Đơn giản, sạch sẽ và được tối ưu để khám phá đồng đội tốt nhất.",
    showcase_onboarding: "Màn Hình Chào",
    showcase_matcher: "Tìm Đồng Đội",
    showcase_discover: "Khám Phá",
    showcase_my_moment: "Trang Cá Nhân",
    showcase_posts: "Bài Đăng Mentor",
    showcase_profile: "Hồ Sơ Mentor",
    showcase_discover_mentors: "Tìm Kiếm Mentor",
    showcase_camera: "Chụp Ảnh Khoảnh Khắc",
    showcase_who_likes_you: "Ai Thích Bạn",
    showcase_premium: "Người Bạn Bỏ Lỡ",
    showcase_premium_features: "Đặc Quyền Premium",
    showcase_chat: "Tin Nhắn",
    showcase_user_settings: "Cài Đặt Hồ Sơ",
    showcase_wallet: "Ví GameNect",
    showcase_discover_games: "Khám Phá Game",
    watch_title: "XEM TRẢI",
    watch_subtitle: "NGHIỆM THỰC TẾ",
    watch_desc: "Xem GameNect hoạt động thực tế. Trải nghiệm sự mượt mà của tính năng ghép đôi, đàm thoại và tương tác cộng đồng.",
    video_1: "Video Trải Nghiệm 1",
    video_2: "Video Trải Nghiệm 2",
    video_3: "Video Trải Nghiệm 3",
    guide_title: "HƯỚNG DẪN",
    guide_subtitle: "SỬ DỤNG",
    guide_desc: "Làm quen với GameNect chỉ trong vài bước cơ bản. Từ việc tối ưu tìm kiếm đồng đội đến trải nghiệm Web App mượt mà như Native App.",
    guide_step1_title: "1. Tinh Chỉnh Cài Đặt Match",
    guide_step1_desc: "Bấm vào icon Cài đặt (Màn hình Home) hoặc nút 'Cài đặt Match' (Màn hình Profile). Sau đó điều chỉnh bộ lọc để tìm đúng đồng đội và đừng quên bấm 'Lấy vị trí' để bật quyền định vị nhé!",
    guide_step2_title: "2. Bật Thông Báo Trên Web",
    guide_step2_desc: "Dành cho người dùng Mobile Web: Mở Màn hình Profile và kéo xuống dưới, sau đó bấm vào nút 'Bật thông báo web' để không bao giờ bỏ lỡ tin nhắn hay một lượt Match cực xịn nào.",
    guide_step3_title: "3. Cài Web App Ra Màn Hình Chính",
    guide_step3_desc: "Xu hướng PWA: Người dùng iOS (hoặc Android không muốn cài App) có thể mở trình duyệt, bấm nút 'Chia sẻ' -> 'Thêm vào Màn hình chính' để trải nghiệm mượt mà không thua kém App xịn!",
    tech_title: "HỖ TRỢ BỞI CÔNG NGHỆ HIỆN ĐẠI",
    ready_title: "SẴN SÀNG",
    ready_subtitle: "CHINH PHỤC?",
    ready_desc: "Tải ứng dụng Android hoặc trải nghiệm bản Mobile Web ngay hôm nay!",
    footer_privacy: "Chính sách bảo mật",
    footer_terms: "Điều khoản sử dụng",
    footer_built: "Xây dựng bằng Next.js & Tailwind CSS v4",
    get_it_on: "Tải trên",
    coming_soon: "Sắp ra mắt",
  },
  en: {
    features: "Features",
    tip_nav: "Tips",
    showcase: "Showcase",
    tech: "Technology",
    guide: "Guide",
    android_app: "Android App",
    mobile_web: "Mobile Web",
    badge: "MOBILE WEB & ANDROID COMPLETED 😭",
    headline_1: "FIND YOUR",
    headline_2: "SQUAD",
    subtitle: "If Locket + Tinder + Discord had a baby, it would probably be GameNect 😆\n\nA place to make new friends, find matching squadmates, post photos, share moments, and livestream.",
    cta_android: "Get Android App (APK)",
    cta_web: "Try Mobile Web",
    feature_section_title: "KEY",
    feature_section_subtitle: "FEATURES",
    features_intro: "GameNect is a social network built to connect the next generation. Stop struggling to rank up alone. Our intelligent AI Matchmaking system analyzes player data to help you find teammates who share similar skills, interests, and playstyles, making it easier than ever to build the perfect squad and make new friends.",
    match_title: "AI Matchmaking",
    match_desc: "Quickly discover compatible teammates and gaming partners.",
    voice_title: "Chat & Connect",
    voice_desc: "Message, socialize, and team up with gamers from around the world.",
    geo_title: "Moments & Feed",
    geo_desc: "Share your best highlights, post updates, and engage with the community.",
    verify_title: "Gamer Profiles",
    verify_desc: "Create a personalized gaming profile that showcases your identity, achievements, and favorite games.",
    mentor_title: "Become a Mentor",
    mentor_desc: "Unlock the exclusive ability to make public Posts on the feed, livestream to your audience, share your gaming experience, and build your personal brand.",
    tip_title: "Tip: Fast Connect",
    tip_desc: "Don't want to wait for an AI match? Use the search bar in the Chat tab to manually find and add your friends instantly!",
    showcase_title: "APP",
    showcase_subtitle: "SHOWCASE",
    showcase_desc: "Take a look inside the GameNect mobile app interface. Simple, clean, and designed for optimal teammate discovery.",
    showcase_onboarding: "Onboarding",
    showcase_matcher: "Teammate Matcher",
    showcase_discover: "Discover Moment",
    showcase_my_moment: "My Moment",
    showcase_posts: "Mentor Posts",
    showcase_profile: "Mentor Profile",
    showcase_discover_mentors: "Discover Mentors",
    showcase_camera: "Moments Camera",
    showcase_who_likes_you: "Who Likes You",
    showcase_premium: "Missed Connections",
    showcase_premium_features: "Premium Features",
    showcase_chat: "Messages",
    showcase_user_settings: "Profile Settings",
    showcase_wallet: "GameNect Wallet",
    showcase_discover_games: "Discover Games",
    watch_title: "WATCH IN",
    watch_subtitle: "ACTION",
    watch_desc: "Watch GameNect in action. See how smooth the matching, voice connection, and community interaction work on device.",
    video_1: "Video Demo 1",
    video_2: "Video Demo 2",
    video_3: "Video Demo 3",
    guide_title: "USER",
    guide_subtitle: "GUIDE",
    guide_desc: "Master GameNect in just a few basic steps. From optimizing teammate matchmaking to enabling push notifications on the Web App.",
    guide_step1_title: "1. Match Settings",
    guide_step1_desc: "Click the Settings icon (Home Screen) or 'Match Settings' (Profile Screen). Adjust your filters and don't forget to tap 'Get Location' to enable location permissions!",
    guide_step2_title: "2. Enable Web Notifications",
    guide_step2_desc: "For Mobile Web users: Go to your Profile screen and scroll to the bottom, then tap the 'Enable Web Notifications' button so you never miss an incoming message or a great new Match.",
    guide_step3_title: "3. Add Web App to Home Screen",
    guide_step3_desc: "PWA Trend: iOS users (or Android users who prefer Web) can tap 'Share' -> 'Add to Home Screen' in their browser to enjoy a native-like app experience!",
    tech_title: "POWERED BY MODERN TECH",
    ready_title: "READY TO",
    ready_subtitle: "DOMINATE?",
    ready_desc: "Download the Android app or try the Mobile Web version today!",
    footer_privacy: "Privacy Policy",
    footer_terms: "Terms of Use",
    footer_built: "Built with Next.js & Tailwind CSS v4",
    get_it_on: "Get it on",
    coming_soon: "Coming Soon",
  }
};

// --- UI HELPERS ---

const SectionTitle = ({ title, subtitle }: { title: string, subtitle: string }) => (
  <div className="text-center mb-16 relative z-10">
    <h2 className="inline-block text-3xl md:text-5xl font-black text-black tracking-tight uppercase italic border-[3px] border-black bg-[#FFD54F] px-6 py-3 shadow-[5px_5px_0px_0px_#000000] transform -rotate-1">
      {title} <span className="underline decoration-[#FF6E40] decoration-[4px]">{subtitle}</span>
    </h2>
  </div>
);

const ImageWithPointer = ({ src, alt, top, left, bottom, right }: any) => (
  <div className="relative border-[2px] border-black shadow-[2px_2px_0px_0px_#000000] overflow-hidden group">
    <img src={src} alt={alt} className="w-full h-auto object-cover" />
    <motion.div 
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ repeat: Infinity, duration: 1.5 }}
      className="absolute flex items-center justify-center pointer-events-none z-10"
      style={{ top, left, bottom, right, transform: 'translate(-50%, -50%)' }}
    >
      <div className="absolute w-12 h-12 rounded-full border-[3px] border-red-500 bg-red-500/20 animate-ping" />
      <div className="absolute top-2 left-2 animate-bounce">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="#EF4444" stroke="#7F1D1D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"/>
          <path d="M13 13l6 6"/>
        </svg>
      </div>
    </motion.div>
  </div>
);

const GridBackground = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-100" />
  </div>
);

// --- COMPONENTS ---

const Navbar = ({ lang, changeLang }: { lang: "vi" | "en", changeLang: (l: "vi" | "en") => void }) => {
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
      // Fix mobile scroll issue by closing menu first, then scrolling
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        const yOffset = -100; 
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }, 150);
    }
  };

  const curr = t[lang];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-[3px] border-black ${isScrolled ? "bg-white py-3 shadow-[0_4px_0_0_rgba(0,0,0,1)]" : "bg-white/95 py-5"}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-1.5 cursor-pointer font-black italic text-xl md:text-2xl select-none" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="bg-black text-white px-2.5 py-0.5 border-[2px] border-black transform -rotate-1">GAME</span>
          <span className="bg-[#FF6E40] text-black px-2.5 py-0.5 border-[2px] border-black transform rotate-2">NECT</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 font-black text-sm text-black tracking-wider">
          <button onClick={() => scrollToSection("features")} className="hover:text-[#FF6E40] hover:underline cursor-pointer uppercase">{curr.features}</button>
          <button onClick={() => scrollToSection("tips")} className="hover:text-[#FF6E40] hover:underline cursor-pointer uppercase">{curr.tip_nav}</button>
          <button onClick={() => scrollToSection("guide")} className="hover:text-[#FF6E40] hover:underline cursor-pointer uppercase">{curr.guide}</button>
          <button onClick={() => scrollToSection("showcase")} className="hover:text-[#FF6E40] hover:underline cursor-pointer uppercase">{curr.showcase}</button>
          <button onClick={() => scrollToSection("tech")} className="hover:text-[#FF6E40] hover:underline cursor-pointer uppercase">{curr.tech}</button>
          
          <button 
            onClick={() => changeLang(lang === "vi" ? "en" : "vi")}
            className="px-3 py-2 bg-white text-black border-[2px] border-black font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#000000] hover:shadow-[3.5px_3.5px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000000] transition-all cursor-pointer flex items-center gap-1.5"
          >
            <Globe size={13} /> {lang === "vi" ? "VI" : "EN"}
          </button>

          <button 
            onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')}
            className="px-4 py-2 bg-[#FF6E40] text-black border-[2px] border-black font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#000000] hover:shadow-[3.5px_3.5px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000000] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Download size={13} /> {curr.android_app.toUpperCase()}
          </button>

          <button 
            onClick={() => window.open(MOBILE_WEB_URL, '_blank')}
            className="px-4 py-2 bg-[#FFD54F] text-black border-[2px] border-black font-black text-xs uppercase tracking-wider shadow-[2px_2px_0px_0px_#000000] hover:shadow-[3.5px_3.5px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000000] transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <Globe size={13} /> {curr.mobile_web.toUpperCase()}
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-black border-[2.5px] border-black p-1 bg-white shadow-[2px_2px_0px_0px_#000000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_0px_#000000]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t-[3px] border-black overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-6 text-center font-black text-black">
              <button onClick={() => scrollToSection("features")} className="text-lg hover:text-[#FF6E40] uppercase">{curr.features}</button>
              <button onClick={() => scrollToSection("tips")} className="text-lg hover:text-[#FF6E40] uppercase">{curr.tip_nav}</button>
              <button onClick={() => scrollToSection("guide")} className="text-lg hover:text-[#FF6E40] uppercase">{curr.guide}</button>
              <button onClick={() => scrollToSection("showcase")} className="text-lg hover:text-[#FF6E40] uppercase">{curr.showcase}</button>
              <button onClick={() => scrollToSection("tech")} className="text-lg hover:text-[#FF6E40] uppercase">{curr.tech}</button>
              
              <button 
                onClick={() => {
                  changeLang(lang === "vi" ? "en" : "vi");
                  setIsMobileMenuOpen(false);
                }} 
                className="w-full justify-center py-2.5 bg-white text-black border-[2.5px] border-black font-black flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#000000]"
              >
                <Globe size={18} /> {lang === "vi" ? "TIẾNG VIỆT" : "ENGLISH"}
              </button>

              <button 
                onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')} 
                className="w-full justify-center py-3 bg-[#FF6E40] text-black border-[2.5px] border-black font-black flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#000000]"
              >
                <Download size={18} /> {curr.android_app.toUpperCase()}
              </button>

              <button 
                onClick={() => window.open(MOBILE_WEB_URL, '_blank')} 
                className="w-full justify-center py-3 bg-[#FFD54F] text-black border-[2.5px] border-black font-black flex items-center justify-center gap-2 shadow-[3px_3px_0px_0px_#000000]"
              >
                <Globe size={18} /> {curr.mobile_web.toUpperCase()}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const HeroSection = ({ lang }: { lang: "vi" | "en" }) => {
  const curr = t[lang];
  const [isFanned, setIsFanned] = useState(false);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white pt-28 pb-16">
      <GridBackground />
      
      <div className="relative z-10 px-6 max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:col-span-7 text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border-[2.5px] border-black bg-[#FF6E40] text-black font-mono font-black text-xs tracking-widest uppercase transform rotate-1 shadow-[3px_3px_0px_0px_#000000]">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
                </span>
                {curr.badge}
              </div>
              
              {/* Headline */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-black tracking-tighter leading-[0.95] mb-6 uppercase italic">
                {curr.headline_1} <br/>
                <span className="bg-[#FFD54F] text-black px-4 py-1.5 border-[3.5px] border-black inline-block transform -rotate-1.5 my-2 shadow-[5px_5px_0px_0px_#000000]">{curr.headline_2}</span>
              </h1>
              
              <p className="mt-8 text-md md:text-lg text-zinc-800 max-w-xl font-bold leading-relaxed border-l-[4px] border-black pl-4 whitespace-pre-line">
                {curr.subtitle}
              </p>
            </motion.div>
          </div>

          {/* Right Screens Stack */}
          <div className="lg:col-span-5 flex justify-center relative min-h-[480px] lg:min-h-[540px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="relative w-[360px] h-[500px] cursor-pointer select-none"
              onMouseEnter={() => setIsFanned(true)}
              onMouseLeave={() => setIsFanned(false)}
              onClick={() => setIsFanned(!isFanned)}
            >
              {/* Phone 1: Left (Back) */}
              <div className={`absolute top-12 left-0 w-[185px] transform -rotate-12 border-[3px] border-black p-1.5 bg-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-500 ease-out z-10 ${isFanned ? "-translate-x-16 -rotate-[20deg] -translate-y-3 shadow-[6px_6px_0px_0px_#000000]" : ""}`}>
                <img 
                  src="/images/IMG_3443_2.jpg" 
                  alt="App Screen Left" 
                  className="w-full object-cover border-[1.5px] border-black"
                />
              </div>

              {/* Phone 2: Middle (Between) */}
              <div className={`absolute top-6 left-[85px] w-[185px] transform rotate-2 border-[3px] border-black p-1.5 bg-white shadow-[4px_4px_0px_0px_#000000] transition-all duration-500 ease-out z-20 ${isFanned ? "-translate-y-12 scale-105 shadow-[7px_7px_0px_0px_#000000]" : ""}`}>
                <img 
                  src="/images/IMG_3426_2.jpg" 
                  alt="App Screen Middle" 
                  className="w-full object-cover border-[1.5px] border-black"
                />
              </div>

              {/* Phone 3: Right (Front) */}
              <div className={`absolute top-0 right-0 w-[190px] transform rotate-12 border-[3px] border-black p-1.5 bg-white shadow-[5px_5px_0px_0px_#000000] transition-all duration-500 ease-out z-30 ${isFanned ? "translate-x-16 rotate-[20deg] translate-y-3 shadow-[8px_8px_0px_0px_#000000]" : ""}`}>
                <img 
                  src="/images/IMG_3444.jpg" 
                  alt="App Screen Right" 
                  className="w-full object-cover border-[1.5px] border-black"
                />
              </div>

              {/* Decorative Brutalist Elements */}
              <div className={`absolute bottom-4 left-4 w-12 h-12 bg-[#FFD54F] border-[2.5px] border-black shadow-[2.5px_2.5px_0px_0px_#000000] z-0 transform rotate-12 transition-all duration-500 ${isFanned ? "scale-110 -rotate-12" : ""}`} />
              <div className={`absolute top-2 right-12 w-8 h-8 bg-[#64B5F6] border-[2px] border-black shadow-[2px_2px_0px_0px_#000000] z-0 transform -rotate-45 transition-all duration-500 ${isFanned ? "scale-110 rotate-45" : ""}`} />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon: Icon, title, desc, delay, accentBg, img }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="group p-8 bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 relative overflow-hidden flex flex-col"
  >
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={100} />
    </div>
    
    <div 
      className="w-14 h-14 rounded-none flex items-center justify-center mb-6 border-[3px] border-black shadow-[2px_2px_0px_0px_#000000] transition-all flex-shrink-0"
      style={{ backgroundColor: accentBg }}
    >
      <Icon className="text-black" size={28} />
    </div>
    
    <h3 className="text-2xl font-black text-black mb-3 uppercase italic tracking-tight">{title}</h3>
    <p className="text-zinc-700 leading-relaxed text-sm font-bold flex-1">{desc}</p>

    {img && (
      <div className="mt-6 border-[2px] border-black shadow-[2px_2px_0px_0px_#000000] overflow-hidden">
        <img src={img} alt={title} className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300" />
      </div>
    )}
  </motion.div>
);

const ShowcaseScreen = ({ src, label, color }: { src: string, label: string, color: string }) => (
  <div className="flex-shrink-0 w-[240px] flex flex-col items-center bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[8px_8px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all">
    <div className="border-[2px] border-black overflow-hidden bg-zinc-50 w-full">
      <img src={src} alt={label} className="w-full h-[400px] object-cover" />
    </div>
    <div 
      className="w-full mt-4 text-center py-2 border-[2px] border-black font-mono font-black text-xs uppercase text-black"
      style={{ backgroundColor: color }}
    >
      {label}
    </div>
  </div>
);

const TechBadge = ({ text, color }: { text: string, color: string }) => (
  <div 
    className="px-5 py-3 border-[2.5px] border-black text-black font-mono text-sm font-black uppercase tracking-wider shadow-[3px_3px_0px_0px_#000000] hover:shadow-[5px_5px_0px_0px_#000000] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-[1px_1px_0px_0px_#000000] transition-all cursor-default"
    style={{ backgroundColor: color }}
  >
    {text}
  </div>
);

export default function Home() {
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

  const curr = t[lang];

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-[#FFD54F] selection:text-black overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marquee 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />
      <Navbar lang={lang} changeLang={changeLang} />
      <HeroSection lang={lang} />

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 px-6 relative bg-zinc-50 border-t-[4px] border-black">
        <GridBackground />
        <div className="container mx-auto relative z-10">
          <SectionTitle title={curr.feature_section_title} subtitle={curr.feature_section_subtitle} />
          
          <p className="text-center text-zinc-800 max-w-2xl mx-auto mb-16 font-bold text-sm md:text-base border-[3px] border-black bg-white p-6 shadow-[5px_5px_0px_0px_#000000] transform rotate-0.5 leading-relaxed">
            {curr.features_intro}
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <FeatureCard 
              delay={0.1}
              icon={Gamepad2}
              title={curr.match_title}
              desc={curr.match_desc}
              accentBg="#FFD54F" // Yellow
            />
            <FeatureCard 
              delay={0.2}
              icon={MessageSquare}
              title={curr.voice_title}
              desc={curr.voice_desc}
              accentBg="#81C784" // Green
            />
            <FeatureCard 
              delay={0.3}
              icon={Share2}
              title={curr.geo_title}
              desc={curr.geo_desc}
              accentBg="#64B5F6" // Blue
            />
            <FeatureCard 
              delay={0.4}
              icon={User}
              title={curr.verify_title}
              desc={curr.verify_desc}
              accentBg="#FF6E40" // Orangeeeee
            />
            <FeatureCard 
              delay={0.5}
              icon={Flame}
              title={curr.mentor_title}
              desc={curr.mentor_desc}
              accentBg="#E040FB" // Purple
            />
          </div>
        </div>
      </section>

      {/* TIPS SECTION */}
      <section id="tips" className="py-24 px-6 relative bg-white border-t-[4px] border-black">
        <div className="container mx-auto relative z-10 max-w-5xl">
          <SectionTitle title="PRO" subtitle="TIP" />
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000000] hover:shadow-[10px_10px_0px_0px_#000000] hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 overflow-hidden flex flex-col md:flex-row items-center"
          >
            {/* Text Content */}
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <Rocket size={120} />
              </div>
              
              <div className="w-16 h-16 rounded-none flex items-center justify-center mb-8 border-[3px] border-black shadow-[3px_3px_0px_0px_#000000] bg-[#18FFFF] flex-shrink-0">
                <Rocket className="text-black" size={32} />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-black mb-4 uppercase italic tracking-tight">{curr.tip_title}</h3>
              <p className="text-zinc-700 leading-relaxed text-base md:text-lg font-bold">{curr.tip_desc}</p>
            </div>

            {/* Image Content */}
            <div className="w-full md:w-1/2 border-t-[3px] md:border-t-0 md:border-l-[3px] border-black bg-zinc-50 flex justify-center items-center p-8">
              <div className="border-[2px] border-black shadow-[4px_4px_0px_0px_#000000] max-w-[280px] overflow-hidden transform hover:scale-105 transition-transform duration-300 rotate-2">
                <img src="/guide/IMG_3548.jpg" alt={curr.tip_title} className="w-full h-auto object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* USER GUIDE SECTION */}
      <section id="guide" className="py-24 px-6 relative bg-white border-t-[4px] border-black">
        <GridBackground />
        <div className="container mx-auto relative z-10 max-w-5xl">
          <SectionTitle title={curr.guide_title} subtitle={curr.guide_subtitle} />
          
          <p className="text-center text-zinc-700 max-w-2xl mx-auto mb-16 font-bold text-sm md:text-base border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_#000000] bg-zinc-50">
            {curr.guide_desc}
          </p>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-center border-[3px] border-black p-6 md:p-8 bg-zinc-50 shadow-[6px_6px_0px_0px_#000000]">
              <div className="md:w-1/3">
                <h3 className="text-2xl font-black mb-4 uppercase text-black italic bg-[#FFD54F] border-[2px] border-black inline-block px-3 py-1 transform -rotate-1 shadow-[3px_3px_0px_0px_#000000]">{curr.guide_step1_title}</h3>
                <p className="text-zinc-800 font-bold leading-relaxed">{curr.guide_step1_desc}</p>
              </div>
              <div className="md:w-2/3 grid grid-cols-3 gap-4">
                <ImageWithPointer src="/guide/IMG_3543.jpg" alt="Home Settings" top="9%" left="89%" />
                <ImageWithPointer src="/guide/IMG_3541.jpg" alt="Profile Settings" top="73%" left="75%" />
                <ImageWithPointer src="/guide/IMG_3542.jpg" alt="Match Settings" top="27%" left="77%" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row-reverse gap-8 items-center border-[3px] border-black p-6 md:p-8 bg-zinc-50 shadow-[6px_6px_0px_0px_#000000]">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-black mb-4 uppercase text-black italic bg-[#81C784] border-[2px] border-black inline-block px-3 py-1 transform rotate-1 shadow-[3px_3px_0px_0px_#000000]">{curr.guide_step2_title}</h3>
                <p className="text-zinc-800 font-bold leading-relaxed">{curr.guide_step2_desc}</p>
              </div>
              <div className="md:w-1/2 flex justify-center w-full">
                <div className="w-2/3">
                  <ImageWithPointer src="/guide/IMG_3546.jpg" alt="Enable Notifications" top="82%" left="83%" />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-center border-[3px] border-black p-6 md:p-8 bg-zinc-50 shadow-[6px_6px_0px_0px_#000000]">
              <div className="md:w-1/2">
                <h3 className="text-2xl font-black mb-4 uppercase text-black italic bg-[#64B5F6] border-[2px] border-black inline-block px-3 py-1 transform -rotate-1 shadow-[3px_3px_0px_0px_#000000]">{curr.guide_step3_title}</h3>
                <p className="text-zinc-800 font-bold leading-relaxed">{curr.guide_step3_desc}</p>
              </div>
              <div className="md:w-1/2 flex gap-4 w-full">
                <div className="w-1/2">
                  <ImageWithPointer src="/guide/IMG_3547.jpg" alt="Share Button" top="3%" left="86%" />
                </div>
                <div className="w-1/2">
                  <ImageWithPointer src="/guide/IMG_3544.jpg" alt="Add to Home Screen" top="56%" left="56%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP SHOWCASE */}
      <section id="showcase" className="py-24 px-6 relative bg-white border-t-[4px] border-black overflow-hidden">
        <GridBackground />
        <div className="container mx-auto relative z-10">
          <SectionTitle title={curr.showcase_title} subtitle={curr.showcase_subtitle} />
          
          <p className="text-center text-zinc-700 max-w-xl mx-auto mb-12 font-bold text-sm md:text-base">
            {curr.showcase_desc}
          </p>

          <div className="relative mx-4 md:mx-auto max-w-6xl overflow-hidden py-6 border-[3px] border-black bg-zinc-50 select-none shadow-[5px_5px_0px_0px_#000000]">
            <div className="marquee-track">
              {/* Set 1 */}
              <div className="flex gap-6 pr-6">
                <ShowcaseScreen 
                  src="/images/IMG_3425_2.jpg" 
                  label={curr.showcase_onboarding} 
                  color="#FFD54F"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3426_2.jpg" 
                  label={curr.showcase_matcher} 
                  color="#81C784"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3427_2.jpg" 
                  label={curr.showcase_discover} 
                  color="#64B5F6"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3428_2.jpg" 
                  label={curr.showcase_my_moment} 
                  color="#FF6E40"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3429_2.jpg" 
                  label={curr.showcase_posts} 
                  color="#E0E0E0"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3432_2.jpg" 
                  label={curr.showcase_profile} 
                  color="#FFB74D"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3433_2.jpg" 
                  label={curr.showcase_discover_mentors} 
                  color="#C5E1A5"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3434_2.jpg" 
                  label={curr.showcase_camera} 
                  color="#90CAF9"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3558.jpg" 
                  label={curr.showcase_who_likes_you} 
                  color="#F48FB1"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3559.jpg" 
                  label={curr.showcase_premium} 
                  color="#FFCC80"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3560.jpg" 
                  label={curr.showcase_premium_features} 
                  color="#BCAAA4"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3561.jpg" 
                  label={curr.showcase_chat} 
                  color="#80CBC4"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3562.jpg" 
                  label={curr.showcase_user_settings} 
                  color="#9FA8DA"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3563.jpg" 
                  label={curr.showcase_wallet} 
                  color="#FFAB91"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3564.jpg" 
                  label={curr.showcase_discover_games} 
                  color="#CE93D8"
                />
              </div>
              
              {/* Set 2 (Duplicate for seamless loop) */}
              <div className="flex gap-6 pr-6">
                <ShowcaseScreen 
                  src="/images/IMG_3425_2.jpg" 
                  label={curr.showcase_onboarding} 
                  color="#FFD54F"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3426_2.jpg" 
                  label={curr.showcase_matcher} 
                  color="#81C784"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3427_2.jpg" 
                  label={curr.showcase_discover} 
                  color="#64B5F6"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3428_2.jpg" 
                  label={curr.showcase_my_moment} 
                  color="#FF6E40"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3429_2.jpg" 
                  label={curr.showcase_posts} 
                  color="#E0E0E0"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3432_2.jpg" 
                  label={curr.showcase_profile} 
                  color="#FFB74D"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3433_2.jpg" 
                  label={curr.showcase_discover_mentors} 
                  color="#C5E1A5"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3434_2.jpg" 
                  label={curr.showcase_camera} 
                  color="#90CAF9"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3558.jpg" 
                  label={curr.showcase_who_likes_you} 
                  color="#F48FB1"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3559.jpg" 
                  label={curr.showcase_premium} 
                  color="#FFCC80"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3560.jpg" 
                  label={curr.showcase_premium_features} 
                  color="#BCAAA4"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3561.jpg" 
                  label={curr.showcase_chat} 
                  color="#80CBC4"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3562.jpg" 
                  label={curr.showcase_user_settings} 
                  color="#9FA8DA"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3563.jpg" 
                  label={curr.showcase_wallet} 
                  color="#FFAB91"
                />
                <ShowcaseScreen 
                  src="/images/IMG_3564.jpg" 
                  label={curr.showcase_discover_games} 
                  color="#CE93D8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP IN ACTION VIDEOS */}
      <section id="demo" className="py-24 px-6 relative bg-zinc-50 border-t-[4px] border-black overflow-hidden">
        <GridBackground />
        <div className="container mx-auto relative z-10">
          <SectionTitle title={curr.watch_title} subtitle={curr.watch_subtitle} />
          
          <p className="text-center text-zinc-700 max-w-xl mx-auto mb-12 font-bold text-sm md:text-base">
            {curr.watch_desc}
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Video 1 */}
            <div className="bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all flex flex-col items-center">
              <div className="border-[2px] border-black bg-black w-full aspect-[9/16] overflow-hidden relative">
                <video 
                  src="/videos/video1.mov" 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full mt-4 text-center py-2 border-[2px] border-black bg-[#FFD54F] font-mono font-black text-xs uppercase text-black">
                {curr.video_1}
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all flex flex-col items-center">
              <div className="border-[2px] border-black bg-black w-full aspect-[9/16] overflow-hidden relative">
                <video 
                  src="/videos/video2.mov" 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full mt-4 text-center py-2 border-[2px] border-black bg-[#81C784] font-mono font-black text-xs uppercase text-black">
                {curr.video_2}
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-white border-[3px] border-black p-4 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] transition-all flex flex-col items-center">
              <div className="border-[2px] border-black bg-black w-full aspect-[9/16] overflow-hidden relative">
                <video 
                  src="/videos/video3.mov" 
                  controls 
                  preload="metadata"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full mt-4 text-center py-2 border-[2px] border-black bg-[#64B5F6] font-mono font-black text-xs uppercase text-black">
                {curr.video_3}
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* TECH STACK */}
      <section id="tech" className="py-20 bg-zinc-50 border-t-[4px] border-black relative overflow-hidden">
        <GridBackground />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-sm font-black mb-10 text-black uppercase tracking-[0.4em] inline-block border-[2px] border-black bg-white px-4 py-2 transform -rotate-1 shadow-[2px_2px_0px_0px_#000000]">
            {curr.tech_title}
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {[
              { text: "Flutter 3.0", color: "#FFD54F" },
              { text: "Firebase Auth", color: "#81C784" },
              { text: "Firestore DB", color: "#64B5F6" },
              { text: "Agora RTC", color: "#FF6E40" },
              { text: "Next.js 16", color: "#FFFFFF" },
              { text: "Tailwind CSS", color: "#FFD54F" },
              { text: "Stripe Payment", color: "#81C784" },
              { text: "TensorFlow Lite", color: "#64B5F6" }
            ].map((tech) => (
              <TechBadge key={tech.text} text={tech.text} color={tech.color} />
            ))}
          </div>
        </div>
      </section>

      {/* DOWNLOAD CTA */}
      <section id="download" className="py-24 bg-[#81C784] border-y-[4px] border-black text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:30px_30px]" />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="inline-block text-3xl md:text-5xl font-black text-black mb-6 uppercase italic border-[3px] border-black bg-white px-6 py-3 shadow-[5px_5px_0px_0px_#000000] transform -rotate-1">
              {curr.ready_title} <span className="text-[#FF6E40]">{curr.ready_subtitle}</span>
            </h2>
            <p className="text-black mb-10 max-w-xl mx-auto text-md md:text-lg font-black leading-relaxed">
              {curr.ready_desc}
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6 items-center">
              {/* GOOGLE PLAY - ACTIVE */}
              <button 
                onClick={() => window.open(GOOGLE_PLAY_URL, '_blank')}
                className="flex items-center justify-center gap-4 px-8 py-4 bg-white text-black border-[3px] border-black rounded-none hover:bg-[#FFD54F] transition-all group hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] font-black min-w-[220px] cursor-pointer"
              >
                <Download className="group-hover:animate-bounce" size={24} />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider font-mono font-bold">{curr.get_it_on}</div>
                  <div className="text-lg font-black">Android</div>
                </div>
              </button>

              {/* MOBILE WEB - ACTIVE */}
              <button 
                onClick={() => window.open(MOBILE_WEB_URL, '_blank')}
                className="flex items-center justify-center gap-4 px-8 py-4 bg-white text-black border-[3px] border-black rounded-none hover:bg-[#FF6E40] transition-all group hover:-translate-x-0.5 hover:-translate-y-0.5 shadow-[4px_4px_0px_0px_#000000] hover:shadow-[6px_6px_0px_0px_#000000] font-black min-w-[220px] cursor-pointer"
              >
                <Globe size={24} className="group-hover:rotate-12 transition-transform" />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider font-mono font-bold">{lang === "vi" ? "Trải nghiệm" : "Open"}</div>
                  <div className="text-lg font-black">Mobile Web</div>
                </div>
              </button>

              {/* APPLE STORE - COMING SOON */}
              <button 
                disabled
                className="flex items-center justify-center gap-4 px-8 py-4 bg-[#81C784] text-zinc-700 border-[3px] border-zinc-700 rounded-none cursor-not-allowed opacity-60 min-w-[220px] font-black"
              >
                <Apple size={24} />
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase tracking-wider font-mono font-bold">{curr.coming_soon}</div>
                  <div className="text-lg font-black">App Store</div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 bg-white border-t-[4px] border-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-1.5 cursor-pointer font-black italic text-lg select-none">
              <span className="bg-black text-white px-2 py-0.5 border-[2px] border-black transform -rotate-1">GAME</span>
              <span className="bg-[#FF6E40] text-black px-2 py-0.5 border-[2px] border-black transform rotate-2">NECT</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-black tracking-wider text-black">
              <a href="/privacy" className="hover:text-[#FF6E40] transition-colors uppercase">{curr.footer_privacy}</a>
              <span className="w-1.5 h-1.5 bg-black rounded-full hidden md:inline-block" />
              <a href="/terms" className="hover:text-[#FF6E40] transition-colors uppercase">{curr.footer_terms}</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t-[3px] border-black text-center flex flex-col md:flex-row justify-between items-center gap-4 text-black text-xs md:text-sm font-mono font-bold">
            <p>&copy; 2026 GameNect Inc. By Le Minh Quang.</p>
            <p className="border-[2px] border-black bg-[#FFD54F] px-2 py-1 shadow-[2px_2px_0px_0px_#000000]">{curr.footer_built}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}