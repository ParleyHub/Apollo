import { ReactElement, FC } from 'react';

interface PropType {
  Component: FC;
}

const GuessLayout = ({ Component }: PropType): ReactElement => {
  return (
    <div className="bg-white">
      <Component />
    </div>
  );
};

export default GuessLayout;
