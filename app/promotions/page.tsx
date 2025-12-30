
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Promotions() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [promotionsVisible, setPromotionsVisible] = useState(false);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [featuresVisible, setFeaturesVisible] = useState(false);
  const promotionsRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const mainPromotions = [
    {
      icon: 'ri-gift-line',
      title: 'Free Credit AUD77.77',
      description: 'Receive AUD77.77 in free credit by completing all required steps as guided by our customer service team.',
      features: ['T&Cs apply', 'Subject to availability', 'For eligible users only'],
      image: '/promotions/FreeCredit.jpg'
    },
    {
      icon: 'ri-gift-line',
      title: 'Daily Mission',
      description: 'Complete daily missions to earn points and redeem them for exciting rewards, bonuses, and free spins.',
      features: ['T&Cs apply', 'Subject to availability', 'For eligible users only'],
      image: '/promotions/DailyMission.png'
    },
    {
      icon: 'ri-gift-line',
      title: 'Free 365 Days Bonus',
      description: 'Claim your free bonus every day for 365 days — available to all members with one simple daily claim.',
      features: ['T&Cs apply', 'Subject to availability', 'For eligible users only'],
      image: '/promotions/Free365Bonus.png'
    },
    {
      icon: 'ri-gift-line',
      title: 'Daily Share Bonus',
      description: 'Share your referral link daily to earn free AUD rewards — more shares unlock higher bonuses and ongoing commission income.',
      features: ['T&Cs apply', 'Subject to availability', 'For eligible users only'],
      image: '/promotions/DailyShareBonus.jpg'
    },
    {
      icon: 'ri-gift-line',
      title: 'Daily Easy Step Free AUD100',
      description: 'Complete a simple daily referral step by sharing your unique referral link in at least five Facebook group chats to unlock up to AUD 100 in free credit.',
      features: ['T&Cs apply', 'Subject to availability', 'For eligible users only'],
      image: '/promotions/DailyEasyStep.jpg'
    },
    {
      icon: 'ri-gift-line',
      title: 'Every Deposit Random Bonus',
      description: 'Receive a random bonus with every successful deposit, giving you extra value and added excitement each time you top up.',
      features: ['T&Cs apply', 'Subject to availability', 'For eligible users only'],
      image: '/promotions/RandomBonus.jpg'
    }
  ];

  useEffect(() => {
    setHeroVisible(true);
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
          setDetailsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (detailsRef.current) {
      observer.observe(detailsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
            {/* 桌面端显示文字，移动端隐藏 */}
            <span
              className="hidden md:inline text-xl font-bold text-white"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              BigPay77
            </span>
          </div>

          {/* Desktop Buttons & Nav */}
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-8 text-white">
              <Link href="/" className="hover:text-cyan-400">Home</Link>
              <Link href="/promotions" className="hover:text-cyan-400">Promotions</Link>
              <Link href="/about" className="hover:text-cyan-400">About</Link>
              <Link href="/deposit" className="hover:text-cyan-400">Deposit</Link>
            </nav>

            {/* Register + New Button */}
            <div className="flex space-x-2">
              <Link
                href="https://bigpay77.net/register/SMSRegister"
                className="bg-cyan-400 text-gray-900 px-6 py-2 font-semibold rounded-md hover:bg-gray-400"
              >
                REGISTER
              </Link>
              <Link
                href="https://bigpay77.net/login" // 修改为你的登录链接
                className="bg-cyan-400 text-gray-900 px-6 py-2 font-semibold rounded-md hover:bg-gray-400"
              >
                LOGIN
              </Link>
            </div>
          </div>

          {/* Mobile Right */}
          <div className="flex items-center space-x-2 md:hidden">
            {/* Register + New Button */}
            <Link
              href="https://bigpay77.net/register/SMSRegister"
              className="bg-cyan-400 text-gray-900 px-4 py-1.5 text-sm font-semibold rounded-md hover:bg-gray-400"
            >
              REGISTER
            </Link>
            <Link
              href="https://bigpay77.net/login"
              className="bg-cyan-400 text-gray-900 px-4 py-1.5 text-sm font-semibold rounded-md hover:bg-gray-400"
            >
              LOGIN
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-8 h-8 flex items-center justify-center text-white"
            >
              <i className={`ri-${mobileOpen ? "close" : "menu"}-line text-2xl`} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileOpen && (
          <div
            className="absolute right-4 top-[72px] w-56 
                      bg-white/10 backdrop-blur-md text-white 
                      rounded-xl shadow-xl border border-white/20 
                      md:hidden z-40"
          >
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
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/promotions/promotion.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="text-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                YOUR <span className="text-cyan-400">TICKET TO FUN</span><br />
              </h1>
              <h1 className="text-5xl lg:text-7xl text-cyan-400 font-bold leading-tight">
                - FREE CREDIT & PROMOTIONS -
              </h1>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Unlock exclusive free credits, special rewards, and limited-time promotions designed to elevate your gaming experience from the very first play.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={promotionsRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${promotionsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              ATTRACTIVE <span className="text-cyan-400">PROMOTION</span> LIST
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Explore our full range of free credits, bonuses, and special offers—designed to give you more value, more rewards, and more fun.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainPromotions.map((promotion, index) => (
              <div 
                key={index} 
                className={`bg-gray-900 rounded-xl overflow-hidden shadow-xl hover:shadow-cyan-400/20 transition-all duration-500 transform hover:-translate-y-2 ${promotionsVisible ? `translate-y-0 opacity-100 scale-100 transition-all duration-700 delay-${index * 100}` : 'translate-y-20 opacity-0 scale-95'}`}
              >
                <div className="relative h-48 overflow-hidden">
                  <a
                    href="https://bigpay77.net/register/SMSRegister"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full group"
                  >
                    <img 
                      src={promotion.image}
                      alt={promotion.title}
                      className="w-full h-full object-cover object-center
                                transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

                    {/* Hover 文案（可选） */}
                    <div className="absolute inset-0 flex items-center justify-center
                                    opacity-0 group-hover:opacity-100 transition">
                      <span className="bg-cyan-400 text-gray-900 text-sm font-bold px-5 py-2 rounded-full">
                        REGISTER NOW
                      </span>
                    </div>
                  </a>

                  {/* Icon 保持在外层也没问题 */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-cyan-400 text-gray-900 rounded-full flex items-center justify-center pointer-events-none">
                    <i className={`${promotion.icon} text-xl`}></i>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-yellow-400">{promotion.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed text-justify">{promotion.description}</p>

                  <div className="space-y-2">
                    {promotion.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-4 h-4 flex items-center justify-center">
                          <i className="ri-checkbox-circle-line text-yellow-400 text-sm"></i>
                        </div>
                        <span className="text-gray-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section ref={detailsRef} className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${detailsVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h2 className="text-4xl font-bold">
                Why Choose <span className="text-cyan-400">BigPay77</span><br />
                for Your <span className="text-cyan-400">Fun Entrance</span>
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                With years of proven experience, BigPay77 has built a reputation for delivering a secure, seamless, and premium gaming experience.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                We focus on fair gameplay, fast transactions, and user-first service, ensuring players enjoy a smooth and reliable platform anytime, anywhere.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[ 
                  { icon: 'ri-verified-badge-line', text: '10+ Certified Licenses' },
                  { icon: 'ri-customer-service-line', text: '24/7 Emergency Support' },  
                  { icon: 'ri-gamepad-line', text: '5000+ Total Games' },
                  { icon: 'ri-team-line', text: '10+ Trusted Game Providers' },
                  { icon: 'ri-money-dollar-circle-line', text: 'Low Entry Requirements' },
                  { icon: 'ri-time-line', text: '10+ Years in Business' },
                  { icon: 'ri-user-line', text: '100+ Players Online Daily' },
                  { icon: 'ri-heart-line', text: '98% Customer Rating' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-cyan-400/10 rounded-full flex items-center justify-center shrink-0">
                      <i className={`${item.icon} text-yellow-400 text-lg`}></i>
                    </div>
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative transform transition-all duration-1000 delay-300 ${detailsVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <img 
                src="/promotions/Bigpay77.png"
                alt="BigPay77"
                className="w-full h-auto object-cover rounded-xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-green-400 text-gray-900 px-6 py-4 rounded-lg font-bold text-lg">
                24 Hours Operating
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${featuresVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              PLATFORM <span className="text-cyan-400">EXCELLENCE</span> STANDARDS
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Every service meets our rigorous quality standards and industry best practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[ 
              {
                icon: 'ri-flashlight-line',
                number: '<5',
                unit: 'Minutes',
                title: 'Average Response Time',
                description: 'Fast and efficient customer support when you need help.'
              },
              {
                icon: 'ri-shield-check-line',
                number: '100% ',
                unit: 'Secure',
                title: 'Continuous Account & Data Protection',
                description: 'Advanced encryption to safeguard your personal information.'
              },
              {
                icon: 'ri-team-line',
                number: '10+',
                unit: 'Providers',
                title: 'Trusted Game Partners',
                description: 'Working with established and reputable game providers.'
              },
              {
                icon: 'ri-star-line',
                number: '4.9',
                unit: 'Rating',
                title: 'Customer Satisfaction',
                description: 'Consistently high customer ratings'
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className={`text-center bg-gray-900 p-6 rounded-xl transform transition-all duration-700 delay-${index * 100} ${featuresVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-95'}`}
              >
                <div className="w-16 h-16 bg-cyan-400/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-white-400 text-2xl`}></i>
                </div>
                <div className="text-3xl font-bold text-yellow-400 mb-1">
                  {feature.number}
                  <span className="text-lg text-gray-400 ml-1">{feature.unit}</span>
                </div>
                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            READY TO <span className="text-cyan-400">STEP INTO THE</span><br />
            FUN OF <span className="text-cyan-400">BIGPAY77</span>?
          </h2>

          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Fairness is at the core of BigPay77—through transparent systems and consistent game mechanics, we create a trusted and balanced gaming environment for every player.
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

      {/* Footer */}
      <footer className="bg-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center justify-center w-24 h-8">
                  <img src="/home/BP_Logo.png" alt="BigPay77" className="max-w-full max-h-full object-contain rounded-lg"/>
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
