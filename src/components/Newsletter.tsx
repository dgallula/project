import React from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="bg-orange-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ne Manquez Aucun Bon Plan
        </h2>
        <p className="text-orange-100 mb-8 max-w-2xl mx-auto">
          Inscrivez-vous à notre newsletter pour recevoir les dernières offres et découvrir les nouveaux restaurants de Jérusalem.
        </p>
        <div className="max-w-md mx-auto">
          <div className="flex">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-l-lg focus:outline-none"
            />
            <button className="bg-gray-900 text-white px-6 py-3 rounded-r-lg hover:bg-gray-800 transition flex items-center">
              <Send className="w-5 h-5 mr-2" />
              S'inscrire
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}