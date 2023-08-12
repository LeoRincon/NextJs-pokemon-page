import { Layout } from '@/components/layouts';
import { FavoriteListPokemons } from '@/components/pokemon';
import { NoFavorites } from '@/components/ui/NoFavorites';
import { localFavorites } from '@/utils';
import { useState, useEffect } from 'react';

const FavoritesPage = () => {
 const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

 useEffect(() => {
  setFavoritesPokemons(localFavorites.FavoritesPokemonsIds());
 }, []);

 return (
  <Layout tittle='Favorites Pokemons'>
   {favoritesPokemons.length === 0 ? (
    <NoFavorites />
   ) : (
    <FavoriteListPokemons pokemonsListIds={favoritesPokemons} />
   )}
  </Layout>
 );
};

export default FavoritesPage;
