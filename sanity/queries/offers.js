import { config } from "@/sanity/queries/config";

export const offers = {
  query: `*[_type == 'websites'][0].content.indexContent{
  ...,
  image{..., asset->}
  }`,
  config,
};
