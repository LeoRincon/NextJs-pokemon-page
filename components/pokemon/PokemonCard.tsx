import { Text, Card, Grid, Row } from '@nextui-org/react';
import { FC } from 'react';

import type { Pokemon } from '@/interfaces';

interface Props {
 pokemon: Pokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon }) => {
 return (
  <>
   <Grid xs={6} sm={3} md={2} xl={1} key={pokemon.id}>
    <Card hoverable clickable>
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