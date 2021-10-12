import { ReactElement, FC } from 'react';

import HeaderComponent from '../components/header';
import SidebarComponent from '../components/sidebar';

interface IPropType {
  Component: FC;
}

const AuthLayout = ({ Component }: IPropType): ReactElement => {
  return (
    <div className="bg-gray-50">
      <HeaderComponent auth={true} />

      <section className="flex flex-1">
        <SidebarComponent />

        <Component />
      </section>
    </div>
  );
};

export default AuthLayout;
