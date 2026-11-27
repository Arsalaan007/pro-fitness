/** @type {import('next').NextConfig} */
// STATIC_EXPORT=1 builds a static site into /out.
// NEXT_PUBLIC_BASE_PATH sets the sub-path when hosted at e.g. username.github.io/pro-fitness.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig = {
  ...(process.env.STATIC_EXPORT ? { output: "export" } : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: { unoptimized: !!process.env.STATIC_EXPORT },
  trailingSlash: !!process.env.STATIC_EXPORT,
};

export default nextConfig;
