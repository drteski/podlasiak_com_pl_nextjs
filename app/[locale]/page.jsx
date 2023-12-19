"use client";
import Header from "@/app/[locale]/components/Header";
import useGetSanityData from "@/hooks/useGetSanityData";
import { podlasiakQuery } from "@/sanity/queries/podlasiak";
import LoadingPage from "@/app/[locale]/loading";
import Retailer from "@/app/[locale]/components/Retailer";
import Reviews from "@/app/[locale]/components/Reviews";
import AboutUs from "@/app/[locale]/components/AboutUs";
import Stores from "@/app/[locale]/components/Stores";
import Footer from "@/app/[locale]/components/Footer";
import Energy from "@/app/[locale]/components/Energy";
import LocalStore from "@/app/[locale]/components/LocalStore";

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
            headerImage={data.headerimage}
            countries={data.countriesbar}
            navbar={data.navbar}
          />
          <main className="relative">
            <Retailer qualities={data.bestqualities} locale={locale} />
            <Reviews reviews={data.reviews} locale={locale} />
            <AboutUs aboutUs={data.aboutus} locale={locale} />
            <LocalStore localStore={data.localStore} locale={locale} />
            <Stores stores={data.stores} locale={locale} />
            <Energy locale={locale} />
          </main>
          <Footer
            footer={{
              footerimage: data.footerimage,
              footercontact: data.footercontact,
              footerform: data.footerform,
            }}
            locale={locale}
          />
        </>
      )}
    </>
  );
}
