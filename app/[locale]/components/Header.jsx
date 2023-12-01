"use client";

import Link from "next/link";
import Navbar from "@/app/[locale]/components/Navbar";
import SanityImage from "@/app/[locale]/components/SanityImage";
import CountriesNavbar from "@/app/[locale]/components/CountriesNavbar";
import { useEffect, useState } from "react";

const Header = ({ navbar, countries, headerImage, locale }) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      if (windowHeight > 10) setScrolled(true);
      if (windowHeight < 10) setScrolled(false);
    }
  };
  return (
    <header id="hero" className="relative mx-auto my-0 h-[100dvh]">
      <div className="absolute inset-0 z-0 h-[100dvh] overflow-clip">
        <SanityImage
          className="h-[100dvh] w-full object-cover"
          data={headerImage.image.asset}
        />
        <div className="absolute inset-0 z-[5] h-full w-full bg-[#0000002C]"></div>
      </div>
      <nav
        className={`fixed z-20  mx-auto my-0 w-full ${
          scrolled ? "py-2 bg-main-fr shadow-2xl" : "py-4 bg-transparent"
        } transition-all`}
      >
        <div className="wrapper relative flex items-center justify-between">
          <Link href={`/${locale}`}>
            <SanityImage
              className={`${
                scrolled ? "w-[140px]" : "w-[200px]"
              } transition-all hover:opacity-75`}
              data={scrolled ? navbar.imageDark.asset : navbar.imageLight.asset}
            />
          </Link>
          <Navbar
            scrolled={scrolled}
            locale={locale}
            menuItems={navbar.links}
          />
        </div>
      </nav>
      <CountriesNavbar countriesData={countries} />
    </header>
  );
};

export default Header;
