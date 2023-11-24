import SanityImage from "@/app/[locale]/components/SanityImage";

const Retailer = ({ qualities, locale }) => {
  const { title, features } = qualities;
  return (
    <section id="features" className="wrapper">
      <h2 className="text-main-bg p-dynamic text-center text-5xl font-bold">
        {!title[`${locale}`] ? title["pl"] : title[`${locale}`]}
      </h2>
      <div className="gap-dynamic flex flex-wrap justify-center xl:justify-between">
        {features.map((feature) => {
          return (
            <div
              key={feature._key}
              className="border-main-bg/20 flex max-w-[340px] flex-col items-center rounded-2xl border-2 p-8 text-center"
            >
              <SanityImage className="h-48 w-48" data={feature.icon.asset} />
              <h4 className="text-main-bg/90 py-6 text-4xl font-bold">
                {!feature.title[`${locale}`]
                  ? feature.title["pl"]
                  : feature.title[`${locale}`]}
              </h4>
              <p className="text-lg">
                {!feature.descritpion[`${locale}`]
                  ? feature.descritpion["pl"]
                  : feature.descritpion[`${locale}`]}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Retailer;
