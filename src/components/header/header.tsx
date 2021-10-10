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

  return (
    <div className="container flex justify-between items-center flex-col md:flex-row">
      <Link href="/">
        <a className="flex items-center mb-4 md:mb-0">
          <img src="/assets/images/logo.svg" alt="" className="w-10 mr-4" />

          <h1 className="text-xl text-white">Parley Hub</h1>
        </a>
      </Link>

      <nav className="text-white hidden md:flex">
        <a href="#" className="mx-4 hover:underline">
          Product
        </a>

        <a href="#" className="mx-4 hover:underline">
          Features
        </a>
      </nav>

      <div className="flex">
        <span
          className="text-white cursor-pointer hover:underline"
          onClick={() => router.push('/auth/sign-up')}
        >
          Sign up
        </span>

        <span className="text-white mx-2">/</span>

        <span
          className="text-white cursor-pointer hover:underline"
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

    <div className="flex text-white items-center cursor-pointer transition duration-300 ease-in-out group hover:text-blue-600">
      John Doe
      <ArrowDownIcon
        variant="default"
        className="flex ml-1 transition duration-300 ease-in-out group-hover:text-blue-600"
      />
    </div>
  </div>
);

const HeaderComponent = ({ auth = false }: IHeaderProps): ReactElement => (
  <header className="py-2 shadow-sm bg-primary-600 rounded-lg mb-4">
    {auth ? <HeaderAuthComponent /> : <HeaderGuessComponent />}
  </header>
);

export default HeaderComponent;
