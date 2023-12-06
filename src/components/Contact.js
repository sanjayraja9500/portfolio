import React from 'react';

const Contact = () => {
  return (
    <div
      id='Contact'
      className='p-4 lg:p-20 flex flex-col justify-center items-center'
    >
      <h1
        data-aos='fade-left'
        className='text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500'
      >
        Contact Me
      </h1>
      <form
        className='flex flex-col gap-2 lg:w-1/2'
        action='https://getform.io/f/b41ddb2d-7fc8-4eaf-b247-e37ea2e4288d'
        method='POST'
      >
        <div className='flex  flex-col lg:flex gap-6'>
          <input
            className='w-full my-3 rounded-lg  bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow
            text-slate-500'
            placeholder='Name...!'
            type='text'
            name='name'
          />
          <input
            className='w-full my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow
            text-slate-500'
            placeholder='Email...!'
            type='email'
            name='email'
          />
        </div>
        <textarea
          className='w-full my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500'
          placeholder='Write your Message...!'
          name='message'
          id=''
          cols='10'
          rows='10'
        ></textarea>
        <button
          className='neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-900 hover:bg-slate-900 rounded-lg px-8 py-4 my-6 uppercase relative overflow-hidden b_glow text-xl font-bold mb-10'
          type='submit'
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
