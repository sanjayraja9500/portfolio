import React, { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';
import Img from '../assets/Img.jpg';

const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div
      id='Home'
      className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'
    >
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1
          data-aos='fade-right'
          className='text-[52px] font-semibold mb-8 leading-normal uppercase'
        >
          Welcome To <span className='text-fuchsia-500'>My Website</span>
        </h1>
        <p data-aos='fade-left'>
          <h1 className='sm:text-5xl text-2xl font-bold text-white'>
            {' '}
            I'm Sanjay Raja
          </h1>
          <div>
            {' '}
            <h2 className='flex sm:text-6xl mt-10 text-base text-white'>
              I'm a
              <TypeAnimation
                sequence={[
                  'Frontend Developer',
                  2500,
                  'Coder',
                  2000,
                  'Web Designer',
                  2000,
                ]}
                wrapper='div'
                cursor={true}
                speed={40}
                repeat={Infinity}
                style={{ fontSize: '', paddingLeft: '7px' }}
              />
            </h2>
          </div>
        </p>
        <div className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              <a
                href='https://github.com/sanjayraja9500 '
                className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '
              >
                <AiFillGithub className='text-[28px]' />
              </a>

              <a
                href='https://www.linkedin.com/in/sanjay-raja-3526b5189/ '
                className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '
              >
                <FaLinkedinIn className='text-[28px]' />
              </a>

              <a
                href='https://twitter.com/i/flow/login '
                className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '
              >
                <FiTwitter className='text-[28px]' />
              </a>

              <a
                href='https://www.instagram.com/sanju_sweety.03/?next=%2F '
                className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '
              >
                <FaInstagram className='text-[28px]' />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos='fade-up'
        src={Img}
        alt='img'
        className='rounded-sm border-2 p-1 border-fuchsia-500 img_glow w-[10rem] h-[20rem]'
      />
    </div>
  );
};

export default Banner;
