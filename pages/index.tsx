import { GetStaticProps, NextPage } from 'next';
import { Grid } from '@nextui-org/react';

import { Layout } from '@/components/layouts';
import pokeApi from '../api/pokeApi';

import type { Pokemon, PokemonResponse } from '@/interfaces';
import { PokemonCard } from '@/components/pokemon';

interface Props {
 pokemons: Pokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
 return (
  <Layout tittle='Pokemon List'>
   <Grid.Container gab={2} justify='center'>
    {pokemons.map((pokemon) => (
     <PokemonCard key={pokemon.id} pokemon={pokemon} />
    ))}
   </Grid.Container>
  </Layout>
 );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
 const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');
 const pokemons: Pokemon[] = data.results.map((pokemon, index) => ({
  ...pokemon,
  id: index + 1,
  img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
   index + 1
  }.svg`,
 }));

 return {
  props: {
   pokemons,
  },
 };
};
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/2.png
