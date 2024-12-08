import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });
const IntroPage = () => {
  return <div className={poppins.className}>Introduction page</div>;
};

export default IntroPage;
