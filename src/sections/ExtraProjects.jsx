import React from 'react';

const ExtraProjects = () => {
    const extraProjects = [
        {
            title: "Neural Network",
            description: "This project is a simple neural network built from scratch to classify handwritten digits from the MNIST dataset.",
            technologies: [
                { name: "Python", icon: "/assets/python.svg" }
            ],
            category: "Machine Learning"
        },
        {
            title: "HTTP Server",
            description: "A lightweight HTTP server written in C that supports basic HTTP methods (GET and POST) and serves static files.",
            technologies: [
                { name: "C", icon: "/assets/c.png" }
            ],
            category: "Systems Programming"
        },
        {
            title: "Space Invaders",
            description: "A complete recreation of the classic Space Invaders arcade game built using Python and Pygame with modern graphics and sound effects.",
            technologies: [
                { name: "Python", icon: "/assets/python.svg" }
            ],
            category: "Game Development"
        },
        {
            title: "AI Video Summary",
            description: "Developed an AI-powered tool using Whisper that analyzes videos and generates comprehensive study guides based on the content.",
            technologies: [
                { name: "Python", icon: "/assets/python.svg" },
                { name: "React", icon: "/assets/react.svg" }
            ],
            category: "AI & Machine Learning"
        }
    ];

    return (
        <section className="w-full bg-black py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-mono text-green-400 mb-4">
                        Additional Projects
                    </h2>
                    <p className="text-lg font-mono text-gray-300 max-w-2xl mx-auto">
                        Exploring various domains through hands-on development and experimentation
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                    {extraProjects.map((project, index) => (
                        <div 
                            key={index}
                            className="group relative p-6 border border-green-500 rounded-lg bg-black hover:bg-gray-900/50 transition-all duration-300 hover:border-green-400 hover:shadow-lg hover:shadow-green-500/20"
                        >
                            {/* Category Badge */}
                            <div className="absolute top-4 right-4 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                                <span className="text-xs font-mono text-green-400">
                                    {project.category}
                                </span>
                            </div>

                            {/* Project Header */}
                            <div className="mb-4">
                                <h3 className="text-2xl font-mono text-green-400 mb-2 group-hover:text-green-300 transition-colors">
                                    {project.title}
                                </h3>
                                
                                {/* Technology Icons */}
                                <div className="flex items-center gap-2 mb-3">
                                    {project.technologies.map((tech, techIndex) => (
                                        <div 
                                            key={techIndex}
                                            className="flex items-center justify-center w-8 h-8 bg-gray-800 rounded-md border border-gray-700 group-hover:border-green-500/50 transition-all duration-300"
                                            title={tech.name}
                                        >
                                            <img 
                                                src={tech.icon} 
                                                alt={tech.name} 
                                                className="w-5 h-5 object-contain" 
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Project Description */}
                            <div className="relative">
                                <p className="font-mono text-gray-300 leading-relaxed text-sm group-hover:text-white transition-colors duration-300">
                                    {project.description}
                                </p>
                                
                                {/* Hover Effect Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"></div>
                            </div>

                            {/* Bottom Accent Line */}
                            <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-green-500 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
                        </div>
                    ))}
                </div>


            </div>
        </section>
    );
};

export default ExtraProjects;