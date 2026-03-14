import { GoogleGenerativeAI } from '@google/generative-ai';
import { IngredientResult } from '../types';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function analyzeIngredients(
  ingredientsList: string,
  location: string
): Promise<IngredientResult[]> {
  if (!API_KEY || API_KEY === 'your_gemini_api_key_here') {
    throw new Error('Por favor configura tu GEMINI_API_KEY en el archivo .env');
  }

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-3-flash-preview' });

  const prompt = `Eres un asistente experto en mercados locales y disponibilidad de ingredientes en diferentes ciudades del mundo.

Analiza la siguiente lista de ingredientes y determina su disponibilidad en ${location}.

Lista de ingredientes:
${ingredientsList}

Para cada ingrediente, proporciona:
1. El nombre del ingrediente (limpio y normalizado)
2. Disponibilidad: "easy" (fácil de encontrar en supermercados comunes), "difficult" (difícil, solo en tiendas especializadas), o "impossible" (casi imposible de encontrar)
3. Una nota breve explicando dónde se puede encontrar o por qué es difícil

Responde ÚNICAMENTE con un JSON válido en este formato exacto (sin markdown, sin comillas triples):
[
  {
    "ingredient": "nombre del ingrediente",
    "availability": "easy/difficult/impossible",
    "note": "explicación breve"
  }
]`;

  const result = await model.generateContent(prompt);
  const response = result.response;
  const text = response.text();

  let cleanedText = text.trim();
  if (cleanedText.startsWith('```json')) {
    cleanedText = cleanedText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
  } else if (cleanedText.startsWith('```')) {
    cleanedText = cleanedText.replace(/```\n?/g, '');
  }

  try {
    const parsed = JSON.parse(cleanedText);
    return parsed;
  } catch (error) {
    console.error('Error parsing JSON:', error);
    console.error('Response text:', text);
    throw new Error('No se pudo procesar la respuesta de la IA');
  }
}
