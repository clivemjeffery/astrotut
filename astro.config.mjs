import { defineConfig } from 'astro/config';

const setLayout = () => {
    return function (_, file) {
      file.data.astro.frontmatter.layout =
        file.data.astro.frontmatter.layout || "/src/layouts/MarkdownPostLayout.astro";
    };
  };

  // https://astro.build/config
  export default defineConfig({
    markdown: {
      remarkPlugins: [setLayout],
    },
    // ...
  });
