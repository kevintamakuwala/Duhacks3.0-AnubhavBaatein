import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselList() {
  const testimonials = [
    {
      datetime: "2020-03-16",
      tag: "SDE",
      title: "My SDE Experience",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      username: "Michal farnandiz",
      exp: "SDE",
    },
    {
      datetime: "2020-03-16",
      tag: "SDE",
      title: "My SDE Experience",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      username: "Michal farnandiz",
      exp: "SDE",
    },
    {
      datetime: "2020-03-16",
      tag: "SDE",
      title: "My SDE Experience",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      username: "Michal farnandiz",
      exp: "SDE",
    },
    {
      datetime: "2020-03-16",
      tag: "SDE",
      title: "My SDE Experience",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      username: "Michal farnandiz",
      exp: "SDE",
    },
    {
      datetime: "2020-03-16",
      tag: "SDE",
      title: "My SDE Experience",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      username: "Michal farnandiz",
      exp: "SDE",
    },
    {
      datetime: "2020-03-16",
      tag: "SDE",
      title: "My SDE Experience",
      description:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
      username: "Michal farnandiz",
      exp: "SDE",
    },
  ];
  return (
    <Carousel
      className="flex items-center justify-center flex-col w-10/12 md:h-auto md:flex-row py-9" 
    >
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 border-2 m-2">
            <div className="p-1 flex flex-col items-start justify-between">
            <div key={index}>
                      <div className="flex items-center gap-x-4 text-xs">
                        <time datetime="2020-03-16" className="text-gray-500">
                          {testimonial.datetime}
                        </time>
                        <a
                          href="#"
                          className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                        >
                          {testimonial.tag}
                        </a>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                          <a href="#">
                            <span className="absolute inset-0"></span>
                            {testimonial.title}
                          </a>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                          {testimonial.description}
                        </p>
                      </div>
                      <div className="relative mt-8 flex items-center gap-x-4">
                        <img
                          src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-50"
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href="#">
                              <span className="absolute inset-0"></span>
                              {testimonial.username}
                            </a>
                          </p>
                          <p className="text-gray-600">{testimonial.exp}</p>
                        </div>
                      </div>
                  </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
