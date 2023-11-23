"use client";
import Header from "@/app/[locale]/components/Header/Header";
import useGetSanityData from "@/hooks/useGetSanityData";
import { podlasiakQuery } from "@/sanity/queries/podlasiak";
import LoadingPage from "@/app/[locale]/loading";

export default function Home({ params: { locale } }) {
  const { isLoading, data } = useGetSanityData(podlasiakQuery);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <>
          <Header
            locale={locale}
            headerData={{
              ...data.navbar,
              ...data.headerimage,
              ...data.countriesbar,
            }}
          />
        </>
      )}
    </>
  );
}
