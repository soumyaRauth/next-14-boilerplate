import { PostCommentsProps, PostDetailProp } from "./types";

export const fetchPosts = async <T>(): Promise<T> => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );
  const data = await response.json();
  return data;
};

/**
 *
 * @param id
 * @returns
 */
export const fetchPostsById = async (
  id: number | string
): Promise<PostDetailProp> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const data = await response.json();
  return data;
};

// fetchCommentsById - Returns parsed data, not Response object
export const fetchCommentsById = async (
  id: number | string
): Promise<PostCommentsProps[]> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const data = await response.json();
  return data;
};
