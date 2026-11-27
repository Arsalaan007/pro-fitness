import type { Metadata, Viewport } from "next";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pro Fitness | Gym in Versova, Mumbai",
  description:
    "Pro Fitness is a fully air-conditioned gym on Yari Road, Versova. Strength, fat loss and personal training, open 6 AM to midnight Monday to Saturday and 9 AM to 3 PM on Sundays.",
};

export const viewport: Viewport = { themeColor: "#0a0a0a" };

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const antonUrl = `${base}/fonts/anton.woff2`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href={antonUrl} as="font" type="font/woff2" crossOrigin="" />
        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face{font-family:"Anton";font-style:normal;font-weight:400;font-display:swap;src:url("${antonUrl}") format("woff2")}`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
