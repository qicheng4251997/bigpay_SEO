'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const [promotionsVisible, setPromotionsVisible] = useState(false);
  const [galleryVisible, setGalleryVisible] = useState(false);
  const statsRef = useRef(null);
  const promotionsRef = useRef(null);
  const galleryRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);


  const promotions = [
    { 
      image: '/featured_gaming/BNG.png', 
      title: 'BNG', 
    },
    { 
      image: '/featured_gaming/FaChai.png', 
      title: 'FA CHAI', 
    },
    { 
      image: '/featured_gaming/ImperiumGames.png', 
      title: 'IMPERIUM GAMES', 
    },
    { 
      image: '/featured_gaming/Jili.png', 
      title: 'JILI', 
    },
    { 
      image: '/featured_gaming/Joker.png', 
      title: 'JOKER', 
    },
    { 
      image: '/featured_gaming/Pegasus.png', 
      title: 'PEGASUS', 
    },
    { 
      image: '/featured_gaming/VPower.png', 
      title: 'V POWER', 
    },
  ];

  const galleryImages = [
    '/home/wheel.png',
    '/home/checkin.png',
    '/home/SmashTheEgg.png',
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPromotionsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (promotionsRef.current) {
      observer.observe(promotionsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGalleryVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (galleryRef.current) {
      observer.observe(galleryRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-800 py-4 px-6">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/">
              <div className="flex items-center justify-center w-24 h-8 cursor-pointer">
                <img
                  src="/home/BP_Logo.png"
                  alt="BigPay77"
                  className="max-w-full max-h-full object-contain rounded-lg"
                />
              </div>
            </Link>
            <span className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              BigPay77
            </span>
          </div>
          {/* Navigation + Button */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-8">
              <Link href="/" className="hover:text-cyan-400 transition-colors cursor-pointer">Home</Link>
              <Link href="/promotions" className="hover:text-cyan-400 transition-colors cursor-pointer">Promotions</Link>
              <Link href="/about" className="hover:text-cyan-400 transition-colors cursor-pointer">About</Link>
              <Link href="/deposit" className="hover:text-cyan-400 transition-colors cursor-pointer">Deposit</Link>
            </nav>

            {/* 黄色按钮 */}
            <Link
              href="https://bigpay77.net/register/SMSRegister"
              className="bg-cyan-400 text-gray-900 px-6 py-2 font-semibold rounded-md hover:bg-gray-300 transition-colors"
            >
              REGISTER
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-8 h-8 flex items-center justify-center md:hidden text-white"
          >
            <i className={`ri-${mobileOpen ? "close" : "menu"}-line text-2xl`} />
          </button>

          {/* Mobile Menu (Right Top) */}
          {mobileOpen && (
            <div className="absolute right-4 top-full mt-2 w-56 
                            bg-white/10 backdrop-blur-md text-white 
                            rounded-xl shadow-xl border border-white/20 
                            md:hidden z-60">
              <nav className="flex flex-col px-5 py-4 space-y-4 text-sm">
                <Link href="/" onClick={() => setMobileOpen(false)} className="hover:text-cyan-400">
                  Home
                </Link>
                <Link href="/promotions" onClick={() => setMobileOpen(false)} className="hover:text-cyan-400">
                  Promotions
                </Link>
                <Link href="/about" onClick={() => setMobileOpen(false)} className="hover:text-cyan-400">
                  About
                </Link>
                <Link href="/deposit" onClick={() => setMobileOpen(false)} className="hover:text-cyan-400">
                  Deposit
                </Link>

                <Link
                  href="https://bigpay77.net/register/SMSRegister"
                  onClick={() => setMobileOpen(false)}
                  className="mt-3 bg-cyan-400/90 text-gray-900 px-4 py-2 
                            font-semibold rounded-md text-center hover:bg-cyan-400"
                >
                  REGISTER
                </Link>
              </nav>
            </div>
          )}


        </div>
      </header>

      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/about/video-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/about/BigPay_Banner.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
          <div className="flex items-center justify-center">
            <div
              className={`space-y-6 text-center transform transition-all duration-1000
              ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
            >
              {/* Brand Title */}
              <div
                className="text-cyan-400 font-black tracking-wide mb-4 break-words
                text-5xl sm:text-6xl md:text-7xl lg:text-8xl"
              >
                - BIGPAY77 -
              </div>

              {/* Main Heading */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug
                max-w-xl mx-auto">
                BigPay77 Aus E-Wallet | <br />BigPay77 Ewallet Casino
              </h1>
              
              <h1
                className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug
                max-w-xl mx-auto"
              >
                WELCOME TO
                <br />
                <span className="text-cyan-400 block">
                  The Best Online Casino & Betting Platform
                  <br className="hidden sm:block" />
                  for Modern Players
                </span>
              </h1>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-gray-300 max-w-md mx-auto px-2">
                Experience online casino games, live casino, sports betting, and real-money slots
                — all in one intelligent platform.
              </p>

              {/* CTA */}
              <div className="flex justify-center pt-2">
                <a
                  href="https://bigpay77.net/register/SMSRegister"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-400 text-gray-900 px-8 py-3 font-semibold
                            hover:bg-gray-300 transition-colors whitespace-nowrap cursor-pointer text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="promotions" ref={promotionsRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-cyan-400">FEATURED</span><br />
              Gaming Experience
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover our premium collection of casino games, live dealers, sports betting, and exciting slots
            </p>
          </div>

          {/* --- Swiper Carousel Start --- */}
          <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={16}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {promotions.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center"
              >

                {/* ================= 图片区（高度固定） ================= */}
                <a
                  href="https://bigpay77.net/register/SMSRegister"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-full
                    h-44 sm:h-48 md:h-52
                    flex items-center justify-center
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                      max-h-full
                      max-w-full
                      object-contain
                      transition-transform
                      duration-300
                      hover:scale-105
                      swiper-img
                    "
                  />
                </a>

                {/* ================= 标题区（最小高度锁死） ================= */}
                <div
                  className="
                    mt-3
                    w-full
                    min-h-[3rem]
                    flex
                    items-start
                    justify-center
                    text-center
                  "
                >
                  <p
                    className="
                      text-white
                      text-lg
                      font-semibold
                      leading-tight
                      line-clamp-2
                    "
                  >
                    {item.title}
                  </p>
                </div>

              </SwiperSlide>
            ))}
          </Swiper>
          {/* --- Swiper Carousel End --- */}
        </div>
      </section>

      <section id="about" className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                BigPay77 is the <span className="text-cyan-400">Leader</span> in the<br />
                <span className="text-cyan-400">Online Casino & Betting </span>industry<br />
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                With years of proven experience, BigPay77 has built a strong reputation as a trusted Australian E-Wallet Casino and online gaming platform, delivering a secure, seamless, and premium casino betting experience to players across the region.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4 text-justify">
                Powered by the BigPay77 Aus E-Wallet, our platform ensures fast, reliable, and hassle-free transactions for all casino games and betting activities, allowing players to deposit and withdraw with confidence. We are committed to fair casino gameplay, transparent betting systems, and advanced security standards, providing a safe and trustworthy online casino environment every time you play.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mt-4 text-justify">
                At BigPay77, we put players first. From responsive customer support to smooth performance across devices, every detail is designed to support a wide range of online casino games, betting options, and real-time gaming experiences — offering a stable, enjoyable, and reliable online gambling platform anytime, anywhere in Australia and beyond.
              </p>                   
            
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Certified</div>
                  <div className="text-gray-300">Compliant systems with verified security standards.</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-2">Reliable</div>
                  <div className="text-gray-300">Fast transactions, stable performance, and strong protection.</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/home/BigPay_Leader.png"
                alt="online casino & betting"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-cyan-400 text-gray-900 px-4 py-2 rounded-full font-semibold">
                10+ Years
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-16 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[ 
              { number: '5000+', label: 'Total Games', icon: 'ri-gamepad-line' },
              { number: '24/7', label: 'Operation Hour', icon: 'ri-customer-service-line' },
              { number: '100+', label: 'Player Online Daily', icon: 'ri-user-line' },
              { number: '$', label: 'Low Entry Requirements', icon: 'ri-money-dollar-circle-line' },
            ].map((stat, index) => (
              <div key={index} className={`transform transition-all duration-700 delay-${index * 200} ${statsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'}`}>
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4">
                  {stat.icon.startsWith('ri-') ? (
                    <i className={`${stat.icon} text-white-500 text-3xl`}></i>
                  ) : (
                    <span className="text-3xl">{stat.icon}</span>
                  )}
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">
                <span className="text-cyan-400">Secure <span className="text-white">|</span> Seamless <span className="text-white">|</span> Ready to Play</span>
              </h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                    </div>
                    <span className="text-gray-300">Seamless Experience:</span>
                  </div>
                  <p className="text-gray-400 ml-10">Modern, intuitive interface with smooth transitions across sports, live casino, and slots.</p>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                    </div>
                    <span className="text-gray-300">Instant Wallet Control:</span>
                  </div>
                  <p className="text-gray-400 ml-10">Deposit within seconds and manage your funds anytime, anywhere.</p>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                    </div>
                    <span className="text-gray-300">Advanced Security:</span>
                  </div>
                  <p className="text-gray-400 ml-10">Protects your personal and financial data with top-tier technology.</p>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                    </div>
                    <span className="text-gray-300">All-in-One Platform:</span>
                  </div>
                  <p className="text-gray-400 ml-10">All gaming activities connected in one place for maximum convenience.</p>
                </div>
                <div>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                    </div>
                    <span className="text-gray-300">Smart & Modern Gaming:</span>
                  </div>
                  <p className="text-gray-400 ml-10">Leave outdated platforms behind and enjoy a smarter, safer, smoother way to play.</p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="/home/BigPay_Secure.png"
                alt="e wallet casino"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>

          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/home/BigPay_CustomerSupport.png"
                alt="BigPay_CustomrSupport"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                <span className="text-cyan-400">Customer Support</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                At BigPay77, our dedicated customer support team is committed to providing prompt, reliable assistance whenever you need it. Whether you have questions, require guidance, or need help navigating our platform, our team is always ready to respond with clarity and efficiency.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-customer-service-line text-yellow-400 text-2xl"></i>
                  </div>
                  <span className="text-gray-300">24/7 In-App Support</span>
                </div>
                  <p className="text-gray-400 ml-10">Instant access to our support specialists directly through the app — fast, convenient, and always available.</p>                  
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center">
                    <i className="ri-chat-smile-2-line text-yellow-400 text-xl"></i>
                  </div>
                  <span className="text-gray-300">Live Chat Service</span>
                </div>
                  <p className="text-gray-400 ml-10">Real-time assistance available on our website during service hours, providing immediate solutions and guided help.</p>                  
                
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Kick Start with<br />
            <span className="text-cyan-400">BIGPAY77</span>
          </h2>
          
          <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto">
            Jump into BigPay77 with a seamless start. 
          </p>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-1 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-full transform -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {[ 
                { 
                  step: '01', 
                  title: 'Sign Up / Register', 
                  description: 'Download the BigPay77 app from the App Store or Google Play, launch it, and complete the quick registration.', 
                  icon: 'ri-user-add-line',
                  image: 'https://readdy.ai/api/search-image?query=modern%20smartphone%20showing%20mobile%20app%20registration%20screen%20with%20clean%20user%20interface%2C%20sign%20up%20form%20on%20mobile%20device%2C%20professional%20app%20onboarding%20experience%20with%20yellow%20accent%20colors&width=300&height=200&seq=process1-signup&orientation=landscape'
                },
                { 
                  step: '02', 
                  title: 'Identity Verification', 
                  description: 'For security and verification, simply provide a government-issued ID and follow the on-screen steps.', 
                  icon: 'ri-verified-badge-line',
                  image: 'https://readdy.ai/api/search-image?query=identity%20verification%20process%20on%20smartphone%20screen%2C%20secure%20document%20verification%20interface%2C%20professional%20KYC%20verification%20system%20with%20modern%20design&width=300&height=200&seq=process2-verify&orientation=landscape'
                },
                { 
                  step: '03', 
                  title: 'Deposit', 
                  description: 'After verification, you can top up your BigPay77 wallet through bank transfers, cards, or even cash deposit.', 
                  icon: 'ri-wallet-3-line',
                  image: '/home/deposit.jpg'
                },
                { 
                  step: '04', 
                  title: 'Enjoy', 
                  description: 'Begin your gaming experience with immediate, uninterrupted access to every feature the platform has to offer.', 
                  icon: 'ri-play-circle-line',
                  image: '/home/enjoy.png'
                },
              ].map((process, index) => (
                <div key={index} className="relative group">
                  <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-500/20">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={process.image}
                        alt={process.title}
                        className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent"></div>
                      
                      <div className="absolute top-4 left-4 w-12 h-12 bg-cyan-400 text-gray-900 rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                        {process.step}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-cyan-400/10 rounded-full">
                        <i className={`${process.icon} text-white-400 text-2xl`}></i>
                      </div>
                      <h3 className=" text-yellow-400 text-xl font-semibold mb-3 text-white">{process.title}</h3>
                      <p className="text-gray-300 text-sm leading-relaxed">{process.description}</p>
                    </div>
                    
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/50 transition-all duration-300"></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex justify-center items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-400">Start</span>
              </div>
              <div className="w-16 h-0.5 bg-yellow-400/50"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-400">Process</span>
              </div>
              <div className="w-16 h-0.5 bg-yellow-400/50"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <span className="text-sm text-gray-400">Complete</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" ref={galleryRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${galleryVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              Unique  <span className="text-cyan-400">Treasure Vault</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover our exclusive treasure vault and unlock premium rewards designed just for you
            </p>
          </div>
          
          <div className={`mb-8 transform transition-all duration-1000 delay-300 ${galleryVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="relative overflow-hidden rounded-2xl group cursor-pointer">
              <img 
                src="/home/vip.png"
                alt="free credit and bonus promotion"
                className="w-full h-84 object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Premium Player Lounge</h3>
                <p className="text-gray-200">Dedicated lounge for premium rewards and support</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => {
              const titles = [
                'Wheel of Fortune',
                'Daily Check-in',
                'Smash The Golden Egg'
              ];
              
              return (
                <div 
                  key={index} 
                  className={`relative overflow-hidden rounded-xl group cursor-pointer bg-gray-900 shadow-lg hover:shadow-cyan-400/20 transition-all duration-500 transform ${galleryVisible ? `translate-y-0 opacity-100 scale-100 transition-all duration-700 delay-${(index + 1) * 200}` : 'translate-y-20 opacity-0 scale-95'}`}
                >
                  <div className="relative h-58 overflow-hidden">
                    <img 
                      src={image}
                      alt={titles[index]}
                      className="max-w-s max-h-100 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      VIP {index + 1}
                    </div>
                    
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h4 className="text-white font-semibold mb-2">{titles[index]}</h4>
                      <p className="text-gray-200 text-sm">Premium Bonus Collection</p>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <h4 className="text-white font-semibold mb-1">{titles[index]}</h4>
                    <p className="text-gray-400 text-sm">Certified gaming experience with quality assurance</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transform transition-all duration-1000 delay-700 ${galleryVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            <div className="text-center bg-gray-900 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-cyan-400/10 rounded-full">
                <i className="ri-user-line text-white-400 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">100+</div>
              <div className="text-gray-400 text-sm">Player Online Daily</div>
            </div>
            
            <div className="text-center bg-gray-900 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-cyan-400/10 rounded-full">
                <i className="ri-star-line text-white-400 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">4.9</div>
              <div className="text-gray-400 text-sm">Average Rating</div>
            </div>
            
            <div className="text-center bg-gray-900 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-cyan-400/10 rounded-full">
                <i className="ri-verified-badge-line text-white-400 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">10+</div>
              <div className="text-gray-400 text-sm">Certified Licenses</div>
            </div>
            
            <div className="text-center bg-gray-900 rounded-lg p-6">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-3 bg-cyan-400/10 rounded-full">
                <i className="ri-customer-service-line text-white-400 text-2xl"></i>
              </div>
              <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-4xl font-bold mb-6 leading-tight">
            LET’S BEGIN <br />
            <span className="text-cyan-400">YOUR JOURNEY</span> WITH <br />
            <span className="text-cyan-400">BIGPAY77</span>
          </h2>

          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            One decision. One moment. Endless possibilities await.
          </p>

          <div className="flex justify-center">
            <Link
              href="https://bigpay77.net/register/SMSRegister"
              className="bg-yellow-400 text-gray-900 px-10 py-4 font-semibold hover:bg-gray-300 transition-colors whitespace-nowrap cursor-pointer rounded-md inline-block"
            >
              TAKE THE LEAP
            </Link>
          </div>

        </div>
      </section>
      <footer className="bg-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-24 h-8">
                  <img src="/home/BP_Logo.png" alt="BigPay" className="max-w-full max-h-full object-contain rounded-lg"/>
                </div>
                <span className="text-xl font-bold" style={{fontFamily: 'Playfair Display, serif'}}>BigPay77</span>
              </div>
              <p className="text-gray-400 text-justify">
                Your trusted online gaming platform in Australia, founded on long-standing industry expertise.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Payment Support</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-1 p-0 m-0">
                <li className="flex items-center justify-center w-16 h-8">
                  <img src="/deposit/amopay.png" alt="Amopay" className="max-w-full max-h-full object-contain rounded-lg"/>
                </li>
                <li className="flex items-center justify-center w-16 h-8">
                  <img src="/deposit/osko.png" alt="Osko" className="max-w-full max-h-full object-contain rounded-lg"/>
                </li>
                <li className="flex items-center justify-center w-16 h-8">
                  <img src="/deposit/payid.png" alt="PayID" className="max-w-full max-h-full object-contain rounded-lg"/>
                </li>
                <li className="flex items-center justify-center w-16 h-8">
                  <img src="/deposit/visa_master.png" alt="Visa/Master" className="max-w-full max-h-full object-contain rounded-lg"/>
                </li>
                <li className="flex items-center justify-center w-16 h-8">
                  <img src="/deposit/applepay.png" alt="Apple Pay" className="max-w-full max-h-full object-contain rounded-lg"/>
                </li>
                <li className="flex items-center justify-center w-16 h-8">
                  <img src="/deposit/speedpay.png" alt="Speedpay" className="max-w-full max-h-full object-contain rounded-lg"/>
                </li>                                
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Available Games</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-1 gap-y-1 p-0 m-0">
                <li className="flex items-center justify-center w-16 h-8 overflow-hidden">
                  <img src="/about/playy.png" alt="Playtech" className="w-full h-full object-cover rounded-lg"/>
                </li>
                <li className="flex items-center justify-center w-16 h-8 overflow-hidden">
                  <img src="/about/PUSSY888.png" alt="PUSSY888" className="w-full h-full object-cover rounded-lg"/>
                </li>
                <li className="flex items-center justify-center w-16 h-8 overflow-hidden">
                  <img src="/about/vpower.png" alt="vpower" className="max-w-full max-h-full object-contain rounded-lg"/>
                </li>
                <li className="flex items-center justify-center w-16 h-8 overflow-hidden">
                  <img src="/about/mega888.png" alt="Mega888" className="w-full h-full object-cover rounded-lg"/>
                </li>                
                <li className="flex items-center justify-center w-16 h-8 overflow-hidden">
                  <img src="/about/jili.png" alt="jili" className="max-w-full max-h-full object-contain rounded-lg"/>
                </li>  
                <li className="flex items-center justify-center w-16 h-8 overflow-hidden">
                  <img src="/about/918Kiss.png" alt="918Kiss" className="w-full h-full object-cover rounded-lg"/>
                </li>                                              
              </ul>
            </div>

          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 BigPay77. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
