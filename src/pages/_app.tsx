import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import '@parley-hub/grace/lib/main.css';
import '@parley-hub/aeolus/lib/main.css';

import store from '../middleware/redux/store';

import '../styles/styles.scss';

const MyApp = ({ Component, pageProps }: AppProps): ReactElement => {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5"
        />
        <meta name="description" content="Welcome to Parley Hub" />
        <link rel="icon" href="/favicon.ico" />

        <title>Welcome to Parley Hub</title>
      </Head>

      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
