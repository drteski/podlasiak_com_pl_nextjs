import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { createClient } from "@sanity/client";

const SanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: true,
});

const SanityImage = (props) => {
  const { data, ...restProps } = props;
  const imageProps = useNextSanityImage(SanityClient, data);
  if (imageProps.width <= 40 || imageProps.height <= 40) {
    return (
      <Image
        {...restProps}
        {...imageProps}
        sizes="(max-width: 1000px) 150vw, (max-width: 1920px) 1920px"
        alt={data.altText ? data.altText : ""}
      />
    );
  }
  if (!data?.metadata?.lqip) {
    return (
      <Image
        {...restProps}
        {...imageProps}
        sizes="(max-width: 1000px) 150vw, (max-width: 1920px) 1920px"
        alt={data.altText ? data.altText : ""}
      />
    );
  }
  return (
    <Image
      {...restProps}
      {...imageProps}
      sizes="(max-width: 1000px) 150vw, (max-width: 1920px) 1920px"
      // placeholder={!data?.metadata?.lqip ? "" : "blur"}
      // blurDataURL={!data?.metadata?.lqip ? "" : data.metadata.lqip}
      alt={data.altText ? data.altText : ""}
    />
  );
};

export default SanityImage;
