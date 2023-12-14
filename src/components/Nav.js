import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import { CiMenuFries } from 'react-icons/ci';
import { AiOutlineHome, AiOutlineProject } from 'react-icons/ai';
import { GrProjects } from 'react-icons/gr';
import { BsPerson } from 'react-icons/bs';
import { MdCastForEducation } from 'react-icons/md';

const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const content = (
  //   <>
  //     <div className='lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 tansition '>
  //       <ul className='text-center text-xl p-20 '>
  //         <Link spy={true} smooth={true} to='Home'>
  //           <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
  //             Home
  //           </li>
  //         </Link>
  //         <Link spy={true} smooth={true} to='About'>
  //           <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
  //             About
  //           </li>
  //         </Link>
  //         <Link spy={true} smooth={true} to='Skills'>
  //           <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
  //             Skills
  //           </li>
  //         </Link>
  //         <Link spy={true} smooth={true} to='Projects'>
  //           <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
  //             Projects
  //           </li>
  //         </Link>
  //         <Link spy={true} smooth={true} to='Contact'>
  //           <li className='my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded'>
  //             Contact{' '}
  //           </li>
  //         </Link>
  //       </ul>
  //     </div>
  //   </>
  // );
  return (
    <div>
      <nav id='Nav'>
        <div className='h-10vh flex justify-between fixed top-0 z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-900 md:border-slate-800 md:bg-slate-900   '>
          <div className='flex items-center flex-col'>
            <span className='text-3xl font-bold absolute top-1 left-2 ml-2 '>
              Logo
            </span>
          </div>
          <div className='lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden'>
            <div className='flex-10'>
              <ul className='flex gap-8 text-[18px] flex-10 mx-48  md:mx-96'>
                <Link spy={true} smooth={true} to='Home'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>
                    Home
                  </li>
                </Link>

                <Link spy={true} smooth={true} to='About'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>
                    About
                  </li>
                </Link>

                <Link spy={true} smooth={true} to='Skills'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>
                    Skills
                  </li>
                </Link>

                <Link spy={true} smooth={true} to='Projects'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>
                    Projects
                  </li>
                </Link>

                <Link spy={true} smooth={true} to='Contact'>
                  <li className='hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:border-fuchsia-600 cursor-pointer'>
                    Contact{' '}
                  </li>
                </Link>
              </ul>
            </div>
          </div>
          {/* <div>{click && content}</div>
          <button className='block md:hidden transtion ' onClick={handleClick}>
            {click ? <FaTimes /> : <CiMenuFries />}
          </button> */}
        </div>
        <div className='fixed top-[25%] z-10'>
          <div className='flex flex-col'>
            <Link
              to='Nav'
              smooth={true}
              offset={50}
              duration={500}
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110  ease-in duration-300 '
            >
              <AiOutlineHome size={20} />
            </Link>
            <Link
              to='About'
              smooth={true}
              offset={50}
              duration={500}
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110  ease-in duration-300  '
            >
              <MdCastForEducation size={20} className='text-lg ' />
            </Link>
            <Link
              to='Skills'
              smooth={true}
              offset={50}
              duration={500}
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110  ease-in duration-300'
            >
              <AiOutlineProject size={20} />
            </Link>
            <Link
              to='Projects'
              smooth={true}
              offset={50}
              duration={500}
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110  ease-in duration-300'
            >
              <GrProjects size={20} />
            </Link>
            <Link
              to='Contact'
              smooth={true}
              offset={50}
              duration={500}
              className='rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110  ease-in duration-300'
            >
              <BsPerson size={20} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
