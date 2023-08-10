import { FC } from 'react';

import Head from 'next/head';

import { NavBar } from '../ui';

interface Props {
 children: JSX.Element | JSX.Element[];
 tittle?: string;
}

export const Layout: FC<Props> = ({ children, tittle }) => {
 return (
  <>
   <Head>
    <title>{tittle || 'Pokemon App'}</title>
    <meta name='author' content='Leonardo Rincón' />
    <meta
     name='description'
     content='Information about the Pokemon: PokeName'
    />
    <meta name='keywords' content='PokeName, Pokemon, pokedex' />
   </Head>

   <NavBar />

   <main
    style={{
     padding: '0px 20px',
    }}
   >
    {children}
   </main>
  </>
 );
};
