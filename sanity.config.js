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
  dataset,
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
            S.listItem()
              .title("Menu główne")
              .id("navBar")
              .child(
                S.document()
                  .schemaType("navbar")
                  .documentId("navbar")
                  .title("Menu główne"),
              ),
            S.documentTypeListItem("countriesbar").title("Menu językowe"),
            S.listItem()
              .title("Zdjęcie główne")
              .id("headerimage")
              .child(
                S.document()
                  .schemaType("headerimage")
                  .documentId("headerimage")
                  .title("Zdjęcie główne"),
              ),
            S.listItem()
              .title("Cechy sprzedawcy")
              .id("bestqualities")
              .child(
                S.document()
                  .schemaType("bestqualities")
                  .documentId("bestqualities")
                  .title("Cechy sprzedawcy"),
              ),
            S.listItem()
              .title("Opinie klientów")
              .id("reviews")
              .child(
                S.document()
                  .schemaType("reviews")
                  .documentId("reviews")
                  .title("Opinie klientów"),
              ),
            S.listItem()
              .title("O nas")
              .id("aboutus")
              .child(
                S.document()
                  .schemaType("aboutus")
                  .documentId("aboutus")
                  .title("O nas"),
              ),
            S.documentTypeListItem("stores").title("Sklepy"),
            S.documentTypeListItem("footercontact").title("Dane Kontaktowe"),
            S.listItem()
              .title("Formularz kontaktowy")
              .id("footerform")
              .child(
                S.document()
                  .schemaType("footerform")
                  .documentId("footerform")
                  .title("Formularz kontaktowy"),
              ),
            S.listItem()
              .title("Zdjęcie stopka")
              .id("footerimage")
              .child(
                S.document()
                  .schemaType("footerimage")
                  .documentId("footerimage")
                  .title("Zdjęcie stopka"),
              ),
            S.listItem()
              .title("Wiadomośći email")
              .id("emailTemplate")
              .child(
                S.document()
                  .schemaType("emailTemplate")
                  .documentId("emailTemplate")
                  .title("Wiadomośći email"),
              ),
          ]),
    }),
    visionTool({ defaultApiVersion: apiVersion }),
    imageHotspotArrayPlugin(),

    I18nFields({
      ui: {
        position: "bottom",
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
          code: "me",
          label: "ME",
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
        {
          code: "ch",
          label: "CH",
          title: "Szwajcarja",
        },
        {
          code: "gr",
          label: "GR",
          title: "Grecja",
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
