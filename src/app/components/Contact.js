import React from 'react';
export default function ContactForm() {
  return (
    <section id="contact" className="section bg-primary" aria-labelledby="contact-heading">
      <div className="max-w-8xl mx-auto grid lg:grid-cols-2 gap-12 card">
        {/* Contact Info Panel */}
        <div className="space-y-6 rounded-3xl san p-6 bg-primary-dark text-whitee">
          <h2 id="contact-heading" className="text-xl font-bold mb-4">Contact Information</h2>
          <p className="text-[14px] pop font-[400]">
            Reach out to us via the details below or send us a message using the form.
          </p>
          <address className="not-italic text-[14px] san space-y-2 text-base">
            <p><strong>Phone:</strong> <a href="tel:+10123456789" className="hover:underline">+1012 3456 789</a></p>
            <p><strong>Email:</strong> <a href="mailto:demo@gmail.com" className="hover:underline">demo@gmail.com</a></p>
            <p><strong>Address:</strong> 132 Dartmouth Street, Boston, MA 02156, USA</p>
          </address>
        </div>

        {/* Form Section (static, no JS) */}
        <div className="space-y-6 text-primary p-6 bg-whitee rounded-3xl shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" name="firstName" placeholder="First Name" required aria-label="First Name" className="w-full px-4 py-3 border border-gray-300 rounded" autoComplete='true' disabled />
            <input type="text" name="lastName" placeholder="Last Name" required aria-label="Last Name" className="w-full px-4 py-3 border border-gray-300 rounded" autoComplete='true' disabled />
          </div>
          <input type="email" name="email" placeholder="Email" required aria-label="Email" className="w-full px-4 py-3 border border-gray-300 rounded" autoComplete='true' disabled />
          <input type="tel" name="phone" placeholder="Phone Number" aria-label="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded" autoComplete='true' disabled />
          <select name="inquiryType" required aria-label="Select your inquiry type" className="w-full px-4 py-3 border border-gray-300 rounded text-primary" autoComplete='true' disabled>
            <option >Select an option</option>
            <option>General Inquiry</option>
            <option>Product Information</option>
            <option>Partnership</option>
          </select>
          <textarea name="message" rows={4} placeholder="Write your message..." required aria-label="Message" autoComplete='true' className="w-full px-4 py-3 border border-gray-300 rounded resize-none" disabled />
          <span className="btn w-full text-center block bg-gray-300 cursor-not-allowed" aria-label="Send Message">Send Message </span>
        </div>
      </div>
    </section>
  );
}
