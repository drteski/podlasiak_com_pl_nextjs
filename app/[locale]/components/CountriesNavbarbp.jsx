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
        className={`absolute flex flex-wrap items-center justify-center gap-4 bg-main-fr/40 rounded-2xl left-0 right-0 p-4 bottom-dynamic-1/2 mx-dynamic-1/2`}
      >
        {countries().map((country) => {
          return (
            <Link
              className="lang group/flag relative"
              key={country.name}
              href={country.link}
            >
              <SanityImage
                className="w-8 lg:w-10 transition group-hover/flag:scale-125"
                data={country.flag.asset}
              />
              <div className="bg-main-fr text-main-bg pointer-events-none absolute -top-14 right-1/2 translate-x-1/2 whitespace-nowrap rounded-sm px-3.5 py-1.5 text-xs opacity-0 transition group-hover/flag:opacity-100">
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
