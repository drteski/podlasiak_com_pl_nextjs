import SanityImage from "@/app/[locale]/components/SanityImage";
import { SectionHeading } from "@/app/[locale]/components/subcomponents/Typography";
import FeatureTile from "@/app/[locale]/components/subcomponents/FeatureTile";

const Retailer = ({ qualities, locale }) => {
  const { title, features } = qualities;
  return (
    <section
      id="features"
      className="wrapper my-dynamic pb-dynamic scroll-mt-14"
    >
      <SectionHeading title={title} locale={locale} />
      <div className="gap-dynamic-1/2 flex flex-wrap justify-center box-width:justify-between">
        {features.map((feature) => (
          <FeatureTile key={feature._key} feature={feature} locale={locale} />
        ))}
      </div>
    </section>
  );
};

export default Retailer;
