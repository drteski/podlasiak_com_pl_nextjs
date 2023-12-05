"use client";

import SanityImage from "@/app/[locale]/components/SanityImage";
import Link from "next/link";
import { useCallback } from "react";
import useWindowResize from "@/hooks/useWindowResize";

const CountriesNavbar = ({ countriesData }) => {
  const size = useWindowResize();
  const countries = useCallback(() => {
    return countriesData.sort((a, b) => a.prority - b.prority);
  }, [countriesData]);
  return (
    <>
      <div
        className={`absolute flex bg-main-fr/30 ${
          size.height < 900 && size.width > 1024
            ? "h-[75dvh] w-20 justify-start"
            : "justify-center"
        } bottom-dynamic-1/2 mx-dynamic-1/2 p-4 gap-4 items-center  flex-wrap rounded-md lg:gap-2 lg:p-2.5 lg:bottom-auto lg:top-1/2 lg:-translate-y-1/2 lg:right-dynamic-1/2 lg:flex-col`}
      >
        {countries().map((country) => {
          return (
            <Link
              className="lang group/flag relative"
              key={country.name}
              href={country.link}
            >
              <SanityImage
                className="w-8 lg:w-6 transition group-hover/flag:scale-125"
                data={country.flag.asset}
              />
              <div className="bg-main-fr text-main-bg pointer-events-none absolute -top-9 -right-1/2 lg:-top-[6px] lg:right-10 whitespace-nowrap rounded-sm px-3.5 py-1.5 text-xs opacity-0 transition group-hover/flag:opacity-100">
                {country.name}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default CountriesNavbar;
