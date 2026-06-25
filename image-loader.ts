// Custom next/image loader for static export on GitHub Pages.
//
// next/image does NOT prefix `basePath` onto image sources when exporting,
// so on the project sub-path (/marcias-elegant-led-rental/) every image would
// 404. This loader prepends the base path in production. There is no image
// optimization server, so we ignore width/quality and return the original
// file — the browser just downloads it as-is.
const basePath =
  process.env.NODE_ENV === "production" ? "/marcias-elegant-led-rental" : "";

export default function imageLoader({ src }: { src: string }): string {
  return `${basePath}${src}`;
}
