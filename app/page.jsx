"use client"
import React from 'react'
import {motion} from "framer-motion"
import {TypeAnimation} from "react-type-animation"
import { MdArrowOutward } from "react-icons/md"
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi"

import Blob from '@/components/Blob'
import Image from 'next/image'
import avatarImage from "@/public/assets/avatar.png"
import Socials from '@/components/Socials'
import Pattern from '@/components/Pattern'

const Home = () => {
  return (
    <motion.section 
    initial={{opacity: 0}} 
    animate={{opacity: 1, 
    transition: {delay: 2.4, 
    duration: 0.4, 
    ease: 
    "easeIn"}, 
  
    }}
    className='h-screen flex items-center'
    >
      {/* pattern */}
      <Pattern />
    <div className='flex flex-col xl:flex-row items-center justify-between w-full'>
      {/*text */}
      <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start
      text-center xl:text-left">
        <h1 className="h1 flex-1 mb-[28px]" >Oi! Sou Guilherme, <br />
          <TypeAnimation sequence={["Dev. Full Stack", 2000, "Dev. BackEnd", 2000]}
          wrapper="span" speed={40} className="text-accent" repeat={Infinity}
          cursor={false}/>
        </h1>
        <p className='max-w-[500px] mb-[44px]'>Crio sites, landing pages e sistemas web com painéis administrativos personalizados. Transformo ideias em soluções web.
        </p>
        <button className="btn btn-lg btn-accent mb-16">
          <div className="flex items-center gap-3">
            <span>Vamos Conversar!</span>
            <MdArrowOutward className="text-xl" />
          </div>
        </button>
        {/* Contact info */}
        <div className="flex flex-col xl:flex-row xl-items-center gap-4 xl:gap-8 
        mb-12 xl:mb-0">
          {/* phone */}
          <div className="flex items-center gap-4 text-lg">
            <span className="text-accent">
              <HiOutlinePhone className="text-xl" />
            </span>
            <span>+55 (84)99144-2686</span>
          </div>
           {/* mail */}

        </div>
        {/* sociais */}
        <Socials containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 
        2xl:right-2 2xl:transform 2xl:-transform-x-1/2 2xl:-translate-y-1/2" 
        iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center
        justify-center rounded-full cursor-pointer"/>

      </div>
      <div className='hidden xl:block flex-1 relative z-20'>
        {/*blob e image*/}
        <Blob containerStyles="w-[560px] h-[560px]"/>
        {/*avatar img */}
        <Image 
        src={avatarImage} 
        alt="" 
        width={440} 
        height={600}
        quality={100}
        className='absolute -top-10 left-[120px]' 
        />
        {/* Overlay */}
        <div className="w-full h-[165px] absolute
        bottom-0 left-0 right-0 bg-gradient-to-t from-primary via-primary/100 
        to-primary/100">

        </div>
      </div>
    </div>
    </motion.section>


  );
}

export default Home
