import Image from 'next/image'
import Link from 'next/link'
import SlideUp from './SlideUp'

const workExperience = [
    {
        name: "Undergraduate Research Assistant",
        time: "May 2024 - August 2024",
        location: "University of Guelph, Robotics Institute of Guelph",
        description: "Contributed to the GIGAS research project by developing a Python-based teleoperation program for a FANUC robot using ROS2 and NiceGUI, implementing a micro-ROS publisher and subscriber in C++ on a Teensy 4.1 for real-time data communication, and creating comprehensive technical documentation with Sphinx, hosted via NGINX.",
        image: "/greenhouse_pic.jpg",
        link: "https://www.uoguelph.ca/research/discover-our-research/centres-institutes-groups/robotics-institute-guelph"
    },
]

export const WorkSection = () => {
    return (
        <section id='work'>
            <h1 className="my-10 text-center font-bold text-4xl">
                Work Experience
                <hr className="w-6 h-1 mx-auto my-4 bg-red-600 border-0 rounded"></hr>
            </h1>
            <div className='flex flex-col space-y-28'>
                {workExperience.map((project, idx) => {
                    return (
                        <div key={idx}>
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
