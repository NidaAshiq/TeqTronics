import React from "react";
import Image from "next/image";

const Page = () => {

    const values = [
        {
            title: "UNDERSTANDING",
            description: "In exploring your objectives, goals and USPs, we can begin to brainstorm solutions that work for you and your customers."
        },
        {
            title: "RESEARCHING",
            description: "Knowing the market is the key to success. By auditing both you and your competitors, we forge the best possible strategy for your online identity"
        },
        {
            title: "PLANNING",
            description: "We use our knowledge to produce detailed plans describing where your new website, online store, or brand design will fit in the larger picture of your digital marketing strategy."
        },
        {
            title: "SOLVING",
            description: "Sound technical development is the foundation of our products and services. Our developers are true tech specialists, who can solve any problem we throw at them."
        },
        {
            title: "COMMITTING",
            description: "Crafting the best in user experience is our forte – we design with a user’s mind. Everything we create is built to scale and prepared for future development."
        },
        {
            title: "TESTING",
            description: "There is no such thing as too much testing! Every link, button, heading, and form is fully trialled by real users, so there are no surprises on launch day."
        },
    ]

    return (
        <main className="min-h-screen bg-white">

            {/* Heading */}
            <div className="pt-10 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-red-600">
                    About Us
                </h1>

                <p className="mt-3 text-gray-500 text-sm md:text-base">
                    Discover who we are and what we do
                </p>
            </div>

            {/* About Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">

                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Left Side - Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative">

                            {/* Background decoration */}
                            <div className="absolute -top-5 -left-5 w-24 h-24 bg-red-100 rounded-full -z-10"></div>

                            <div className="rounded-3xl overflow-hidden shadow-xl">
                                <Image
                                    src="/about.png"
                                    width={500}
                                    height={500}
                                    alt="About us"
                                    className="w-full max-w-md object-cover"
                                />
                            </div>

                            {/* Small decoration */}
                            <div className="absolute -bottom-5 -right-5 w-20 h-20 bg-red-600 rounded-full -z-10"></div>

                        </div>
                    </div>

                    {/* Right Side - Content */}
                    <div className="w-full md:w-1/2">

                        <span className="inline-block text-red-600 font-semibold uppercase tracking-widest text-sm mb-4">
                            Who We Are
                        </span>

                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                            Building digital
                            <span className="block text-red-600">
                                products for
                            </span>
                            <span className="block">
                                world changers
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-600 text-base md:text-lg leading-8 max-w-xl">
                            We are a passionate team dedicated to creating modern,
                            innovative and user-friendly digital experiences. Our goal is
                            to transform ideas into powerful digital products that help
                            businesses grow and make an impact.
                        </p>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        Creative Solutions
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        Innovative ideas for modern businesses.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600 font-bold">
                                    ✓
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        Quality Work
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        We focus on quality and user experience.
                                    </p>
                                </div>
                            </div>

                        </div>

                        {/* Button */}
                        {/* <button className="mt-8 px-7 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition duration-300 shadow-lg hover:shadow-red-200">
              Explore Services
            </button> */}

                    </div>

                </div>

            </section>

            {/* Why Choose Us */}
            <section className="mt-12">
                <span className=" text-red-500 font-semibold flex justify-center items-center">Our Values</span>
                <h1 className="flex justify-center items-center text-4xl font-bold mt-4">Why should you choose us ?</h1>
                <p className="text-gray-500 flex justify-center items-center mt-4">We’re a group of friendly, creative, and passionate individuals that love working together to serve our clients</p>
            </section>

            {/* Our Values */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {values.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 
                 hover:shadow-xl hover:-translate-y-1 transition duration-300"
                        >
                            <h1 className="text-2xl font-bold text-red-600 mb-3">
                                {value.title}
                            </h1>

                            <p className="text-gray-600 leading-7">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Design Process */}
            <section className="mt-20">
                <span className="flex justify-center items-center text-red-500 font-bold">Process</span>
                <h1 className="flex justify-center items-center text-4xl mt-3 font-bold">Our Design Process</h1>
                <p className="text-gray-500 flex items-center justify-center mt-3">Our comprehensive design strategy ensures a perfectly crafted product for your business.</p>

                {/* idea */}
                <div className="max-w-6xl mx-auto px-6 py-16">

                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                        {/* Left Side */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full flex justify-center">

                                <div className="relative rounded-3xl p-2 w-full">
                                    <Image
                                        src="/idea.png"
                                        width={1200}
                                        height={1200}
                                        alt="Idea image"
                                        className="w-full max-w-none object-contain"
                                    />
                                </div>

                            </div>
                        </div>


                        {/* Right Side */}
                        <div className="w-full md:w-1/2">

                            {/* Step */}
                            <span className="inline-block text-red-600 font-semibold uppercase tracking-widest text-sm mb-3">
                                Step One
                            </span>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                                Idea
                            </h2>

                            {/* Line */}
                            <div className="w-16 h-1 bg-red-600 rounded-full mb-6"></div>

                            {/* Description */}
                            <p className="text-gray-600 text-base md:text-lg leading-8">
                                Startup owners who want to build great products have different
                                ideas of how they want their startup to be. At that point, they
                                are basically just ideas waiting to come to life. Our workflow
                                process ensures that these ideas are understood perfectly by our
                                tech talent teams, with the best-fit teams chosen through an
                                efficient and automated process.
                            </p>

                            {/* Small Feature */}
                            <div className="flex items-center gap-4 mt-8">

                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl">
                                    01
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        From Idea to Reality
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        We turn your ideas into meaningful digital products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Design */}
            <section className="mt-20">

                <div className="max-w-6xl mx-auto px-6 py-16">

                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                        {/* Left Side */}
                        <div className="w-full md:w-1/2">

                            {/* Step */}
                            <span className="inline-block text-red-600 font-semibold uppercase tracking-widest text-sm mb-3">
                                Step Two
                            </span>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                                Design
                            </h2>

                            {/* Line */}
                            <div className="w-16 h-1 bg-red-600 rounded-full mb-6"></div>

                            {/* Description */}
                            <p className="text-gray-600 text-base md:text-lg leading-8">
                                The importance of design sprint ensures that ideas are well tested with potential customers to be able to solve the problems or challenges that may be faced when the product is fully out to the market. With 3-5 days being used on the Brindocorp platform for design sprint planning, it allows for the chosen tech teams to understand the problem, ideate, decide, prototype and lastly test the product to get relevant feedback from users.
                            </p>

                            {/* Small Feature */}
                            <div className="flex items-center gap-4 mt-8">

                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl">
                                    02
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        From idea to design
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        We turn your ideas into meaningful designs.
                                    </p>
                                </div>
                            </div>
                        </div>



                        {/* Right Side */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full">

                                {/* Decorative Circle */}
                                {/* <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-100 rounded-full"></div> */}

                                {/* Image Box */}
                                <div className="relative  rounded-3xl p-8 ">
                                    <Image
                                        src="/design.png"
                                        width={1200}
                                        height={1200}
                                        alt="Idea image"
                                        className="w-full max-w-none object-contain"
                                    />
                                </div>

                                {/* Bottom Decoration */}
                                {/* <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-red-600 rounded-full"></div> */}

                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Development */}

            <section>
                <div className="max-w-6xl mx-auto px-6 py-16">

                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                        {/* Left Side */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full">

                                {/* Decorative Circle */}
                                {/* <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-100 rounded-full"></div> */}

                                {/* Image Box */}
                                <div className="relative  rounded-3xl p-8 ">
                                    <Image
                                        src="/development.png"
                                        width={1200}
                                        height={1200}
                                        alt="Idea image"
                                        className="w-full max-w-none object-contain"
                                    />
                                </div>

                                {/* Bottom Decoration */}
                                {/* <div className="absolute -bottom-5 -right-5 w-16 h-16 bg-red-600 rounded-full"></div> */}

                            </div>
                        </div>


                        {/* Right Side */}
                        <div className="w-full md:w-1/2">

                            {/* Step */}
                            <span className="inline-block text-red-600 font-semibold uppercase tracking-widest text-sm mb-3">
                                Step Three
                            </span>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                                Development
                            </h2>

                            {/* Line */}
                            <div className="w-16 h-1 bg-red-600 rounded-full mb-6"></div>

                            {/* Description */}
                            <p className="text-gray-600 text-base md:text-lg leading-8">
                                Owners are involved in every stage of a product development process which is done seamlessly and with ease. Quite awesome! and that is why startup owners are focused on using our platform to build their products. From effectively being able to select a tech team which consists primarily of a Front end, Back end, Product Designer and a Product Manager, to the product being developed against the design, effective collaboration between the product owner and talent team to the product being fully ready for deployment
                            </p>

                            {/* Small Feature */}
                            <div className="flex items-center gap-4 mt-8">

                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl">
                                    03
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        From design to code
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        We turn your designs into meaningful digital products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testing */}
            <section className="mt-20">

                <div className="max-w-6xl mx-auto px-6 py-16">

                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                        {/* Left Side */}
                        <div className="w-full md:w-1/2">

                            {/* Step */}
                            <span className="inline-block text-red-600 font-semibold uppercase tracking-widest text-sm mb-3">
                                Step Four
                            </span>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                                Testing
                            </h2>

                            {/* Line */}
                            <div className="w-16 h-1 bg-red-600 rounded-full mb-6"></div>

                            {/* Description */}
                            <p className="text-gray-600 text-base md:text-lg leading-8">
                                The importance of design sprint ensures that ideas are well tested with potential customers to be able to solve the problems or challenges that may be faced when the product is fully out to the market. With 3-5 days being used on the Brindocorp platform for design sprint planning, it allows for the chosen tech teams to understand the problem, ideate, decide, prototype and lastly test the product to get relevant feedback from users.
                            </p>

                            {/* Small Feature */}
                            <div className="flex items-center gap-4 mt-8">

                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl">
                                    04
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        From development to testing
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        We test the code to make it error free.
                                    </p>
                                </div>
                            </div>
                        </div>



                        {/* Right Side */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full">
                                {/* Image Box */}
                                <div className="relative  rounded-3xl p-8 ">
                                    <Image
                                        src="/testing.png"
                                        width={1200}
                                        height={1200}
                                        alt="Idea image"
                                        className="w-full max-w-none object-contain"
                                    />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Deployment */}

            <section>
                <div className="max-w-6xl mx-auto px-6 py-16">

                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                        {/* Left Side */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full">


                                {/* Image Box */}
                                <div className="relative  rounded-3xl p-8 ">
                                    <Image
                                        src="/deployment.png"
                                        width={1200}
                                        height={1200}
                                        alt="Idea image"
                                        className="w-full max-w-none object-contain"
                                    />
                                </div>

                        

                            </div>
                        </div>


                        {/* Right Side */}
                        <div className="w-full md:w-1/2">

                            {/* Step */}
                            <span className="inline-block text-red-600 font-semibold uppercase tracking-widest text-sm mb-3">
                                Step Five
                            </span>

                            {/* Heading */}
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
                                Deployment
                            </h2>

                            {/* Line */}
                            <div className="w-16 h-1 bg-red-600 rounded-full mb-6"></div>

                            {/* Description */}
                            <p className="text-gray-600 text-base md:text-lg leading-8">
                                Owners are involved in every stage of a product development process which is done seamlessly and with ease. Quite awesome! and that is why startup owners are focused on using our platform to build their products. From effectively being able to select a tech team which consists primarily of a Front end, Back end, Product Designer and a Product Manager, to the product being developed against the design, effective collaboration between the product owner and talent team to the product being fully ready for deployment
                            </p>

                            {/* Small Feature */}
                            <div className="flex items-center gap-4 mt-8">

                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold text-xl">
                                    05
                                </div>

                                <div>
                                    <h3 className="font-bold text-gray-900">
                                        From testing to deployment
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1">
                                        We deploy the tested and bug free products.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default Page;