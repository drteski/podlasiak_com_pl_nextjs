"use client";

import Link from "next/link";
import Navbar from "@/app/[locale]/components/Navbar";
import SanityImage from "@/app/[locale]/components/SanityImage";
import CountriesNavbar from "@/app/[locale]/components/CountriesNavbar";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Hero from "@/app/[locale]/components/subcomponents/Hero";
import useDimensions from "@/hooks/useDimensions";

const Header = ({ navbar, countries, headerImage, locale }) => {
  const countriesRef = useRef(null);
  const navbarRef = useRef(null);
  const countriesBar = useDimensions(countriesRef);
  const navBar = useDimensions(navbarRef);
  const [scrolled, setScrolled] = useState(0);
  document.documentElement.style.setProperty(
    "--navbar-height",
    `${navBar.ref.height}px`,
  );
  document.documentElement.style.setProperty(
    "--countriesbar-height",
    `${countriesBar.ref.height}px`,
  );
  useLayoutEffect(() => {
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
    <header id="hero" className="mx-auto">
      <div
        className={`grid grid-rows-[var(--navbar-height)_1fr_var(--countriesbar-height)] h-[100dvh]`}
      >
        <div className={`h-full`}>
          <nav
            ref={navbarRef}
            className={`fixed z-20  mx-auto my-0 w-full ${
              scrolled ? "py-2 bg-main-fr shadow-2xl" : "py-4 bg-main-fr"
            } transition-all`}
          >
            <div className="wrapper relative flex items-center justify-between">
              <Link href={`/${locale}`}>
                <SanityImage
                  className={`${
                    scrolled ? "w-[140px]" : "w-[200px]"
                  } transition-all hover:opacity-75`}
                  width={200}
                  height={50}
                  data={navbar.imageDark.asset}
                />
              </Link>
              <Navbar
                scrolled={scrolled}
                locale={locale}
                menuItems={navbar.links}
              />
            </div>
          </nav>
        </div>
        <Hero hero={headerImage} locale={locale} />
        <CountriesNavbar ref={countriesRef} countriesData={countries} />
      </div>
    </header>
  );
};

export default Header;
