import React from "react";

const Page = () => {
  return (
    <section className="min-h-screen  py-10 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-red-600">
            Contact Us
          </h1>

          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-7">
            We'd love to hear from you. Get in touch with us for inquiries,
            admissions, or website development services.
          </p>
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Contact Information */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              Contact Information
            </h2>

            <div className="space-y-6">

              <div>
                <h3 className="font-bold text-red-600 text-lg">
                  📍 Address
                </h3>

                <p className="text-gray-600 mt-1">
                  P-4/1 Kotwali Road Near Al-Noor hospital opposite Dobi Ghat <br />
                  Faisalabad, Punjab, Pakistan
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-600 text-lg">
                  📞 Phone
                </h3>

                <p className="text-gray-600 mt-1">
                  +92 3458322915
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-600 text-lg">
                  📧 Email
                </h3>

                <p className="text-gray-600 mt-1 break-all">
                  info@corvit.com
                </p>
              </div>

              <div>
                <h3 className="font-bold text-red-600 text-lg">
                  🕒 Office Hours
                </h3>

                <p className="text-gray-600 mt-1">
                  Monday – Friday <br />
                  10:00 AM – 6:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-xl rounded-2xl p-6 sm:p-8">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-8">
              Send Us a Message
            </h2>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm sm:text-base resize-none focus:outline-none focus:ring-2 focus:ring-red-600"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 hover:scale-105 transition-all duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Page;