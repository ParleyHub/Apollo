import { ReactElement, FC } from 'react';

import HeaderComponent from '../components/header';

interface IPropType {
  Component: FC;
}

const AuthLayout = ({ Component }: IPropType): ReactElement => {
  return (
    <div className="bg-white p-4">
      <HeaderComponent auth={true} />

      <Component />
    </div>
  );
};

export default AuthLayout;
