"use client"
import React from 'react'
import Image from 'next/image'
import { BsGithub } from "react-icons/bs"
import { SiLinkedin } from "react-icons/si"
import { HiOutlineMail } from "react-icons/hi"
import { useTheme } from "next-themes"
const HeroSection = () => {
    const { theme } = useTheme();
    const isLight = theme === "light";
    return (
        <section id="home">
            <div className="flex flex-col md:flex-row items-center justify-center my-4 py-10 md:py-20 md:space-x-10 md:text-left">
                <div className='md:w-1/2 flex justify-center items-center'>
                    <Image className="rounded-full shadow-2xl" src="/HeadShot.png" alt="" width={260} height={260} />
                </div>
                <div className='md:w-1/2 flex flex-col items-center justify-center text-center'>
                    <h1 className='font-semibold text-3xl mt-4 md:text-5xl md:mt-0 mb-4 text-red-600'>
                        Hey, I&apos;m Rehan.
                    </h1>
                    <p className='text-xl leading-7 mb-6'>
                        Computer Engineering student at the University of Guelph. My interests span robotics, artificial intelligence, and the intersection of hardware and software. I enjoy building innovative solutions and exploring how technology can solve real-world problems.
                    </p>
                    <div className='flex flex-row space-x-4 mt-2'>
                        <a
                            href="https://www.linkedin.com/in/rehan-/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                        >
                            <SiLinkedin size={28} color={isLight ? "black" : "white"} />
                        </a>
                        <a
                            href="https://github.com/UmForgotMyName"
                            target="_blank"
                            rel="noopener noreferrer"
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                        >
                            <BsGithub size={28} color={isLight ? "black" : "white"} />
                        </a>
                        <a
                            href="mailto:rehan.a.siddiqi@outlook.com"
                            className='hover:-translate-y-1 transition-transform cursor-pointer'
                        >
                            <HiOutlineMail size={28} color={isLight ? "black" : "white"} />
                        </a>
                    </div>
                </div>
            </div>
            {/* Removed down arrow to About section */}
        </section>
    )
}

export default HeroSection
