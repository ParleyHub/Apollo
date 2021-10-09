import { ReactElement, FC } from 'react';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

interface IPropType {
  Component: FC;
}

const GuessLayout = ({ Component }: IPropType): ReactElement => {
  return (
    <div className="bg-white p-4">
      <HeaderComponent auth={false} />

      <Component />

      <FooterComponent />
    </div>
  );
};

export default GuessLayout;
