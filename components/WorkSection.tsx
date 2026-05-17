import Image from 'next/image'
import Link from 'next/link'
import SlideUp from './SlideUp'

const workExperience = [
    {
        role: 'Automation Intern',
        organization: 'Give and Go Prepared Foods (Co-op)',
        time: 'May 2026 - Present',
        location: 'Brampton, Ontario, Canada (On-site)',
        technologies: ['Allen-Bradley PLC', 'Studio 5000', 'Ladder Logic', 'Structured Text', 'FANUC Robotics', 'EtherNet/IP'],
        description:
            'At Give and Go, I support high-speed production automation by troubleshooting PLC, drive, and robotics systems under real operating pressure. This role has strengthened my controls discipline and taught me how small diagnostics and logic fixes directly improve uptime across large, fast-moving lines.',
        image: '/give_n_go.jpg',
        imageClassName: 'w-full aspect-square object-cover object-center',
        links: [{ label: 'Company', href: 'https://giveandgo.com/' }],
    },
    {
        role: 'Robotics Software & Firmware Team Member',
        organization: 'University of Guelph Robotics Team (Permanent Part-time)',
        time: 'Sep 2025 - Present',
        location: 'Guelph, Ontario, Canada (Hybrid)',
        technologies: ['C++', 'STM32', 'UDP', 'CAN', 'ROS 2', 'Ethernet'],
        description:
            'On the robotics team, I build embedded and networking software that keeps rover control reliable and low-latency from joystick input to actuation. It has sharpened my systems thinking across firmware, networking, and integration, and pushed me to design for reliability before adding complexity.',
        image: '/robot_team_stm32.png',
        links: [{ label: 'Team', href: 'https://ugrt.github.io/' }],
    },
    {
        role: 'Research Assistant (Perception, Planning & Simulation)',
        organization: 'University of Guelph (Permanent Part-time)',
        time: 'Sep 2025 - Apr 2026',
        location: 'Guelph, Ontario, Canada (Hybrid)',
        technologies: ['PyTorch', 'Python', 'Intel RealSense', 'MuJoCo', 'OMPL', 'ROS 2'],
        description:
            'In this part-time research, I focused on improving depth and perception for more challenging tomato conditions, including clutter and difficult occlusions. Building on earlier deployment work, I used simulation and planning pipelines to make decisions more robust before field execution.',
        image: '/parttime_research.PNG',
        links: [
            {
                label: 'Greenhouse Feature',
                href: 'https://www.france24.com/en/tv-shows/focus/20260331-canada-s-ontario-bets-on-greenhouse-farming-to-boost-food-sovereignty?utm_slink=f24.my%2FBpoS',
            },
            {
                label: 'Robotics Institute',
                href: 'https://www.uoguelph.ca/research/discover-our-research/centres-institutes-groups/robotics-institute-guelph',
            },
        ],
    },
    {
        role: 'Research Assistant (Robotics & AI Integration)',
        organization: 'University of Guelph (Co-op)',
        time: 'Jan 2025 - Sep 2025',
        location: 'Guelph, Ontario, Canada (Hybrid)',
        technologies: ['Python','C++','ROS 2', 'Detectron2', 'YOLOv9', 'MuJoCo', 'OMPL', 'Docker'],
        description:
            'During this co-op term, I helped expand autonomous harvesting workflows beyond initial tomato setups toward broader produce scenarios, including strawberries, by improving perception and motion planning integration. This stage taught me how to translate research models into repeatable ROS 2 workflows that hold up in real trials.',
        image: '/robot_lab.jpg',
        links: [
            {
                label: 'Robotics Institute',
                href: 'https://www.robotics.uoguelph.ca/gigas/',
            },
        ],
    },
    {
        role: 'Research Assistant (Robotics & Embedded Systems)',
        organization: 'University of Guelph (Co-op)',
        time: 'May 2024 - Aug 2024',
        location: 'Guelph, Ontario, Canada (Hybrid)',
        technologies: ['C++', 'Python','ROS 2', 'micro-ROS', 'Docker', 'FastAPI', 'SQL'],
        description:
            'This was my foundation on the GIGAS greenhouse tomato-harvesting stack, where I built teleoperation, control, and data infrastructure that made trials measurable and more reliable. It taught me end-to-end robotics integration and how software architecture choices impact real harvest efficiency in the greenhouse.',
        image: '/greenhouse_pic.jpg',
        links: [
            {
                label: 'Robotics Institute',
                href: 'https://www.robotics.uoguelph.ca/gigas/',
            },
        ],
    },
]

export const WorkSection = () => {
    return (
        <section id='work'>
            <h1 className='my-6 text-center font-bold text-4xl'>
                Work Experience
                <hr className='w-6 h-1 mx-auto my-4 bg-red-600 border-0 rounded'></hr>
            </h1>
            <div className='flex flex-col space-y-12'>
                {workExperience.map((project, idx) => {
                    return (
                        <div key={idx} className='transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2'>
                            <SlideUp>
                                <div className='flex flex-col md:flex-row md:items-center md:space-x-12'>
                                    <div className='mt-8 md:mt-0 md:w-1/2'>
                                        <Link href={project.links[0].href} target='_blank'>
                                            <Image
                                                src={project.image}
                                                alt={project.role}
                                                width={1000}
                                                height={1000}
                                                className={`rounded-xl shadow-xl hover:opacity-70 ${project.imageClassName ?? ''}`}
                                            />
                                        </Link>
                                    </div>
                                    <div className='mt-12 md:mt-0 md:w-1/2'>
                                        <h1 className='text-4xl font-bold mb-2 text-red-600'>{project.role}</h1>
                                        <p className='text-xl mb-1 font-semibold'>{project.organization}</p>
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
