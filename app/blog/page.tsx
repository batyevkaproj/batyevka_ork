// app/blog/page.tsx
import BlogControls from '@/components/blog/BlogControls';
import { getPaginatedPosts } from '@/lib/data';
import { Post } from '@/types';

// This page will be dynamically rendered, and it will not be cached
// to reflect the search params changes instantly.
export const dynamic = 'force-dynamic';

interface BlogPageProps {
  searchParams: {
    page?: string;
    category?: string;
  };
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  // Parse search params
  const currentPage = Number(searchParams.page) || 1;
  const currentCategory = searchParams.category;
  
  // Fetch data based on params
  const { posts, totalPages, categories } = await getPaginatedPosts({
    page: currentPage,
    category: currentCategory,
    limit: 6, // Show 6 posts per page
  });

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Our Blog
        </h1>
        <p className="mt-4 text-lg leading-8 text-gray-600">
          The latest articles, tutorials, and news from our team.
        </p>
      </div>

      {/* Render the controls component */}
      <BlogControls
        currentPage={currentPage}
        totalPages={totalPages}
        categories={categories}
        currentCategory={currentCategory}
      />

      {/* Grid for Blog Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post: Post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full capitalize">
              {post.category}
            </span>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">{post.title}</h2>
            <p className="mt-2 text-gray-600">{post.excerpt}</p>
          </div>
        ))}
      </div>

      {/* Render the controls again at the bottom for convenience */}
      <BlogControls
        currentPage={currentPage}
        totalPages={totalPages}
        categories={categories}
        currentCategory={currentCategory}
      />
    </main>
  );
}