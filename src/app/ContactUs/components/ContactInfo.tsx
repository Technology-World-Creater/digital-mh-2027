import React from "react";

const ContactInfo = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl tracking-tight md:text-6xl font-bold text-gray-900 mb-12">
          Connect with Us
        </h2>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 md:gap-12">
          {/* Location */}
          <div className="flex flex-col items-center">
            {/* Placeholder for location icon */}
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">
              We are at
            </h3>
            <p className="text-gray-600 text-center">
              Suyog Nagar Square, Nagpur, Maharashtra -<br />
              440015
            </p>
          </div>

          {/* Phone */}
          <div className="flex flex-col items-center">
            {/* Placeholder for phone icon */}
            <div className="text-5xl mb-4">📞</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">
              Contact Us (10 AM - 7 PM)
            </h3>
            <p className="text-gray-600">Mob: +919373133010</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            {/* Placeholder for email icon */}
            <div className="text-5xl mb-4">✉️</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 mt-4">
              Email Us
            </h3>
            <p className="text-gray-600">
              sahil@technologyagriculturecreater.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;
