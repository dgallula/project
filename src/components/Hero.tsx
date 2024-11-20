import React from 'react';
import { Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = React.useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/restaurants?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="relative h-[70vh] flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Découvrez les Meilleurs Restaurants de Jérusalem
        </h1>
        <p className="text-xl text-gray-200 mb-8">
          Des recommandations locales et des bons plans pour une expérience culinaire unique
        </p>
        
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSearch} className="flex bg-white rounded-full shadow-lg p-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un restaurant, une cuisine..."
              className="w-full px-4 focus:outline-none"
            />
            <button 
              type="submit"
              className="bg-orange-600 text-white p-3 rounded-full hover:bg-orange-700 transition"
            >
              <Search className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}