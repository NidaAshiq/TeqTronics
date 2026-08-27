import Image from "next/image";
import Link from "next/link";

export default function Home() {


  const services = [
    {
      image:"/logoandbranding.png",
      title:"Branding",
      description:"Do you want to stand out in a noisy marketplace? you want your business to be percieved the right way. We have helped hundreds of business achieve this...."
    },
    {
      image:"/webdesigns.png",
      title:"Web Development",
      description:"Corporate websites that build trust, Ecommerce for both mobile and web platform that drives sales and POS applications. we got the expertise...."
    },
    {
      image:"/api.png",
      title:"API Development",
      description:"Develop Powerful backend API (application programming interface) for your software business model or idea, our team will connect your sytems..."
    },
     {
      image:"/uiux.png",
      title:"UI/UX Design",
      description:"Design, Model and prototype your software, business or ideas with less hassle, with our team of product designers...."
    },
    {
      image:"/softwaredevelopment.png",
      title:"Software Development",
      description:"Build that software for your business or organisation in no time, with our special team of software engineers,we ..."
    },
    {
      image:"/ecommerce.png",
      title:"Online Marketing",
      description:"Our team of digital marketers will help you drive sales using various digital platform and bring those targeted cutomers right to your page........."
    },
  ]

  return (
    <>
      <section className="flex flex-col md:flex-row justify-around items-center pt-10 sm:pt-12 md:pt-16 px-4 sm:px-6 md:px-8 lg:px-12 gap-10 md:gap-6 lg:gap-10">

        {/* left side */}
        <div className="w-full md:w-1/2 lg:w-auto text-center md:text-left">

          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            <span className="block">
              One of the
            </span>

            <span className="block text-red-600">
              fastest growing
            </span>

            <span className="block">
              agency
            </span>
          </h1>

          <p className="mt-3 max-w-lg mx-auto md:mx-0 text-gray-600 text-sm sm:text-base md:text-lg leading-6 sm:leading-7">
            We create innovative digital solutions and provide
            professional training to help businesses and individuals
            grow in the digital world.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-6 mt-4 font-bold">

            <Link href="/services">
              <button className="bg-red-600 p-3 text-white rounded-2xl w-full sm:w-auto">
                Explore Services
              </button>
            </Link>

            <Link href="/contact">
              <button className="bg-black p-3 text-white rounded-2xl w-full sm:w-auto">
                Contact us
              </button>
            </Link>

          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-1/2 lg:w-auto flex justify-center">

          <Image
            src="/bg1.png"
            width={400}
            height={400}
            alt="background image"
            className="w-[280px] sm:w-[320px] md:w-[350px] lg:w-[400px] h-auto"
          />

        </div>

       

      </section>

      <section className="py-16 md:py-24 px-4 sm:px-6">

  {/* Services Heading */}
  <div className="max-w-3xl mx-auto text-center">

    <p className="text-red-600 font-semibold mb-3">
      What we can do for you
    </p>

    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
      Services we can help you with
    </h1>

    <p className="text-gray-600 mt-5 leading-7 max-w-2xl mx-auto">
      Our Team comprises of developers, software engineers and digital
      marketers, making our services diverse and exceptional
    </p>

  </div>


  {/* Services Cards */}
  <div className="max-w-7xl mx-auto mt-12 md:mt-16">

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

      {services.map((service, index) => {
        return (
          <div
            key={index}
            className="group bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >

            {/* Image */}
            <div className="w-full h-52 flex justify-center items-center rounded-2xl bg-gray-50 overflow-hidden">

              <Image
                src={service.image}
                width={400}
                height={400}
                alt={service.title}
                className="w-40 md:w-48 h-auto object-contain group-hover:scale-110 transition-transform duration-300"
              />

            </div>


            {/* Content */}
            <div className="mt-6">

              <h1 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                {service.title}
              </h1>

              <p className="text-gray-600 mt-3 leading-7 text-sm md:text-base">
                {service.description}
              </p>

            </div>


            {/* Bottom Line */}
            <div className="w-12 h-1 bg-red-600 rounded-full mt-6 group-hover:w-20 transition-all duration-300"></div>

          </div>
        );
      })}

    </div>

  </div>

</section>
    </>
  );
}