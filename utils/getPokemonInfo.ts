import { pokeApi } from '@/api';
import { PokemonByID } from '@/interfaces';

export const getPokemonInfo = async (paramOfSearch: string) => {
 const { data } = await pokeApi.get<PokemonByID>(`/pokemon/${paramOfSearch}`);

 return {
  id: data.id,
  name: data.name,
  sprites: data.sprites,
 };
};
