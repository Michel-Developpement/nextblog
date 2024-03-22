"use client";
import PageContainer from "@/components/page-container";
import PageTitle from "@/components/page-titile";
import PosList from "@/components/post-list";
import { usePosts } from "@/hooks/usePosts";

type Params = {
  params: {
    slug: string;
  };
};
export default function CategoryPage({ params }: Params) {
  const { slug } = params;
  const { data: posts, isFetching } = usePosts(slug);
  return (
    <PageContainer>
      <div className="py-10 px-4">
        <PageTitle title={slug.replace("-", " ").toUpperCase()} />
        {isFetching ? (
          <p className="text-xl text-white">Loading...</p>
        ) : (
          <PosList items={posts} />
        )}
      </div>
    </PageContainer>
  );
}
