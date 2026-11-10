// Gallery albums live in src/assets/gallery/<album>/ so Astro can resize the photos
// at build time. Each album holds its photos, an optional cover.* image, and an
// optional info.md with `title`, `description` and `order` in its frontmatter.
import type { ImageMetadata } from "astro";
import matter from "gray-matter";

const images = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/gallery/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true },
);
const infos = import.meta.glob<string>("/src/assets/gallery/*/info.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export interface Album {
  name: string;
  title: string;
  description: string;
  order: number;
  cover: ImageMetadata;
  photos: ImageMetadata[];
}

const albumOf = (path: string) => path.split("/").at(-2)!;
const fileOf = (path: string) => path.split("/").at(-1)!;

export function getAlbums(): Album[] {
  const byAlbum = new Map<string, { cover?: ImageMetadata; photos: [string, ImageMetadata][] }>();
  for (const [path, mod] of Object.entries(images)) {
    const entry = byAlbum.get(albumOf(path)) ?? { photos: [] };
    if (/^cover\./i.test(fileOf(path))) entry.cover = mod.default;
    else entry.photos.push([fileOf(path), mod.default]);
    byAlbum.set(albumOf(path), entry);
  }

  return [...byAlbum]
    .map(([name, { cover, photos }]) => {
      const raw = infos[`/src/assets/gallery/${name}/info.md`];
      const data = raw ? matter(raw).data : {};
      const sorted = photos.sort(([a], [b]) => a.localeCompare(b)).map(([, img]) => img);
      return {
        name,
        title: data.title || name,
        description: data.description || "",
        order: data.order ?? Number.MAX_SAFE_INTEGER,
        cover: cover ?? sorted[0],
        photos: sorted,
      };
    })
    .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));
}
