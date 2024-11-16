import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Catalog } from './pages/Catalog';
import { Cart } from './pages/Cart';
import { Account } from './pages/Account';
import { Wishlist } from './pages/Wishlist';

function App() {
  // Simple client-side routing
  const path = window.location.pathname;
  
  const getPage = () => {
    switch (path) {
      case '/':
        return <Home />;
      case '/catalog':
        return <Catalog />;
      case '/cart':
        return <Cart />;
      case '/account':
        return <Account />;
      case '/wishlist':
        return <Wishlist />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {getPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;