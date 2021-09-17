import { ReactElement } from 'react';
import { Button } from '@parley-hub/grace';

import GuessLayout from '../layouts/guess';

const HomeTemplate = (): ReactElement => {
  return <Button label="Test" variant="success" />;
};

const Home = (): ReactElement => {
  return <GuessLayout Component={HomeTemplate} />;
};

export default Home;
