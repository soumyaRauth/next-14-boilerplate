import { Metadata } from "next";
import { Ruda } from "next/font/google";

const ruda = Ruda({
  subsets: ["latin-ext"],
  weight: ["900"],
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "INTO THE PAGE",
  description: "Metadata description",
};
export default function Home() {
  // throw new Error("Error occued fasfsaf");
  return <div className={ruda.className}>NEXTJS</div>;
}
