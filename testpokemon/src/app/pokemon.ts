export class Pokemon {
  id: number;
  name: string;
  level: number;
  image: string;
  abilities: Abilities[];
  background_color: string;
}

class Abilities {
  name: string;
  icon: string;
  power: number;
  description: string;

}
