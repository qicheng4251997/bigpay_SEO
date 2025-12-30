
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function About() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [storyVisible, setStoryVisible] = useState(false);
  const [teamVisible, setTeamVisible] = useState(false);
  const [valuesVisible, setValuesVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setHeroVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStoryVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTeamVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (teamRef.current) {
      observer.observe(teamRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setValuesVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (valuesRef.current) {
      observer.observe(valuesRef.current);
    }

    return () => observer.disconnect();
  }, []);

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

  const teamMembers = [
    {
      name: 'Playtech Casino',
      role: 'A globally recognized industry authority, providing the core infrastructure, technology, and content that underpin leading online casino and betting operations worldwide.',
      experience: 'Founded in 1999',
      image: '/about/Playtech.png'
    },
    {
      name: 'PUSSY888 App',
      role: 'A dominant force in the Asian online slot industry, shaping market trends with its large player base, strong brand influence, and consistently high engagement.',
      experience: 'Founded in 2020',
      image: '/about/PUSSY888.png'
    },
    {
      name: '918Kiss Download',
      role: 'A cornerstone brand in Asia’s online slot industry, shaping the market and setting long-standing standards for mobile gaming.',
      experience: 'Founded in 2018',
      image: '/about/918Kiss.png'
    },
    {
      name: 'Mega888 App',
      role: 'A cornerstone of the Asian online slot industry, recognized for its stability, quality, and long-term presence.',
      experience: 'Founded in 2018',
      image: '/about/Mega888_Partner.png'
    }
  ];

  const values = [
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Assurance',
      description: 'Every game and transaction is held to the highest standards of casino fairness and security.'
    },
    {
      icon: 'ri-customer-service-line',
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority with personalized service and transparent communication.'
    },
    {
      icon: 'ri-time-line',
      title: 'Reliability',
      description: 'Stable performance and consistent uptime to ensure smooth gameplay anytime.'
    },
    {
      icon: 'ri-vip-crown-line',
      title: 'Premium Game Quality',
      description: 'Top-tier game providers delivering immersive and reliable gameplay.'
    }
  ];

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
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/about/BigPay_Banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="text-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${heroVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                ABOUT <span className="text-cyan-400">BIGPAY77</span><br />
                <span className="text-cyan-400">YOUR TRUSTED</span> PARTNER
              </h1>
              <h2 className="text-3xl lg:text-xl font-bold leading-tight">
                BigPay77 Aus E-Wallet | BigPay77 Ewallet Casino
              </h2>

              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                With years of proven experience, we deliver a premium gaming platform built on quality, integrity, and unwavering player satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section ref={storyRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${storyVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h2 className="text-4xl font-bold">
                Our <span className="text-cyan-400">Story</span><br />
                <span className="text-cyan-400">Since 2010</span>
              </h2>
              <h2 className="text-4xl font-bold">
                Australia Live Casino 
              </h2>

              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                BigPay77 began as a small, dedicated tech team in Australia with a clear mission: to build a secure, transparent, and player-focused online casino and gambling platform for Aussie players. What started with a passion for technology, fair play, and trustworthy betting has evolved into a full-scale gaming ecosystem, offering a wide range of casino games, betting options, and online gambling experiences trusted across Australia and the Asia-Pacific region.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                Today, we continue to uphold the same values that shaped our foundation — integrity, game fairness, quality, and a commitment to delivering a seamless, reliable casino and betting experience for every player. From real-time casino gaming to fast, secure transactions via the BigPay77 Aus E-Wallet, we ensure that every player enjoys a safe, enjoyable, and trustworthy online gambling environment in Sydney, Melbourne, Brisbane, and beyond.
              </p>
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">2010</div>
                  <div className="text-gray-300">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">10000+</div>
                  <div className="text-gray-300">Registered Users</div>
                </div>
              </div>
            </div>
            <div className={`relative transform transition-all duration-1000 delay-300 ${storyVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <img 
                src="/promotions/Bigpay77.png"
                alt="BigPay77"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={teamRef} className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${teamVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              Meet Our <span className="text-cyan-400">Partners</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Our certified partners bring years of expertise, helping us deliver a secure, trusted online casino and gambling experience with smooth gameplay and fast transactions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className={`bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-400/20 transition-all duration-500 transform hover:-translate-y-2 ${teamVisible ? `translate-y-0 opacity-100 scale-100 transition-all duration-700 delay-${index * 150}` : 'translate-y-20 opacity-0 scale-95'}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-4 right-4 bg-cyan-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {member.experience}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-yellow-400 text-xl font-extrabold mb-2">{member.name}</h3>
                  <p className="text-l font-semibold mb-2 ">{member.role}</p>
                  <p className="text-gray-400 text-sm">Leading the way in trusted, premium gaming experiences</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${valuesVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              Our <span className="text-cyan-400">Core Values</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              The principles that guide every service we provide and every interaction we have
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`bg-gray-900 p-8 rounded-2xl text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 ${valuesVisible ? `translate-y-0 opacity-100 scale-100 transition-all duration-700 delay-${index * 150}` : 'translate-y-20 opacity-0 scale-95'}`}
              >
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-cyan-400/10 rounded-full">
                  <i className={`${value.icon} text-white-500 text-3xl`}></i>
                </div>
                <h3 className="text-xl text-yellow-400 font-semibold mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="/about/BigPay_Experience.png"
                alt="australia online casino & betting"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-cyan-400 text-gray-900 px-6 py-4 rounded-lg font-bold text-xl">
                10+ Years Strong
              </div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">
                Experience You Can <span className="text-cyan-400">Trust</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed text-justify">
                Backed by strict security protocols and industry-standard compliance, BigPay77 delivers a fully transparent online casino and betting experience for Aussie players, ensuring every game and transaction is safe, fair, and professionally managed across Australia.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Certified Security Systems</h4>
                    <p className="text-gray-300 text-sm">Your data and transactions are protected with industry-standard encryption and verified security protocols.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instant, Reliable Transactions</h4>
                    <p className="text-gray-300 text-sm">Enjoy fast deposits, smooth withdrawals, and a stable wallet system — available 24/7.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 flex items-center justify-center mt-1">
                    <i className="ri-checkbox-circle-line text-yellow-400 text-xl"></i>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Premium Game Providers</h4>
                    <p className="text-gray-300 text-sm">We partner with licensed, industry-leading developers to ensure fair, high-quality gameplay.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[ 
              { number: '5,000+', label: 'Games in Total', icon: 'ri-gamepad-line' },
              { number: '10+', label: 'Years in Business', icon: 'ri-time-line' },
              { number: '10+', label: 'Certified Licenses', icon: 'ri-verified-badge-line' },
              { number: '98%', label: 'Customer Rating', icon: 'ri-heart-line' },
            ].map((stat, index) => (
              <div key={index} className={`transform transition-all duration-700 delay-${index * 200} ${statsVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'}`}>
                <div className="bg-gray-900 rounded-2xl p-8 hover:bg-gray-700 transition-colors">
                  <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-cyan-400/10 rounded-full">
                    <i className={`${stat.icon} text-white-400 text-2xl`}></i>
                  </div>
                  <div className="text-3xl font-bold text-yellow-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            READY TO <span className="text-cyan-400">EXPERIENCE THE</span><br />
            SURGE OF <span className="text-cyan-400">BIGPAY77</span>?
          </h2>
          
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of players who trust BigPay77 for a secure, seamless, and premium gaming experience. Start your journey today.
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
                  <img src="/home/BP_Logo.png" alt="Car" className="max-w-full max-h-full object-contain rounded-lg"/>
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
