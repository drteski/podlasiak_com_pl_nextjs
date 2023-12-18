"use client";

import SanityImage from "@/app/[locale]/components/SanityImage";
import { cn } from "@/lib/utils";
import { H1 } from "@/app/[locale]/components/subcomponents/Typography";
import { useLayoutEffect, useState } from "react";

const Hero = ({ className, hero, locale }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  useLayoutEffect(() => {
    const interval = setInterval(() => {
      if (currentSlide === hero.heros.length - 1) return setCurrentSlide(0);
      return setCurrentSlide(currentSlide + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);
  return (
    <div
      className={`${cn(
        className,
        "relative h-[calc(100dvh_-_var(--navbar-height)_-_var(--countriesbar-height))]  ",
      )}`}
    >
      <div className="absolute top-0 bottom-0 left-dynamic-1/2 right-dynamic-1/2 country-width:left-6 country-width:right-6 h-full rounded-3xl overflow-clip">
        <div className="relative h-full w-full">
          {hero.heros &&
            hero.heros.map((heroContent, index) => {
              return (
                <div
                  key={heroContent._key}
                  className={`absolute ${
                    index === currentSlide ? "opacity-100" : "opacity-0"
                  } h-full transition duration-300 scale-animation`}
                >
                  <SanityImage
                    className="h-full object-center object-cover"
                    data={heroContent.image.asset}
                  />
                </div>
              );
            })}
          <div className="absolute flex flex-col justify-center text-main-fr items inset-0 bg-[linear-gradient(0deg,_rgba(0,0,0,0.75)_0%,_rgba(0,212,255,0)_100%)]">
            {hero.title && (
              <H1
                className="text-2xl opacity-80 sm:text-3xl md:text-5xl lg:text-6xl hd:text-7xl px-dynamic-1/2 font-black font-gabrito tracking-wide text-main-fr uppercase"
                text={hero.title}
                locale={locale}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
