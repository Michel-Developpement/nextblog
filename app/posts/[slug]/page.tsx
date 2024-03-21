"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import usePost from "@/hooks/usePost";
import { Eye, MessageCircle } from "lucide-react";
import PageContainer from "../../../components/page-container";

export default function SinglePosPaget({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const { data: post, isFetching, error } = usePost(slug);
  if (isFetching) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  return (
    <PageContainer>
      <div className="p-4">
        <div className="py-10 px-4">
          <div
            style={{ backgroundImage: "url(/img/image.png)" }}
            className="rounded-lg aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover lg:w-full"
          >
            <div className="h-full w-full flex flex-col justify-center items-center">
              <div className="sm:max-w-xl max-w-xs bg-secondary/80 rounded-lg">
                <h1 className="font-bold text-3xl sm:text-5xl md:text-black sm:text-white text-center mb-4 dark:text-white">
                  {post?.title}
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center p-3 mb-3">
          <div className="flex justify-center items-center gap-3">
            <Avatar>
              <AvatarImage src="/img/chat.png" alt="John ReactDev" />
              <AvatarFallback>{post?.author}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-slate-500">Posted by {post?.author}</p>
            </div>
            {post?.createdAt && (
              <div>
                <p>{post?.image}</p>
                <p className="text-slate-500 text-sm">
                  on {new Date(post?.createdAt).toLocaleDateString()}
                </p>
              </div>
            )}
          </div>
          <div className="flex gap-2">
            <div className="flex items-center gap-1">
              <MessageCircle size={24} />
              <p>{post?.nbComments}</p>
            </div>
            <div className="flex items-center gap-1">
              <Eye size={24} />
              <p>{post?.views}</p>
            </div>
          </div>
        </div>
        <Separator />
        <div
          className="mt-6"
          dangerouslySetInnerHTML={{ __html: post?.content as string }}
        />
      </div>
    </PageContainer>
  );
}
