import React from 'react';
import PropTypes from 'prop-types';
import { Open_Sans, Poppins } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  display: 'swap',
   preload: true,
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight:["400","500"],
  display: 'swap',
  preload: true,
});
// Metadata for the page
// This metadata is used for SEO and social media sharing
// It includes the title, keywords, description, and Open Graph tags        
  
export const metadata = {
  title: 'Amrita Global Enterprises',
  keywords: 'georgette fabric, manufacturers, suppliers, wholesale, export',
  description:
    'Amrita Global Enterprises is a leading manufacturer and supplier of high-quality georgette fabrics, specializing in wholesale and export.',
  robots: 'index, follow',
  openGraph: {
    title: 'Amrita Global Enterprises',
    description: 'High-quality georgette fabrics from Surat manufacturers',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
