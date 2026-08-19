import React from 'react'
import Image from 'next/image'

const page = () => {

    const designs = [
        {
            image: "/logoandbranding.png",
            title: "Logo & Branding",
            description: "We design professional looking yet simple Logo. Our designs are top notch and give that asthetic look"
        },
        {
            image: "/webdesigns.png",
            title: "Website Design",
            description: "We design professional looking websites. Our websites are responsive on all devices, from siple portfolio "
        },
        {
            image: "/uiux.png",
            title: "UI/UX Design",
            description: "We design professional User interface, we are the best for mockup or you are looking for an outstanding product"
        }
    ]

    const developments = [
        {
            image: "/content.png",
            title: "Content Managment System",
            description: "We design systems or implement new CMS solutions for existing websites, and we develop processes"
        },
        {
            image: "/shopify.png",
            title: "Shopify",
            description: "We offer customized Shopify themes and plugins to enhance your e-commerce site's functionality "
        },
        {
            image: "/ecommerce.png",
            title: "eCommerce",
            description: "We design, create and deploy ecommerce solution for your business,Bridging the gap"
        }
    ]

    const marketings = [
        {
            image: "/seo.png",
            title: "SEO",
            description: "We help improve and work on your websites seo and data for search engine recongnition"
        },
        {
            image: "/displaymarketing.png",
            title: "Display marketing",
            description: "From simple simple video adds to banners for your various campaigns we design and implement"
        },
        {
            image: "/socialmediamarketing.png",
            title: "Social Media marketing",
            description: "We help create and manage Social media pages, creating different campaign and content for your business, we will drive traffic to your targetted page."
        }
    ]

    return (
        <div>
            <h1 className='flex justify-center items-center font-bold text-4xl text-red-600 mt-12'>Our Services</h1>

            {/* service 1 */}
            <section>
                <h1 className='flex justify-center items-center font-bold text-2xl mt-3'>Service 01</h1>
                <h1 className='flex justify-center items-center font-bold text-red-600 text-2xl'>Design</h1>
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">{designs.map((design, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-7 border border-gray-100
                             shadow-md hover:shadow-2xltransition-all duration-300 hover:-translate-y-2">

                            {/* Image */}
                            <div className="w-full h-52  rounded-2xl flex items-center justify-center group-hover:bg-red-50transition duration-300">

                                <Image
                                    src={design.image}
                                    width={200}
                                    height={200}
                                    alt={design.title}
                                    className="object-contain rounded-full transition duration-300 
                       group-hover:scale-110"
                                />

                            </div>

                            {/* Content */}
                            <div className="mt-6">

                                <h1 className="text-2xl font-bold text-gray-900 
                         group-hover:text-red-600
                         transition duration-300">
                                    {design.title}
                                </h1>

                                <p className="mt-3 text-gray-600 leading-7 text-sm md:text-base">
                                    {design.description}
                                </p>

                            </div>
                        </div>
                    ))}

                    </div>

                </div>
            </section>

              {/* service 2 */}
            <section>
                <h1 className='flex justify-center items-center font-bold text-2xl mt-3'>Service 02</h1>
                <h1 className='flex justify-center items-center font-bold text-red-600 text-2xl'>Development</h1>
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">{developments.map((development, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-7 border border-gray-100
                             shadow-md hover:shadow-2xltransition-all duration-300 hover:-translate-y-2">

                            {/* Image */}
                            <div className="w-full h-52  rounded-2xl flex items-center justify-center group-hover:bg-red-50transition duration-300">

                                <Image
                                    src={development.image}
                                    width={200}
                                    height={200}
                                    alt={development.title}
                                    className="object-contain rounded-full transition duration-300 
                       group-hover:scale-110"
                                />

                            </div>

                            {/* Content */}
                            <div className="mt-6">

                                <h1 className="text-2xl font-bold text-gray-900 
                         group-hover:text-red-600
                         transition duration-300">
                                    {development.title}
                                </h1>

                                <p className="mt-3 text-gray-600 leading-7 text-sm md:text-base">
                                    {development.description}
                                </p>

                            </div>
                        </div>
                    ))}

                    </div>

                </div>
            </section>

            
              {/* service 3 */}
            <section>
                <h1 className='flex justify-center items-center font-bold text-2xl mt-3'>Service 03</h1>
                <h1 className='flex justify-center items-center font-bold text-red-600 text-2xl'>Online Marketing</h1>
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">{marketings.map((marketing, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-3xl p-7 border border-gray-100
                             shadow-md hover:shadow-2xltransition-all duration-300 hover:-translate-y-2">

                            {/* Image */}
                            <div className="w-full h-52  rounded-2xl flex items-center justify-center group-hover:bg-red-50transition duration-300">

                                <Image
                                    src={marketing.image}
                                    width={200}
                                    height={200}
                                    alt={marketing.title}
                                    className="object-contain transition duration-300 
                       group-hover:scale-110"
                                />

                            </div>

                            {/* Content */}
                            <div className="mt-6">

                                <h1 className="text-2xl font-bold text-gray-900 
                         group-hover:text-red-600
                         transition duration-300">
                                    {marketing.title}
                                </h1>

                                <p className="mt-3 text-gray-600 leading-7 text-sm md:text-base">
                                    {marketing.description}
                                </p>

                            </div>
                        </div>
                    ))}

                    </div>

                </div>
            </section>

        </div>
    )
}

export default page
