import PageContainer from "@/components/page-container";
import PageTitle from "@/components/page-titile";
import PosList from "@/components/post-list";
import POSTS from "../../../utils/posts";

type Params = {
  params: {
    slug: string;
  };
};
export default function CategoryPage({ params }: Params) {
  const { slug } = params;
  return (
    <PageContainer>
      <div className="py-10 px-4">
        <PageTitle title={slug.replace("-", " ")} />
        <PosList items={POSTS} />
      </div>
    </PageContainer>
  );
}
