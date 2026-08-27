import React from "react";
import Image from "next/image";

const Page = () => {
  const designs = [
    {
      image: "/logoandbranding.png",
      title: "Logo & Branding",
      description:
        "We design professional looking yet simple logos. Our designs are top notch and give your brand an aesthetic and memorable look.",
    },
    {
      image: "/webdesigns.png",
      title: "Website Design",
      description:
        "We design professional looking websites that are responsive on all devices, from simple portfolios to modern business websites.",
    },
    {
      image: "/uiux.png",
      title: "UI/UX Design",
      description:
        "We design professional user interfaces and creative mockups to help you build an outstanding digital product.",
    },
  ];

  const developments = [
    {
      image: "/content.png",
      title: "Content Management System",
      description:
        "We design systems and implement modern CMS solutions for existing websites while creating efficient development processes.",
    },
    {
      image: "/shopify.png",
      title: "Shopify",
      description:
        "We offer customized Shopify themes and plugins to enhance your e-commerce site's functionality and user experience.",
    },
    {
      image: "/ecommerce.png",
      title: "eCommerce",
      description:
        "We design, create, and deploy e-commerce solutions that help bridge the gap between your business and customers.",
    },
  ];

  const marketings = [
    {
      image: "/seo.png",
      title: "SEO",
      description:
        "We help improve your website's SEO and optimize your content and data for better search engine recognition.",
    },
    {
      image: "/displaymarketing.png",
      title: "Display Marketing",
      description:
        "From simple video ads to banners for different campaigns, we design and implement effective marketing solutions.",
    },
    {
      image: "/socialmediamarketing.png",
      title: "Social Media Marketing",
      description:
        "We help create and manage social media pages, campaigns, and content to drive traffic toward your target audience.",
    },
  ];

  // Reusable Service Section
  const ServiceSection = ({ number, title, services }) => {
    return (
      <section className="py-12 md:py-16">
        
        {/* Section Heading */}
        <div className="text-center">
          <span className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
            Service {number}
          </span>

          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900">
            Our{" "}
            <span className="text-red-600">
              {title}
            </span>{" "}
            Services
          </h2>

          <div className="w-16 h-1 bg-red-600 mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">

            {services.map((service, index) => (
              <div
                key={index}
                className="
                  group
                  bg-white
                  rounded-3xl
                  p-7
                  border
                  border-gray-100
                  shadow-md
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  hover:-translate-y-2
                "
              >
                {/* Image */}
                <div
                  className="
                    w-full
                    h-52
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    bg-gray-50
                    group-hover:bg-red-50
                    transition
                    duration-300
                    overflow-hidden
                  "
                >
                  <Image
                    src={service.image}
                    width={220}
                    height={220}
                    alt={service.title}
                    className="
                      object-contain
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Content */}
                <div className="mt-7">
                  <h3
                    className="
                      text-2xl
                      font-bold
                      text-gray-900
                      group-hover:text-red-600
                      transition
                      duration-300
                    "
                  >
                    {service.title}
                  </h3>

                  <p className="mt-3 text-gray-600 leading-7">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Accent */}
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-8 h-[2px] bg-red-600"></div>

                  {/* <span className="text-sm font-semibold text-gray-500">
                    Learn More
                  </span> */}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="pb-16">

      {/* Main Heading */}
      <div className="text-center pt-12 px-4">
        <span className="text-red-600 font-semibold tracking-wider">
          WHAT WE OFFER
        </span>

        <h1 className="font-bold text-4xl md:text-5xl text-gray-900 mt-3">
          Our <span className="text-red-600">Services</span>
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4 leading-7">
          We provide creative digital solutions to help businesses build,
          grow, and succeed in the digital world.
        </p>
      </div>

      {/* Service 01 */}
      <ServiceSection
        number="01"
        title="Design"
        services={designs}
      />

      {/* Service 02 */}
      <ServiceSection
        number="02"
        title="Development"
        services={developments}
      />

      {/* Service 03 */}
      <ServiceSection
        number="03"
        title="Online Marketing"
        services={marketings}
      />

    </main>
  );
};

export default Page;