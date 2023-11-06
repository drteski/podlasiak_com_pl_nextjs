import { config } from "@/sanity/queries/config";

export const portfolio = {
  query: `*[_type == 'websites'][0].content.indexContent{
  ...,
  image{..., asset->}
  }`,
  config,
};
