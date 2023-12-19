import { config } from "@/sanity/queries/config";

export const emailQuery = `*[_type == 'emailTemplate'][0]`;

export const podlasiakQuery = `*[_type in ["navbar", "countriesbar","headerimage","bestqualities","reviews","aboutus","localStore","stores","footercontact","footerimage"]][0]{
  "navbar":*[_type == "navbar"][0]{
    ...,
  imageDark{..., asset->},
  imageLight{..., asset->}
  },
    "countriesbar":*[_type == "countriesbar"]{
    ...,
    flag{..., asset->}
    },
    "headerimage":*[_type == "headerimage"][0]{
    ...,
    heros[]{
    ...,
     image{..., asset->}
    }
    },
    "bestqualities":*[_type == "bestqualities"][0]{
    ...,
    features[]{
    ...,
    icon{..., asset->}
    }
    },
    "reviews":*[_type == "reviews"][0],
    "aboutus":*[_type == "aboutus"][0],
    "localStore":*[_type == "localStore"][0]{
    ...,
    logo{..., asset->},
    video{..., asset->} 
    },
    "stores":*[_type == "stores"]{
    ...,
    storeLogo{..., asset->},
    stores[]{
    ...,
    flag{..., asset->}
    }
    },
    "footercontact":*[_type == "footercontact"]{
    ...,
    contactPlaces[]{
    ...,
    icon{..., asset->},
    }
    },
    "footerform":*[_type == "footerform"][0],
    "footerimage":*[_type == "footerimage"][0]{
    image{..., asset->}
    }
}`;
