import { PostDetailProp } from "../utils/types";

type DetailProp = {
  post: PostDetailProp;
};
const PostDetailComponent = ({ post }: DetailProp) => {
  return (
    <>
      {/* <div className="max-w-3xl mx-auto p-4 bg-white rounded-lg shadow-lg"> */}
        {/* Post Header */}
        <div className="flex items-center mb-4 space-x-3">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>{" "}
          {/* Placeholder for user avatar */}
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">
              {post.title}
            </h1>
            <p className="text-sm text-gray-500">Posted by Annonymous</p>
          </div>
        </div>

        {/* Post Body */}
        <div className="mb-4">
          <p className="text-gray-800 text-lg">{post.body}</p>
        </div>

        {/* Divider */}
        {/* <hr className="border-t border-gray-300 mb-6" /> */}
      {/* </div> */}
    </>
  );
};

export default PostDetailComponent;
