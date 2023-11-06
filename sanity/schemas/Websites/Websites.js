import WebsiteContent from "@/sanity/schemas/Websites/WebsiteContent/WebsiteContent";

const Websites = {
  name: "websites",
  title: "Strony",
  type: "document",
  fields: [WebsiteContent("content", "BlackLinePhoto")],
};

export default Websites;
