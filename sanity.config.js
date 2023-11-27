/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...index]]\page.jsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// import { media } from "sanity-plugin-media";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import { I18nFields } from "sanity-plugin-i18n-fields";

const singletonActions = new Set(["publish", "discardChanges", "restore"]);
const singletonTypes = new Set(["websites-content"]);

export default defineConfig({
  name: "Podlasiak",
  basePath: "/studio",
  projectId,
  dataset, // Add and edit the content schema in the './sanity/schema' folder
  schema: {
    ...schema,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title("Konfiguracja")
          .items([
            // Our singleton type has a list item with a custom child
            // S.documentTypeListItem('index-tiles').title('Tiles'),
            S.listItem().title("Menu główne").id("navBar").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("navbar")
                .documentId("navbar")
                .title("Menu główne"),
            ),
            S.documentTypeListItem("countriesbar").title("Menu językowe"),
            S.listItem().title("Zdjęcie główne").id("headerimage").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("headerimage")
                .documentId("headerimage")
                .title("Zdjęcie główne"),
            ),
            S.listItem().title("Cechy sprzedawcy").id("bestqualities").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("bestqualities")
                .documentId("bestqualities")
                .title("Cechy sprzedawcy"),
            ),
            S.listItem().title("Opinie klientów").id("reviews").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("reviews")
                .documentId("reviews")
                .title("Opinie klientów"),
            ),
            S.listItem().title("O nas").id("aboutus").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("aboutus")
                .documentId("aboutus")
                .title("O nas"),
            ),
            S.documentTypeListItem("stores").title("Sklepy"),
            S.documentTypeListItem("footercontact").title("Dane Kontaktowe"), // S.documentTypeListItem("Category").title("Kategoria"), // Regular document types
            S.listItem().title("Zdjęcie stopka").id("footerimage").child(
              // Instead of rendering a list of documents, we render a single
              // document, specifying the `documentId` manually to ensure
              // that we're editing the single instance of the document
              S.document()
                .schemaType("footerimage")
                .documentId("footerimage")
                .title("Zdjęcie stopka"),
            ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }), // media(),
    imageHotspotArrayPlugin(), // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    I18nFields({
      ui: {
        position: "bottom",
        type: "dropdown",
      },
      locales: [
        {
          code: "pl",
          label: "PL",
          title: "Polska",
          default: true,
        },
        {
          code: "en",
          label: "EN",
          title: "Anglia",
        },
        {
          code: "de",
          label: "DE",
          title: "Niemcy",
        },
        {
          code: "ru",
          label: "RU",
          title: "Rosja",
        },
        {
          code: "it",
          label: "IT",
          title: "Włochy",
        },
        {
          code: "fr",
          label: "FR",
          title: "Francja",
        },
        {
          code: "cz",
          label: "CZ",
          title: "Czechy",
        },
        {
          code: "sk",
          label: "SK",
          title: "Słowacja",
        },
        {
          code: "ro",
          label: "RO",
          title: "Rumunia",
        },
        {
          code: "hu",
          label: "HU",
          title: "Węgry",
        },
        {
          code: "bg",
          label: "BG",
          title: "Bułgaria",
        },
        {
          code: "lt",
          label: "LT",
          title: "Litwa",
        },
        {
          code: "lv",
          label: "LV",
          title: "Łotwa",
        },
        {
          code: "ua",
          label: "UA",
          title: "Ukraina",
        },
        {
          code: "es",
          label: "ES",
          title: "Hiszpania",
        },
        {
          code: "nl",
          label: "NL",
          title: "Holandia",
        },
        {
          code: "ee",
          label: "EE",
          title: "Estonia",
        },
        {
          code: "hr",
          label: "HR",
          title: "Chorwacja",
        },
        {
          code: "md",
          label: "MD",
          title: "Czarnogóra",
        },
        {
          code: "rs",
          label: "RS",
          title: "Serbia",
        },
        {
          code: "at",
          label: "AT",
          title: "Austria",
        },
        {
          code: "be",
          label: "BE",
          title: "Belgia",
        },
        {
          code: "si",
          label: "SI",
          title: "Słowenia",
        },
        {
          code: "fi",
          label: "FI",
          title: "Finlandia",
        },
        {
          code: "se",
          label: "SE",
          title: "Szwecja",
        },
        {
          code: "ie",
          label: "IE",
          title: "Irlandia",
        },
        {
          code: "pt",
          label: "PT",
          title: "Portugalia",
        },
      ],
    }),
  ],
  document: {
    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
});
