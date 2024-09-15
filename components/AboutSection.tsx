import React from "react"

const skills = [
    { skill: "JavaScript" },
    { skill: "Java" },
    { skill: "React" },
    { skill: "Git" },
    { skill: "C/C++" },
    { skill: "Python" },
    { skill: "SolidWorks" },
    { skill: "Xilinx ISE" },
    { skill: "WireShark" },
    { skill: "NMap" },
    { skill: "VMWare" },
    { skill: "Virtual Box" },
    { skill: "Matlab" },
    { skill: "VHDL" },
    { skill: "ROS2" },
    { skill: "Keras" },
    { skill: "TensorFlow" },
    { skill: "OpenCV" },
    { skill: "VS Code" },
    { skill: "IntelliJ" },
    { skill: "Microsoft Office" },
    { skill: "Docker" },
    { skill: "Ubuntu Linux" },
    { skill: "Raspbian" },
    { skill: "Vivado" },
    { skill: "Simulink" },
    { skill: "Gazebo" },
    { skill: "PlatformIO" }
];


const AboutSection = () => {
    return (
        <section id="about">
            <div className="my-12 pb-12 md:pt-16 md:pb-48">
                <h1 className="text-center font-bold text-4xl">
                    About Me
                    <hr className="w-6 h-1 mx-auto my-4 bg-red-600 border-0 rounded"></hr>
                </h1>
                <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
                    <div className="md:w-1/2 text-lg">
                        <h1 className="text-center text-3xl font-bold text-red-600 mb-6 md:text-left">
                            Get to know me!
                        </h1>
                        <p>
                            Hey, my name is Rehan Siddiqi. I am a third-year Computer Engineering student at the University of Guelph with a strong focus on hardware, electronics, and robotics. 
                            I'm a driven learner, always eager to explore new technologies and apply them in innovative ways.
                        </p>
                        <br />
                        <p>
                            Recently, I contributed to the GIGAS project, where I developed systems for robotic tomato harvesting, enhancing my experience in robotics and automation. My work involved programming, hardware integration, and creating efficient technical solutions.
                        </p>
                        <br />
                        <p>
                            I believe that continuous learning is essential, especially in fields like hardware and robotics, where technology rapidly evolves. I'm excited to further expand my knowledge and skills, both in my academic journey and future professional opportunities.
                        </p>
                    </div>
                    <div className="text-center md:w-1/2 md:text-left">
                        <h1 className="text-2xl font-bold text-red-600 mb-6">Current Fields of Interest</h1>
                        <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                            {skills.map((item, idx) => {
                                return (
                                    <p
                                        key={idx}
                                        className="bg-neutral-300 px-4 py-2 mr-2 mt-2 text-black rounded font-semibold"
                                    >
                                        {item.skill}
                                    </p>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection