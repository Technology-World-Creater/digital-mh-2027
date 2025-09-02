import React from "react";

const ContactForm = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl tracking-tight md:text-6xl font-bold text-gray-900 mb-4">
          Let&apos;s Get in Touch
        </h2>
        <p className="text-xl w-full text-gray-600 mb-12">
          We&apos;d love to hear your ideas, collaborations, and innovations
          that can help us build India
        </p>

        <form className="grid grid-cols-1 gap-y-6 max-w-2xl mx-auto">
          <div>
            <label
              htmlFor="name"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Jane"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="xyz@email.com"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter in this format (e.g. +91-9876543210)"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-left text-sm font-medium text-gray-700"
            >
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your message..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              required
            ></textarea>
          </div>

          <div className="flex w-full">
            <button
              type="submit"
              className="inline-flex justify-center py-3 w-full border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#03CF65] hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#03CF65]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
