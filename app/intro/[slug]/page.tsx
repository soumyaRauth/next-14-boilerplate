import NotFound from "@/app/not-found";

export type Params = {
  slug: string;
};

const DetailIntro = async <T extends { slug: string }>({
  params,
}: {
  params: Promise<T>;
}) => {
  // If params is async, we should await it (not necessary in most cases but can be done)
  const slug = (await params).slug;
  // throw new Error("Hellooooo");
  if (slug === "3") {
    return <NotFound />;
  }

  return <div>{`Page slug is: ${slug}`}</div>;
};

export default DetailIntro;
