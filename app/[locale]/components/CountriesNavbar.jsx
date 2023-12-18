"use client";

import SanityImage from "@/app/[locale]/components/SanityImage";
import Link from "next/link";
import { forwardRef, useCallback } from "react";

const CountriesNavbar = forwardRef(({ countriesData }, ref) => {
  const countries = useCallback(() => {
    return countriesData.sort((a, b) => a.prority - b.prority);
  }, [countriesData]);
  return (
    <>
      <div
        ref={ref}
        className={`flex flex-wrap h-fit items-center justify-center gap-4 bg-main-fr/40 py-6 bottom-dynamic-1/2 mx-dynamic-1/2`}
      >
        {countries().map((country) => {
          return (
            <Link
              className="lang group/flag relative block"
              key={country.name}
              href={country.link}
            >
              <SanityImage
                className="w-8 lg:w-10 transition group-hover/flag:scale-125 rounded-sm border border-main-bg/40"
                data={country.flag.asset}
              />
              <div className="bg-main-fr border text-main-bg pointer-events-none absolute -top-14 right-1/2 translate-x-1/2 whitespace-nowrap rounded-sm px-3.5 py-1.5 text-xs opacity-0 transition group-hover/flag:opacity-100">
                {country.name}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
});

CountriesNavbar.displayName = "CountriesNavbar";

export default CountriesNavbar;
