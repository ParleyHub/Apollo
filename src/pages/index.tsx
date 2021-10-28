import { ReactElement } from 'react';
import LazyLoad from 'react-lazyload';
import Image from 'next/image';

import GuessLayout from '../layouts/guess';

import image01 from '../../public/assets/images/home/image-01.svg';
import image02 from '../../public/assets/images/home/image-02.svg';
import image03 from '../../public/assets/images/home/image-03.svg';
import image04 from '../../public/assets/images/home/image-04.svg';
import image05 from '../../public/assets/images/home/image-05.svg';
import image06 from '../../public/assets/images/home/image-06.svg';
import image07 from '../../public/assets/images/home/image-07.svg';

const HomeTemplate = (): ReactElement => {
  return (
    <>
      <div className="py-10 md:py-20">
        <div className="container text-center">
          <div className="md:grid md:grid-cols-12 md:gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-8 lg:col-start-3">
              <div className="mb-16">
                <Image
                  src={image06}
                  alt="Image 06"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>

              <h2 className="text-3xl lg:text-5xl xl:text-6xl mb-6 text-navy-300 font-medium">
                Parley Hub is for everyone
              </h2>

              <p className="text-lg lg:text-2xl text-gray-800">
                Whether it’s chat, calls, or video, anyone can engage at any
                time, bringing everyone closer. Your docs, photos, videos, chat
                history, and meeting notes are always there, so it’s easier to
                work together. Set up your team’s space with all the apps you
                need so you can stay in just one place instead of jumping
                around.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-12 md:gap-12 lg:gap-24">
            <div className="col-span-12 md:col-span-6">
              <Image
                src={image04}
                alt="Image 04"
                objectFit="cover"
                layout="responsive"
              />
            </div>

            <div className="col-span-12 md:col-span-6">
              <Image
                src={image05}
                alt="Image 05"
                objectFit="cover"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-10 md:py-20 rounded-lg">
        <div className="container">
          <div className="md:grid md:grid-cols-12 md:gap-4 mb-16">
            <div className="md:col-span-8 md:col-start-3 text-center">
              <h2 className="text-3xl lg:text-4xl mb-4 text-navy-300 font-medium">
                Work more easily with everyone
              </h2>

              <p className="text-base lg:text-2xl text-gray-800">
                Stay on the same page and make decisions faster by bringing all
                of your work communication into one place.
              </p>
            </div>
          </div>

          <div className="md:grid md:grid-rows-2 md:grid-cols-12 md:gap-4 items-center">
            <div className="group transition duration-300 ease-in-out bg-white rounded-lg border border-solid border-gray-200 mb-4 py-4 px-6 row-span-2 md:col-span-6 md:mb-0 lg:col-span-3 hover:border-blue-500">
              <h4 className="transition duration-300 ease-in-out text-xl font-medium group-hover:text-blue-600 mb-2 text-navy-300">
                Channels
              </h4>

              <p className="text-gray-600">
                Stay organized and focused with central spaces for
                conversations, files, tools and people.
              </p>
            </div>

            <div className="group transition duration-300 ease-in-out bg-white rounded-lg border border-solid border-gray-200 mb-4 py-4 px-6 row-span-1 md:col-span-6 md:mb-0 lg:col-span-3 hover:border-blue-500">
              <h4 className="transition duration-300 ease-in-out text-xl font-medium group-hover:text-blue-600 text-navy-300">
                Message
              </h4>
            </div>

            <div className="group transition duration-300 ease-in-out bg-white rounded-lg border border-solid border-gray-200 mb-4 py-4 px-6 row-span-1 md:col-span-6 md:mb-0 lg:col-span-3 hover:border-blue-500">
              <h4 className="transition duration-300 ease-in-out text-xl font-medium group-hover:text-blue-600 text-navy-300">
                Voice and video calls
              </h4>
            </div>

            <div className="group transition duration-300 ease-in-out bg-white rounded-lg border border-solid border-gray-200 mb-4 py-4 px-6 row-span-1 md:col-span-6 md:mb-0 lg:col-span-3 hover:border-blue-500">
              <h4 className="transition duration-300 ease-in-out text-xl font-medium group-hover:text-blue-600 text-navy-300">
                Accessibility
              </h4>
            </div>

            <div className="group transition duration-300 ease-in-out bg-white rounded-lg border border-solid border-gray-200 mb-4 py-4 px-6 row-span-1 md:col-span-6 md:mb-0 lg:col-span-3 hover:border-blue-500">
              <h4 className="transition duration-300 ease-in-out text-xl font-medium group-hover:text-blue-600 text-navy-300">
                File sharing
              </h4>
            </div>

            <div className="group transition duration-300 ease-in-out bg-white rounded-lg border border-solid border-gray-200 mb-4 py-4 px-6 row-span-1 md:col-span-6 md:mb-0 lg:col-span-3 hover:border-blue-500">
              <h4 className="transition duration-300 ease-in-out text-xl font-medium group-hover:text-blue-600 text-navy-300">
                Security
              </h4>
            </div>
          </div>
        </div>
      </div>

      <LazyLoad>
        <div className="py-10 md:py-20">
          <div className="container">
            <div className="grid grid-cols-12 md:gap-12">
              <div className="relative col-span-12 mb-8 md:mb-0 md:col-span-6 md:row-span-2 md:block">
                <Image
                  src={image01}
                  alt="Image 01"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>

              <div className="relative col-span-12 md:col-span-6 md:row-span-2 flex flex-col justify-center">
                <h4 className="text-3xl lg:text-4xl mb-8 text-navy-300 font-medium">
                  Create an invite-only place where you belong
                </h4>

                <p className="text-base lg:text-2xl text-gray-800">
                  Parley Hub servers are organized into topic-based channels
                  where you can collaborate, share, and just talk about your day
                  without clogging up a group chat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>

      <LazyLoad>
        <div className="py-10 md:py-20">
          <div className="container">
            <div className="grid grid-cols-12 md:gap-12">
              <div className="relative col-span-12 mb-8 md:mb-0 md:col-span-6 md:row-span-2 lg:order-2">
                <Image
                  src={image02}
                  alt="Image 02"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>

              <div className="relative col-span-12 md:col-span-6 md:row-span-2 flex flex-col justify-center lg:order-1">
                <h4 className="text-3xl lg:text-4xl mb-8 text-navy-300 font-medium">
                  Where hanging out is easy
                </h4>

                <p className="text-base lg:text-2xl text-gray-800">
                  Grab a seat in a voice channel when you’re free. Friends in
                  your server can see you’re around and instantly pop in to talk
                  without having to call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>

      <LazyLoad>
        <div className="py-10 md:py-20">
          <div className="container">
            <div className="md:grid md:grid-cols-12 md:gap-12">
              <div className="relative mb-8 md:mb-0 md:col-span-6 md:row-span-2 md:block">
                <Image
                  src={image03}
                  alt="Image 03"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>

              <div className="relative md:col-span-6 md:row-span-2 flex flex-col justify-center">
                <h4 className="text-3xl lg:text-4xl mb-8 text-navy-300 font-medium">
                  From few to a fandom
                </h4>

                <p className="text-base lg:text-2xl text-gray-800">
                  Get any community running with moderation tools and custom
                  member access. Give members special powers, set up private
                  channels, and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </LazyLoad>

      <LazyLoad>
        <div className="py-10 md:py-20">
          <div className="container text-center">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-8 lg:col-start-3">
                <h4 className="text-3xl lg:text-4xl mb-8 text-navy-300 font-medium">
                  Reliable tech for staying close
                </h4>

                <p className="text-base lg:text-2xl text-gray-800 mb-16">
                  Low-latency voice and video feels like you’re in the same
                  room. Wave hello over video, watch friends stream their games,
                  or gather up and have a drawing session with screen share.
                </p>

                <Image
                  src={image07}
                  alt="Image 07"
                  objectFit="cover"
                  layout="responsive"
                />
              </div>
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
