import { Briefcase, Code, User } from "lucide-react";
import cv from "../assets/Nigar Mustafazada CV2025.pdf"

export const AboutSection = () => {
    return (
        <section 
            id="about"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h1 className="text-2xl md:text-4xl font-bold text-center mb-12 ">
                    About <span className="text-primary">Me</span>
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold">Web Developer</h2>
                        <p className="text-xl text-foreground/85">
                            I’m a software developer with a background in Chemical Engineering and a strong passion 
                            for technology. Over time, I’ve focused on mastering SQL, Python, and modern web technologies to turn ideas into real, working applications.

                        </p>
                        <p className="text-xl text-foreground/85">
                            I enjoy creating clean, responsive, and user-friendly solutions using React, Node.js, and React Native. 
                            Constantly learning and experimenting, I aim to build applications that are not only functional but also meaningful and enjoyable to use.

                        </p>

                        <div className="flex flex-row sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact"  className="cosmic-button"> {" "}Get In Touch </a>
                            <a href={cv} className="px-6 py-2 rounded-full border border-primary hover:bg=primary/30 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div> 

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover rounded-3xl gap-4 flex items-start">
                            <div className=" p-3 rounded-full text-primary bg-primary/10">
                                <User></User>
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg"> Personal Profile </h3>
                                <p className="py-3 text-foreground/80"> Adaptable and detail-oriented, I combine analytical thinking from my engineering background with creativity in programming to build effective solutions. 
                                </p>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover rounded-3xl flex items-start gap-4">
                            <div className="p-3 rounded-full text-primary bg-primary/10">
                                <Code></Code>
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg"> Technical Skills </h3>
                                <p className="py-3 text-foreground/80"> Proficient in SQL, Python, C#, JavaScript, and modern frameworks like React, Node.js, and React Native. Experienced in designing databases and developing full-stack applications.         
                                </p>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover rounded-3xl flex items-start gap-4">
                            <div className="p-3 rounded-full  text-primary bg-primary/10">
                                <Briefcase></Briefcase>
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-lg"> Career Goals </h3>
                                <p className="py-3 text-foreground/80"> Eager to grow as a software developer by contributing to impactful projects, with a strong interest in database development and front-end technologies. 
                                </p>
                            </div>
                        </div>
                    
                    </div>   
                </div>
            </div>

        </section>
    );
}