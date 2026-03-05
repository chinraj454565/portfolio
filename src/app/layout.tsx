import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Chinraj P — Full Stack Developer",
  description:
    "Full Stack Developer specializing in Python (Django, Flask, DRF) and TypeScript (Node.js, NestJS, Next.js).",
  keywords: [
    "Full Stack Developer",
    "Python",
    "Django",
    "Next.js",
    "TypeScript",
    "NestJS",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
