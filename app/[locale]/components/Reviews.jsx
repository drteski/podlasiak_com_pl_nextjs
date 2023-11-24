import SanityImage from "@/app/[locale]/components/SanityImage";

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
    <section id="reviews" className="wrapper flex flex-col gap-dynamic-1/2">
      <h2 className="p-dynamic text-center text-5xl font-bold text-main-bg">
        {!title[`${locale}`] ? title["pl"] : title[`${locale}`]}
      </h2>
      <div class="flex flex-wrap justify-center gap-dynamic xl:justify-between">
        {clients.map((client) => {
          return (
            <div key={client._key} className="max-w-[340px]">
              <div className="rounded-3xl bg-opineo p-8 text-xl font-light italic text-main-fr">
                <div className="comment">
                  <p className="comment__text">
                    {!client.descritpion[`${locale}`]
                      ? client.descritpion["pl"]
                      : client.descritpion[`${locale}`]}
                  </p>
                </div>
              </div>
              <div class="flex items-center justify-between px-4 py-2">
                <p class="client__name">
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
      <div class="flex flex-wrap items-center justify-center gap-dynamic lg:flex-nowrap lg:justify-between">
        <div class="flex max-w-[650px] flex-col gap-6 lg:w-1/2">
          <SanityImage className="w-full" data={icon.asset} />
          <div class="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap md:justify-between">
            <div class="flex flex-col items-center justify-center gap-6">
              <h3 class="text-7xl tracking-tighter text-opineo">
                <strong className="font-black">{rating}</strong> / 5
              </h3>
              <div class="flex items-center gap-2">
                <IonThumbsUpSharp className="h-8 w-8 rounded-full bg-opineo p-2 text-main-fr" />
                <p class="percent__text">97%</p>
              </div>
              <p class="text-xs">
                {!ratingDescription[`${locale}`]
                  ? ratingDescription["pl"]
                  : ratingDescription[`${locale}`]}
              </p>
            </div>
            <SanityImage className="" data={badge.asset} />
          </div>
        </div>
        <p className="block max-w-[650px] text-xl leading-10 lg:w-1/2">
          {!description[`${locale}`]
            ? description["pl"]
            : description[`${locale}`]}
        </p>
      </div>
    </section>
  );
};

export default Reviews;
