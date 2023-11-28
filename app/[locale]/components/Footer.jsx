import SanityImage from "@/app/[locale]/components/SanityImage";
import FooterContact from "@/app/[locale]/components/FooterContact";
import FooterForm from "@/app/[locale]/components/FooterForm";

const Footer = ({ footer, locale }) => {
  const { footerimage } = footer;
  return (
    <section id="contact" className="relative mx-auto my-0 ">
      <div className="absolute inset-0 z-0 overflow-clip">
        <SanityImage
          className="h-[100dvh] w-full object-cover"
          data={footerimage.image.asset}
        />
        <div className="absolute inset-0 z-[5] h-full w-full bg-[#0000002C]"></div>
      </div>
      <div className="grid grid-cols-auto-fill">
        <FooterContact />
        <FooterForm />
      </div>
    </section>
  );
};

export default Footer;
