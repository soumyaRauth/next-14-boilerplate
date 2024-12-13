export type PostDetailProp = {
    title: string;
    body: string;
  };

export type PostCommentsProps={
    postId:number | string,
    id:string | number,
    name:string,
    email:string,
    body:string
}