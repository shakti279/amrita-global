import React from 'react';
import Image from 'next/image';


export default function Products() {
  return (
    <section
      id="product"
      className="section bg-primary py-12"
      aria-labelledby="products-heading"
      role="region"
    >
      <div className="max-w-8xl mx-auto px-4">
        <h2
          id="products-heading"
          className="text-xl san font-[400] text-center mb-4 text-primary"
        >
          Our Products
        </h2>
        <p className=" text-center mb-10 pop text-[14px] text-secondary">
          Premium georgette fabrics you'll love.
        </p>

        {/* === MOBILE CAROUSEL === */}
        <div className="block md:hidden" role="group" aria-label="Mobile product carousel">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 scrollbar-hide scroll-smooth scroll-pl-4">
            {/* Slide 1 */}
            <article id="slide-1" className="min-w-full snap-center scroll-mx-4" aria-labelledby="product-1-title">
              <div className="bg-white rounded-lg shadow-md flex flex-col items-center p-4">
                <figure className="w-full h-56 bg-gray-100 rounded mb-4 overflow-hidden relative">
                  <Image
                    src="/fabric.avif"
                    alt="White Georgette Fabric - Lightweight and soft for elegant outfits"
                    width={600}
                   height={400}
                    loading="eager"
                    className="object-cover"
                    priority={true}  
                    sizes="(max-width: 768px) 100vw, (max-width: 1268px) 50vw, 33vw"
                  />
                </figure>
                <h3 id="product-1-title" className="text-lg mb-2 text-primary text-center">White Georgette</h3>
                <p className="text-gray-600 text-sm text-center">
                  Soft and elegant white georgette fabric.
                </p>
                <div className="flex justify-end w-full mt-4 px-4">
                  <a href="#slide-2" aria-label="Go to next product" className="text-primary bg-primary-dark p-2">→</a>
                </div>
              </div>
            </article>

            {/* Slide 2 */}
            <article id="slide-2" className="min-w-full snap-center scroll-mx-4" aria-labelledby="product-2-title">
              <div className="bg-white rounded-lg shadow-md flex flex-col items-center p-4">
                <figure className="w-full h-56 bg-gray-100 rounded mb-4 overflow-hidden relative">
                  <Image
                    src="/fabric.avif"
                    alt="Purple Georgette Fabric - Vibrant and bold for statement designs"
                        width={600}
            height={400}
                    loading="eager"
                    priority={true} 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1268px) 50vw, 33vw"
                  />
                </figure>
                <h3 id="product-2-title" className="text-lg mb-2 text-primary text-center">Purple Georgette</h3>
                <p className="text-gray-600 text-sm text-center">
                  Vibrant purple georgette for bold designs.
                </p>
                <div className="flex justify-between w-full mt-4 px-4">
                  <a href="#slide-1" aria-label="Go to previous product" className="text-primary border-2 bg-primary-dark p-2">←</a>
                  <a href="#slide-3" aria-label="Go to next product" className="text-primary border-2 bg-primary-dark p-2">→</a>
                </div>
              </div>
            </article>

            {/* Slide 3 */}
            <article id="slide-3" className="min-w-full snap-center scroll-mx-4" aria-labelledby="product-3-title">
              <div className="bg-white rounded-lg shadow-md flex flex-col items-center p-4">
                <figure className="w-full h-56 bg-gray-100 rounded mb-4 overflow-hidden relative">
                  <Image
                    src="/fabric.avif"
                    alt="Gold Georgette Fabric - Shimmering fabric for festive and special occasions"
                         width={600}
            height={400}
                    loading="eager"
                    priority={true} 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1268px) 50vw, 33vw"
                  />
                </figure>
                <h3 id="product-3-title" className="text-lg mb-2 text-primary text-center">Gold Georgette</h3>
                <p className="text-gray-600 text-sm text-center">
                  Shimmering gold georgette for special occasions.
                </p>
                <div className="flex justify-start w-full mt-4 px-4">
                  <a href="#slide-2" aria-label="Go to previous product" className="text-primary bg-primary-dark p-2">←</a>
                </div>
              </div>
            </article>
          </div>
        </div>

        {/* === DESKTOP GRID === */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {/* Product 1 */}
          <article aria-labelledby="desktop-product-1-title" className="bg-white rounded-lg shadow-md flex flex-col items-center p-6">
            <figure className="w-full h-64 bg-gray-100 rounded mb-4 overflow-hidden relative">
              <Image
                src="/fabric.avif"
                alt="White Georgette Fabric - Lightweight and soft for elegant outfits"
                width={600}
                height={400}
                loading="eager"
                priority={true}  
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1268px) 50vw, 33vw"
              />
            </figure>
            <h3 id="desktop-product-1-title" className="font-[400] text-lg mb-2 text-gray-800 text-center">White Georgette</h3>
            <p className="text-secondary text-sm text-center">
              Soft and elegant white georgette fabric.
            </p>
          </article>

          {/* Product 2 */}
          <article aria-labelledby="desktop-product-2-title" className="bg-white rounded-lg shadow-md flex flex-col items-center p-6">
            <figure className="w-full h-64 bg-gray-100 rounded mb-4 overflow-hidden relative">
              <Image
                src="/fabric.avif"
                alt="Purple Georgette Fabric - Vibrant and bold for statement designs"
                fill
                loading="eager"
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1268px) 50vw, 33vw"
              />
            </figure>
            <h3 id="desktop-product-2-title" className="font-[400] text-lg mb-2 text-gray-800 text-center">Purple Georgette</h3>
            <p className="text-secondary text-sm text-center">
              Vibrant purple georgette for bold designs.
            </p>
          </article>

          {/* Product 3 */}
          <article aria-labelledby="desktop-product-3-title" className="bg-white rounded-lg shadow-md flex flex-col items-center p-6">
            <figure className="w-full h-64 bg-gray-100 rounded mb-4 overflow-hidden relative">
              <Image
                src="/fabric.avif"
                alt="Gold Georgette Fabric - Shimmering and luxurious for weddings and parties"
                fill
                loading="eager"
                className="object-cover"
                priority={true} 
                sizes="(max-width: 768px) 100vw, (max-width: 1268px) 50vw, 33vw"
              />
            </figure>
            <h3 id="desktop-product-3-title" className="font-[400] text-lg mb-2 text-gray-800 text-center">Gold Georgette</h3>
            <p className="text-secondary text-sm text-center">
              Shimmering gold georgette for special occasions.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
