import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "hustle-dev | Blog",
    description: "Learning Astro",
    site: "https://hustle-dev-astro-tutorial.netlify.app/about/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
