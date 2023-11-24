"use client";

import SanityImage from "@/app/[locale]/components/SanityImage";
import Link from "next/link";
import { useCallback } from "react";

const CountriesNavbar = ({ countriesData }) => {
  const countries = useCallback(() => {
    return countriesData.sort((a, b) => a.prority - b.prority);
  }, [countriesData]);
  return (
    <>
      <div className="language-flag bg-main-fr/20 right-dynamic-1/2 absolute top-1/2 z-10 flex -translate-y-1/2 flex-col gap-2 rounded-sm p-2.5">
        {countries().map((country) => {
          return (
            <Link
              className="lang group/flag relative"
              key={country.name}
              href={country.link}
            >
              <SanityImage
                className="w-6 transition group-hover/flag:scale-125"
                data={country.flag.asset}
              />
              <div className="bg-main-fr text-main-bg pointer-events-none absolute -top-[6px] right-10 whitespace-nowrap rounded-sm px-3.5 py-1.5 text-xs opacity-0 transition group-hover/flag:opacity-100">
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
