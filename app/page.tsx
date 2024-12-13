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
    <div className={`${ruda.className} max-w-4xl mx-auto px-4 py-8`}>
      {/* Page Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl font-extrabold text-gray-900">
          Welcome to Progressive rendering post
        </h1>
        <p className="text-lg text-gray-500 mt-2">
          Here are some posts from our blog:
        </p>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {posts.map((post: PostProps) => (
          <Link
            key={post.id}
            href={`/post/${post.id}`}
            className="block p-4 bg-white rounded-lg shadow-md hover:bg-gray-100 transition-colors"
          >
            <h2 className="text-xl font-semibold text-gray-800">
              {post.title}
            </h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
