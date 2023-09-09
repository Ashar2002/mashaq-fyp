import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url";

export const client = SanityClient({
  projectId: "q5r6hvs1",
  dataset: "production",
  apiVersion: "2023-09-09",
  useCdn: true,
  token: "skY0ylTwNraHlqSB38dzD8G8UpdGuR747d2x2Sdx8edv8pnN95yoXQdfL0onyjDBzAUaCDLw8JI6wR80k42mNjapWy0AbldM4P2cuD9c0vBfgifG2NNOr684orx9g3ucYFZhJUXO7RKBGxkaXO3fwAX6VQT4kWR3nC4uF2mIxFWJtFHfh0m4",
});
const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
