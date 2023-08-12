import { FC } from 'react';
import { useRouter } from 'next/router';

import { Text, Card, Grid, Row } from '@nextui-org/react';

import type { Pokemon } from '@/interfaces';

interface Props {
 pokemon: Pokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
 const router = useRouter();

 const handleClick = () => {
  router.push(`/pokemon/name/${pokemon.name}`);
 };

 return (
  <>
   <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id} css={{ margin: '8px' }}>
    <Card hoverable clickable onClick={handleClick}>
     <Card.Body css={{ p: 1 }}>
      <Card.Image src={pokemon.img} width='100%' height={140} />
     </Card.Body>
     <Card.Footer>
      <Row justify='space-between'>
       <Text transform='capitalize'>{pokemon.name}</Text>
       <Text>{`#${pokemon.id}`}</Text>
      </Row>
     </Card.Footer>
    </Card>
   </Grid>
  </>
 );
};
