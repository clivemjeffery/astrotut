import { z, defineCollection } from 'astro:content';
// 2. Define your collection(s)
const newsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: ({ image }) => z.object({
        title: z.string(),
        date: z.date(),
        appendImages: z.boolean().optional(),
        cover: image(),
        coverAlt: z.string(),
    }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'news': newsCollection,
};