import { ArrowRight, Search } from 'lucide-react';
import { BookCard } from '../components/BookCard';

export function Home() {
  const featuredBooks = [
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
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-sky-500 to-sky-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Discover Your Next Favorite Book</h1>
          <p className="text-xl mb-8">Explore thousands of ebooks at your fingertips</p>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search for books, authors, or genres..."
              className="w-full py-3 px-6 pr-12 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-sky-300"
            />
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Featured Books */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Featured Books</h2>
          <a href="/catalog" className="text-sky-600 hover:text-sky-700 flex items-center">
            View All <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredBooks.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-sky-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Fiction', 'Non-Fiction', 'Science', 'Business'].map((category) => (
              <a
                key={category}
                href={`/category/${category.toLowerCase()}`}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800">{category}</h3>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}