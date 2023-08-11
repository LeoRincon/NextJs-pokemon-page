import { Spacer, Text, useTheme, Container } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
 const { theme } = useTheme();

 return (
  <div
   style={{
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'start',
    padding: '0px 20px',
    backgroundColor: theme?.colors.gray900.value,
   }}
  >
   <Link href='/'>
    <Image
     src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
     alt='Page Icon'
     width={70}
     height={70}
    />
   </Link>
   <Link href='/'>
    <Container
     direction='row'
     display='flex'
     alignItems='center'
     css={{ padding: '0' }}
    >
     <Text color='white' h2>
      P
     </Text>
     <Text color='white' h3>
      okémon
     </Text>
    </Container>
   </Link>

   <Spacer
    css={{
     flex: 1,
    }}
   />

   <Text color='white'>Favorites</Text>
  </div>
 );
};
