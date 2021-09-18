import { ReactElement } from 'react';

import GuessLayout from '../layouts/guess';

const HomeTemplate = (): ReactElement => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            <div className="flex flex-col justify-center">
              <h2 className="text-5xl text-blue-600 mb-4">Parley Hub</h2>

              <p className="text-2xl">
                Meet, chat, call, and collaborate in just one place.
              </p>
            </div>

            <div>
              <img
                src="https://images.pexels.com/photos/4226256/pexels-photo-4226256.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-28">
        <div className="container">
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl mb-6 text-gray-800">
                Parley Hub is for everyone
              </h2>

              <p className="text-xl mb-4 text-gray-800">
                Whether it’s chat, calls, or video, anyone can engage at any
                time, bringing everyone closer.
              </p>

              <p className="text-xl mb-4 text-gray-800">
                Your docs, photos, videos, chat history, and meeting notes are
                always there, so it’s easier to work together.
              </p>

              <p className="text-xl text-gray-800">
                Set up your team’s space with all the apps you need so you can
                stay in just one place instead of jumping around.
              </p>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/3205403/pexels-photo-3205403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                  className="row-span-2 object-cover"
                />

                <img
                  src="https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                  className="row-span-1 object-cover"
                />

                <img
                  src="https://images.pexels.com/photos/4492161/pexels-photo-4492161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                  className="row-span-2 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Home = (): ReactElement => {
  return <GuessLayout Component={HomeTemplate} />;
};

export default Home;
