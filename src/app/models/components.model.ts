import { Measurements } from './measurements.model';
import { Ingredient } from './ingredient.model';

export class Components {
  id: number;
  raw_text: string;
  extra_comment: string;
  position: string;
  measurements: Array<Measurements>;
  ingredient: Ingredient;
}
