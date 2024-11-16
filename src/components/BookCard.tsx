import { Heart, ShoppingCart } from 'lucide-react';

interface BookCardProps {
  title: string;
  author: string;
  price: number;
  coverUrl: string;
  rating: number;
}

export function BookCard({ title, author, price, coverUrl, rating }: BookCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img src={coverUrl} alt={title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 mb-2">{author}</p>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sky-600 font-bold">${price.toFixed(2)}</span>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <span key={i} className={`text-lg ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
                ★
              </span>
            ))}
          </div>
        </div>
        <div className="flex space-x-2">
          <button className="flex-1 bg-sky-600 text-white py-2 px-4 rounded-md hover:bg-sky-700 transition-colors flex items-center justify-center space-x-1">
            <ShoppingCart className="h-4 w-4" />
            <span>Add to Cart</span>
          </button>
          <button className="p-2 text-sky-600 hover:text-sky-700 border border-sky-600 rounded-md">
            <Heart className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}