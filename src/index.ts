import { defineHook } from "@directus/extensions-sdk";

export default defineHook(async ({ action }, { services, getSchema }) => {
  const { CollectionsService } = services;
  const schema = await getSchema();

  action("server.start", (_evt, { database }) => {
    const collection = "wellenplan";

    const service = new CollectionsService({
      knex: database,
      schema,
    });

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
