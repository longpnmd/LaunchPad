/**
 * `deepPopulate` middleware
 */

import type { Core } from "@strapi/strapi";
import { UID } from "@strapi/types";
import { contentTypes } from "@strapi/utils";
import pluralize from "pluralize";

interface Options {
  /**
   * Fields to select when populating relations
   */
  relationalFields?: string[];
}

const { CREATED_BY_ATTRIBUTE, UPDATED_BY_ATTRIBUTE } = contentTypes.constants;

const extractPathSegment = (url: string) =>
  url.match(/\/([^/?]+)(?:\?|$)/)?.[1] || "";

const getDeepPopulate = (uid: UID.Schema, opts: Options = {}) => {
  const model = strapi.getModel(uid);
  const attributes = Object.entries(model.attributes);

  return attributes.reduce((acc: any, [attributeName, attribute]) => {
    switch (attribute.type) {
      case "relation": {
        const isMorphRelation = attribute.relation
          .toLowerCase()
          .startsWith("morph");
        if (isMorphRelation) {
          break;
        }

        // Ignore not visible fields other than createdBy and updatedBy
        const isVisible = contentTypes.isVisibleAttribute(model, attributeName);
        const isCreatorField = [
          CREATED_BY_ATTRIBUTE,
          UPDATED_BY_ATTRIBUTE,
        ].includes(attributeName);

        if (isVisible) {
          if (attributeName === "testimonials") {
            acc[attributeName] = { populate: "user.image" };
          } else {
            acc[attributeName] = { populate: "*" };
          }
        }

        break;
      }

      case "media": {
        acc[attributeName] = { populate: "*" };
        break;
      }

      case "component": {
        const populate = getDeepPopulate(attribute.component, opts);
        acc[attributeName] = { populate };
        break;
      }

      case "dynamiczone": {
        // Use fragments to populate the dynamic zone components
        const populatedComponents = (attribute.components || []).reduce(
          (acc: any, componentUID: UID.Component) => {
            acc[componentUID] = {
              populate: getDeepPopulate(componentUID, opts),
            };

            return acc;
          },
          {},
        );

        acc[attributeName] = { on: populatedComponents };
        break;
      }
      default:
        break;
    }

    return acc;
  }, {});
};

export default (config, { strapi }: { strapi: Core.Strapi }) => {
  return async (ctx, next) => {
    if (
      ctx.request.url.startsWith("/api/") &&
      ctx.request.method === "GET" &&
      !ctx.query.populate &&
      !ctx.request.url.includes("/api/users") &&
      !ctx.request.url.includes("/api/seo")
    ) {
      strapi.log.info("Using custom Dynamic-Zone population Middleware...");

      try {
        // Extract API endpoint name (e.g. "customers" from "/api/customers")
        const contentType = extractPathSegment(ctx.request.url);
        const includesLocalization = ["post", "page", "product"].some((type) =>
          contentType.includes(type),
        );

        // Skip if contentType is empty
        if (!contentType) {
          return await next();
        }

        // Convert plural form to singular (e.g. "customers" to "customer")
        const singular = pluralize.singular(contentType);

        // Create proper UID format for content types: api::name.name
        const uid = `api::${singular}.${singular}` as UID.Schema;

        // Check if this content type exists in Strapi's registry
        if (strapi.contentTypes[uid]) {
          // Get deep population configuration based on the content type schema
          const populateConfig = getDeepPopulate(uid);

          // Apply population to the query
          ctx.query.populate = {
            ...populateConfig,
            ...(includesLocalization && { localizations: { populate: "*" } }),
          };

          strapi.log.debug(`Applied deep population for ${uid}`);
        } else {
          strapi.log.warn(
            `Content type UID ${uid} not found, skipping deep population`,
          );
        }
      } catch (error) {
        strapi.log.error(`Error in deepPopulate middleware: ${error.message}`);
      }
    }
    await next();
  };
};
