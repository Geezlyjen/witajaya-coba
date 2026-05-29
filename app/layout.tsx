import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Bengkel Bubut Surabaya | WITA JAYA",

  description:
    "WITA JAYA melayani jasa bubut presisi, drat/ulir, screw feeder, bearing, custom part, variasi motor dan mobil.",

  keywords: [
    "bengkel bubut surabaya",
    "jasa bubut surabaya",
    "custom part",
    "bearing",
    "drat",
    "ulir",
    "screw feeder",
    "variasi motor",
    "variasi mobil",
    "pengerjaan manufaktur",
    "bubut presisi"
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}