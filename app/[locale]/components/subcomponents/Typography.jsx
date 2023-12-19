import { cn } from "@/lib/utils";

export const SectionHeading = ({ title, locale, className }) => {
  return (
    <h2
      className={cn(
        `py-dynamic-heading text-center text-3xl md:text-5xl font-bold text-main-bg ${className}`,
      )}
    >
      {!title[`${locale}`] ? title["pl"] : title[`${locale}`]}
    </h2>
  );
};
export const H1 = ({ text, locale, className }) => {
  return (
    <h1 className={cn(`py-dynamic-heading text-center ${className}`)}>
      {!text[`${locale}`] ? text["pl"] : text[`${locale}`]}
    </h1>
  );
};

export const H3 = ({ text, locale }) => {
  return <></>;
};

export const H4 = ({ text, locale }) => {
  return <></>;
};

export const Paragraph = ({ text, locale, className }) => {
  return (
    <p className={cn(`text-xl leading-8 ${className}`)}>
      {!text[`${locale}`] ? text["pl"] : text[`${locale}`]}
    </p>
  );
};
