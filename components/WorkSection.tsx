import Image from 'next/image'
import Link from 'next/link'
import SlideUp from './SlideUp'

const workExperience = [
    {
        name: "Research Assistant",
        time: "Jan 2025 – Aug 2025",
        location: "Robotics Institute, University of Guelph",
    technologies: ["Python", "C++", "Docker", "ROS2", "FastAPI", "MuJoCo", "Yolov9"],
    description: "Developed intelligent path planning and perception systems for autonomous robots in agriculture. Focused on real-time decision making, data-driven automation, and advanced visual perception for robotic harvesting.",
    image: "/robot_lab.jpg",
        link: "https://www.uoguelph.ca/research/discover-our-research/centres-institutes-groups/robotics-institute-guelph"
    },
    {
        name: "Undergraduate Research Assistant",
        time: "May 2024 – Aug 2024",
        location: "Robotics Institute, University of Guelph",
        technologies: ["Python", "C++", "Docker", "ROS2", "Git"],
        description: "Engineered a teleoperation system for robotics research, focusing on automation and real-time control. Developed robust communication and state management for autonomous harvesting. Gained experience in robotics systems integration.",
        image: "/greenhouse_pic.jpg",
        link: "https://www.uoguelph.ca/research/discover-our-research/centres-institutes-groups/robotics-institute-guelph"
    },
]

export const WorkSection = () => {
    return (
        <section id='work'>
            <h1 className="my-6 text-center font-bold text-4xl">
                Work Experience
                <hr className="w-6 h-1 mx-auto my-4 bg-red-600 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-12'>
                {workExperience.map((project, idx) => {
                    return (
                        <div key={idx} className="transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2">
                            <SlideUp offset="-300px 0px -300px 0px">
                                <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12'>
                                    <div className='mt-8 md:w-1/2'>
                                        <Link href={project.link} target='_blank'>
                                            <Image
                                                src={project.image}
                                                alt=""
                                                width={1000}
                                                height={1000}
                                                className="rounded-xl shadow-xl hover:opacity-70"
                                            />
                                        </Link>
                                    </div>
                                    <div className='mt-12 md:w-1/2'>
                                        <h1 className='text-4xl font-bold mb-2 text-red-600'>{project.name}</h1>
                                        <p className='text-lg mb-1'>{project.time}</p>
                                        <p className='text-lg mb-4'>{project.location}</p>
                                        <h2 className='text-lg font-bold mb-2 text-black dark:text-white'>{project.technologies.join(', ')}</h2>
                                        <p className='text-xl leading-7 mb-4'>{project.description}</p>
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
