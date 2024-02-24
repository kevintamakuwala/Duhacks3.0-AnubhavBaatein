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
    <div className="flex items-center justify-center flex-col py-10 w-screen">
      {/* // navbar // main content */}
      <div>
        <div className="w-10/12 md:h-auto flex flex-col md:flex-row lg:w-full items-center justify-between">
          <div className="flex flex-col justify-between md:h-full">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Find Job that suits your interest & skills
            </h1>
            <p>
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam
              in scelerisque leo, eget sollicitudin velit bestibulum.
            </p>
          </div>
          <img className="self-end mt-4 md:mt-0" src={vector} alt="SVG Image" />
        </div>

        <div className="w-fit">
          <Search />
        </div>
        <div>
          <Static_Card />
        </div>
      </div>
      <div class="p-4 text-base leading-7 text-gray-600 w-10/12 md:h-auto md:flex-row items-center justify-between py-9">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Popular Companies
        </h2>
        <PopularCompanies />
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Top Category
        </h2>
        <PopularCategory />
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Top Testimonials
        </h2>
      </div>
      <div className="flex justify-center">
        <CarouselList />
      </div>
    </div>
  );
}

export default Home;
