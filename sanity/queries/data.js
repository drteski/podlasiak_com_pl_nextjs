import { config } from '@/sanity/queries/config';

export const allData = {
  query: `*[_type == 'websites'][0].content{
  headerContent{
  ...,
  tags[]{..., icon{..., asset->}},
  image{..., asset->}
  },
  menuContent{
  ...,
  imageDark{..., asset->},
  imageLight{..., asset->}
  },
  aboutMeContent{
  ...,
  name,
  image{..., asset->},
  description,
  },
  contactContent{
  ...,
  }
  }`,
  config,
};
