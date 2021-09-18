import { ReactElement, FC } from 'react';

import HeaderComponent from '../components/header';

interface PropType {
  Component: FC;
}

const GuessLayout = ({ Component }: PropType): ReactElement => {
  return (
    <div className="bg-lightest-gray">
      <HeaderComponent auth={true} />

      <Component />
    </div>
  );
};

export default GuessLayout;
