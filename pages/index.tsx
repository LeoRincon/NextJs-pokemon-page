import { NextPage } from 'next';

import { Button } from '@nextui-org/react';

import { Layout } from '@/components/layouts';

const HomePage: NextPage = () => {
 return (
  <Layout tittle='Pokemon List'>
   <Button>Press me</Button>
  </Layout>
 );
};

export default HomePage;
