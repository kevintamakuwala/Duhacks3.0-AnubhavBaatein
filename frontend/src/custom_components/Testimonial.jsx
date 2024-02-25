import { topTestimonials } from "@/Services/UserService";
import { useEffect, useState } from "react";

// const testimonials = [
//     {
//         datetime: "2020-03-16",
//         tag: "SDE",
//         title: "My SDE Experience",
//         description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//         username: "Michal farnandiz",
//         exp: "SDE",
//     },
//     {
//         datetime: "2020-03-16",
//         tag: "SDE",
//         title: "My SDE Experience",
//         description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//         username: "Michal farnandiz",
//         exp: "SDE",
//     },
//     {
//         datetime: "2020-03-16",
//         tag: "SDE",
//         title: "My SDE Experience",
//         description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//         username: "Michal farnandiz",
//         exp: "SDE",
//     },
//     {
//         datetime: "2020-03-16",
//         tag: "SDE",
//         title: "My SDE Experience",
//         description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//         username: "Michal farnandiz",
//         exp: "SDE",
//     },
//     {
//         datetime: "2020-03-16",
//         tag: "SDE",
//         title: "My SDE Experience",
//         description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//         username: "Michal farnandiz",
//         exp: "SDE",
//     },
//     {
//         datetime: "2020-03-16",
//         tag: "SDE",
//         title: "My SDE Experience",
//         description: "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
//         username: "Michal farnandiz",
//         exp: "SDE",
//     },
// ]

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await topTestimonials();
            setTestimonials(data)
          } catch (error) {
            console.error('Error fetching experiences:', error);
          }
    
        };
    
        fetchData();
      }, []);






    return (
        <div class="bg-white ">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-16 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                    {testimonials.map((testimonials, index) => (
                        <div key={index}>
                    <article class="flex max-w-xl flex-col items-start justify-between">
                        
                        <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href="#">
                                    {testimonials.experiences[0].job.title}
                                </a>
                            </h3>
                        <div class="flex items-center gap-x-4 text-xs mt-2">
                            {/* <time datetime="2020-03-16" class="text-gray-500">{testimonials.datetime}</time> */}
                            <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">{testimonials.experiences[0].difficultyLevel}</a> 

                            <p>Experience for {testimonials.experiences[0].company.name}</p>
                        </div>
                        <div class="group relative">

                            <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{testimonials.experiences[0].description}</p>
                        </div>
                        <div class="relative mt-8 flex items-center gap-x-4">
                            <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="h-10 w-10 rounded-full bg-gray-50"/>
                                <div class="text-sm leading-6">
                                    <p class="font-semibold text-gray-900">
                                        <a href="#">
                                            <span class="absolute inset-0"></span>
                                            {testimonials.name}
                                        </a>
                                    </p>
                                    <p class="text-gray-600">Current working at {testimonials.currentCompany}</p>
                                </div>
                        </div>
                    </article>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Testimonial;