/** @type {import('next').NextConfig} */
const nextConfig = {
  // Set STATIC_EXPORT=1 to produce a static /out folder (any static host).
  ...(process.env.STATIC_EXPORT ? { output: "export" } : {}),
  images: { unoptimized: !!process.env.STATIC_EXPORT },
};

export default nextConfig;
