import { config } from "@/sanity/queries/config";

export const menu = {
  query: `*[_type == 'websites'][0].content.menuContent{
  ...,
  imageDark{..., asset->},
  imageLight{..., asset->}
  }`,
  config,
};
