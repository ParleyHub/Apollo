import { ReactElement } from 'react';
import Head from 'next/head';

import AuthLayout from '../../layouts/auth';

import dashboardStyles from './dashboard.module.scss';

const DashboardTemplate = (): ReactElement => {
  return (
    <>
      <Head>
        <title>Dashboard Page - Parley Hub</title>
        <meta name="description" content="Dashboard Page - Parley Hub" />
      </Head>

      <main
        className="py-10 md:py-20 flex items-center"
        id={dashboardStyles.dashboardBody}
      >
        <div className="container">
          <h2>Dashboard</h2>
        </div>
      </main>
    </>
  );
};

const DashboardPage = (): ReactElement => {
  return <AuthLayout Component={DashboardTemplate} />;
};

export default DashboardPage;
