"use client";

import Link from "next/link";
import Navbar from "@/app/[locale]/components/Navbar";
import SanityImage from "@/app/[locale]/components/SanityImage";
import CountriesNavbar from "@/app/[locale]/components/CountriesNavbar";

const Header = ({ navbar, countries, headerImage, locale }) => {
  return (
    <header id="hero" className="relative mx-auto my-0 h-[100dvh]">
      <div className="absolute inset-0 z-0 h-[100dvh] overflow-clip">
        <SanityImage
          className="h-[100dvh] w-full object-cover"
          data={headerImage.image.asset}
        />
        <div className="absolute inset-0 z-[5] h-full w-full bg-[#0000002C]"></div>
      </div>
      <nav className="fixed z-10 mx-auto my-0 w-full py-4">
        <div className="wrapper flex items-center justify-between">
          <Link href={`/${locale}`}>
            <SanityImage
              className="w-[200px] transition hover:opacity-75"
              data={navbar.imageLight.asset}
            />
          </Link>
          <Navbar locale={locale} menuItems={navbar.links} />
        </div>
      </nav>
      <CountriesNavbar countriesData={countries} />
    </header>
  );
};

export default Header;
