import { getCollection, type CollectionEntry } from "astro:content";

type Media = CollectionEntry<"media">;
export type MediaStory = { entry: Media; followUps: Media[] };

const newestFirst = (a: Media, b: Media) => b.data.date.getTime() - a.data.date.getTime();

/**
 * Media coverage grouped into stories: each top-level piece carries the
 * pieces that follow up on it (`follows`). Featured stories come first,
 * then newest first.
 */
export async function getMediaStories(): Promise<MediaStory[]> {
  const all = await getCollection("media");
  const ids = new Set(all.map((m) => m.id));
  for (const m of all) {
    if (m.data.follows && !ids.has(m.data.follows)) {
      throw new Error(`media "${m.id}" follows unknown id "${m.data.follows}"`);
    }
  }
  return all
    .filter((m) => !m.data.follows)
    .sort((a, b) => Number(b.data.featured) - Number(a.data.featured) || newestFirst(a, b))
    .map((entry) => ({
      entry,
      followUps: all.filter((m) => m.data.follows === entry.id).sort(newestFirst),
    }));
}
