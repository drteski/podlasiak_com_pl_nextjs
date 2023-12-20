import SanityImage from "@/app/[locale]/components/SanityImage";
import { Paragraph } from "@/app/[locale]/components/subcomponents/Typography";

const LocalStore = ({ localStore, locale }) => {
  return (
    <section
      id="local"
      className="my-dynamic relative scroll-mt-14 h-[100dvh] overflow-clip"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-primary opacity-30 z-10"></div>
        <video
          className="videodiv object-center grayscale contrast-[90%] opacity-50 object-cover h-[100dvh] w-full"
          loop
          autoPlay={true}
          muted
        >
          <source src={localStore.video.asset.url} type="video/mp4" />
        </video>
      </div>
      <div className="wrapper relative z-10 flex flex-col h-full items-center justify-end pb-dynamic">
        <div className="bg-main-fr rounded-3xl p-dynamic-1/2 lg:p-dynamic-1/3 w-full self-start lg:w-1/2">
          <SanityImage data={localStore.logo} className="pb-dynamic-1/4" />
          <Paragraph
            className="text-sm"
            text={localStore.storeDescription}
            locale={locale}
          />
        </div>
      </div>
    </section>
  );
};

export default LocalStore;
