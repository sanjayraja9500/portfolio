import React from 'react';
import HTML from '../assets/logo/html.png';
import CSS from '../assets/logo/css.png';
import JS from '../assets/logo/JS.png';
import GH from '../assets/logo/gh.png';
import FS from '../assets/logo/fs.png';
import REACT from '../assets/logo/atom.png';
const Skill = () => {
  return (
    <div id='Skills' className='p-20 flex flex-col items-center justify-center'>
      <h1
        data-aos='fade-right'
        className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'
      >
        SKILLS
      </h1>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-20'>
        <h2
          data-aos='fade-up'
          className='text-[26px] flex  flex-col items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-64 w-44 border-2 border-fuchsia-800 b_glow'
        >
          <img src={HTML} className='mt-4' alt='' />
          <h2 className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl mt-5 h-16 w-44 border-2 border-fuchsia-800 b_glow'>
            HTML
          </h2>
        </h2>

        <h2
          data-aos='fade-down'
          className='text-[26px] flex  flex-col items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-64 w-44 border-2 border-fuchsia-800 b_glow'
        >
          <img src={CSS} className='mt-4' alt='' />
          <h2 className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl mt-5 h-16 w-44 border-2 border-fuchsia-800 b_glow'>
            CSS
          </h2>
        </h2>

        <h2
          data-aos='fade-up'
          className='text-[26px] flex  flex-col items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-64 w-44 border-2 border-fuchsia-800 b_glow'
        >
          <img src={JS} className='mt-4 p-2' size={20} alt='' />
          <h2 className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl mt-2 h-16 w-44 border-2 border-fuchsia-800 b_glow'>
            JAVASCRIPT
          </h2>
        </h2>

        <h2
          data-aos='fade-down'
          className='text-[26px] flex  flex-col items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-64 w-44 border-2 border-fuchsia-800 b_glow'
        >
          <img src={REACT} className='mt-4' alt='' />
          <h2 className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl mt-5 h-16 w-44 border-2 border-fuchsia-800 b_glow'>
            REACT
          </h2>
        </h2>

        <h2
          data-aos='fade-up'
          className='text-[26px] flex  flex-col items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-64 w-44 border-2 border-fuchsia-800 b_glow'
        >
          <img src={GH} className='mt-4' alt='' />
          <h2 className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl mt-5 h-16 w-44 border-2 border-fuchsia-800 b_glow'>
            GITHUB
          </h2>
        </h2>

        <h2
          data-aos='fade-down'
          className='text-[26px] flex  flex-col items-center justify-center font-semibold text-fuchsia-800 rounded-3xl h-64 w-44 border-2 border-fuchsia-800 b_glow'
        >
          <img src={FS} className='mt-4 px-5' size={20} alt='' />
          <h2 className='text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl mt-5 h-16 w-44 border-2 border-fuchsia-800 b_glow'>
            FIREBASE
          </h2>
        </h2>
      </div>
    </div>
  );
};

export default Skill;
