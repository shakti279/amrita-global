
import React from 'react';
export default function Features() {
  return (
    <section id="about" className="section bg-primary" aria-labelledby="who-we-are-title">
      <div className="max-w-8xl mx-auto px-4 text-center">
        <header>
          <h2
            id="who-we-are-title"
            className="text-xl font-[400] san text-primary mb-4 uppercase tracking-wide"
          >
            Who We Are
          </h2>
          <p className="text-base pop text-secondary text-[14px] max-w-3xl mx-auto mb-12 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. We&apos;ve built our
            reputation on premium quality and trust — and we&apos;re just getting started.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <article className="card flex flex-col border-y-2 border-black items-center text-center">
            <div className="text-4xl mb-4" role="img" aria-label="Rocket">
              🚀
            </div>
            <h3 className="text-xl font-[400] san mb-2 text-primary">Innovative Vision</h3>
            <p className="text-secondary pop text-[14px] leading-normal">
              We embrace bold ideas to bring new dimensions to georgette fabric manufacturing and supply.
            </p>
          </article>

          {/* Feature 2 */}
          <article className="card flex flex-col border-y-2 border-black items-center text-center">
            <div className="text-4xl mb-4" role="img" aria-label="Lightbulb">
              💡
            </div>
            <h3 className="text-xl font-[400] san mb-2 text-primary">Creative Excellence</h3>
            <p className="text-secondary pop text-[14px] leading-normal">
              Our expertise and attention to design ensure your products stand out in any collection.
            </p>
          </article>

          {/* Feature 3 */}
          <article className="card flex flex-col border-y-2 border-black items-center text-center">
            <div className="text-4xl mb-4" role="img" aria-label="Cycle">
              🔄
            </div>
            <h3 className="text-xl font-[400] san mb-2 text-primary">Reliable Workflow</h3>
            <p className="text-secondary pop text-[14px] leading-normal">
              From sourcing to delivery, we maintain consistency, efficiency, and transparency at every step.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
