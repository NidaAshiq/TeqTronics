import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
    </>
  );
}