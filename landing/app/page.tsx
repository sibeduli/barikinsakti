"use client";
import { useState } from "react";
import Image from "next/image";

const workCategories = [
  {
    title: "Slickline Mechanical Services",
    images: [
      "/slideshow/Barikin - Advance Slickline 20250704_page-0005.jpg", // Section title - Slickline Mechanical Services
      "/slideshow/Barikin - Advance Slickline 20250704_page-0006.jpg", // Slickline Unit specs
      "/slideshow/Barikin - Advance Slickline 20250704_page-0007.jpg", // Slickline Mechanical Services list
    ],
  },
  {
    title: "Downhole Tools",
    images: [
      "/slideshow/Barikin - Advance Slickline 20250704_page-0008.jpg", // Hole Finder and Pack Off Assembly
      "/slideshow/Barikin - Advance Slickline 20250704_page-0009.jpg", // Debris Recovery / Removal
      "/slideshow/Barikin - Advance Slickline 20250704_page-0010.jpg", // Well Swabbing Applications
      "/slideshow/Barikin - Advance Slickline 20250704_page-0011.jpg", // Dump Bailer
    ],
  },
  {
    title: "Perforation & Cutting",
    images: [
      "/slideshow/Barikin - Advance Slickline 20250704_page-0012.jpg", // Tubing Puncher
      "/slideshow/Barikin - Advance Slickline 20250704_page-0013.jpg", // Pipe Cutter
      "/slideshow/Barikin - Advance Slickline 20250704_page-0014.jpg", // Setting Tool – Non Explosive
      "/slideshow/Barikin - Advance Slickline 20250704_page-0015.jpg", // Stimulation Gun
      "/slideshow/Barikin - Advance Slickline 20250704_page-0016.jpg", // Type of Services (Sleeve/Tube)
      "/slideshow/Barikin - Advance Slickline 20250704_page-0017.jpg", // Dynamic Underbalanced Perforating
      "/slideshow/Barikin - Advance Slickline 20250704_page-0018.jpg", // Dynamic UB Perforating (detail)
    ],
  },
  {
    title: "Depth Control & Shut-in Tools",
    images: [
      "/slideshow/Barikin - Advance Slickline 20250704_page-0019.jpg", // Depth Control
      "/slideshow/Barikin - Advance Slickline 20250704_page-0020.jpg", // Slickline Trigger
      "/slideshow/Barikin - Advance Slickline 20250704_page-0021.jpg", // Downhole Shut in Tool
      "/slideshow/Barikin - Advance Slickline 20250704_page-0022.jpg", // Quick Shut-in-Tool placement
    ],
  },
  {
    title: "Memory Logging Suite",
    images: [
      "/slideshow/Barikin - Advance Slickline 20250704_page-0023.jpg", // Memory Logging Suite overview
      "/slideshow/Barikin - Advance Slickline 20250704_page-0024.jpg", // M-Survey BHPT
      "/slideshow/Barikin - Advance Slickline 20250704_page-0025.jpg", // M-Production Logging Tool
      "/slideshow/Barikin - Advance Slickline 20250704_page-0026.jpg", // MPLT Result
      "/slideshow/Barikin - Advance Slickline 20250704_page-0027.jpg", // MPLT Result (interpretation)
    ],
  },
  {
    title: "Downhole Video & Inspection",
    images: [
      "/slideshow/Barikin - Advance Slickline 20250704_page-0028.jpg", // M-Downhole Video
      "/slideshow/Barikin - Advance Slickline 20250704_page-0029.jpg", // Case History: Deviated High Water cut
      "/slideshow/Barikin - Advance Slickline 20250704_page-0030.jpg", // Downhole Video Example Snapshot
      "/slideshow/Barikin - Advance Slickline 20250704_page-0031.jpg", // Downhole Video (more examples)
      "/slideshow/Barikin - Advance Slickline 20250704_page-0032.jpg", // M-Casing Corrosion & Multi Finger Caliper
      "/slideshow/Barikin - Advance Slickline 20250704_page-0033.jpg", // M-Radial Cement Evaluation Tool (RBL)
      "/slideshow/Barikin - Advance Slickline 20250704_page-0034.jpg", // M-RBL Log Example
    ],
  },
  {
    title: "Acoustic Flow/Leak Analysis & Sand Detection",
    images: [
      "/slideshow/Barikin - Advance Slickline 20250704_page-0035.jpg", // M-Acoustic Flow/Leak Analysis
      "/slideshow/Barikin - Advance Slickline 20250704_page-0036.jpg", // M-Acoustic Flow/Leak Analysis (tubing leaks)
      "/slideshow/Barikin - Advance Slickline 20250704_page-0037.jpg", // M-Acoustic Flow/Leak Analysis (channeling)
      "/slideshow/Barikin - Advance Slickline 20250704_page-0038.jpg", // M-Sand Detection Tool (SDT)
      "/slideshow/Barikin - Advance Slickline 20250704_page-0039.jpg", // Case#1: Sand production in Gas Well
      "/slideshow/Barikin - Advance Slickline 20250704_page-0040.jpg", // Case#1: Sand production results
    ],
  },
  {
    title: "WellView & Diagnostics",
    images: [
      "/slideshow/Barikin - Advance Slickline 20250704_page-0041.jpg", // WellView intro
      "/slideshow/Barikin - Advance Slickline 20250704_page-0042.jpg", // Natural decline or Problems?
      "/slideshow/Barikin - Advance Slickline 20250704_page-0043.jpg", // Wellbore Damage
      "/slideshow/Barikin - Advance Slickline 20250704_page-0044.jpg", // Well Integrity
      "/slideshow/Barikin - Advance Slickline 20250704_page-0045.jpg", // Well Management challenges
      "/slideshow/Barikin - Advance Slickline 20250704_page-0046.jpg", // M-Production Logging Tool (detail)
      "/slideshow/Barikin - Advance Slickline 20250704_page-0047.jpg", // MPLT - LIMITATION
      "/slideshow/Barikin - Advance Slickline 20250704_page-0048.jpg", // M-Radial Bond Tool
      "/slideshow/Barikin - Advance Slickline 20250704_page-0049.jpg", // M-Radial Bond Tool - LIMITATION
      "/slideshow/Barikin - Advance Slickline 20250704_page-0050.jpg", // CBL and Hydraulic Seal
      "/slideshow/Barikin - Advance Slickline 20250704_page-0051.jpg", // CBL and Hydraulic Seal (detail)
      "/slideshow/Barikin - Advance Slickline 20250704_page-0052.jpg", // M-Acoustic Flow/Leak Analysis (tool spec)
      "/slideshow/Barikin - Advance Slickline 20250704_page-0053.jpg", // M-Acoustic Flow/Leak Analysis (frequency)
      "/slideshow/Barikin - Advance Slickline 20250704_page-0054.jpg", // CASE#1 – Oil Producer
      "/slideshow/Barikin - Advance Slickline 20250704_page-0055.jpg", // CASE#2 - Water injector
    ],
  },
  {
    title: "Supporting Equipment",
    images: [
      "/slideshow/COMPRO BARIKIN SAKTI 2024_page-0013.jpg", // Other Supporting Equipment & Services
    ],
  },
];

