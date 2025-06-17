// app/blog/[id]/page.tsx

import { getPostById } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from 'next/image';
import Link from 'next/link';

// This tells Next.js what `params` this page can expect
interface PostPageProps {
  params: {
    id: string; // The ID will be a string from the URL
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const postId = parseInt(params.id, 10);

  // Handle cases where the ID is not a valid number
  if (isNaN(postId)) {
    notFound();
  }

  const post = await getPostById(postId);

  // If no post is found for the ID, show a 404 page
  if (!post) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-12">
      <article className="max-w-3xl mx-auto">
        {/* Back to Blog link */}
        <Link href="/blog" className="text-blue-600 hover:underline mb-8 inline-block">
          ← Back to all posts
        </Link>
        
        <div className="flex items-center gap-4 mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase">
            {post.category}
          </span>
          <span className="text-gray-600 text-sm">•</span>
          {/* Date formatting and rendering */}
          <time dateTime={post.publicationDate.toISOString()} className="text-sm text-gray-600">
            {new Intl.DateTimeFormat('uk-UA', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            }).format(post.publicationDate)}
          </time>
        </div>

        {/* Post Title */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 my-4">
          {post.title}
        </h1>
        
        {/* Post Image */}
        <div className="relative my-8 w-full h-96">
            <Image
                src={post.imageUrl}
                alt={post.title}
                fill // `fill` makes the image fill its parent container
                className="object-cover rounded-lg"
            />
        </div>

        {/* Post Content */}
        <div 
          className="prose prose-lg max-w-none"
          dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} 
        />
      </article>
    </main>
  );
}