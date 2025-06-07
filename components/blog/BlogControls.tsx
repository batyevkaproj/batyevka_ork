// components/BlogControls.tsx
import Link from 'next/link';

interface BlogControlsProps {
  totalPages: number;
  currentPage: number;
  categories: string[];
  currentCategory?: string;
  basePath?: string; // e.g., '/blog'
}

export default function BlogControls({
  totalPages,
  currentPage,
  categories,
  currentCategory,
  basePath = '/blog',
}: BlogControlsProps) {

  // Helper to generate the link href, preserving the category
  const getPageLink = (page: number) => {
    if (currentCategory) {
      return `${basePath}?page=${page}&category=${currentCategory}`;
    }
    return `${basePath}?page=${page}`;
  };
  
  // Helper to generate category link href, resetting the page
  const getCategoryLink = (category: string | null) => {
    if (category) {
      return `${basePath}?category=${category}`;
    }
    return basePath;
  }

  const renderPageNumbers = () => {
    const pages = [];
    // Simple logic: Show first, last, and pages around current
    // For a more complex scenario, you might want a more sophisticated algorithm
    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <Link
          key={i}
          href={getPageLink(i)}
          className={`px-4 py-2 mx-1 rounded-md text-sm font-medium transition-colors duration-200 ${
            currentPage === i
              ? 'bg-blue-600 text-white pointer-events-none'
              : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
          }`}
        >
          {i}
        </Link>
      );
    }
    return pages;
  };

  return (
    <div className="space-y-8 my-12">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <span className="text-gray-700 font-semibold mr-2">Filter by Category:</span>
        <Link 
          href={getCategoryLink(null)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            !currentCategory
            ? 'bg-blue-600 text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={getCategoryLink(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 capitalize ${
              currentCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category}
          </Link>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <nav className="flex items-center justify-center space-x-2" aria-label="Pagination">
          {/* Previous Button */}
          <Link
            href={getPageLink(currentPage - 1)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              currentPage === 1
                ? 'bg-gray-200 text-gray-400 pointer-events-none'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
            }`}
          >
            Previous
          </Link>

          {/* Page Numbers */}
          <div className="hidden md:flex">{renderPageNumbers()}</div>

          {/* Next Button */}
          <Link
            href={getPageLink(currentPage + 1)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
              currentPage === totalPages
                ? 'bg-gray-200 text-gray-400 pointer-events-none'
                : 'bg-gray-200 text-gray-700 hover:bg-blue-500 hover:text-white'
            }`}
          >
            Next
          </Link>
        </nav>
      )}
    </div>
  );
}