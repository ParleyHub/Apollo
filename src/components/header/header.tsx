import { ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Input } from '@parley-hub/grace';
import { ArrowDownIcon } from '@parley-hub/aeolus';

interface IHeaderProps {
  auth: boolean;
}

const HeaderGuessComponent = () => {
  const router = useRouter();

  console.log('router', router);

  return (
    <div className="container flex justify-between items-center flex-col md:flex-row">
      <Link href="/">
        <a className="flex items-center mb-4 md:mb-0">
          <img src="/assets/images/logo.svg" alt="" className="w-10 mr-4" />

          <h1 className="text-xl text-gray-600 font-medium">Parley Hub</h1>
        </a>
      </Link>

      <nav className="text-gray-600 hidden md:flex font-medium">
        <a href="#" className="mx-4 hover:underline">
          Product
        </a>

        <a href="#" className="mx-4 hover:underline">
          Features
        </a>
      </nav>

      <div className="flex">
        <span
          className={`text-gray-600 cursor-pointer hover:underline font-medium ${
            router.pathname === '/auth/sign-up' ? 'text-primary-600' : ''
          }`}
          onClick={() => router.push('/auth/sign-up')}
        >
          Sign up
        </span>

        <span className="text-gray-600 mx-2">/</span>

        <span
          className={`text-gray-600 cursor-pointer hover:underline font-medium ${
            router.pathname === '/auth/sign-in' ? 'text-primary-600' : ''
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

    <Input placeholder="Search" fullWidth inputSize="small" />

    <div className="flex text-gray-600 items-center cursor-pointer transition duration-300 ease-in-out group hover:text-primary-600">
      John Doe
      <ArrowDownIcon
        variant="default"
        className="flex ml-1 transition duration-300 ease-in-out group-hover:text-primary-600"
      />
    </div>
  </div>
);

const HeaderComponent = ({ auth = false }: IHeaderProps): ReactElement => (
  <header className="py-2 mb-4 border-b border-solid border-gray-200 bg-white">
    {auth ? <HeaderAuthComponent /> : <HeaderGuessComponent />}
  </header>
);

export default HeaderComponent;
