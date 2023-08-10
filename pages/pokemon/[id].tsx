import { NextPage, GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { PokemonByID } from '@/interfaces';

interface Props {
 pokemon: PokemonByID;
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
 const { id, name } = pokemon;
 console.info('🇨🇴🚨 => file: [id].tsx:12 => pokemon:', pokemon);

 return (
  <Layout tittle='Any pokemon'>
   <h1>
    {`#${id}`} - {name}
   </h1>
  </Layout>
 );
};

export const getStaticPaths: GetStaticPaths = async (ctx) => {
 const pokemonsPaths = [...Array(151)].map((_, index) => `${index + 1}`);

 return {
  paths: pokemonsPaths.map((id) => ({
   params: { id },
  })),
  // paths: [
  //  {
  //   params: {
  //    id: '1',
  //   },
  //  },
  // ],
  fallback: false,
 };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
 const id = ctx.params?.id;

 const { data } = await pokeApi.get<PokemonByID>(`/pokemon/${id}`);

 return {
  props: {
   pokemon: data,
  },
 };
};

export default PokemonPage;
