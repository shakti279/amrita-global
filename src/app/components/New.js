import React from 'react';
import Image from 'next/image';


export default function New() {
  return (
    <section
      className="bg-primary py-12"
      aria-labelledby="premium-products-heading"
    >
      <div className="max-w-8xl mx-auto grid md:grid-cols-2 gap-12 items-start px-4">
        {/* Text Section */}
        <div>
          <h2
            id="premium-products-heading"
            className="text-xl font-[400] san text-center md:text-start mb-2 text-primary leading-snug"
          >
            Get Premium Products Directly from Surat
          </h2>
          <hr className="w-16 border-t-2 border-primary mx-auto md:mx-0 mb-4" />

          <p className="mb-4 text-[14px] pop text-secondary leading-relaxed text-start">
            Discover high-quality georgette fabric straight from trusted manufacturers in Surat,
            crafted with precision to meet international standards. Our premium textiles are known
            for their softness, durability, and luxurious drape — perfect for everything from
            designer wear to export-grade garments.
          </p>

          <p className="text-secondary pop text-[14px] leading-relaxed text-start">
            Whether you&apos;re sourcing for retail, wholesale, or custom production, we provide
            versatile solutions tailored to your needs. Backed by years of expertise and
            cutting-edge techniques, our georgette fabrics bring elegance and comfort together in
            every weave.
          </p>
        </div>

        {/* Image Section */}
        <div className="flex flex-col items-center">
          <figure className="relative w-full max-w-md h-72 md:h-96 rounded-lg overflow-hidden shadow">
            <Image
              src="/fabric.avif"
              alt="Premium Surat Georgette Fabric with fine weave and elegant drape"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1268px) 75vw, 33vw"
              className="object-cover"
            />
            <figcaption className="sr-only">Premium Surat Georgette Fabric</figcaption>
          </figure>

          <div
            className="mt-6 px-6 py-2 btn bg-primary text-primary-dark rounded-md hover:bg-primary-dark transition text-center cursor-pointer"
            aria-label="Request a quote"
          >
            Get Quote
          </div>
        </div>
      </div>
    </section>
  );
}
