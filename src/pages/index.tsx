import { ReactElement } from 'react';
import { Button } from '@parley-hub/grace';

import AuthLayout from '../layouts/auth';

const HomeTemplate = (): ReactElement => {
  return <Button label="Test" variant="success" />;
};

const Home = (): ReactElement => {
  return <AuthLayout Component={HomeTemplate} />;
};

export default Home;
