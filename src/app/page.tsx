'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full px-5 z-50 transition-transform duration-500 ease-in-out translate-y-0">
        <div className="bg-[linear-gradient(45deg,rgba(18,140,126,0.5),rgba(52,94,235,0.5))] text-white container mx-auto flex items-center justify-between backdrop-blur-lg px-4 sm:px-6 py-3 rounded-full shadow mx-4 mt-4">
          <div>
            <Link href="/" className="font-bold text-xl tracking-tighter">MARKETOPS</Link>
          </div>
          <nav className="hidden lg:flex items-center space-x-8 font-medium">
            <Link href="/promote" className="hover:text-gray-200 transition-colors">Services</Link>
            <Link href="/about-us" className="hover:text-gray-200 transition-colors">About Us</Link>
            <Link href="/contact-us" className="hover:text-gray-200 transition-colors pe-5">Contact Us</Link>
          </nav>
          <div className="hidden lg:flex items-center gap-2">
            <a href="#" className="bg-gradient-to-t from-[#0C3BFB] to-[#128C7E] px-5 py-2 rounded-full font-semibold shadow hover:scale-105 transition-transform">WhatsApp</a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-20 h-[85vh] overflow-hidden px-6 bg-[#0f172a]">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,198,255,0.3),transparent_70%)]"></div>
        </div>
        <div className="relative z-10 max-w-4xl fade-up">
          <h1 className="capitalize text-4xl md:text-7xl leading-tight text-white font-bold mt-2">
            Built for the brands<br/>that <span className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">don’t settle</span>
          </h1>
          <p className="text-lg text-gray-300 my-6">Trusted by brands that demand control, consistency and performance</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-3 text-white text-lg font-medium shadow-[0_0_20px_rgba(0,198,255,0.4)] transition-transform hover:scale-105" href="#calend">Talk to Our Team</a>
            <a className="rounded-full bg-white px-8 py-3 text-blue-500 text-lg font-medium shadow-md transition-transform hover:scale-105" href="#video">See How we Work</a>
          </div>
        </div>
      </section>

      {/* Stats Marquee Section */}
      <section className="bg-white py-20 px-4 border-b border-gray-100">
        <div className="container mx-auto grid md:grid-cols-3 gap-6 items-center">
          <div className="slide-in-left">
            <h3 className="flex items-center text-3xl md:text-5xl font-extrabold tracking-tight mb-2">
              <span className="bg-gradient-to-r from-[#141389] to-[#03c1fc] bg-clip-text text-transparent">$100M+</span>
            </h3>
            <p className="text-lg text-gray-600 font-medium">Ad spends managed</p>
          </div>
          <div className="md:col-span-2 overflow-hidden relative rounded-2xl slide-in-right">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent z-20"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent z-20"></div>
            <div className="flex animate-scroll gap-6">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className="flex items-center justify-center h-[120px] w-[200px] bg-gray-50 border border-gray-100 rounded-2xl flex-shrink-0 font-bold text-gray-400 text-2xl tracking-widest uppercase">
                  BRAND {i}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature 1 */}
      <section className="bg-white py-20 px-4 md:px-0 xl:px-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 slide-in-left">
            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 w-fit py-2 px-4 rounded-full mb-6">
              <span className="font-semibold bg-gradient-to-r from-[#141389] to-[#03c1fc] bg-clip-text text-transparent">Ad Infrastructure Leader</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">Your top competitors are already scaling. It's your turn</h2>
            <ul className="feature-list bg-gray-50 rounded-3xl p-8 font-medium text-gray-700 space-y-4 text-lg">
              <li>High-tier ad accounts with higher trust</li>
              <li>Official partners across all ad platforms</li>
              <li>Go live in under 12 hours</li>
              <li>Get 24/7 dedicated support</li>
              <li>Compliance-first setups keep things smooth</li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a className="rounded-full bg-gradient-to-r from-[#0072ff] to-[#00c6ff] px-8 py-3 text-white font-medium shadow-lg hover:-translate-y-1 transition-transform" href="#calend">Book Free Consultation</a>
            </div>
          </div>
          <div className="order-1 md:order-2 slide-in-right h-[500px]">
            {/* Nano Banana Pro Visual */}
            <div className="nano-visual">
              <div className="nano-visual-content">
                <div className="nano-glow-box">📈</div>
                <h3 className="text-white text-2xl font-bold tracking-wider">EXPONENTIAL SCALE</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 */}
      <section className="bg-gray-50 py-20 px-4 md:px-0 xl:px-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="order-1 slide-in-left h-[500px]">
            {/* Nano Banana Pro Visual */}
            <div className="nano-visual" style={{background: '#0a0a0a'}}>
              <div className="nano-visual-content">
                <div className="nano-glow-box" style={{borderColor: '#8b5cf6', color: '#8b5cf6', boxShadow: '0 0 30px rgba(139, 92, 246, 0.3)', animationDelay: '1s'}}>🎯</div>
                <h3 className="text-white text-2xl font-bold tracking-wider">PRECISION TARGETING</h3>
              </div>
            </div>
          </div>
          <div className="order-2 slide-in-right">
            <div className="flex items-center gap-2 bg-blue-50 border border-blue-200 w-fit py-2 px-4 rounded-full mb-6">
              <span className="font-semibold bg-gradient-to-r from-[#141389] to-[#03c1fc] bg-clip-text text-transparent">Growth Partners</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gray-900 leading-tight">Full-funnel media buying that leads the algorithm</h2>
            <ul className="feature-list bg-white rounded-3xl p-8 shadow-sm font-medium text-gray-700 space-y-4 text-lg">
              <li>Audience mapping based on real intent</li>
              <li>Creative loops that outpace the algorithm</li>
              <li>Funnel-smart budgeting that shifts with performance</li>
              <li>Real-time actions that scale winners and cut waste fast</li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a className="rounded-full bg-gradient-to-r from-[#0072ff] to-[#00c6ff] px-8 py-3 text-white font-medium shadow-lg hover:-translate-y-1 transition-transform" href="#calend">Book Free Consultation</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="pt-20 pb-10 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-center text-3xl lg:text-4xl font-bold mb-16 bg-gradient-to-r from-[#141389] to-[#03c1fc] bg-clip-text text-transparent">When The Funnel, Creatives, and Accounts Work Together</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center">
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-b from-[#45DDF1] to-[#4128FF] bg-clip-text text-transparent">24x7</h3>
              <p className="text-gray-600 font-medium">Account activation on agency ad accounts</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center">
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-b from-[#45DDF1] to-[#4128FF] bg-clip-text text-transparent">37%</h3>
              <p className="text-gray-600 font-medium">Drop in CAC after full-funnel restructuring</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center">
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-b from-[#45DDF1] to-[#4128FF] bg-clip-text text-transparent">4.6s</h3>
              <p className="text-gray-600 font-medium">Avg hook engagement on top creatives</p>
            </div>
            <div className="rounded-2xl border border-gray-100 p-8 bg-white shadow-lg hover:-translate-y-2 transition-transform duration-300 text-center">
              <h3 className="text-4xl font-bold mb-2 bg-gradient-to-b from-[#45DDF1] to-[#4128FF] bg-clip-text text-transparent">68%</h3>
              <p className="text-gray-600 font-medium">Revenue recovered through retention flows</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trustpilot Grid Placeholder */}
      <section className="py-20 bg-gray-50">
         <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-10 text-gray-900">What our clients say after Scaling</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm text-left">
                  <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                  <h3 className="font-bold text-xl mb-3">Flawless Experience</h3>
                  <p className="text-gray-600 italic">"Ad accounts getting banned used to be a constant headache for me, but Marketops changed that. Scaling ad spend has never been smoother..."</p>
                  <p className="mt-6 font-semibold">Verified Founder {i}</p>
                </div>
              ))}
            </div>
         </div>
      </section>
    </main>
  )
}
