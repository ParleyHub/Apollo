import { ReactElement, FC } from 'react';

interface PropType {
  Component: FC;
}

const GuessLayout = ({ Component }: PropType): ReactElement => {
  return (
    <div className="bg-white">
      <header>
        <div className="container mx-auto">
          <img src="/assets/images/logo.png" alt="" />
        </div>
      </header>

      <Component />
    </div>
  );
};

export default GuessLayout;
