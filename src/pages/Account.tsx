import { Book, CreditCard, Settings, User } from 'lucide-react';

export function Account() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="flex items-center mb-8">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150"
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <div className="ml-4">
            <h1 className="text-2xl font-bold text-gray-800">John Doe</h1>
            <p className="text-gray-600">john.doe@example.com</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { icon: Book, label: 'My Library', count: 12 },
            { icon: CreditCard, label: 'Payment Methods', count: 2 },
            { icon: Settings, label: 'Settings', count: null },
            { icon: User, label: 'Profile', count: null }
          ].map((item, index) => (
            <div key={index} className="bg-sky-50 p-4 rounded-lg flex items-center">
              <item.icon className="h-8 w-8 text-sky-600" />
              <div className="ml-4">
                <h3 className="font-semibold text-gray-800">{item.label}</h3>
                {item.count !== null && (
                  <p className="text-sky-600">{item.count} items</p>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Purchases</h2>
            <div className="space-y-4">
              {[
                { title: 'The Midnight Library', date: '2024-02-20', price: 14.99 },
                { title: 'Atomic Habits', date: '2024-02-15', price: 16.99 }
              ].map((purchase, index) => (
                <div key={index} className="flex justify-between items-center border-b pb-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">{purchase.title}</h3>
                    <p className="text-gray-600">{purchase.date}</p>
                  </div>
                  <span className="text-sky-600 font-bold">${purchase.price}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">Reading List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Project Hail Mary', progress: 75 },
                { title: 'The Psychology of Money', progress: 30 }
              ].map((book, index) => (
                <div key={index} className="bg-white border rounded-lg p-4">
                  <h3 className="font-semibold text-gray-800 mb-2">{book.title}</h3>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div
                      className="bg-sky-600 h-2.5 rounded-full"
                      style={{ width: `${book.progress}%` }}
                    ></div>
                  </div>
                  <p className="text-right text-sm text-gray-600 mt-1">{book.progress}% complete</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}