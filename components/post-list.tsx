"use client";
import { Post } from "@prisma/client";
import PostCard from "./post-card";

type PostProps = {
  items: Post[];
};
export default function PosList({ items }: PostProps) {
  return (
    <div className="gap-2 mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-4">
      {items.map((post: Post, id: number) => (
        <PostCard key={id} post={post} />
      ))}
    </div>
  );
}
