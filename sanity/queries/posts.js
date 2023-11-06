import { config } from "@/sanity/queries/config";

export const posts = {
  query: `*[_type == 'Blog']{
  ...,
  image{..., asset->},
  author->{..., image{..., asset->}},
  category->
  }`,
  config,
};
