import { Ability } from './ability';
import { NameUrl } from './type';
export interface Pokemon {
  id: number;
  name: string;
  url: string;
  abilities: Array<Ability>;
  forms: Array<NameUrl>;
  species: Array<NameUrl>;

}
