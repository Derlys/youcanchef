import { IngredientResult } from '../types';

interface ResultsTableProps {
  results: IngredientResult[];
  location: string;
}

export function ResultsTable({ results, location }: ResultsTableProps) {
  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'easy':
        return 'text-green-500';
      case 'difficult':
        return 'text-yellow-500';
      case 'impossible':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  };

  const getAvailabilityText = (availability: string) => {
    switch (availability) {
      case 'easy':
        return 'Fácil';
      case 'difficult':
        return 'Difícil';
      case 'impossible':
        return 'Casi Imposible';
      default:
        return 'Desconocido';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-gradient-to-r from-olive-600 to-olive-700 px-6 py-4">
        <h2 className="text-xl font-semibold text-white">
          Disponibilidad en {location}
        </h2>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Ingrediente
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Disponibilidad
              </th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                Nota Rápida
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {results.map((result, index) => (
              <tr key={index} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 text-gray-800 font-medium">
                  {result.ingredient}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-2">
                    <span className={`text-2xl ${getAvailabilityColor(result.availability)}`}>
                      ●
                    </span>
                    <span className="text-sm text-gray-600">
                      {getAvailabilityText(result.availability)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">
                  {result.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
