"use client";

import SanityImage from "@/app/[locale]/components/SanityImage";
import Europe from "@/app/[locale]/components/Europe";
import {
  Paragraph,
  SectionHeading,
} from "@/app/[locale]/components/subcomponents/Typography";

const AboutUs = ({ aboutUs, locale }) => {
  const { firstRow, secondRow, title, image } = aboutUs;
  return (
    <section
      id="aboutus"
      className="relative  my-dynamic pb-dynamic scroll-mt-14 h-[1200px] overflow-clip lg:h-full"
    >
      <div className="wrapper text-wrap relative z-[1] pointer-events-none">
        <SectionHeading title={title} locale={locale} />
        <div className="flex w-full flex-col gap-dynamic lg:w-1/2">
          <Paragraph text={firstRow} locale={locale} />
          <Paragraph text={secondRow} locale={locale} />
        </div>
      </div>
      <Europe className="absolute -right-[50vw] top-0 z-0 block h-[1200px] opacity-30 lg:right-0 lg:h-full lg:opacity-100" />
    </section>
  );
};

export default AboutUs;
