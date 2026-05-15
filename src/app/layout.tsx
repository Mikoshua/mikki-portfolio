import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mikhaela Bigueras — Founder & Builder",
  description:
    "Co-founder of AKIT Beauty, GroundUP, and Kollabayan. Technical Lead at Mapua Machina robotics team. Based in Manila.",
  openGraph: {
    title: "Mikhaela Bigueras — Founder & Builder",
    description:
      "Building three startups across beauty tech, agri-tech, and collaboration. National-championship robotics team lead.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${dmSans.variable}`}>
      <body className="font-sans grain">{children}</body>
    </html>
  );
}
