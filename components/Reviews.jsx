"use client";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

//Swiper React imports
import { Swiper, SwiperSlide } from "swiper/react";

import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const reviewsData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "John Doe",
    job: "CEO, Company",
    review:
      "Lorum ipsum dolor sit amet, consectetur adipiscing elit. Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "John Doe",
    job: "CEO, Company",
    review:
      "Lorum ipsum dolor sit amet, consectetur adipiscing elit. Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "John Doe",
    job: "CEO, Company",
    review:
      "Lorum ipsum dolor sit amet, consectetur adipiscing elit. Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "John Doe",
    job: "CEO, Company",
    review:
      "Lorum ipsum dolor sit amet, consectetur adipiscing elit. Lorum ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto ">Reviews</h2>
        {/* slider */}
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="h-[350px]"
        >
          {reviewsData.map((review, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                  <CardHeader className="p-0 mb-10">
                    <div className="flex items-center gap-x-4">
                      {/* Image */}
                      <Image
                        src={review.avatar}
                        alt={review.name}
                        width={70}
                        height={70}
                        priority
                        className="rounded-full"
                      />
                      <div className="flex flex-col">
                        <CardTitle>{review.name}</CardTitle>
                        <p>{review.job}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="text-lg text-muted-foreground">
                    {review.review}
                  </CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
