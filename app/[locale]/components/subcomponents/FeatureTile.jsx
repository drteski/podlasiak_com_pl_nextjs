import SanityImage from "@/app/[locale]/components/SanityImage";
import { Paragraph } from "@/app/[locale]/components/subcomponents/Typography";

const FeatureTile = ({ feature, locale }) => {
  return (
    <div className="grid grid-rows-[2fr_1fr] bg-primary text-main-fr min-w-[288px] max-w-[400px] h-[550px] items-center rounded-3xl p-8">
      <SanityImage className="h-36 lg:h-48" data={feature.icon.asset} />
      <div className="h-full">
        <h4 className="text-main-fr pb-6 text-3xl text-center font-bold break-all">
          {!feature.title[`${locale}`]
            ? feature.title["pl"]
            : feature.title[`${locale}`]}
        </h4>
        <Paragraph
          className="text-base text-main-fr/70"
          text={feature.descritpion}
          locale={locale}
        />
      </div>
    </div>
  );
};

export default FeatureTile;
