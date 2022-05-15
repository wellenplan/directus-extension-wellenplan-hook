import { defineHook } from "@directus/extensions-sdk";

export default defineHook(async ({ action }, { services, getSchema }) => {
  action("server.start", async (_evt, { database }) => {
    const { CollectionsService } = services;
    const schema = await getSchema();

    const service = new CollectionsService({
      knex: database,
      schema,
    });

    const collection = "wellenplan";
    const data = {
      collection: collection,
      note: "Wellenplan",
      meta: {
        collection: collection,
      },
    };

    // upsert folder
    service
      .createOne(data)
      .then(() => console.log(`created folder ${collection}`))
      .catch(() => {
        service
          .updateOne(collection, data)
          .then(() => console.log(`updated folder ${collection}`));
      });
  });
});
