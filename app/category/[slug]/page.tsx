import React from "react";

type Params = {
  params: {
    slug: string;
  };
};
export default function CategoryPage({ params }: Params) {
  const { slug } = params;
  return <div>page {slug}</div>;
}
