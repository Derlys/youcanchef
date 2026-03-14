import { useState } from 'react';
import { IngredientForm } from './components/IngredientForm';
import { ResultsTable } from './components/ResultsTable';
import { analyzeIngredients } from './services/gemini';
import { IngredientResult } from './types';

function App() {
  const [results, setResults] = useState<IngredientResult[]>([]);
  const [ingredients, setIngredients] = useState('');
  const handleReset = () => {
    setResults([]);
    setIngredients('');
    setLocation('');
  };
  const [location, setLocation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');




  const handleSubmit = async () => {
    setIsLoading(true);
    setError('');


    try {
      const tempKey = import.meta.env.VITE_GEMINI_API_KEY;
      if (!tempKey) {
        throw new Error('La API Key no se detecta en el archivo .env');
      }

      const data = await analyzeIngredients(ingredients, location);
      setResults(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al analizar ingredientes');
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 to-gray-100">

      <div className="container mx-auto px-4 py-8 md:py-16">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
             🧑🏽‍🍳 YouCanChef
            </h1>
          </div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Descubre si puedes cocinar tu receta favorita donde sea que estés
          </p>
        </header>

        <IngredientForm
            onSubmit={handleSubmit}
            isLoading={isLoading}
            ingredients={ingredients}
            setIngredients={setIngredients}
            location={location}
            setLocation={setLocation}
        />

        {error && (
          <div className="max-w-2xl mx-auto mt-6 bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
            {error}
          </div>
        )}

        {results?.length > 0 && <ResultsTable results={results} location={location} />}
        <button
            onClick={handleReset}
            className="mt-6 w-full bg-cream-200 hover:bg-cream-300 text-olive-800 py-3 rounded-xl transition-colors font-medium"
        >
          ← Hacer otra consulta
        </button>

        {results.length === 0 && !isLoading && !error && (
          <div className="text-center mt-16 text-gray-500">
            <p className="text-sm md:text-base">
              Pega los ingredientes de tu receta y descubre qué tan fácil es encontrarlos en tu ciudad actual
            </p>
          </div>
        )}
      </div>

      <footer className="text-center py-8 text-sm text-gray-500">
        <p>Hecho para nómadas digitales con amor 🌍</p>
      </footer>
    </div>
  );
}

export default App;
