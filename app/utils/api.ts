const fetchPosts = async <T>(url: string): Promise<T> => {
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
const fetchPostsById = async <T>(id: number): Promise<T> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return data;
};

const fetchCommentsById = async <T>(id: number): Promise<T> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  const data = await response.json();
  return data;
};
