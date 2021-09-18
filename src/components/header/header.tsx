import { ReactElement } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button, Input } from '@parley-hub/grace';

interface IHeaderProps {
  auth: boolean;
}

const HeaderGuessComponent = () => {
  const router = useRouter();

  return (
    <>
      <nav className="text-gray-600">
        <a href="#" className="mx-4">
          Product
        </a>

        <a href="#" className="mx-4">
          Features
        </a>
      </nav>

      <div className="flex">
        <Button
          label="Sign up for free"
          variant="info"
          className="mr-4"
          onClick={() => router.push('/auth/sign-up')}
        />

        <Button label="Login" onClick={() => router.push('/auth/sign-in')} />
      </div>
    </>
  );
};

const HeaderAuthComponent = () => (
  <>
    <Input placeholder="Search" />

    <div className="flex text-gray-600">John Doe</div>
  </>
);

const HeaderComponent = ({ auth = false }: IHeaderProps): ReactElement => (
  <header className="py-4 shadow-sm bg-white">
    <div className="container flex justify-between items-center">
      <Link href="/">
        <a className="flex items-center">
          <img src="/assets/images/logo.png" alt="" className="w-10 mr-2" />

          <h1 className="text-xl text-gray-600">Parley Hub</h1>
        </a>
      </Link>

      {auth ? <HeaderAuthComponent /> : <HeaderGuessComponent />}
    </div>
  </header>
);

export default HeaderComponent;