import React from 'react';

export default function FAQ() {
  return (
    <section
      id="faq"
      className="section bg-primary py-12"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="max-w-8xl mx-auto px-4">
        <h2 className="text-xl font-[400] san text-center mb-10 text-primary">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {/* FAQ 1 */}
          <details className="bg-white rounded-lg shadow-md p-4">
            <summary className="text-gray-800 font-[400] san md:text-base cursor-pointer">
              What is georgette fabric?
            </summary>
            <p className="mt-2 text-gray-600 pop text-[14px]">
              Georgette is a lightweight, sheer fabric with a slightly crinkled texture.
            </p>
          </details>

          {/* FAQ 2 */}
          <details className="bg-white rounded-lg shadow-md p-4">
            <summary className="text-gray-800 font-[400] san  md:text-base cursor-pointer">
              Do you offer bulk discounts?
            </summary>
            <p className="mt-2 text-gray-600 pop text-[14px]">
              Yes, we offer special pricing for bulk and wholesale orders.
            </p>
          </details>

          {/* FAQ 3 */}
          <details className="bg-white san rounded-lg shadow-md p-4">
            <summary className="text-gray-800 font-[400]   md:text-base cursor-pointer">
              How long does shipping take?
            </summary>
            <p className="mt-2 text-gray-600 pop text-[14px]">
              Usually 3–7 business days depending on location.
            </p>
          </details>

          {/* FAQ 4 */}
          <details className="bg-white san rounded-lg shadow-md p-4">
            <summary className="text-gray-800 font-[400]  san  md:text-base cursor-pointer">
              Can I request fabric samples?
            </summary>
            <p className="mt-2 pop text-gray-600 text-[14px]">
              Absolutely! Use our contact form to request free samples.
            </p>
          </details>
        </div>
      </div>
    </section>
  );
}