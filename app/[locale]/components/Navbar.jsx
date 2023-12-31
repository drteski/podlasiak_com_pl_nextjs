"use client";
import Link from "next/link";
import useWindowResize from "@/hooks/useWindowResize";
import Hamburger from "hamburger-react";
import { useState } from "react";

const Navbar = ({ scrolled, menuItems, locale }) => {
  const [active, setActive] = useState(false);
  const size = useWindowResize();
  if (size.width > 1200) {
    return (
      <div className="flex items-center">
        {menuItems.map((item) => (
          <Link
            className={`text-main-bg hover:bg-main-bg/20 block font-light text-sm rounded-sm px-4 py-1.5 transition`}
            key={item._key}
            href={item.url}
            aria-label={
              !item.title[`${locale}`]
                ? item.title["pl"]
                : item.title[`${locale}`]
            }
          >
            {!item.title[`${locale}`]
              ? item.title["pl"]
              : item.title[`${locale}`]}
          </Link>
        ))}
      </div>
    );
  }
  return (
    <>
      <div className="relative z-20">
        <Hamburger
          color={"black"}
          toggled={active}
          aria-label="Menu"
          onToggle={(status) => setActive(status)}
        />
      </div>
      <div
        className={`absolute z-10  right-0 p-dynamic left-0 ${
          active ? "translate-x-0" : `translate-x-full`
        } bottom-0 ${
          !scrolled ? "-top-4" : "-top-2"
        } h-[100dvh] justify-end items-end flex flex-col bg-main-fr text-main-bg transition`}
      >
        {menuItems.map((item) => (
          <Link
            className="hover:bg-main-fr/20 block text-2xl font-light rounded-sm py-5 transition"
            key={item._key}
            href={item.url}
            aria-label={
              !item.title[`${locale}`]
                ? item.title["pl"]
                : item.title[`${locale}`]
            }
            onClick={() => setActive(false)}
          >
            {!item.title[`${locale}`]
              ? item.title["pl"]
              : item.title[`${locale}`]}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
