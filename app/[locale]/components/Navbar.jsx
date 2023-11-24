import Link from "next/link";

const Navbar = ({ menuItems, locale }) => {
  return (
    <div className="flex items-center">
      {menuItems.map((item) => (
        <Link
          className="text-main-fr hover:bg-main-fr/20 block rounded-sm px-8 py-3 transition"
          key={item._key}
          href={item.url}
        >
          {!item.title[`${locale}`]
            ? item.title["pl"]
            : item.title[`${locale}`]}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
