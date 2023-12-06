import SanityImage from "@/app/[locale]/components/SanityImage";
import Link from "next/link";
import { useCallback } from "react";

export function NimbusForbidden(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 16 16"
      {...props}
    >
      <path
        fill="currentColor"
        d="M8 .5A7.77 7.77 0 0 0 0 8a7.77 7.77 0 0 0 8 7.5A7.77 7.77 0 0 0 16 8A7.77 7.77 0 0 0 8 .5zM1.25 8A6 6 0 0 1 3 3.85L12.09 13A7.12 7.12 0 0 1 8 14.25A6.52 6.52 0 0 1 1.25 8zM13 12.15L3.91 3A7.12 7.12 0 0 1 8 1.75A6.52 6.52 0 0 1 14.75 8A6 6 0 0 1 13 12.15z"
      ></path>
    </svg>
  );
}

const Stores = ({ stores, locale }) => {
  const title = stores[0].title;
  const storesOrder = useCallback(() => {
    return stores.sort((a, b) => a.priority - b.priority);
  }, [stores]);
  console.log(stores, storesOrder);

  return (
    <section id="stores" className="wrapper">
      <h2 className="p-dynamic text-center text-5xl font-bold text-main-bg">
        {!title[`${locale}`] ? title["pl"] : title[`${locale}`]}
      </h2>
      <div className="flex flex-col gap-10">
        {storesOrder().map((store) => (
          <div
            key={store._id}
            className="flex flex-col items-center justify-center gap-10 border-b border-b-main-bg/30"
          >
            <SanityImage data={store.storeLogo} className="h-16 w-auto" />
            <div className="flex flex-wrap items-center justify-center gap-6 pb-10">
              {store.stores.map((storeCountry) => (
                <Link
                  key={storeCountry._key}
                  href={storeCountry.url}
                  target="_blank"
                  className="flex flex-col items-center justify-center gap-1 transition hover:opacity-70"
                >
                  {!storeCountry.flag ? (
                    <span className="flex h-12 w-16 items-center justify-center bg-primary">
                      <NimbusForbidden className="h-10 w-10" />
                    </span>
                  ) : (
                    <SanityImage
                      className="w-16 border border-main-bg/30"
                      data={storeCountry.flag}
                    />
                  )}

                  <span className="text-xs">{storeCountry.name}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stores;
