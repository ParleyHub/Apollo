import { ReactElement, FC } from 'react';
import { useSelector } from 'react-redux';

import type { RootState } from '../middleware/redux/store';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

interface IPropType {
  Component: FC;
}

const GuessLayout = ({ Component }: IPropType): ReactElement => {
  const isMaskShow = useSelector(
    (state: RootState) => state.verbose.isMaskShow
  );

  return (
    <div className="bg-gray-50">
      <HeaderComponent auth={false} />

      <Component />

      <FooterComponent />

      {isMaskShow && (
        <div className="bg-black absolute top-0 right-0 bottom-0 left-0 opacity-50"></div>
      )}
    </div>
  );
};

export default GuessLayout;
