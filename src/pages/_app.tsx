import { ReactElement } from 'react';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '@parley-hub/grace/lib/main.css';
import '@parley-hub/aeolus/lib/main.css';

import '../styles/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <link rel="icon" href="/favicon.ico" />

        <title>Welcome to Parley Hub</title>
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
