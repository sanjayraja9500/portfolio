import React from 'react';

const About = () => {
  return (
    <div
      id='About'
      className='lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center'
    >
      <img
        data-aos='fade-down'
        src='https://images.unsplash.com/photo-1474112704314-8162b7749a90?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGZsb3dlcnxlbnwwfHwwfHx8MA%3D%3D'
        width={290}
        height={290}
        alt=''
        className='rounded-sm border-2 p-1 border-fuchsia-500 img_glow'
      />
      <div className='h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white'>
        <h1
          data-aos='fade-right'
          className='text-[52px] font-semibold mb-8 text-fuchsia-500 leading-normal uppercase'
        >
          About Me
        </h1>
        <p data-aos='fade-left'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio,
          libero?Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Dolore vitae nemo temporibus perferendis repellat eos! Architecto quae
          quia quasi pariatur suscipit. Obcaecati consectetur officia
          exercitationem maxime perspiciatis quasi sint alias? Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Hic eos mollitia, amet
          reprehenderit obcaecati suscipit excepturi dolorem. Veniam, aliquam
          enim.
        </p>
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
