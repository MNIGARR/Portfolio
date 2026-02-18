import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    //Frontend
    {name: "HTML/CSS", level: 95, category: "frontend"},
    {name: "React Native", level: 90, category: "frontend"},
    {name: "Tailwind CSS", level: 75, category: "frontend"},
    {name: "Next.JS", level: 85, category: "frontend"},
    {name: "React.JS", level: 85, category: "frontend"},
    //BAckend
    {name: "MSSQL", level: 70, category: "backend"},
    {name: "Node.JS", level: 70, category: "backend"},
    {name: "C#", level: 60, category: "backend"},
    {name: "C++", level: 65, category: "backend"},
    //Tools
    {name: "Git/GitHub", level: 70, category: "tools"},
    {name: "Figma", level: 65, category: "tools"},
    {name: "VS Code", level: 80, category: "tools"},
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory)
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary">
            <div className="container mx-auto max-w-5xl">
                <h3 className="text-3xl md:text-4x1 font-bold mb-12 text-cemter">
                    My <span className="text-primary">Skills</span>
                </h3>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button 
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full capitalize duration-300 transition-colors",
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground card-hover"
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 card-hover rounded-2xl shadow-2xs text-left mb-4">
                            <h3 className="font-semibold text-lg">{skill.name}</h3>

                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary/30">
                                    <div 
                                    className="bg-primary h-2 rounded-full animate-[grow_1.5s_ease_out"
                                    style={{width: skill.level + "%"}}
                                    />
                                    
                                </div>
                                
                                
                            </div>
                            <div className="text-right mt-3">
                                <span className="text-sm text-foreground/80">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
}