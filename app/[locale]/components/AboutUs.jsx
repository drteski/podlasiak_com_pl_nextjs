import SanityImage from "@/app/[locale]/components/SanityImage";
import Europe from "@/app/[locale]/components/Europe";

const AboutUs = ({ aboutUs, locale }) => {
  const { firstRow, secondRow, title, image } = aboutUs;
  return (
    <section
      id="aboutus"
      className="relative h-[1200px] overflow-clip lg:h-full"
    >
      <div className="wrapper text-wrap relative z-[1]">
        <h2 className="p-dynamic text-center text-5xl font-bold text-main-bg">
          {!title[`${locale}`] ? title["pl"] : title[`${locale}`]}
        </h2>
        <div className="flex w-full flex-col gap-dynamic lg:w-1/2">
          <p className="text-xl leading-8">
            {!firstRow[`${locale}`] ? firstRow["pl"] : firstRow[`${locale}`]}
          </p>
          <p className="text-xl leading-8">
            {!secondRow[`${locale}`] ? secondRow["pl"] : secondRow[`${locale}`]}
          </p>
        </div>
      </div>
      <Europe className="absolute -right-[50vw] top-0 z-0 block h-[1200px] opacity-30 lg:right-0 lg:h-full lg:opacity-100" />
    </section>
  );
};

export default AboutUs;
