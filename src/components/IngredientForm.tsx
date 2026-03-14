import { useState } from 'react';
import { ChefHat } from 'lucide-react';

interface IngredientFormProps {
  onSubmit: (ingredients: string, location: string) => void;
  isLoading: boolean;
}

export function IngredientForm({ onSubmit, isLoading }: IngredientFormProps) {
  const [ingredients, setIngredients] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ingredients.trim() && location.trim()) {
      onSubmit(ingredients, location);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto space-y-6">
      <div className="space-y-2">
        <label htmlFor="ingredients" className="block text-sm font-medium text-gray-700">
          Lista de Ingredientes
        </label>
        <textarea
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Pega aquí tu lista de ingredientes&#10;Ejemplo:&#10;2 tazas de harina&#10;3 huevos&#10;200g de queso parmesano&#10;Salsa de soja"
          className="w-full h-48 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent resize-none text-gray-800 placeholder-gray-400"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="location" className="block text-sm font-medium text-gray-700">
          Ciudad y País
        </label>
        <input
          id="location"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Ej: Bangkok, Tailandia"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent text-gray-800 placeholder-gray-400"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isLoading || !ingredients.trim() || !location.trim()}
        className="w-full bg-gradient-to-r from-olive-600 to-olive-700 hover:from-olive-700 hover:to-olive-800 text-white font-semibold py-4 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
      >
        <ChefHat className="w-6 h-6" />
        {isLoading ? 'Analizando...' : '¿Puedo cocinar esto aquí?'}
      </button>
    </form>
  );
}
