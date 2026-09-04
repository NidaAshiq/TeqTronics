import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    category: "Software Development",
    date: "Jul 31, 2026",
    author: "CORVIT Editorial",
    title: "Full Stack Development: Skills Employers Want in 2026",
    description:
      "React, Laravel, APIs, and deployment — the core skills our full stack program focuses on for job-ready graduates.",
    image: "/webdevelopment.jpg",
    link: "#",
  },
  {
    category: "Campus News",
    date: "Jul 30, 2026",
    author: "CORVIT Events Team",
    title:
      "CORVIT Hosts Cyber Security Awareness Session at Local Universities",
    description:
      "Highlights from our recent campus outreach sessions on ethical hacking awareness and safe digital practices.",
    image: "/hosts.jpg",
    link: "#",
  },
  {
    category: "Career Guidance",
    date: "Jul 29, 2026",
    author: "CORVIT Career Desk",
    title: "5 Tips to Choose the Right IT Course After Matric or FSC",
    description:
      "Not sure which program to pick? These five practical tips will help students and parents make a confident decision.",
    image: "/IT.jpg",
    link: "#",
  },
  {
    category: "Cloud Computing",
    date: "Jul 28, 2026",
    author: "CORVIT Editorial",
    title: "Cloud Careers: AWS, Azure & Google Cloud Explained",
    description:
      "Compare the top cloud platforms and learn which certification track aligns with your job market goals.",
    image: "/cloud.jpg",
    link: "#",
  },
  {
    category: "Networking",
    date: "Jul 27, 2026",
    author: "CORVIT Editorial",
    title: "CCNA vs CCNP: Which Networking Path Is Right for You?",
    description:
      "A practical guide to choosing between Cisco CCNA and CCNP based on your experience level and career goals.",
    image: "/ccna.jpg",
    link: "#",
  },
  {
    category: "Cyber Security",
    date: "Jul 26, 2026",
    author: "CORVIT Editorial",
    title: "Why Cyber Security Skills Are Essential in 2026",
    description:
      "From ransomware to SOC careers — discover why cyber security training is one of the smartest investments for students and professionals.",
    image: "/cybersecurity.jpg",
    link: "#",
  },
];

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7]">

      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-black via-[#160000] to-[#35070a] px-6 py-10 text-center text-white">

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Blog
        </h1>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-200">
          Latest news, insights, and technology trends from CORVIT.
        </p>

      </section>


      {/* ================= BLOG SECTION ================= */}
      <section className="px-6 py-10 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-6xl">

          {/* ================= SECTION HEADING ================= */}
          <div className="mb-9 text-center">

            <p className="mb-2 text-xs font-bold uppercase tracking-[2px] text-red-500">
              CORVIT BLOG
            </p>

            <h2 className="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              Insights, News & Career Tips
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600">
              Stay updated with technology trends, certification guides,
              campus news, and expert advice from CORVIT Faisalabad.
            </p>

          </div>


          {/* ================= FEATURED BLOG ================= */}
          <article className="mb-7 grid overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm md:grid-cols-2">

            {/* Featured Image */}
            <div className="relative min-h-[280px] bg-gray-100">

              <Image
                src="/blog/featured.jpg"
                alt="Scope of SEO and Career Opportunities in Pakistan"
                fill
                className="object-cover"
              />

            </div>


            {/* Featured Content */}
            <div className="flex flex-col justify-center p-7">

              {/* Category + Date */}
              <div className="mb-3 flex flex-wrap items-center gap-2">

                <span className="rounded-full bg-red-50 px-3 py-1 text-[10px] font-semibold text-red-500">
                  SEO & Digital Marketing
                </span>

                <span className="text-[10px] text-gray-400">
                  Sep 2, 2026
                </span>

              </div>


              <h3 className="max-w-lg text-2xl font-bold leading-tight text-black">
                Scope of SEO and Career Opportunities in Pakistan
              </h3>


              <p className="mt-4 max-w-lg text-sm leading-6 text-gray-600">
                Explore the scope of SEO and career opportunities in
                Pakistan. Learn about keyword research, on-page SEO,
                technical SEO, content marketing, local SEO, e-commerce SEO,
                GEO, analytics, and more.
              </p>


              {/* Bottom */}
              <div className="mt-5 flex items-center justify-between">

                <span className="text-[10px] text-gray-400">
                  By Corvit Faisalabad
                </span>

                {/* <Link
                  href="/blog/seo-career-pakistan"
                  className="text-xs font-semibold text-red-600 transition-colors hover:text-red-800"
                >
                  Read article →
                </Link> */}

              </div>

            </div>

          </article>


          {/* ================= BLOG CARDS ================= */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {posts.map((post) => (
              <article
                key={post.title}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                {/* ================= CARD IMAGE ================= */}
                <div className="relative h-[190px] overflow-hidden bg-gray-100">

                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />


                  {/* Category Badge */}
                  <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-[10px] font-semibold text-red-500 shadow-sm">
                    {post.category}
                  </span>

                </div>


                {/* ================= CARD CONTENT ================= */}
                <div className="p-4">

                  {/* Date & Author */}
                  <div className="mb-2 text-[10px] text-gray-400">

                    {post.date}

                    <span className="mx-1.5">
                      •
                    </span>

                    {post.author}

                  </div>


                  {/* Title */}
                  <h3 className="text-base font-bold leading-5 text-black">
                    {post.title}
                  </h3>


                  {/* Description */}
                  <p className="mt-2 line-clamp-3 text-xs leading-5 text-gray-600">
                    {post.description}
                  </p>


                  {/* Read More */}
                  {/* <Link
                    href={post.link}
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-red-600 transition-colors hover:text-red-800"
                  >
                    Read more
                    <span className="text-sm">
                      ›
                    </span>
                  </Link> */}

                </div>

              </article>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}