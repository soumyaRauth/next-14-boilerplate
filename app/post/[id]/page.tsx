import Comments from "@/app/component/comments";
import PostDetailComponent from "@/app/component/PostDetail";
import { fetchCommentsById, fetchPostsById } from "@/app/utils/api";
import { Oooh_Baby } from "next/font/google";
import { Suspense } from "react";

type DetailPageParams = {
  params: Promise<{ id: string }>;
};

//-font Loading
const oohBaby = Oooh_Baby({ subsets: ["latin"], weight: ["400"] });
const PostDetail = async ({ params }: DetailPageParams) => {
  const { id } = await params;
  const postPromise = await fetchPostsById(id);
  const postComments = fetchCommentsById(id);

  return (
    <>
      <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg">
        <PostDetailComponent post={postPromise} />
      </div>
      <hr className="border-t border-gray-300 mb-6" />
      <Suspense
        fallback={
          <h1 className="text-center text-xl text-gray-500">
            Loading comments...
          </h1>
        }
      >
        <Comments postComments={postComments} />
      </Suspense>
    </>
  );
};

export default PostDetail;
