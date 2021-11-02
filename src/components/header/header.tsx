import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Input } from '@parley-hub/grace';
import { ArrowDownIcon, BarsIcon } from '@parley-hub/aeolus';

interface IHeaderProps {
  auth: boolean;
}

import logo from '../../../public/assets/images/logo.svg';

const HeaderGuessComponent = () => {
  const router = useRouter();

  return (
    <div className="container flex items-center flex-row justify-between">
      <Link href="/">
        <a className="flex items-center">
          <div className="relative mr-4 w-10 h-10">
            <Image src={logo} alt="Parley Hub" layout="responsive" />
          </div>

          <h1 className="text-xl text-blue-600 font-medium">Parley Hub</h1>
        </a>
      </Link>

      <div className="flex items-center justify-center w-10 h-10 cursor-pointer">
        <BarsIcon className="text-2xl leading-none flex" />
      </div>

      <div className="hidden md:flex">
        <span
          className={`text-gray-600 cursor-pointer hover:underline font-medium ${
            router.pathname === '/auth/sign-up' ? 'text-blue-600' : ''
          }`}
          onClick={() => router.push('/auth/sign-up')}
        >
          Sign up
        </span>

        <span className="text-gray-600 mx-2">/</span>

        <span
          className={`text-gray-600 cursor-pointer hover:underline font-medium ${
            router.pathname === '/auth/sign-in' ? 'text-blue-600' : ''
          }`}
          onClick={() => router.push('/auth/sign-in')}
        >
          Login
        </span>
      </div>
    </div>
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
