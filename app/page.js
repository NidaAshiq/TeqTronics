import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-around items-center pt-16 px-4 md:px-0 gap-8 md:gap-0">

        {/* left side */}
        <div className="w-full md:w-auto">
          <h1 className="text-6xl font-bold leading-[1.05] tracking-tight">
            <span className="block">
              One of the
            </span>
            <span className="block text-red-600">
              fastest growing
            </span>
            <span>
              agency
            </span>
          </h1>

          <p className="mt-3 max-w-lg text-gray-600 text-base md:text-lg leading-7">
            We create innovative digital solutions and provide
            professional training to help businesses and individuals
            grow in the digital world.
          </p>

          <div className="flex items-center gap-6 mt-1 font-bold">
            <Link href="/services">
              <button className="bg-red-600 p-3 text-white rounded-2xl">
                Explore Services
              </button>
            </Link>

            <Link href="/contact">
              <button className="bg-black p-3 text-white rounded-2xl">
                Contact us
              </button>
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="w-full md:w-auto flex justify-center">
          <Image
            src="/bg1.png"
            width={400}
            height={400}
            alt="background image"
            className="max-w-full h-auto"
          />
        </div>

      </section>
    </>
  );
}
