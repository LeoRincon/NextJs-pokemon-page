import { GetStaticProps, NextPage } from 'next';

import { Layout } from '@/components/layouts';
import pokeApi from '../api/pokeApi';

import type { Pokemon, PokemonResponse } from '@/interfaces';

interface Props {
 pokemons: Pokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {
 console.info('🇨🇴🚨 => file: index.tsx:7 => props:', pokemons);

 return (
  <Layout tittle='Pokemon List'>
   <ul>
    {pokemons.map((pokemon) => (
     <li key={pokemon.id}>{`#${pokemon.id} - ${pokemon.name}`}</li>
    ))}
   </ul>
  </Layout>
 );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (ctx) => {
 const { data } = await pokeApi.get<PokemonResponse>('/pokemon?limit=151');
 const pokemons: Pokemon[] = data.results.map((pokemon, index) => ({
  ...pokemon,
  id: index + 1,
  image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
   index + 1
  }.svg`,
 }));

 for (const pokemon of pokemons) {
 }

 return {
  props: {
   pokemons,
  },
 };
};