export default function Home() {
  const [currentCategory, setCurrentCategory] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isImageLoading, setIsImageLoading] = useState(true);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isLightboxLoading, setIsLightboxLoading] = useState(false);

  const currentImages = workCategories[currentCategory].images;
  const nextSlide = () => {
    setIsImageLoading(true);
    setIsLightboxLoading(true);
    setCurrentSlide((prev) => (prev + 1) % currentImages.length);
  };
  const prevSlide = () => {
    setIsImageLoading(true);
    setIsLightboxLoading(true);
    setCurrentSlide((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };
  
  const selectCategory = (index: number) => {
    setCurrentCategory(index);
    setCurrentSlide(0);
    setIsImageLoading(true);
  };

  const handleSlideChange = (newSlide: number) => {
    setCurrentSlide(newSlide);
    setIsImageLoading(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0f1a]/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/logo.jpg" alt="PT. Barikin Sakti Logo" width={36} height={36} className="rounded w-auto h-auto" />
            <span className="text-xl font-bold text-white tracking-tight">
              PT. BARIKIN <span className="text-[#d4a574]">SAKTI</span>
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors">About</a>
            <a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a>
            <a href="#equipment" className="text-gray-400 hover:text-white transition-colors">Equipment</a>
            <a href="#clients" className="text-gray-400 hover:text-white transition-colors">Clients</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
          </nav>
          <a href="#contact" className="px-3 py-2 md:px-5 md:py-2.5 bg-gradient-to-r from-[#d4a574] to-[#b8956a] text-[#0a0f1a] text-xs md:text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity">
            Get in Touch
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0f1a]" />
        <div 
          className="absolute top-0 bottom-0 right-0 w-2/3 opacity-[0.32] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/drill.jpg')" }}
        />
        <div className="absolute top-0 bottom-0 right-0 w-2/3 bg-gradient-to-r from-[#0a0f1a] to-transparent" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a574]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#1a5276]/30 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 mb-6">
              <span className="w-2 h-2 bg-[#d4a574] rounded-full animate-pulse" />
              Since 1995 • ISO 9001-2015 Certified
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Advance Slickline &<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a574] to-[#e8c4a0]">
                Well Production Services
              </span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Indonesian oilfield services company providing practical and cost-effective solutions for well evaluation and production enhancement across Indonesia.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="px-8 py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956a] text-[#0a0f1a] font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Explore Services
              </a>
              <a href="#work" className="px-8 py-4 bg-white/5 text-white font-semibold rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                View Documentation
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "29+", label: "Years Experience" },
              { value: "20+", label: "Years at Total EP" },
              { value: "12+", label: "Major Clients" },
              { value: "100%", label: "Indonesia Coverage" }
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-3xl font-bold text-[#d4a574] mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 px-6 bg-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Trusted Partner in<br />
                <span className="text-[#d4a574]">Oil & Gas Services</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Founded on January 23, 1995, PT. Barikin Sakti is an Indonesian oilfield services company focused on performing well production services. We provide the most practical and cost-effective tools, equipment, and materials for well evaluation and production enhancement.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Our operations currently cover all of Indonesia, with strong presence in East Java and South Sumatra. We utilize truck-mounted containerized slickline units with crane/mast capability up to 40 feet lifting length.
              </p>
              <div className="flex items-center gap-4 text-sm">
                <span className="text-gray-500">President Director:</span>
                <span className="text-white font-medium">Georgi Bellini B K</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "ISO 9001-2015", desc: "QMS Certified by TUV Rheinland" },
                { title: "CSMS Certified", desc: "High Risk by Pertamina EP" },
                { title: "Full Coverage", desc: "Onshore & Offshore Operations" },
                { title: "Compliance", desc: "CIVD, SKUP, NIB up to date" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-xl">
                  <div className="text-white font-semibold mb-2">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Comprehensive slickline mechanical services and memory logging solutions for the oil and gas industry</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              {
                title: "Slickline Mechanical",
                items: ["Flow Control Devices Setting & Retrieval", "SSSV / GLV Installation & Retrieval", "Zone Changing", "Cement / Chemical Dump Bailing", "Sand Bailing & Fishing Operations", "Well Swabbing", "Rigless P&A Support"]
              },
              {
                title: "Memory & Logging",
                items: ["Memory Reservoir Analysis", "Memory Production Logging (MPLT)", "Well Integrity Logging", "Downhole Video Inspection", "EMR Pressure & Temperature Recording", "Leak Detection"]
              },
              {
                title: "Testing Services",
                items: ["BOP Testing", "Hydrostatic Testing", "High Pressure Testing (10,000 psi)", "Stimulation Gun Services", "Bottom Hole Sampling", "Fluid & Gas Analysis"]
              }
            ].map((service, i) => (
              <div key={i} className="p-8 bg-gradient-to-br from-[#142238] to-[#0d1420] border border-white/10 rounded-2xl">
                <h3 className="text-xl font-semibold text-[#d4a574] mb-6">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="w-1.5 h-1.5 mt-2 bg-[#d4a574] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Detailed Documentation */}
          <div id="work" className="pt-8 border-t border-white/10">
            <div className="flex items-center gap-4 mb-10">
              <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
              <h3 className="text-xl font-semibold text-white">Detailed Documentation</h3>
              <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
            </div>
            <div className="grid md:grid-cols-[220px_1fr] gap-8">
              {/* Category Navigation */}
              <div className="space-y-2">
                {workCategories.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => selectCategory(i)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm ${
                      i === currentCategory
                        ? "bg-[#d4a574] text-[#0a0f1a] font-semibold"
                        : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>
              {/* Slideshow */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black aspect-[16/10]">
                  {isImageLoading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10">
                      <div className="w-8 h-8 border-2 border-[#d4a574] border-t-transparent rounded-full animate-spin" />
                    </div>
                  )}
                  <Image
                    key={`${currentCategory}-${currentSlide}`}
                    src={currentImages[currentSlide]}
                    alt={`${workCategories[currentCategory].title} slide ${currentSlide + 1}`}
                    fill
                    className="object-contain"
                    priority
                    sizes="(max-width: 768px) 100vw, 70vw"
                    onLoad={() => setIsImageLoading(false)}
                  />
                  {/* Enlarge button */}
                  <button
                    onClick={() => { setIsLightboxOpen(true); setIsLightboxLoading(true); }}
                    className="absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-[#0a0f1a]/80 border border-white/10 rounded-lg flex items-center justify-center text-white hover:bg-[#0a0f1a] active:bg-[#0a0f1a] transition-colors z-10"
                    title="Enlarge image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" />
                      <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                  </button>
                  {/* Navigation arrows inside image container */}
                  {currentImages.length > 1 && (
                    <>
                      <button
                        onClick={prevSlide}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-[#0a0f1a]/80 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#0a0f1a] active:bg-[#0a0f1a] transition-colors z-10"
                      >
                        ←
                      </button>
                      <button
                        onClick={nextSlide}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12 bg-[#0a0f1a]/80 border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-[#0a0f1a] active:bg-[#0a0f1a] transition-colors z-10"
                      >
                        →
                      </button>
                    </>
                  )}
                </div>
                {currentImages.length > 1 && (
                  <div className="flex justify-center gap-2 mt-4 md:mt-6">
                    {currentImages.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => handleSlideChange(i)}
                        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                          i === currentSlide ? "bg-[#d4a574]" : "bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section id="equipment" className="py-24 px-6 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Our Equipment</h2>
            <p className="text-gray-500">State-of-the-art tools and machinery for reliable operations</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Slickline Unit", specs: ["Double & Single Drum Hydraulic Winch", "Perkins 6 Cylinder Engine (125 HP)", "25,000 ft wire capacity", "Zone 2 BSEN Standard"] },
              { title: "Triplex Pump Unit", specs: ["RELIABLE RD300 (US Made)", "120 BHP Perkins Engine", "Up to 10,000 psi outlet", "BV Certificate Zone-02"] },
              { title: "PPS28 Memory Gauge", specs: ["Quartz Pressure Transducer", "Made in Canada", "Up to 25K psi range", "USB/RS232 Communication"] },
              { title: "M-Production Logging", specs: ["Modular Design", "Pressure, Temp, Spinner sensors", "Caliper & Fluid Density", "Up to 600°F rating"] }
            ].map((eq, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <h3 className="text-white font-semibold mb-4">{eq.title}</h3>
                <ul className="space-y-2">
                  {eq.specs.map((spec, j) => (
                    <li key={j} className="text-sm text-gray-500 flex items-start gap-2">
                      <span className="w-1 h-1 mt-2 bg-[#d4a574] rounded-full flex-shrink-0" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section id="clients" className="py-24 px-6 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Trusted By Industry Leaders</h2>
            <p className="text-gray-500">Serving major oil and gas companies across Indonesia</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Total EP Indonesia", "Pertamina EP", "Pertamina Hulu Energi", "ConocoPhillips",
              "Chevron Pacific", "Kangean Energy", "Star Energy Geothermal", "TIS Petroleum E&P",
              "Jindi South Jambi", "Sele Raya Belida", "EMP Malacca Strait", "Indosino"
            ].map((client, i) => (
              <div key={i} className="p-5 bg-white/5 border border-white/10 rounded-xl text-center">
                <span className="text-gray-400 text-sm">{client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-gradient-to-br from-[#142238] to-[#0d1420]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <div className="text-[#d4a574] text-sm font-medium mb-2">Main Office</div>
                  <p className="text-gray-400">Jl. Raya Kelapa Dua Wetan Kav. 18 No. 1F<br />Ciracas, Jakarta Timur 13730</p>
                </div>
                <div>
                  <div className="text-[#d4a574] text-sm font-medium mb-2">Workshop</div>
                  <p className="text-gray-400">Jl. Kayumanis Bondol No.16, RT.01/RW.03<br />Kota Bogor, Jawa Barat 16169</p>
                </div>
                <div>
                  <div className="text-[#d4a574] text-sm font-medium mb-2">Contact</div>
                  <p className="text-gray-400">Phone: +62 (21) 2962 7016</p>
                  <p className="text-gray-400">Direct: George Bellini +62 811-192-071</p>
                  <p className="text-gray-400">Email: admin@barikinsakti.com</p>
                </div>
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Send a Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574]" />
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574]" />
                <textarea rows={4} placeholder="Your Message" className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#d4a574] resize-none" />
                <button type="submit" className="w-full py-4 bg-gradient-to-r from-[#d4a574] to-[#b8956a] text-[#0a0f1a] font-semibold rounded-lg hover:opacity-90 transition-opacity">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black touch-none flex flex-col"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 w-10 h-10 bg-black border border-white/30 rounded-full flex items-center justify-center text-white active:bg-white/20 transition-colors z-[110]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {/* Image area */}
          <div className="flex-1 relative min-h-0" onClick={(e) => e.stopPropagation()}>
            {isLightboxLoading && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-10 h-10 border-2 border-[#d4a574] border-t-transparent rounded-full animate-spin" />
              </div>
            )}
            <Image
              src={currentImages[currentSlide]}
              alt={`${workCategories[currentCategory].title} slide ${currentSlide + 1}`}
              fill
              className="object-contain p-2"
              sizes="100vw"
              priority
              onLoad={() => setIsLightboxLoading(false)}
            />
          </div>
          {/* Bottom navigation - always visible */}
          {currentImages.length > 1 && (
            <div className="flex items-center justify-center gap-6 py-4 bg-black z-[110]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="w-12 h-12 bg-white/10 border border-white/30 rounded-full flex items-center justify-center text-white text-xl active:bg-white/30 transition-colors"
              >
                ←
              </button>
              <div className="px-4 py-2 bg-white/10 border border-white/30 rounded-full text-white text-sm min-w-[60px] text-center">
                {currentSlide + 1} / {currentImages.length}
              </div>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="w-12 h-12 bg-white/10 border border-white/30 rounded-full flex items-center justify-center text-white text-xl active:bg-white/30 transition-colors"
              >
                →
              </button>
            </div>
          )}
          {/* Spacer for single image */}
          {currentImages.length <= 1 && (
            <div className="py-4 bg-black" />
          )}
        </div>
      )}

      {/* Footer */}
      <footer className="py-8 px-6 bg-[#070a10] border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xl font-bold text-white">
            PT. BARIKIN <span className="text-[#d4a574]">SAKTI</span>
          </div>
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} PT. Barikin Sakti. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}