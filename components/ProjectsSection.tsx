import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BsGithub } from "react-icons/bs"
import SlideUp from './SlideUp'

const projects = [
    {
        name: "Gazebo Moveit2 Motion Planner",
        technologies: ["C++", "ROS2", "MoveIt2", "OMPL", "IKFast", "RViz2", "Gazebo", "Docker"],
        description: "Developed a full-stack simulation of a 6-DOF robotic arm for autonomous motion using ROS2 and MoveIt2. Enabled fast, accurate path planning and real-time perception with OMPL, IKFast, and Octomap-based collision checking.",
        image: "/ros2_gazebo_moveit2_rviz2.PNG",
        github: "https://github.com/UmForgotMyName/gazebo-moveit2-motion-planner",
    },
    {
        name: "Facial Recognition Security System",
    technologies: ["Raspberry Pi 4", "Python", "Flask", "RFID", "IR Sensor", "Camera Module"],
    description: "Built a security system with facial recognition and RFID access. Enhanced facility security by logging unrecognized faces and enabling seamless authorized entry.",
        image: "/SecuritySystem.PNG",
        github: "https://github.com/UmForgotMyName/security-system-rpi4",
    },
    {
        name: "GreenScore - GDSC Hacks",
        technologies: ["React", "FastAPI", "MongoDB", "Gemini AI", "Firebase", "Python"],
    description: "Built an AI platform that rates food products on ethics and sustainability using barcode scans and product lookup. Enabled secure, real-time user experience with a responsive React/FastAPI interface and robust cloud integration.",
        image: "/greenscore.png",
        github: "https://github.com/asiddiqi04/GreenScore/tree/main",
    },
    {
    name: "Workflow Coordinator",
    technologies: ["Java", "JavaFX", "MongoDB", "NoSQL", "Maven"],
    description: "Developed a desktop workflow planning app with secure authentication and real-time data persistence. Enabled efficient workflow creation, tracking, and completion for users through an intuitive interface and robust NoSQL backend.",
        image: "/tasklist.PNG",
        github: "https://github.com/UmForgotMyName/JavaTaskManager",
    },
    {
        name: "LaserFiche Java File Manager",
    technologies: ["Java"],
    description: "Automated file management and search for efficiency. Reduced manual file handling time by up to 90% for end users.",
        image: "/laserfiche.jpg",
        github: "https://github.com/UmForgotMyName/FileProcesser",
    },
]

export const ProjectsSection = () => {
    return (
        <section id='projects'>
            <h1 className="my-6 text-center font-bold text-4xl">
                Projects
                <hr className="w-6 h-1 mx-auto my-4 bg-red-600 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-12'>
                {projects.map((project, idx) => {
                    return (
                        <div key={idx} className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2">
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                    <div className='mt-8 md:w-1/2 flex items-stretch justify-center'>
                                        <Link href={project.github} target='_blank' className="flex w-full h-full">
                                            <div className="w-full h-full min-h-[220px] md:min-h-[320px] relative flex-1">
                                                <Image
                                                    src={project.image}
                                                    alt=""
                                                    fill
                                                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                                                    className="rounded-xl shadow-xl hover:opacity-70"
                                                />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className='mt-12 md:w-1/2 flex flex-col justify-between'>
                                        <h1 className='text-4xl font-bold mb-6 text-red-600'>{project.name}</h1>
                                        <h2 className='text-lg font-bold mb-2 text-black dark:text-white'>{project.technologies.join(', ')}</h2>
                                        <p className='text-xl leading-7 mb-4'>{project.description}</p>
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
