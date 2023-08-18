import { pokeApi } from '@/api';
import { PokemonByID } from '@/interfaces';

export const getPokemonInfo = async (paramOfSearch: string) => {
 try {
  const { data } = await pokeApi.get<PokemonByID>(`/pokemon/${paramOfSearch}`);

  return {
   id: data.id,
   name: data.name,
   sprites: data.sprites,
  };
 } catch (error) {
  console.log(error);
  return null;
 }
};
