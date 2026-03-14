import { Settings } from 'lucide-react';
import { useState } from 'react';

interface ConfigPanelProps {
  apiKey: string;
  onApiKeyChange: (key: string) => void;
}

export function ConfigPanel({ apiKey, onApiKeyChange }: ConfigPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [tempKey, setTempKey] = useState(apiKey);

  const handleSave = () => {
    onApiKeyChange(tempKey);
    setIsOpen(false);
  };

  const needsConfig = !apiKey || apiKey === 'your_gemini_api_key_here';

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-3 rounded-full shadow-lg transition-all ${
          needsConfig
            ? 'bg-orange-500 hover:bg-orange-600 animate-pulse'
            : 'bg-white hover:bg-gray-100'
        }`}
        title="Configuración"
      >
        <Settings className={needsConfig ? 'w-5 h-5 text-white' : 'w-5 h-5 text-gray-700'} />
      </button>

      {isOpen && (
        <div className="absolute top-14 right-0 w-80 bg-white rounded-lg shadow-xl p-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Configuración</h3>

          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">
              Gemini API Key
            </label>
            <input
              type="password"
              value={tempKey}
              onChange={(e) => setTempKey(e.target.value)}
              placeholder="Pega tu API Key aquí"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-olive-500 focus:border-transparent text-sm"
            />
            <p className="text-xs text-gray-500">
              Obtén tu API Key en:{' '}
              <a
                href="https://makersuite.google.com/app/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-olive-600 hover:underline"
              >
                Google AI Studio
              </a>
            </p>
          </div>

          <div className="mt-4 flex gap-2">
            <button
              onClick={handleSave}
              className="flex-1 bg-olive-600 hover:bg-olive-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Guardar
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
