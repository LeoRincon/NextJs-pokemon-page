const toggleFavorites = (id: number): void => {
 console.log('toggleFavorites', id);

 let favorites: number[] = JSON.parse(
  localStorage.getItem('pokeFavorites') || '[]'
 );

 if (favorites.includes(id)) {
  favorites = favorites.filter((pokeId) => pokeId !== id);
 } else {
  favorites.push(id);
 }

 localStorage.setItem('pokeFavorites', JSON.stringify(favorites));
};

const existInFavorites = (id: number): boolean => {
 if (typeof window === 'undefined') return false;

 const favorites: number[] = JSON.parse(
  localStorage.getItem('pokeFavorites') || '[]'
 );

 return favorites.includes(id);
};

const localFavorites = { toggleFavorites, existInFavorites };

export default localFavorites;
