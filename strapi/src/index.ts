import type { Core } from "@strapi/strapi";

import setupAgentRole from "./bootstrap/setup-agent-role";
import seedMockData from "./bootstrap/seed-mock-data";
import fs from "fs";
import path from "path";

export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }: { strapi: Core.Strapi }) {
    if (strapi.plugin("documentation")) {
      const override = {
        // Only run this override for version 1.0.0
        info: { version: "1.0.0" },
        paths: {
          // '/answer-to-everything': {
          //   get: {
          //     responses: { 200: { description: "*" }}
          //   }
          // }
        },
      };

      strapi
        .plugin("documentation")
        .service("override")
        .registerOverride(override, {
          // Specify the origin in case the user does not want this plugin documented
          pluginOrigin: "upload",
          // The override provides everything don't generate anything
          excludeFromGeneration: ["upload"],
        });
      // const specPath = path.join(__dirname, "../../public/content-api.yaml");
      // const spec = fs.readFileSync(specPath, "utf8");
      // strapi
      //   .plugin("documentation")
      //   .service("documentation")
      //   .generateFullDoc(spec);
    }
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Setup agent role
    setupAgentRole(strapi);

    // Seed mock data (bao gồm client stages)
    seedMockData(strapi);
  },
};
