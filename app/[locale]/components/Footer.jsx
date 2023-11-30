import SanityImage from "@/app/[locale]/components/SanityImage";
import FooterContact from "@/app/[locale]/components/FooterContact";
import FooterForm from "@/app/[locale]/components/FooterForm";

const Footer = ({ footer, locale }) => {
  const { footerimage, footercontact, footerform } = footer;
  return (
    <>
      <footer id="contact" className="relative mx-auto my-0 py-dynamic">
        <div className="absolute inset-0 -z-10 overflow-clip">
          <SanityImage
            className="h-[100dvh] w-full object-cover object-center"
            data={footerimage.image.asset}
          />
          <div className="absolute inset-0 z-[5] h-full w-full bg-[#0000005a]"></div>
        </div>
        <div className="wrapper flex flex-col lg:flex-row">
          <FooterContact contact={footercontact} locale={locale} />
          <FooterForm form={footerform} locale={locale} />
        </div>
      </footer>
      <div className="w-full text-xs font-light tracking-wider text-main-fr bg-main-bg/80 py-4">
        <div className="wrapper">© Podlsiak Andrzej Cywlik Sp. K.</div>
      </div>
    </>
  );
};

export default Footer;
