import { Suspense } from "react";
import Comments from "@/app/component/comments";
import { fetchCommentsById, fetchPostsById } from "@/app/utils/api";
import { PostCommentsProps, PostDetailProp } from "@/app/utils/types";

type PostParamProp = {
  params: Promise<{ id: string | number }>;
};

// Dynamic Metadata
export const generateMetadata = async ({ params }: PostParamProp) => {
  const { id } = await params;
  const post: PostDetailProp = await fetchPostsById(id);
  return {
    title: post.title,
    description: post.body,
  };
};

const PostDetail = async ({ params }: PostParamProp) => {
  const { id } = await params;
  const postPromise = await fetchPostsById(id);
  const postCommentPromise = fetchCommentsById(id);

  return (
    <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      {/* Post Header */}
      <div className="flex items-center mb-4 space-x-3">
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
        {/* Placeholder for user avatar */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">
            {postPromise.title}
          </h1>
          <p className="text-sm text-gray-500">Posted by Annonymous</p>
        </div>
      </div>

      {/* Post Body */}
      <div className="mb-4">
        <p className="text-gray-800 text-lg">{postPromise.body}</p>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 mb-6" />

      {/* Comments Section */}
      <Suspense
        fallback={
          <h1 className="text-center text-xl text-gray-500">
            Loading comments...
          </h1>
        }
      >
        <Comments postComments={postCommentPromise} />
      </Suspense>
    </div>
  );
};

export default PostDetail;
