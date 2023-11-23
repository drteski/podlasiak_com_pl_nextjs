"use client";

import Link from "next/link";
import Navbar from "@/app/[locale]/components/Header/Navbar";
import SanityImage from "@/app/[locale]/components/sanityImage/SanityImage";
import CountriesBar from "@/sanity/schemas/CountriesBar";

const Header = ({ headerData, locale }) => {
  const { imageDark, imageLight, links, image, countries } = headerData;
  return (
    <header className="mx-auto my-0 h-[100dvh]">
      <div className="absolute inset-0 z-0 h-[100dvh] overflow-clip">
        <SanityImage
          className="h-[100dvh] w-full object-cover"
          data={image.asset}
        />
        <div className="absolute inset-0 z-[5] h-full w-full bg-[#0000002C]"></div>
      </div>
      <nav className="fixed z-10 mx-auto my-0 w-full py-4">
        <div className="wrapper flex items-center justify-between">
          <Link href={`/${locale}`}>
            <SanityImage
              className="w-[200px] transition hover:opacity-75"
              data={imageLight.asset}
            />
          </Link>
          <Navbar locale={locale} menuItems={links} />
        </div>
      </nav>
      <CountriesBar countriesData={countries} />
    </header>
  );
};

export default Header;
