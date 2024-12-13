import { Metadata } from "next";
import { Ruda } from "next/font/google";
import { fetchPosts } from "./utils/api";
import Link from "next/link";

const ruda = Ruda({
  subsets: ["latin-ext"],
  weight: ["900"],
  style: ["normal"],
});

type PostProps = {
  id: number;
  title: string;
  body: string;
};

export const metadata: Metadata = {
  title: "INTO THE PAGE",
  description: "Metadata description",
};

const HomePage = async () => {
  const posts: PostProps[] = await fetchPosts();
  return (
    <div className={ruda.className}>
      {posts.map((post: PostProps) => (
        <Link href={`/intro/${post.id}`}>{post.title}</Link>
      ))}
    </div>
  );
};

export default HomePage;
