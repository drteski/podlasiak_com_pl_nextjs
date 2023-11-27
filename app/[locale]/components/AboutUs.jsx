import SanityImage from "@/app/[locale]/components/SanityImage";

const AboutUs = ({ aboutUs, locale }) => {
  const { firstRow, secondRow, title, image } = aboutUs;
  return (
    <section id="aboutus" className="relative h-[100dvh]">
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
      <SanityImage
        className="absolute inset-0 z-0 block h-full object-cover object-center opacity-30 lg:opacity-100"
        data={image.asset}
      />
    </section>
  );
};

export default AboutUs;
