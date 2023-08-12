import { Grid } from '@nextui-org/react';

import { Layout } from '@/components/layouts';
import { PokemonCard } from '@/components/pokemon';

let pokemon = [
 {
  id: 151,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg',
  name: 'mew',
  url: 'https://pokeapi.co/api/v2/pokemon/151/',
 },
 {
  id: 151,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/151.svg',
  name: 'mew',
  url: 'https://pokeapi.co/api/v2/pokemon/151/',
 },
];
const FavoritesPage = () => {
 return (
  <Layout tittle='Favorites Pokemons'>
   <Grid.Container gap={1}>
    {pokemon.map((p) => (
     <PokemonCard key={p.id} pokemon={p} />
    ))}
   </Grid.Container>
  </Layout>
 );
};

export default FavoritesPage;
