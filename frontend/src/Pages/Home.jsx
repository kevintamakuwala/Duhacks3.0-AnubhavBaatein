import React from "react";
import vector from "../custom_components/vector.svg";
import Search from "@/custom_components/Search";
import Static_Card from "@/custom_components/Static_Card";
import Testimonial from "@/custom_components/Testimonial";
import PopularCompanies from "@/custom_components/PopularCompanies";
import TopExperience from "@/custom_components/TopExperience";
import PopularCategory from "@/custom_components/PopularCategory";
import { CarouselList } from "@/custom_components/CarouselList";

function Home() {
    return (
        <div>
            {/* // navbar // main content */}
            <div>
                <div className="w-auto md:h-auto flex flex-col sm:flex-row items-center">
                    <div className="flex flex-col lg:gap-48 justify-between md:max-h-fit">
                        <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight lg:text-5xl sm:mx-[10%] mt-5 mx-3">
                            One step closer to your Dream company
                        </h1>

                        <div className="w-fit lg:mt-0 mt-10 sm:mx-[10%] sm:mr-[25%]">
                            <p className="mb-5 mx-3">
                                Find the alumni working at your dream Companies ,dive into their experiences ,connect with them and much more
                            </p>
                            <Search />
                        </div>
                    </div>
                    <img className="  mt-4 lg:w-[50%] sm:w-[44%] lg:mb-16" src={vector} alt="SVG Image" />
                </div>


                <div>
                    <Static_Card />
                </div>
            </div>
            <div class="p-4 text-base leading-7 text-gray-600 w-10/12 md:h-auto md:flex-row items-center justify-between py-9">
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Popular Companies</h2>
                <PopularCompanies />
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Top Category</h2>
                <PopularCategory />
                <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">Top Testimonials</h2>
                <Testimonial/>
            </div>
        </div>
    );
}

export default Home;