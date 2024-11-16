import { Minus, Plus, Trash2 } from 'lucide-react';

export function Cart() {
  const cartItems = [
    {
      title: "The Midnight Library",
      author: "Matt Haig",
      price: 14.99,
      coverUrl: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800",
      quantity: 1
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: 16.99,
      coverUrl: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=800",
      quantity: 2
    }
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-grow">
          {cartItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-md mb-4">
              <img src={item.coverUrl} alt={item.title} className="w-24 h-32 object-cover rounded" />
              <div className="flex-grow">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.author}</p>
                <p className="text-sky-600 font-bold mt-2">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-1 hover:bg-sky-50 rounded">
                  <Minus className="h-4 w-4 text-sky-600" />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button className="p-1 hover:bg-sky-50 rounded">
                  <Plus className="h-4 w-4 text-sky-600" />
                </button>
              </div>
              <button className="p-2 text-red-500 hover:bg-red-50 rounded">
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <div className="lg:w-80">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Tax (10%)</span>
                <span className="font-semibold">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-2 mt-2">
                <div className="flex justify-between">
                  <span className="font-bold">Total</span>
                  <span className="font-bold text-sky-600">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-sky-600 text-white py-2 rounded-md hover:bg-sky-700 transition-colors">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}