import { config } from "@/sanity/queries/config";

export const aboutMe = {
  query: `*[_type == 'websites'][0].content.aboutMeContent{
  ...,
  name,
  image{..., asset->},
  alt,
  description,
  }`,
  config,
};
