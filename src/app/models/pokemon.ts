import { Ability } from './ability';
import { Stat } from './state';
import { NameUrl } from './nameurl';
import { Type } from './type';
import { Sprite } from './sprite';
export interface Pokemon {
  id: number;
  name: string;
  url: string;
  abilities: Array<Ability>;
  forms: Array<NameUrl>;
  species: NameUrl
  sprites: Sprite;
  stats: Array<Stat>;
  types: Array<Type>;
  weight: number;
}
