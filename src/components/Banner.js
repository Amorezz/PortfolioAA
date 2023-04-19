import React from 'react';
// import image
import Image from "../assets/avatar.svg";

// import icon
import {FaGithub,FaYoutube, FaDribbble} from 'react-icons/fa';

// type animation: it helps to animate the text
import { TypeAnimation } from 'react-type-animation';

// import motion
import { motion } from 'framer-motion';

// Variants 
import {fadeIn} from "../variants"

const Banner = () => {
  return (
  <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
        {/* text */}
        <div className='flex-1 text-center font-secondary lg:text-left'>

                  <motion.h1 
                  variants={fadeIn('up', 0.3)} 
                  initial="hidden" 
                  whileInView={'show'} 
                  viewport={{once:false, amount:0.7}} 
                  className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'>
                    AMIRREZA <span>H</span>
                  </motion.h1>

                  <motion.div
                  variants={fadeIn('up', 0.3)} 
                  initial="hidden" 
                  whileInView={'show'} 
                  viewport={{once:false, amount:0.7}} 
                  className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>


                    <span className='text-white mr-4'>I am a</span> 

                    <TypeAnimation 
                    sequence={[
                        'Developer',
                        2000,
                        'Designer',
                        2000, 
                        'Project Manager',
                        2000
                      ]} 
                      speed={50} 
                      className='text-accent'
                      wrapper='span'
                      repeat={Infinity}
                      />

                  </motion.div>

                    <motion.p
                    variants={fadeIn('up', 0.5)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once:false, amount:0.7}} 
                    className='mb-8 max-w-lg mx-auto lg:mx-0'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lacinia at quis risus sed vulputate odio ut enim blandit. Sagittis vitae et leo duis ut diam quam nulla. 
                  </motion.p>

                  <motion.div
                  variants={fadeIn('up', 0.6)} 
                  initial="hidden" 
                  whileInView={'show'} 
                  viewport={{once:false, amount:0.7}} 
                  className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>

                      <button className='btn btn-lg'>Contact me</button>

                      <a href='#' className='text-gradient btn-link'>My portfolio</a>

                  </motion.div>

                  {/* socials */}
                  <motion.div
                    variants={fadeIn('up', 0.7)} 
                    initial="hidden" 
                    whileInView={'show'} 
                    viewport={{once:false, amount:0.7}}  
                    className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>

                        <a href='#'>
                          <FaGithub/>
                        </a>
                        <a href='#'>
                          <FaYoutube/>
                        </a>
                        <a href='#'>
                          <FaDribbble/>
                        </a>
                         
                  </motion.div>
        </div>
        
          
          {/*image*/}
        <motion.div 
          variants={fadeIn('down', 0.5)} 
          initial="hidden" 
          whileInView={'show'} 
          className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt=''/>
        </motion.div>
      </div>
    </div>
  </section>);
};

export default Banner;