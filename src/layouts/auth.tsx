import { ReactElement, FC } from 'react';

import HeaderComponent from '../components/header';

interface IPropType {
  Component: FC;
}

const AuthLayout = ({ Component }: IPropType): ReactElement => {
  return (
    <div className="bg-lightest-gray">
      <HeaderComponent auth={true} />

      <Component />
    </div>
  );
};

export default AuthLayout;
