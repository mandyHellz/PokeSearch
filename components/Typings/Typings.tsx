export interface pokeProps {
  id: string;
  name: string;
  sprites: { other: { home: { front_default: string } } };
  types: [{ type: { name: string } }];
  weight: number;
  height: number;
  moves: [{ move: { name: string } }];
  stats: [{ base_stat: number; stat: { name: string } }];
}
export interface pokeAttributesProps {
  id: string;
  descriptions: [{ description: string; language: { name: string } }];
}
export interface colorPaletteProps {
  type: string;
  color: string;
}
