// types/index.ts
export interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  imageUrl: string;
  content: string;
  publicationDate: Date;
}