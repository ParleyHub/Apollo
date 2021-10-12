import { ReactElement } from 'react';
import Head from 'next/head';
import { Input, Button } from '@parley-hub/grace';

import GuessLayout from '../../layouts/guess';

import AuthStyles from './auth.module.scss';

const SignInTemplate = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Sign In Page - Parley Hub</title>
        <meta name="description" content="Sign In Page - Parley Hub" />
      </Head>

      <main
        className="py-10 md:py-20 flex items-center"
        id={AuthStyles.authBody}
      >
        <div className="container">
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6 md:col-start-4 xl:col-span-4 xl:col-start-5">
              <Input
                className="mb-4"
                placeholder="Email"
                type="text"
                inputSize="large"
                fullWidth
              />

              <Input
                className="mb-4"
                placeholder="Password"
                type="password"
                inputSize="large"
                fullWidth
              />

              <Button label="Sign In" variant="info" size="large" fullWidth />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

const SignInPage = (): ReactElement => {
  return <GuessLayout Component={SignInTemplate} />;
};

export default SignInPage;
