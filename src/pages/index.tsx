import { ReactElement } from 'react';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';

import GuessLayout from '../layouts/guess';

import image01 from '../../public/assets/images/home/image-01.jpeg';
import image02 from '../../public/assets/images/home/image-02.jpeg';
import image03 from '../../public/assets/images/home/image-03.jpeg';
import image04 from '../../public/assets/images/home/image-04.jpeg';
import image05 from '../../public/assets/images/home/image-05.jpeg';
import image06 from '../../public/assets/images/home/image-06.jpeg';
import image07 from '../../public/assets/images/home/image-07.jpeg';
import image08 from '../../public/assets/images/home/image-08.jpeg';

const HomeTemplate = (): ReactElement => {
  return (
    <>
      <div className="bg-white py-10 md:py-0">
        <div className="container">
          <div className="md:grid md:grid-cols-2 md:gap-12">
            <div className="mb-4 rounded-md md:rounded-none md:order-2 md:mb-0">
              <Image
                src={image01}
                alt="Image 01"
                objectFit="cover"
                layout="responsive"
              />
            </div>

            <div className="flex flex-col justify-center md:order-1">
              <h2 className="text-3xl lg:text-5xl text-navy-300 mb-2 md:mb-4">
                Parley Hub
              </h2>

              <p className="md:text-xl lg:text-2xl">
                Meet, chat, call, and collaborate in just one place.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LazyLoad>
        <div className="bg-white py-10 md:py-20">
          <div className="container">
            <div className="md:grid md:grid-cols-2 md:gap-12">
              <div className="mb-8 md:order-2 md:mb-0">
                <div className="grid grid-rows-2 grid-cols-12 gap-4">
                  <div className="col-span-7 row-span-2 relative">
                    <Image
                      src={image02}
                      alt="Image 02"
                      className="rounded-md"
                      objectFit="cover"
                      layout="responsive"
                    />
                  </div>

                  <div className="col-span-5 row-span-1 relative">
                    <Image
                      src={image03}
                      alt="Image 03"
                      className="rounded-md"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>

                  <div className="col-span-5 row-span-1 relative">
                    <Image
                      src={image04}
                      alt="Image 04"
                      className="rounded-md"
                      objectFit="cover"
                      layout="fill"
                    />
                  </div>
                </div>
              </div>

              <div className="md:order-1">
                <h2 className="text-3xl lg:text-4xl mb-6 text-navy-300">
                  Parley Hub is for everyone
                </h2>

                <p className="text-lg lg:text-xl mb-4 text-gray-800">
                  Whether it’s chat, calls, or video, anyone can engage at any
                  time, bringing everyone closer.
                </p>

                <p className="text-lg lg:text-xl mb-4 text-gray-800">
                  Your docs, photos, videos, chat history, and meeting notes are
                  always there, so it’s easier to work together.
                </p>

                <p className="text-lg lg:text-xl text-gray-800">
                  Set up your team’s space with all the apps you need so you can
                  stay in just one place instead of jumping around.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>

      <LazyLoad>
        <div className="bg-lightest-gray py-10 md:py-20">
          <div className="container">
            <div className="md:grid md:grid-cols-12 md:gap-4 mb-8">
              <div className="md:col-span-6">
                <h2 className="text-3xl lg:text-4xl mb-4 text-navy-300">
                  Work more easily with everyone
                </h2>

                <p>
                  Stay on the same page and make decisions faster by bringing
                  all of your work communication into one place.
                </p>
              </div>
            </div>

            <div className="md:grid md:grid-rows-2 md:grid-cols-12 md:gap-4 items-center">
              <div className="bg-white rounded-md mb-4 p-4 row-span-2 shadow-sm md:col-span-6 md:mb-0 lg:col-span-3">
                <h4 className="text-xl font-medium mb-2 text-navy-300">
                  Channels
                </h4>

                <p className="text-gray-600">
                  Stay organized and focused with central spaces for
                  conversations, files, tools and people.
                </p>
              </div>

              <div className="bg-white rounded-md mb-4 p-4 row-span-1 shadow-sm md:col-span-6 md:mb-0 lg:col-span-3">
                <h4 className="text-xl font-medium text-navy-300">Message</h4>
              </div>

              <div className="bg-white rounded-md mb-4 p-4 row-span-1 shadow-sm md:col-span-6 md:mb-0 lg:col-span-3">
                <h4 className="text-xl font-medium text-navy-300">
                  Voice and video calls
                </h4>
              </div>

              <div className="bg-white rounded-md mb-4 p-4 row-span-1 shadow-sm md:col-span-6 md:mb-0 lg:col-span-3">
                <h4 className="text-xl font-medium text-navy-300">
                  Accessibility
                </h4>
              </div>

              <div className="bg-white rounded-md mb-4 p-4 row-span-1 shadow-sm md:col-span-6 md:mb-0 lg:col-span-3">
                <h4 className="text-xl font-medium text-navy-300">
                  File sharing
                </h4>
              </div>

              <div className="bg-white rounded-md mb-4 p-4 row-span-1 shadow-sm md:col-span-6 md:mb-0 lg:col-span-3">
                <h4 className="text-xl font-medium text-navy-300">Security</h4>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>

      <LazyLoad>
        <div className="bg-white">
          <div className="grid grid-cols-12 grid-rows-3 md:grid-rows-2">
            <div className="relative col-span-12 md:col-span-6 md:row-span-2 md:block">
              <Image
                src={image05}
                alt="Image 05"
                objectFit="cover"
                layout="fill"
              />
            </div>

            <div className="relative col-span-12 md:col-span-3 md:row-span-1 md:block">
              <Image
                src={image06}
                alt="Image 06"
                objectFit="cover"
                layout="fill"
              />
            </div>

            <div className="relative col-span-6 md:col-span-3 md:row-span-2">
              <Image
                src={image07}
                alt="Image 07"
                objectFit="cover"
                layout="responsive"
              />
            </div>

            <div className="relative col-span-6 md:col-span-3 md:row-span-1">
              <Image
                src={image08}
                alt="Image 08"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </div>
        </div>
      </LazyLoad>
    </>
  );
};

const Home = (): ReactElement => {
  return <GuessLayout Component={HomeTemplate} />;
};

export default Home;
