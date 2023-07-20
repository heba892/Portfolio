import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Heba Gamal, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I'm a front-end React.js developer passionate about creating modern web applications. With expertise in HTML, CSS, and JavaScript, I specialize in building dynamic and interactive user interfaces using React.js. I focus on writing clean and maintainable code to deliver exceptional user experiences. Let's collaborate to bring your ideas to life and craft engaging web applications together!</p>  
            </div>
          </div>
      </div>
    </div>
  )
}

export default About
