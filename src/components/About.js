import React from 'react';
import Img from '../assets/Img.jpg';
const About = () => {
  return (
    <div
      id='About'
      className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col justify-between lg:gap-28 items-center'
    >
      <img
        data-aos='fade-down'
        src={Img}
        alt='img'
        className='rounded-sm border-2 p-1 border-fuchsia-500 img_glow w-[10rem] h-[20rem]'
      />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1
          data-aos='fade-right'
          className='text-[52px] font-semibold mb-8 text-fuchsia-500 leading-normal uppercase'
        >
          About Me
        </h1>
        <div data-aos='fade-left' className='py-1 flex flex-col gap-3'>
          <div>
            I'm Sanjay Raja, and I'm passionate about frontend development and
            React JS. Armed with a Bachelor's degree, I bring a distinctive
            blend of technical expertise and innovative problem-solving skills
            to my work.
          </div>
          <div>
            I'm Passionate in Frontend Developer specializing in creating
            responsive and user-friendly web interfaces. Proficient in HTML,
            CSS, and JavaScript, with hands-on experience in modern frameworks
            like React.js. Dedicated to delivering high-quality code and
            optimizing frontend performance. Excited about collaborating with
            teams to bring innovative web solutions to life.
          </div>
        </div>
        <div className='flex mt-8 gap-2'>
          <div className='flex items-center justify-center'>
            <div className='flex space-x-2'>
              <button className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden'>
                {' '}
                Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
