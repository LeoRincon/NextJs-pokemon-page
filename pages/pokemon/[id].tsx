import { NextPage, GetStaticProps, GetStaticPaths } from 'next';

import { Button, Card, Container, Grid, Text } from '@nextui-org/react';

import { Layout } from '@/components/layouts';
import { pokeApi } from '@/api';
import { PokemonByID } from '@/interfaces';
import Image from 'next/image';

interface Props {
 pokemon: PokemonByID;
}
const PokemonPage: NextPage<Props> = ({ pokemon }) => {
 console.info('🇨🇴🚨 => file: [id].tsx:13 => pokemon:', pokemon);

 return (
  <Layout tittle='Any pokemon'>
   <Grid.Container gap={2} css={{ marginTop: '5px' }}>
    <Grid xs={12} sm={4}>
     <Card hoverable css={{ padding: '30px' }}>
      <Card.Body>
       <Card.Image
        src={
         pokemon.sprites?.other?.dream_world?.front_default ||
         pokemon.sprites?.front_default
        }
        alt={pokemon.name}
        width='100%'
        height={200}
       />
      </Card.Body>
     </Card>
    </Grid>

    <Grid xs={12} sm={8}>
     <Card>
      <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
       <Text h1 transform='capitalize'>
        {pokemon.name}
       </Text>
       <Button color='gradient' ghost>
        add to favorites
       </Button>
      </Card.Header>
      <Card.Body>
       <Text h3>Sprites:</Text>
       <Container direction='row' display='flex'>
        <Image
         src={pokemon.sprites?.front_default}
         alt={pokemon.name}
         width={100}
         height={100}
        />
        <Image
         src={pokemon.sprites?.back_default}
         alt={pokemon.name}
         width={100}
         height={100}
        />
        <Image
         src={pokemon.sprites?.front_shiny}
         alt={pokemon.name}
         width={100}
         height={100}
        />
        <Image
         src={pokemon.sprites?.back_shiny}
         alt={pokemon.name}
         width={100}
         height={100}
        />
       </Container>
      </Card.Body>
     </Card>
    </Grid>
   </Grid.Container>
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
