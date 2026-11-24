import { getCollection } from "astro:content";

/** Media coverage, featured pieces first, then newest first. */
export async function getMedia() {
  return (await getCollection("media")).sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.date.getTime() - a.data.date.getTime(),
  );
}
