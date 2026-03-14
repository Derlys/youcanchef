export interface IngredientResult {
  ingredient: string;
  availability: 'easy' | 'difficult' | 'impossible';
  note: string;
}
