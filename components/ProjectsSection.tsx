import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from "react-icons/bs"
import SlideUp from './SlideUp'

const projects = [
    {
        name: "Facial Recognition Security System (In Progress)",
        description: "This project involves creating a security lock system using a Raspberry Pi 4 and various peripherals, including a 12V solenoid door lock, IR sensor, Raspberry Pi camera module, RFID scanner, and more. The system employs facial recognition and RFID technology to grant access to authorized personnel while logging unrecognized faces on a Flask website",
        image: "/SecuritySystem.PNG",
        github: "https://github.com/UmForgotMyName/security-system-rpi4",
    },
    {
        name: "Java Tasklist Manager",
        description: "Java Tasklist Manager is a simple task management application built using JavaFX and Maven. It provides user authentication with encrypted passwords stored in a MongoDB NoSQL document database for enhanced security. Built with user experience in mind with clean styling.",
        image: "/tasklist.PNG",
        github: "https://github.com/UmForgotMyName/JavaTaskManager",
    },
    {
        name: "16-bit CPU in VHDL",
        description: "In our Computer Organization course, my group of three developed a fully functional CPU using VHDL in Vivado. We designed and implemented all the critical components, including the ALU, control unit, registers, and memory, ensuring seamless integration for data processing.",
        image: "/CPU.PNG",
        github: "https://github.com/UmForgotMyName/CompOrg_CPU",
    },
    {
        name: "LaserFiche Java File Manager",
        description: "The LaserFiche Java File Manager is a powerful file management solution designed to simplify and optimize the way you organize, search, and manage your files. Leveraging a suite of advanced algorithms, including sorting and renaming, this tool offers users a near 90% reduction in the time wasted manually searching through files.",
        image: "/laserfiche.jpg",
        github: "https://github.com/UmForgotMyName/FileProcesser",
    },
    {
        name: "Mechanical Wheelchair",
        description: "During our Engineering Design 1 course, a team of six engineers collaborated to create an innovative mechanical wheelchair. In this project, a pivotal role was played in coding the microcomputer and wiring the circuits, contributing significantly to the successful outcome of the project.",
        image: "/wheelchair.PNG",
        github: "https://github.com/UmForgotMyName/MechanicalWheelchair",
    },
]

export const ProjectsSection = () => {
    return (
        <section id='projects'>
            <h1 className="my-10 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-red-600 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-28'>
                {projects.map((project, idx) => {
                    return (
                        <div key={idx}>
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                    <div className=' mt-8 md:w-1/2'>
                                        <Link href={project.github} target='_blank'>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className=' mt-12 md:w-1/2'>
                                        <h1 className='text-4xl font-bold mb-6 text-red-600'>{project.name}</h1>
                                        <p className='text-xl leading-7 mb-4 '>{project.description}</p>
                                        <div className='flex flex-row align-bottom space-x-4'>
                                            <Link href={project.github} target='_blank'>
                                                <BsGithub
                                                    size={30}
                                                    className='hover:-translate-y-1 transition-transform cursor-pointer' />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SlideUp>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
