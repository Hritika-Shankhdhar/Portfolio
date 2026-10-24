import type { Metadata } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const serif = Instrument_Serif({
  variable: "--font-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hritika Shankhdhar - Portfolio",
  description:
    "Portfolio of Hritika Shankhdhar - B.Tech CSE student at KIIT Bhubaneswar (class of 2028) and AI/ML developer building machine learning, generative AI and computer vision projects with Python, Scikit-learn and PyTorch.",
  keywords: [
    "Hritika Shankhdhar",
    "AI/ML Developer",
    "Machine Learning",
    "KIIT",
    "Portfolio",
    "Hritika Shankhdhar portfolio"
  ],
  authors: [{ name: "Hritika Shankhdhar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${serif.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
