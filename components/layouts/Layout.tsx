import { FC } from 'react';

import Head from 'next/head';

import { NavBar } from '../ui';

interface Props {
 children: JSX.Element | JSX.Element[];
 tittle?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin;

export const Layout: FC<Props> = ({ children, tittle }) => {
 return (
  <>
   <Head>
    <title>{tittle || 'Pokemon App'}</title>
    <meta name='author' content='Leonardo Rincón' />
    <meta
     name='description'
     content={`Information about the Pokemon: ${tittle}`}
    />
    <meta name='keywords' content={`${tittle}, Pokemon, pokedex`} />

    <meta property='og:title' content={`Information about ${tittle}`} />
    <meta
     property='og:description'
     content={`This page contains information about the Pokemon: ${tittle}`}
    />
    <meta property='og:image' content={`${origin}/img/bannerPokemon.png`} />
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
