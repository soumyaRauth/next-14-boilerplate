import { PageProps } from "@/.next/types/app/layout";
import Comments from "@/app/component/comments";
import { fetchCommentsById, fetchPosts, fetchPostsById } from "@/app/utils/api";
import { PostCommentsProps, PostDetailProp } from "@/app/utils/types";
import { Suspense } from "react";

//-Dynamic Metadata
export const generateMetadata = async ({ params }: PageProps) => {
  const { id } = await params;
  const post: PostDetailProp = await fetchPostsById(id);
  return {
    title: post.title,
    description: post.body,
  };
};

const PostDetail = async ({ params }: PageProps) => {
  const { id } = await params;
  const postPromise = await fetchPostsById(id);
  const postCommentPromise = fetchCommentsById(id);

  return (
    <div>
      {/* Display post title */}
      <div>POST: {postPromise.title}</div>
      <hr />
      <hr />
      <Suspense fallback={<h1>Loading comments...</h1>}>
        <Comments postComments={postCommentPromise} />
      </Suspense>
    </div>
  );
};

export default PostDetail;
