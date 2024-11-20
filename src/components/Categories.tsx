import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Utensils, Coffee, Pizza, Leaf, Star, Award, Check, Shield } from 'lucide-react';

const categories = [
  { icon: Utensils, name: 'Cuisine Israélienne' },
  { icon: Coffee, name: 'Cafés' },
  { icon: Pizza, name: 'International' },
  { icon: Leaf, name: 'Végétarien' },
  { icon: Star, name: 'Gastronomique' },
  { icon: Award, name: 'Badatz' },
  { icon: Shield, name: 'Rabbanut Méhadrin' },
  { icon: Check, name: 'Rabbanut' },
];

export default function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (category: string) => {
    navigate(`/restaurants?search=${encodeURIComponent(category)}`);
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Explorer par Catégorie</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(({ icon: Icon, name }) => (
            <button
              key={name}
              onClick={() => handleCategoryClick(name)}
              className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition"
            >
              <Icon className="w-8 h-8 text-orange-600 mb-3" />
              <span className="text-gray-700 text-sm font-medium text-center">{name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}