import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
/* causes collection based md files to get double whammy
const setLayout = () => {
  return function (_, file) {
    file.data.astro.frontmatter.layout = file.data.astro.frontmatter.layout || "/src/layouts/MarkdownPostLayout.astro";
  };
};
*/

// https://astro.build/config
export default defineConfig({
  /* and here
  markdown: {
    remarkPlugins: [setLayout]
  },
  */
  integrations: [preact()]
});