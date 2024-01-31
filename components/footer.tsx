import { CATEGORYS } from "@/utils/categorys";
import Link from "next/link";
import PageContainer from "./page-container";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="p-4 mt-4 border-t">
      <PageContainer>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-blue-600">
            NextBlog
          </h1>
        </div>
        <div className="flex gap-2 flex-col md:flex-row">
          {CATEGORYS.map((category) => {
            return (
              <div key={category.id}>
                <Button variant="ghost">
                  <Link href={`/category/${category.slug}`} key={category.id}>
                    {category.name}
                  </Link>
                </Button>
              </div>
            );
          })}
          <Button variant="ghost">
            <Link href="/write">Write a Post</Link>
          </Button>
        </div>
      </PageContainer>
    </footer>
  );
}
