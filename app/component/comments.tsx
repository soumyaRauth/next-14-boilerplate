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
        <div
          key={comment.id}
          className="bg-gray-50 p-4 rounded-lg shadow-md mb-4"
        >
          {/* Comment Content */}
          <div className="flex items-center space-x-3 mb-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>{" "}
            {/* Placeholder for commenter's avatar */}
            <div>
              <p className="font-semibold text-gray-800">{comment.email}</p>
              <p className="text-sm text-gray-500">Commented just now</p>
            </div>
          </div>

          <p className="text-gray-700">{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
