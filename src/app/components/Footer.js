import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary px-4 py-10 text-sm font-medium">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        
        {/* Links */}
        <nav aria-label="Footer Navigation">
          <h3 className="text-xl font-[400] mb-4">Links</h3>
          <ul className="space-y-2 text-[14px]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/gallery">Our Gallery</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/sitemap">Sitemap</Link></li>
            <li><Link href="/market-area">Market Area</Link></li>
          </ul>
        </nav>

        {/* Products */}
        <nav aria-label="Product Navigation">
          <h3 className="text-xl font-[400] mb-4">Our Products</h3>
          <ul className="space-y-2 text-[14px]">
            <li><Link href="/saree">Saree</Link></li>
            <li><Link href="/embroidered-sarees">Embroidered Sarees</Link></li>
            <li><Link href="/designer-sarees">Designer Sarees</Link></li>
            <li><Link href="/fancy-sarees">Fancy Sarees</Link></li>
            <li><Link href="/bollywood-sarees">Bollywood Theme Saree</Link></li>
            <li><Link href="/pure-fabric">Pure Fabric</Link></li>
            <li><Link href="/suits">Suits</Link></li>
          </ul>
        </nav>

        {/* Newsletter (static, no JS) */}
        <div className="lg:col-span-1">
          <h3 className="text-xl mb-4">Join Our Newsletter</h3>
          <div className="space-y-3">
            <input
              id="newsletter"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete='true'
              className="w-full px-4 py-2 rounded border-none text-black"
              disabled
            />
            <span
              className="btn w-full text-center block bg-gray-300 cursor-not-allowed"
              aria-label="Submit newsletter form"
            >
              Submit 
            </span>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-[400] mb-4">You Can Follow Us At</h3>
          <div className="flex gap-4 text-lg">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className="hover:text-blue-600">
              {/* Facebook SVG */}
              ...
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile" className="hover:text-pink-500">
              {/* Instagram SVG */}
              ...
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile" className="hover:text-sky-400">
              {/* Twitter SVG */}
              ...
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-blue-700">
              {/* LinkedIn SVG */}
              ...
            </a>
          </div>
        </div>

        {/* Trust Image */}
        <div className="mt-8 sm:mt-0">
          <h3 className="text-xl font-medium mb-4">We Accept</h3>
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <Image
              src="/trust.png"
              alt="We accept Visa, MasterCard, and more"
              width={600}
              height={100}
              className="object-contain w-full h-auto"
              loading="lazy"
               
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 pt-6 border-t border-white text-center text-xs text-primary">
        © Amrita Global Enterprises — Crafted with ❤️ 2025
      </div>
    </footer>
  );
};

export default Footer;
