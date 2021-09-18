import { ReactElement } from 'react';
import { Button } from '@parley-hub/grace';

interface IHeaderProps {
  auth: boolean;
}

const HeaderGuessComponent = () => (
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
      <Button label="Login" />

      <Button label="Sign up for free" variant="info" />
    </div>
  </>
);

const HeaderAuthComponent = () => (
  <>
    <div className="flex">John Doe</div>
  </>
);

const HeaderComponent = ({ auth = false }: IHeaderProps): ReactElement => (
  <header className="py-4 shadow-sm bg-white">
    <div className="container flex justify-between items-center">
      <a href="#" className="flex items-center">
        <img src="/assets/images/logo.png" alt="" className="w-10 mr-2" />

        <h1 className="text-xl text-gray-600">Parley Hub</h1>
      </a>

      {auth ? <HeaderAuthComponent /> : <HeaderGuessComponent />}
    </div>
  </header>
);

export default HeaderComponent;
