import { Book, Home, ShoppingCart, User, Heart, BookOpen } from 'lucide-react';
import { Link } from './Link';

export function Navbar() {
  return (
    <nav className="bg-sky-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-8 w-8" />
            <span className="text-xl font-bold">PageTurner</span>
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="flex items-center space-x-1 hover:text-sky-100">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link href="/catalog" className="flex items-center space-x-1 hover:text-sky-100">
              <Book className="h-5 w-5" />
              <span>Catalog</span>
            </Link>
            <Link href="/wishlist" className="flex items-center space-x-1 hover:text-sky-100">
              <Heart className="h-5 w-5" />
              <span>Wishlist</span>
            </Link>
            <Link href="/cart" className="flex items-center space-x-1 hover:text-sky-100">
              <ShoppingCart className="h-5 w-5" />
              <span>Cart</span>
            </Link>
            <Link href="/account" className="flex items-center space-x-1 hover:text-sky-100">
              <User className="h-5 w-5" />
              <span>Account</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}