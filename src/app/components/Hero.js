import React from 'react';
import Image from 'next/image';


export default function Hero() {
  return (
    <header className="relative py-16 mt-14" role="banner">
      {/* Background Image with LCP priority */}
      <div className="absolute inset-0 ">
        <Image
            src="/fabric.avif" // ✅ Ensure it's in /public/
            alt="Woman wearing premium georgette fabric"
  
            priority
           
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1268px) 80vw, 1268px"
            placeholder="empty"
            fetchPriority='high'
            loading='eager'
            />
            <div className="absolute inset-0 bg-black opacity-30" aria-hidden="true"></div>
            </div>

            <div className="relative max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 px-6">
            {/* Main Hero Content */}
        <div className="bg-secondary/80 p-8 rounded-lg" aria-labelledby="hero-title" aria-describedby="hero-sub">
          <h1 id="hero-title" className="text-xl san md:text-2xl font-[400] san text-white mb-6">
            Georgette Fabric Manufacturers
          </h1>
          <p id="hero-sub" className="text-white pop  text-[14px]">
            High-quality fabrics crafted in Surat, perfect for designers, exporters, and resellers.
          </p>
        </div>
      </div>
    </header>
  );
}
