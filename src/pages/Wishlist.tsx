import { BookCard } from '../components/BookCard';

export function Wishlist() {
  const wishlistItems = [
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
      <h1 className="text-3xl font-bold text-gray-800 mb-8">My Wishlist</h1>
      
      {wishlistItems.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wishlistItems.map((book, index) => (
            <BookCard key={index} {...book} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl text-gray-600 mb-4">Your wishlist is empty</h2>
          <a href="/catalog" className="text-sky-600 hover:text-sky-700">
            Browse our catalog to add books
          </a>
        </div>
      )}
    </div>
  );
}