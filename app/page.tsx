import { Ruda } from "next/font/google";

const ruda = Ruda({
  subsets: ["latin-ext"],
  weight: ["900"],
  style: ["normal"],
});
export default function Home() {
  return <div className={ruda.className}>NEXTJS</div>;
}
