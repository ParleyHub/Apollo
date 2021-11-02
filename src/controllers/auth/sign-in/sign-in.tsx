import { ReactElement } from 'react';
import Head from 'next/head';
import { Input, Button } from '@parley-hub/grace';

import GuessLayout from '../../../layouts/guess';

const SignInTemplate = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Sign In Page - Parley Hub</title>
        <meta name="description" content="Sign In Page - Parley Hub" />
      </Head>

      <main className="py-10 md:py-20 flex items-center" id="body">
        <div className="container">
          <div className="md:grid md:grid-cols-12 md:gap-8">
            <div className="md:col-span-6 md:col-start-4 xl:col-span-4 xl:col-start-5">
              <div className="mb-4">
                <Input
                  placeholder="Email"
                  type="text"
                  inputSize="large"
                  fullWidth
                />
              </div>

              <div className="mb-4">
                <Input
                  placeholder="Password"
                  type="password"
                  inputSize="large"
                  fullWidth
                />
              </div>

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
