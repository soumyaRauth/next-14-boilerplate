import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin-ext"], weight: ["900"] });

// //-setting static metadata
export const metadata: Metadata = {
  title: "Sticky Asshole",
  description: "Slutty ass wiggling with a buttplug in asshole",
};

const IntroLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
      Hello Kittyd
    </html>
  );
};

export default IntroLayout;
