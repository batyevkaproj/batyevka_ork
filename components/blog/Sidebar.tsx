import { Search } from 'lucide-react';
import Link from 'next/link';

interface SidebarProps {
  categories: string[];
  currentCategory?: string;
}

export default function Sidebar({ categories, currentCategory }: SidebarProps) {
  return (
    <aside className="w-full md:w-64 lg:w-72 flex-shrink-0">
      <div className="space-y-8 sticky top-8">
        {/* Search Bar */}
        <div className="relative">
          <input
            type="search"
            placeholder="Поиск"
            className="w-full px-4 py-3 pr-10 text-gray-700 bg-white border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <Search className="absolute top-1/2 right-4 -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>

        {/* Categories */}
        <div className="p-4 bg-white rounded-xl shadow-sm border border-gray-100">
          <ul className="space-y-1">
            {categories.map((cat) => (
              <li key={cat}>
                <Link
                  href={`/blog?category=${cat}`}
                  className={`block px-4 py-2 rounded-lg text-lg transition-colors ${
                    currentCategory === cat
                      ? 'bg-orange-100 text-orange-800 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
}