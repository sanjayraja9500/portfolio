import React from 'react';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 md:ml-0 ml-28  gap-8'>
        <div className='mb-0 md:mb-0 '>
          <span className='text-3xl font-semibold text-fuchsia-800 py-2'>
            LOGO
          </span>
          <p className='text-[16px] my-4 '></p>
        </div>
        <div>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2'>
            Services
          </h2>
          <ul className='text-[16px] my-4'>
            <li className='my-2'>Web Development</li>
            <li className='my-2'>Web Design</li>
            <li className='my-2'>E-commerce</li>
          </ul>
        </div>
        <div className='mb-4 md:mb-0'>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2'>
            Contact
          </h2>
          <p className='text-[16px] my-4'>Email: sanjayraja0093@gamil.com</p>
          <p className='text-[16px] my-4'>phone:+91 95008 47310</p>
        </div>
        <div>
          <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 '>
            Follow Me
          </h2>
          <div className='flex space-x-4'>
            <a
              className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'
              href='https://github.com/sanjayraja9500'
            >
              <FaGithub />
            </a>
            <a
              className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'
              href='https://www.linkedin.com/in/sanjay-raja-3526b5189/ '
            >
              <FaLinkedinIn />
            </a>
            <a
              className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'
              href='https://twitter.com/i/flow/login'
            >
              <FaTwitter />
            </a>
            <a
              className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out'
              href='https://www.instagram.com/sanju_sweety.03/?next=%2F'
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
