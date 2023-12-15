import SanityImage from "@/app/[locale]/components/SanityImage";
import {
  Paragraph,
  SectionHeading,
} from "@/app/[locale]/components/subcomponents/Typography";

export function IonThumbsUpSharp(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 512 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="m456 192l-156-12l23-89.4c6-26.6-.78-41.87-22.47-48.6l-34.69-9.85a4 4 0 0 0-4.4 1.72l-129 202.34a8 8 0 0 1-6.81 3.81H16V448h117.61a48 48 0 0 1 15.18 2.46l76.3 25.43a80 80 0 0 0 25.3 4.11h177.93c19 0 31.5-13.52 35.23-32.16L496 305.58V232c0-22.06-18-38-40-40Z"
      ></path>
    </svg>
  );
}

const Reviews = ({ reviews, locale }) => {
  const {
    badge,
    clients,
    description,
    icon,
    rating,
    ratingDescription,
    title,
  } = reviews;
  return (
    <section
      id="reviews"
      className="my-dynamic-1/2 py-dynamic bg-opineo scroll-mt-14"
    >
      <div className="wrapper flex flex-col gap-0">
        <SectionHeading
          className="text-main-fr"
          title={title}
          locale={locale}
        />
        <div className="flex flex-wrap justify-center gap-dynamic mb-dynamic xl:justify-between">
          {clients.map((client) => {
            return (
              <div key={client._key} className="max-w-[340px]">
                <div className="rounded-3xl bg-main-fr/60 p-8 text-xl font-light italic text-main-bg">
                  <div className="comment">
                    <p className="comment__text">
                      {!client.descritpion[`${locale}`]
                        ? client.descritpion["pl"]
                        : client.descritpion[`${locale}`]}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-between px-4 py-2">
                  <p className="client__name">
                    {!client.name[`${locale}`]
                      ? client.name["pl"]
                      : client.name[`${locale}`]}
                  </p>
                  <SanityImage className="w-24" data={icon.asset} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-dynamic lg:flex-nowrap lg:justify-between">
          <div className="flex max-w-[650px] flex-col gap-dynamic-1/3 lg:w-1/2">
            <SanityImage className="w-full" data={icon.asset} />
            <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-between">
              <div className="flex flex-col items-center justify-center gap-4">
                <h3 className="text-7xl tracking-tighter text-main-fr">
                  <strong className="font-black">{rating}</strong> / 5
                </h3>
                <div className="flex items-center gap-2">
                  <IonThumbsUpSharp className="h-8 w-8 rounded-full bg-main-fr p-2 text-opineo" />
                  <p className="percent__text">97%</p>
                </div>
                <p className="text-xs text-main-fr">
                  {!ratingDescription[`${locale}`]
                    ? ratingDescription["pl"]
                    : ratingDescription[`${locale}`]}
                </p>
              </div>
              <SanityImage className="" data={badge.asset} />
            </div>
          </div>
          <Paragraph
            className="text-main-fr lg:w-1/2"
            text={description}
            locale={locale}
          />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
