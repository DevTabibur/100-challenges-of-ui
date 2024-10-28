import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "100 Challenges of Frontend",
  description: "Reusable & dynamic Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}
