import SanityImage from "@/app/[locale]/components/SanityImage";
import Europe from "@/app/[locale]/components/Europe";

const AboutUs = ({ aboutUs, locale }) => {
  const { firstRow, secondRow, title } = aboutUs;
  return (
    <section id="aboutus" className="wrapper relative">
      <div className="text-wrap relative z-[1]">
        <h2 className="p-dynamic text-center text-5xl font-bold text-main-bg">
          {!title[`${locale}`] ? title["pl"] : title[`${locale}`]}
        </h2>
        <div className="w-full lg:w-1/2">
          <p className="leading-2 text-xl">
            {!firstRow[`${locale}`] ? firstRow["pl"] : firstRow[`${locale}`]}
          </p>
          <p className="leading-2 text-xl">
            {!secondRow[`${locale}`] ? secondRow["pl"] : secondRow[`${locale}`]}
          </p>
        </div>
      </div>
      <Europe className="absolute -right-[var(--spacing)] top-0 z-0 h-[100dvh] hd:h-[1000px]" />
    </section>
  );
};

export default AboutUs;
