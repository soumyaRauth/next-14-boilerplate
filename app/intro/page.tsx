import { Metadata } from "next";
import { Poppins } from "next/font/google";

//- Metadata
export const metadata: Metadata = {
  title: "Introduction page",
  description: "description for introduction",
};

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const IntroPage = () => {
  return <div className={poppins.className}>Introduction page</div>;
};

export default IntroPage;
