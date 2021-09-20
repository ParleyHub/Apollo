import { ReactElement } from 'react';
import Head from 'next/head';
import { Input, Button } from '@parley-hub/grace';

import GuessLayout from '../../layouts/guess';

const SignUpTemplate = (): ReactElement => {
  return (
    <div>
      <Head>
        <title>Sign Up Page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main className="bg-lightest-gray py-10 md:py-20 full-screen flex items-center">
        <div className="container">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 col-start-5">
              <Input
                className="mb-4"
                placeholder="Full Name"
                type="text"
                inputSize="large"
                fullWidth
              />

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

              <Input
                className="mb-4"
                placeholder="Confirm Password"
                type="password"
                inputSize="large"
                fullWidth
              />

              <Button label="Sign Up" variant="info" size="large" fullWidth />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

const SignUpPage = (): ReactElement => {
  return <GuessLayout Component={SignUpTemplate} />;
};

export default SignUpPage;
