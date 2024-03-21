export type Category = {
  id: number;
  name: string;
  slug: string;
};
export type Post = {
  id?: number;
  category?: string;
  title?: string;
  image?: string;
  caption?: string;
  date?: string | Date;
  minutesToRead?: number;
  ceatedAt?: Date;
  author?: string;
  views?: number;
  nbComments?: number;
  slug: string;
  content?: string;
  catSlug?: string;
};
