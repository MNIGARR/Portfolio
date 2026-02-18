import { ArrowUpDown } from "lucide-react";

export const HomeSection = () => {
    return (
        <section 
            id="home" 
            className="relative min-h-screen flex flex-col items-center justify-center px-5"
        >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6 ">
                    <h1 className="md: text-5xl font-bold tracking-tight">
                        <span className="opacity-0  animate-fade-in"> Hi, I'm </span>
                        <span className="opacity-0 animate-fade-in-delay-1 text-primary"> Nigar </span>
                        <span className="opacity-0 animate-fade-in-delay-2 text-primary"> Mustafazada </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-foreground/80 max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I create clean and responsive web and mobile applications using React, Node.js, and React Native. With strong knowledge of SQL and database design, I bring together both the front-end and back-end to deliver complete solutions.
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>

                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-foreground/80 mb-2">Scroll</span>
                <ArrowUpDown className="h-5 w-5 text-primary"></ArrowUpDown>
            </div>

        </section>
    );
}