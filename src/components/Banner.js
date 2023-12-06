import React, { useEffect } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { FaInstagram } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-quart',
      delay: 0,
      duration: 750,
    });
  }, []);
  return (
    <div className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'>
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1
          data-aos='fade-right'
          className='text-[52px] font-semibold mb-8 leading-normal uppercase'
        >
          Welcome To <span className='text-fuchsia-500'>My Website</span>
        </h1>
        <p data-aos='fade-left'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
          libero?Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
          praesentium velit dolore quia officiis quidem magnam est quis!
          Pariatur eum sequi ab perferendis numquam nulla! Ratione voluptatum
          placeat nobis ipsum! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Aliquid maxime neque dolorem odit vero quae sint
          commodi non laudantium reiciendis quis asperiores similique natus,
          eius placeat voluptate voluptatum cum sequi.
        </p>
        <div className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              <a
                href=' '
                className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '
              >
                <AiFillGithub className='text-[28px]' />
              </a>

              <a
                href=' '
                className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '
              >
                <FaLinkedinIn className='text-[28px]' />
              </a>

              <a
                href=' '
                className='text-fuchsia-600 hover:text-fuchsia-500 rounded-full glow p-2 '
              >
                <FiTwitter className='text-[28px]' />
              </a>

              <a
                href=' '
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
        src='https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D'
        width={290}
        height={290}
        alt=''
        className='rounded-sm border-2 p-1 border-fuchsia-500 img_glow'
      />
    </div>
  );
};

export default Banner;
