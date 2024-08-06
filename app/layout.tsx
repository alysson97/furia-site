import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ['100','300','400','500'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Furia",
  description: "Todos somos Fúria",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${"roboto.className"}`}>{children}</body>
    </html>
  );
}
