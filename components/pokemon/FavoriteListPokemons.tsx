import { FC } from 'react';
import { Grid, Text } from '@nextui-org/react';
import { FavoriteCardPokemon } from '.';

interface Props {
 pokemonsListIds: number[];
}

export const FavoriteListPokemons: FC<Props> = ({ pokemonsListIds }) => {
 return (
  <>
   <Text h1>Favorites Pokemons</Text>
   <Grid.Container gap={2} direction='row' justify='flex-start'>
    {pokemonsListIds.map((id) => (
     <FavoriteCardPokemon key={id} pokemonId={id} />
    ))}
   </Grid.Container>
  </>
 );
};
