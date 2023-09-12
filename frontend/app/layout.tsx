import "./globals.css";
import type { Metadata } from "next";
import { opensans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "35 Lens | Admin Dashboard",
  description: "The software and hardware company for lovers of filmmaking.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={opensans.className}>{children}</body>
    </html>
  );
}
