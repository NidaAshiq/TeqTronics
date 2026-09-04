import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "Sapphire Studio",
    description: "Premium fashion studio and online boutique.",
    image: "/projects/sapphire-studio.png",
    link: "https://sapphirestudio.com.pk/",
  },
  {
    title: "RangLeher",
    description: "Contemporary ethnic clothing e-commerce store.",
    image: "/rangleher.png",
    link: "https://rangleher.com/",
  },
  {
    title: "Rumi Studios",
    description: "Creative studio and fashion retail website.",
    image: "/projects/rumi-studios.png",
    link: "https://rumistudios.pk/",
  },
  {
    title: "Adla",
    description: "Modern WordPress business and portfolio website.",
    image: "/adla.png",
    link: "https://adla.pk/",
  },
  {
    title: "Hemroc Global Trading",
    description: "Corporate website for global trading company.",
    image: "/hemroc.png",
    link: "https://hemroc.co/",
  },
  {
    title: "AlWaha Distributors",
    description: "Distribution and wholesale business website.",
    image: "/projects/alwaha.png",
    link: "#",
  },
  {
    title: "Sapphire Creatives",
    description: "Creative agency and digital branding website.",
    image: "/sapphire-creatives.webp",
    link: "https://www.sapphirecreatives.com/",
  },
  {
    title: "HomeChoice",
    description: "Modern furniture and home accessories website.",
    image: "/homechoice.png",
    link: "https://homechoicee.com/",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">

      {/* ================= HEADER ================= */}
      <section className="bg-gradient-to-r from-black via-[#170000] to-[#32070a] px-6 py-10 text-center text-white">

        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[3px] text-red-500">
          CORVIT WEB DEVELOPMENT
        </p>

        <h1 className="text-3xl font-extrabold sm:text-4xl">
          Our Projects
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-5 text-gray-200">
          Live websites, e-commerce stores, and digital platforms delivered
          for clients across Pakistan and internationally.
        </p>

      </section>


      {/* ================= PORTFOLIO ================= */}
      <section className="px-6 py-10 sm:px-10 lg:px-16">

        <div className="mx-auto max-w-6xl">

          {/* Heading */}
          <div className="mb-8 text-center">

            <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-red-500">
              OUR PORTFOLIO
            </p>

            <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
              Featured Client Projects
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-5 text-gray-600">
              A selection of live websites and e-commerce platforms built by
              the CORVIT team for brands across Pakistan and beyond.
            </p>

          </div>


          {/* ================= CARDS ================= */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
              <div
                key={project.title}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                {/* Project Image */}
                <div className="relative h-[180px] w-full overflow-hidden bg-gray-100">

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                </div>


                {/* Card Content */}
                <div className="p-4">

                  <h3 className="text-sm font-bold text-black">
                    {project.title}
                  </h3>

                  <p className="mt-2 min-h-[38px] text-xs leading-5 text-gray-500">
                    {project.description}
                  </p>

                  <Link
                    href={project.link}
                    target="_blank"
                    className="mt-4 inline-flex items-center gap-1 text-xs font-medium text-red-600 hover:text-red-800"
                  >
                    Visit Website
                    <span>↗</span>
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}