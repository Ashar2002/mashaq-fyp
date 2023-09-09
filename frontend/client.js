import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "q5r6hvs1",
  dataset: "production",
  apiVersion: "2023-09-09",
  useCdn: true,
  token: "add token here only sanity admin can generate and add this token",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
