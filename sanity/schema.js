import CountriesBar from "./schemas/CountriesBar";
import NavBar from "./schemas/NavBar";
import Reviews from "./schemas/Reviews";
import AboutUs from "./schemas/AboutUs";
import HeaderImage from "./schemas/HeaderImage";
import FooterForm from "./schemas/FooterForm";
import FooterContact from "./schemas/FooterContact";
import BestQualities from "./schemas/BestQualities";
import FooterImage from "./schemas/FooterImage";
import Stores from "./schemas/Stores";
import Email from "./schemas/Email";
import LocalStore from "@/sanity/schemas/LocalStore";

export const schema = {
  types: [
    NavBar,
    CountriesBar,
    HeaderImage,
    BestQualities,
    Reviews,
    AboutUs,
    LocalStore,
    Stores,
    FooterImage,
    FooterForm,
    FooterContact,
    Email,
  ],
};
