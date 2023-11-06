import { AboutMe } from '@/sanity/schemas/Websites/WebsiteContent/partials/AboutMe';
import { Contact } from '@/sanity/schemas/Websites/WebsiteContent/partials/Contact';
import { Menu } from '@/sanity/schemas/Websites/WebsiteContent/partials/Menu';
import { Offers } from '@/sanity/schemas/Websites/WebsiteContent/partials/Offers';
import { Portfolio } from '@/sanity/schemas/Websites/WebsiteContent/partials/Portfolio';
import { Header } from '@/sanity/schemas/Websites/WebsiteContent/partials/Header';

const WebsiteContent = (name, title) => {
  return {
    name,
    title,
    type: 'object',
    groups: [
      { name: 'menu', title: 'Menu' },
      { name: 'header', title: 'Slider' },
      { name: 'aboutme', title: 'O mnie' },
      { name: 'offers', title: 'Oferta' },
      { name: 'portfolio', title: 'Portfolio' },
      { name: 'contact', title: 'Kontakt' },
    ],

    fields: [Menu, Header, AboutMe, Offers, Portfolio, Contact],
  };
};

export default WebsiteContent;
