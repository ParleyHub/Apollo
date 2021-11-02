import { ReactElement, ReactNode, FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Input } from '@parley-hub/grace';
import { ArrowDownIcon, BarsIcon, CancelOutlineIcon } from '@parley-hub/aeolus';

import type { RootState } from '../../middleware/redux/store';
import { setMaskShow } from '../../middleware/redux/slice';

import logo from '../../../public/assets/images/logo.svg';
interface IHeaderProps {
  auth: boolean;
}

interface INavigationProps {
  children: ReactNode;
}

const NavigationWrapperComponent: FC<INavigationProps> = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white rounded-l-2xl p-6 fixed top-0 right-0 bottom-0 w-80 z-10 md:hidden">
      <div className="flex items-center justify-between pb-4 border-b border-solid border-gray-200 mb-4">
        <h2 className="text-xl text-blue-600 font-medium">Parley Hub</h2>

        <div
          className="cursor-pointer"
          onClick={() => dispatch(setMaskShow(false))}
        >
          <CancelOutlineIcon className="text-2xl flex" />
        </div>
      </div>

      {children}
    </div>
  );
};

const NavigationGuessComponent = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col md:flex-row">
      <span
        className={`text-gray-600 cursor-pointer hover:underline font-medium py-2 px-4 md:p-0 ${
          router.pathname === '/auth/sign-up'
            ? 'bg-gray-100 rounded-lg text-blue-600'
            : ''
        }`}
        onClick={() => router.push('/auth/sign-up')}
      >
        Sign up
      </span>

      <span className="hidden text-gray-600 mx-2 md:inline-block">/</span>

      <span
        className={`text-gray-600 cursor-pointer hover:underline font-medium py-2 px-4 md:p-0 ${
          router.pathname === '/auth/sign-in'
            ? 'bg-gray-100 rounded-lg text-blue-600'
            : ''
        }`}
        onClick={() => router.push('/auth/sign-in')}
      >
        Login
      </span>
    </div>
  );
};

const HeaderGuessComponent = () => {
  const isMaskShow = useSelector(
    (state: RootState) => state.verbose.isMaskShow
  );
  const dispatch = useDispatch();

  return (
    <>
      <div className="container flex items-center flex-row justify-between">
        <Link href="/">
          <a className="flex items-center">
            <div className="relative mr-4 w-10 h-10">
              <Image src={logo} alt="Parley Hub" layout="responsive" />
            </div>

            <h1 className="text-xl text-blue-600 font-medium">Parley Hub</h1>
          </a>
        </Link>

        <div
          className="flex items-center justify-center w-10 h-10 cursor-pointer md:hidden"
          onClick={() => dispatch(setMaskShow(true))}
        >
          <BarsIcon className="text-2xl leading-none flex" />
        </div>

        <div className="hidden md:flex">
          <NavigationGuessComponent />
        </div>
      </div>

      {isMaskShow && (
        <NavigationWrapperComponent>
          <NavigationGuessComponent />
        </NavigationWrapperComponent>
      )}
    </>
  );
};

const HeaderAuthComponent = () => (
  <div className="flex flex-1 justify-between px-4">
    <Link href="/">
      <a className="flex items-center mb-4 md:mb-0">
        <img src="/assets/images/logo.svg" alt="" className="w-10" />

        <h1 className="hidden">Parley Hub</h1>
      </a>
    </Link>

    <div className="w-96 flex items-center">
      <Input placeholder="Search" fullWidth />
    </div>

    <div className="flex text-gray-600 items-center cursor-pointer transition duration-300 ease-in-out group hover:text-blue-600">
      John Doe
      <ArrowDownIcon className="flex ml-1 transition duration-300 ease-in-out group-hover:text-blue-600" />
    </div>
  </div>
);

const HeaderComponent = ({ auth = false }: IHeaderProps): ReactElement => (
  <header className="border-b border-solid border-gray-200 bg-white flex h-16">
    {auth ? <HeaderAuthComponent /> : <HeaderGuessComponent />}
  </header>
);

export default HeaderComponent;
