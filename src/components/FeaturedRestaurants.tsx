import React from 'react';
import { Star, MapPin } from 'lucide-react';

const restaurants = [
  {
    id: 1,
    name: "Machneyuda",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?auto=format&fit=crop&q=80",
    category: "Cuisine Israélienne",
    rating: 4.8,
    location: "Mahane Yehuda",
    description: "Une expérience culinaire unique au cœur du marché"
  },
  {
    id: 2,
    name: "Mona",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80",
    category: "Gastronomique",
    rating: 4.7,
    location: "Centre-Ville",
    description: "Fine dining dans un cadre historique"
  },
  {
    id: 3,
    name: "Eucalyptus",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
    category: "Cuisine Biblique",
    rating: 4.6,
    location: "Vieille Ville",
    description: "Saveurs bibliques revisitées"
  }
];

export default function FeaturedRestaurants() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Restaurants à la Une</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition">
              <div className="relative h-48">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white px-2 py-1 rounded-full text-sm font-medium">
                  {restaurant.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{restaurant.name}</h3>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-medium">{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{restaurant.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}