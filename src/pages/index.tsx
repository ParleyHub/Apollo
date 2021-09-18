import { ReactElement } from 'react';

import GuessLayout from '../layouts/guess';

const HomeTemplate = (): ReactElement => {
  return <div>Home</div>;
};

const Home = (): ReactElement => {
  return <GuessLayout Component={HomeTemplate} />;
};

export default Home;
