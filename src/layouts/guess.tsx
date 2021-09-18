import { ReactElement, FC } from 'react';

import HeaderComponent from '../components/header';

interface IPropType {
  Component: FC;
}

const GuessLayout = ({ Component }: IPropType): ReactElement => {
  return (
    <div className="bg-lightest-gray">
      <HeaderComponent auth={false} />

      <Component />
    </div>
  );
};

export default GuessLayout;
