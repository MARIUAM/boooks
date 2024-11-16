import { BookCard } from '../components/BookCard';
import { Filter, Search } from 'lucide-react';

export function Catalog() {
  const books = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 14.99,
      coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
      rating: 5
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: 16.99,
      coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
      rating: 4
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      price: 12.99,
      coverUrl: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=800",
      rating: 4
    },
    {
      title: "Project Hail Mary",
      author: "Andy Weir",
      price: 15.99,
      coverUrl: "https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=800",
      rating: 5
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 13.99,
      coverUrl: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800",
      rating: 4
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      price: 11.99,
      coverUrl: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?auto=format&fit=crop&q=80&w=800",
      rating: 5
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Book Catalog</h1>
        <div className="flex space-x-4">
          <div className="relative flex-1 md:w-80">
            <input
              type="text"
              placeholder="Search books..."
              className="w-full py-2 px-4 pr-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <button className="flex items-center space-x-2 bg-sky-600 text-white px-4 py-2 rounded-md hover:bg-sky-700">
            <Filter className="h-5 w-5" />
            <span>Filter</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {books.map((book, index) => (
          <BookCard key={index} {...book} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <nav className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              className={`px-4 py-2 rounded-md ${
                page === 1
                  ? 'bg-sky-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-sky-50'
              }`}
            >
              {page}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
}