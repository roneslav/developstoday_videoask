import React, { lazy, Suspense } from 'react';
import HomePage from './homePage/page';
import Loader from './loader/Loader';

const homePage = lazy(() => import('./homePage/page'));

const Home = () => {
  return (
    <Suspense fallback={<Loader />}>
      <HomePage />
    </Suspense>
  );
};

export default Home;
