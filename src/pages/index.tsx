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

      <div className="bg-white py-20">
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
              <div className="grid grid-rows-2 grid-cols-12 gap-4">
                <div className="col-span-7 row-span-2">
                  <img
                    src="https://images.pexels.com/photos/3205403/pexels-photo-3205403.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    className="object-cover"
                  />
                </div>

                <div className="col-span-5 row-span-1">
                  <img
                    src="https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    className="object-cover h-full"
                  />
                </div>

                <div className="col-span-5 row-span-1">
                  <img
                    src="https://images.pexels.com/photos/4492161/pexels-photo-4492161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    alt=""
                    className="object-cover h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-20">
        <div className="container">
          <div className="grid grid-cols-12 gap-4 mb-8">
            <div className="col-span-6">
              <h2 className="text-4xl mb-4 text-gray-900">
                Work more easily with everyone
              </h2>

              <p>
                Stay on the same page and make decisions faster by bringing all
                of your work communication into one place.
              </p>
            </div>
          </div>

          <div className="grid grid-rows-2 grid-cols-12 gap-4">
            <div className="col-span-3 bg-white p-4 row-span-2">
              <h4 className="text-xl font-medium mb-2 text-gray-900">
                Channels
              </h4>

              <p className="text-gray-600">
                Stay organized and focused with central spaces for
                conversations, files, tools and people.
              </p>
            </div>

            <div className="col-span-3 bg-white p-4 row-span-1">
              <h4 className="text-xl font-medium text-gray-900">Message</h4>
            </div>

            <div className="col-span-3 bg-white p-4 row-span-1">
              <h4 className="text-xl font-medium text-gray-900">
                Voice and video calls
              </h4>
            </div>

            <div className="col-span-3 bg-white p-4 row-span-1">
              <h4 className="text-xl font-medium text-gray-900">
                Accessibility
              </h4>
            </div>

            <div className="col-span-3 bg-white p-4 row-span-1">
              <h4 className="text-xl font-medium text-gray-900">
                File sharing
              </h4>
            </div>

            <div className="col-span-3 bg-white p-4 row-span-1">
              <h4 className="text-xl font-medium text-gray-900">Security</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="grid grid-cols-12 grid-rows-2">
          <div className="col-span-6 row-span-2">
            <img
              src="https://images.pexels.com/photos/4492135/pexels-photo-4492135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="h-full object-cover"
            />
          </div>

          <div className="col-span-3 row-span-1">
            <img
              src="https://images.pexels.com/photos/3783118/pexels-photo-3783118.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="h-full object-cover"
            />
          </div>

          <div className="col-span-3 row-span-2">
            <img
              src="https://images.pexels.com/photos/4246228/pexels-photo-4246228.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="h-full object-cover"
            />
          </div>

          <div className="col-span-3 row-span-1">
            <img
              src="https://images.pexels.com/photos/3782181/pexels-photo-3782181.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              alt=""
              className="h-full object-cover"
            />
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
