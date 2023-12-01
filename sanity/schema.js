import CountriesBar from "@/sanity/schemas/CountriesBar";
import NavBar from "@/sanity/schemas/NavBar";
import Reviews from "@/sanity/schemas/Reviews";
import AboutUs from "@/sanity/schemas/AboutUs";
import HeaderImage from "@/sanity/schemas/HeaderImage";
import FooterForm from "@/sanity/schemas/FooterForm";
import FooterContact from "@/sanity/schemas/FooterContact";
import BestQualities from "@/sanity/schemas/BestQualities";
import FooterImage from "@/sanity/schemas/FooterImage";
import Stores from "@/sanity/schemas/Stores";
import Email from "@/sanity/schemas/Email";

export const schema = {
  types: [
    NavBar,
    CountriesBar,
    HeaderImage,
    BestQualities,
    Reviews,
    AboutUs,
    Stores,
    FooterImage,
    FooterForm,
    FooterContact,
    Email,
  ],
};
