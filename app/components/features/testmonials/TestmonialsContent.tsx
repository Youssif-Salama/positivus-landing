"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import CommonParagraph from "../../common/CommonParagraph";

export function TestmonialsContent() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <div className="relative overflow-hidden rounded-[40px] text-main-light bg-main-dark py-12">
      <Carousel setApi={setApi} opts={{ align: "center" }} className="w-full">
        <CarouselContent className="px-[10%] -mx-[10%]">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-[80%] md:basis-[60%] lg:basis-[40%] flex-shrink-0 transition-all duration-300 ease-in-out"
            >
              <div className="w-full h-full overflow-hidden rounded-xl shadow-lg relative">
                <CommonParagraph
                  paragraphClasses="
                  xl:max-w-[580px] xl:text-[18px] xl:top-12 xl:left-10
                  lg:text-[14px] lg:top-8 lg:left-5 ldg:max-w-[480px]
                  max-md:text-[10px] max-md:top-3 max-md:left-3
                  absolute text-white border border-transparent"
                >
                  <p>
                    {"\""}We have been working with Positivus for the past year and
                    have seen a significant increase in website traffic and
                    leads as a result of their efforts. The team is
                    professional, responsive, and truly cares about the success
                    of our business. We highly recommend Positivus to any
                    company looking to grow their online presence.{"\""}
                  </p>
                </CommonParagraph>
                <Image
                  src="/assets/testmonials.webp"
                  alt="testimonial"
                  width={606}
                  height={266}
                  className="w-full h-auto"
                />
                <div className="ml-18 mt-2">
                  <h4 className="text-main-green">John Doe</h4>
                  <CommonParagraph paragraphClasses="lg:max-w-[531px] font-normal text-white">Marketing Director at XYZ Corp</CommonParagraph>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Custom Prev - Dots - Next */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button onClick={scrollPrev}>
          <ArrowLeft />
        </button>

        <div className="flex items-center gap-2 justify-between">
          {Array.from({ length: count }).map((_, index) => (
            <div key={index} className="w-full h-full ">
              <Image
                src={
                  current === index
                    ? "/assets/icon/sparkl-green.webp"
                    : "/assets/icon/sparkl-light.webp"
                }
                alt="dot"
                width={14}
                height={14}
              />
            </div>
          ))}
        </div>

        <button onClick={scrollNext}>
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
