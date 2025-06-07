// lib/data.ts
import { Post } from "@/types";

// Create a large list of mock posts
const allPosts: Post[] = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Blog Post Title ${i + 1}`,
  excerpt: `This is a short excerpt for post number ${i + 1}.`,
  category: i % 4 === 0 ? 'react' : i % 4 === 1 ? 'nextjs' : i % 4 === 2 ? 'css' : 'general',
}));

// Simulate fetching paginated and filtered posts
export async function getPaginatedPosts(
  { page = 1, limit = 6, category }: { page?: number; limit?: number; category?: string }
) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 300));

  // 1. Filter posts by category if provided
  const filteredPosts = category 
    ? allPosts.filter(post => post.category === category) 
    : allPosts;

  // 2. Paginate the filtered posts
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedPosts = filteredPosts.slice(startIndex, endIndex);

  // 3. Calculate total pages for the filtered set
  const totalPages = Math.ceil(filteredPosts.length / limit);

  // 4. Get a unique list of all available categories
  const allCategories = allPosts.map(post => post.category);

  const categories = allCategories.filter((value, index, self) => {
    return self.indexOf(value) === index;
  })

  return {
    posts: paginatedPosts,
    totalPages,
    categories,
  };
}