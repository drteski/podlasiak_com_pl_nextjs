import { config } from "@/sanity/queries/config";

export const header = {
  query: `*[_type == 'websites'][0].content.headerContent{
  ...,
  tags[]{..., icon{..., asset->}},
  image{..., asset->}
  }`,
  config,
};
