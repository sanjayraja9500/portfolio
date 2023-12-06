import React from 'react';
import Blog from '../assets/blog.png.png';
import Trend from '../assets/trendzet.png.png';
import Recipe from '../assets/recipe.png.png';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Data } from './Data';
import { FaGithub } from 'react-icons/fa';
import { IoArrowRedoCircleSharp } from 'react-icons/io5';

const Projects = () => {
  const settings = {
    items: 3,
    nav: true,
    rewind: true,
    autoplay: true,
    margin: 10,
  };
  return (
    <div
      id='Projects'
      className='p-20 flex flex-col justify-center items-center'
    >
      <h1
        data-aos='fade-right'
        className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'
      >
        Projects
      </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 justify-around items-center gap-20'>
        <div className='flex  flex-col justify-center items-center'>
          <img
            data-aos='fade-up'
            height={500}
            width={450}
            className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow'
            src={Recipe}
            alt=''
          />
          <button className='h-10 w-48 bg-slate-800 border-2 border-fuchsia-800 rounded-full  flex justify-around mt-5'>
            <a
              href='https://github.com/sanjayraja9500/Foods-Recipe---API'
              className=' text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out px-2 mt-1'
            >
              <FaGithub size={30} />
            </a>
            <a
              href='http://sprightly-squirrel-af1e76.netlify.app'
              className=' text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out px-2 '
            >
              <IoArrowRedoCircleSharp size={35} />
            </a>
          </button>
        </div>
        <div className='flex  flex-col justify-center items-center'>
          <img
            data-aos='fade-down'
            height={500}
            width={450}
            className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow'
            src={Trend}
            alt=''
          />
          <button className='h-10 w-48 bg-slate-800 border-2 border-fuchsia-800 rounded-full  flex justify-around mt-5'>
            <a
              href='https://github.com/sanjayraja9500/trend-zet'
              className='  text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out px-2 mt-1'
            >
              <FaGithub size={30} />
            </a>
            <a
              href='https://dulcet-flan-f24b68.netlify.app/'
              className=' text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out px-2 '
            >
              <IoArrowRedoCircleSharp size={35} />
            </a>
          </button>
        </div>
        <div className='flex  flex-col justify-center items-center '>
          <img
            data-aos='fade-up'
            height={500}
            width={450}
            className='text-[26px] flex items-center justify-center  rounded-3xl p-1 border-2 border-fuchsia-800 b_glow'
            src={Blog}
            alt=''
          />
          <button className='h-10 w-48 bg-slate-800 border-2 border-fuchsia-800 rounded-full  flex justify-around mt-5'>
            <a
              href='https://github.com/sanjayraja9500/blog-website'
              className=' text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out px-2 mt-1'
            >
              <FaGithub size={30} />
            </a>
            <a
              href='https://illustrious-tartufo-eae5f4.netlify.app/'
              className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out px-2 '
            >
              <IoArrowRedoCircleSharp size={35} />
            </a>
          </button>
        </div>
      </div>

      <div className=' w-3/4 h-max p-3 mx-auto border-2 border-gray-400 bg-slate-800 mt-10'>
        <OwlCarousel
          data-aos='fade-down'
          className='owl-theme w-full '
          {...settings}
        >
          {Data.map(({ name, image, github, live }) => (
            <div className='w-custom shadow-md shadow-gray-600 rounded-lg   '>
              <p className='text-center text-white'>{name}</p>
              <div className='w-3/4 py-5 mx-auto bg-white'>
                <img
                  src={image}
                  alt='project'
                  className='rounded-md  mx-auto  duration-200 hover:scale-105'
                />
              </div>
              <div className='flex items-center justify-center bg-white gap-5 border-2   border-fuchsia-800'>
                <a
                  className='  m-4  hover:scale-125   text-2xl border-2  rounded-full  hover:text-fuchsia-800 transition-all duration-150 ease-in-out'
                  href={live}
                  target='_blank'
                  rel='noreferrer'
                >
                  <IoArrowRedoCircleSharp size={30} />
                </a>
                <a
                  className=' m-4  hover:scale-125   text-2xl border-2  hover:text-fuchsia-800 transition-all duration-150 ease-in-out rounded-full '
                  href={github}
                  target='_blank'
                  rel='noreferrer'
                >
                  <FaGithub size={30} />
                </a>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Projects;
