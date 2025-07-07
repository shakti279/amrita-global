import React from 'react';
export const dynamic = 'force-static'; 
export const revalidate = 36000; // Revalidate every 60 seconds
// import dynamic from 'next/dynamic';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
// const Features = dynamic(() => import('./components/Features'));
// const FAQ = dynamic(() => import('./components/FAQ'));
// const Contact = dynamic(() => import('./components/Contact'));
// const Footer = dynamic(() => import('./components/Footer'));
// const New = dynamic(() => import('./components/New'));
import Features from './components/Features';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import New from './components/New';


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1">
        <Hero />
        <New />
        <Products />
        <Features />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
