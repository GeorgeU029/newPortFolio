import React from 'react';

const WorkExperience = () => {
    return (
        <section className="c-space my-20" id="experience">
            <p className="text-3xl font-mono text-green-400 text-center mb-12">
                Work Experience
            </p>

            {/* Main Experience Grid - matching your About section layout */}
            <div className="grid xl:grid-cols-3 xl:grid-rows-3 md:grid-cols-2 grid-cols-1 gap-5">
                
                {/* Company Info - Left Column */}
                <div className="col-span-1 xl:row-span-3 p-6 border border-green-500 rounded-lg bg-black">
                    <div className="mb-6">
                        <h3 className="text-2xl font-mono text-green-400 mb-2">
                            FEAM Aero
                        </h3>
                        <p className="text-white font-mono text-sm mb-4">Miami, FL</p>
                        <div className="px-3 py-1 border border-green-500 rounded bg-green-500/10 w-fit">
                            <span className="text-green-400 font-mono text-sm">Current Position</span>
                        </div>
                    </div>

                    {/* Position Timeline */}
                    <div className="space-y-4 mb-6">
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                <h4 className="text-base font-mono text-white">
                                    Junior Software Developer
                                </h4>
                            </div>
                            <p className="text-gray-400 font-mono text-sm ml-5">
                                August 2025 – Present
                            </p>
                        </div>
                        
                        <div>
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-3 h-3 bg-gray-600 rounded-full"></div>
                                <h4 className="text-base font-mono text-white">
                                    Software Engineer Intern
                                </h4>
                            </div>
                            <p className="text-gray-400 font-mono text-sm ml-5">
                                May 2025 – August 2025
                            </p>
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                        <p className="text-lg font-mono text-green-400 mb-4">Tech Stack</p>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="flex flex-col items-center p-2 border border-gray-700 rounded bg-gray-800/30">
                                <img src="/assets/react.svg" alt="React" className="w-6 h-6 mb-1" />
                                <span className="font-mono text-xs text-white">React</span>
                            </div>
                            <div className="flex flex-col items-center p-2 border border-gray-700 rounded bg-gray-800/30">
                                <img src="/assets/python.svg" alt="Flask" className="w-6 h-6 mb-1" />
                                <span className="font-mono text-xs text-white">Flask</span>
                            </div>
                            <div className="flex flex-col items-center p-2 border border-gray-700 rounded bg-gray-800/30">
                                <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white font-bold text-xs mb-1">
                                    SQL
                                </div>
                                <span className="font-mono text-xs text-white">SQL</span>
                            </div>
                            <div className="flex flex-col items-center p-2 border border-gray-700 rounded bg-gray-800/30">
                                <img src="/assets/python.svg" alt="Python" className="w-6 h-6 mb-1" />
                                <span className="font-mono text-xs text-white">Python</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Metrics - Top Right */}
                <div className="xl:col-span-2 xl:row-span-1 p-6 border border-green-500 rounded-lg bg-black">
                    <p className="text-2xl font-mono text-green-400 mb-4">Impact Metrics</p>
                    <div className="grid grid-cols-3 gap-4">
                        <div className="text-center p-3 border border-gray-700 rounded bg-gray-900/50">
                            <div className="text-2xl font-mono text-green-400 mb-1">30%</div>
                            <div className="text-xs font-mono text-gray-300">Workflow Efficiency</div>
                        </div>
                        <div className="text-center p-3 border border-gray-700 rounded bg-gray-900/50">
                            <div className="text-2xl font-mono text-green-400 mb-1">1.5K+</div>
                            <div className="text-xs font-mono text-gray-300">Employees Impacted</div>
                        </div>
                        <div className="text-center p-3 border border-gray-700 rounded bg-gray-900/50">
                            <div className="text-2xl font-mono text-green-400 mb-1">6</div>
                            <div className="text-xs font-mono text-gray-300">Team Members</div>
                        </div>
                    </div>
                </div>

                {/* Achievements - Bottom Right */}
                <div className="xl:col-span-2 xl:row-span-2 p-6 border border-green-500 rounded-lg bg-black">
                    <p className="text-2xl font-mono text-green-400 mb-4">Key Achievements</p>
                    <div className="space-y-3">
                        <div className="p-3 border border-gray-800 rounded bg-gray-900/30">
                            <p className="font-mono text-white text-sm leading-relaxed">
                                Modernized legacy business operations with React state-managed components, Flask REST APIs, and optimized SQL schemas improving workflow efficiency by <span className="text-green-400 font-bold">30%</span> for <span className="text-green-400 font-bold">1,500+</span> employees.
                            </p>
                        </div>
                        <div className="p-3 border border-gray-800 rounded bg-gray-900/30">
                            <p className="font-mono text-white text-sm leading-relaxed">
                                Implemented dynamic React search interfaces and high-performance SQL queries reducing form processing time from <span className="text-green-400 font-bold">hours to minutes</span> across multiple departments.
                            </p>
                        </div>
                        <div className="p-3 border border-gray-800 rounded bg-gray-900/30">
                            <p className="font-mono text-white text-sm leading-relaxed">
                                Built reusable React component libraries, Flask authentication middleware, and automated test pipelines enhancing productivity for a <span className="text-green-400 font-bold">6 person</span> engineering team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkExperience;