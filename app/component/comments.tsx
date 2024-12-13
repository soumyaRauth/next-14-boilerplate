import React from "react";
import { PostCommentsProps } from "../utils/types";

type PostLocalCommentsProp = {
  postComments: Promise<PostCommentsProps[]>;
};

const Comments = async ({ postComments }: PostLocalCommentsProp) => {
  const comments = await postComments;
  return (
    <div>
      {comments.map((comment: PostCommentsProps) => (
        <div>
          <p>{comment.id}</p>
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
