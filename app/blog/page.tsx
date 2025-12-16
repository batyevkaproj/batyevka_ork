// app/blog/page.tsx

import BlogControls from "@/components/blog/BlogControls";
import ContactForm from "@/components/business-page/ContactForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getPaginatedPosts } from "@/lib/data";
import { Post } from "@/types";
import Link from "next/link";

// dynamic rendering
export const dynamic = "force-dynamic";

interface BlogPageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const params = await searchParams;

  const currentPage = Number(params.page) || 1;
  const currentCategory = params.category;

  const { posts, totalPages, categories } = await getPaginatedPosts({
    page: currentPage,
    category: currentCategory,
    limit: 6,
  });

  return (
    <div className="min-w-[350px] bg-white">
      <Header theme="white" business={false} />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Our Blog
          </h1>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            The latest articles, tutorials, and news from our team.
          </p>
        </div>

        <BlogControls
          currentPage={currentPage}
          totalPages={totalPages}
          categories={categories}
          currentCategory={currentCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: Post) => (
            <Link
              href={`/blog/${post.id}`}
              key={post.id}
              className="block group"
            >
              <div className="bg-white rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300 flex flex-col overflow-hidden h-full">
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-center mb-2">
                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full capitalize">
                      {post.category}
                    </span>

                    <time
                      dateTime={post.publicationDate.toISOString()}
                      className="text-xs text-gray-500"
                    >
                      {new Intl.DateTimeFormat("uk-UA", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }).format(post.publicationDate)}
                    </time>
                  </div>

                  <h2 className="mt-2 text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="mt-2 text-gray-600 flex-grow">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <BlogControls
          currentPage={currentPage}
          totalPages={totalPages}
          categories={categories}
          currentCategory={currentCategory}
        />
      </main>

      <ContactForm theme="white" />
      <Footer theme="white" />
    </div>
  );
}
