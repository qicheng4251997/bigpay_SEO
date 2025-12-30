
'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Deposit() {
  const [isVisible, setIsVisible] = useState(false);
  const [depositInfoVisible, setDepositInfoVisible] = useState(false);
  const [mapVisible, setMapVisible] = useState(false);
  const [hoursVisible, setHoursVisible] = useState(false);
  const depositInfoRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const hoursRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDepositInfoVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (depositInfoRef.current) {
      observer.observe(depositInfoRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMapVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHoursVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (hoursRef.current) {
      observer.observe(hoursRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
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
          <source src="/deposit/Deposit_Banner.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <div className="flex items-center justify-center text-center">
            <div className={`space-y-6 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                GET IN <span className="text-cyan-400">TOUCH</span><br />
                WITH OUR <span className="text-cyan-400">TEAM</span>
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                Ready to play or have questions about your account?<br />
                Our expert support team is here to assist with all your casino games, betting, and online gambling needs.
              </p>
              <div className="flex justify-center items-center space-x-8 pt-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 flex items-center justify-center bg-cyan-400/10 rounded-full">
                    <i className="ri-chat-smile-2-line text-white-500 text-xl"></i>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Live Chat</div>
                    <div className="text-xl text-green-400 font-semibold">Support Online 24/7</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section ref={depositInfoRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${depositInfoVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-cyan-400">SUPPORT</span> ALL KIND PAYMENT
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Multiple secure payment options to support fast and convenient transactions
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "ri-wallet-3-line",
                title: "AmoPay",
                image: "/deposit/amopay.png", 
                descriptions: [
                  "Global Accessibility",
                  "Diverse Payment Options",
                  "Crypto Payment Gatewa"
                ]
              },
              {
                icon: "ri-wallet-3-line",
                title: "Osko By BPAY",
                image: "/deposit/osko.png", 
                descriptions: [
                  "Near Real-time Payments",
                  "PayID compatibility",
                  "High Security"               ]
              },
              {
                icon: "ri-wallet-3-line",
                title: "PayID",
                image: "/deposit/payid.png", 
                descriptions: [
                  "Simple Addressin",
                  "Fast Payments",
                  "Enhanced Security"
                ]
              },
              {
                icon: "ri-wallet-3-line",
                title: "VISA / MASTER",
                image: "/deposit/visa_master.png", 
                descriptions: [
                  "Global Acceptance",
                  "Zero Liability Fraud Protection",
                  "Advanced Security Measures"
                ]
              },
              {
                icon: "ri-wallet-3-line",
                title: "ApplePay",
                image: "/deposit/applepay.png", 
                descriptions: [
                  "Advanced Security and Privacy",
                  "Integration with the Wallet app",
                  "Biometric Authentication"
                ]
              },              
              {
                icon: "ri-wallet-3-line",
                title: "SpeedPay",
                image: "/deposit/speedpay.png", 
                descriptions: [
                  "Diverse Payment Methods",
                  "Real-time Processings",
                  "Enhanced Security & Compliance"
                ]
              }                            
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-cyan-400/10 rounded-full">
                  <i className={`${item.icon} text-white-400 text-2xl`} />
                </div>

                {/* Image (Optional) */}
                  {item.image && (
                    <div className="mb-4 flex justify-center">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="h-20 object-contain"
                      />
                    </div>
                  )}                

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-center text-yellow-400 drop-shadow-lg">
                  {item.title}
                </h3>

                {/* Descriptions */}
                <ul className="space-y-2">
                  {item.descriptions.map((text, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-300">
                      <i className="ri-checkbox-circle-line text-yellow-400 text-sm mt-1" />
                      <span className="text-sm leading-relaxed">{text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Location & Map */}
      <section ref={mapRef} className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center mb-16 transform transition-all duration-1000 ${mapVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h2 className="text-4xl font-bold">
              FREQUENT ASK QUESTIONS <span className="text-cyan-400">(FAQ s)</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Find detailed answers to the most frequently asked questions about BigPay77
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "ri-question-line",
                title: "Is it safe to use BigPay77?",
                description: "Yes, BigPay77 ensures the security of your transactions. Our advanced encryption technology and robust security measures prevent unauthorized people from accessing your personal and financial information."
              },
              {
                icon: "ri-question-line",
                title: "Can I use BigPay77 for online casino transactions?",
                description: "Of course! It is, therefore, easy to make deposits and withdrawals securely utilizing BigPay77, which is fully compatible with most notable online casino platforms."
              },
              {
                icon: "ri-question-line",
                title: "How long does it take to process transactions with BigPay77?",
                description: "This facilitates BigPay77’s instant transaction processing, thereby allowing you to get what you are buying without any delays."
              },
              {
                icon: "ri-question-line",
                title: "How can I contact BigPay77 support?",
                description: "You can reach BigPay77 support 24/7 via live chat on the website or email. For the fastest response, we recommend using the live chat option."
              }
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-cyan-400/10 rounded-full">
                  <i className={`${item.icon} text-white-500 text-2xl`} />
                </div>                

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-center text-yellow-400 drop-shadow-lg">
                  {item.title}
                </h3>

                {/* Descriptions */}
                <p className="text-gray-300 text-sm leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Service Hours & Emergency */}
      <section ref={hoursRef} className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className={`relative transform transition-all duration-1000 ${hoursVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <img 
                src="/deposit/OperatingHour.png"
                alt="australia online casino & betting"
                className="w-full h-auto object-cover rounded-lg shadow-xl"
              />
              <div className="absolute top-4 right-4 bg-green-400 text-gray-900 px-4 py-2 rounded-full font-semibold">
                24/7 Emergency
              </div>
            </div>
            
            <div className={`space-y-6 transform transition-all duration-1000 delay-300 ${hoursVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <h2 className="text-4xl font-bold">
                OPERATING <span className="text-cyan-400">HOURS</span>
              </h2>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                We’re here whenever you need us. Regular updates for scheduled promotions, and 24/7 support ready for every player.
              </p>
              
              <div className="space-y-4">
                {/* 24/7 主服务 */}
                <div className="bg-gray-900 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">Operating Hours 24/7</span>
                    <span className="text-green-400">Always Online</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Our support team is available around the clock for all your needs
                  </div>
                </div>

                {/* 紧急服务区块 */}
                <div className="bg-yellow-400/10 border border-yellow-400/20 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-6 h-6 flex items-center justify-center">
                      <i className="ri-alarm-warning-line text-yellow-400 text-xl"></i>
                    </div>
                    <span className="font-semibold text-yellow-400">Emergency Service</span>
                    
                  </div>
                  <div className="text-sm text-gray-300">
                    24/7 Player Support & Assistance Available
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-900 ">
        <div className="max-w-6xl mx-auto px-6 ">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              WAY TO <span className="text-cyan-400">CONNECT</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose the most convenient way to reach out to us
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6 bg-cyan-400/10 rounded-full">
                <i className="ri-chat-smile-2-line text-white-500 text-xl"></i>
              </div>
              <h3 className="text-xl text-yellow-400 font-semibold mb-4">Website Live Chat</h3>
              <p className="text-gray-300 mb-6">
                Connect with our live support team anytime for instant assistance
              </p>
              <div className="space-y-2">
                <div className="text-green-400 font-semibold">Support Team Online 24/7</div>
                <div className="text-sm text-gray-400">Within 1 minute response</div>
              </div>
            </div>            
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-6">

          {/* Section Title */}
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              UNLEASH <span className="text-cyan-400">THE FUN</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              The ultimate destination for the latest and most exciting BigPay77 Casino Games
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              '/deposit/918kiss.jpg',
              '/deposit/jili.webp',
              '/deposit/bongo.jpg',
              '/deposit/vpower.jpg',
              '/deposit/pussy888.jpg',
              '/deposit/playtech.jpg'
            ].map((src, index) => (
              <Link
                key={index}
                href="https://bigpay77.net/register/SMSRegister"
                className="block"
              >
                <div
                  className="relative w-full [aspect-ratio:21/9] rounded-2xl overflow-hidden bg-gray-800
                            shadow-lg hover:shadow-cyan-400/20 transition-all duration-500
                            group cursor-pointer"
                >
                  {/* Image */}
                  <img
                    src={src}
                    alt={`Free Credit & Bonus Promotion ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover
                              transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition"></div>

                  {/* Hover badge */}
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition">
                    <span className="inline-block bg-yellow-400 text-gray-900 text-xs font-semibold px-4 py-1 rounded-full">
                      LIMITED OFFER
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            YOUR <span className="text-cyan-400">NEXT BIG WIN </span>STARTS WITH <br />
            <span className="text-cyan-400">BIGPAY77</span>
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
