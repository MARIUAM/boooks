import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';
import { Link } from './Link';

export function Footer() {
  return (
    <footer className="bg-sky-600 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">About Us</h3>
            <p className="text-sky-100">PageTurner is your premier destination for digital books, offering a vast collection of titles across all genres.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link href="/category/fiction">Fiction</Link></li>
              <li><Link href="/category/non-fiction">Non-Fiction</Link></li>
              <li><Link href="/category/academic">Academic</Link></li>
              <li><Link href="/category/children">Children's Books</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-sky-100"><Facebook /></Link>
              <Link href="#" className="hover:text-sky-100"><Twitter /></Link>
              <Link href="#" className="hover:text-sky-100"><Instagram /></Link>
              <Link href="#" className="hover:text-sky-100"><Mail /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-sky-400 text-center">
          <p>&copy; {new Date().getFullYear()} Maryam Saleem </p>
        </div>
      </div>
    </footer>
  );
}