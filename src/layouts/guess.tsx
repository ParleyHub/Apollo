import { ReactElement, FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import type { RootState } from '../middleware/redux/store';
import { setMaskShow } from '../middleware/redux/slice';

import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';

interface IPropType {
  Component: FC;
}

const GuessLayout = ({ Component }: IPropType): ReactElement => {
  const dispatch = useDispatch();
  const isMaskShow = useSelector(
    (state: RootState) => state.verbose.isMaskShow
  );

  useEffect(() => {
    const body = document.body;

    if (isMaskShow) {
      body.classList.add('overflow-hidden');
      return;
    }

    body.classList.remove('overflow-hidden');
  }, [isMaskShow]);

  return (
    <div className="bg-gray-50">
      <HeaderComponent auth={false} />

      <Component />

      <FooterComponent />

      {isMaskShow && (
        <div
          className="bg-black fixed top-0 right-0 bottom-0 left-0 opacity-50"
          onClick={() => dispatch(setMaskShow(false))}
        ></div>
      )}
    </div>
  );
};

export default GuessLayout;
